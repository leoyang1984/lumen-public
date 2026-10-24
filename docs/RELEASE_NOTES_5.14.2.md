# LUMEN 5.14.2 — 水母淡入淡出动效优化 / Smooth Jellyfish Transition

2026-10-24

## 中文

- **平滑淡入淡出（Smooth Fade In & Out）**：重构了输出前发光水母伴读状态的生命周期过渡，使用平滑缓动曲线同步控制透明度与高度收放（进入 450ms，淡出 600ms）。
- **告别突兀闪烁与视口跳动**：当首个内容 Token 到达时，水母自然柔和淡出，高度平滑收回，彻底消除了界面闪断感与消息跳动。
- **状态行衔接优化**：水母淡出期间抑制普通思考闪烁行出现，保持过渡期纯粹干净的视觉体验。

### 安装与升级

BRAT 仓库：`leoyang1984/lumen-public`。手动安装仅下载 Release 附件中的 `main.js`、`manifest.json`、`styles.css`，放入 `.obsidian/plugins/lumen/` 并重新加载 Lumen。升级前备份；只替换这三个运行文件，保留所有设置与笔记数据。

---

## English

- **Smooth fade-in & fade-out**: Re-engineered the transition lifecycle of the pre-output ASCII jellyfish companion with synchronized opacity and height easing (450ms in, 600ms out).
- **Eliminated abrupt layout jumps**: When response streaming begins, the jellyfish smoothly fades and collapses its height gracefully, preventing sudden visual interruptions.
- **Seamless status-line handoff**: Suppressed secondary thinking indicator lines during the jellyfish fade-out window for a clean and unified visual flow.

### Install and upgrade

Use `leoyang1984/lumen-public` in BRAT. For manual installation, download only `main.js`, `manifest.json` and `styles.css` from the Release into `.obsidian/plugins/lumen/`, then reload Lumen. Back up first; replace only these runtime files and preserve all settings and notes.
