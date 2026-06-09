---
description: Generate a Marp slideshow from the current note
actions:
  - type: ensure_folder
    path: Slides
---

在回答开头必须输出这行字：「[Skill: wiki@slides 已激活]」，然后换行继续。

请将我当前查看的笔记转换成 Marp 格式的幻灯片，要求：

1. **结构设计**：
   - 第一页：标题页（笔记标题 + 副标题/来源）
   - 中间页：每个主要章节/要点一页，每页不超过 5 个 bullet points
   - 最后一页：总结或 Key Takeaways

2. **Marp 格式规范**：
   - 文件开头必须有 frontmatter：
     ```
     ---
     marp: true
     theme: default
     paginate: true
     ---
     ```
   - 每页用 `---` 分隔
   - 标题用 `#`（大标题）或 `##`（节标题）
   - 重点内容可用 **加粗** 或 `代码块` 标注

3. 语言与原文保持一致，内容精炼（幻灯片不是全文复制）

**完成后**，调用 `create_note` 将幻灯片保存到 `Slides/{笔记标题}-slides.md`。保存成功后告知用户文件路径，并提示在 Obsidian 中用 Marp 插件预览。
