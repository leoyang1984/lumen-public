# Lumen Pro v5.6.0-pro — EPUB Reading / EPUB 阅读

## 中文

Lumen 是 Obsidian 中的 AI 阅读与写作助手。本版把 EPUB 阅读加入笔记库：读书、提问、记录理解与找回原文可以在同一个工作区完成。

### 新增与改进

- 打开或导入无 DRM、可重排 EPUB，查看目录、调整字号，保存阅读进度。
- 单栏滚动／双栏分页；窄空间自动回退单栏。助手可收放，宽度沿用 Obsidian 原生侧栏调整。
- 左右键翻章；上下键、PageUp/PageDown、按钮与双栏滚轮在同一章阅读。输入框和选区不会误触导航。
- 选中原文向现有 API、Codex 或 pi 助手提问，追问保留来源；只发送选文和有限邻近文字。
- 划线、保存自己的原话、编辑并确认 AI 整理结果，写入或追加 Markdown；笔记及对话导出附带原文回跳。
- 重启后恢复阅读与历史；阅读状态损坏时可选择有效备份并确认恢复，原始状态文件先归档保留。
- 修复双栏设置被重置、选文操作条引发重排、保存成功却出现失败反馈、布局切换时锚点偏移。

### 要求、验证与限制

- manifest 声明最低 Obsidian 0.15.0；本轮实际验收为 **macOS + Obsidian 1.14.4**，不代表所有旧版本都已验证。
- 离线阅读不需要 AI。对话选择 API，或已安装并登录／配置的本机 **Codex CLI 0.160.1 / pi 1.1.0**。不必把 CLI 的终端窗口开在前台；模型请求仍会使用所选服务。
- 已完成原创样书的阅读、Codex/pi 真实问答与追问、确认保存、导出、重开续谈、引用回跳和显式恢复。自动回归与正式包桌面复验通过。
- Windows、Linux、实体移动设备、真实 API 供应商矩阵未实机验收；固定版式、DRM、PDF、第三方 Skill/Extension 继承不在此次范围。

### 安装或升级

下载 `lumen-5.6.0-pro.zip`，把其中 `lumen` 文件夹放入笔记库的 `.obsidian/plugins/`。也可只下载本 Release 的 `main.js`、`manifest.json`、`styles.css`，放入 `.obsidian/plugins/lumen/`。

升级前备份现有插件目录，仅替换这三个文件。**保留 `data.json`、`reader-state.v1.json*` 和历史文件**，随后重新加载插件或重启 Obsidian。ZIP 内附中英文阅读指南、第三方声明与校验和。发布包不包含个人配置、API key、书籍、笔记或测试日志。

原有 BRAT 用户可继续使用 `leoyang1984/lumen-public`。

---

## English

Lumen is an AI reading and writing assistant for Obsidian. This release adds EPUB reading to your Vault, so reading, discussion, notes and returning to the source stay in one workspace.

### Changes

- Open or import DRM-free, reflowable EPUBs. Use contents, text size and saved reading positions.
- Choose scrolling single-column or paginated two-column reading. Narrow panes fall back to one column. Toggle and resize the native assistant dock.
- Left/right arrows change chapters. Up/down, PageUp/PageDown, page buttons and the two-column wheel stay within the chapter. Typing and selections do not trigger navigation.
- Ask the existing API, Codex or pi assistant about selected text. Follow-ups retain the source; requests send only the passage and bounded neighbouring text.
- Highlight passages, save your words, and edit AI output before confirming Markdown creation or append. Notes and exported conversations link back to the text.
- Resume reading and history after a restart. Explicit recovery offers validated backups and archives existing state files first.
- Fix spread resets, selection toolbar reflow, misleading save failures and anchor drift during layout changes.

### Requirements and validation

- The manifest declares Obsidian 0.15.0 as the minimum. Actual acceptance used **macOS with Obsidian 1.14.4**, not every earlier version.
- Offline reading needs no AI. Chat uses an API provider or an installed, signed-in/configured **Codex CLI 0.160.1 / pi 1.1.0**. No foreground CLI terminal is needed; requests still use the selected model service.
- Original-book reading, real Codex/pi dialogue, confirmed saves, export, restart continuation, source return and explicit recovery passed. Automated regressions and a production-bundle desktop check passed.
- Windows, Linux, physical mobile devices and the live API provider matrix remain unverified. Fixed-layout, DRM, PDF and third-party Skill/Extension inheritance are outside this release.

### Install or update

Download `lumen-5.6.0-pro.zip` and place its `lumen` folder in `.obsidian/plugins/` in your Vault. Alternatively, place the three release files `main.js`, `manifest.json` and `styles.css` in `.obsidian/plugins/lumen/`.

Back up the installed plugin first. Replace only those three files. **Keep `data.json`, `reader-state.v1.json*` and history files**, then reload Lumen or restart Obsidian. The ZIP includes a bilingual reading guide, third-party notices and checksums. Distribution excludes personal settings, credentials, books, notes and test logs.

Existing BRAT users can continue using `leoyang1984/lumen-public`.
