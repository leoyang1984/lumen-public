# Lumen 5.8.4 — 更清楚的界面与设置 / Clearer UI and settings

2026-10-10 · Includes changes since public 5.8.0-pro / 包含公开版 5.8.0-pro 之后的改动

## 中文

Lumen 是 Obsidian 中的 EPUB 阅读、AI 对话、笔记与白板助手。本版整理常用操作与设置，取消订阅激活，保留现有 API / Codex / pi 连接。

### 新变化

- 输入框使用统一工具栏。联网可直接开关；生图、Skill、扩展归入工具菜单。历史与新对话有明确入口，对话导出和诊断日志分开。
- 联网设置与输入框共享持久开关，连续追问、新对话和重启后仍保留。开启允许按需搜索；普通回答不强制搜索。明确搜索、否定联网、引号与本地笔记检索有分别处理。
- 设置按七个任务分组，每次只显示一组。API 服务集中管理文字模型、图片识别与 API 生图，默认折叠并显示配置填写状态。Codex 原生能力仍在助手能力中。
- 可展开当前讨论选文；原话和 AI 草稿分别标记；保存前显示字段与目标位置。保存后直接打开已有笔记。发送受阻时保留文字并提供下一步入口。
- 移除激活码、机器码、Pro 标签和付费功能／员工数量门槛。预算、并发、文件权限、预览确认及撤销继续生效。版本不再使用 Pro 后缀；分发协议未修改。

### 升级须知

先备份，仅替换 `main.js`、`manifest.json`、`styles.css`；保留 `data.json`、阅读状态、历史和员工定义，重载 Lumen 或重开 Obsidian。

**所有已有自主员工首次升级后保持暂停，包括此前正常工作的员工。** 到“白板与自动化”检查配置并确认恢复；也可以保持暂停。确认成功保存后才放开自动任务，保存失败继续暂停。新员工默认关闭自主工作。此操作可能恢复监控、定时与补跑，按原预算和权限使用模型。

### 条件与验证

阅读可离线使用。AI 问答需要你自己的 API，或已安装、配置并登录的 Codex CLI / pi；CLI 不必前台开启，直接对话不需要额外 MCP。前序实际验证为 macOS、Obsidian 1.14.4、Codex CLI 0.160.1、pi 1.1.0；模型/账号须支持相应能力，这些不是强制版本锁。

5.8.4 类型检查、生产构建、包白名单和隐私检查通过。本轮未运行自动测试、真实模型请求或桌面验收。前一轮 5.8.3 的阅读保存集中验收、真实 Pi 追问及八组针对性测试通过；不能视为本轮自动任务迁移已验收。API 表单、升级确认、保存失败与触发边界，以及完整跨平台回归仍待验证。

Pi 通用搜索需要兼容第三方扩展，推荐评估仍待完成。Pi 扩展不是沙箱，其直接文件操作未必经过 Lumen 确认；复杂 Skill 和终端交互不保证兼容。其他系统、实体移动设备与所有服务商组合未完整实测。原生 Codex 图片支持 PNG 生成，不含原生编辑；未发送输入不保证跨重载恢复。

分发仅含运行文件、指南、第三方声明及校验和，不含登录文件、API key、个人配置、笔记、书籍或测试 Vault。

## English

Lumen is an EPUB reader, AI chat, note and Canvas assistant inside Obsidian. This release organizes everyday controls and settings, removes subscription activation, and keeps API/Codex/pi connections.

- One composer toolbar; visible search, tools for images/Skills/extensions, distinct history/new-chat actions. Conversation export is separate from diagnostics.
- One persistent search switch shared by settings and the composer. It survives follow-ups, new chats and reopening. Search is allowed as needed; ordinary replies need not search. Explicit intent, negation, quoted text and local retrieval receive separate handling.
- Seven task-based settings groups. API services groups text, vision and API images with collapsed sections and configuration-state labels. Native Codex capabilities remain under Assistant capabilities.
- Expand the pinned passage; distinguish original words from AI drafts; edit and inspect the save destination. Saved results open existing notes. Blocked sends retain input and offer a next action.
- Activation codes, machine codes, Pro badges and paid/count gates are removed. Budgets, concurrency, permissions, preview/confirmation and undo remain. Version 5.8.4 drops the Pro suffix; distribution terms are unchanged.

### Upgrade

Back up first. Replace only `main.js`, `manifest.json`, `styles.css`, preserving settings, reading state, history and employee definitions. Reload Lumen or reopen Obsidian.

**All existing autonomous employees remain paused on the first upgrade, including previously active ones.** Review and confirm them under Canvas and automation, or keep them paused. Automatic permission opens only after confirmation is saved; failed saves keep it paused. New employees retain opt-in autonomy. Resuming may register watchers, schedules and catch-up tasks under existing budgets and permissions.

### Requirements and verification

Reading works offline. AI requires your own API or an installed/configured/signed-in Codex CLI/pi. No foreground terminal or extra MCP setup is needed for direct chat. Earlier real acceptance used macOS, Obsidian 1.14.4, Codex CLI 0.160.1 and pi 1.1.0 with capable accounts/models; these are tested versions, not exact locks.

5.8.4 passed TypeScript, production build, package allowlist and privacy checks. No automated tests, desktop acceptance or real model requests ran for the latest batch. The previous 5.8.3 batch passed focused reading/save acceptance, a real Pi follow-up and eight targeted suites; that does not validate the latest upgrade migration. API forms, upgrade confirmation, persistence/trigger boundaries and full cross-platform regression remain pending.

Pi search requires a compatible third-party extension; recommendations remain pending. Extensions are not sandboxed and their direct writes may bypass Lumen confirmation. Complex Skills and terminal-only interactions are not guaranteed. Other OS/device/provider combinations remain unverified. Native Codex images support PNG generation, not native editing; unsent input may not survive reload.

Distribution includes runtime files, guide, notices and checksums only. It excludes personal configuration, API keys, login files, notes, books and test Vaults.
