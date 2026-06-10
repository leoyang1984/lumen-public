---
tags:
  - obsidian-plugin
  - deepseek
  - ai-assistant
  - agentic-workflow
  - pipeline
  - light-skills
  - second-brain
---
# Obsidian DeepSeek Plugin (DeepSeek Note Helper)

[English Version Below](#english-version) | [中文版往下看](#中文版) 

---

## English Version

A powerful, **Agentic Workflow Engine** designed to transform your Obsidian knowledge base into a living "Second Brain". This plugin goes beyond simple chat—it enables sequential, multi-step AI reasoning directly within your notes.

### 🚀 V3.0.0 Milestone: Multimodal RAG & Canvas Intelligence
The latest version introduces **Canvas Video Generation (Alpha)** and deepens the knowledge integration across the entire vault.
- **Batch Distribution & Dot-Notation (v3.1.7)**: Automated file splitting with **Aligned Zip** logic, preventing exponential file creation blowup.
- **Smart Selection & Reading Mode (v3.1.3)**: Zero-click context extraction. Auto-senses cursors and whole documents.
- **Pipeline Visibility & Auto-Continue (v3.1.0)**: Real-time word counts and automatic length completion.
- **Pure "Ask-User" Logic**: Separate guidance instructions from content to prevent token pollution.
- **Multimodal Video (Wan2.1 / Luma / MiniMax)**: Generate high-quality videos with professional camera controls.
- **Intelligent RAG (Memory Index)**: Local semantic search with AI-powered annotations and Canvas "Summoning".
- **Agentic Pipeline System**: Light Skills integration for building complex, multi-step AI reasoning.

---

### 🚀 Core Features

#### 1. 🔍 Hover AI Chat (v1.6.1)
- **Instant Access**: Select any text in your editor and press `Cmd+Shift+J` (Mac) / `Ctrl+Shift+J` (Win) to summon a sleek AI chat window.
- **Immersive Left-Sidebar Layout**: The window automatically anchors to the left side of your screen (40% width) to give you a massive workspace without blocking your reading pane.
- **Context-Aware**: The window locks onto your highlighted text, ensuring the AI maintains context even if the editor highlight disappears.
- **Real-Time Streaming**: Watch responses stream in instantly.
- **Premium UX**: Draggable, resizable (CSS-based), glassmorphism design, and one-click copy button.

#### 2. 🪄 Slash Command (v1.7.0+)
- **Immediate Inline Editing**: Type `/ds` directly in the editor to pop up a native menu of your Light Skills. 
- **In-Place Replacement**: Seamlessly translate, polish, or generate text right where your cursor is, without opening any side panels.
- **Smart Context Sensing**: The AI intelligently captures your sentence or the entire preceding paragraph if triggered on an empty line.
- **Default Action**: Set your favorite skill to trigger instantly when you press `Enter` after `/ds`.

#### 3. 🤖 Universal UI Assistant (v1.8.0)
- **Natural Language UI Control**: Tell the AI to "close sidebar", "open local graph", or "refresh Dataview".
- **Fuzzy Command Engine**: Our "Keyword Intersection" algorithm finds the right Obsidian command even if you don't know the exact name.
- **Sequential Execution**: Stable multi-command handling with 100ms safety delays.
- **Cross-Plugin Logic**: Control other plugins (like Templater or Dataview) directly from the chat interface.

#### 4. 🧠 Native Tool Calling (RAG & Management)
- Supports any OpenAI-compatible API. Native optimizations for **DeepSeek** and **Kimi**.
- Switch models seamlessly in settings to balance speed, cost, and reasoning power.

- **`search_vault`**: RAG-level vault-wide search to ground AI answers in your existing knowledge.
- **`create_note` & `append_to_note`**: Automate note creation and capture ideas from chat directly into your files.
- **`update_metadata`**: Hands-free management of YAML Properties. Ask AI to "categorize this note" and watch it update your tags automatically.

#### 5. 🔗 Deep Context Awareness
- **Selection Focus**: Highlight text in the editor, and the AI will lock onto it, even if you navigate away.
- **Bidirectional Link Resolution**: AI "follows the trail" of `[[Links]]`, reading linked notes to provide comprehensive, context-aware answers.

#### 6. 🛠️ Skill Architect (AI Metadata Generator)
- Use our built-in **Skill Architect** pipeline to help you *generate new skills*. Just describe what you want the AI to do, and it will write the Markdown DSL for you.

#### 7. 📨 Telegram "Inbox" Synchronization
- **Mobile Capture**: Send text or voice-to-text messages to your dedicated Telegram Bot while on the go.
- **AI Refinement**: Automatically correct typos, remove filler words, and format into structured Markdown using DeepSeek.

#### 8. 🎮 AI Node Branching (Visual Intelligence - v2.2.0)
- **"Aha Moment" on Canvas**: AI responses now appear directly as new nodes on your Canvas, spatially placed next to your selection.
- **Context-Aware Selection**: Use `{{canvas_selection}}` to pass only specific nodes to the AI, reducing noise and token costs.
- **Real-Time Visual Feedback**: Watch a "Thinking..." placeholder appear instantly before being replaced by the final AI response.
- **Glassmorphic Prompt UI**: A redesigned, sleek input modal with blur effects and multiline support for a premium creative experience.

#### 9. 🎨 Canvas Flow (Visual AI Workflow)
- **Node-Based Programming**: Turn Obsidian Canvas into a no-code AI workflow engine. Create `#ds/input` and `#ds/step` cards and connect them with arrows to build multi-step Agentic pipelines visually.
- **One-Click Execution**: Add a `#ds/start` block to render a "Run Flow" button. Click it to automatically sequentially extract variables, merge contexts, and process your AI workflow.

#### 10. 🗺️ Note to Canvas (Whiteboard Generator)
- **Document to Topography**: Convert any long-form Markdown note into a spatial Canvas whiteboard (`.canvas`) with a single click.
- **Dual Modes**: Choose between instant structural parsing (based on headings/lists) or LLM semantic reorganization to automatically map out your note's inner logic.

#### 11. 🎨 Manual Image Operator (v2.7.8)
- **Multimodal Creation**: Add `#ds/image [prompt]` to any Canvas node to enable manual AI image generation.
- **Provider Support**: Seamless integration with OpenRouter (Gemini 3.1 Flash) and SiliconFlow (Flux/Schnell).
- **Interactive Feedback**: Purple breathing aura during generation and Emerald Green upon success.
- **Local Vault Storage**: Generated images are automatically saved to your vault and linked as native Obsidian image nodes.

#### 12. 🧠 Memory Index & RAG (v2.9.12)
- **Local Semantic Search**: Build a high-performance vector index of your notes for meaning-based retrieval.
- **Smart Annotation**: A mandatory one-sentence modal appears during indexing to define *why* a note is important (70% weight in searches).
- **Web Clipper Integration**: Automatically triggers the Memory Annotation modal after a successful clip for instant contextual filing.
- **Deduplication Safeguard**: Smart confirmation dialog when re-indexing an already tracked note.
- **Canvas Summoning**: Use the "Find Related Memory" command in the Canvas to automatically retrieve and link semantically related notes to your current selection.

#### 13. 🌐 Online Web Search
- **Live Internet Access**: Bridge the knowledge gap by allowing AI to search the web via **Serper.dev** or **Tavily.com**.

#### 14. 🎬 Canvas Video Generation (v3.0.2)
- **Visual Synthesis**: Add `#ds/video` to any node to trigger AI video generation.
- **Multi-Provider**: Supports **SiliconFlow (Wan2.1)**, **MiniMax (Hailuo)**, and **PiAPI (Luma Dream Machine)**.
- **PiAPI Advanced**: Native support for **Luma Ray-v2** with multiple aspect ratios (`16:9`, `9:16`, `4:3`, `1:1`) and reliable Image-to-Video conversion.
- **MiniMax Advanced**: Support for 6s/10s duration, 1080P resolution, and 15+ professional **Camera Movement** instructions (e.g., `[Zoom In]`, `[Pan Left]`).
- **Interactive Progress**: Watch the **Blue Progress Bar** during the download phase for real-time synchronization feedback.
- **Local Vault Storage**: Videos are saved as `.mp4` in `attachments/ai-gen/`.
- **Intelligent I2V**: Connect an image node to a video operator to automatically trigger Image-to-Video transformation (SiliconFlow).

#### 15. 🕸️ Web Clipper & Archiver
- **Clean Markdown Capture**: Save any webpage to your vault using the manual command or let the AI archive search results automatically using the `save_webpages` tool.
- **Auto-Frontmatter**: Standardized metadata (source, title, author, date) added to every clipping.

#### 16. 🎨 Visual Prompt Extraction (v3.0.1)
- **Reverse-Engineer Inspiration**: Add `#ds/image2prompt` to any node to extract detailed, editable prompts from reference images.
- **7-Axis Analysis**: Automatically breaks down images into Style, Composition, Lighting, Character, Material, Atmosphere, and Color.
- **Workflow Ready**: Seamlessly bridge the gap between inspiration images and new AI-generated variations by editing the extracted prompt before re-generation.

---

### 🛠️ Installation & User Guide

1. **Manual Install**: Download the latest Release (containing `main.js`, `styles.css`, `manifest.json`).
2. **Directory**: Place files in `.obsidian/plugins/obsidian-deepseek-note-helper/`.
3. **Configure**: Enter your **API Key** and optional **Telegram Bot Token** in settings.
4. **Documentation**:
    - [**API Configuration Guide**](docs/api-configuration-guide.md) - **Start Here** to map features to API keys.
    - [Light Skills Guide V3](docs/LIGHT_SKILLS_GUIDE-V3.md) - **Required Reading** for workflow creation.
    - [User Manual](docs/MANUAL.md) - Comprehensive guide to all features.
    - [Memory Index & RAG Guide](docs/memory-index-rag-guide.md) - Deep knowledge setup.
    - [Web Search & Clipper Guide](docs/web-search-and-clipper-guide.md) - Real-time research.
    - [Canvas AI Architect Guide](docs/canvas-ai-architect-guide.md) - Mastering visual workflows.
    - [Development Roadmap](docs/ROADMAP.md).
    - [Memory Bank](memorybank/index.md) - Project context & state for developers.

---

### 🔑 Activation & Setup
- **FREE TRIAL**: Use the following universal Gift Code to experience all Pro features:
  > **`ANN-20261231-841F-BCF5`**
  *(Valid until 2026-12-31)*

1. Go to **Settings > Lumen Pro > License Key**.
2. Enter your **License Key**.
3. Click **Activate** to unlock Pro features.

---

### ⚖️ License
This project is licensed under a **Custom Non-Commercial License**. Commercial use, unauthorized redistribution, and plagiarism for profit are strictly prohibited. See [COMMERCIAL_LICENSE.md](COMMERCIAL_LICENSE.md) for full terms.

---

### 📝 Changelog

- **v3.1.5 (2026-04-01)**: **Batch Distribution & Dot-Notation** — Upgraded the Pipeline engine to support multi-topic "Broadcasting" (e.g., create files for each stock in a list) and precise field extraction via `{{StepID.FieldName}}` (supports Chinese). Added `overwrite: true` for file creation.
- **v3.1.3 (2026-04-01)**: **Smart Context & Reading Mode** — Introduced universal context sensing. The plugin now automatically extracts current lines or paragraphs even if no text is selected. In Reading Mode, it defaults to capturing the entire document, enabling "one-click" full-note analysis/summarization via Command Palette.
- **v3.1.2 (2026-04-01)**: **Pipeline Visibility & UI Refinement** — Introduced real-time word counts and continuation tracking. Added automatic completion reports with AI summaries. **UI Enhancement**: Implemented auto-expanding height and vertical resizing for the Pipeline approval textarea to support long-form editing. Fixed a path parsing bug for quoted strings.
- **v3.1.0 (2026-04-01)**: **Pipeline Auto-Continue** — Introduced an industrial-grade continuation mechanism. The engine now automatically detects truncated responses (`finish_reason: length`) and requests further content until the document is complete, effectively bypassing single-output token limits.
- **v3.0.7 (2026-04-01)**: **Multi-File Dispatcher** — Introduced `create_notes` action for Pipeline steps, allowing the creation of multiple markdown files in a single step via YAML configuration.
- **v3.0.6 (2026-04-01)**: **Industrial Token Expansion** — Increased default `max_tokens` from 4000 to 8192. Removed hardcoded restrictions in samples to support massive document generation.
- **v3.0.5 (2026-04-01)**: **Deep Token Precision** — Fixed a critical parser bug where `max_tokens` lines were not being stripped from the AI prompt. Enhanced `llmService` to support user-defined `max_tokens` in streaming requests.
- **v3.0.4 (2026-04-01)**: **Pure Data Pipelines** — Introduced `instruction:` field for `ask_user` steps to separate guidance from editable content, preventing prompt pollution. Added `white-space: pre-wrap` and `\n` support for multi-line instructions.
- **v3.0.3 (2026-04-01)**: **Pipeline Stepper UI** — Introduced a customized, real-time vertical step list in the sidebar. Features include "running" animation, "ask_user" blinking alerts, 2s auto-fade on success, and persistent "error" state for debugging.
- **v3.0.2 (2026-04-01)**: **Bilingual UX Refinement** — Standardized all settings and UI labels to a professional `[中文] [English]` bilingual format. Renamed Light Skills to **“轻技能”** for better brand recognition.
- **v3.0.1 (2026-03-31)**: **Multimodal Video & Visual Prompt** — Integrated **MiniMax (Hailuo)** video generation with support for 15+ camera movement instructions. Released **Visual Prompt Extraction** (`#ds/image2prompt`) for analyzing reference images.
- **v3.0.0 (2026-03-31)**: **The Multimodal Milestone (Alpha)** — Introduced **Canvas Video Generation** (Experimental Alpha) via SiliconFlow Wan2.1.
- **v2.9.12 (2026-03-31)**: **Precision Pipelines & Smart RAG** — Introduced `max_tokens` support across all Light Skill steps. Fixed `create_note` variable resolution. Integrated Web Clipper with Memory Index for automatic post-clip annotation.
- **v2.9.10 (2026-03-31)**: **Memory Index (RAG) Complete** — Introduced a full-scale local semantic search engine. Features include single-note indexing with custom annotations, recursive folder batch indexing, automatic frontmatter tagging (`memory-indexed`), and a "Summoning" mechanic for the Canvas to visually connect distant ideas via vector similarity.
- **v2.9.0 (2026-03-27)**: **Status Bar Lifecycle Fix** — Ensured the floating status bar automatically hides after single-step skills (replace, insert, create_note) complete or fail. Unified success/error notifications within the premium UI framework.
- **v2.8.9 (2026-03-27)**: **Premium Floating Status Bar (Dynamic Island)** — Introduced a custom-built, glassmorphic floating pill at the top-center of the editor. Features a breathing AI dot, theme-aware styling, a hoverable "Cancel" button, and smooth entrance/exit animations.
- **v2.8.3 (2026-03-27)**: **Skill Automation Enhancement** — Significantly improved the "Light Skills" system with the new `create_note` action and recursive directory creation. Fixed a UI bug where file creation status was incorrectly reported.
- **v2.8.2 (2026-03-27)**: **OpenRouter Chat Support** — Added OpenRouter as a first-class chat provider. Users can now select OpenRouter in settings and use high-end models like `anthropic/claude-sonnet-4.6` for both Chat and Canvas flows.
- **v2.8.1 (2026-03-27)**: **Image-to-Image (Img2Img) Support** — Introduced the ability to use existing Canvas images as reference for AI generation. Simply connect an image node and a prompt node to the `#ds/image` operator to trigger transformation.
- **v2.8.0 (2026-03-25)**: **Canvas Flow Context Awareness** — Enhanced `FlowExecutor` to support "File Nodes" (dragged notes) as AI context. The system now automatically reads the content of connected notes and injects it as `{{input}}` during workflow execution.
- **v2.7.8 (2026-03-24)**: **Multimodal Image Generation** — Introduced the `#ds/image` operator for manual image creation on the Canvas. Supports **OpenRouter** and **SiliconFlow**. Features robust Base64/URL parsing, recursive folder creation, foolproof Node ID resolution via global search, and a full English localization across the entire codebase.
- **v2.6.1 (2026-03-24)**: **Cyberpunk UI & Canvas Flow Auto-Focus** — Injected "Cyberpunk" visual feedback for active nodes (Purple Breathing Aura + Edge Running Arc). Added "Finished" state with Emerald Green breathing glow. Implemented **Auto-Focus** mechanism that automatically zooms and pans the Canvas to the final result node upon workflow completion.
- **v2.5.6 (2026-03-23)**: **Note to Canvas** — New command `Generate Canvas from current note`. Converts any Markdown note into an Obsidian `.canvas` whiteboard file with two modes: **Local** (instant tree-layout from headings/lists, no API call) and **AI** (LLM semantic recomposition with robust JSON extraction). In-modal progress UX: live status text, CSS spinner, purple pulse glow during AI calls, Stop/Cancel with `AbortController`, and smooth fadeOut-to-close on success.
- **v2.5.5 (2026-03-23)**: **Canvas Flow** — A fully functional visual workflow engine inside Obsidian Canvas. Build multi-step Agentic pipelines using `#ds/start`, `#ds/input/n`, and `#ds/step/n` tags. Features topology-aware execution (Kahn's algorithm) for parallel branches, real-time node highlighting, variable resolution, and automatic shadow node generation.
- **v2.2.0 (2026-03-21)**: The **AI Node Branching** Milestone. Introduced "Visual Intelligence" for Obsidian Canvas. AI responses can now be instantiated as new nodes directly on the whiteboard with smart spatial placement, real-time visual feedback (placeholder nodes), and a premium glassmorphic prompt UI.
- **v2.0.0 (2026-03-21)**: The **Svelte UI Architecture** Update. Completely rewrote the rendering engine from Vanilla JS to Svelte for ultimate performance and maintainability. Added Pipeline execution progress bars, robust inline approval cards, and instantaneous Slash Command eager deletions.
- **v1.8.0 (2026-03-21)**: The **Universal Assistant** Update. Added sequential tool execution stability, keyword intersection matching, and comprehensive UI linkage guides.
- **v1.7.0 (2026-03-20)**: Added native **Slash Command (`/ds`)** system for in-place text replacement.
- **v1.6.1 (2026-03-19)**: Improved Hover UX with immediate input clearing, scrollable context area.
- **v1.5.1 (2026-03-17)**: Maintenance release. Cleaned up repository and optimized Git synchronization rules.

---

## 中文版

这不仅是一个侧边栏聊天插件，更是一个为 Obsidian 打造的**智能代理工作流引擎 (Agentic Workflow Engine)**。它允许您通过简单的 Markdown 定义多步 AI 推理过程，深度挖掘您的知识库潜能。

### 🌟 V3 重大突破：智能管道系统 (Pipeline)
最新版本引入了 **Light Skills** 系统，通过 Markdown 即可构建复杂的 AI 工作流：
- **批量分发与点号提取 (v3.1.5)**：Pipeline 引擎支持跨步精准解析 (`{{步骤.字段}}`) 以及多主题自动分拆归档（实现“一次分析，全量分发”）。
- **智能全感应系统 (v3.1.3)**：无需划词也能直接处理！自动感应光标段落，阅读模式下自动抓取整篇内容。
- **Pipeline 显化系统 (v3.1.2)**：实时显示生成字数与续写状态。任务完成后自动下发交付报告。
- **可视化进度追踪 (v3.0.4)**：侧边栏引入垂直 Stepper 列表，实时显示步骤状态（运行中、等待交互、已完成、报错驻留）。
- **Ask-User 职责分离**：新增 `instruction:` 字段，将操作指令与编辑内容彻底分离，防止下游变量受到提示词“污染”。
- **人机协同 (Human-in-the-Loop)**：关键步骤会弹出**人工干预卡片**，您可以修改 AI 的中间产物或点击确认后再继续执行。
- **动态变量注入**：自动将 `{{selection}}` (选中文本)、`{{title}}` 和历史步骤产物注入 Prompt。
- **精确输出控制**：新增步骤级 `max_tokens` 参数，彻底解决大上下文截断与报错问题。
- **灵活文件归纳**：`create_note` 动作支持在路径中使用 `{{title}}` 等变量，实现动态命名与分类。
- **静默后台执行**：支持无需 UI 干扰的后台任务（如批量更新元数据）。

---

### 🚀 核心亮点

#### 1. 🔍 划词浮窗 AI (v1.6.1)
- **即时响应**：在编辑器中选中任意文本，按下 `Cmd+Shift+J` (Mac) / `Ctrl+Shift+J` (Win) 即可随时唤起 AI 对话。
- **沉浸式左侧边栏布局**：浮窗默认以 40% 宽度、95% 高度吸附于屏幕左侧。既保证了充足的问答阅读空间，又完全不遮挡右侧的原笔记。
- **上下文感知**：浮窗会锁定您选中的文本，并在界面上方保留视觉反馈，让提问更有针对性。
- **流式输出**：支持打字机效果的实时进度渲染，告别干等。
- **极致体验**：支持拖拽移动、支持右下角拉伸大小，提供一键复制按钮与毛玻璃质感 UI。

#### 2. 🪄 斜杠命令 (Slash Command - v1.7.0+)
- **无感行内编辑**：在编辑器中随时输入 `/ds` 即可呼出你的“轻技能”快捷菜单。
- **原地替换交互**：直接在光标处为你完成翻译、润色或扩写，无需打开侧边栏，全程不打断心流。
- **智能段落感应**：自动捕获同行的短句内容。如果在空行输入，AI 会自动向上溯源，抓取上一段完整的文字作为处理上下文。
- **一键回车响应**：设置常用的默认技能后，输入 `/ds` 然后回车即可瞬间触发智能执行。

#### 3. 🤖 全能 UI 管家 (Universal UI Assistant - v1.8.0)
- **自然语言操控**：直接对 AI 说“帮我关了侧边栏”、“打开局部关系图”或“刷新 Dataview 数据”。
- **意图顺序执行**：支持连招指令，通过 100ms 延迟确保多级 UI 指令稳定触发。
- **模糊命令引擎**：采用“关键词交集匹配”算法，不记得准确命令名也没关系，AI 懂你。
- **跨插件联动**：直接从对话框控制 Templater 插入模板或强刷 Dataview 视图。

#### 4. 🧠 原生工具调用 (RAG 与管理)面向任务执行
- 支持任何兼容 OpenAI 格式的 API。针对 **DeepSeek** 和 **Kimi** 进行了原生优化。
- 在设置中自由切换，兼顾速度、成本与复杂推理能力。

- **`search_vault`**：RAG 级别的全库搜索，让 AI 的回答基于您的真实笔记。
- **`create_note` 与 `append_to_note`**：自动创建新笔记，或将聊天灵感一键追加到现有文件末尾。
- **`update_metadata`**：全自动 YAML 属性管理。只需说“帮我分类”，AI 就会自动补全标签。

#### 5. 🔗 深度上下文感知
- **局部精准聚焦**：即便切换了页面，AI 也会牢牢记住您刚才高亮选中的内容。
- **双向链接穿透**：AI 会顺着 `[[双向链接]]` 在后台阅读关联笔记，拒绝“盲人摸象”。

#### 6. 🛠️ 技能架构师 (AI 辅助生成)
- 内置 **Skill Architect** 管道。只要描述您的需求，AI 就会为您写好用于定义新技能的 Markdown 脚本。

#### 7. 📨 Telegram “闪念”同步
- **移动端捕获**：在外出时通过 Telegram Bot 发送文字或语音转文字，随时捕捉灵感。
- **AI 自动润色**：利用 DeepSeek 自动修正口语错别字并转化为整齐的 Markdown。

#### 8. 🎮 AI 白板空间衍生 (Canvas Node Branching - v2.2.0)
- **白板上的 “Aha Moment”**：AI 的回答不再局限于侧边栏，而是直接在白板上以新节点的形式“啪”地出现，并自动排列在选区旁。
- **局部选区感知**：支持 `{{canvas_selection}}` 变量。AI 只关注你框选的节点，反馈更精准，Token 消耗更低。
- **实时视觉反馈**：点击生成后，白板会立即出现一个“思考中...”的占位节点，随后原地更新为最终内容。
- **毛玻璃极简 UI**：专为白板设计的半透明沉浸式输入框，支持多行灵活输入。

#### 9. 🎨 Canvas Flow (可视化 AI 工作流)
- **节点化编程**：把 Obsidian 白板变成一个不用写代码的 AI 工作流引擎。只需建立几个卡片，打上 `#ds/input` 和 `#ds/step` 标签并用箭头相连，就能画出复杂流水线。
- **一键全自动**：新建 `#ds/start` 触发节点即可渲染出紫色的“Run Flow”按钮，点击后 AI 会沿连线自动汇聚变量、合并不同输入分支并执行。

#### 10. 🗺️ Note to Canvas (白板生成器)
- **笔记降维打击**：一键将长篇 Markdown 文本转化为可视化的 Obsidian 白板（`.canvas` 文件），大幅降低阅读与复习的认知负荷。
- **双模解析**：支持瞬间完成的物理层级结构拆解，也支持深度的 AI 语义重组（让大模型依据您的提示词提取概念并重新连线排布）。

#### 11. 🎨 手动图像生成 (Manual Image Operator - v2.7.8)
- **多模态创作**：在任何白板节点中添加 `#ds/image [提示词]` 即可开启手动 AI 图像生成。
- **多供应商支持**：无缝集成 OpenRouter (Gemini 3.1 Flash) 与 SiliconFlow (Flux/Schnell)。
- **实时交互反馈**：生图时显示紫色呼吸光效，成功后转为翠绿常亮。
- **本地库存储**：生成的图片会自动保存至您的资源库，并以原生白板节点形式自动关联。

#### 12. 🧠 记忆索引与 RAG (v2.9.12)
- **本地语义搜索**：基于向量嵌入技术构建高性能笔记索引，实现基于含义的深度检索。
- **智能批注弹窗**：入库时自动强制弹出简短备注框。备注权重高达 70%，让 AI 更懂笔记的个人化价值。
- **剪藏自动联动**：Web Clipper 保存成功后自动拉起记忆批注，实现“采集-入库-备注”一气呵成。
- **白板灵感召唤**：在 Canvas 中使用“查找关联记忆”命令，自动检索并连线呈现与当前节点语义最相关的笔记。
- **防重复入库**：当笔记已存在于索引时，入库命令将触发二次确认弹窗，确保存储空间的精确性。

#### 13. 🌐 全域联网搜索
- **实时互联网接入**：通过 **Serper.dev** 或 **Tavily.com** 插件，让 AI 能够检索最新信息。
- **智能工具调用**：AI 会根据您的提问自动决定何时启动 `web_search` 工具。

#### 14. 🕸️ 网页剪藏与归档
- **纯净 Markdown 采集**：支持手动命令或让 AI 自动执行 `save_webpages` 归档搜索结果。
- **自动化元数据**：每篇剪藏笔记均自动添加标准化的 YAML 元数据（来源、标题、作者、日期）。

#### 15. 🎬 Canvas 视频生成 (v3.0.2)
- **视觉合成增强**：在节点中添加 `#ds/video` 即可触发视频生成。
- **多供应商支持**：接入 **SiliconFlow (Wan2.1)**、**MiniMax (海螺)** 以及 **PiAPI (Luma Dream Machine)**。
- **PiAPI 强力支持**：原生适配 Luma Ray-v2，支持 `16:9`、`9:16`、`4:3`、`1:1` 等比例，并能稳健执行图生视频 (I2V)。
- **MiniMax 进阶控制**：支持 6s/10s 时长控制、1080P 分辨率，以及 **`[推进]`、`[拉远]`** 等 15 种专业运镜指令。
- **进度实时同步**：支持下载阶段的蓝色进度条反馈。
- **本地资源持久化**：视频自动存入 `attachments/ai-gen/`。

#### 16. 🎨 AI 白板建模
- **生成式布局**：AI 可以从零开始构建 `.canvas` 文件 (`create_canvas`)，并能自动修复节点重叠和乱序 (`layout_canvas`)。

#### 17. 🎨 视觉提示词提取 (v3.0.1)
- **视觉反向工程**：在节点中添加 `#ds/image2prompt` 标签，即可将参考图解析为结构化、可编辑的提示词。
- **七轴深度分析**：自动从艺术风格、构图、光影、角色、材质、氛围、色彩等 7 个维度进行解析。
- **创作闭环**：通过该算子获取提示词并进行微调后，可直接连入 `#ds/image` (生图) 或 `#ds/video` (生视频) 算子。

---

### 🛠️ 安装与使用

1. **手动安装**：下载最新的 Release 包（包含 `main.js`、`styles.css` 和 `manifest.json`）。
2. **存放目录**：放在 `.obsidian/plugins/obsidian-deepseek-note-helper/` 下。
3. **配置**：在设置中填入 **API Key** 以及可选的 **Telegram Bot Token**。
4. **必看文档**：
    - [**API 配置全指南**](docs/api-configuration-guide.md) - **新手从这里开始**，明确各功能对应的 API 密钥。
    - [轻技能 V3 指南](docs/LIGHT_SKILLS_GUIDE-V3.md) - 构建自动化流的必读手册。
    - [用户官方手册](docs/MANUAL.md) - 全功能的深度使用说明。
    - [记忆索引与 RAG 指南](docs/memory-index-rag-guide.md) - 深度知识库库构建。
    - [联网搜索与剪藏指南](docs/web-search-and-clipper-guide.md) - 实时调研与网页归档。
    - [Canvas AI 建模指南](docs/canvas-ai-architect-guide.md) - 掌握白板全自动流。
    - [开发路线图](docs/ROADMAP.md)。
    - [项目记忆库](memorybank/index.md) - 针对开发者和 AI Agent 的技术上下文。

---

### 🔑 激活与配置
- **免费试用**：使用以下全宇宙通用礼品码，即刻解锁所有 Pro 功能：
  > **`ANN-20261231-841F-BCF5`**
  *（有效期至 2026-12-31）*

1. 进入 **设置 > Lumen Pro > License Key**。
2. 输入你的 **License Key**。
3. 点击 **Activate** 激活专业版功能。

---

### ⚖️ 知识产权与授权
本项目采用**自定义商业禁用协议**。严禁任何形式的商业行为、商业性抄袭或未经授权的分发。详情请参阅 [COMMERCIAL_LICENSE.md](COMMERCIAL_LICENSE.md)。

---

### 📝 更新日志

- **v3.3.2 (2026-04-03)**：**Pipeline 自动续写结构优化 (大纲锚点)**。引入了预生成大纲机制。在执行长文本生成前，引擎会自动构建任务大纲作为结构锚点，并在续写请求中通过“原始任务 + 完整大纲 + 500字上下文”的组合提示词，彻底解决了长篇创作逻辑中断与内容重复的问题。
- **v3.1.7 (2026-04-01)**：**Batch Distribution 算法优化 (齐位对齐)**。修复了占位符乘积导致的指数级文件创建 Bug（笛卡尔积问题）。引入了并行对齐（Zip-Aligned）逻辑，确保 $N$ 个提取项仅生成 $N$ 个文件，大幅提升性能与逻辑正确性。
- **v3.1.6 (2026-04-01)**：**Batch Distribution 作用域隔离**。修复了点号变量 (`{{StepID.Field}}`) 在批量分发循环中的串扰问题。
- **v3.1.5 (2026-04-01)**：**结构化全量提取支持**。Pipeline 引擎正式支持点号变量精细化提取（Dot-Notation），并引入 `matchAll` 全局扫描模式。不论 AI 输出多少次字段标签，均能完整捕获并合并，为自动化 Pipeline 提供强力数据支撑。
- **v3.1.4 (2026-04-01)**：内部稳定性修复与代码优化。
- **v3.1.2 (2026-04-01)**：**Pipeline 显化系统与 UI 体验优化**。Stepper 状态栏新增实时字数与续写显化；任务完成后自动下发交付报告。**UI 增强**：为 Pipeline 审批框引入了高度自适应与垂直手动拉伸功能。修复了步骤配置中路径引号引起的解析 Bug 以及 AI 摘要中的逻辑幻觉。
- **v3.1.0 (2026-04-01)**：**Pipeline 自动分段续写**。引入了工业级续写机制。执行引擎现在能自动识别截断信号 (`finish_reason: length`) 并发起追问补全，彻底打破了大模型单次输出字符限制，支持生成万字级超长分析报告。
- **v3.0.7 (2026-04-01)**：**多文件分发引擎**。引入 `create_notes` 动作，支持在单个步骤内通过 YAML 配置批量创建多个 Markdown 笔记，极大提升了 Pipeline 的产出原子化水平。
- **v3.0.6 (2026-04-01)**：**工业级 Token 扩容**。将默认生成上限从 4000 提升至 **8192**，彻底解决了长篇调研报告截断的问题，并优化了底层参数传导机制。
- **v3.0.5 (2026-04-01)**：**深度 Token 精准控制**。修复了解析器未剔除 `max_tokens` 指令导致的提示词污染 Bug；增强了 `llmService` 使其在流式请求中也能准确识别并透传用户定义的生成上限。
- **v3.0.4 (2026-04-01)**：**纯净数据管道**。为 `ask_user` 引入 `instruction:` 字段，将说明语与编辑内容解耦，彻底解决提示词污染问题。支持 `\n` 转义与多行说明显示。
- **v3.0.3 (2026-04-01)**：**Pipeline Stepper 可视化**。在侧边栏引入垂直步骤列表，支持成功 2 秒自动淡出、失败永久驻留，显著提升执行过程的透明度。
- **v3.0.2 (2026-04-01)**：**双语 UI 规范化**。将所有设置项名称与说明统一为中英双语格式。正式将 Light Skill 固化为 **“轻技能”** 品牌名。
- **v3.0.1 (2026-03-31)**：**多模态视频与视觉提示词**。接入了 MiniMax (海螺) 视频生成，支持 15 种专业运镜指令。上线了 **“视觉提示词提取 (I2P)”** 功能 (`#ds/image2prompt`)。
- **v3.0.0 (2026-03-31)**：**多模态里程碑 (Alpha)**。引入了基于 SiliconFlow Wan2.1 的 **Canvas 视频生成**（实验性 Alpha 版本）。
- **v2.9.12 (2026-03-31)**：**流水线精确控制与智能 RAG**。为 Light Skill 所有步骤引入了 `max_tokens` 支持，防止上下文溢出；修复了 `create_note` 路径变量解析，支持动态归档；实现了网页剪藏与记忆库自动联动，保存后自动触发备注；新增入库二次确认弹窗，确保索引精度。
- **v2.9.10 (2026-03-31)**：**记忆索引 (RAG) 完整实现**。引入了全套本地语义搜索引擎。功能包括：带备注的单篇笔记入库、递归文件夹批量索引、自动 YAML 标记 (`memory-indexed`)，以及白板中的“灵感召唤”机制（通过向量相似度视觉化关联灵感）。
- **v2.9.0 (2026-03-27)**：**状态条生命周期修复**。确保单步技能（替换、插入、创建笔记）在完成后或失败时，顶部悬浮状态条能自动且稳健地隐藏。统一了 Premium UI 框架下的成功/错误提示逻辑。
- **v2.8.9 (2026-03-27)**：**顶级悬浮状态条 (灵动岛)**。引入了自定义构建的顶部居中毛玻璃“药丸”提示框。具备动态呼吸感 AI 原点、主题感知的精致视觉、悬停可见的“取消”按钮，以及丝滑的出入场动画。彻底解决了原生 Notice 方案的审美冲突问题。
- **v2.8.3 (2026-03-27)**：**轻技能自动化增强**。大幅提升了“轻技能 (Light Skill)”系统的能力，新增了 `create_note` 动作并支持自动递归创建文件夹。同时修复了文件创建状态在 UI 上的误报问题。
- **v2.8.2 (2026-03-27)**：**OpenRouter 对话支持**。正式引入 OpenRouter 作为原生对话 Provider。用户可在设置中自由切换至 OpenRouter，并默认使用 `anthropic/claude-sonnet-4.6` 等顶尖模型进行对话或 Canvas 创作。
- **v2.8.1 (2026-03-27)**：**图生图 (Img2Img) 支持**。新增了以白板现有图片为参考进行 AI 创作的能力。只需将图片节点和提示词节点同时连线至 `#ds/image` 算子，即可触发图像转换。
- **v2.8.0 (2026-03-25)**：**Canvas Flow 笔记感知**。增强了 `FlowExecutor` 对“文件节点”（拖入的笔记）的上下文感知能力。系统现在能自动读取连线笔记的内容，并在执行工作流时将其注入为 `{{input}}`，实现了“拖入即翻译/处理”的丝滑体验。
- **v2.7.8 (2026-03-24)**：**多模态图像生成**。引入了 `#ds/image` 算子，支持在白板中手动创作 AI 图像。适配 **OpenRouter** 与 **SiliconFlow**。具备健壮的 Base64/URL 解析引擎、自动递归目录创建、基于全局搜索的白板节点 ID 解决机制，并完成了全代码库的英文标准化。
- **v2.6.1 (2026-03-24)**：**赛博朋克 UI 与白板自动聚焦**。为运行中的节点注入了“紫色呼吸光环 + 边缘跑动电弧”的赛博朋克视觉反馈。新增了任务完成后的“翠绿呼吸灯”状态。实现了**自动聚焦**机制，工作流执行完毕后会自动平滑缩放并居中至最终结果节点。
- **v2.5.6 (2026-03-23)**：**Note to Canvas 白板生成器**。新增命令 `Generate Canvas from current note`，可将任意 Markdown 笔记一键转化为 Obsidian 白板（`.canvas` 文件）。两种模式：**本地解析**（纯本地瞬间完成，按标题/列表层级生成树状布局）与 **AI 语义重组**（调用 LLM 全文理解与空间排版，内置健壮 JSON 提取器）。进度 UI：模态框留存、实时状态文案、CSS Spinner、AI 思考时紫色脉冲边框光效、Stop 中止按钮（AbortController）、成功后平滑淡出转场。
- **v2.5.5 (2026-03-23)**：**Canvas Flow 可视化 AI 工作流**。将白板变成无代码工作流引擎，通过 `#ds/start`, `#ds/input/n`, `#ds/step/n` 标签构建管道。支持拓扑排序自动处理并行分支、节点实时高亮反馈与自动创建"影子结果"节点。
- **v2.2.0 (2026-03-21)**：“AI 白板空间衍生”里程碑。正式开启视觉智能阶段。支持 AI 回答直接实例化为白板节点、空间就近放置、实时进度反馈以及全新的毛玻璃沉浸式对话框。
- **v2.0.0 (2026-03-21)**：“Svelte 响应式架构”里程碑。彻底抛弃了原生 DOM 渲染逻辑，将项目视图层完全重写为基于 Svelte 的现代化组件架构。新增了 Pipeline 流畅的动态执行进度条、上下文内联确认卡片，以及瞬间消除的无感斜杠命令体验。
- **v1.8.0 (2026-03-21)**：“全能管家”里程碑。增加串行工具执行稳定性、关键字交集搜索算法、引号清洗逻辑以及全套自然语言指令指南。
- **v1.7.0 (2026-03-20)**：新增 **Slash Command 斜杠命令 (`/ds`)** 与基础 UI 联动功能。支持原地文本即刻替换。
- **v1.6.1 (2026-03-19)**：优化浮窗交互体验，支持即时清空输入框。
- **v1.6.0 (2026-03-18)**：新增**划词浮窗 AI Chat**，支持流式输出、拖拽移动与拉伸大小，显著提升行内交互体验。
- **v1.5.1 (2026-03-17)**：日常维护。清理仓库冗余数据，优化 Git 同步规则。

---
*与 AI 共建您的数字花园！*
