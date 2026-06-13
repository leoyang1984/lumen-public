# LUMEN 运行时工作流指南

> 适用版本：5.0.4-pro 起。运行时工作流用于让白板工作流在 Obsidian 桌面端按时间自动执行，并把结果写入 Vault 笔记。

---

## 一句话理解

运行时工作流由三部分组成：

```text
白板 = 做什么
运行时面板 = 什么时候跑
保存设置 = 跑完写到哪里
```

排程只通过 UI 面板配置。不要在白板里写 `#lumen/schedule`，这个写法已移除。

---

## 快速开始

### 1. 准备一张白板

最小结构：

```text
[#lumen/start] -> [#lumen/step/1] -> [#lumen/output]
```

`#lumen/step/1` 示例：

```md
#lumen/step/1
请总结下面输入：

{{input}}
```

### 2. 打开运行时面板

入口：

```text
左侧 calendar-clock 图标
或 Cmd-P -> Open workflow runtime panel
```

面板里可以：

- 选择白板并编制
- 设置按间隔 / 每天 / 每周
- 设置保存方式和保存路径
- 立即运行
- 编辑、启停、删除工作流

### 3. 设置保存方式

覆盖同一个文件：

```text
LUMEN/Runtime/Reports/{{canvas}}.md
```

按日期保存历史：

```text
LUMEN/Runtime/Reports/{{canvas}}-{{date}}.md
```

面板会显示“将保存为”，例如：

```text
LUMEN/Runtime/Reports/Daily-Log-Summary-2026-06-13.md
```

---

## 输入写法

### 固定文件

适合项目状态、固定周报素材、固定 inbox 清单。

```md
#lumen/input
path: Project/城市滨水公园/项目状态.md
```

### 当天 Daily

适合每日总结、今日待办、晚间复盘。

```md
#lumen/input
folder: Daily
date: today
```

如果今天是 `2026-06-13`，实际读取：

```text
Daily/2026-06-13.md
```

### 动态路径

适合路径里带日期的固定命名。

```md
#lumen/input
path: Daily/{{date:YYYY-MM-DD}}.md
```

当前支持：

```text
{{date:YYYY-MM-DD}}
{{today}}
```

### 原生 file 节点

也可以继续使用 Obsidian Canvas 的 file 节点，指向某个固定文件。它适合固定材料，不适合“每天自动换文件”。

---

## 输出写法

输出路径在运行时面板里配置，不写在白板节点里。

### 变量

```text
{{canvas}} = 白板名，不含 .canvas
{{date}}   = 今天日期，YYYY-MM-DD
```

### 覆盖最新

模板：

```text
LUMEN/Runtime/Reports/{{canvas}}.md
```

白板：

```text
Daily-Log-Summary.canvas
```

实际保存：

```text
LUMEN/Runtime/Reports/Daily-Log-Summary.md
```

每次运行都会覆盖同一个文件。适合“只看最新状态”的任务。

### 按日期归档

模板：

```text
LUMEN/Runtime/Reports/{{canvas}}-{{date}}.md
```

实际保存：

```text
LUMEN/Runtime/Reports/Daily-Log-Summary-2026-06-13.md
```

适合日报、周报、复盘、可追溯历史记录。

### 自定义路径

```text
Daily/总结/{{canvas}}-{{date}}.md
```

实际保存：

```text
Daily/总结/Daily-Log-Summary-2026-06-13.md
```

---

## 常见周期任务

### 每日日志总结

输入：

```md
#lumen/input
folder: Daily
date: today
```

运行：

```text
每天 21:00
```

保存：

```text
Daily/总结/{{date}}-每日总结.md
```

提示词重点：

```md
分类规则：
- 只有“已完成 / 已确认 / 已验证 / 已生成 / 已修复”才放入今日完成。
- “需要 / 准备 / 待 / 计划 / 想 / 继续”放入待办 / 跟进。
- 不要把待验证事项写成已完成事项。
```

### 今日待办整理

输入：

```md
#lumen/input
folder: Daily
date: today
```

保存：

```text
Daily/待办/{{date}}-今日待办.md
```

提示词：

```md
请从今天日志中提取所有待办、跟进、承诺事项。

输出：
## 今日必须处理
## 可延后
## 等待他人 / 依赖条件

规则：
- 全部用 - [ ] 格式。
- 不要把已经完成的事项放进待办。
- 每条后面补一句来源依据。
```

### 项目健康检查

输入：

```md
#lumen/input
path: Project/城市滨水公园/项目状态.md
```

保存：

```text
Project/城市滨水公园/项目健康检查-最新.md
```

保存方式选择“覆盖同一个文件”。

提示词：

```md
请做项目健康检查，输出：

## 当前状态
## 进展
## 风险
## 下一步
## 需要我关注的 3 件事

规则：
- 风险必须基于原文证据。
- 如果资料不足，明确写“资料不足”，不要猜。
```

### 运行时日志巡检

输入：

```md
#lumen/input
path: LUMEN/Runtime/Logs/{{date:YYYY-MM-DD}}.md
```

保存：

```text
LUMEN/Runtime/Reports/运行时巡检-最新.md
```

提示词：

```md
请检查今天的运行日志，输出：

## 成功任务
## 失败任务
## 需要重试
## 需要修改白板或配置

规则：
- 没有失败就明确写“今天没有失败记录”。
- 不要推断不存在的错误。
```

---

## 最佳实践

### 1. 白板里只写“做什么”

白板只负责输入、步骤和输出。排程和保存路径放到运行时面板里。

### 2. 历史档案用日期，状态看板用覆盖

```text
日报 / 周报 / 复盘 -> 按日期保存历史
项目健康检查 / 今日待办 / 巡检看板 -> 覆盖同一个文件
```

### 3. 让 prompt 明确区分事实状态

总结类任务最容易把“需要验证”误写成“已验证”。建议固定加入：

```md
只有原文明确写着“已完成 / 已确认 / 已验证 / 已生成 / 已修复”的事项，才放入完成。
包含“需要 / 准备 / 待 / 计划 / 想 / 继续”的事项，放入待办或跟进。
```

### 4. 结果路径先看预览

保存前看“将保存为”。如果预览不符合预期，先改路径再运行。

### 5. 测试完记得停用

测试工作流会真实调用 LLM。测完请在运行时面板里停用或删除。

---

## 当前限制

- 仅在 Obsidian 运行时触发，桌面端优先；移动端后台不保证可靠。
- 调度是粗粒度 tick，不是秒级 cron。
- 目前不支持读取整个文件夹全部笔记。
- 目前不支持 `{{week}}`、`{{time}}` 等输出变量。
- 不支持 `#lumen/schedule`，请使用运行时面板。

---

## 排查

| 问题 | 检查 |
|---|---|
| 到点没运行 | 面板顶部“启用运行时”是否开启；该工作流 toggle 是否开启；`nextRun` 是否已到 |
| 没有报告 | 白板是否有 `#lumen/output` 或可产生最终 shadow 输出；保存路径预览是否正确 |
| 读取不到当天日志 | `Daily/YYYY-MM-DD.md` 是否存在；输入节点是否写成 `folder: Daily` + `date: today` |
| 报网络错误 | 通常是模型 API 或网络波动；运行时会对部分瞬时错误重试一次 |
| 白板上没有 chip | 只有已编制工作流才显示状态 chip；未编制白板不会提示 |
