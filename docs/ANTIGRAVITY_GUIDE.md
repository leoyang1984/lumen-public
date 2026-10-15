# 本机 Antigravity（agy）

适用于 Lumen 5.10.0。

1. 在本机安装 Antigravity CLI，先在终端运行 `agy` 并完成登录。
2. 在 Obsidian → 设置 → Lumen → 连接中，选择 **本机 Antigravity（agy）**。
3. 点击连接。首次启动可能需要几十秒；连接验证启动协议，登录和模型额度在发送问题时验证。
4. 程序默认自动寻找 `agy`，包括用户的 `.local/bin`。如找不到，在本机高级设置中填写可执行文件的完整路径。
5. 模型留空时使用 CLI 默认设置；也可通过 `agy models` 查询后填写模型标识。

支持侧栏流式问答、笔记与 EPUB 选区、连续追问、停止、断线重连及基于 Lumen 可见历史的恢复。笔记检索、读取和修改走 Lumen 工具；写入、编辑、移动、撤销继续使用预览、人工确认和单篇快照。EPUB 翻译可使用此连接，翻译结果继续由既有格式和保护标记检查后保存。

可在“助手能力”中开启原生生图（默认关闭），然后使用输入框“生成配图”，或明确输入“生成一张图片……”。图片先私下预览，确认后保存 PNG 附件与说明笔记。本次接通文生图，不接收参考图或编辑已有图片。此连接暂不开放原生联网、Skill、扩展或图片输入。移动端继续使用 API。员工、Canvas、生图及其他明确指定 API 的调用方保留原有行为。

## 实现与验证

适配器运行独立临时工作目录中的后台进程，以 `--input-format stream-json --output-format stream-json` 交换 NDJSON。每次只发送一条请求；按 `init`、`step_update`、`result` 处理协议，最终结果为准。进程、上下文及历史按助手、Vault 和讨论隔离，不使用 `--continue` 或恢复用户终端里的会话。

Lumen 创建临时自定义 agent 和 `PreToolUse` 拒绝钩子，关闭 slash command 展开，不直接向 CLI 暴露 Vault。模型用 JSON 信封请求 Lumen 工具，运行时检查当前工具白名单与参数。普通对话中的原生工具事件会中止当前请求。生图使用独立的一次性会话，仅允许一次 `generate_image`；钩子固定本次提示和随机产物名，清空输入图片路径，其余原生工具仍拒绝。不会使用 `--dangerously-skip-permissions`，不会修改用户的全局 CLI 设置。停止或错误后关闭该进程，下一轮从可见历史重建。

本机 CLI 在 `--json-schema` 下通过原生完成路径处理结果，与全面拒绝原生工具的策略冲突。因此本适配器将响应结构放入提示，由 Lumen 验证完整 JSON 信封，不依赖 `structured_output` 字段；无效响应不会执行工具。CLI 自身的模型配置、账号用量及本机历史存储仍由 CLI 管理。

自动回归覆盖：设置迁移、移动边界、中文与 UTF-8 分片、流式信封、追问、新讨论、历史归属、受控读取、未授权工具、原生工具、无效参数与帧、错误会话、登录/额度/模型错误、超时、停止、重连及临时文件清理。实机探针仅发送原创合成材料：`test/probes/local-agent/agy-chat-live.ts`。macOS 本机生产适配器实测已通过问答、追问、受控读取、停止、重连和历史恢复；原生写入尝试被拒绝钩子阻止，临时 canary 未创建。42 个自动测试文件、类型检查与生产构建通过。生图生产适配器实测生成一张 1024×1024 JPEG，并验证当前原生会话的产物；Chromium 实测将该 JPEG 转为 PNG 预览。Windows/Linux 与真实 Obsidian 界面操作尚未实测。

协议参考：[Google Antigravity headless mode](https://www.antigravity.google/docs/cli/headless/)、[Hooks](https://www.antigravity.google/docs/hooks/)、[Custom agents](https://www.antigravity.google/docs/subagents/)。

# Local Antigravity (agy)

For Lumen 5.10.0. Install and authenticate `agy` in a terminal, then select **Local Antigravity (agy)** under Lumen → Connection. The executable is discovered automatically; advanced settings accept an explicit path and an optional model slug from `agy models`. An empty model uses the CLI default. Connection checks startup; authentication and quota are checked on the first question.

Sidebar chat, supplied reading context, followups, stop/reconnect, visible-history reconstruction and EPUB translation use this connection. Note operations use Lumen's governed tools and existing human preview/confirmation/undo. Native image generation is available as an opt-in capability. Enable it under Assistant capabilities, explicitly request an image, review its private preview and confirm to save a PNG attachment and note. This integration supports text-to-image; reference-image edits are unavailable. Native search, Skills, extensions and image input are unavailable. Mobile keeps API.

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
