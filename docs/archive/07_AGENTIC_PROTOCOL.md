[English Version Below](#english-version) | [中文版往下看](#中文版)

---

## English Version {#english-version}

# 07 Special Edition: The Agentic Protocol (.agents)

The `.agents` folder is the "App Store" of your Obsidian vault. It allows you to extend LUMEN Pro's capabilities by simply adding Markdown files to a specific directory structure. These files become custom commands (Skills) that you can invoke anytime via the Command Palette or the Slash Menu.

### 🍱 The Installation Recipe: Directory Mapping
You "install" a new tool by matching your vault's folder structure to the command you want to create.

- **Vault Path**: `.agents/doc/summarize.md`
- **LUMEN Command**: `/doc@summarize`
- **Vault Path**: `.agents/wiki/connect.md`
- **LUMEN Command**: `/wiki@connect`

*Simply drop a Markdown file into a subfolder of `.agents`, and LUMEN will automatically register it as a command.*

---

### 🥗 Action Encyclopedia: Categorized Keywords
A Skill's behavior is defined by its `action` in the YAML header. Here is a categorized guide:

#### 1. Creation Actions (Generating Data)
- **`create_note`**: Saves AI output as a single new note. (Requires `path:` in YAML).
- **`create_notes`**: Batch-creates multiple notes in a single step. Supports "Zip-Aligned" distribution (N items mapping to N files).

#### 2. Editor Actions (Text Modification)
- **`replace`**: Replaces the currently selected text with AI output.
- **`insert_below`**: Appends the AI output directly beneath your cursor.

#### 3. Visual Actions (Canvas Power)
- **`to_canvas`**: Spawns the AI result as a new node on the Canvas.
- **`to_canvas_edge`**: (Experimental) Analyzes multiple nodes and draws logic arrows between them.

#### 4. Pipeline Logic (Agentic Flow)
- **`process`**: Runs the AI in the background—results are saved to a variable (e.g., `{{step1}}`) but not displayed.
- **`ask_user`**: Pauses the pipeline and shows a "Confirmation Card," allowing you to edit the AI's work before it continues.

---

### 🧪 Variable Recipes: Accessing Context

| Variable | Resulting Content |
| :--- | :--- |
| `{{title}}` | Current filename. |
| `{{content}}` | Full text of the current note. |
| `{{selection}}` | Highlighted text only. |
| `{{canvas_selection}}` | Content of selected Canvas nodes. |
| `{{StepID.FieldName}}` | Extract a specific field from an upstream step (e.g., `{{analysis.summary}}`). |

---

### 🚀 Case Studies: Real-World Agentic Thinking

#### Case A: `doc@summarize` (Automated Archiving)
- **Mindset**: Don't just read—archive.
- **Logic**: 
  1. Trigger Skill on a long article.
  2. YAML `ensure_folder: Summaries` creates the folder if missing.
  3. `action: create_note` saves the TL;DR version to the `Summaries/` folder automatically.

#### Case B: `wiki@connect` (Intelligent Knowledge Mapping)
- **Mindset**: Connect the dots across your entire wiki.
- **Logic**: 
  1. AI calls the `search_vault` tool to scan your `/wiki` folder.
  2. AI calls `read_note` to understand the connections.
  3. AI outputs a report suggesting backlinks and new topics that "should exist."

<br>
<br>

---

## 中文版 {#中文版}

# 07 特别篇：代理协议 (.agents)

`.agents` 文件夹是您 Obsidian 库中的“应用商店”。它允许您通过在特定目录结构中添加 Markdown 文件，来无限扩展 LUMEN Pro 的能力。这些文件会转化为自定义命令（技能），您可以随时通过命令面板或斜杠菜单调用它们。

### 🍱 安装食谱：目录映射 (Directory Mapping)
您通过“对齐”文件夹结构来“安装”并命名一个新的工具。

- **库路径**: `.agents/doc/summarize.md`
- **LUMEN 命令**: `/doc@summarize`
- **库路径**: `.agents/wiki/connect.md`
- **LUMEN 命令**: `/wiki@connect`

*只需将 Markdown 文件放进 `.agents` 的子文件夹中，LUMEN 就会自动将其注册为一个新命令。*

---

### 🥗 动作百科：分类关键词指南
技能的行为由 YAML 头中的 `action` 字段定义。以下是分类指南：

#### 1. 生成类动作 (数据产出)
- **`create_note`**: 将 AI 结果保存为一篇新笔记（需在 YAML 中指定 `path:`）。
- **`create_notes`**: 在单个步骤内批量创建多篇笔记。支持“齐位对齐”分发逻辑（即 N 个提取项对应生成 N 个文件）。

#### 2. 编辑器动作 (文本修改)
- **`replace`**: 将当前选中的文本替换为 AI 生成的内容。
- **`insert_below`**: 在光标下方直接追加 AI 生成的内容。

#### 3. 白板动作 (Canvas 强化)
- **`to_canvas`**: 将 AI 结果生成为白板中的一个新节点。
- **`to_canvas_edge`**：（实验性）分析多个节点并在它们之间绘制逻辑箭头。

#### 4. 工作流逻辑 (代理流水线)
- **`process`**: 纯后台 AI 运算——结果存入变量（如 `{{step1}}`），但不会立即显示。
- **`ask_user`**: 暂停流水线并弹出“审批卡片”，允许您在流程继续前修改 AI 的产出。

---

### 🧪 变量食谱：访问上下文信息

| 变量名 | 获取的内容 |
| :--- | :--- |
| `{{title}}` | 当前文件的主题/文件名。 |
| `{{content}}` | 当前笔记的全文字。 |
| `{{selection}}` | 仅限您选中的文本。 |
| `{{canvas_selection}}` | 白板中选中节点的文本内容。 |
| `{{步骤ID.字段名}}` | 从上游步骤中提取特定字段（例如 `{{分析.结论}}`）。 |

---

### 🚀 实战案例：代理化思维 (Agentic Thinking)

#### 案例 A：`doc@summarize` (自动化归档模式)
- **思维习惯**：不只是阅读，而是自动沉淀。
- **逻辑**：
  1. 对一篇长文触发技能。
  2. YAML 中的 `ensure_folder: Summaries` 确保归档目录存在。
  3. `action: create_note` 自动将省流版摘要保存到 `Summaries/` 文件夹。

#### 案例 B：`wiki@connect` (智能知识建模模式)
- **思维习惯**：连接整个百科库中的知识点。
- **逻辑**：
  1. AI 调用 `search_vault` 工具扫描您的 `/wiki` 文件夹。
  2. AI 调用 `read_note` 理解各条目间的深层含义。
  3. AI 输出报告，建议哪些条目应该互联，以及哪些“本该存在”的新主题值得撰写。
