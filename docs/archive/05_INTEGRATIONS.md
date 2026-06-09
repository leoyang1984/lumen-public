[English Version Below](#english-version) | [中文版往下看](#中文版)

---

## English Version {#english-version}

# 05 Integrations: Mobile Capture & Local Tooling

LUMEN Pro bridges the gap between your mobile devices, the web, and your local computer. This guide covers how to capture inspiration remotely and drive local tools.

### 📱 Telegram Mobile Capture (The Flash Note Recipe)
Capture ideas, voice notes, and images while you're on the move.

#### 1. Setup
- **Bot Token**: Create a bot via `@BotFather` and paste the token in LUMEN settings.
- **Chat ID**: Message `@userinfobot` to get your private ID and paste it to ensure only *you* can send notes to your vault.
- **Save Path**: Define where notes land (e.g., `Inbox/Telegram.md`).

#### 2. AI Refinement (Optional)
- **Feature**: Enable "AI Processing for Telegram".
- **The Magic**: Even a messy voice-to-text message will be automatically cleaned, summarized, and structured by AI before being appended to your vault.

---

### 🌐 Auto-Research (`#lumen/research`)
Turn a simple topic into a deep analysis without leaving Obsidian.

#### The Recipe:
1.  **Create a card** with your research topic.
2.  **Add the tag** ` #lumen/research `.
3.  **Click Search**: LUMEN uses a headless Chrome browser to browse the web, scrape content, and have AI synthesize a comprehensive report directly on your Canvas.

#### Technical Setup:
- **Binary Required**: Download `chrome-headless-shell` for your OS (e.g., mac-arm64).
- **Placement**: Place the folder in your vault root or specify the path in LUMEN settings -> **Chrome Shell Path**.
- **Privacy**: Research results exclude high-noise video domains (YouTube, Bilibili) to ensure analytical depth.

---

### 💻 OpenCLI: Local Power (`#lumen/opencli`)
OpenCLI allows LUMEN to interact with local development and system tools.

#### The Recipe:
1.  **Add the tag** ` #lumen/opencli ` to a node.
2.  **Type a command**: (e.g., `archdaily search glass architecture`).
3.  **Result**: LUMEN executes the command via your local shell and streams the results (images, text, links) back into new nodes on the Canvas.

*Note: Requires Node.js and the `opencli` package installed on your system.*

<br>
<br>

---

## 中文版 {#中文版}

# 05 进阶集成：手机采集与本地工具连通

LUMEN Pro 打破了移动设备、互联网与本地计算机之间的隔阂。本指南将介绍如何远程捕获灵感以及如何驱动本地工具。

### 📱 Telegram 移动采集 (闪念笔记食谱)
在旅途中随时随地捕捉想法、语音笔记和图片。

#### 1. 配置步骤
- **Bot Token**：通过 `@BotFather` 创建机器人并将 Token 粘贴到 LUMEN 设置中。
- **Chat ID**：通过 `@userinfobot` 获取您的私有 ID 并粘贴。这能确保只有**您本人**能向库中发送笔记。
- **保存路径**：定义笔记存放的位置（例如 `Inbox/Telegram.md`）。

#### 2. AI 自动优化 (可选)
- **功能**：开启 "AI Processing for Telegram"。
- **魔法效果**：即使是杂乱的语音转文字内容，AI 也会在存入库之前自动对其进行清洗、摘要和结构化处理。

---

### 🌐 自动化科研 (`#lumen/research`)
无需离开 Obsidian，将一个简单的词条转化为深度行业分析。

#### 使用食谱：
1.  **创建卡片**：写下您的调研主题。
2.  **添加标签**：` #lumen/research `。
3.  **点击搜索**：LUMEN 会调用无头浏览器访问网页，抓取实时信息，并由 AI 将汇总后的深度报告直接渲染在白板上。

#### 技术配置要求：
- **内核下载**：您需要下载对应操作系统的 `chrome-headless-shell`（例如 mac-arm64）。
- **存放位置**：将其放于库根目录，或在 LUMEN 设置 -> **Chrome Shell Path** 中指定路径。
- **质量控制**：调研结果会自动过滤高噪音的视频域名（如 YouTube、B站），以确保分析的专业深度。

---

### 💻 OpenCLI：本地算子驱动 (`#lumen/opencli`)
OpenCLI 允许 LUMEN 与本地开发工具或系统脚本进行交互。

#### 使用食谱：
1.  **添加标签**：在节点中加入 ` #lumen/opencli `。
2.  **下达指令**：例如 `archdaily search glass architecture`。
3.  **效果**：LUMEN 会通过您的本地 Shell 执行该命令，并将结果（图片、文本、链接）流水化地呈现在白板的新节点中。

*注意：此功能需要您的系统已安装 Node.js 及 `opencli` 软件包。*
