# Lumen 5.7.0-pro — Web search while reading / 阅读中联网搜索

2026-10-10。LC-09～11 已通过必要自动检查、真实协议及 Mac 桌面连续主线验收。

## 中文

Lumen 是 Obsidian 中的阅读与写作助手，可以阅读 EPUB、讨论选文、查找笔记，并在确认后保存整理结果。这次新增 Codex 联网搜索，让读者在原有阅读界面中查资料和核对出处。

- 设置中选择本机 Codex，并开启“联网搜索”。升级默认关闭，不改 CLI 全局设置。
- 发送前点击“联网搜索”，使用 `/search`，或明确说“请联网查阅……”。按钮只授权下一条消息，发送后复位；普通追问不继续联网。
- 展示搜索进度、可点击网页来源，区分网络资料与书籍/笔记来源；历史和 Markdown 导出保留链接。
- 支持停止、关闭搜索后取消、断线重连和有限历史续谈。未实际搜索的回答标记未完成。
- 修复重开后从笔记引用回跳可能停在旧章节的问题；搜索未启用时保留未发送的问题文字。
- 保留笔记改动的预览、确认和撤销；没有开放 shell、直接文件写入、MCP、全部第三方扩展或生图。

使用条件：桌面 Obsidian；已安装、配置并登录 Codex CLI；模型/账号支持搜索且可联网。实际桌面验收：macOS、Obsidian 1.14.4、Codex 0.160.1、gpt-6-luna；搜索使用相应账号用量，无需把 CLI 窗口保持在前台。Windows/Linux/实体移动端和全部模型矩阵未实测。

Pi 1.1.0 的显式原创扩展与 Skill、Codex Skill 和原生生图已通过协议可行性验证。这些功能的用户界面接入属于 LC-12～14，本版不宣称已提供。

安装时仅替换 `.obsidian/plugins/lumen/` 下的 `main.js`、`manifest.json`、`styles.css`。先备份，保留 `data.json`、阅读状态和历史，再重载插件。ZIP 附中英文阅读/搜索指南、第三方声明及校验和。包中不包含个人配置、登录文件、API key、笔记、书籍或运行日志。

## English

Lumen is a reading and writing assistant in Obsidian. It reads EPUBs, discusses passages, finds notes and saves reviewed results after confirmation. This update adds Codex web search to the reading workspace.

- Select local Codex and enable Web search in Lumen settings. It defaults to off and does not change global CLI settings.
- Select Web search for the next message, use `/search`, or explicitly ask to search online. The button resets after sending. Ordinary follow-ups do not search again.
- View search progress and clickable web sources, separate from book/Vault sources. History and Markdown exports retain links.
- Stop searches, disable the capability to cancel the current local request, reconnect and continue from bounded history. Answers without an actual requested search are marked incomplete.
- Fixed source links opening a previously saved chapter after restart. Disabled searches now keep the unsent question in the input.
- Note changes still require preview and confirmation and support scoped undo. Shell, direct file writes, MCP, arbitrary extensions and image generation remain disabled.

Requirements: desktop Obsidian, an installed/configured/signed-in Codex CLI, a search-capable model/account and internet access. Desktop acceptance used macOS, Obsidian 1.14.4, Codex 0.160.1 and gpt-6-luna. Search uses applicable account allowance; a foreground CLI window is not needed. Windows/Linux, physical mobile devices and all model combinations are not certified.

Original protocol checks also verified Pi 1.1.0 extensions/Skills, Codex Skills and native image generation. Their user interfaces belong to LC-12–14 and are not included in this release.

Back up the plugin folder. Replace only `main.js`, `manifest.json` and `styles.css` in `.obsidian/plugins/lumen/`; keep `data.json`, reading state and history, then reload. The ZIP includes a bilingual guide, third-party notices and checksums. It contains no personal settings, login files, API keys, notes, books or runtime logs.
