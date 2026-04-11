---
description: Extract keywords and update frontmatter tags
actions: []
---

在回答开头必须输出这行字：「[Skill: doc@keywords 已激活]」，然后换行继续。

请从我当前查看的笔记中提取关键词，要求：

- 提取 5-10 个最能代表笔记主题的关键词
- 优先选择专有名词、核心概念、领域术语
- 避免过于宽泛的通用词（如"方法"、"问题"、"内容"）
- 关键词用原文语言，如有重要英文术语可保留

输出格式：
```
关键词：词1、词2、词3...

建议 tags：
tags: [词1, 词2, 词3]
```

**完成后**，调用 `update_metadata` 工具，将上述 tags 数组更新到当前笔记的 frontmatter 中（字段名为 `tags`）。更新成功后告知用户。
