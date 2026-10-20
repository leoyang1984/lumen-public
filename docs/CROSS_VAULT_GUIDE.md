# 跨知识库委托与持续对话 / Cross-Vault discussions

## 中文

这是集成在 LUMEN 的 **macOS 本机预览功能**。发起库称为 A，接收库称为 B。两个库均需由 Obsidian 登记，使用标准 `.obsidian` 配置目录，安装并启用 LUMEN 5.12.0。B 配置已安装、登录的 Codex、pi 或 Antigravity，本机登录 PATH 中须有 Node.js（验证使用 Node 22）。Node 用于监督并清理本轮执行进程；A 可以使用 API。

### 先说目标，再选库

1. 在 A 问“哪些知识库安装了 LUMEN，并可以连接？”，或输入 `/vaults`。这由插件查询真实本机登记与签名状态，不交给模型猜文件夹，不读 B 的笔记或账户设置，也不批量打开库。
2. 选择可接收的 B，核对名称和完整路径；同名库依身份区分。也可输入 `@` 选择知识库，或复制候选详情中的完整 `lumen-vault:v1:…` 引用 ID。解析 ID 只检查目标，点“使用此目标，保留任务”后才绑定；ID 不授予权限，有效期 30 天。
3. 若 B 未运行，点“打开并检查”，再刷新状态。可接收状态仅表示基本条件通过，不保证 CLI 登录或模型调用成功。B 可能进入前台，A 保持打开。
4. 输入任务并发送，在 A 的范围窗口核对目标、原文和手动补充材料。默认不附当前笔记、选区、其他聊天、阅读内容或附件。首版委托只接受纯文字。
5. B 按来源许可策略批准本轮，在专属执行会话中使用自己的 Agent。默认普通委托生成 Markdown；只有 B 确认保存后，A 才报告成果已保存。A 采纳摘要或全文也先展示写入预览。

B 可在“关联知识库 → 编辑本库用途”手动填写简介、标签和成果说明，默认不公开。打开公开开关并保存后，A 可按目标匹配这些文字，显示依据和更新时间。该功能不扫描笔记，不做语义推断；未知用途保持未知，匹配不授权、不派发。

### 持续纯问答

选好 B 后点击 **与此库持续对话**，也可从完成结果卡“继续跟进”进入。目标持续显示，本轮默认 **仅回答**；点击入口不发送。每次发送仍核对范围，按 B 单次或持久来源策略执行。

仅回答不自动生成报告，只提供受控只读笔记工具，不开放写入、命令、MCP 或扩展。Codex/Antigravity 原生联网依 B 的开关，pi 扩展联网在此模式不可用。回答上限 8,000 字符，空回答或超限明确失败，不截断成成功。A 的每张回答卡标注 B 来源并区分“回答完成”与“成果已保存”。

完成后直接输入下一问，接续最新已完成轮；不需要重新选库。B 只使用该讨论的问题、回答和确认保存的成果快照，不混入普通聊天。每轮是独立受管执行，完成后关闭 CLI，不依赖长期驻留进程。

需要落笔记时，把 **本轮** 切为 **生成笔记**；在 B 核对并确认完整写入预览。保存成功后，下一轮默认回到仅回答。采纳到 A 仍需确认。

- **回到本库**：解除输入区目标，保留未发送文字；不停止任务、不结束讨论，可从最新卡片再续接。
- **结束讨论**：本轮结束或停止后，在 A 关闭整条链的续接入口，保留文字；不删除 B 历史、笔记，也不撤销来源许可。
- **停止**：在 A 任务卡或 B 来源提示栏操作，等真实清理回执；已经确认保存的修改保留。

### 草稿、授权与恢复

跨库文字草稿按会话保存在本机私有账本，位于 Vault 同步目录之外。最多 20 份，30 天有效；不保存附件、引用对象、批准动作或权限。正常关闭会刷新草稿，强杀或断电可能丢失未落盘的末次编辑。切换会话清空当前目标；重启后点击恢复，再重新核对 B，不自动重发。输入区“其他会话的跨库草稿”可找回没有发送过消息的原聊天。

每条讨论最多 20 轮；每份快照最多 64,000 UTF-8 字节及 48,000 文本字符，保留最近 32 份。失败、取消、中断、缺失快照或更换相关执行配置时不能续接。不从现有普通聊天补造上下文；B 离线、忙碌、撤销或换身份不会静默改发 A。

“仅本次”不授权下一轮；“始终允许此来源”不批准笔记写入或敏感外部工具。B 的关联知识库管理器可撤销新请求，或同时停止当前任务；重新允许后仍须新一次授权。授权不按同名继承。通信恢复查询同一任务，不自动重放；B 重启时未结束的任务标为中断。

成果文件仅支持可见 Markdown 和已有父目录，单文件不超过 16,000 UTF-8 字节；A 追加后的整篇文件也受此限制。已保存成果变化、移动或被替换时拒绝传输旧引用。

### 升级和回退

先备份，停止执行并关闭插件，只替换 `main.js`、`manifest.json`、`styles.css`；保留设置、历史及本机身份账本，两端均需重载。回退前完全退出 Obsidian，等待卸载落盘，只恢复旧三文件。旧 P5 插件不能读取新讨论元数据，会拒绝跨库启动；不要删身份文件或覆盖新账本。升级回来后可显式恢复原讨论。

macOS 监督进程管理本轮 CLI 及继承同一 POSIX 进程组的工具；主动脱离进程组或既有外部守护服务不在该保证内。停止不撤销已发生的外部操作。Windows/Linux/移动端没有跨库入口，原功能不因本预览被移除。真实账户模型、其他系统及所有配置组合未全面实测。

## English

Cross-Vault work is a **macOS local preview** built into LUMEN. A sends; B receives. Both Vaults must be registered in Obsidian, use the standard `.obsidian` directory and enable LUMEN 5.12.0. B needs a configured, authenticated Codex/pi/Antigravity CLI and Node.js on its login PATH (tested with Node 22) for process supervision. A may use API chat.

### Choose, review, delegate

Ask which Vaults have LUMEN and can connect, or use `/vaults`. LUMEN checks real registrations, plugin manifests and signed live status, not B's notes, settings or credentials. Choose a ready card and verify its full path; `@` selection and full identity references are also supported. Resolving a reference only previews the target; explicitly choose **Use this target; keep task**. References expire after 30 days and grant no permission.

**Open and check** opens only the selected Vault; B may come forward while A remains open. Readiness is a prerequisite check, not a guarantee of CLI authentication or model success. Send your text-only task and review the exact destination and sharing scope in A. Active notes, selections, other chats and attachments are not shared automatically. B follows its consent policy and runs in a dedicated conversation. Ordinary delegation produces a report only after B confirms its write preview. Adoption in A requires a separate preview and confirmation.

B can explicitly publish a manually authored purpose card under Linked Vaults. Matching uses only the published description, tags and deliverables, with evidence and update time. It does not inspect notes, infer unknown contents, authorize or dispatch work.

### Keep talking and save when needed

Choose **Keep talking to this Vault**, including after preparing a result-card continuation. The destination stays visible and **Answer only** is the default. Every send still reviews the scope and follows B's once-only or persistent source policy. Answers use read-only note tools; writes, commands, MCP and extensions are unavailable. Native Codex/Antigravity search follows B's settings; Pi extension-based search is unavailable in this mode. Empty or over-8,000-character replies fail explicitly.

The next question uses the latest completed turn without reselection. B uses the discussion's bounded private snapshot, not unrelated ordinary chat. Each turn owns a fresh execution session and closes its CLI afterward. Select **Create a note** for one turn and confirm B's full write preview; the next turn returns to answers. Cards label B as the source and distinguish answer completion from a saved report.

**Return to this Vault** keeps unsent text and leaves the discussion resumable. **End discussion** closes source-side continuation entries after the turn ends; it does not revoke trust or delete B's notes/history. Stop from A's card or B's banner and wait for confirmed cleanup; saved changes remain.

### Restore, limits and rollback

Cross-Vault drafts are private local text and addressing data outside Vault sync: up to 20 drafts, 30 days each. They restore no attachments, approvals or permissions. Reopen the original conversation, explicitly restore and recheck B. No automatic replay occurs. Normal teardown flushes drafts; a hard kill or power loss may lose the last unsaved edit.

Discussions are limited to 20 turns, 64,000 UTF-8 bytes and 48,000 text characters per snapshot, with 32 recent snapshots. Failed/interrupted turns, changed execution configuration and missing contexts cannot continue. Offline, busy, revoked or replaced-identity receivers fail without falling back to A. Restarted B marks unfinished work interrupted. Once-only permission does not carry to a new turn; persistent source permission never approves note writes or sensitive external tools.

Saved artifacts are visible Markdown in existing folders, up to 16,000 UTF-8 bytes per file, including appended notes in A. Changed/moved artifacts reject stale references. Upgrade only the three runtime files after backing up and stopping execution, preserving settings, history and identities. Fully quit Obsidian before rollback. Older P5 code cannot read P6 discussion metadata; it rejects cross-Vault startup without rewriting the ledger. Re-upgrade to restore the discussion; never delete identities or overwrite the new ledger with an old copy to force compatibility.

The macOS supervisor covers its CLI's POSIX process group, not deliberately detached tools or pre-existing external daemons. Stop does not undo completed external side effects. Windows/Linux/mobile cross-Vault work is unavailable; existing features remain. Synthetic fixtures covered actual adapters and isolated Obsidian windows; live-account model combinations and other platforms remain unverified.
