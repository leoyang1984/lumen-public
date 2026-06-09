[English Version Below](#english-version) | [中文版往下看](#中文版)

---

## English Version {#english-version}

# 03 Deep Knowledge: Memory Index & Semantic Retrieval (RAG)

LUMEN Pro features a high-performance **Local Memory Index** (RAG) that allows AI to answer questions based on your actual vault content. Unlike traditional keyword search, this system understands the "meaning" of your notes.

### 📥 The Ingestion Recipe: How to Build Your Index

#### 1. Direct Entry (Single Note)
- **Action**: Open any note and run the command `Join Memory Index (加入记忆索引)`.
- **The Annotation Step**: A modal will appear asking "Why is this note important?". 
- **The Rule**: **Annotations hold 70% of the weight** in search results. Briefly defining the core value of a note ensures the AI finds it exactly when needed.

#### 2. Batch Entry (Folder)
- **Action**: Right-click any folder in your File Explorer.
- **Select**: `Memory Index: 批量入库当前目录`.
- **Result**: LUMEN will recursively index all Markdown files in that folder.

#### 3. Visual Confirmation
- Once indexed, a property `memory-indexed: YYYY-MM-DD` will be added to your note's frontmatter automatically.

---

### 🔍 The Retrieval Recipe: How to Use Your Memory

#### 1. Canvas Summoning (Visual Retrieval)
- **Action**: Select a node on the Canvas and run the command `Find Related Memory (查找关联记忆)`.
- **Execution**: AI analyzes your current selection and fetches the most semantically related notes from your index.
- **Result**: The related notes are automatically instantiated as new nodes on the Canvas and linked to your selection with logic arrows.

#### 2. AI Tool Access (search_vault)
- If enabled, the AI in the Chat panel or Canvas Flow can autonomously call the `search_vault` tool to find relevant facts before answering your prompt.

---

*This ensures that your "Aha!" moments are prioritized over generic search results.*

---

### 🧠 Dual-Track Memory System
LUMEN Pro utilizes two parallel memory subsystems:

#### 1. Passive RAG (Vector Index)
- **Nature**: Persistent, searchable database of your existing notes.
- **Workflow**: Manually "Join Index" -> Weighted Search.

#### 2. Active Session Memory (Long-term & Topics)
- **Nature**: Dynamic summarization of your current AI conversations.
- **Location**: Files stored in the `Memory/` folder.
- **Structure**: AI automatically updates `long-term.md` (for preferences) and specific `topics/*.md` files using these mandatory headers:
  - `## [Decision]`: What was finally decided.
  - `## [Rationale]`: Why it was chosen.
  - `## [Abandoned]`: Options rejected and why.
  - `## [Status]`: Current blockers or progress.

<br>
<br>

---

## 中文版 {#中文版}

# 03 深度知识：记忆索引与语义检索 (RAG)

LUMEN Pro 内置了高性能的**本地记忆索引 (Local Memory Index)** 系统，允许 AI 基于您笔记库的真实内容回答问题。与传统的关键词搜索不同，该系统能够理解笔记的“深层含义”。

### 📥 入库食谱：如何构建您的索引

#### 1. 单篇快速入库
- **操作**：打开任意笔记，运行命令 `Join Memory Index (加入记忆索引)`。
- **批注步骤**：系统会弹出一个模态框问您：“为什么这篇笔记很重要？”
- **规则**：**手动批注占据检索权重的 70%**。简短定义笔记的核心价值，可以确保 AI 在您最需要的时候精准找到它。

#### 2. 文件夹批量入库
- **操作**：在文件管理器中右键点击任意文件夹。
- **选择**：`Memory Index: 批量入库当前目录`。
- **效果**：LUMEN 会递归索引该文件夹下的所有 Markdown 文件。

#### 3. 视觉确认
- 成功入库后，笔记的 YAML 属性中会自动添加 `memory-indexed: YYYY-MM-DD` 标记。

---

### 🔍 检索食谱：如何提取您的记忆

#### 1. 白板灵感召唤 (Canvas Summoning)
- **操作**：在 Canvas（白板）中选中一个节点，运行命令 `Find Related Memory (查找关联记忆)`。
- **执行**：AI 将分析您的当前选区，并从索引库中调取语义最相关的笔记。
- **效果**：关联笔记会自动作为新节点出现在白板上，并带有逻辑连线指向您的选区。

#### 2. 工具调用 (search_vault)
- 如果开启了相应工具，Chat 面板或 Canvas Flow 中的 AI 会在回答问题前，自动调用 `search_vault` 工具检索您的笔记库。

---

*这种设计确保了您的“深度洞察”在搜索结果中优先于普通的文本匹配。*

---

### 🧠 双轨记忆系统说明
LUMEN Pro 实际上运行着两套平行的记忆子系统：

#### 1. 被动 RAG (向量索引)
- **本质**：您已有笔记的持久化、可搜索数据库。
- **流程**：手动“加入索引” -> 加权检索。

#### 2. 主动 Session 记忆 (长效与专题)
- **本质**：对当前 AI 对话历史的动态总结与沉淀。
- **位置**：存储在 `Memory/` 目录下的 Markdown 文件。
- **结构**：AI 会自动更新 `long-term.md`（个人偏好）和 `topics/` 下的专题文件，并强制采用以下规范标题：
  - `## [Decision]`：最终达成的决策。
  - `## [Rationale]`：决策背后的逻辑。
  - `## [Abandoned]`：曾考虑但弃用的方案及原因。
  - `## [Status]`：当前进度或存在的阻碍。
