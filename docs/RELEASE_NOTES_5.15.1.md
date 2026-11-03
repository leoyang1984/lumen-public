# LUMEN 5.15.1 — 图表排版与连接恢复 / Diagram Typography and Connection Recovery

2026-11-03

## 中文

- Pele 从 1.10.0 固定升级至 1.13.0，接收子图方向与连线、长标签、解析和触控修复。
- Auto/Paper 明确提供浅色／深色底上的文字颜色，配合 Pele 的对比色选择；主题切换保持现有 SVG。
- 新增「技术标签使用等宽字体」，默认关闭。开启后按编辑器等宽字体测量并绘制类图成员、ER 图字段和目录树；时序图消息不变，支持的源码字体设置仍优先。
- 接收源码中的 Mermaid 系列配色，未指定／无效项使用主题。固定配色不随主题改变。支持范围和示例见 [图表指南](https://github.com/leoyang1984/lumen-public/blob/main/docs/DIAGRAM_GUIDE.md)。
- 继续使用现有图表操作菜单、公式、离线图标、链接和导出流程。没有新增配色面板、模板中心或图表编辑器。
- 普通 AGY 对话遇到明确的 TLS、连接重置或流读取异常时，在尚未输出正文、未开始工具或能力操作的情况下，自动重连并重试一次。重建可见历史和工具作用域，两次尝试共用原请求时间预算。
- 请求详情保存脱敏错误原因、尝试次数和恢复结果。停止、断开、切换讨论或修改连接设置会阻止恢复。已经开始输出或操作、生图、跨库委托、登录／额度错误和协议错误不自动重放；底层网络异常仍可能发生。

验证：`npm test`、TypeScript 检查、生产构建通过；图表浏览器检查 43 项、导出 47 项、公式 15 项、新增升级检查 59 项通过。独立配置与合成库中的真实 Obsidian 升级检查 59 项通过，涵盖宿主 SVG 清理、真实设置控件和独立 SVG/PNG，且宿主 MathJax 保持不变。

AGY 完成 20 轮真实连续对话及中途断开后的历史恢复；传输故障自动恢复通过故障注入验证。Windows/Linux 和移动真机未在本次重新验收。

要求 **Obsidian 1.5.7+**。BRAT 仓库：`leoyang1984/lumen-public`。手动升级只需备份并替换 Release 附件中的 `main.js`、`manifest.json`、`styles.css`，放入 `.obsidian/plugins/lumen/` 后重新加载。保留 `data.json`、笔记和历史；GitHub 自动生成的 Source code 压缩包不是插件安装包。

[图表指南](https://github.com/leoyang1984/lumen-public/blob/main/docs/DIAGRAM_GUIDE.md) · [AGY 指南](https://github.com/leoyang1984/lumen-public/blob/main/docs/ANTIGRAVITY_GUIDE.md)

## English

Pele is pinned to 1.13.0. Auto/Paper supply contrasting text colors for explicit fills. The new **Monospace technical labels** preference is off by default and applies to class members, ER attributes and file trees, including measured layout and exports. Sequence messages retain their regular font. Supported source fonts and palettes remain authoritative; omitted/invalid palette entries follow the host theme.

AGY reconnects and retries one known transport failure before any answer text or tool/capability activity, rebuilding visible history and fresh tool scopes within the original deadline. Request details retain sanitized reasons, attempts and recovery results. Stop, disconnect, discussion changes and connection-setting changes prevent recovery. Partial output, started operations, images, delegated tasks, auth/quota and protocol failures are not replayed. Underlying network failures can still occur.

Existing menus, formulas, offline icons, navigation and exports remain in use. Full regression tests, type checking and production build passed, together with 164 browser checks and 59 checks in an isolated native Obsidian Vault. Native checks cover the real sanitizer, settings controls, standalone SVG/PNG and unchanged host MathJax. AGY passed 20 real conversation turns, including history restoration after disconnect; transport recovery was validated by fault injection. Physical mobile devices and Windows/Linux were not revalidated in this release.

Requires **Obsidian 1.5.7+**. Use `leoyang1984/lumen-public` in BRAT. Back up and replace only the Release's `main.js`, `manifest.json` and `styles.css` under `.obsidian/plugins/lumen/`, then reload LUMEN. Preserve settings, notes and history. GitHub-generated Source code archives are not installation packages.
