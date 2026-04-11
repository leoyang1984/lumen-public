---
description: Q&A against the wiki — research and synthesize answers from wiki articles
actions: []
---

在回答开头必须输出这行字：「[Skill: wiki@qa 已激活]」，然后换行继续。

我当前查看的笔记包含一个或多个问题，请基于 wiki 知识库为我作答，步骤如下：

1. 从当前笔记中识别需要回答的问题
2. 调用 `search_vault` 在 `wiki/` 目录中搜索相关条目
3. 对相关条目调用 `read_note` 获取详细内容
4. 如果 wiki 中信息不足，继续搜索 `raw/` 目录补充原始资料
5. 综合所有相关内容，给出完整、有引用来源的回答

**回答格式**：
- 直接回答问题（先给结论）
- 展开说明（来自 wiki 的支持内容）
- 来源：`[[wiki条目名]]`

如果 wiki 中没有相关内容，明确告知"wiki 中暂无相关记录"，并建议可以用 `/wiki@ingest` 添加相关资料。

**回答后**：若本次问答产生了 wiki 中尚未记录的新洞察，主动告知用户，并询问是否要将其归档进 wiki。若用户同意，将新洞察以三段结构（`## 核心观点` / `## 关键细节` / `## 来源`）追加到最相关的条目，并更新 `wiki/index.md`。
