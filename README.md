---
tags:
  - obsidian-plugin
  - ai-assistant
  - agentic-workflow
  - second-brain
---
# Lumen Pro (v5.0.4): The Lean Obsidian Agent

[English Version Below](#english-version) | [中文版往下看](#中文版) 

---

## English Version

Welcome to **Lumen Pro v5.0.4**. This release keeps the lean Obsidian Agent direction and adds a practical runtime layer for Canvas workflows: schedule a visual workflow from the UI, run it headlessly, and save the result back into your vault.

Our new singular mission: **To be the most native, powerful, and invisible AI Agent for your Obsidian Vault, while empowering your visual thinking.**

Lumen Pro is now a "Lean Agent." It doesn't force you to learn complex pipeline markdown syntaxes; it acts as a silent, intelligent operator that reads your files, writes notes, manages plugins, and executes commands. Concurrently, it fully retains and enhances the highly acclaimed **Canvas Visual Workflows** for your spatial and multimodal creative needs.

### ✨ v5.0.0 Core Highlights

- **The Lean Agent Toolbelt**: The Agent can now sense and natively run internal Obsidian commands. Ask it to "switch to dark mode", "open a specific file", or "trigger a community plugin"—and it just does it using its 11 core vault tools (Read, Write, Edit, Full-Vault Search, Cache Query, Undo, Execute Command, etc.).
- **Native Diff Preview Generation**: When the AI decides to modify a file, it doesn't blindly overwrite your data. Instead, it generates an elegant inline Diff preview, allowing you to review the exact additions and deletions before clicking a button to commit the changes.
- **Canvas Visual Workflows Retained**: The powerful `#lumen/start`, `#lumen/image`, and `#lumen/video` operators are here to stay. You can still use the Obsidian Canvas as a node-based visual programming interface to generate multimodal content or connect complex spatial thoughts.
- **Focus on Note-Taking**: By removing the heavy Pipeline and Project Management frameworks, the plugin's cognitive load is drastically reduced. It’s just you, your notes, and an incredibly smart Agent ready to assist you.

### 🕒 v5.0.4 Runtime Workflow Pack

- **UI-only scheduling**: Schedule Canvas workflows from the runtime panel. No schedule syntax inside the canvas.
- **Headless execution**: Run a saved canvas even when it is not open.
- **Output path preview**: Choose "overwrite latest" or "dated history", then preview the exact note path before running.
- **Dynamic daily input**: Use `folder: Daily` + `date: today` or `Daily/{{date:YYYY-MM-DD}}.md` to process today's note.
- **Learning pack included**: See [`runtime-workflow-pack/`](runtime-workflow-pack/) for tutorials, syntax, best practices, and a ready-to-use daily summary template.

### 📦 Installation

#### Option 1: Using BRAT (Recommended)
1. Install the **Obsidian 42 - BRAT** plugin from Community Plugins.
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

### ⚖️ License
This project is licensed under a **Custom Non-Commercial License**. Commercial use, unauthorized redistribution, and plagiarism for profit are strictly prohibited. See [COMMERCIAL_LICENSE.md](COMMERCIAL_LICENSE.md) for full terms.

---

## 中文版

欢迎来到 **Lumen Pro v5.0.4**。本版本延续极简 Obsidian Agent 的方向，并新增 Canvas 运行时工作流：你可以通过 UI 面板给白板工作流设置定时，让它在后台执行，并把结果写回你的 Vault 笔记。

我们现在的核心使命是：**做 Obsidian 里最原生、最轻量的智能本地 Agent，同时将强大的 AI 能力完美融入你的白板视觉空间。**

Lumen Pro 现在是一个真正的“极简代理 (Lean Agent)”。你不再需要去学习复杂的管道语法。它作为一个聪明的底层操作者，帮你阅读文件、修改笔记并敲击软件指令；同时，它也**完全保留并强化了备受好评的 Canvas 白板多模态工作流**，满足你对空间排版和视觉生成的一切想象。

### ✨ V5.0.0 核心功能亮点

- **底层的 Lean Agent 工具箱**：Agent 现在可以感知并自动运行 Obsidian 内部命令。你可以直接吩咐它“切换暗色模式”、“打开会议纪要”或是“触发第三方插件的同步”——它会自动运用内置的 11 大核心底层算子（读、写、全文检索、缓存查询、执行指令等）来替你完成。
- **原生的 Diff 预览写入**：AI 决定的文本修改将不再是令人担忧的盲目覆盖。它会在对话中生成优雅的 Diff 代码对比预览，让你清晰看到每一行的增删，随后一键同意安全写入笔记。
- **保留强大的 Canvas 可视化智能**：依然完美支持 `#lumen/start`、`#lumen/image`、`#lumen/video` 等白板算子。你仍然可以在 Canvas 里通过拖拽卡片和连线，构建直观的 AI 推理流、生成多模态图片或视频。
- **专注于纯粹的笔记体验**：砍掉了容易让人分心的项目管理和复杂流控制面板后，整个插件的体量和交互变得极其克制。现在，只有你、你的笔记，和一个随时待命的极简智能体。

### 🕒 V5.0.4 运行时工作流包

- **只通过 UI 定时**：在运行时面板里编制白板工作流，不在白板里增加排程语法。
- **Headless 执行**：白板无需打开，也可以按时运行。
- **保存路径预览**：选择“覆盖最新”或“按日期保存历史”，运行前直接看到实际保存路径。
- **动态当天输入**：使用 `folder: Daily` + `date: today` 或 `Daily/{{date:YYYY-MM-DD}}.md` 读取当天笔记。
- **教学包已内置**：查看 [`runtime-workflow-pack/`](runtime-workflow-pack/)，包含教程、语法、最佳实践和每日总结模板。

### 📦 安装指南

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

### ⚖️ 知识产权与授权
本项目采用**自定义商业禁用协议**。严禁任何形式的商业行为、商业性抄袭或未经授权的分发。详情请参阅 [COMMERCIAL_LICENSE.md](COMMERCIAL_LICENSE.md)。

---
*回归纯粹，与 AI 共建您的数字花园！*
