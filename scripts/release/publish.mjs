import { appendFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { validateBundle, ASSETS, REPOSITORY, sha256, fail } from './validate.mjs';

export function githubClient(token, transport = fetch) {
    if (!token) fail('GitHub Actions token required');
    return async (method, path, body, binary = false) => {
        const url = path.startsWith('https://uploads.github.com/') ? path : `https://api.github.com${path}`;
        const response = await transport(url, {
            method,
            headers: { authorization: `Bearer ${token}`, accept: binary ? 'application/octet-stream' : 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28', 'content-type': Buffer.isBuffer(body) ? 'application/octet-stream' : 'application/json' },
            body: body === undefined ? undefined : Buffer.isBuffer(body) ? body : JSON.stringify(body),
        });
        if (response.status === 404 && method === 'GET') return undefined;
        if (!response.ok) fail(`GitHub ${method} ${new URL(url).pathname}: HTTP ${response.status}`);
        if (response.status === 204) return;
        return binary ? Buffer.from(await response.arrayBuffer()) : response.json();
    };
}

const compare = (a, b) => {
    const x = a.split('.').map(Number), y = b.split('.').map(Number);
    for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return Math.sign(x[i] - y[i]);
    return 0;
};

/** Drafts can resume. Published releases are verified, never edited or overwritten. */
export async function publishRelease({ root = process.cwd(), repository, commit, api, summaryFile }) {
    if (repository !== REPOSITORY || !/^[a-f0-9]{40}$/.test(commit ?? '')) fail('Expected public repository and exact commit required');
    const { plan, files, body } = await validateBundle(root);
    const base = `/repos/${repository}`, tag = `v${plan.version}`;
    let release = await api('GET', `${base}/releases/tags/${tag}`);
    if (!release) {
        const recent = await api('GET', `${base}/releases?per_page=100`);
        release = recent?.find(item => item.tag_name === tag);
    }
    const latest = await api('GET', `${base}/releases/latest`);
    if (latest && /^v\d+\.\d+\.\d+$/.test(latest.tag_name) && compare(plan.version, latest.tag_name.slice(1)) < 0) fail('Refusing to publish an older stable version');
    if (!release && latest?.tag_name === tag) fail('Inconsistent existing release metadata');

    async function checkTag() {
        let ref = await api('GET', `${base}/git/ref/tags/${tag}`);
        if (!ref) return false;
        let object = ref.object;
        for (let i = 0; object?.type === 'tag' && i < 4; i++) object = (await api('GET', `${base}/git/tags/${object.sha}`))?.object;
        if (object?.type !== 'commit' || object.sha !== commit) fail('Release tag does not point to this reviewed commit');
        return true;
    }
    const tagged = await checkTag();
    if (!release) {
        release = await api('POST', `${base}/releases`, { tag_name: tag, target_commitish: commit, name: plan.title, body, draft: true, prerelease: false, make_latest: 'false' });
    }
    if (release.tag_name !== tag || release.name !== plan.title || release.body !== body || release.prerelease || !Number.isSafeInteger(release.id)) fail('Existing release differs from reviewed content');
    if (release.draft && release.target_commitish !== commit) fail('Draft target differs from reviewed commit');
    if (!release.draft && !tagged) fail('Published release has no matching tag');

    async function assetMatches(asset, name) {
        if (!Number.isSafeInteger(asset.id) || asset.size !== files.get(name).length || asset.state !== 'uploaded') return false;
        const bytes = await api('GET', `${base}/releases/assets/${asset.id}`, undefined, true);
        return !!bytes && sha256(bytes) === plan.sha256[name];
    }
    async function assets() {
        const list = await api('GET', `${base}/releases/${release.id}/assets?per_page=100`);
        if (!Array.isArray(list) || list.some(asset => !ASSETS.includes(asset.name)) || new Set(list.map(asset => asset.name)).size !== list.length) fail('Unexpected or duplicate release assets');
        return list;
    }
    for (const name of ASSETS) {
        const existing = (await assets()).find(asset => asset.name === name);
        if (existing && await assetMatches(existing, name)) continue;
        if (!release.draft) fail(`${name}: published asset mismatch; no changes made`);
        if (existing) await api('DELETE', `${base}/releases/assets/${existing.id}`);
        await api('POST', `https://uploads.github.com/repos/${repository}/releases/${release.id}/assets?name=${encodeURIComponent(name)}`, files.get(name));
    }
    async function verifyAssets() {
        const list = await assets();
        if (list.length !== ASSETS.length) fail('Release asset set is incomplete');
        for (const name of ASSETS) if (!await assetMatches(list.find(asset => asset.name === name), name)) fail(`${name}: downloaded checksum mismatch`);
    }
    await verifyAssets();
    if (release.draft) {
        // Every byte is verified while the release is still private to maintainers.
        await api('PATCH', `${base}/releases/${release.id}`, { draft: false, make_latest: 'true' });
    }
    release = await api('GET', `${base}/releases/tags/${tag}`);
    if (!release || release.draft || release.prerelease || release.body !== body || release.name !== plan.title) fail('Published release readback failed');
    if (!await checkTag()) fail('Published tag missing');
    if ((await api('GET', `${base}/releases/latest`))?.tag_name !== tag) fail('Latest release readback failed');
    await verifyAssets();
    const url = `https://github.com/${repository}/releases/tag/${tag}`;
    console.log(`Verified ${url}: three downloaded assets match reviewed SHA-256 hashes`);
    if (summaryFile) await appendFile(summaryFile, `## LUMEN ${plan.version}\n\n[Published release](${url})\n\nThree runtime assets downloaded and SHA-256 verified.\n`);
    return url;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
    publishRelease({ repository: process.env.GITHUB_REPOSITORY, commit: process.env.GITHUB_SHA,
        api: githubClient(process.env.GH_TOKEN), summaryFile: process.env.GITHUB_STEP_SUMMARY })
        .catch(error => { console.error(error.message); process.exitCode = 1; });
}
