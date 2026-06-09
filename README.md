# Lumen Pro (v4.0.6-pro) - Agentic Workflow Engine for Obsidian

[English Version Below](#english-version) | [中文版往下看](#中文版)

---

## English Version

### 🚀 Unleash your Second Brain
Lumen Pro is a professional-grade **Agentic Workflow Engine** designed for Obsidian.

> [!NOTE]
> **Future Plans / 未来计划**
> In future releases, we plan to further streamline the user interface and interactions (e.g. removing project status bars, image rating stars, and deactivating AutoResearch/OpenCLI) to keep the Obsidian environment minimal. In the current release, all features are fully active and available.

#### 🏛️ The Three Pillars of Lumen Pro

##### 1. Canvas Intelligence (Visual Automation)
Turn your Obsidian Canvas into a no-code AI programming environment.
- **Workflow Tags**: Use `#lumen/start`, `#lumen/input` (and `#lumen/input/N`), `#lumen/step` (and `#lumen/step/N`), and `#lumen/output` to build parallel and sequential pipelines visually. The `#lumen/output` tag designates a target node to be overwritten by the AI result instead of spawning a new node.
- **Node Branching**: AI responses appear directly as native canvas nodes next to your selections.
- **Smart Node Sensing**: Drag-and-drop `.md` files into Canvas; LUMEN automatically treats them as inputs without manual tagging.
- **Visual Reasoning**: Use AI-driven operators (`to_canvas_edge`) to automatically structure and connect nodes based on logic.
- **Multimodal Operators**: Native `#lumen/image` (image generation), `#lumen/video` (video generation), `#lumen/audio` (audio playback), and `#lumen/vision` (extracting prompt from image) operators work directly on the canvas.

##### 2. Agentic Pipelines (Light Skills) & Context Mentions
Define complex AI reasoning tasks directly in Markdown and direct them dynamically.
- **Light Skills**: Run industrial-grade pipelines that can create files, summarize data, and archive knowledge autonomously.
- **Auto-Continue**: Effectively bypass token limits with continuation mechanisms for long-form reports.
- **Dynamic Context**: Type `@NoteName`, `@FolderName`, or `@.baseFileName` in the chat to dynamically retrieve and inject precise context into the conversation.
- **Project-Aware Router**: Use slash commands like `/project@meeting` to automatically infer project contexts via YAML or path, routing files and images to their target folders naturally.

##### 3. Deep Knowledge (Local RAG)
True local semantic search that understands *your* context.
- **Memory Index**: Local vector search powered by high-performance embeddings.
- **Dual-Track Intelligence**: Combines Passive Vector RAG (70/30 weight) with Active Session Summarization (`Memory/topics/*.md`).
- **Structured Retrieval**: Topic-specific files automatically archive Decisions, Rationales, and Abandoned options.
- **Canvas Summoning**: Visually retrieve and link related memories on the whiteboard via semantic similarity.

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
Lumen Pro 是专为 Obsidian 打造的**专业级 AI 代理工作流引擎**。

> [!NOTE]
> **未来计划 / Future Plans**
> 我们计划在未来的版本中全面精简与重构用户界面和交互（例如：移除底部的浮动项目状态条、生图打星评价，并挂起 AutoResearch 和 OpenCLI），使一切回归到最纯粹的笔记和白板交互中。当前版本中，所有核心功能依旧全部正常开启并保持完全可用。

#### 🏛️ Lumen Pro 三大核心支柱

##### 1. 视觉智能 (白板自动化)
将 Obsidian Canvas 变成无代码 AI 编程与思维推演环境。
* **协议标签**：使用 `#lumen/start`、`#lumen/input`（及带编号变体 `#lumen/input/1` 等）、`#lumen/step`（及带编号变体 `#lumen/step/1` 等）和 `#lumen/output` 构建并行或串行的工作流。其中 `#lumen/output` 用于标记输出靶向节点，AI 会直接覆写此节点而不是衍生新节点。
* **节点衍生**：AI 的回答直接作为原生白板节点出现在选区旁，支持空间推演。
* **智能节点感应**：直接拖入 `.md` 文件，Lumen 自动将其感应为输入，无需手动打标。
* **视觉推理算子**：使用 AI 驱动的连线引擎 (`to_canvas_edge`) 自动构建逻辑架构。
* **多模态算子**：原生支持 `#lumen/image`（AI 生成图像并自动落位）、`#lumen/video`（视频生成）、`#lumen/audio`（音频播报）与 `#lumen/vision`（图像反向提取提示词）。

##### 2. 代理流水线 (轻技能) 与动态上下文
直接在 Markdown 中定义复杂的推理任务，并在对话中实现智能定位与路由。
* **轻技能 (Light Skills)**：运行流水线，实现文件分发、数据处理与自主归档。
* **自动续写**：内置续写机制，彻底打破 Token 长度限制，支持生成超长分析报告。
* **动态上下文引用**：在对话中通过 `@` 快速引用特定笔记（如 `@笔记`）、文件夹（如 `@目录`）或属性表格（如 `@.base文件`），实现极低噪声的背景注入。
* **项目感知与智能路由**：使用如 `/project@meeting` 命令，根据当前文件的 YAML 属性或所属路径，智能感知并把生成的文件或图片落位至目标项目目录下。

##### 3. 深度知识库 (本地 RAG)
真正懂你库内上下文的本地高维语义检索。
- **记忆索引 (Memory Index)**：基于高性能本地嵌入的向量检索。
- **双轨记忆系统**：整合被动向量 RAG 检索（70% 权重）与主动 Session 总结（30% 权重）。
- **结构化沉淀**：专题记忆自动存档“决策、原由、弃方、进度”四大板块。
- **灵感召唤 (Summoning)**：在白板中通过语义相似度自动拉取并连线呈现关联笔记。

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
