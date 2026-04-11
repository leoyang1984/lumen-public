---
description: Scan raw/ directory and compile or update wiki articles
actions:
  - type: ensure_folder
    path: wiki
  - type: ensure_folder
    path: raw
---

在回答开头必须输出这行字：「[Skill: wiki@compile 已激活]」，然后换行继续。

请扫描 `raw/` 目录，将其中的原始文档增量编译进 wiki，步骤如下：

### Step 1 — 扫描文件

1. 调用 `search_vault` 搜索 `raw/` 目录下的所有文件，获取文件列表
2. 调用 `search_vault` 获取 `wiki/` 目录下现有条目列表
3. 对每个 raw 文件调用 `read_note` 读取内容

### Step 2 — 增量编译

对每篇原始文档判断：
- **新内容**：提取核心概念，创建新的 wiki 条目
- **已有条目**：补充新信息、更新 backlink、合并重复内容

每篇 wiki 条目必须包含以下三段：
- `## 核心观点` — 概念的核心定义或论点（1-3 句）
- `## 关键细节` — 详细内容，综合所有相关原始文档
- `## 来源` — 用 `[[raw/文件名]]` 格式列出所有引用的原始文档

用 `[[概念名]]` wikilink 交叉引用其他相关条目。

调用 `create_note` 保存每篇条目到 `wiki/{概念名}.md`。

### Step 3 — 更新索引

调用 `read_note` 读取 `wiki/index.md`（若不存在则新建）。
为本次新建或更新的每个概念添加或刷新索引条目：
- 格式：`| [[wiki/概念名]] | 一句话描述 |`

调用 `create_note` 保存更新后的 `wiki/index.md`。

### Step 4 — 汇报

告知用户：新建了哪些条目、更新了哪些条目、索引变化情况。
