# 运行时工作流语法速查

## 白板最小结构

```text
[#lumen/start] -> [#lumen/step/1] -> [#lumen/output]
```

## 固定文件输入

适合项目状态、固定素材、Inbox 清单。

```md
#lumen/input
path: Project/项目名/项目状态.md
```

## 当天 Daily 输入

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

## 动态路径输入

```md
#lumen/input
path: Daily/{{date:YYYY-MM-DD}}.md
```

当前支持的输入日期写法：

```text
{{date:YYYY-MM-DD}}
{{today}}
```

## Step 节点

```md
#lumen/step/1
请总结下面输入：

{{input}}
```

## Output 节点

```md
#lumen/output
[交互运行时会写回这里；定时运行时会写入面板配置的保存路径。]
```

## 输出路径变量

```text
{{canvas}} = 白板名，不含 .canvas
{{date}}   = 今天，YYYY-MM-DD
```

示例：

```text
LUMEN/Runtime/Reports/{{canvas}}.md
-> LUMEN/Runtime/Reports/Daily-Log-Summary.md
```

```text
LUMEN/Runtime/Reports/{{canvas}}-{{date}}.md
-> LUMEN/Runtime/Reports/Daily-Log-Summary-2026-06-13.md
```

```text
Daily/总结/{{date}}-每日总结.md
-> Daily/总结/2026-06-13-每日总结.md
```

## 当前不支持

```text
#lumen/schedule
{{week}}
{{time}}
自动读取整个文件夹全部笔记
用 frontmatter / Dataview 查询作为运行时输入
```

请通过运行时面板设置排程。

