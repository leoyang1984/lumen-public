# LUMEN 5.14.1 — 伴读发光水母 / Thinking Jellyfish Companion

2026-10-23

## 中文

- **输出前的深海陪伴**：在用户提问至助手首个字输出前的等待阶段，呈现纯数学计算、轻量流体游动的 ASCII 生物发光水母（Bioluminescent Jellyfish），消解推理与知识库检索时的等待焦虑。
- **海萤微光浮空状态字**：无边框等宽微光排版，呼吸频率与水母游动共振（3.6s 周期），优雅联动展示思考、工具执行与检索状态；首字到达即自然退场。
- **四款主题色调自由切换**：在“设置 → LUMEN → 高级”中可自由切换伴读水母外观风格：
  - **流明金辉（Amber Gold）**：温暖璀璨的金色呼吸光晕（`#fbbf24`）；
  - **Obsidian 幻紫（Violet）**：经典暗紫生物荧光（`#c084fc`）；
  - **深海幽蓝（Deepsea Cyan）**：清透的深海冰蓝微光（`#38bdf8`）；
  - **生物荧光绿（Emerald）**：深海极客发光水母绿（`#34d399`）。
- **极客轻量与零资源浪费**：仅在等待输出的数秒内由 `requestAnimationFrame` 驱动轻量数学帧缓冲（CPU < 0.5%），首字输出后立即自动销毁动画循环，不占用任何后台系统资源。

### 安装与升级

BRAT 仓库：`leoyang1984/lumen-public`。手动安装仅下载 Release 附件中的 `main.js`、`manifest.json`、`styles.css`，放入 `.obsidian/plugins/lumen/` 并重新加载 Lumen。升级前备份；只替换这三个运行文件，保留所有设置与笔记数据。

---

## English

- **Bioluminescent companion before output**: An organic, pure-math ASCII jellyfish swims and breathes while the model is reasoning, retrieving notes or calling tools, easing pre-output latency anxiety.
- **Luminous floating status line**: Borderless, monospace ambient status text breathing in sync with the jellyfish (3.6s cycle), naturally dissolving the moment the first response token arrives.
- **Four color themes**: Choose your favorite jellyfish theme under Settings → LUMEN → Advanced:
  - **Lumen Amber Gold**: Warm, radiant golden bioluminescent glow (`#fbbf24`);
  - **Obsidian Violet**: Classic deep-purple bioluminescent glow (`#c084fc`);
  - **Deepsea Cyan**: Crisp, ethereal oceanic cyan light (`#38bdf8`);
  - **Bioluminescent Emerald**: Cyber-terminal deep-sea green (`#34d399`).
- **Lean and zero overhead**: Pure-math frame-buffer rendering driven by `requestAnimationFrame` only runs during the brief pre-output waiting window (CPU < 0.5%) and cleanly unmounts upon first-token streaming.

### Install and upgrade

Use `leoyang1984/lumen-public` in BRAT. For manual installation, download only `main.js`, `manifest.json` and `styles.css` from the Release into `.obsidian/plugins/lumen/`, then reload Lumen. Back up first; replace only these runtime files and preserve all settings and notes.
