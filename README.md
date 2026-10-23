# LUMEN 5.14.0 — YouTube 视频学习 / YouTube Video Learning

[中文](#中文) · [English](#english) · [下载 / Download](https://github.com/leoyang1984/lumen-public/releases/tag/v5.14.0) · [完整指南 / Guide](docs/READING_GUIDE.md)

LUMEN 在 Obsidian 中提供 EPUB 阅读、整书 AI 翻译、YouTube 视频学习、AI 对话、笔记整理和白板工作流。你可以使用 API，也可以调用电脑上已安装的 Codex、pi 或 Antigravity（agy），不需要一直打开终端窗口。

LUMEN brings EPUB reading, full-book AI translation, YouTube video learning, AI chat, note organization and Canvas workflows into Obsidian. Use an API provider or an installed local Codex, pi or Antigravity (agy) CLI without keeping a terminal window open.



## 中文

### v5.14.0：YouTube 视频学习

- **粘贴 YouTube 链接**：在普通对话中发送链接，直接进入视频学习页。播放器、字幕与助手属于同一段对话。
- **字幕贴着视频读**：画面内字幕配合右侧原文、中文或双语瀑布字幕，支持按句暂停、重听、跳转和调速。
- **用现有连接翻译**：沿用 API、Codex、pi 或 Antigravity，按批保存和续接字幕翻译；暂停、重开后可继续。
- **理解后沉淀**：引用带时间点的字幕向助手提问、附加截图、保存回答为视频笔记，或记录自己的想法。
- **字幕导入导出**：支持获取公开视频字幕以及 SRT/VTT 和旧版字幕 Markdown 导入；获取受限时保留已有内容。

桌面优先。部分视频或网络环境会限制播放器嵌入或字幕抓取；可导入 SRT/VTT。长字幕支持保存和续接，但本版不保证所有本地模型都能稳定完成任意长度的视频翻译。复习计划、应用练习和学习画布尚未包含。

[5.14.0 更新说明](docs/RELEASE_NOTES_5.14.0.md)

### v5.13.0：Liveboard 动态研究画布与思维流转

- **全新 Liveboard 动态研究画布**：为深度阅读、笔记综合与多轮思考提供沉浸式全景工作台。聊天面板的每轮问答、思考过程、证据提炼与结论沉淀自动映射并投射为画布卡片。
- **对话与画布自动关联与持久化**：切换历史对话时画布自动同步切换至对应会话，重启 Obsidian 内容自动恢复。
- **机械/科幻同心环吸附连线（Plan A）**：流畅能量流动感渐变连线，搭配精致同心圆环吸附与机械挂钩美学，拖动卡片自适应平滑吸附。
- **画布漫游与视口控制**：提供放大、缩小、双击归中（Reset View）与全景自由平移。
- **观点送回对话与多轮血缘演进**：卡片支持一键“送回对话 ↗”，内置继续深入、质疑反驳、举例落地、综合观点等结构化意图；自动抽取卡片源笔记作为 `@提及`，新回答在画布上自动继承父卡片血缘连线。
- **Antigravity 多轮工具协议加固**：彻底修复本地 Agent 连续工具调用时因缺少 schema 约束引起的 Gemini API 崩溃，增强 Markdown 代码块封套容错。

[5.13.0 发布说明](docs/RELEASE_NOTES_5.13.0.md)

### 5.12.0 功能回顾（跨知识库持续对话与图表导出）

- **先说目标，再选知识库**：输入“哪些知识库安装了 LUMEN，并可以连接？”或 `/vaults`，查看真实本机候选卡；也可用 `@` 选库、按 B 手动公开的用途文字筛选，或粘贴完整引用 ID。检查和选择不会自动执行任务。
- **向目标库委托并持续追问**：选择 B 后开启“与此库持续对话”，目标持续可见，默认“仅回答”，无需每轮生成文件。B 使用自己的本地 Agent 和私有上下文；每次发送仍核对共享范围，并遵循 B 的来源许可。
- **需要成果时再保存**：本轮可切换“生成笔记”，B 确认写入预览后才报告保存成功；A 采纳摘要或全文也需预览确认。回到本库保留文字，结束讨论关闭旧续接入口。
- **草稿与恢复**：私有跨库草稿支持显式恢复，目标身份重新检查。离线、忙碌、撤销或上下文丢失不会静默转到 A；停止和崩溃恢复不会自动重放。
- **图表直接变成图片**：Pele 工具栏支持复制 PNG、保存到当前 Markdown 笔记、导出独立 SVG，保留完整图表和当前 Auto/Paper 配色，不受缩放或平移裁切。

**跨库功能目前是 macOS 本机预览**：两端安装 LUMEN 5.12.0；B 需要已配置的本地 Codex、pi 或 Antigravity，以及登录 PATH 中可用的 Node.js。A 可使用 API。仅回答模式不开放笔记写入、命令、MCP 或扩展工具，pi 扩展联网暂不提供。Windows/Linux 和移动端不提供跨库功能；原有功能保持可用。

[5.12.0 发布说明](docs/RELEASE_NOTES_5.12.0.md) · [跨库使用指南](docs/CROSS_VAULT_GUIDE.md) · [图表导出指南](docs/DIAGRAM_EXPORT_GUIDE.md)

### 5.11.0 功能回顾（Pele 主题、推理强度与 CLI 识图）

- **Pele 图表与主题**：聊天中的 Mermaid 支持源码切换、复制、缩放和平移。Auto 默认继承 Obsidian 字体与配色；Paper 固定暖白纸张风格。设置持久保存，切换即时更新已有图表，样式仅作用于 LUMEN。
- **Codex 模型与强度分开选择**：动态获取 CLI 模型和可用档位，支持默认、轻量、中等、高、极高、最大，并按模型记住选择；切换强度保留会话。Ultra 暂未接入委派，显示说明并禁用。
- **发送图片提问**：Codex 与支持视觉的 Pi 模型原生接收图片，无需开启图片生成、联网或 MCP；AGY 通过已配置的视觉接口解析后转接并标明来源。每次最多 4 张，单张 10MB、总计 20MB，支持连续追问和重连恢复最近附件。
- **修复与使用**：修复 Mermaid 提示词被误判为识图及笼统能力错误。图表主题在“设置 → LUMEN → 高级”，模型和强度在顶部连接菜单；目标图片需先附加到输入框。

[5.11.0 更新说明](docs/RELEASE_NOTES_5.11.0.md) · [图表、推理与识图使用指南](docs/QUICK_GUIDE_5.11.0.md)

### 5.10.2 功能回顾（MCP 互联与连接保活）

**全生态本地 Agent MCP 互联、严格安全门禁与无感连接保活。**

- **全生态本地 Agent MCP 接入（Codex / Pi / Antigravity）**：全面接入 Pi 与 Antigravity 本地引擎的 MCP 协议支持，自动发现本地 MCP 服务器并在输入框下方一键呼出管理面板，自由查看工具明细与按需勾选。
- **严格的人工确认安全门禁（Human-in-the-Loop）**：所有 MCP 外部调用完整展示工具参数与目标服务，严格遵循运行时显式授权确认，拒绝后安全中断，彻底杜绝未经许可的外部调用。
- **无感能力配置与连接智能保活**：彻底修复在输入框下方开关 MCP 或勾选工具时连接意外断开（变灰）的问题；动态调整工具、搜索与技能时 Adapter 智能常驻，指示灯持续保持绿色就绪（Ready）。

[5.10.2 更新说明](docs/RELEASE_NOTES_5.10.2.md) · [Antigravity 设置与范围](docs/ANTIGRAVITY_GUIDE.md)

### 5.10.1 功能回顾（品牌规范、模型切换与 Mermaid 原生图表）

**品牌规范升级、模型透明化切换与原生 Mermaid 图表渲染。**

- **LUMEN 品牌规范与视觉进化**：全界面与设置页统一为大写 LUMEN，移除冗余星标符号，简化欢迎页信息层级，去除多余模型气泡与孤立小灰框，带来通透呼吸感与卡片微质感。
- **本地 Agent 模型透明化与快速切换**：实时感知并显示 Codex（`gpt-6-luna` 等）、Antigravity（`gemini-4-argon-medium` 等）、Pi（OpenRouter 预设模型）及 API 活跃模型，支持在顶栏胶囊中一键切换。
- **全新统一顶栏连接胶囊**：精简下方多余气泡，依靠动态状态圆点（绿/黄/红/灰）与清晰的“连接设置…”导航，操作直观。
- **原生 Mermaid 语法图表可视化**：完美支持 AI 输出的流程图、时序图、脑图等直接渲染为矢量 SVG，修复安全拦截提示点击无效问题。

[5.10.1 更新说明](docs/RELEASE_NOTES_5.10.1.md)

### 5.10.0 功能回顾（Antigravity 对话与原生生图）

**新增本机 Antigravity 对话与原生生图。** 在“连接”中选择已安装并登录的 `agy`，可讨论笔记和 EPUB 选文、连续追问、检索笔记、确认修改与撤销，并使用该连接翻译 EPUB。

- **原生文生图**：在“助手能力”开启“Antigravity 生图”（默认关闭），从对话工具菜单选择“生成配图”，或明确输入“生成一张图片……”。图片先预览，确认后保存 PNG 附件和说明笔记，不回退到 API。
- **生图后继续聊**：生图使用独立的一次性进程，普通对话连接和上下文保留。图片完成、失败或取消后可直接追问，不再错误显示断开。
- **开关名称清楚**：选择 Antigravity 时显示“Antigravity 生图”，选择 Codex 时显示“Codex 生图”；生成权限仅作用于明确请求的当前消息。
- **CLI 兼容性修复**：包含 5.9.1 对新版 Codex/pi 的兼容修正，按所需协议能力检查连接，不再锁定精确版本号。
- **阅读与翻译保留**：整书／章节翻译、术语表、双语对照和标准 EPUB 导出继续可用。

[Antigravity 设置与范围](docs/ANTIGRAVITY_GUIDE.md) · [5.10.0 更新说明](docs/RELEASE_NOTES_5.10.0.md)

### 保留的 5.9.0 翻译功能

**整书 AI 翻译，标准 EPUB 导出。** 在阅读器中直接针对当前 EPUB 书籍创建翻译任务，支持整书或自定义章节范围、翻译风格和专属术语表，并将翻译成果一键打包导出为标准 EPUB 电子书。

- **整书与章节翻译**：阅读器直接发起全书或选定章节的 AI 翻译任务，草稿分段独立落盘，支持随时暂停、断点无损续翻。
- **空章节智能跳过**：无文字内容的章节（如纯图片插画页、特殊版权页）自动标记为 `skipped` 并继续，杜绝整书翻译因空章节抛错中断。
- **多段合批降级与退避重试**：多段打包翻译若遇到超长段落或模型格式异常，自动拆解降级为单段请求，配合同段重试，彻底解决长难段落卡住死锁。
- **全结构自适应宽容 JSON 解析**：三级容错提取器，全面兼容顶层数组、单数对象、缺失 ID 单段保护、未转义引号正则修复及纯文本兜底。
- **EPUB 电子书导出**：支持“仅中文译稿”与“双语对照”两种排版模式，自动处理伪图片引用，支持非关键资源缺失优雅降级。
- **延续安静阅读体验**：保留 5.8.10 的书页与助手统一纸色、Aa 排版集中调节、专注阅读、跨章连续翻页与白板工作流。

### 保存位置（延续 5.8.5）

**保存在哪里，由你决定。** 在“设置 → Lumen → 阅读与保存 → 保存位置”集中设置书籍、笔记、图片和对话的目录。默认设置可以直接使用，也可以选择已有文件夹、填写新文件夹，或明确选择笔记库根目录。

- 所有路径相对于当前笔记库。例如笔记库叫 A，填写 `B/笔记`，文件就保存到 A 内的 B/笔记；无需填写电脑绝对路径。
- 点击“应用”才生效；每项可恢复默认。新文件夹在实际保存时创建。空的自定义目录、越界路径、内部目录及文件冲突会提示错误。
- 修改位置只影响新文件，不搬动已有书籍、笔记或图片。旧 API 图片目录继续沿用，旧文件与原文回跳保持原记录。
- 保存确认显示目标位置；全局设置变化不会改变已打开确认窗口的目标。失败保留草稿或预览，不覆盖同名文件。
- 阅读笔记可单次另选目录或追加已有笔记；对话导出默认集中到 `Reading/Conversations`，旧导出保持原样。

| 保存内容 | 默认目录 |
| --- | --- |
| 导入 EPUB | `Reading/Books` |
| 阅读笔记与确认想法 | `Reading/Notes` |
| Codex / Antigravity 原生图片 | `attachments/lumen-generated` |
| 图片说明笔记 | `Reading/Images` |
| 粘贴／上传图片 | `attachments/lumen-input-images` |
| API 图片 | `attachments/ai-gen` |
| 导出对话 | `Reading/Conversations` |

图片说明笔记、上传图片和 API 图片目录在“高级保存位置”中展开。内部历史、缓存、阅读关联和撤销数据的位置固定。详见[保存位置指南](docs/READING_GUIDE.md)。

### 延续的界面与交互改进

- **更自然的对话界面**：输入框底部只有一排操作；联网直接可见，生图、Skill 和扩展放入工具菜单。历史、新对话、更多操作分清用途；诊断日志不再混在历史旁边。
- **联网开一次，连续使用**：设置和输入框控制同一个开关。发送、追问、新对话和重启后仍保留，直到自行关闭。开启表示允许按需搜索，不强制每次搜索；生图仍需明确要求，Skill 和扩展的显式选择仍按消息使用。
- **设置按任务分组**：连接、助手能力、API 服务、阅读与保存、白板与自动化、高级与诊断、关于，每次只显示一组。
- **API 配置集中管理**：文字模型、图片识别、API 生图默认折叠，显示已配置／未配置／未启用。“已配置”表示必要字段已填写，不代表连接测试成功。
- **阅读与保存更清楚**：展开查看正在讨论的选文；区分原话和 AI 草稿；保存前可编辑并查看目标位置。已保存结果直接打开笔记，避免重复保存；无法发送时保留输入并提供解决入口。
- **无需订阅或激活码**：取消员工数量和付费功能门槛。模型费用由你的服务商或 CLI 账号决定；预算、文件权限、写入预览确认和撤销仍保留。

### 可以做什么？

| 场景 | 功能 |
| --- | --- |
| 读电子书 | 无 DRM、可重排 EPUB；目录、单／双栏、主题与排版、专注模式、方向键、跨章连续翻页、阅读位置恢复 |
| 边读边聊 | API / Codex / pi / Antigravity 对话、连续追问、人工笔记检索、带出处的笔记与原文回跳 |
| 使用本机能力 | Codex 搜索、可信独立指令型 Skill、兼容 Pi 工具扩展、明确请求的 Codex / Antigravity 原生生图 |
| 整理笔记 | 原话保存、AI 草稿编辑确认、历史与导出、受控修改与撤销 |
| 跨库协作 | macOS 本机发现与选库、持续纯问答、确认保存成果、显式恢复 |
| 图表分享 | Mermaid 预览与主题、复制 PNG、保存到笔记、导出 SVG |
| 白板思考 | Canvas 算子与连线、文字／图片工作流、API 图片生成和编辑 |
| 自动任务 | 员工定义、技能与知识边界、手动／文件监控／定时触发、预算及运行记录 |

CLI 对话不需要额外配置 MCP。白板、员工等原有 API 功能仍使用“API 服务”中的模型配置，并不会自动改用 CLI。

### 安装和升级

**BRAT**：安装 Obsidian 42 - BRAT → Add Beta plugin → 输入 `leoyang1984/lumen-public` → 启用 Lumen。已有用户在 BRAT 中检查更新。

**手动安装**：从 [5.12.0 Release](https://github.com/leoyang1984/lumen-public/releases/tag/v5.12.0) 下载三个运行文件，将 `main.js`、`manifest.json`、`styles.css` 放入笔记库的 `.obsidian/plugins/lumen/`，然后启用插件。指南与第三方声明放在本仓库文档中，无需复制到插件目录。

**升级先备份，只替换三个运行文件**。保留 `data.json`、阅读状态和历史，重载 Lumen 或重开 Obsidian。从 5.8.4 之前的版本首次升级时，所有已有自主员工（包括此前正在使用的员工）会保持暂停；请在“白板与自动化”检查配置并逐个确认恢复，避免取消授权后突然开始任务。新员工默认关闭自主工作。

### 条件与已知范围

- 本次 65 个自动测试入口、66 项跨库浏览器检查、类型检查和生产构建通过。隔离 Obsidian 合成双库验证了持续问答、整应用重启、回退再升级和 7 类停止/崩溃清理；跨库真实账户模型、Windows/Linux 和移动真机尚未全面实测。图表导出通过浏览器验证，宿主剪贴板与下载行为依系统权限。
- Antigravity 联网、指令型 Skill 和 MCP 沿用现有受控入口；图片输入通过配置的视觉接口转接，真实视觉服务尚未实测。参考图编辑、脚本型 Skill 与任意扩展不包含在本次范围。

- EPUB 可离线阅读；AI 需要 API 配置，或已安装、配置并登录的 Codex CLI / pi / Antigravity（agy）。CLI 原生能力需要桌面 Obsidian，并要求模型与账号支持相应能力。
- 前序实测环境：macOS、Obsidian 1.14.4、Codex CLI 0.160.1、pi 1.1.0。这些是验证记录，不是强制锁定版本。其他系统、实体移动设备和所有服务商组合未完整实测。
- Codex 搜索需要联网。Pi 搜索还需要自行安装、选中并启用兼容的搜索扩展；Lumen 不内置通用 Pi 搜索扩展，第三方推荐与兼容性评估仍待完成。
- Pi 扩展运行可信本机代码，不是沙箱；扩展自己写文件不保证经过 Lumen 笔记确认。复杂 Skill、纯终端交互扩展和任意扩展不保证兼容。
- 原生 Codex / Antigravity 图片支持文生图并保存为 PNG，不含参考图编辑；API 图片生成／编辑是独立功能。普通未发送输入不保证跨重载恢复；跨库文字草稿有独立的显式恢复入口。
- 5.8.5 已通过 36 个自动回归入口、10 项本机协议测试、类型检查、生产构建和打包。独立 macOS 测试库走通保存位置配置与恢复、原创 EPUB 导入、原话保存、真实 Pi 回答确认、对话导出和引用回跳。API 图片路由与原生 PNG 存储使用原创模拟数据；本轮未覆盖所有真实生图服务、其他系统及自主任务升级迁移。

[中英文更新说明](docs/RELEASE_NOTES_5.12.0.md) · [使用指南](docs/READING_GUIDE.md) · [运行时工作流教程](runtime-workflow-pack/) · [分发协议](COMMERCIAL_LICENSE.md) · [第三方声明](docs/THIRD_PARTY_NOTICES.txt)

## English

### v5.13.0: Liveboard Dynamic Research Canvas & Thought Flow

- **All-New Liveboard Dynamic Research Canvas**: An immersive, panoramic canvas workbench for deep reading, note synthesis, and multi-turn research. Automatically projects chat Q&A, reasoning steps, evidence citations, and conclusions into interactive cards.
- **Auto Conversation Association & Persistence**: Switching chat conversations automatically synchronizes the active canvas; state persists across Obsidian restarts.
- **Cyber / Mechanical Hook-and-Ring Connector Aesthetics (Plan A)**: Fluid gradient connectors with concentric anchor rings and mechanical hooks that smoothly follow cards during drag-and-drop.
- **Canvas Navigation & Zoom Controls**: Floating controls with Zoom In (+), Zoom Out (-), Double-Click to Center, and freeform canvas panning.
- **Send Cards Back to Chat with Lineage Continuity**: One-click "Send to Chat ↗" on any canvas card with structured intents (Deepen, Challenge, Apply & Execute, Synthesize). Automatically preserves source note citations as `@mentions` in the composer and links new answers back to parent cards on the canvas.
- **Antigravity Multi-Turn Tool Protocol Hardening**: Eliminates function-calling parse failures and Gemini API crashes during multi-round local tool execution by strictly enforcing response schemas across all turns.

[5.13.0 release notes](docs/RELEASE_NOTES_5.13.0.md)

### 5.12.0 retrospective: Cross-Vault discussions and diagram export

- **Choose a Vault for your goal**: ask which Vaults have LUMEN and can connect, or use `/vaults`, `@` selection or a full reference ID. Purpose matching uses text explicitly shared by B. Discovery and selection never dispatch tasks.
- **Delegate and keep talking**: the selected destination stays visible. Answer-only turns return replies without creating a report. B uses its own local assistant and isolated context; each send reviews the sharing scope and follows B's permission policy.
- **Save when you need a deliverable**: select Create a note for one turn and confirm B's write preview. Adopting the result in A also requires a preview. Return locally without ending, or explicitly close the discussion's continuation entries.
- **Restore deliberately**: private cross-Vault drafts require explicit restoration and destination checks. Offline, busy, revoked or missing-context failures never fall back to A. Recovery queries do not replay work.
- **Export diagrams**: copy PNG, save to the active Markdown note or download standalone SVG. Exports keep the complete diagram and current Auto/Paper colors independently of zoom/pan.

**Cross-Vault work is a macOS local preview**. Install LUMEN 5.12.0 in both Vaults. B needs a configured Codex, pi or Antigravity CLI and Node.js on its login PATH; A may use API chat. Answer-only mode excludes note writes, commands, MCP and extensions, so Pi extension-based web search is unavailable. Cross-Vault work is unavailable on Windows/Linux/mobile; existing features remain available.

[5.12.0 release notes](docs/RELEASE_NOTES_5.12.0.md) · [Cross-Vault guide](docs/CROSS_VAULT_GUIDE.md) · [Diagram export guide](docs/DIAGRAM_EXPORT_GUIDE.md)

### 5.11.0 retrospective: Pele themes, reasoning controls and CLI image input

- **Pele diagrams and themes**: Mermaid chat previews offer source/copy controls, zoom and pan. Auto inherits Obsidian fonts and colors; Paper keeps a warm paper palette. Preferences persist and update existing previews, with styles scoped to LUMEN.
- **Separate Codex model and effort controls**: Discover CLI models and supported efforts dynamically. Choose Default, low, medium, high, xhigh or max; remember preferences per model and retain the conversation when changing effort. Ultra is explained but disabled pending delegation support.
- **Ask about attached images**: Codex and vision-capable Pi models receive native images without enabling image generation, search or MCP. AGY uses its configured vision API with explicit attribution. Send up to four images, 10MB each and 20MB total, with follow-ups and recent-image replay after reconnecting.
- **Fixes and setup**: Fixes Mermaid prompts incorrectly triggering image-reading checks and replaces generic capability errors with specific image guidance. Themes are under Settings → LUMEN → Advanced; model and effort are in the header connection menu. Attach the intended picture before asking.

[5.11.0 release notes](docs/RELEASE_NOTES_5.11.0.md) · [Diagrams, reasoning and image guide](docs/QUICK_GUIDE_5.11.0.md)

### 5.10.2 retrospective: MCP ecosystem and connection keep-alive

**Local Agent MCP ecosystem across Codex, Pi, and Antigravity, safe human-in-the-loop review, and seamless connection keep-alive.**

- **Local Agent MCP Ecosystem (Codex / Pi / Antigravity)**: Extended Model Context Protocol (MCP) support across Codex, Pi, and Antigravity (AGY) local engines. Automatically discovers local MCP configurations and opens the unified MCP manager directly from the composer toolbar to inspect and select tools.
- **Human-in-the-Loop Safe Execution**: Enforces runtime human review for all external MCP tool calls with full parameter visibility and explicit approval before any external execution.
- **Seamless Capability Configuration & Keep-Alive**: Fixed connection drops when toggling MCP or capability settings; adapters stay resident and status dot remains ready.

[5.10.2 release notes](docs/RELEASE_NOTES_5.10.2.md) · [Antigravity setup and limits](docs/ANTIGRAVITY_GUIDE.md)

### 5.10.1 Retrospective (Brand unification, model switching, and Mermaid charts)

**LUMEN brand unification, active model switching, and native Mermaid diagram visualizations.**

- **LUMEN Brand Unification & UI Polish**: All surfaces unified under the uppercase LUMEN logo; removed distracting decorative asterisks; refined empty-state launchpad with unboxed clean notes and enhanced starter cards.
- **Model Transparency & Quick Switching**: Real-time display of active models for Codex (`gpt-6-luna`), Antigravity (`gemini-4-argon-medium`), Pi (OpenRouter presets), and API connections, with direct switching in the header dropdown.
- **Unified Header Connection Pill**: Removed redundant banners below the header; intuitive status dot colors (green/yellow/red/gray) and clear settings navigation.
- **Native Mermaid Diagram Support**: Automatically trusts vault rendering for AI-generated Mermaid flowcharts, sequence diagrams, and architecture charts, rendering them into interactive, clean SVGs directly inside chat bubbles.

[5.10.1 release notes](docs/RELEASE_NOTES_5.10.1.md)

### 5.10.0 Retrospective (Antigravity chat and images)

**Local Antigravity chat and native image generation.** Select an installed, authenticated `agy` under Connection for notes and EPUB passages, followups, governed retrieval, confirmed note changes and undo, and EPUB translation.

- **Native text-to-image**: enable Antigravity image generation under Assistant capabilities (off by default), choose Generate an image in Tools or make an explicit image request. Review privately, then confirm to save a PNG attachment and note. No API fallback.
- **Continue chatting after images**: one-use image workers preserve the ordinary chat connection and context. Completion, failure and cancellation no longer incorrectly disconnect chat.
- **Clear image controls**: the switch names the selected assistant, Codex or Antigravity. Image permission applies only to a fresh explicit request.
- **CLI compatibility**: includes the 5.9.1 fix for updated Codex/pi CLIs. Connections check required protocol capabilities rather than exact version numbers.
- **Reading and translation retained**: whole-book/chapter translation, glossaries, aligned bilingual reading and standard EPUB export remain available.

[Antigravity setup and limits](docs/ANTIGRAVITY_GUIDE.md) · [5.10.0 release notes](docs/RELEASE_NOTES_5.10.0.md)

### Retained 5.9.0 translation features

**Full-book AI translation and standard EPUB export.** Translate entire EPUB books or custom chapter ranges directly from the reader with custom styles and glossaries, and export completed drafts into standard EPUB publications.

- **Book and chapter translation**: launch translation tasks for whole books or selected chapters directly inside the reader. Drafts are safely persisted passage by passage with pause and breakpoint resumption.
- **Empty chapter skip**: non-text chapters (e.g. image-only plates, copyright pages) are automatically skipped without interrupting translation progress.
- **Batch fallback and retries**: batch translations automatically degrade to single-unit requests upon encountering extra-long passages or formatting anomalies, paired with exponential backoff retries.
- **Resilient JSON parsing**: multi-tier parser supporting top-level arrays, singular objects, single-unit ID tolerance, unescaped quote repair, and prose fallbacks.
- **Standard EPUB export**: export "Chinese Translation Only" and "Bilingual Aligned" EPUB publications with sanitized citation links and graceful image fallbacks.
- **Quiet reading retained**: retains unified paper backgrounds, typography controls, focus mode, continuous cross-chapter paging, and Canvas workflows from 5.8.10.

### Save locations (retained from 5.8.5)

**Choose where your files go.** Seven save locations are grouped under **Settings → Lumen → Reading and saving → Save locations**. Defaults work without setup. Pick an existing folder, type a new folder, or explicitly choose Vault root.

- Paths are relative to your current Vault: `B/Notes` means that folder inside the Vault, not an absolute computer path.
- Choose a mode and click **Apply**. Reset each location independently. Folders are created on actual saves. Empty custom paths, paths outside the Vault, internal folders and file conflicts are reported.
- Changes affect new files only. Existing books, notes and images keep their locations and source links. Existing API image folders are retained.
- Save confirmations show their destination and retain it even if global settings change. Failed saves keep drafts/previews; filename conflicts never overwrite existing files.
- Reading notes can choose a different folder for one save or append to a note. Conversation exports default to `Reading/Conversations`; old exports remain in place.

| Content | Default folder |
| --- | --- |
| Imported EPUBs | `Reading/Books` |
| Reading notes and confirmed ideas | `Reading/Notes` |
| Native Codex / Antigravity images | `attachments/lumen-generated` |
| Image notes | `Reading/Images` |
| Pasted/uploaded images | `attachments/lumen-input-images` |
| API images | `attachments/ai-gen` |
| Conversation exports | `Reading/Conversations` |

Image notes, uploads and API images are under **Advanced locations**. Internal history, caches, reading metadata and undo storage remain fixed. See the [save locations guide](docs/READING_GUIDE.md).

### Existing UI and interaction improvements

- **A clearer chat layout**: one composer toolbar. Search stays visible; images, Skills and extensions use the tools menu. History, new chat and more actions have distinct roles. Diagnostic logs are separate from conversation history.
- **Persistent search permission**: settings and the composer share one switch. It survives messages, follow-ups, new conversations and reopening until you turn it off. Search is available as needed, not mandatory for every answer. Images need explicit requests; explicit Skill and extension selections remain per-message.
- **Settings by task**: Connection, Assistant capabilities, API services, Reading and saving, Canvas and automation, Advanced and diagnostics, and About. Only one group is shown at a time.
- **API services together**: collapsed text, image-understanding and API image sections show configuration state. “Configured” means required fields are filled, not that a connection test passed.
- **Clear reading and saving**: inspect the pinned passage, distinguish your words from AI drafts, edit before saving, and see the destination. Saved results open their existing note. Blocked sends keep your input and offer a next action.
- **No subscription activation**: no activation code or paid/count gate for employees. Provider/CLI charges, budgets, file permissions, write confirmation and undo still apply.

### Main features

Read DRM-free reflowable EPUBs with contents, single/two columns, themes, typography, focus mode, continuous chapter paging, keyboard navigation and restored positions. Discuss passages through API/Codex/pi/Antigravity, retrieve human notes, confirm source-linked Markdown and return to the passage. Use Codex search, trusted self-contained instruction Skills, compatible Pi tool extensions and explicitly requested native Codex/Antigravity images. Canvas operators support visual text/image workflows; employees support bounded knowledge, triggers, budgets and run records.

CLI chat does not require extra MCP setup. Existing Canvas and employee API features keep using API services; they do not automatically switch to a CLI.

### Install and upgrade

**BRAT**: install Obsidian 42 - BRAT, choose Add Beta plugin, enter `leoyang1984/lumen-public`, then enable Lumen. Existing BRAT users can check for updates.

**Manual**: download the [5.12.0 release](https://github.com/leoyang1984/lumen-public/releases/tag/v5.12.0). Copy only `main.js`, `manifest.json`, `styles.css` into `.obsidian/plugins/lumen/` in your Vault and enable the plugin. The guide and third-party notices are in this repository; they are not installation files.

Back up first. Replace only the three runtime files; keep settings, reading state and history. Reload Lumen or reopen Obsidian. All existing autonomous employees, including previously active ones, stay paused when first upgrading from a version before 5.8.4. Review and confirm them under Canvas and automation before resuming. New employees retain opt-in autonomy.

### Requirements and limits

This update passed 65 automated test entries, 66 cross-Vault browser checks, TypeScript and production build. Isolated Obsidian Vaults verified Q&A, whole-app restart, rollback/re-upgrade and seven stop/crash scenarios with synthetic CLI fixtures. Cross-Vault live-account models, Windows/Linux and physical mobile devices are not fully verified. Diagram exports were browser-tested; host clipboard and downloads depend on system permissions. AGY uses the configured vision service for image evidence; that bridge was fixture-tested, not tested with a live vision provider. Existing governed AGY web search, instruction Skills and MCP remain available. Native reference-image editing and arbitrary extensions are not included.

Reading works offline. AI needs a configured API or installed/configured/signed-in Codex CLI/pi/Antigravity (agy). Native CLI capabilities require desktop Obsidian and a suitable model/account. Earlier acceptance used macOS, Obsidian 1.14.4, Codex CLI 0.160.1 and pi 1.1.0; these are tested versions, not exact version locks. Other OS/device/provider combinations are not fully verified.

Pi web search needs an installed, selected and enabled compatible extension. Lumen does not bundle a general Pi search provider; third-party recommendations remain pending. Extensions run trusted local code, not a sandbox; their direct writes can bypass Lumen note confirmation. Complex Skills and terminal-only or arbitrary extensions are not guaranteed. Native Codex / Antigravity images currently support PNG generation, not native editing; API image generation/editing is separate. Ordinary unsent input may not survive reload; cross-Vault text drafts have a separate explicit restore flow.

5.8.5 passed 36 regression entry points, 10 local-agent protocol tests, TypeScript, production build and packaging. An isolated macOS Vault covered save settings and reload, original EPUB import, your words, a live Pi answer, confirmed notes, export and source return. API image routes and native PNG storage used original deterministic fixtures. All live image providers, other platforms and autonomous-task upgrade migration are outside this verification.

[Release notes](docs/RELEASE_NOTES_5.12.0.md) · [Guide](docs/READING_GUIDE.md) · [Workflow tutorials](runtime-workflow-pack/) · [Distribution terms](COMMERCIAL_LICENSE.md) · [Third-party notices](docs/THIRD_PARTY_NOTICES.txt)



## Changelog / 更新日志

### 5.12.0 · 2026-10-20

- 本机跨库发现、用途名片、引用 ID、委托与持续问答，按需确认保存成果；图表 PNG 复制/保存和 SVG 导出。 / Local Vault discovery, purpose cards, references, delegated Q&A and confirmed reports; diagram PNG copy/save and SVG export.
- [完整发布说明 / Full release notes](docs/RELEASE_NOTES_5.12.0.md)。

### 5.11.0 · 2026-10-18

Pele Auto/Paper 主题、Codex 动态模型与推理强度、CLI 图片输入。 / Pele Auto/Paper themes, dynamic Codex reasoning controls and CLI image input.

[完整发布说明 / Full release notes](docs/RELEASE_NOTES_5.11.0.md).
