# 图表测试提示词 / Diagram Test Prompt

适用 / Applies to: LUMEN 5.15.0. 使用自己已有的笔记路径测试导航；不需要发送任何私密内容。Use an existing note path; no private note content is required.

## 中文

```text
仅在聊天中输出三张图，各使用独立的 mermaid 代码块。不要调用工具、联网、创建或修改笔记。

1. flowchart LR：A["fa:fa-user 阅读"] → B["fa:fa-database 知识库"] → C["fa:fa-globe 官网"]，另从 B 连接到公式节点 D["$$\frac{a+b}{c}$$"]。使用 click C "https://obsidian.md" 添加网页链接。
2. architecture-beta：客户端使用 lumen:monitor，服务使用 lumen:server，数据库使用 lumen:database，依次连接。
3. flowchart LR：连接正确公式 $$x^2+y^2=z^2$$、错误公式 $$\unknowncommand{x}$$ 和未知图标 fa:fa-not-a-real-icon 的可读标签。保留错误以检查回退。

保留公式反斜杠，标签用双引号，不在三个代码块外再套代码围栏。
```

生成后：点「⋯」测试源码、复制与导出；改变方向、字号、最大缩放并重载验证保存；确认图标与公式在 PNG/SVG 中完整。需要笔记导航时，将真实路径提供给助手，并要求用 `click A "完整库内路径.md"`，不要猜测文件名。

## English

```text
Output three separate Mermaid fences in chat. Do not call tools, browse, create or edit notes.

1. flowchart LR: connect A["fa:fa-user Read"] to B["fa:fa-database Knowledge"] to C["fa:fa-globe Website"], and B to D["$$\frac{a+b}{c}$$"]. Add click C "https://obsidian.md".
2. architecture-beta: connect a lumen:monitor client, a lumen:server service and a lumen:database database.
3. flowchart LR: connect $$x^2+y^2=z^2$$, the intentionally invalid $$\unknowncommand{x}$$, and a readable label containing fa:fa-not-a-real-icon. Preserve the errors to test fallback.

Preserve backslashes, quote labels, and do not wrap all three fences in another fence.
```

Then test the ellipsis actions, source view, copying and export. Change direction/font/zoom, reload and verify persistence. Check icons/formulas in PNG/SVG. For note navigation, supply an actual full Vault path and ask for `click A "Full/Vault/Path.md"`; never invent a filename.
