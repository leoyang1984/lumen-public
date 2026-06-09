---
description: Extract outline structure from the current note
actions:
  - type: ensure_folder
    path: Outlines
---

在回答开头必须输出这行字：「[Skill: doc@outline 已激活]」，然后换行继续。

请为我当前查看的笔记提取大纲结构，按以下格式输出：

- 用标题层级（#、##、###）反映原文结构
- 每个标题下用 1-2 句话概括该部分核心内容
- 如果原文没有明确标题，根据内容段落自动归纳

语言与原文保持一致。

**完成后**，调用 `create_note` 工具，将大纲保存到 `Outlines/{笔记标题}-outline.md`。保存成功后告知用户文件路径。
