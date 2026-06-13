# LUMEN 运行时工作流包

这个包用于学习和复用 LUMEN 的定时白板工作流能力。

## 包含内容

- `runtime-workflow-guide.md`：完整使用指南
- `syntax-cheatsheet.md`：输入 / 输出语法速查
- `best-practices.md`：常见周期任务和最佳实践
- `templates/runtime-daily-summary.canvas`：可直接复制使用的每日日志总结白板

## 快速开始

1. 把 `templates/runtime-daily-summary.canvas` 复制到你的 Obsidian Vault。
2. 准备一篇当天日记，例如 `Daily/2026-06-13.md`。
3. 打开 LUMEN 的“工作流运行时”面板。
4. 选择这张白板，设置每天运行。
5. 推荐保存设置：

```text
保存方式：按日期保存历史
保存到：Daily/总结/{{date}}-每日总结.md
```

## 核心心智模型

```text
白板 = 做什么
运行时面板 = 什么时候跑
保存设置 = 跑完写到哪里
```

排程只通过运行时面板配置。不要在白板里写排程语法。

## 支持的变量

输出路径：

```text
{{canvas}} = 白板名，不含 .canvas
{{date}}   = 今天，YYYY-MM-DD
```

动态输入路径：

```text
{{date:YYYY-MM-DD}}
{{today}}
```

## 推荐起步模板

```text
每日总结：Daily/总结/{{date}}-每日总结.md
今日待办：Daily/待办/{{date}}-今日待办.md
项目健康检查：Project/项目名/项目健康检查-最新.md
```

