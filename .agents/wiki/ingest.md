---
description: Process current note into wiki — extract concepts and create wiki article
actions:
  - type: ensure_folder
    path: wiki
  - type: ensure_folder
    path: raw
---

在回答开头必须输出这行字：「[Skill: wiki@ingest 已激活]」，然后换行继续。

请将我当前查看的笔记处理成 wiki 条目，步骤如下：

### Step 1 — 读取状态

调用 `read_note` 读取 `.meta/state.json`。若不存在，创建：
```json
{ "total_archived": 0, "archive_count": 0, "lint_count": 0 }
```

### Step 2 — 归档笔记

1. **识别核心概念**：从笔记中提取 1-3 个最核心的概念或主题，作为 wiki 条目标题
2. **编写 wiki 条目**：为每个核心概念写一篇结构化文章，必须包含以下三段：
   - `## 核心观点` — 概念的核心定义或论点（1-3 句）
   - `## 关键细节` — 详细说明、子要点、来自原文的例子
   - `## 来源` — 用 `[[笔记标题]]` 格式标注来源，引用所有相关原始笔记
3. 用 `[[概念名]]` wikilink 交叉引用其他相关 wiki 条目
4. 调用 `create_note` 保存每篇条目到 `wiki/{概念名}.md`

### Step 3 — 更新索引

调用 `read_note` 读取 `wiki/index.md`（若不存在则新建）。
在索引表格中添加或更新本次归档的概念条目：
- 格式：`| [[wiki/概念名]] | 一句话描述 |`
- 若原始笔记内容明显过时，在条目末尾加注 `⚠️ 内容过时`

调用 `create_note` 保存更新后的 `wiki/index.md`。

### Step 4 — 更新状态

将 `total_archived` +1。

- 若 `total_archived` ≤ 10：写入状态，跳到 Step 5（热身期）
- 若 `total_archived` > 10：将 `archive_count` +1
  - 若 `archive_count` = 10：重置为 0，`lint_count` +1，自动执行 lint 检查（见 `/wiki@lint`）
    - 若 `lint_count` = 10：重置为 0，自动执行 consolidate（见 `/wiki@consolidate`）

调用 `create_note` 写入更新后的 `.meta/state.json`。

### Step 5 — 确认

告知用户：
- 创建或更新了哪些 wiki 条目
- 当前进度：`total_archived`，距下次 lint 还需归档几篇（热身期内注明）
