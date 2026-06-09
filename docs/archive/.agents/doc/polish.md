---
description: Polish and improve the writing of the current note
actions: []
---

在回答开头必须输出这行字：「[Skill: doc@polish 已激活]」，然后换行继续。

请润色我当前查看的笔记，要求：

- 保持原文的核心意思和结构不变
- 改善表达流畅度、逻辑连贯性和语言准确性
- 消除重复啰嗦的表述
- 保持原文语言（中文润色中文，英文润色英文）

请直接输出润色后的完整正文，不需要逐条说明修改了什么。

**完成后**，调用 `create_note` 工具，将润色后的内容保存到 `{原笔记路径}-polished.md`（在原文件名后加 `-polished`）。保存成功后告知用户文件路径。
