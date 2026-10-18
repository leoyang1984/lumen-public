# LUMEN 5.11.0 使用指南 / Quick guide

## 中文

### Mermaid 图表

请助手用独立的 `mermaid` 代码块输出图表。LUMEN 会在聊天中显示 Pele 预览，可切换源码、复制 Mermaid/Markdown、缩放、平移和重置。源码仍能复制和编辑。

在 **设置 → LUMEN → 高级 → 图表主题** 选择：

- **Auto（默认）**：继承 Obsidian 当前字体和颜色，跟随深浅色及第三方主题。
- **Paper**：固定暖白纸张配色，适合阅读，不随深浅色改变。

选择会保存并即时作用于已显示的图表，无需安装 CSS Snippet。主题仅作用于 LUMEN 图表。不同 Mermaid 实现的语法覆盖可能有差异；不支持的类型或错误源码会显示提示并保留源码。独立 SVG 导出尚未提供。

### Codex 模型与推理强度

点击聊天顶部 Codex 连接菜单，分别选择模型和推理强度；连接设置页也提供同样选项。模型与档位来自已安装 CLI，可手动刷新。默认遵循有效 CLI/模型设置；显式选择按模型保存，仅改变强度不会清空会话。生成中暂时禁用切换。

可选档位由模型决定，包含轻量 low、中等 medium、高 high、极高 xhigh、最大 max。Ultra 需要委派工作流，当前显示说明并禁用。请求详情记录本轮请求值及可以确认的实际生效值。

### 图片提问

1. 在输入框粘贴、上传或引用 PNG、JPG、WEBP、GIF 图片。
2. 输入问题，例如“这张图是什么意思？”或“比较这两张图”。只附图也可发送。
3. Codex 原生识图无需额外开关；Pi 请选择支持视觉输入的模型。联网、MCP 和图片生成均不是识图的前提。
4. AGY 的流式接口只接收文本，需先在 **API 服务**配置视觉 API 地址、密钥和模型。LUMEN 解析后转交视觉证据，并显示来源；配置不完整或接口失败时会提示，不会忽略附件继续回答。

每次最多 4 张、单张 10MB、总计 20MB。可连续追问，重连时在同一限制内恢复最近附件；请保留附件原文件，删除或修改后需重新附加。不自动扫描当前笔记图片。聊天日志保存引用及内容指纹，不保存图片 base64。

### 升级

BRAT 使用 `leoyang1984/lumen-public`。手动安装时仅替换 `.obsidian/plugins/lumen/` 中的 `main.js`、`manifest.json`、`styles.css`，保留设置与历史，然后重载插件。CLI 能力需要桌面环境及已安装、配置并登录的相应程序；移动端继续使用 API。

## English

### Mermaid diagrams

Ask for separate fenced `mermaid` blocks. Chat displays Pele previews with source/copy controls, zoom, pan and reset. Choose **Settings → LUMEN → Advanced → Diagram theme**: Auto inherits the current Obsidian font and palette; Paper keeps its warm paper colors. Changes persist and update existing previews, without CSS snippets or changes to other diagrams. Unsupported syntax retains readable source. Standalone SVG export is not available yet.

### Codex model and reasoning

Use the header connection menu or connection settings to choose model and effort independently. The installed CLI supplies the catalog; refresh it manually when needed. Default follows effective CLI/model settings. Explicit choices are saved per model; effort-only changes retain the conversation. Controls lock during generation. Available efforts depend on the model, including low, medium, high, xhigh and max. Ultra remains disabled pending delegation support. Request details distinguish requested and confirmed values.

### Image questions

Paste, upload or reference pictures, then ask a question; image-only messages also work. Codex uses native input. Pi requires a vision-capable model. Image generation, web search and MCP are not required. AGY streaming only accepts text: configure the existing vision API under **API services** so LUMEN can pass attributed visual evidence to AGY. Configuration or service failures block the request with a specific message.

Send up to four PNG/JPG/WEBP/GIF files, 10MB each and 20MB total. Follow-ups retain context; reconnects replay recent attachments within those limits. Keep original files available; reattach missing or changed images. Active-note pictures are not scanned automatically. The journal keeps references and fingerprints, not base64.

### Upgrade

Use `leoyang1984/lumen-public` in BRAT. For manual updates replace only `main.js`, `manifest.json` and `styles.css` in `.obsidian/plugins/lumen/`, preserve settings and history, then reload. CLI connections require the installed, configured and authenticated desktop program; mobile continues using API services.
