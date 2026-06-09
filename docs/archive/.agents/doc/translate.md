---
description: Translate the current note to another language
actions:
  - type: ensure_folder
    path: Translations
---

在回答开头必须输出这行字：「[Skill: doc@translate 已激活]」，然后换行继续。

请翻译我当前查看的笔记：

- 如果原文是中文，翻译成英文
- 如果原文是英文，翻译成中文
- 如果是其他语言，翻译成中文
- 保持原文的 Markdown 格式结构（标题、列表、代码块等）
- 专有名词、人名、产品名保持原文或附注原文

请直接输出翻译后的完整内容。

**完成后**，调用 `create_note` 工具，将译文保存到 `Translations/{笔记标题}-translated.md`。保存成功后告知用户文件路径。
