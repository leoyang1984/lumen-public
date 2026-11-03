# 本机 Antigravity（agy）

适用于 LUMEN 5.15.1。

1. 在本机安装 Antigravity CLI，先在终端运行 `agy` 并完成登录。
2. 在 Obsidian → 设置 → Lumen → 连接中，选择 **本机 Antigravity（agy）**。
3. 点击连接。首次启动可能需要几十秒；连接验证启动协议，登录和模型额度在发送问题时验证。
4. 程序默认自动寻找 `agy`，包括用户的 `.local/bin`。如找不到，在本机高级设置中填写可执行文件的完整路径。
5. 模型留空时使用 CLI 默认设置；也可通过 `agy models` 查询后填写模型标识。

支持侧栏流式问答、笔记与 EPUB 选区、连续追问、停止、断线重连及基于 Lumen 可见历史的恢复。笔记检索、读取和修改走 Lumen 工具；写入、编辑、移动、撤销继续使用预览、人工确认和单篇快照。EPUB 翻译可使用此连接，翻译结果继续由既有格式和保护标记检查后保存。

可在“助手能力”中开启原生生图（默认关闭），然后使用输入框“生成配图”，或明确输入“生成一张图片……”。图片先私下预览，确认后保存 PNG 附件与说明笔记。支持文生图，不接收参考图或编辑已有图片。联网和 Skill 的使用见下节。MCP 可在能力设置中启用并选择服务，每次外部调用需要确认。图片提问经 LUMEN 配置的视觉渠道解析后转交，不是 agy 原生图片输入。脚本扩展和语音未接入；移动端继续使用 API。

## 联网和 Skill

1. 在“助手能力”开启“联网搜索”。该开关与对话输入区同步，发送、追问和重启后保留。开启表示允许按需搜索，普通对话不会强制搜索；当前消息明确要求“不要联网”时不调用。明确要求联网却未实际取得证据时报告失败，不把模型记忆当作搜索结果。
2. 可以搜索公开网页，也可以提供公开 HTTP(S) 链接要求阅读。使用 agy 原生 `search_web`、`read_url_content`，展示调用进度与来源链接；不需要另外配置搜索 API Key。
3. 联网工作进程与普通对话分开，每个工作进程只执行一次固定参数的搜索或网页读取，每条消息最多八次。完成、失败或取消后保留健康的普通对话连接；手动断开仍清理全部所属进程。
4. 在“助手能力 → Skill”开启开关，展开“管理资源”，刷新列表并勾选可信 Skill。默认发现 `~/.gemini/antigravity-cli/skills`、`~/.gemini/config/skills`、兼容目录 `~/.gemini/antigravity/skills`、`~/.agents/skills`，以及 `.gemini/antigravity-cli/plugins`、`.gemini/config/plugins`、兼容 `.gemini/antigravity/plugins` 下的 Skill。也可以填写某个 `SKILL.md` 的完整路径，包括笔记库内的 Skill。
5. 在对话输入框工具菜单中明确选择本次使用的 Skill。当前支持独立指令型 Skill，可以与联网或明确请求的生图组合使用；不自动执行脚本、安装依赖或开放其他工具。依赖脚本、额外文件或 MCP 的 Skill 会明确提示不兼容。每次使用前校验文件摘要，文件变化后必须刷新并重新勾选。
6. 切换或取消 Skill 时，从可见对话历史重建普通会话，避免上一条 Skill 指令继续生效。Skill 不因历史记录自动获得授权。
7. agy 本身可能向模型展示全局插件 Skill 目录，已安装并不代表 Lumen 已授权调用。询问当前能力时，助手依据本条消息的 Lumen 权限信息回答，区分设置中已勾选的 Skill 与本条消息实际选用的 Skill；未选择时不应把全局目录宣称为可调用列表。

## MCP

在“助手能力”启用 MCP，刷新本机服务列表，勾选服务后在输入区工具菜单选择本轮可用服务。工具调用展示服务、工具名和参数，由用户确认后执行；拒绝时不会执行外部操作。Skill 不授予 MCP 权限。服务启动和实际能力取决于本机 CLI 配置及依赖，普通对话无需配置 MCP。

## 实现与验证

适配器运行独立临时工作目录中的后台进程，以 `--input-format stream-json --output-format stream-json` 交换 NDJSON。每次只发送一条请求；按 `init`、`step_update`、`result` 处理协议，最终结果为准。进程、上下文及历史按助手、Vault 和讨论隔离，不使用 `--continue` 或恢复用户终端里的会话。

Lumen 创建临时自定义 agent 和 `PreToolUse` 拒绝钩子，关闭 slash command 展开，不直接向 CLI 暴露 Vault。模型用 JSON 信封请求 Lumen 工具，运行时检查当前工具白名单与参数。普通对话中的原生工具事件会中止当前请求。生图和联网各使用独立的一次性会话，只授权本次指定的原生工具和固定参数，其余原生工具仍拒绝。完成依据包括原生 DONE 事件、当前会话绑定的成功钩子回执及实际返回内容。不会使用 `--dangerously-skip-permissions`，不会修改用户的全局 CLI 设置。普通对话自身停止或出错后从可见历史恢复；独立工作进程失败不关闭健康的普通对话。

本机 CLI 在 `--json-schema` 下通过原生完成路径处理结果，与全面拒绝原生工具的策略冲突。因此本适配器将响应结构放入提示，由 Lumen 验证完整 JSON 信封，不依赖 `structured_output` 字段；无效响应不会执行工具。CLI 自身的模型配置、账号用量及本机历史存储仍由 CLI 管理。

普通侧栏对话遇到明确的 TLS、连接重置或流读取中断时，如果本轮尚未输出正文、尚未开始工具或能力操作，会自动重建连接并重试一次。两次尝试共用原来的十分钟请求预算；重试使用发送前的可见历史及本轮上下文快照，重新建立工具权限作用域。生图、跨库委托、登录/额度错误、协议异常、空回答和已经开始操作的请求不自动重放。停止、断开、切换讨论或修改连接设置都会阻止继续恢复。

“本次请求详情”会显示尝试次数、恢复结果，以及经过固定词表过滤的错误码、原因、阶段和 CLI 终态；这些字段随聊天历史保存。不会保存原始 stderr、提示词或凭据作为诊断。自动回归见 `test/agy-recovery.test.ts`；二十轮实机连续对话及第十一轮历史重建探针见 `test/probes/local-agent/agy-continuity-live.ts`，需显式传入 `--live`，只使用合成测试材料。

自动回归覆盖：设置迁移、移动边界、中文与 UTF-8 分片、流式信封、追问、新讨论、历史归属、受控读取、未授权工具、原生工具、无效参数与帧、错误会话、登录/额度/模型错误、超时、停止、重连及临时文件清理。实机探针仅发送原创合成材料：`test/probes/local-agent/agy-chat-live.ts`。macOS 本机生产适配器实测已通过问答、追问、受控读取、停止、重连和历史恢复；原生写入尝试被拒绝钩子阻止，临时 canary 未创建。42 个自动测试文件、类型检查与生产构建通过。生图生产适配器实测生成一张 1024×1024 JPEG，并验证当前原生会话的产物；Chromium 实测将该 JPEG 转为 PNG 预览。Windows/Linux 与真实 Obsidian 界面操作尚未实测。

协议参考：[Google Antigravity headless mode](https://www.antigravity.google/docs/cli/headless/)、[Hooks](https://www.antigravity.google/docs/hooks/)、[Custom agents](https://www.antigravity.google/docs/subagents/)。

# Local Antigravity (agy)

For LUMEN 5.15.1. Install and authenticate `agy` in a terminal, then select **Local Antigravity (agy)** under Lumen → Connection. The executable is discovered automatically; advanced settings accept an explicit path and an optional model slug from `agy models`. An empty model uses the CLI default. Connection checks startup; authentication and quota are checked on the first question.

Sidebar chat, supplied reading context, followups, stop/reconnect, visible-history reconstruction and EPUB translation use this connection. Note operations use Lumen's governed tools and existing human preview/confirmation/undo. Enable web access under Assistant capabilities to permit native search and public page reading, with progress and source links. Permission persists, while an explicit per-message opt-out wins. Each isolated worker executes one fixed web operation, with at most eight per message. Healthy chat remains connected after completion, failure or cancellation.

Ordinary sidebar chat retries one known transient transport failure before any answer text or tool/capability activity. Recovery rebuilds visible history and fresh tool scopes within the original ten-minute deadline. Images, delegated tasks, auth/quota errors, protocol failures and empty answers are not replayed. Stop, disconnect, discussion changes and connection-setting changes prevent recovery. Request details retain only fixed diagnostic codes and attempt metadata, never raw stderr or credentials.

Enable Skills, refresh the installed list or inspect an explicit `SKILL.md` path, select a trusted instruction Skill, then choose it in the composer Tools menu for the current message. Standard agy/shared Skill folders and CLI plugin Skill folders are scanned within bounds. Digests are checked before use; changed files require renewed selection. Only self-contained instruction Skills are supported, including with web access or explicitly requested images. Skills do not grant script, supporting-file or MCP permissions. Switching or deselecting a Skill rebuilds from visible history so prior Skill instructions do not persist.

Plugin discovery includes both `~/.gemini/antigravity-cli/plugins` and the shared `~/.gemini/config/plugins` directory, plus the legacy agy plugin directory. A global CLI catalog is installed metadata, not authorization. Capability descriptions use the current Lumen permission snapshot and distinguish configured Skills from the one activated for this message.

Enable MCP under Assistant capabilities, refresh and select configured local servers, then choose the services for this message in the composer Tools menu. Each external call displays its server, tool and arguments for approval; declined calls do not execute. Skills do not grant MCP access. Server availability depends on local configuration and dependencies; ordinary chat needs no MCP setup.

Native image generation is opt-in. Explicitly request an image, review its private preview and confirm to save a PNG attachment and note. Reference-image edits, script extensions and voice are unavailable. Input images use the configured LUMEN vision channel for analysis before text is forwarded to agy; they are not native agy image input. Mobile keeps API.

Each owned CLI runs in a private temporary workspace with a custom agent, native-tool denial hook and disabled slash expansion. Lumen validates JSON response envelopes and tool arguments before dispatch. Image generation uses a separate one-use native session, a fixed prompt/name and no file inputs. Only its session-bound artifact is decoded into a validated PNG preview. It does not use the CLI's native schema completion tool, skip permissions, edit global CLI settings or resume terminal conversations. CLI-managed account usage and local history retain their normal behavior. Automated tests use synthetic fixtures; the live probe uses original synthetic text. Other operating systems and actual Obsidian UI interactions remain unverified.

## 原生生图验收（2026-10-15）

- 本机 `generate_image` 实际完成；生产适配器取回 1024×1024、737104 字节的原创 JPEG。
- CLI 会将产物名中的连字符改为下划线，因此插件预先使用随机下划线名称，并只读取当前会话目录中的唯一匹配图片，不扫描其他会话。
- 钩子的执行目录可能不同于工作目录，所有许可、单次令牌和回执均使用固定绝对路径；用户提示写入 JSON，不插入 shell 命令。
- 原生 `DONE`、成功钩子回执、当前会话 ID、固定提示/产物名、无参考图、真实文件和图片解码全部通过后，才返回预览。模型口头说“已生成”不足以判定成功。
- JPEG 在解码前检查文件大小和尺寸，再用 Chromium 解码为 PNG，进入既有 PNG 完整性、私有缓存、人工确认、去重与非覆盖保存流程。真实 JPEG → PNG 浏览器验证通过（1024×1024，1995952 字节）。
- 新增回归覆盖默认关闭/移动限制、固定参数、单次授权、跨目录钩子、shell 字面文本、会话/路径/符号链接校验、重复或缺失产物、额度错误、取消及失败不回退。
- 期间探针的相对钩子路径、测试打包缺失 Obsidian 替身、被占用的固定测试端口及误触发图片分析的追问测试用语已修正；这些是测试方法问题，已重测通过。

## 生图后的对话连接

修正了生图完成后显示断开的状态错误。生图仍由独立的一次性进程执行，普通对话进程和已有上下文持续保留；成功后恢复 `ready`，图片工作进程失败或取消也不会关闭健康的对话连接。取消后立即发出的下一条消息，会先等待该工作进程清理完成。显式断开、切换助手及卸载仍会清理拥有的进程。

此前代码在生图前调用 `closeOwned()` 关闭普通对话，并在成功后上报 `idle`，导致界面显示断开。虽然统一发送路径原本包含自动连接，这一状态和会话生命周期仍不正确。本次新增回归覆盖连续生图/直接追问、图片失败、取消后立即追问、手动断开和历史重建。
