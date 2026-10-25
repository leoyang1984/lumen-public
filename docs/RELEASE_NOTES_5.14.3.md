# LUMEN 5.14.3 — 中文图表与导出优化 / Better Chinese Diagrams and Exports

2026-10-25

## 中文

- **中文长标签自动换行**：Pele 从 1.6.0 升级至 1.10.0，没有空格的中文长标签也能换行，改善窄侧栏中的图表布局。
- **复杂图表布局优化**：减少子图之间的连线交叉，改善部分图表的标签布局，并修复容器尺寸变化时的 ResizeObserver 循环问题。
- **桑基图渐变**：连线从来源颜色渐变到目标颜色，支持中文节点；PNG 和独立 SVG 导出保留渐变与当前配色，多图之间的渐变 ID 独立。
- **标签样式更丰富**：支持上下标、行内代码、快捷键、下划线和引用斜体。修复 LUMEN 导出过滤基线偏移的问题，使上下标在图片中保留位置。
- **解析与 SVG 输出修复**：包含新版 Pele 对部分语法错误、错误位置和 XML 非法字符的处理修复。错误的桑基图数值等内容可能开始明确报错。

Auto/Paper 主题、源码复制、缩放和平移的使用方式保持不变。此版未接入数学公式排版器；`$$...$$` 不会自动排版为分式、积分等公式。

### 验证与范围

完整回归 68 个测试入口通过，Pele 预览浏览器检查 42 项、图片导出检查 47 项通过；TypeScript 检查和生产构建通过。浏览器测试使用隔离 Chrome 和 Obsidian 宿主替身，不能替代真实宿主 sanitizer、所有第三方主题或移动端真机验收。

### 安装与升级

BRAT 仓库：`leoyang1984/lumen-public`。手动安装仅下载 Release 附件中的 `main.js`、`manifest.json`、`styles.css`，放入 `.obsidian/plugins/lumen/` 并重新加载 LUMEN。升级前备份，只替换这三个运行文件，保留设置、笔记和历史。GitHub 自动生成的 Source code 压缩包不是插件安装包。

[图表导出指南](DIAGRAM_EXPORT_GUIDE.md) · [固定源码测试提示词](PELE_UPGRADE_TEST_PROMPT.md)

---

## English

- **Wrap long Chinese labels**: Pele moves from 1.6.0 to 1.10.0. Chinese labels can wrap without spaces, improving diagrams in narrow sidebars.
- **Better complex layouts**: fewer edge crossings between subgraphs, label layout improvements in several diagram types, and a fix for ResizeObserver loops during container resizing.
- **Sankey gradients**: links transition from source to target colors and accept Chinese node names. PNG and standalone SVG exports retain gradients and the active palette, with independent gradient IDs for separate charts.
- **Richer labels**: subscripts, superscripts, inline code, keyboard labels, underlining and italic citations. LUMEN now preserves baseline offsets when exporting, keeping subscripts and superscripts in position.
- **Parsing and SVG fixes**: includes upstream fixes for invalid syntax, error positions and characters forbidden in XML. Invalid Sankey values and some previously tolerated syntax may now report errors.

Auto/Paper themes, source copying, zoom and pan work as before. No math typesetter is connected in this release; `$$...$$` does not automatically become typeset fractions or integrals.

### Validation and scope

All 68 regression entrypoints, 42 diagram preview browser checks and 47 image export checks passed, along with TypeScript checking and the production build. Browser checks use isolated Chrome with an Obsidian host fixture; actual host sanitization, all third-party themes and physical mobile devices still require host acceptance.

### Install and upgrade

Use `leoyang1984/lumen-public` in BRAT. For manual installation, download only `main.js`, `manifest.json` and `styles.css` from this Release into `.obsidian/plugins/lumen/`, then reload LUMEN. Back up first; replace only these runtime files and preserve settings, notes and history. GitHub-generated Source code archives are not plugin installation packages.

[Diagram export guide](DIAGRAM_EXPORT_GUIDE.md) · [Fixed-source test prompt](PELE_UPGRADE_TEST_PROMPT.md)
