[English Version Below](#english-version) | [中文版往下看](#中文版)

---

## English Version {#english-version}

# 04 Light Skills: Custom AI Automation (Markdown DSL)

Light Skills are the "Programs" of LUMEN. By writing a simple Markdown file with structural YAML, you can create custom AI commands that perform complex, multi-step tasks autonomously.

### 🍱 Anatomy of a Skill
Every Light Skill file (saved in your skills directory) consists of two parts:
1.  **YAML Header**: Defines the behavior (Save path, Action type, UI Icon).
2.  **Prompt Template**: The instructions sent to the AI, which can include dynamic variables.

---

### 🥗 Action Recipes: What can AI do?

#### 1. "Save to New Note" (`create_note`)
Useful for drafting articles, generating reports, or extracting concepts.
- **Recipe**:
  ```yaml
  name: "Draft Report"
  action: "create_note"
  path: "Reports/{{title}}-Draft.md"
  ```
- **In use**: When run, AI processes your instructions and automatically creates the file at the specified path.

#### 2. "In-place Transform" (`replace` / `insert_below`)
Perfect for the Slash Command (`/lumen`) to polish or expand text.
- **Recipe**:
  ```yaml
  name: "Polish Text"
  action: "replace"
  ```
- **In use**: Highlight text in the editor, call the skill, and AI replaces the selection with refined prose.

#### 3. "Canvas Instantiation" (`to_canvas`)
- **Recipe**:
  ```yaml
  name: "Mind Map Node"
  action: "to_canvas"
  ```
- **In use**: Running this skill inside a Canvas creates the AI output as a new physical node.

---

### 🧪 Variable Recipes: Dynamic Context
Use `{{variable}}` to inject real-time data into your prompts.

| `{{date:YYYY-MM-DD}}` | The current date (Format customizable). |
| `{{clipboard}}` | Content of your system clipboard. |
| `{{step1}}` | (Pipeline only) The output of a previous step. |

---

### 🧠 Smart Context Sensing (The "No Selection" Logic)
LUMEN is designed to be efficient. If you trigger a Skill without highlighting any text, the engine automatically "senses" the context in this order:
1. **Editing Mode**: Senses the current Line -> then the current Paragraph.
2. **Reading Mode**: Senses the **Whole Document**.
*This allows you to run a "Summarize" skill in one click while reading, without scrolling to select everything.*

---

### 🚀 Agentic Pipelines: Multi-step Multi-Agent
For complex workflows, use `mode: pipeline` to chain multiple AI steps.

#### Recipe: Analysis → Approval → File
```markdown
---
name: "Deep Analyst"
mode: pipeline
---
[STEP: analyst]
action: process
Analyze the following trend: {{selection}}

[STEP: human_check]
action: ask_user
instruction: ### Please verify the AI Analysis
{{analyst}}

[STEP: finalize]
action: create_note
path: Analysis/{{title}}.md
Save the final version: {{human_check}}
```

#### Why `ask_user`?
The `ask_user` action enables **Human-in-the-Loop**. The pipeline pauses, pops up a card for you to edit or approve the AI's intermediate work, and only continues when you click "Confirm".

---

### 💡 Pro Tip: Token Efficiency
Add `system_prompt: "Output results ONLY. No meta-talk."` to your YAML. This prevents the AI from saying "Sure, here is your analysis...", saving you 30%+ in token costs and improving pipeline stability.

<br>
<br>

---

## 中文版 {#中文版}

# 04 轻技能：自定义 AI 自动化 (Markdown DSL)

Light Skills（轻技能）是 LUMEN 的“程序”。通过编写带有 YAML 结构的简单 Markdown 文件，您可以创建自定义 AI 命令，自主执行复杂的多步任务。

### 🍱 技能解构
每个轻技能文件（保存在您的技能目录中）由两部分组成：
1.  **YAML 配置头**：定义行为（保存路径、动作类型、UI 图标）。
2.  **提示词模板**：发送给 AI 的指令，其中可以包含动态变量。

---

### 🥗 动作食谱：AI 能做什么？

#### 1. “保存为新笔记” (`create_note`)
适用于草拟文章、生成报告或提取概念。
- **食谱**：
  ```yaml
  name: "起草报告"
  action: "create_note"
  path: "Reports/{{title}}-草稿.md"
  ```
- **用法**：执行时，AI 会处理您的指令，并自动在指定路径创建文件。

#### 2. “就地转换” (`replace` / `insert_below`)
最适合通过斜杠命令 (`/lumen`) 进行润色或扩写。
- **食谱**：
  ```yaml
  name: "润色文本"
  action: "replace"
  ```
- **用法**：在编辑器中高亮文本，调用技能，AI 会用精修后的文字替换您的选区。

#### 3. “白板实例化” (`to_canvas`)
- **食谱**：
  ```yaml
  name: "思维导图节点"
  action: "to_canvas"
  ```
- **用法**：在 Canvas（白板）内运行此技能，AI 的输出会直接生成为一个新的物理节点。

---

### 🧪 变量食谱：动态上下文
使用 `{{变量名}}` 将实时数据注入您的提示词。

| `{{date:YYYY-MM-DD}}` | 当前日期（格式可自定义）。 |
| `{{clipboard}}` | 系统剪贴板的内容。 |
| `{{step1}}` | （仅限 Pipeline）上一步骤的输出结果。 |

---

### 🧠 智能上下文感应 (“无选区”逻辑)
LUMEN 的设计初衷是高效。如果您在没有高亮任何文本的情况下触发技能，引擎会按以下顺序自动“感应”上下文：
1. **编辑模式**：感应当前行 -> 若为空则感应整个段落。
2. **阅读模式**：感应**全文内容**。
*这允许您在阅读长文时，无需滚动鼠标全选，一键即可触发“全文摘要”技能。*

---

### 🚀 代理流水线：多步协同
对于复杂的工作流，使用 `mode: pipeline` 将多个 AI 步骤串联起来。

#### 食谱：分析 → 审批 → 文件
```markdown
---
name: "深度分析师"
mode: pipeline
---
[STEP: analyst]
action: process
请对以下趋势进行分析：{{selection}}

[STEP: human_check]
action: ask_user
instruction: ### 请核对 AI 分析结果
{{analyst}}

[STEP: finalize]
action: create_note
path: Analysis/{{title}}.md
保存最终版本：{{human_check}}
```

#### 为什么要用 `ask_user`？
`ask_user` 动作实现了 **“人机协同 (Human-in-the-Loop)”**。流水线会暂停，弹出一个卡片供您修改或批准 AI 的阶段性成果。只有当您点击“确认”后，流程才会向后继续。

---

### 💡 进阶技巧：节省 Token
在 YAML 中添加 `system_prompt: "Output results ONLY. No meta-talk."`。这可以防止 AI 说“好的，这是为您生成的分析...”，从而节省 30% 以上的 Token 成本并显著提高流水线的逻辑稳定性。
