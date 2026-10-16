# LUMEN 5.10.1 — 品牌规范升级、模型快速切换与原生 Mermaid 图表渲染 / Brand unification, model switching, and native Mermaid rendering

## 中文

- **LUMEN 品牌规范与视觉进化**：
  - 全界面、设置页与多语言统一为标准大写 **LUMEN**；
  - 彻底移除 AGY 风格的多余星标符号，回归专注沉浸的独立视觉；
  - 优化欢迎界面，去除冗余的模型名复读气泡与孤立小灰框，升级 2×2 快捷卡片间距与悬停质感。
- **本地 Agent 模型感知与透明化切换（P2/P3）**：
  - 实时检测并显示 Codex（`gpt-6-luna` 等）、Antigravity（`gemini-4-argon-medium` 等）、Pi（OpenRouter 预设模型）及 API 的活跃模型；
  - 顶部 Header 状态胶囊支持点击展开下拉菜单，一键快速切换模型；
  - 为 Pi 连接新增高质量 OpenRouter 预设模型：`Claude Haiku 5.5` 与 `GPT-6 Luna`。
- **顶栏状态胶囊精简与交互优化**：
  - 移除了横跨在消息列表上方的多余常驻气泡条，释放垂直阅读与思考空间；
  - 保留顶部胶囊状态圆点：🟢 绿色就绪/运行、🟡 黄色连接中、🔴 红色错误、⚪ 灰色未连接，并优化最大宽度防止长模型名称截断；
  - 明确菜单中“连接 / 重新连接”动作与“连接设置…”导航入口，消除文案歧义。
- **原生 Mermaid 语法可视化支持**：
  - 解决 Obsidian 安全拦截提示（“在此仓库中显示 Mermaid 图表？[允许]”）点击无响应的问题；
  - 自动确认当前知识库信任，支持 AI 生成的流程图、时序图、脑图等直接渲染为清晰的高清矢量 SVG；
  - 配套 Mermaid 专用聊天卡片样式，居中布局并支持横向平滑滚动，不破坏对话气泡布局。

### 使用与升级

BRAT 仓库：`leoyang1984/lumen-public`。手动安装下载 `main.js`、`manifest.json`、`styles.css`，放入 `.obsidian/plugins/lumen/`。升级前建议备份，仅替换这三个运行文件，保留 `data.json`、阅读状态、翻译任务与对话历史，再重载 LUMEN。

## English

- **LUMEN Brand Unification & UI Evolution**:
  - Unified plugin name to uppercase **LUMEN** across all UI elements, settings panels, and localization keys.
  - Removed obsolete asterisk/star markers from message headers for a clean, distraction-free aesthetic.
  - Streamlined empty-state launchpad: removed duplicate model badges, unboxed secondary safety notes, and refined starter cards with improved spacing and hover interactions.
- **Local Agent Model Transparency & Quick Switching**:
  - Live detection and display of active models for Codex (`gpt-6-luna`), Antigravity (`gemini-4-argon-medium`), Pi (OpenRouter presets), and API connections.
  - Direct model switcher dropdown integrated into the top header connection pill.
  - Added new high-capability OpenRouter presets for Pi: `Claude Haiku 5.5` and `GPT-6 Luna`.
- **Streamlined Connection Header**:
  - Removed the redundant horizontal connection bar below the header to preserve chat vertical reading space.
  - Single compact header pill with dynamic status dot colors (green: ready/running, yellow: connecting/stopping, red: error, gray: idle) and widened width to eliminate truncation.
  - Clarified dropdown menu items between "Connect / Reconnect" and "Connection settings…".
- **Native Mermaid Diagram Visualizations**:
  - Resolved the Obsidian security guard issue ("Display Mermaid diagrams in this vault? [Allow]") where clicking the button previously had no effect in chat bubbles.
  - Automatically initializes vault trust and hooks into Obsidian's post-processor change events to render flowcharts, sequence diagrams, and architecture charts directly into sharp SVGs.
  - Added dedicated styling for Mermaid containers with centered alignment and horizontal scroll overflow protection.

### Use and upgrade

Use `leoyang1984/lumen-public` in BRAT. Manual installation requires only `main.js`, `manifest.json`, and `styles.css` placed in `.obsidian/plugins/lumen/`. Back up and replace these three runtime files while preserving `data.json`, reading state, translation tasks, and chat history, then reload LUMEN.
