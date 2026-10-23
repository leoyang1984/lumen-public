# LUMEN 5.14.0 — YouTube 视频学习 / YouTube Video Learning

2026-10-23

## 中文

- **粘贴链接即可开始**：在普通 Lumen 对话中发送 YouTube 链接，打开带播放器的视频学习页。观看、字幕和助手共用 Lumen 的同一段对话；切换视频区和聊天区会保留输入草稿。
- **字幕跟着画面走**：视频画面内显示 Lumen 字幕，右侧可看原文、中文或双语瀑布字幕。可按句暂停、重听、跳转、调速；点击时间戳回到视频对应位置。Lumen 字幕可用后会尝试关闭 YouTube 自带字幕，避免重叠。
- **沿用现有翻译连接**：用设置中的 API、Codex、pi 或 Antigravity 翻译字幕。任务按批保存，暂停或重开后可继续；已完成的字幕保留，聊天开始时翻译会让出资源。
- **带着视频上下文提问**：选中字幕可把原文和时间点带入普通对话，也可附加截图提问。回答可保存为视频笔记；“记一笔”会保存带时间点的个人想法。
- **字幕可导入与导出**：支持获取公开视频字幕、导入 SRT/VTT 或旧版 Lumen YouTube 字幕 Markdown，并导出字幕文件。获取受限时保留已有内容，并说明登录、访问或网络问题。
- **修复字幕轨道选择**：修复 Obsidian 选择器先关闭后回调所导致的字幕被误判为取消；手动选取和 Enter 均可正常获取，真实取消不会清除已有字幕。

### 范围与限制

本版提供 P0–P4 的 YouTube 学习可用节点，重点面向桌面 Obsidian。字幕抓取依赖 YouTube 和当前网络；部分视频需要登录或不开放字幕，可导入 SRT/VTT。播放器能否嵌入也受视频和网络限制。长视频字幕可分批保存和续接，但不同本地模型仍可能遇到服务或模型错误；本版不宣称所有长视频均可一次稳定翻完。系统化复习、应用练习与学习画布等后续能力尚未包含。

### 安装与升级

BRAT 仓库：`leoyang1984/lumen-public`。手动安装仅下载 Release 附件中的 `main.js`、`manifest.json`、`styles.css`，放入 `.obsidian/plugins/lumen/` 并重新加载 Lumen。升级前备份；只替换这三个运行文件，保留设置、视频笔记、字幕与翻译进度。

### 验证范围

68 个自动化测试入口、11 组视频逻辑验收、生产 Svelte 组件浏览器交互验收、类型检查和生产构建通过。独立 Obsidian 测试库中，真实视频字幕获取、轨道选择、播放、字幕同步、时间点笔记与重开恢复通过；Codex、pi、Antigravity 短字幕翻译探针通过。pi 长视频续接测试遇到一次模型错误，已完成译文保留并可重试。Windows、Linux 与移动设备未验收。

## English

- **Start by pasting a link**: Send a YouTube URL in the ordinary Lumen chat to open a video learning page. The player, captions and assistant share the same conversation; switching between video and chat keeps the draft.
- **Read captions with the video**: Lumen captions appear over the video, with a bounded waterfall transcript on the right for original, Chinese or bilingual text. Pause by sentence, replay, seek and change speed. Timestamps return to the matching moment. Lumen attempts to hide YouTube's own captions once Lumen captions are ready.
- **Use your existing translator**: Translate with the configured API, Codex, pi or Antigravity connection. Work is saved in batches and can resume after pause or reload. Completed captions are retained, and translation yields when chat needs the connection.
- **Ask with video context**: Send a selected caption and timestamp into ordinary chat, or attach a screenshot. Save answers as video notes; timestamped personal thoughts can be saved with “Make a note.”
- **Import and export captions**: Fetch available public captions, import SRT/VTT or legacy Lumen YouTube Markdown, and export subtitle files. When retrieval is restricted, existing content is preserved and the issue is reported.
- **Caption picker fix**: Fixes a picker lifecycle issue where Obsidian closed the selector before reporting the selected track. Mouse selection and Enter now work; canceling does not clear existing captions.

### Scope and limitations

This release delivers the usable P0–P4 YouTube learning milestone, focused on desktop Obsidian. Caption retrieval depends on YouTube and the current network; some videos require sign-in or provide no captions, so SRT/VTT import is available. Embedding also depends on video and network restrictions. Long captions are saved in resumable batches, but local models can still return service or model errors; this release does not claim reliable one-pass translation for every long video. Structured review, applied exercises and a learning canvas are not included.

### Install and upgrade

Use `leoyang1984/lumen-public` in BRAT. For manual installation, download only `main.js`, `manifest.json` and `styles.css` from the Release into `.obsidian/plugins/lumen/`, then reload Lumen. Back up first; replace only these runtime files and preserve settings, video notes, captions and translation progress.

### Validation

68 automated test entries, 11 video logic acceptance groups, production Svelte component browser interactions, TypeScript and production build passed. In an isolated Obsidian test Vault, real-video caption retrieval, track selection, playback, caption sync, timestamped notes and reload recovery passed. Short-caption translation probes passed with Codex, pi and Antigravity. A pi long-video resume run encountered a model error; completed translations were retained and retry remained available. Windows, Linux and mobile devices were not tested.
