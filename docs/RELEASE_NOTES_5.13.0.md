# LUMEN 5.13.0 — Liveboard 动态研究画布 / Liveboard Dynamic Research Canvas

2026-10-22

## 中文

### 核心亮点：Liveboard 动态研究画布与思维流转

- **全新 Liveboard 动态研究画布**：为深度阅读、笔记综合与多轮思考提供沉浸式全景工作台。聊天面板的每轮问答、思考过程、证据提炼与结论沉淀自动映射并投射为画布卡片。
- **对话与画布自动关联与持久化**：
  - 切换历史对话时，画布自动平滑同步切换至对应会话的状态；
  - 重新打开 Obsidian 后，画布内容自动恢复，无需手动保存或重新导入。
- **机械/科幻同心环吸附连线（Plan A）**：
  - 连线采用平滑流动感路径与粒子动效，直观传达信息流向；
  - 起止点采用精致的同心圆环吸附与挂钩机械美学，去除多余箭头杂乱感，卡片拖动时实时自适应贴合。
- **画布自由漫游与控制**：
  - 工具栏提供**放大**、**缩小**、**双击归中（Reset View）** 与拖拽全景平移。
- **观点送回对话（Return to Chat）与多轮血缘链路**：
  - 画布中的任意观点或卡片支持一键“送回对话 ↗”，提供多种结构化意图（继续深入、质疑与反驳、举例与落地、综合这些观点）；
  - 自动将卡片所引用的原始笔记提取并注入输入框 `@提及`，防止上下文丢失；
  - 发送后生成的新回答卡片自动在画布上与上一轮卡片建立血缘连接，支持多轮连续追问与推演。
- **Antigravity 多轮工具协议加固**：
  - 彻底修复本地 Agent（尤其是 Antigravity CLI）在连续多轮检索/阅读工具调用时，因 JSON Schema 约束丢失导致 Gemini API 报错崩溃的问题；
  - 增强响应封套解析，容错支持 Markdown 代码块包裹与前后格式干扰。

### 安装与升级

- **BRAT 安装**：`leoyang1984/lumen-public`
- **手动安装**：仅下载 Release 附件中的 **`main.js`、`manifest.json`、`styles.css`**，放入 `.obsidian/plugins/lumen/` 目录并重启插件即可。

---

## English

### Key Highlights: Liveboard Dynamic Research Canvas & Thought Flow

- **All-New Liveboard Dynamic Research Canvas**: An immersive, panoramic canvas workbench for deep reading, note synthesis, and multi-turn research. Automatically projects chat Q&A, reasoning steps, evidence citations, and conclusions into interactive cards.
- **Auto Conversation Association & Persistence**:
  - Switching chat conversations seamlessly and automatically synchronizes the active canvas.
  - Canvas state persists automatically across Obsidian restarts without manual saving.
- **Cyber / Mechanical Hook-and-Ring Connector Aesthetics (Plan A)**:
  - Connectors feature fluid energy-flow gradients conveying direction without clumsy arrowheads.
  - Precision concentric anchor rings and mechanical hooks smoothly follow cards during drag-and-drop.
- **Canvas Navigation & Zoom Controls**:
  - Floating controls with Zoom In (+), Zoom Out (-), Double-Click to Center, and freeform canvas panning.
- **Send Cards Back to Chat with Lineage Continuity**:
  - One-click "Send to Chat ↗" on any canvas card with structured intents (Deepen, Challenge, Apply & Execute, Synthesize).
  - Automatically preserves source note citations as `@mentions` in the composer to maintain context.
  - New answers automatically link back to their parent cards on the canvas, establishing clean multi-turn lineage trees.
- **Antigravity Multi-Turn Tool Protocol Hardening**:
  - Eliminates function-calling parse failures and Gemini API crashes during multi-round local tool execution by strictly enforcing response schemas across all turns.
  - Adds robust Markdown code-fence stripping for envelope decoding.

### Installation & Upgrade

- **BRAT**: `leoyang1984/lumen-public`
- **Manual**: Download only **`main.js`**, **`manifest.json`**, and **`styles.css`** from the Release, place them in `.obsidian/plugins/lumen/`, and reload Obsidian.
