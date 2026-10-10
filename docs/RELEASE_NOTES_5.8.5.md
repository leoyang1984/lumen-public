# Lumen 5.8.5 — 保存位置 / Save locations

## 中文

- 七项保存位置集中在“阅读与保存”：EPUB、阅读笔记、Codex 图片、图片说明、粘贴/上传图片、API 图片、对话导出。
- 每项支持默认、自定义文件夹、笔记库根目录；选择已有文件夹或填写新目录，点击应用才生效。默认配置可以直接使用。
- 沿用旧 API 图片目录。修改目录不会搬动旧文件；旧笔记、图片、历史和回跳继续按实际路径使用。
- 新目录在实际保存时创建；空路径、越界路径、内部目录、文件冲突会提示错误。保存失败保留草稿或预览，不另选目录，不覆盖同名文件。
- 阅读笔记可单次换目录或追加已有笔记。原生图片、阅读笔记与导出确认显示保存目标；全局修改不改变打开的保存确认。
- 对话导出默认 `Reading/Conversations`；已有根目录导出保持原样。API 服务页链接到统一位置设置。

验证：36 个自动回归入口、10 项协议测试、类型检查、构建和打包通过。macOS / Obsidian 1.14.4 独立测试库完成配置、恢复、原创 EPUB 导入、原话保存、真实 Pi 回答确认、导出及引用回跳。API 图片与原生 PNG 存储使用原创模拟数据。Windows、Linux、移动端界面及全部真实 API 生图服务未验证。

升级先备份，仅替换 main.js、manifest.json、styles.css。保留配置、历史与阅读数据，重载插件或重新打开 Obsidian。没有自动迁移旧文件。

## English

Seven Vault-relative save locations are grouped under Reading and saving: imported EPUBs, reading notes, native Codex images, image notes, uploads, API images and conversation exports. Choose Default, Custom folder or Vault root, then Apply. Existing API image directories and saved-file references are retained. Changes affect new files only.

Folders are created on actual saves. Invalid paths and file conflicts are reported; failed saves retain drafts/previews and never fall back to another destination. Reading-note confirmations can choose another folder or append to a note. Open confirmations retain their displayed destination. Conversation exports default to Reading/Conversations; old exports remain in place.

Verification: 36 regression entry points, 10 protocol tests, TypeScript, production build and packaging passed. An isolated original-only macOS/Obsidian 1.14.4 Vault covered configuration/reload, EPUB import, notes, a live Pi answer, confirmed save, export and source return. API image routes and native PNG storage used deterministic original fixtures. Other OS/device combinations and all live API image providers remain unverified.

Back up and replace only main.js, manifest.json and styles.css. Keep settings, history and reading state. Reload Lumen or reopen Obsidian. Existing files are not moved automatically.
