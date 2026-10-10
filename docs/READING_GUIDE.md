# Lumen EPUB 阅读指南 / EPUB reading guide

## 中文

Lumen 5.8.5 在 Obsidian 中阅读无 DRM、可重排 EPUB，并沿用现有助手。书籍与 Markdown 在笔记库中，阅读进度和引用关联保存在插件目录。离线也能阅读；问答需要配置 API 或安装并登录 Codex CLI / pi。

1. 命令面板选择“阅读：打开笔记库中的 EPUB”，或在 EPUB 文件菜单选择“使用 Lumen 阅读”。也可导入外部 EPUB；副本默认存入 `Reading/Books`（可在保存位置设置中修改），同名不覆盖。原创样书无需模型连接。
2. 目录或“上一章／下一章”切换章节。左右方向键翻章；单栏中上下方向键滚动，PageUp／PageDown 与“上翻一页／下翻一页”在同章内翻页。输入、选文和组合快捷键不会触发阅读导航。
3. 点击“单栏／双栏”切换。双栏空间不足时显示单栏，变宽后恢复。双栏中上下键、翻页按钮与滚轮切换当前章的页面；到章末后使用翻章。字号与布局随 Obsidian 工作区恢复。
4. “助手 · 收放”收起或展开右侧助手。拖动右侧栏边界调整宽度。改变布局会尽量保留当前原文位置；重排后页码会变化，选区会清除，已经发送的引用保持不变。
5. 选中原文，点击“提问”，明确输入问题再发送。助手使用选文与有限邻近文字，不上传整书。追问继续使用已固定来源，翻章、切书不会改变旧回答归属。新话题可结束选文讨论或新建对话。
6. 选文可划线或存为人工笔记。AI 回答通过“确认想法”编辑、预览再确认，默认写入 `Reading/Notes`（可修改）或追加已有 Markdown。追加目标已被修改时会阻止覆盖。保存笔记和导出对话均带原文与来源链接；点击可回跳。
7. 关闭再打开继续阅读。助手历史可恢复；未完成回答保留中断状态。连接失败时重新连接，不能恢复原模型会话时以已保存历史继续。
8. 在 Obsidian 内移动 EPUB、笔记或所在文件夹，关联会跟随；删除文件会提示缺失。外部修改书籍后需明确重开，旧引用必须通过内容校验。跨笔记库复制不保证原引用可用。
9. 阅读数据损坏或替换被中断时，点击“恢复阅读数据”，或在命令面板执行同名命令。窗口列出通过格式检查的备份及数量，确认后恢复。所有原始状态文件先归档到插件目录的 `reader-recovery-*` 文件夹；不改动 EPUB 或 Markdown。旧备份可能缺少最新划线和位置。没有有效备份时不会清空数据。

### 助手界面（5.8.4）

输入框底部统一为：添加图片、联网、工具、发送／停止。联网按钮显示“联网已开／联网已关”，与设置控制同一个保存的开关；发送、追问、新对话和重启不会自动关闭。开启表示允许助手按需搜索，普通回答不必搜索。工具菜单可选择本次生成配图、Skill 或已选 Pi 扩展；这些选择在“仅本次”提示中列出，发送后恢复。管理能力可从工具菜单直达设置的“助手能力”。

顶部的历史按钮查看已有对话，新对话按钮开始新的讨论；更多菜单提供“导出当前对话”和设置。诊断日志位于设置的“高级与诊断”内的“诊断与帮助”，用于排查运行问题，与对话导出分开。正常连接状态收成一行，点击右侧箭头重新连接或断开。

阅读关联条可展开查看当前选文；后续追问始终绑定这段来源，翻章不会替换。保存窗口明确区分“我的文字”和“AI 草稿”，并显示新建或追加的目标。确认后对话按钮变为“已保存 · 打开笔记”，再次点击直接打开已有笔记。历史重开与笔记重命名会更新入口；文件删除时显示找不到，不自动重建或覆盖。

### 设置导航

设置按连接、助手能力、API 服务、阅读与保存、白板与自动化、高级与诊断、关于分组。每次显示一组；程序位置、模型和资源列表按需展开。“API 服务”集中配置文字模型、图片识别和 API 生图，三组默认折叠，显示已配置／未配置／未启用。已配置只表示必要字段已填写，不代表连接验证通过。选择 API 对话后，连接页提供直达配置按钮。升级保留原配置，不更改 CLI 登录。

Lumen 无需订阅或激活码，不限制员工数量。模型用量与费用仍由 API 服务商或 CLI 账号决定。原有自主员工首次升级后保持暂停，在“白板与自动化”查看配置并确认后恢复；预算、文件权限和写入确认继续生效。

### 读书时联网查资料

在设置的“连接”中选择本机 Codex，在“助手能力”或输入区开启联网（未曾启用的配置默认关闭）。只需开启一次，设置和输入区同步。使用 `/search 查询内容` 或明确说“请联网查阅……”可要求本次实际搜索。

联网开启后，助手在追问时也可以继续按需搜索，直到你关闭。说“本次不要联网”会缩小当前请求的许可，不修改保存的开关；支持“搜一下”“再搜一次”等直接请求；“不要总结搜索结果”不会关闭搜索。引号、引用块和代码中的搜索词不作为搜索请求。复杂或矛盾表述仍建议用开关明确控制。回答的“请求细节”中单独列出网页来源，点击可打开；历史与导出保留这些链接。阅读原文与笔记来源继续保留，网络资料不会被当作书中原话。

搜索需要联网，沿用 CLI 已配置的模型和登录，可能消耗相应用量；不需要打开 CLI 窗口。只发送必要查询和有限上下文。停止或关闭设置会结束当前本机请求，不自动重发。明确要求搜索而模型未实际执行时显示未完成状态；仅开启联网的普通回答不会因此失败。搜索关闭时，问题不发送并保留在输入区，提示下可打开相关设置。助手与旧对话不匹配时同样保留输入，并提供切换设置或新建对话入口。

### 已选 Skill 与 Pi 扩展

所有新能力默认关闭。设置中可刷新已安装列表，或输入资源入口的完整路径并点击“查看信息”；检查名称、说明和工具后勾选可信资源，再开启对应能力。发现资源只读取元数据，不执行扩展。更新、移动或删除入口后需要刷新并重新选择。

发送前在“工具”菜单中选择 Skill，发送后复位。本版支持独立的纯指令阅读/整理 Skill；需要脚本、附属文件或额外工具的 Skill 会提示不支持，不自动安装依赖。Codex 与 Pi 的选择分别保存，不改写 CLI 全局配置。

Pi 联网需要另外安装兼容的搜索扩展，再在 Lumen 中选中并开启扩展与联网搜索。扩展也可通过“工具”菜单中的“使用 Pi 扩展”或 `/tools 请求内容` 使用。联网开启时，所选扩展可用于持续搜索；联网关闭时，其他扩展用法仍需在工具菜单中选择或使用 `/tools`。开启联网会加载所选扩展的全部声明工具，本版不能逐一隔离其中的搜索工具；只选择与用途相符的可信扩展。支持带静态工具名的工具型扩展，以及确认、选择、输入和编辑类 RPC 弹窗；纯终端界面和部分动态注册扩展不支持。

**Pi 扩展是本机可信代码，不是沙箱。** 入口指纹能发现入口变化，但不能约束扩展导入的代码或直接写文件。Lumen 自有笔记工具仍需预览确认；扩展自己的写入不能假定受同一机制保护。

### 明确要求时生成图片

在 Codex 设置中开启生图，然后明确说“请生成一张图片……”、使用 `/image 描述`，或在“工具”菜单选择本轮“Codex 生图”。普通解释和历史内容不会触发生图。原生模型、账号或 CLI 不支持时显示失败，不换用 API。现有 API 生图沿用原配置。

成功图片先在对话中预览，保存在 Vault 外的本机私有缓存。点击确认保存后，可以编辑笔记文字；此时才写入设置中的图片与说明笔记目录（默认 `attachments/lumen-generated` 和 `Reading/Images`），并保留发送时的原文回跳。重复确认打开同一份笔记，不覆盖已编辑内容。历史只保存图片引用；文件缺失时提示不可用，不重新生成。缓存不会随删除对话自动清理。本版原生路径支持 PNG 生成，不包含原生图片编辑。

可停止正在执行的请求，或关闭相应能力；不会自动重发。已实测 Codex CLI 0.160.1、Pi 1.1.0 与 Obsidian 1.14.4 的 Mac 桌面路径。其他版本请实际核对能力；不需要前台打开 CLI。

### 安装与升级

将发布包的 `main.js`、`manifest.json`、`styles.css` 放入笔记库的 `.obsidian/plugins/lumen/`，重新加载插件或重启 Obsidian。升级前备份插件目录，保留 `data.json`、`reader-state.v1.json*` 和历史文件。安装包不含登录配置、API key、个人书籍或笔记。

最低 Obsidian 版本由 manifest 声明为 0.15.0；EPUB 首轮验收限定当前 Mac 桌面版。Windows、Linux、移动端、固定版式与 DRM 书籍不属于本轮验收。CLI 兼容版本、实际通过项与限制见验收记录；不要将声明最低版本理解为全部旧版均已实测。

## English

Lumen 5.8.5 reads DRM-free, reflowable EPUBs in Obsidian and uses the existing assistant. Books and Markdown remain in your Vault. Reading positions and source references stay in plugin storage. Reading works offline; chat requires an API provider or an installed, signed-in Codex CLI / pi.

1. Run **Reader: Open EPUB from Vault**, use **Read with Lumen** in an EPUB file menu, or import an external book. Imports create a copy in the configured folder (default `Reading/Books`) without overwriting a namesake. Try the original sample without connecting a model.
2. Use contents or chapter buttons. Left/right arrows change chapters. In single-column mode, up/down scroll and PageUp/PageDown or page buttons move within the chapter. Typing, selections and modified shortcuts do not trigger reading navigation.
3. Toggle single/two columns. A narrow pane falls back to one column and returns to two when widened. In two-column mode, up/down, page buttons and wheel move within the chapter. Use chapter controls at chapter boundaries. Text size and layout persist with the workspace.
4. **Toggle assistant** shows or hides the right dock. Drag its native boundary to resize. Reflow keeps the current text anchor where possible, changes visual page numbers and clears the selection. Sent citations remain fixed.
5. Select text, choose **Ask**, enter a question and send. The assistant gets the selection and bounded neighbouring text, not the whole book. Follow-ups retain the pinned source; changing chapters or books does not change old answers. Detach the source or start a new chat for a new topic.
6. Highlight text or save your words. Edit and preview AI output before confirming a note. Save in the configured folder (default `Reading/Notes`) or append to an existing Markdown note. Concurrent edits block a stale append. Saved notes and exported conversations include quotes and return-to-source links.
7. Reopen to resume reading and discussion. Interrupted answers remain marked. Reconnect after connection failures; saved history provides a continuation when the original model session cannot resume.
8. Moves within Obsidian update EPUB and note references, including folder moves. Deleted sources show a missing-file message. Reopen an externally modified book explicitly; old citations must pass content checks. Cross-Vault copies may not retain working source links.
9. For damaged/interrupted state, choose **Recover reading data** in the reader or command palette. Inspect a validated backup and confirm. Existing state artifacts are archived in a plugin-local `reader-recovery-*` folder first. EPUB and Markdown remain unchanged. Older backups can omit recent actions. No valid backup means no automatic reset.

### Assistant interface (5.8.4)

The composer has one bottom toolbar: add an image, web search, tools, and send/stop. **Search on/off** controls the same saved switch as settings and persists across messages, new chats and reopening. When on, search is available as needed; ordinary answers need not search. The tools menu contains image generation, Skills and selected Pi extensions. Their **This message only** summary resets after sending. **Manage capabilities** opens Assistant capabilities directly.

The header contains history, new conversation and a more menu with **Export this conversation** and settings. Execution logs are available under **Advanced and diagnostics → Diagnostics and help**, separately from conversation export. Healthy connections occupy one row; use the adjacent arrow to reconnect or disconnect.

Expand the reading context to inspect the pinned passage. Follow-ups keep its source when chapters change. Save forms distinguish your words from an AI draft and show the new-note or append destination. After confirmation, **Saved · Open note** opens the existing note. History and renames retain the destination; deleted notes show a missing-file message without automatic recreation or overwrite.

### Settings navigation

Settings use seven task groups: Connection, Assistant capabilities, API services, Reading and saving, Canvas and automation, Advanced and diagnostics, and About. Only one group is visible. API services groups text, image understanding and API image generation in three collapsed sections. Labels describe filled-in fields, not tested connectivity. API chat has a direct configuration entry under Connection. Upgrading keeps saved configuration and CLI login unchanged.

Lumen requires no subscription or activation code and has no employee-count gate. Model costs remain with your API provider or CLI account. Existing autonomous employees stay paused on the first upgrade until you review and confirm them under Canvas and automation. Budgets, permissions and write approvals still apply.

### Web search while reading

Select local Codex under **Connection** and enable search under **Assistant capabilities** or in the composer (off when not previously enabled). Enable once; both locations stay in sync. Search stays available for follow-ups until turned off. Use `/search your query` or explicitly ask to search online to require an actual search. A fresh “do not search” instruction narrows this request without changing the saved switch. Direct requests such as “search for” and Chinese “搜一下/再搜一次” are recognized. A request not to summarize search results does not disable search. Quoted passages, block quotes and code do not count as search instructions. Complex or contradictory wording still benefits from the switch.

Request details list web sources separately from reading material and Vault notes. Links remain in history and exported Markdown. Search requires internet access and uses your configured CLI model/login and applicable usage allowance. No foreground CLI window is needed. Only necessary queries and bounded context should be sent. Stop or disable search to end the current local request; nothing is automatically resent. An explicit search request without a search operation is marked incomplete. An ordinary answer is not rejected merely because search was allowed but unused. Disabled search requests stay in the input and are not sent; a nearby action opens the relevant settings. An assistant/history mismatch also retains input and offers settings or a new conversation.

### Selected Skills and Pi extensions

New capabilities are off by default. Refresh installed resources, or enter the full entry path and choose **Inspect**. Review metadata, select trusted resources, then enable the capability. Discovery reads metadata without executing extensions. Refresh and reselect changed, moved or deleted entries.

Choose a method in the one-turn Tools menu. It resets after sending. This version supports self-contained instruction Skills for reading and organizing. Script, supporting-file and extra-tool dependencies are reported as unsupported; nothing is installed automatically. Codex and Pi choices are separate and do not rewrite CLI global settings.

Pi web search needs an installed compatible search extension selected in Lumen, with both extension and search enabled. Select Pi extensions in the one-turn Tools menu or `/tools your request` for other selected tools. With search on, selected extensions stay available for ongoing search. With search off, other extension use requires the Tools menu or `/tools`. All declared tools of selected extensions are loaded; Lumen cannot isolate only their search tools. Select trusted extensions suitable for the task. Tool extensions with literal registered names and RPC confirm/select/input/editor dialogs are supported. Terminal-only UI and some dynamic registrations are unsupported.

**Pi extensions are trusted local code, not a sandbox.** An entry fingerprint detects entry changes, but does not constrain imports or direct file writes. Lumen note tools retain preview and confirmation; extension-owned writes cannot be assumed to use that protection.

### Images on explicit request

Enable image generation for Codex. Explicitly ask to generate an image, use `/image description`, or choose the one-turn Codex image option in Tools. Ordinary explanations and history grant no image permission. Unsupported CLI/account/model capabilities show a failure without API fallback. Existing API image generation retains its setup.

Successful images appear as previews in a private local cache outside the Vault. Confirm and edit the note before writing to the configured image and note folders (defaults: `attachments/lumen-generated` and `Reading/Images`). The saved note retains the original pinned quote and return link. Repeated confirmation opens the same note and does not overwrite edits. History keeps references only; missing files show an unavailable state without regeneration. Deleting a chat does not automatically clean the cache. Native generation currently supports PNG, not native image editing.

Stop a request or disable its capability; nothing is resent automatically. Tested local versions: Codex CLI 0.160.1, Pi 1.1.0 and macOS Obsidian 1.14.4. Other versions require capability checks. No foreground CLI window is required.

### Install and upgrade

Copy release `main.js`, `manifest.json` and `styles.css` to `.obsidian/plugins/lumen/`, then reload the plugin or restart Obsidian. Back up the plugin folder first. Preserve `data.json`, `reader-state.v1.json*` and history files. Distribution excludes credentials and personal reading data.

The manifest declares Obsidian 0.15.0 as the minimum. Initial EPUB acceptance covers the current Mac desktop only. Windows, Linux, mobile, fixed-layout and DRM books are outside this acceptance. See the acceptance report for tested CLI versions and limitations; the declared minimum does not mean every old version was tested.


## 保存位置（5.8.5） / Save locations

设置 → Lumen → 阅读与保存 → 保存位置。所有目录相对于当前笔记库：写 `B/笔记` 就是笔记库中的该文件夹，不填写电脑绝对路径。选择默认目录、自定义目录或笔记库根目录，再点击“应用”。可选已有文件夹，或填写尚不存在的目录；实际保存时才创建。自定义目录留空会提示错误，不会悄悄改到根目录。可单项恢复默认。

Settings → Lumen → Reading and saving → Save locations. Paths are relative to the current Vault: `B/Notes` means that folder inside the Vault. Select Default, Custom folder or Vault root, then Apply. Pick an existing folder or type a new folder; it is created on an actual save. Empty custom input is invalid. Reset each location independently.

| 内容 / Content | 默认目录 / Default folder |
| --- | --- |
| 导入 EPUB / Imported EPUBs | `Reading/Books` |
| 阅读笔记与确认想法 / Reading notes and confirmed ideas | `Reading/Notes` |
| Codex 原生图片 / Native Codex images | `attachments/lumen-generated` |
| 图片说明笔记 / Native image notes | `Reading/Images` |
| 粘贴或上传图片 / Pasted and uploaded images | `attachments/lumen-input-images` |
| API 图片 / API images | `attachments/ai-gen` |
| 导出对话 / Exported conversations | `Reading/Conversations` |

图片说明笔记、上传图片和 API 图片目录在“高级保存位置”展开。API 图片沿用旧版已配置目录，API 服务页提供统一设置入口。项目明确指定的 API 输出目录仍优先。内部历史、缓存、阅读关联和撤销数据的位置固定。

The less common image-note, upload and API-image locations are under Advanced locations. Existing API-image folders are retained. API settings link to this page; explicit project destinations still take priority. Internal history, caches, reading metadata and undo storage remain fixed.

修改目录只影响后续新文件，不移动已有书籍、图片或笔记。旧笔记及图片按原记录打开。阅读笔记确认窗口可单次换目录或追加已有笔记；图片和对话保存前显示目标。打开确认窗口后，修改全局设置不会改变这次的目标。重名不会覆盖已有文件。失败时保留草稿或预览，修正后重试；不会另选目录或重新生成图片。

Changes affect new files only. Existing books, notes and images stay where they are and keep their recorded references. A reading-note confirmation can choose another folder or append to an existing note. Image and conversation confirmations show their destination. Global changes do not redirect an open confirmation. Filename conflicts never overwrite files. Failed saves preserve drafts or previews for retry; they do not choose another folder or regenerate an image.
