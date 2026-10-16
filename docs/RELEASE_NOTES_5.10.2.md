# LUMEN 5.10.2 — 全生态本地 Agent MCP 互联与无感连接 / Local Agent MCP ecosystem and seamless connection

## 中文

- **全生态本地 Agent MCP 扩展（Codex / Pi / Antigravity）**：
  - 在原有 Codex 架构基础上，全面接入 Pi 与 Antigravity（AGY）本地引擎的 MCP（Model Context Protocol）协议；
  - 自动发现各引擎的本地 MCP 配置，支持在聊天输入框下方一键打开 MCP 管理面板；
  - 支持多选已配置的 MCP 服务器并直观查看其挂载的工具列表与参数详情，打破本地助手与外部系统壁垒。
- **严格的人工确认安全门禁（Human-in-the-Loop Safe Execution）**：
  - 延续严苛的安全边界原则：MCP 工具调用均需经过运行时的显式人工审核；
  - 完整呈现调用方法、目标服务器与入参明细，确认后方可执行，拒绝后安全中断，彻底防止越权或不可控的外部调用。
- **无感能力配置与连接智能保活**：
  - 彻底解决此前在输入框下方操作 MCP 开关或勾选服务器时连接意外断开（指示灯由绿变灰）的问题；
  - 动态切换 MCP、联网搜索或 Skills 时，本地 Adapter 智能常驻，连接指示灯持续保持绿色就绪（Ready）；
  - 切换底层模型或可执行文件时提供平滑的自动重连保障。

### 使用与升级

BRAT 仓库：`leoyang1984/lumen-public`。手动安装下载 `main.js`、`manifest.json`、`styles.css`，放入 `.obsidian/plugins/lumen/`。升级前建议备份，仅替换这三个运行文件，保留 `data.json`、阅读状态、翻译任务与对话历史，再重载 LUMEN。

## English

- **Local Agent MCP Ecosystem (Codex / Pi / Antigravity)**:
  - Extended Model Context Protocol (MCP) integration across Codex, Pi, and Antigravity (AGY) local engines.
  - Automatically discovers local MCP server configurations and opens the unified MCP management modal directly from the chat composer toolbar.
  - Inspect server tool lists and toggle external tool selections dynamically to bridge local models with external applications.
- **Human-in-the-Loop Safe Execution**:
  - Enforces runtime human review for all MCP tool calls: shows tool name, server, and exact arguments before execution.
  - Grants tool permissions only upon explicit approval; user declines safely abort execution without leaking or compromising local vault state.
- **Seamless Capability Configuration & Connection Keep-Alive**:
  - Fixed an issue where operating the composer MCP button dropped active connections to idle (grey dot).
  - Toggling MCP tools, web search, or skills dynamically keeps adapters resident and connection status continuously ready (green dot).
  - Smooth automatic reconnection when switching models or program paths.

### Use and upgrade

Use `leoyang1984/lumen-public` in BRAT. Manual installation requires only `main.js`, `manifest.json`, and `styles.css` placed in `.obsidian/plugins/lumen/`. Back up and replace these three runtime files while preserving `data.json`, reading state, translation tasks, and chat history, then reload LUMEN.
