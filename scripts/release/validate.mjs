import { readFile, lstat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';
import { Script } from 'node:vm';
import { pathToFileURL } from 'node:url';

export const REPOSITORY = 'leoyang1984/lumen-public';
export const ASSETS = ['main.js', 'manifest.json', 'styles.css'];
export const sha256 = value => createHash('sha256').update(value).digest('hex');
export const fail = message => { throw new Error(message); };

/** Report the category only, never a matched credential or personal value. */
export function inspectPublicBytes(name, bytes) {
    const text = bytes.toString('utf8');
    const rules = [
        ['private key', /-----BEGIN (?:RSA |EC |DSA |OPENSSH |PGP )?PRIVATE KEY/],
        ['credential', /\b(?:sk-(?:proj-|ant-)?[A-Za-z0-9_-]{20,}|gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{30,}|AKIA[A-Z0-9]{16}|xox[baprs]-[A-Za-z0-9-]{15,})/],
        ['personal path', new RegExp('/(?:Users|home|Volumes)/[^\\s"\'<>]+')],
        ['credential URL', /https?:\/\/[^\s/:]+:[^\s/@]{6,}@/],
    ];
    for (const [category, pattern] of rules) if (pattern.test(text)) fail(`${name}: ${category} requires review`);
    if (/sourceMappingURL=|sourceURL=/.test(text) && name === 'main.js') fail('Runtime must not contain source maps');
}

export async function regularFile(root, name) {
    for (const part of name.split('/')) if (!part || part === '..' || part === '.') fail('Invalid release path');
    let path = root;
    for (const part of name.split('/')) {
        path = join(path, part);
        if ((await lstat(path)).isSymbolicLink()) fail(`${name}: symlink refused`);
    }
    if (!(await lstat(path)).isFile()) fail(`${name}: regular file required`);
    return readFile(path);
}

export async function validateBundle(root = process.cwd()) {
    const plan = JSON.parse(await regularFile(root, 'release.json'));
    if (!/^\d+\.\d+\.\d+$/.test(plan.version)) fail('Stable semantic version required');
    if (typeof plan.title !== 'string' || !plan.title.startsWith(`LUMEN ${plan.version} — `) || plan.title.length > 180 || /[\r\n]/.test(plan.title)) fail('Invalid release title');
    const notesFile = `docs/RELEASE_NOTES_${plan.version}.md`;
    if (plan.notesFile !== notesFile || plan.prerelease !== false) fail('Invalid stable release metadata');
    if (Object.keys(plan.sha256 ?? {}).sort().join() !== [...ASSETS].sort().join()) fail('Exactly three runtime assets required');
    const files = new Map();
    for (const name of ASSETS) {
        const bytes = await regularFile(root, name);
        if (!bytes.length || bytes.length > 20 * 1024 * 1024) fail(`${name}: invalid file size`);
        if (!/^[a-f0-9]{64}$/.test(plan.sha256[name]) || sha256(bytes) !== plan.sha256[name]) fail(`${name}: checksum mismatch`);
        inspectPublicBytes(name, bytes); files.set(name, bytes);
    }
    const manifest = JSON.parse(files.get('manifest.json'));
    const versions = JSON.parse(await regularFile(root, 'versions.json'));
    if (manifest.id !== 'lumen' || manifest.version !== plan.version || versions[plan.version] !== manifest.minAppVersion) fail('Manifest/version mapping mismatch');
    try { new Script(files.get('main.js').toString('utf8')); } catch { fail('Invalid compiled plugin syntax'); }
    const notes = await regularFile(root, notesFile);
    inspectPublicBytes(notesFile, notes);
    if (sha256(notes) !== plan.notesSha256 || !notes.toString().startsWith(`# ${plan.title}\n`) || !/## 中文/.test(notes) || !/## English/.test(notes)) fail('Reviewed bilingual release notes required');
    const sums = ASSETS.map(name => `${plan.sha256[name]}  ${name}`).join('\n');
    const body = `${notes.toString().trim()}\n\n### SHA-256\n\n\`\`\`text\n${sums}\n\`\`\`\n`;
    return { plan, files, body };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
    validateBundle().then(({ plan }) => console.log(`Validated LUMEN ${plan.version}: version, notes, syntax, privacy and three SHA-256 hashes`))
        .catch(error => { console.error(error.message); process.exitCode = 1; });
}
