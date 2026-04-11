[English Version Below](#english-version) | [中文版往下看](#中文版)

---

## English Version {#english-version}

# LUMEN Documentation Master Outline (v3.5.8-pro)

This outline serves as a comprehensive guide for LUMEN users and a blueprint for future documentation development.

### 1. Welcome to LUMEN
- **Vision**: Transform Obsidian into a true "Agentic Brain".
- **Positioning**: Beyond a simple AI chat plugin—an Agentic Workflow Engine built directly on Canvas and Markdown.

### 2. [Getting Started](01_GETTING_STARTED.md)
- **Installation Guide**:
    - Via [BRAT](01_GETTING_STARTED.md#getting-started-brat) (Recommended).
    - Manual Installation.
- **Activation & Licensing**:
    - **Device ID**: How to locate your unique machine code.
    - **License Registration**: [Activating Pro features](01_GETTING_STARTED.md#activation--setup) via the settings panel.
    - **Special Offer**:
        - **Public Trial Code**: `ANN-20261231-841F-BCF5`
        - **Expiry**: Valid until 2026-12-31.
- **Pro Permissions**: Overview of features unlocked by a valid license.

### 3. [Core Visual Flow](02_CANVAS_INTELLIGENCE.md) (Active - Canvas Intelligence)
- **Canvas Flow**:
    - Protocol Tags: `#lumen/start`, `#lumen/input`, `#lumen/step`.
    - Flow Logic: Data flow via arrow connectivity (Topology-aware execution).
- **AI Node Evolution**:
    - **Node Branching**: "Growing" new ideas from existing nodes with spatial layout.
    - **Node Linking**: AI-powered identification and logical connection of scattered nodes.
- **Multimodal Operators**:
    - **Video Generation** (`#lumen/video`): Integration with Wan2.1, MiniMax, and Luma.
    - **Image Generation** (`#lumen/image`): Prompt-to-Image and Img2Img.
    - **Vision Protocol**: Extracting 7-axis structured prompts from images (`#lumen/vision`).

### 4. [Indexing & Knowledge](03_RAG_AND_MEMORY.md) (Active - RAG)
- **Memory Index**: 
    - Semantic Ingestion (Local vector search retrieval).
    - **Annotation**: Mandatory insight tagging to prioritize personal value.
- **Memory Summoning**: 
    - Instant retrieval and [Visual Linking](03_RAG_AND_MEMORY.md#canvas-summoning-visual-retrieval) of vault memories.

### 5. [Text Productivity & Custom Skills](04_LIGHT_SKILLS.md) (Active - Light Skills)
- **Slash Commands** (`/lumen`): Inline polishing, expansion, and translation.
- **Light Skills Guide**: 
    - Defining AI chains via [Markdown DSL](04_LIGHT_SKILLS.md#🍱-anatomy-of-a-skill).
    - Variable Resolution: `{{selection}}`, `{{title}}`, `{{StepID.FieldName}}`.

### 6. [Advanced Integrations](05_INTEGRATIONS.md) (Active)
- **Telegram Sync**: Capturing mobile voice/text notes with [AI-powered refinement](05_INTEGRATIONS.md#2-ai-refinement-optional).
- **Auto-Research & Tool Bus**:
    - **`#lumen/research`**: Automated web research via Chrome Headless.
    - **`#lumen/opencli`**: Cross-plugin tool bus for executing local scripts.

### 7. [Special Edition: The Agentic Protocol](07_AGENTIC_PROTOCOL.md) (.agents)
- **Directory Mapping**: How `.agents/folder/skill.md` becomes `/folder@skill`.
- **Action Encyclopedia**: Deep dive into `create_note`, `create_notes`, `ask_user`, etc.
- **Variable Resolution**: Using Dot-Notation and batch distribution variables.

### 8. [Feature Status Ledger](06_DEPRECATED_FEATURES.md) (Suspended Features)
> [!NOTE]
> To optimize product focus, some features have been strategically adjusted in v3.5.x.
- **Hover AI Chat**: 
    - **Status**: Suspended. [Read Rationale](06_DEPRECATED_FEATURES.md#1-hover-ai-chat-floating-widget).
- **Web Clipper**:
    - **Status**: Suspended. [Read Rationale](06_DEPRECATED_FEATURES.md#2-web-clipper).
- **Pipeline Stepper (Sidebar)**:
    - **Status**: Evolved into Canvas Flow.

### 9. Roadmap & Community
- **Future**: Multi-Agent orchestration, deeper local LLM support.

<br>
<br>

---

## 中文版 {#中文版}

# LUMEN 文档编写大纲 (v3.5.8-pro)

本大纲旨在为 LUMEN 用户提供清晰的功能指引，并作为后续文档编写的总体蓝图。

### 1. 欢迎使用 LUMEN
- **愿景**: 将 Obsidian 打造为真正的“自主代理大脑”。
- **定位**: 不仅仅是一个 AI 聊天插件，而是一个基于白板 (Canvas) 与 Markdown 的 agentic 工作流引擎。

### 2. [快速上手](01_GETTING_STARTED.md)
- **安装指南**:
    - 通过 [BRAT](01_GETTING_STARTED.md#通过-brat-快速安装推荐) 快速安装（推荐）。
    - 手动安装 (GitHub Release)。
- **激活与授权**:
    - **机器码获取**: 在设置面板查看唯一的 Device ID。
    - **授权密钥登记**: 填写 License Key 并点击 Activate。
    - **限时福利**:
        - **公开试用礼品码**: `ANN-20261231-841F-BCF5`
        - **有效期**: 截至 2026-12-31。
- **Pro 版权限说明**: 
    - 完整解锁 Canvas Flow、多模态算子与分布式 RAG 系统。

### 3. [核心视觉流](02_CANVAS_INTELLIGENCE.md) (活跃功能 - Canvas Intelligence)
- **Canvas Flow (白板工作流)**:
    - 节点标签协议：`#lumen/start`, `#lumen/input`, `#lumen/step`。
    - 连接逻辑：箭头即数据流（Topology-aware execution）。
- **AI 节点演化**:
    - **Node Branching**: 从现有节点“生长”出新节点，支持空间就近排版。
    - **Node Linking**: AI 自动识别并连接凌乱的白板内容。
- **视觉算子与辅助工具**:
    - **视频算子** (`#lumen/video`): 集成 Wan2.1, 海螺, Luma，支持专业运镜指令。
    - **图像算子** (`#lumen/image`): 提示词绘图与图生图 (Img2Img)。
    - **视觉反向算子**: 从图片提取 7 轴结构化提示词 (`#lumen/vision`)。

### 4. [知识索引与语义检索](03_RAG_AND_MEMORY.md) (活跃功能 - RAG)
- **记忆索引 (Memory Index)**: 
    - 语义入库原理（基于向量嵌入的本地检索）。
    - **入库批注 (Annotation)**: 强制备注机制，确保个人感悟加权。
- **灵感召唤 (Memory Summoning)**: 
    - 在 Canvas 中瞬间找回 vault 里的相关记忆并[自动连线](03_RAG_AND_MEMORY.md#1-白板灵感召唤-canvas-summoning)。

### 5. [文本生产力与自定义技能](04_LIGHT_SKILLS.md) (活跃功能 - Light Skills)
- **斜杠命令** (`/lumen`): 行内润色、扩写与翻译。
- **轻技能 (Light Skills) 指南**: 
    - 使用 [Markdown DSL](04_LIGHT_SKILLS.md#🍱-技能解构) 自定义 AI 动作链。
    - 变量提取系统：`{{selection}}`, `{{title}}`, `{{StepID.FieldName}}`。

### 6. [进阶集成](05_INTEGRATIONS.md) (活跃功能)
- **Telegram 闪念同步**: 移动端发送语音/文字，由 [AI 自动润色](05_INTEGRATIONS.md#2-ai-自动优化-可选)入库。
- **科研算子与工具总线**:
    - **科研算子** (`#lumen/research`): 基于 Chrome 无头浏览器的自动化网页调研。
    - **OpenCLI 算子**: 跨插件调用的工具总线，执行本地脚本。

### 7. [特别篇：代理协议](07_AGENTIC_PROTOCOL.md) (.agents)
- **目录映射**: 了解 `.agents/分类/技能.md` 如何转化为命令。
- **动作百科**: 深度解析 `create_note`, `create_notes`, `ask_user` 等指令。
- **变量提取**: 掌握点号解析与批量分发变量的高级用法。

### 8. [功能状态变更清单](06_DEPRECATED_FEATURES.md) (功能停用说明)
> [!NOTE]
> 为优化产品重心，部分功能在 V3.5.x 版本中已进行策略性调整。
- **划词浮窗 AI (Hover AI Chat)**: 
    - **状态**: 暂时停用。[阅读停用原由](06_DEPRECATED_FEATURES.md#1-划词浮窗-ai-hover-ai-chat)。
- **网页剪藏 (Web Clipper)**:
    - **状态**: 暂时停用。[阅读停用原由](06_DEPRECATED_FEATURES.md#2-网页剪藏-web-clipper)。
- **侧边栏步进器 (Pipeline Stepper)**:
    - **状态**: 演进为 Canvas Flow。

### 9. 路线图与社区
- **未来展望**: 多智能体协同 (Multi-Agent Setup)、更深度的本地大模型适配。
