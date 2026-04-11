# Lumen Pro (v3.5.8) - Agentic Workflow Engine for Obsidian

[English Version Below](#english-version) | [中文版往下看](#中文版)

---

## English Version

### 🚀 Unleash your Second Brain
Lumen Pro is a professional-grade **Agentic Workflow Engine** designed for Obsidian. It goes beyond mere chat models—it transforms your vault into an autonomous reasoning system capable of managing multi-step pipelines, visual canvas flows, and local semantic intelligence.

#### 🏛️ The Four Pillars of Lumen Pro

##### 1. Canvas Intelligence (Visual Automation)
Turn your Obsidian Canvas into a no-code AI programming environment.
- **Workflow Tags**: Use ` #lumen/start `, ` #lumen/input `, and ` #lumen/step ` to build parallel and sequential pipelines visually.
- **Node Branching**: AI responses appear directly as native canvas nodes next to your selections.
- **Smart Node Sensing**: Drag-and-drop .md files into Canvas; LUMEN automatically treats them as inputs without manual tagging.
- **Visual Reasoning**: Use AI-driven operators (`to_canvas_edge`) to automatically structure and connect nodes based on logic.

##### 2. Agentic Pipelines (Light Skills)
Define complex AI reasoning tasks directly in Markdown.
- **Light Skills**: Run industrial-grade pipelines that can create files, summarize data, and archive knowledge autonomously.
- **Auto-Continue**: Effectively bypass token limits with industrial-grade continuation mechanisms for long-form reports.
- **Human-in-the-Loop**: Integrated approval cards allow you to intervene and polish AI output mid-workflow.

##### 3. Deep Knowledge (Local RAG)
True local semantic search that understands *your* context.
- **Memory Index**: Local vector search powered by high-performance embeddings.
- **Dual-Track Intelligence**: Combines Passive Vector RAG (70/30 weight) with Active Session Summarization (`Memory/topics/*.md`).
- **Structured Retrieval**: Topic-specific files automatically archive Decisions, Rationales, and Abandoned options.
- **Canvas Summoning**: Visually retrieve and link related memories on the whiteboard via semantic similarity.

##### 4. Multimodal Creation & Connectivity
Bridge the gap between text, image, video, and the real world.
- **Canvas Operators**: Native ` #lumen/image `, ` #lumen/video `, and ` #lumen/audio ` support.
- **Vision Protocol**: Reverse-engineer prompts from images using `#lumen/image2prompt`.
- **OpenCLI Bridge**: Native integration with the OpenCLI toolchain to drive local scripts and render results directly to the Canvas.
- **Live Search**: Integrated Serper/Tavily for real-time internet research.
- **Telegram Mobile Sync**: Capture mobile inspiration and voice notes into your vault remotely.

---

### 🧩 Open Agentic Protocol (.agents)
Lumen Pro features an open extension protocol via the hidden `.agents` directory.
- **Dynamic Skills**: Add Markdown files to `.agents/{folder}/{name}.md` to register new commands.
- **Action Execution**: Define YAML actions (folder creation, note appending) that trigger alongside AI calls.
- **Developer Ready**: Extend Lumen's native UI and logic without writing a single line of plugin code.

---

### 📦 Installation
#### Option 1: Using BRAT (Recommended)
1. Install the **Obsidian 42 - BRAT** plugin from the Community Plugins.
2. In BRAT settings, click **Add Beta plugin**.
3. Enter the repository URL: `leoyang1984/lumen-public`
4. Click **Add Plugin**, then enable **Lumen Pro** in your Community Plugins list.

#### Option 2: Manual Installation
1. Go to the [GitHub Releases](https://github.com/leoyang1984/lumen-public/releases) page.
2. Download the latest release files (`main.js`, `manifest.json`, `styles.css`).
3. Create a folder named `lumen-pro` in your vault's `.obsidian/plugins/` directory.
4. Copy the downloaded files into that folder and enable the plugin.

---

### 🔑 Activation & Setup
- **FREE TRIAL**: Use the following universal Gift Code to experience all Pro features:
  > **`ANN-20261231-841F-BCF5`**
  *(Valid until 2026-12-31)*

1. Go to **Settings > Lumen Pro > License Key**.
2. Enter your **License Key**.
3. Click **Activate** to unlock Pro features.

---

### ⚖️ License & Restrictions
This project is licensed under a **Custom Non-Commercial License**. 
- **NO Commercial Use**: Profit-seeking use, redistribution, or plagiarism is strictly prohibited.
- **NO Redistribution**: Do not re-host or re-distribute these plugin files.
- **NO Reverse Engineering**: Decomposing or cloning for competitive products is forbidden.
- **API Costs**: Users are responsible for their own API keys and associated costs (SiliconFlow, OpenRouter, etc.).
- **NO Warranty**: Software is provided "AS IS". Developers are not liable for AI-generated output or data loss.

---

[See CHANGELOG.md for full history](CHANGELOG.md)

---

## 中文版

### 🚀 释放第二大脑的潜能
Lumen Pro 是专为 Obsidian 打造的**专业级 AI 代理工作流引擎**。它不仅仅是聊天机器人，更是能将你的笔记库转化为自主推理系统的核心大脑，支持多步流水线、可视化白板流和本地语义检索。

#### 🏛️ Lumen Pro 四大柱石

##### 1. 视觉智能 (白板自动化)
将 Obsidian Canvas 变成无代码 AI 编程环境。
- **协议标签**：使用 ` #lumen/start `, ` #lumen/input `, ` #lumen/step ` 构建并行或串行的工作流。
- **节点衍生**：AI 的回答直接作为原生白板节点出现在选区旁，支持空间推演。
- **视觉算子**：原生支持 ` #lumen/image `, ` #lumen/video `, ` #lumen/audio ` 等交互算子。
- **智能节点感应**：直接拖入 .md 文件，LUMEN 自动将其感应为输入，无需手动打标。
- **视觉推理算子**：使用 AI 驱动的连线引擎 (`to_canvas_edge`) 自动构建逻辑架构。

##### 2. 代理流水线 (轻技能)
直接在 Markdown 中定义复杂的 AI 推理任务。
- **轻技能 (Light Skills)**：运行工业级流水线，实现文件分发、数据处理与自主归档。
- **自动续写**：内置工业级续写机制，彻底打破 Token 长度限制，支持生成万字长文报告。
- **人机协同**：集成审批卡片，允许在流水线运行中间阶段人工干预并润色 AI 产物。

##### 3. 深度知识库 (本地 RAG)
真正懂你上下文的本地语义搜索。
- **记忆索引 (Memory Index)**：基于向量嵌入的高性能本地检索。
- **双轨记忆系统**：整合被动向量 RAG (70/30 加权) 与主动 Session 总结（存放于 `Memory/`）。
- **结构化沉淀**：专题记忆自动存档“决策、原由、弃方、进度”四大核心板块。
- **灵感召唤 (Summoning)**：在白板中通过语义相似度自动拉取并连线呈现关联笔记。

##### 4. 多模态创作与连接
打破文本、图像、视频与现实世界的界限。
- **白板算子**：原生支持 ` #lumen/image `, ` #lumen/video `, ` #lumen/audio ` 标签。
- **视觉反向算子**：使用 ` #lumen/image2prompt ` 从参考图中提取结构化提示词。
- **OpenCLI 算子**：原生集成 OpenCLI 工具链，支持在 Obsidian 内驱动本地脚本。
- **科研算子**：集成 Serper/Tavily，结合无头浏览器使用 ` #lumen/research ` 实现全网深度调研。
- **Telegram 同步**：移动端语音/文字通过机器远程录入，AI 自动润色入库。

---

### 🧩 开放代理协议 (.agents)
Lumen Pro 通过隐藏的 `.agents` 目录提供开放的协议扩展能力。
- **动态技能**：在 `.agents/{plugin}/{name}.md` 中存放文件即可注册全局指令。
- **动作执行**：通过 YAML 定义文件夹创建、笔记追加等机械化动作，与 AI 逻辑深度耦合。
- **开发者友好**：无需编写插件代码，即可扩展 Lumen 的原生 UI 与处理逻辑。

---

### 📦 安装方法
#### 选项 1：使用 BRAT (推荐)
1. 在插件市场搜索并安装 **Obsidian 42 - BRAT** 插件。
2. 进入 BRAT 设置，点击 **Add Beta plugin**。
3. 输入本仓库地址：`leoyang1984/lumen-public`
4. 点击 **Add Plugin**，然后在社区插件列表中开启 **Lumen Pro**。

#### 选项 2：手动安装
1. 前往 [GitHub Releases](https://github.com/leoyang1984/lumen-public/releases) 发布页。
2. 下载最新的发布文件 (`main.js`, `manifest.json`, `styles.css`)。
3. 在你的库目录 `.obsidian/plugins/` 下手动创建一个名为 `lumen-pro` 的文件夹。
4. 将下载的文件放入该文件夹，并在插件列表中开启。

---

### 🔑 激活与配置
- **免费试用**：使用以下全宇宙通用礼品码，即刻解锁所有 Pro 功能：
  > **`ANN-20261231-841F-BCF5`**
  *（有效期至 2026-12-31）*

1. 进入 **设置 > Lumen Pro > License Key**。
2. 输入你的 **License Key**。
3. 点击 **Activate** 激活专业版功能。

---

### ⚖️ 知识产权与限制
本项目采用**自定义商业禁用协议**。
- **严禁商用**：禁止任何形式的盈利行为、商业抄袭或未经授权的分发。
- **禁止二次分发**：不得在 GitHub 官方渠道外传播插件安装文件。
- **禁止竞争性反向工程**：严禁出于竞争目的对本插件进行拆解或代码复用。
- **API 费用自理**：用户需自备 API Key 并承担由此产生的 Token 费用。
- **免责声明**：软件按“原样”提供，开发者不承担因 AI 输出或软件运行导致的数据风险。

---

[查看完整更新日志](CHANGELOG.md)

---
*与 AI 共建您的数字花园！*
