# LUMEN 5.11.0 — Pele 图表主题、Codex 推理强度与 CLI 识图 / Pele themes, Codex reasoning controls and CLI image input

## 中文

- **Pele Mermaid 图表与主题**：聊天中的 Mermaid 代码块使用 Pele 预览，提供源码切换、复制、缩放、平移与重置。内置 Auto 和 Paper：Auto 默认继承 Obsidian 字体与配色，Paper 保持暖白纸张与深墨色。主题切换即时作用于已有图表，设置持久保存；样式仅作用于 LUMEN，不修改原生 Mermaid 或其他插件的图表。
- **Codex 模型与推理强度分开选择**：从已安装 CLI 动态获取模型及支持的档位。在顶栏或连接设置中选择默认、轻量、中等、高、极高、最大；按模型记住选择，仅改变强度保留会话。移除固定 low 覆盖，请求详情区分请求值与确认生效值。Ultra 暂时禁用并显示说明，尚未接入子 Agent 委派。
- **直接发送图片提问**：粘贴、上传或引用图片后发送问题。Codex 和支持视觉输入的 Pi 模型使用原生图片输入，不需要开启“图片生成”、联网或 MCP。AGY 当前流式接口只接受文本，使用已配置的 LUMEN 视觉通道解析后转交，并标明来源；需要有效的视觉 API 地址、密钥和模型。
- **多图与续聊**：每次最多 4 张 PNG/JPG/WEBP/GIF，单张不超过 10MB、总计不超过 20MB。支持继续追问；线程重建时在同一限制内恢复最近附件，历史只保存引用和内容指纹，不保存 base64。图片丢失、内容改变、模型不支持或视觉接口不可用时显示具体提示。
- **修复与兼容**：修复较长 Mermaid 生成提示词被误判为读取图片；支持较大的 Pi 图片协议帧；取消 Codex 图片请求会清理临时副本。保留现有 API、工具确认、MCP、阅读与 Canvas 工作流。CLI 聊天不自动扫描当前笔记里的图片，请先附加目标图片。

### 使用与升级

BRAT 仓库：`leoyang1984/lumen-public`。手动安装只需下载 `main.js`、`manifest.json`、`styles.css` 并放入 `.obsidian/plugins/lumen/`。升级前备份，替换这三个运行文件，保留 `data.json`、阅读状态、翻译任务和聊天历史，随后重新加载 LUMEN。

图表主题位于 **设置 → LUMEN → 高级 → 图表主题**；Codex 模型与强度位于聊天顶部连接菜单及连接设置。

### 验证范围

49 个自动化测试入口、18 项模型设置和 39 项 Pele 浏览器检查、类型检查及生产构建通过。真实 Codex 与 Pi 的多图识别、连续追问和重连恢复通过，用户已确认本地 Obsidian 中图片提问可用。AGY 视觉转接通过自动化测试，未实测真实视觉服务；Windows/Linux 和移动真机尚未验证。独立 SVG 导出与 Ultra 委派不包含在本次交付中。

## English

- **Pele Mermaid previews and themes**: View Mermaid fences in chat with source/copy controls, zoom, pan and reset. Auto inherits Obsidian fonts and colors; Paper keeps a warm paper palette in either appearance mode. Theme changes update existing previews and persist. Styles are scoped to LUMEN, leaving native Mermaid and other plugins' diagrams unchanged.
- **Separate Codex model and reasoning controls**: Discover models and supported efforts from the installed CLI. Choose Default, low, medium, high, xhigh or max in the chat header or connection settings. Preferences are remembered per model; effort-only changes preserve the conversation. Removes the forced low override and records requested versus confirmed effort. Ultra remains disabled pending subagent delegation support.
- **Ask about attached pictures**: Paste, upload or reference an image and send a question. Codex and vision-capable Pi models receive native image inputs without enabling image generation, web search or MCP. AGY streaming currently accepts text only, so LUMEN passes evidence from its configured vision channel with explicit attribution; a working vision API URL, key and model are required.
- **Multiple images and follow-ups**: Up to four PNG/JPG/WEBP/GIF files per request, 10MB each and 20MB total. Continue discussing images and restore recent attachments within these limits when rebuilding a thread. The journal stores references and fingerprints, not base64. Missing/changed files, unsupported models and unavailable vision services produce specific messages.
- **Fixes and compatibility**: Stops long Mermaid-generation prompts from being mistaken for image-reading requests, supports larger Pi image frames and cleans temporary Codex copies on cancellation. Existing API, tool approval, MCP, reading and Canvas workflows remain available. Attach the intended picture first; CLI chat does not scan active-note images automatically.

### Use and upgrade

Use `leoyang1984/lumen-public` in BRAT. For manual installation, download only `main.js`, `manifest.json` and `styles.css` into `.obsidian/plugins/lumen/`. Back up first, replace these three files, preserve settings, reading state, translation tasks and chat history, then reload LUMEN.

Choose diagram themes under **Settings → LUMEN → Advanced → Diagram theme**. Codex model and effort controls are in the chat connection menu and connection settings.

### Validation scope

49 automated test entries, 18 model-control and 39 Pele browser checks, type checking and production build passed. Live Codex/Pi multi-image, follow-up and reconnect tests passed; the user confirmed image questions work in local Obsidian. AGY vision bridging was tested with fixtures, not a live vision provider. Windows/Linux and physical mobile devices remain unverified. Standalone SVG export and Ultra delegation are outside this release.


## SHA-256

| File | SHA-256 |
| --- | --- |
| main.js | `53aa8ab57264bd03ebe3fbb79079b438fca467e29f945f9ff1a718874013fcbf` |
| manifest.json | `0dbc9e79284753ebdbf75f23c41ed0b6bc5b0d7a67fbf3adc6382f0ede2cfc66` |
| styles.css | `69b8a5ff9e27912eb2ae1cc9e4b3a5a9815c541deda23e3421cebe42301982ef` |
