# Lumen 5.8.0-pro — Selected Skills, Pi extensions & native images
# 已选 Skill、Pi 扩展与原生生图

2026-10-10 · LC-12～15

## 中文

Lumen 是 Obsidian 中的阅读与写作助手：读 EPUB、讨论选文、查找笔记，再编辑并确认保存结果。这个版本让你在同一界面中使用本机助手的更多能力，不必打开终端窗口。

- **Codex / Pi Skill**：查看并选中可信的独立指令型 Skill；发送前选择本轮方法。适合阅读分析与整理。需要脚本、附属文件或额外工具的 Skill 会明确提示不支持，不自动安装依赖。
- **Pi 工具扩展**：只加载已选资源，支持工具进度、结果、错误、网页来源和 RPC 确认/选择/输入/编辑。搜索扩展可以与 Lumen 的笔记工具同时使用。
- **Codex 原生生图**：仅在明确要求时生成。图片先私下预览，编辑并确认后才保存附件和带原文回跳的笔记；重复保存打开同一笔记，文件丢失不自动重生。没有 API 后备切换。
- 新能力默认关闭；设置和本轮选择分开。发送后选择复位，普通追问不继承联网、扩展或生图权限。资源入口变化后拒绝旧选择，并提示刷新。
- 修复窄侧栏按钮拥挤、设置选择后滚动跳动及 Pi 关闭搜索时的旧提示；显式 Pi 扩展轮次使用独立进程，减少迟到事件干扰。
- 保留现有阅读、笔记预览/确认/撤销、历史与引用回跳；旧 API 生图、白板和员工使用原配置。

### 条件与实际验证

桌面 Obsidian，已安装并配置登录的 Codex CLI 或 Pi；模型/账号须支持对应能力。实际验收：macOS、Obsidian 1.14.4、Codex CLI 0.160.1 / gpt-6-luna、Pi 1.1.0 / openrouter/openai/gpt-6-luna。搜索还需网络；Pi 搜索需兼容的已安装扩展。调用使用对应账号用量，无需前台开启 CLI。不需要为这条对话路径另外配置 MCP。

使用原创 EPUB、独立测试 Vault 与原创扩展，真实走通选文提问、Skill、联网搜索、笔记编辑确认、生图预览/保存、退出重开、普通追问与原文回跳。35 个自动测试入口和 10 个本机协议测试通过。

### 已知范围

Pi 扩展是可信本机代码，**不是沙箱**；扩展自己直接写文件，不一定受 Lumen 的笔记确认保护。入口指纹不检查整个导入依赖树。纯终端界面、部分动态工具注册与复杂 Skill 不保证支持。复杂自然语言可用 `/search`、`/tools` 或本轮按钮明确授权。

原生图片本版支持 PNG 生成，不含原生编辑；预览缓存位于 Vault 外，删除对话不会自动清理。已发送历史可恢复，未发送输入不跨插件重载恢复。Windows、Linux、实体移动端、所有模型/供应商与任意第三方扩展未实测。

### 升级

备份插件目录，**仅替换 `main.js`、`manifest.json`、`styles.css`**；保留 `data.json`、阅读状态及历史，然后重载 Obsidian。ZIP 附中英文指南、第三方声明和校验和。分发包不含个人配置、登录文件、API key、书籍、笔记或验收运行记录。

## English

Lumen is a reading and writing assistant in Obsidian. Read EPUBs, discuss passages, find notes, then edit and confirm saved results. This release brings more local assistant capabilities to that workspace without a foreground terminal.

- **Codex / Pi Skills**: inspect and select trusted self-contained instruction Skills. Choose a method for the next message. Script, supporting-file and extra-tool dependencies are reported as unsupported, not installed automatically.
- **Pi tool extensions**: load selected entries only. Show progress, results, errors, web sources and RPC confirm/select/input/editor dialogs. Search extensions can work alongside Lumen note tools.
- **Native Codex images**: generate only on explicit request. Preview privately, edit and confirm before saving an attachment and source-linked note. Repeated saves open the same note; missing media is not regenerated. No API fallback.
- New settings default to off. One-message selections reset after sending; ordinary follow-ups inherit no search, extension or image permission. Changed entries require a refresh/reselection.
- Fixed crowded controls in narrow docks, settings scroll jumps and the obsolete Codex-only disabled-search notice. Explicit Pi extension turns use separate owned processes to reduce late-event interference.
- Existing reading, note preview/confirmation/undo, history and source links remain. API images, Canvas and employees retain their configuration.

### Requirements and acceptance

Desktop Obsidian and installed/configured/signed-in Codex CLI or Pi. The account/model must support the requested capability. Tested: macOS, Obsidian 1.14.4, Codex CLI 0.160.1 / gpt-6-luna, Pi 1.1.0 / openrouter/openai/gpt-6-luna. Search needs internet; Pi search also needs a selected compatible extension. Calls use the relevant account allowance. No foreground CLI window or extra MCP configuration is required for this chat route.

Original EPUBs, an isolated test Vault and original resources verified the real selected-passage → Skill/search → edited note → image preview/save → quit/reopen → follow-up → source-return flow. All 35 automated entrypoints and 10 local protocol tests passed.

### Limits

Pi extensions are trusted local code, **not a sandbox**. Their own direct writes may bypass Lumen note confirmation. Entry fingerprints do not audit the full import dependency tree. Terminal-only UI, some dynamic tool registrations and complex Skills are not guaranteed. Use `/search`, `/tools` or one-turn controls for conservative intent detection.

Native images currently support PNG generation, not native editing. Previews stay outside the Vault and chat deletion does not clean the cache automatically. Sent history restores; unsent input does not survive plugin reload. Windows, Linux, physical mobile devices, all model/provider combinations and arbitrary third-party extensions remain unverified.

### Upgrade

Back up the plugin folder. Replace **only `main.js`, `manifest.json`, `styles.css`**, keep settings/reading state/history, then reload Obsidian. The ZIP includes a bilingual guide, third-party notices and checksums. It excludes personal settings, login files, API keys, books, notes and acceptance runtime records.
