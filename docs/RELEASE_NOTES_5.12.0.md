# LUMEN 5.12.0 — 跨知识库持续对话与图表导出 / Cross-Vault discussions and diagram export

2026-10-20

## 中文

- **本机知识库发现与选库**：在聊天中问有哪些安装 LUMEN 的库，或输入 `/vaults`、`@`，得到实际登记和签名状态的候选卡。支持 B 手动公开用途、按目标匹配、完整引用 ID 及私有跨库草稿；检查与选择不会启动 Agent，也不扫描 B 的笔记或设置。
- **跨库委托与持续纯问答**：B 用自己的本地 Agent、工具及独立上下文执行，A 明确显示目标和每条回答来源。持续对话默认仅回答，不自动生成文件；需要成果时本轮切换生成笔记，B 确认保存后才报告成功，下一轮恢复仅回答。A 采纳结果也需确认预览。
- **逐轮授权与恢复**：发送前核对原文和手动材料，不自动附带 A 当前笔记、选区或其他聊天。B 保留单次/持久来源策略及写入确认。正常重启后显式恢复草稿、重新检查目标；失败、离线、撤销或快照缺失不回退 A，不自动重放。回到本库与结束讨论分别处理，受管进程清理有真实终态回执。
- **Pele 图表图片导出**：复制 PNG、保存到当前 Markdown、下载独立 SVG，保留完整图表与当前 Auto/Paper 配色，缩放和平移不裁切导出。保存沿用 Obsidian 附件位置、唯一命名和过期目标保护。
- **保留既有功能**：EPUB 阅读与整书翻译、API/CLI 对话、图片提问、Codex 模型与推理强度、MCP 确认、白板和员工工作流继续保留。

### 支持范围与限制

跨库功能是 **macOS 本机预览**，两端安装并启用 5.12.0，使用标准 `.obsidian` 目录。B 需已配置、登录的 Codex/pi/Antigravity，以及登录 PATH 中可用的 Node.js（验证用 Node 22）；A 可使用 API。Windows/Linux 和移动端不提供跨库功能。仅回答模式不开放写入、命令、MCP 和扩展，pi 扩展联网在此模式不可用。每条讨论最多 20 轮，单次回答最多 8,000 字符；快照有容量限制，缺失后不补造续接。

当前委托只接受纯文字，保存成果只支持可见 Markdown、已有父目录，单文件最多 16,000 UTF-8 字节。停止保留已确认修改，不能撤销已发生的外部副作用；主动脱离进程组的工具或既有守护服务不在清理保证内。

图表保存到笔记需要 Obsidian 1.5.7+ 附件接口。PNG 复制依宿主剪贴板权限，SVG 字体依设备可用字体；物理移动端剪贴板和下载未验收。

### 安装、升级及回退

BRAT：`leoyang1984/lumen-public`。手动安装仅下载 Release 的 **main.js、manifest.json、styles.css**，放入 `.obsidian/plugins/lumen/`。先备份，停止任务并关闭插件，只替换三文件，保留 `data.json`、阅读状态、翻译任务、聊天历史与本机身份账本，再重载两端。GitHub 自动的 Source code 压缩包不是插件安装包。

回退前完全退出 Obsidian，待卸载落盘后恢复旧三文件。旧 P5 不能读取新讨论元数据，会拒绝跨库启动；不要删身份文件或以旧账本覆盖新账本。升级回来后原讨论和草稿可显式恢复。

### 验证范围

65 个自动测试入口、66 项跨库浏览器检查、类型检查与生产构建通过。实际 Codex/pi/Antigravity 适配器使用合成 CLI 验证；独立配置的 Obsidian 双库覆盖多轮、写入确认、草稿/历史、整应用重启、旧插件回退再升级，以及 7 类停止/撤销/崩溃清理。此前的图表导出浏览器检查也已通过。未宣称跨库真实账户模型、所有外部工具、其他系统或移动真机均已实测。

[跨库指南](CROSS_VAULT_GUIDE.md) · [图表导出指南](DIAGRAM_EXPORT_GUIDE.md) · [原有功能指南](READING_GUIDE.md)

## English

- **Discover and select local Vaults**: ask which Vaults have LUMEN, or use `/vaults` and `@`. Cards reflect actual registration and signed live status. Opt-in purpose cards, goal matching, full identity references and private drafts help address tasks; discovery does not inspect B's notes/settings or start an Agent.
- **Delegate and keep talking**: B uses its own local assistant, tools and isolated context. A labels the destination and reply source. Persistent discussions default to answers without automatic files. Choose Create a note for one turn and confirm B's preview; the next turn returns to answers. Adoption in A requires a separate confirmation.
- **Per-turn consent and explicit recovery**: review the text and manually supplied material on every send. Active notes, selections and unrelated chats are not shared automatically. B's once-only/persistent permission and write confirmation remain authoritative. Reopen and explicitly restore/recheck; offline, revoked or missing-context errors never fall back to A or replay work. Returning locally and ending a discussion are distinct actions. Stop waits for confirmed managed cleanup.
- **Pele image export**: copy PNG, save to the active Markdown note or download standalone SVG. Export the complete diagram in its current Auto/Paper colors independently of zoom/pan, with attachment naming and stale-target protection.
- **Existing workflows retained**: EPUB reading/translation, API and CLI chat, image questions, Codex model/effort selection, governed MCP, Canvas and employees remain available.

### Scope and limitations

Cross-Vault work is a **macOS local preview**. Both Vaults need LUMEN 5.12.0 and standard `.obsidian` directories. B needs a configured, authenticated Codex/pi/Antigravity CLI and Node.js on its login PATH (tested with Node 22); A may use API chat. Cross-Vault work is unavailable on Windows/Linux/mobile. Answer-only mode excludes writes, commands, MCP and extensions, so Pi extension-based search is unavailable. Discussions are limited to 20 turns and answers to 8,000 characters. Bounded snapshots are not reconstructed from ordinary chat when missing.

Delegation accepts text only and saves visible Markdown in existing folders, up to 16,000 UTF-8 bytes per file. Stop preserves confirmed changes and does not undo external side effects. Deliberately detached tools and pre-existing external daemons are outside process-group cleanup guarantees. Save to note needs Obsidian 1.5.7+ attachment APIs; PNG copy needs host permission and SVG uses device fonts. Physical mobile clipboard/downloads remain unverified.

### Install, upgrade and rollback

Use `leoyang1984/lumen-public` in BRAT, or download only **main.js, manifest.json, styles.css** into `.obsidian/plugins/lumen/`. Back up, stop tasks and disable the plugin, replace only those three files, preserve settings/reading state/translation tasks/history/local identities, then reload both Vaults. GitHub's Source code archives are not plugin installers.

Fully quit Obsidian before rollback and wait for teardown. Older P5 code rejects new discussion metadata without rewriting the ledger. Do not delete identities or replace the new ledger with an old backup. Re-upgrade to restore discussions explicitly.

### Validation

65 automated test entries, 66 cross-Vault browser checks, TypeScript and production build passed. Actual Codex/pi/Antigravity adapters used synthetic CLI fixtures. Isolated Obsidian Vaults covered multiple turns, confirmed writes, drafts/history, whole-app restart, rollback/re-upgrade and seven stop/revoke/crash scenarios. Diagram export browser checks also passed. Cross-Vault live-account models, all external tools, other OS combinations and physical mobile devices have not been fully tested.

[Cross-Vault guide](CROSS_VAULT_GUIDE.md) · [Diagram export guide](DIAGRAM_EXPORT_GUIDE.md) · [Existing feature guide](READING_GUIDE.md)

## SHA-256

| File | SHA-256 |
| --- | --- |
| main.js | `6125a6193210e4e3a936f064d40c162f005dfe0a2261fda4743817773490300c` |
| manifest.json | `3c87829342c1372a12e8b1ae01136aba604d97aaf2994b47f8ef66a071729b35` |
| styles.css | `934150bd1791510a6d2e0093cc2a2b28288e601e749cc1c37d0d84d61d52d833` |
