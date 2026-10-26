# LUMEN 5.15.0 — 公式、图标与图表导航 / Math, Icons and Diagram Navigation

2026-10-26

## 中文

- **离线数学公式**：在支持的图表标签中用 `$$...$$` 排版分式、根号、积分、求和、矩阵和常用 TeX/AMS 表达式。公式输出为内联 SVG，支持主题及 PNG/SVG 导出；无效命令显示可读源码，不影响其余节点。这不是完整 LaTeX 文档编译器。
- **更清爽的操作菜单**：图表右上角「⋯」收纳查看源码、复制 Mermaid/Markdown、复制 PNG、保存到笔记和导出 SVG，并提供图表设置入口。菜单在窗口内展开，支持键盘操作。
- **点击节点导航**：支持打开已存在的 Markdown 笔记和 HTTP/HTTPS 网页。缺失或歧义笔记有提示，不自动创建文件；拖动平移不会误打开链接。建议使用完整库内路径。
- **26 个离线图标**：内置人物、文件、数据库、服务器、云、网页、任务等 Lucide SVG。流程图使用 `fa:fa-` 语法别名，架构图可使用 `lumen:`。图标随主题变化并保留在图片导出中，不下载远程图标或字体。
- **三个实用设置**：自适应／保持源码方向、14／16／20 px 基础字号、3×／5×／8× 最大缩放。保存后应用到已有图表，重载后保留，公式与导出同步更新。

最低 Obsidian 版本更新为 **1.5.7**，覆盖图表菜单与完整图片保存接口。图表内图片、任意脚本及任意协议仍未开放。点击交互用于聊天预览；导出的 PNG 是静态图片，SVG 不保留活动导航。

### 验证与升级

71 个自动回归入口、Node/jsdom 交互测试、TypeScript 和生产构建通过；在隔离 Obsidian 1.14.5 合成库中完成桌面 Computer Use 验收，包括设置保存与重载恢复、深浅色、节点导航、PNG 复制粘贴与保存、独立 SVG 导出。未将桌面结果视为移动端真机、全部图表类型或所有第三方主题的验收。

BRAT 仓库：`leoyang1984/lumen-public`。手动升级只下载本 Release 的 `main.js`、`manifest.json`、`styles.css`，备份后替换 `.obsidian/plugins/lumen/` 中同名文件并重载插件，保留 `data.json`、笔记与历史。GitHub 自动生成的 Source code 压缩包不是插件安装包。

[图表使用指南](DIAGRAM_GUIDE.md) · [图表导出](DIAGRAM_EXPORT_GUIDE.md) · [测试提示词](DIAGRAM_TEST_PROMPT.md)

---

## English

- **Offline math**: use `$$...$$` in supported labels for fractions, roots, integrals, sums, matrices and common TeX/AMS expressions. Inline SVG formulas follow the theme and survive PNG/SVG export. Invalid commands remain readable source without breaking other nodes. This is not a full LaTeX document compiler.
- **Compact actions**: the top-right ellipsis contains source view, Mermaid/Markdown copying, PNG copying, Save to note and SVG export, plus Diagram settings. Menus open inside the window and support keyboard navigation.
- **Clickable nodes**: open existing Markdown notes and HTTP/HTTPS websites. Missing or ambiguous notes report a message without creating files. Panning does not activate navigation; use complete Vault paths where possible.
- **26 offline icons**: bundled Lucide SVGs cover people, files, databases, servers, cloud, websites and tasks. Flowchart `fa:fa-` names are syntax aliases; architecture supports `lumen:`. Icons follow themes and remain in exports, with no remote icon or font downloads.
- **Reading preferences**: adaptive/source direction, 14/16/20 px base font sizes and 3×/5×/8× maximum zoom. Preferences update existing diagrams after saving and survive reload, including formula and export sizing.

Requires **Obsidian 1.5.7+**, covering diagram menus and complete attachment-saving APIs. Embedded diagram images, arbitrary scripts and arbitrary URI schemes remain disabled. Navigation is available in chat previews; PNG is static and exported SVG removes active navigation.

### Validation and upgrade

All 71 regression entrypoints, Node/jsdom interactions, TypeScript checking and the production build passed. Desktop Computer Use acceptance used an isolated Obsidian 1.14.5 Vault with synthetic notes, covering persistence/reload, light/dark themes, navigation, PNG copy/paste/save and standalone SVG export. Physical mobile devices, every diagram type and all third-party themes are not claimed as manually verified.

Use `leoyang1984/lumen-public` in BRAT. For manual upgrades, back up and replace only this Release's `main.js`, `manifest.json` and `styles.css` under `.obsidian/plugins/lumen/`, then reload. Preserve `data.json`, notes and history. GitHub-generated Source code archives are not plugin installation packages.

[Diagram guide](DIAGRAM_GUIDE.md) · [Image export](DIAGRAM_EXPORT_GUIDE.md) · [Test prompt](DIAGRAM_TEST_PROMPT.md)
