请进行 LUMEN 的 Pele 图表渲染测试。

仅在聊天中回复，将下面四段 Mermaid 代码块逐段原样输出，每段前加一个简短标题。不要在外面再加一层代码围栏，不要用图片替代图表。本次只测试文本图表，不需要调用工具、联网或读写笔记。

第一段：中文长标签换行。

```mermaid
flowchart TB
 A[这是一个没有空格的很长中文标签用于验证自动换行不会撑宽聊天侧栏中的图表]
 A --> B[收集资料并整理研究结论]
 B --> C[输出报告]
```

第二段：跨子图连线。

```mermaid
flowchart LR
 subgraph input[输入资料]
  A[阅读笔记] --> B[参考资料]
 end
 subgraph work[分析处理]
  C[提取要点] --> D[综合总结]
 end
 A --> D
 B --> C
 A --> C
```

第三段：中文桑基图与渐变。

```mermaid
sankey-beta
阅读时间,文献研究,50
阅读时间,实践案例,30
阅读时间,复盘整理,20
文献研究,最终报告,50
实践案例,最终报告,30
复盘整理,最终报告,20
```

第四段：上下标、代码、快捷键、下划线与引用斜体。

```mermaid
flowchart TB
 A["化学式：H<sub>2</sub>O；指数：x<sup>2</sup>"]
 B["行内代码：<code>render()</code>；快捷键：<kbd>Ctrl</kbd> + <kbd>C</kbd>"]
 C["<u>下划线</u>；<ins>新增文字</ins>；<cite>引用斜体</cite>"]
 A --> B --> C
```
