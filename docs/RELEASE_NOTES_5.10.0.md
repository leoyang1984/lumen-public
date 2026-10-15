# Lumen 5.10.0 — Antigravity 对话与原生生图 / Antigravity chat and native images

## 中文

- **本机 Antigravity（agy）连接**：现可在“连接”中选择已安装、登录的 agy，进行侧栏问答、笔记与 EPUB 选区讨论、连续追问、受控笔记检索与修改，以及 EPUB 翻译。无需保持终端窗口打开。
- **Antigravity 原生文生图**：在“助手能力”中开启“Antigravity 生图”（默认关闭），从对话工具菜单选择“生成配图”或明确要求生成图片。先预览，确认后才保存 PNG 附件与说明笔记，不回退到 API 生图。
- **生图后保持对话连接**：生图使用独立的一次性进程，保留普通对话的进程和上下文。完成、失败或取消图片请求后，可直接继续对话；取消后立即发送也会等待清理完成。
- **助手名称与保存归属正确**：生图开关随当前助手显示 Codex 或 Antigravity；图片确认绑定实际来源助手及当前讨论，避免跨连接保存。
- **CLI 兼容性修正**：包含 5.9.1 对新版 Codex/pi 的兼容修正，不再按固定版本号拒绝连接，改为检查所需协议能力。
- **已有功能保留**：整书翻译、章节范围、术语表、双语对照、标准 EPUB 导出和现有 API／Canvas 工作流继续提供。

### 使用与升级

BRAT 仓库：`leoyang1984/lumen-public`。手动安装只下载 `main.js`、`manifest.json`、`styles.css`，放入 `.obsidian/plugins/lumen/`。升级前备份，只替换这三个运行文件，保留 `data.json`、阅读状态、翻译任务和对话历史，再重载 Lumen。GitHub 自动生成的 Source code 压缩包不是插件安装包。

安装并登录 agy 后，选择“连接 → 本机 Antigravity（agy）”。模型留空时使用 CLI 默认模型。原生生图须另行开启并明确请求，当前支持文生图，不支持参考图编辑；原生联网、Skill、扩展和图片输入暂未开放。移动端继续使用 API，模型额度由 CLI 账号决定。

### 验证

42 个自动测试文件、TypeScript 检查与生产构建通过。本机实测包括 agy 问答、追问、受控读取、停止／重连、真实 1024×1024 生图及“对话 → 生图 → 直接追问”连续性；Chromium 验证 JPEG 转 PNG 预览。其他操作系统、真实移动设备与所有模型账号组合尚未实测。

## English

- **Local Antigravity (agy)**: select an installed, authenticated agy under Connection for sidebar chat, note/EPUB passages, followups, governed note retrieval and confirmed changes, and EPUB translation. No foreground terminal is required.
- **Native Antigravity text-to-image**: opt in under Assistant capabilities, choose Generate an image in the composer Tools menu or explicitly request an image. Review privately and confirm before saving a PNG attachment and note. There is no API fallback.
- **Chat stays connected after images**: one-use image workers retain the ordinary chat process and context. Continue directly after completion, failure or cancellation; immediate followups wait for worker cleanup.
- **Correct assistant names and save scope**: image switches show Codex or Antigravity according to the selected connection, and confirmation is bound to the originating assistant and conversation.
- **CLI compatibility**: includes the 5.9.1 fix for updated Codex/pi installations. Connections validate required protocol capabilities instead of rejecting an exact CLI version mismatch.
- **Existing features retained**: full-book translation, chapter selection, glossary, aligned bilingual reading, standard EPUB export and existing API/Canvas workflows remain available.

### Use and upgrade

Use `leoyang1984/lumen-public` in BRAT. Manual installation requires only `main.js`, `manifest.json` and `styles.css` in `.obsidian/plugins/lumen/`. Back up and replace those three runtime files, retain settings, reading state, translation tasks and chat history, then reload Lumen. GitHub-generated Source code archives are not plugin installation packages.

Install and authenticate agy, then select Local Antigravity (agy) under Connection. An empty model uses the CLI default. Native images are separately opt-in and require an explicit request. This integration supports text-to-image, not reference-image edits; native web search, Skills, extensions and image input are unavailable. Mobile retains API. CLI account quota applies.

### Validation

42 automated test files, TypeScript and production build passed. Live macOS agy checks covered chat, followups, governed reads, stop/reconnect, a real 1024×1024 image and chat → image → direct followup continuity. Chromium verified JPEG-to-PNG previews. Other operating systems, physical mobile devices and all model/account combinations remain unverified.
