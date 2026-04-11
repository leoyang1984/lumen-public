---
description: Consolidate wiki structure — merge overlapping articles, split oversized ones, restructure index
actions:
  - type: ensure_folder
    path: wiki
---

在回答开头必须输出这行字：「[Skill: wiki@consolidate 已激活]」，然后换行继续。

知识库已达到需要整理结构的规模。请先分析并提出方案，**等用户确认后再执行**。

### Check 1 — 合并候选

1. 调用 `search_vault` 获取 `wiki/` 下所有条目
2. 调用 `read_note` 读取各条目内容
3. 找出内容或范围有显著重叠的条目组
4. 对每组提出：「合并 `[[A]]` 和 `[[B]]` 为 `[[C]]`」，附一句理由

### Check 2 — 拆分候选

1. 找出超过约 800 字、或包含多个明显无关知识块的条目
2. 对每篇提出：「将 `[[A]]` 拆分为 `[[A1]]` 和 `[[A2]]`」，附一句理由

### Check 3 — 索引重组

1. 调用 `read_note` 读取 `wiki/index.md`
2. 若条目超过约 20 个，提出将其分组为 3-5 个主题分区，给出建议的分区名称

---

**展示所有方案后询问用户**：全部执行、选择性执行，还是跳过？

---

### 执行（仅在用户确认后）

**合并**：
- 将两篇内容合并，保留所有 `## 来源` backlink
- 调用 `create_note` 保存新条目
- 删除被合并的原条目（若插件支持 delete，否则清空内容并注明已合并至 `[[新条目]]`）
- 更新所有其他条目中指向旧条目的 `[[wikilink]]`

**拆分**：
- 创建两篇新条目，内容按主题分配
- 删除原条目
- 更新所有相关 `[[wikilink]]`

**索引重组**：
- 按提议的分区重写 `wiki/index.md`，保留所有现有条目和注释标记
- 调用 `create_note` 保存

### 完成后汇报

告知用户：合并了哪些条目、拆分了哪些条目、索引结构如何变化。
