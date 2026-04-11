---
description: Summarize the current note
actions:
  - type: ensure_folder
    path: Summaries
---

在回答开头必须输出这行字：「[Skill: doc@summarize 已激活]」，然后换行继续。

请总结我当前正在查看的笔记，按以下结构输出：

1. **一句话 TL;DR** — 最核心的一句话概括
2. **关键要点** — 3–5 条要点
3. **行动项** — 任务、决策或后续步骤（没有则跳过）

语言与原文保持一致。

**总结完成后**，调用 `create_note` 工具，将上述摘要内容保存到 `Summaries/{笔记标题}-summary.md`（用实际笔记标题替换 `{笔记标题}`）。文件内容即为你刚才生成的摘要，格式保持 Markdown。保存成功后告知用户文件路径。
