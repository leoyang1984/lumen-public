# Lumen 5.8.10 — 安静阅读 / Quiet reading

## 中文

本版包含 5.8.5 之后的阅读界面改进与翻页修复。

- 书页、外围留白、同屏助手和输入框统一纸色；左右顶栏对齐，连接状态合入助手顶栏，长书名在空助手中以单行显示。去掉书页阴影和中缝渐变，保留用户调整的左右宽度。
- 顶部集中目录、书名、Aa、单／双栏、助手、专注与更多；底部显示翻页和阅读进度。隐藏重复的 Obsidian 标题栏，去掉正文和带文字翻页按钮的重复悬停提示，保留无障碍名称。
- Aa 集中暖纸／纸白／夜读、字体字号、行距、留白与沿用书籍排版。阅读外观随标签页保存，不修改 EPUB 文件。
- 专注模式收起阅读器导航，保留进度与退出入口；顶部鼠标和键盘导航可以唤出控件。Obsidian 其他侧栏由用户自行控制。
- 单／双栏翻页按钮和 PageUp／PageDown 可跨章连续阅读；反向进入上一章末尾，双栏滚轮同样支持。全书首尾不循环；上下键仍在同章内移动，左右键翻章。
- 保留保存位置设置、API／Codex／pi 对话、人工笔记检索、确认保存、引用回跳及白板工作流。

### 安装与升级

BRAT 仓库：`leoyang1984/lumen-public`。已有用户检查更新即可。

手动安装只下载本页的 `main.js`、`manifest.json`、`styles.css`，放入笔记库的 `.obsidian/plugins/lumen/`。升级先备份，只替换这三个文件，保留 `data.json`、历史和阅读数据，再重载插件或重新打开 Obsidian。GitHub 自动生成的 Source code 压缩包不是插件安装包。

阅读可离线使用。AI 对话需要已配置的 API，或已安装、配置并登录的 Codex CLI／pi；无需一直打开终端或 CLI 界面。前序验证版本为 macOS / Obsidian 1.14.4、Codex CLI 0.160.1、pi 1.1.0，并非强制锁定版本。Pi 联网仍需要另外安装、选中并启用兼容搜索扩展。

### 验证范围

本轮类型检查与生产构建通过，本地使用者已确认整体视觉效果。未运行新的自动化测试；三主题、不同窗口宽度、特殊 EPUB、连接和恢复流程的全面回归仍待完成。前序 5.8.5 的测试记录保留在 README，不代表本轮已全面验收。Windows、Linux 和实体移动端的新界面未实测。

## English

This release includes reading improvements and paging fixes since 5.8.5.

- One paper background across pages, surrounding space, companion chat and input. Toolbars align; connection status moves into the chat toolbar. Empty chat shows a long title on one quiet line. Page shadows and gutter shading are removed; pane widths remain user-controlled.
- Contents, title, Aa, layout, Assistant, Focus and More sit in the header; paging and progress sit in the footer. Hide the redundant Obsidian view header and repeated reading/page-button hover hints, while retaining accessible names.
- Aa groups Warm/Paper/Night, font, size, line height, margins and publisher typography. Preferences follow the reading tab without modifying EPUB bytes.
- Focus mode hides reader navigation while retaining progress and an exit. Reveal controls near the top edge or by keyboard navigation. Other Obsidian sidebars remain under user control.
- Page controls and PageUp/PageDown continue across chapters in both layouts. Backward paging opens the previous chapter’s end; two-column wheel paging also continues. Book ends do not wrap. Up/down remain chapter-local; left/right change chapters.
- Save locations, API/Codex/pi chat, human-note retrieval, confirmed saves, source links and Canvas workflows remain available.

### Install and upgrade

Use `leoyang1984/lumen-public` in BRAT and check for updates. Manual installation needs only `main.js`, `manifest.json` and `styles.css` in `.obsidian/plugins/lumen/`. Back up and replace only these three files; retain settings, chat history and reading data, then reload Lumen or reopen Obsidian. GitHub-generated Source code archives are not plugin installation packages.

Reading works offline. AI needs a configured API or installed/configured/signed-in Codex CLI/pi; no foreground CLI window is needed. Earlier verification used macOS/Obsidian 1.14.4, Codex CLI 0.160.1 and pi 1.1.0. These are tested versions, not exact version locks. Pi web search still needs an installed, selected and enabled compatible extension.

### Verification scope

TypeScript checking and production building passed. A local user confirmed the overall appearance. No new automated tests were run. Full regression across themes, widths, unusual EPUBs, connections and recovery remains pending. Earlier 5.8.5 test records in README do not certify this update. The new interface is not tested on Windows, Linux or physical mobile devices.
