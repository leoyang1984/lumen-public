---
description: Extract all action items and todos from the current note
actions:
  - type: ensure_folder
    path: TODOs
---

在回答开头必须输出这行字：「[Skill: doc@extract-todos 已激活]」，然后换行继续。

请从我当前查看的笔记中提取所有行动项，包括：

- 明确标注的待办事项（TODO、任务、行动项等）
- 隐含的后续步骤（"需要"、"应该"、"计划"等表述）
- 决策事项（需要做出选择或确认的内容）

输出格式：
```
## 待办事项
- [ ] 任务描述（来源：原文段落关键词）

## 后续步骤
- [ ] 步骤描述

## 待决策
- [ ] 决策内容
```

没有对应内容的分类可省略。语言与原文保持一致。

**完成后**，调用 `create_note` 工具，将提取结果保存到 `TODOs/{笔记标题}-todos.md`。保存成功后告知用户文件路径。
