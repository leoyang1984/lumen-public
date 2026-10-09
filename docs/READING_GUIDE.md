# Lumen EPUB 阅读指南 / EPUB reading guide

## 中文

Lumen 5.7.0-pro 在 Obsidian 中阅读无 DRM、可重排 EPUB，并沿用现有助手。书籍与 Markdown 在笔记库中，阅读进度和引用关联保存在插件目录。离线也能阅读；问答需要配置 API 或安装并登录 Codex CLI / pi。

1. 命令面板选择“阅读：打开笔记库中的 EPUB”，或在 EPUB 文件菜单选择“使用 Lumen 阅读”。也可导入外部 EPUB；副本存入 `Reading/Books`，同名不覆盖。原创样书无需模型连接。
2. 目录或“上一章／下一章”切换章节。左右方向键翻章；单栏中上下方向键滚动，PageUp／PageDown 与“上翻一页／下翻一页”在同章内翻页。输入、选文和组合快捷键不会触发阅读导航。
3. 点击“单栏／双栏”切换。双栏空间不足时显示单栏，变宽后恢复。双栏中上下键、翻页按钮与滚轮切换当前章的页面；到章末后使用翻章。字号与布局随 Obsidian 工作区恢复。
4. “助手 · 收放”收起或展开右侧助手。拖动右侧栏边界调整宽度。改变布局会尽量保留当前原文位置；重排后页码会变化，选区会清除，已经发送的引用保持不变。
5. 选中原文，点击“提问”，明确输入问题再发送。助手使用选文与有限邻近文字，不上传整书。追问继续使用已固定来源，翻章、切书不会改变旧回答归属。新话题可结束选文讨论或新建对话。
6. 选文可划线或存为人工笔记。AI 回答通过“确认想法”编辑、预览再确认，写入 `Reading/Notes` 或追加已有 Markdown。追加目标已被修改时会阻止覆盖。保存笔记和导出对话均带原文与来源链接；点击可回跳。
7. 关闭再打开继续阅读。助手历史可恢复；未完成回答保留中断状态。连接失败时重新连接，不能恢复原模型会话时以已保存历史继续。
8. 在 Obsidian 内移动 EPUB、笔记或所在文件夹，关联会跟随；删除文件会提示缺失。外部修改书籍后需明确重开，旧引用必须通过内容校验。跨笔记库复制不保证原引用可用。
9. 阅读数据损坏或替换被中断时，点击“恢复阅读数据”，或在命令面板执行同名命令。窗口列出通过格式检查的备份及数量，确认后恢复。所有原始状态文件先归档到插件目录的 `reader-recovery-*` 文件夹；不改动 EPUB 或 Markdown。旧备份可能缺少最新划线和位置。没有有效备份时不会清空数据。

### 读书时联网查资料

在 Lumen 设置中选择本机 Codex，开启“联网搜索”（升级默认关闭）。发送前点击输入区“联网搜索”，或输入 `/search 查询内容`。也可以直接说“请联网查阅……”。模糊请求可使用按钮明确选择。

按钮仅作用于下一条消息，发送后复位；普通追问不会继续联网。回答的“请求细节”中单独列出网页来源，点击可打开；历史与导出保留这些链接。阅读原文与笔记来源继续保留，网络资料不会被当作书中原话。

搜索需要联网，沿用 CLI 已配置的模型和登录，可能消耗相应用量；不需要打开 CLI 窗口。只发送必要查询和有限上下文。停止或关闭设置会结束当前本机请求，不自动重发。模型未实际搜索时显示未完成状态。搜索关闭时，问题不发送并保留在输入区。

本版仅接入 Codex 搜索。Pi 扩展、两种助手的 Skill 和 Codex 生图已做原创协议验证，用户界面接入留待后续版本；现有 API 图片功能仍使用原有配置。

### 安装与升级

将发布包的 `main.js`、`manifest.json`、`styles.css` 放入笔记库的 `.obsidian/plugins/lumen/`，重新加载插件或重启 Obsidian。升级前备份插件目录，保留 `data.json`、`reader-state.v1.json*` 和历史文件。安装包不含登录配置、API key、个人书籍或笔记。

最低 Obsidian 版本由 manifest 声明为 0.15.0；EPUB 首轮验收限定当前 Mac 桌面版。Windows、Linux、移动端、固定版式与 DRM 书籍不属于本轮验收。CLI 兼容版本、实际通过项与限制见验收记录；不要将声明最低版本理解为全部旧版均已实测。

## English

Lumen 5.7.0-pro reads DRM-free, reflowable EPUBs in Obsidian and uses the existing assistant. Books and Markdown remain in your Vault. Reading positions and source references stay in plugin storage. Reading works offline; chat requires an API provider or an installed, signed-in Codex CLI / pi.

1. Run **Reader: Open EPUB from Vault**, use **Read with Lumen** in an EPUB file menu, or import an external book. Imports create a copy in `Reading/Books` without overwriting a namesake. Try the original sample without connecting a model.
2. Use contents or chapter buttons. Left/right arrows change chapters. In single-column mode, up/down scroll and PageUp/PageDown or page buttons move within the chapter. Typing, selections and modified shortcuts do not trigger reading navigation.
3. Toggle single/two columns. A narrow pane falls back to one column and returns to two when widened. In two-column mode, up/down, page buttons and wheel move within the chapter. Use chapter controls at chapter boundaries. Text size and layout persist with the workspace.
4. **Toggle assistant** shows or hides the right dock. Drag its native boundary to resize. Reflow keeps the current text anchor where possible, changes visual page numbers and clears the selection. Sent citations remain fixed.
5. Select text, choose **Ask**, enter a question and send. The assistant gets the selection and bounded neighbouring text, not the whole book. Follow-ups retain the pinned source; changing chapters or books does not change old answers. Detach the source or start a new chat for a new topic.
6. Highlight text or save your words. Edit and preview AI output before confirming a note. Save in `Reading/Notes` or append to an existing Markdown note. Concurrent edits block a stale append. Saved notes and exported conversations include quotes and return-to-source links.
7. Reopen to resume reading and discussion. Interrupted answers remain marked. Reconnect after connection failures; saved history provides a continuation when the original model session cannot resume.
8. Moves within Obsidian update EPUB and note references, including folder moves. Deleted sources show a missing-file message. Reopen an externally modified book explicitly; old citations must pass content checks. Cross-Vault copies may not retain working source links.
9. For damaged/interrupted state, choose **Recover reading data** in the reader or command palette. Inspect a validated backup and confirm. Existing state artifacts are archived in a plugin-local `reader-recovery-*` folder first. EPUB and Markdown remain unchanged. Older backups can omit recent actions. No valid backup means no automatic reset.

### Web search while reading

Select local Codex in Lumen settings and enable **Web search** (off by default on upgrade). Before sending, select **Web search** beside the input, type `/search your query`, or explicitly ask to search online. The button authorizes one message and resets after sending. Ordinary follow-ups do not search again.

Request details list web sources separately from reading material and Vault notes. Links remain in history and exported Markdown. Search requires internet access and uses your configured CLI model/login and applicable usage allowance. No foreground CLI window is needed. Only necessary queries and bounded context should be sent. Stop or disable search to end the current local request; nothing is automatically resent. An answer without an actual requested search is marked incomplete. Disabled search requests stay in the input and are not sent.

This version integrates Codex search only. Pi extensions, both agents' Skills and Codex image generation passed original protocol feasibility checks; their user interfaces are planned for later versions. Existing API image features retain their configuration.

### Install and upgrade

Copy release `main.js`, `manifest.json` and `styles.css` to `.obsidian/plugins/lumen/`, then reload the plugin or restart Obsidian. Back up the plugin folder first. Preserve `data.json`, `reader-state.v1.json*` and history files. Distribution excludes credentials and personal reading data.

The manifest declares Obsidian 0.15.0 as the minimum. Initial EPUB acceptance covers the current Mac desktop only. Windows, Linux, mobile, fixed-layout and DRM books are outside this acceptance. See the acceptance report for tested CLI versions and limitations; the declared minimum does not mean every old version was tested.
