# 图表图片导出 / Diagram image export

## 中文

让助手输出独立 `mermaid` 代码块。成功渲染后，Pele 图表工具栏提供：

- **复制图片（PNG）**：复制完整图表，可粘贴到接受图片的应用。需要宿主支持并允许图片剪贴板；不可用时可保存到笔记。
- **保存到笔记**：先打开目标 Markdown。编辑模式在点击时的光标处插入图片引用；阅读模式追加到末尾。使用 Obsidian 附件位置，唯一命名，不覆盖已有文件。需要 Obsidian 1.5.7+ 的附件接口，旧版本会提示升级。
- **导出 SVG**：下载带当前颜色、背景和字体声明的独立矢量文件。其他设备若缺少字体会使用替代字体；不打包用户字体或加载远程字体。

导出保留完整图表和点击时的 Auto/Paper 主题，不受当前缩放和平移裁切，不改变正在查看的视图。PNG 默认按 2 倍生成，大图降低倍率以限制到最长 8192 像素、总计 16M 像素，PNG 不超过 20MiB。未完成、错误或过期图表不提供旧图导出。

生成期间切换笔记、移动光标、改变笔记内容或关闭组件会阻止过期插入。若附件已经保存但插入失败，会保留附件并显示路径，不删除用户内容。移动端剪贴板和下载取决于宿主能力，未做真机验收。

Auto/Paper 主题仍在 **设置 → LUMEN → 高级 → 图表主题** 中选择；Auto 跟随宿主字体和配色，Paper 使用暖白纸张风格。原 Mermaid/Markdown 复制与源码切换继续保留。

## English

Ask the assistant for a standalone `mermaid` fence. Once rendered, the Pele toolbar offers:

- **Copy image (PNG)**: copy the full diagram to an application accepting PNG. Requires a supported, permitted image clipboard; use Save to note if unavailable.
- **Save to note**: open a Markdown note first. Source mode inserts at the captured cursor; reading mode appends. It follows Obsidian attachment settings, uses unique names and never overwrites an existing file. Requires Obsidian 1.5.7+ attachment APIs; older hosts show an upgrade prompt.
- **Export SVG**: download a standalone vector with current colors, background and font declarations. Missing fonts use device fallbacks; user font files are not bundled and no remote fonts are loaded.

Exports preserve the full diagram and current Auto/Paper palette independently of zoom/pan without resetting the view. PNG starts at 2× and reduces scale for large diagrams: at most 8192 pixels per edge, 16M total pixels and 20MiB. Incomplete, invalid or stale diagrams cannot export an old result.

Switching notes, moving the cursor, editing the note or closing the component invalidates insertion. If saving the attachment succeeds but insertion fails, LUMEN keeps it and reports its path. Physical mobile clipboard/download behavior remains unverified. Existing source and Mermaid/Markdown copy controls remain available; choose themes under **Settings → LUMEN → Advanced → Diagram theme**.
