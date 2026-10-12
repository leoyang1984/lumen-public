# Lumen 5.9.0 — 整书 AI 翻译与 EPUB 导出 / Book Translation & EPUB Export

## 中文

本版新增书籍全文与章节范围的 AI 翻译工作流，并支持将译稿打包导出为标准 EPUB 电子书。

- **整书与章节级 AI 翻译**：
  - 支持在阅读器中直接针对当前 EPUB 书籍创建翻译任务，可自定义勾选需要翻译的章节范围，支持自定义翻译风格与专属术语表（Glossary）。
  - 任务与段落草稿独立持久化存储，支持随时暂停、中断自动保留、一键断点续翻，彻底避免长书翻译重复消耗。
- **高鲁棒性容错与无人值守保障**：
  - **空章节智能跳过**：无文字内容的章节（如纯图片插画页、特殊版权页）自动标记为 `skipped` 并静默推进，杜绝整书翻译因空章节抛错中断。
  - **多段合批自动降级**：多段打包翻译若遇到超长段落、密集名言引用或模型格式异常时，自动拆解无缝降级为单段请求，配合同段退避重试，彻底解决长难段落卡住死锁。
  - **全结构宽容 JSON 解析**：三级容错提取器，全面兼容顶层数组、单数对象、缺失 ID 单段保护、未转义英文双引号正则自动修复以及纯 Markdown 正文兜底。
  - **精准异常反馈**：细化区分模型配额用量上限（Rate limit / Quota）、凭证过期（Auth required）、模型不可用等状态，不再泛化为通用错误。
- **EPUB 电子书导出（中文译稿 / 双语对照）**：
  - 支持将已翻译的书籍一键打包导出为标准 EPUB 3 电子书文件，支持“仅中文译稿”与“双语对照”两种排版模式。
  - 导出引擎智能清洗 Markdown 语法中紧贴感叹号的文献角标（如 `![5](...)`），杜绝伪图片资产误报；支持非关键图片缺失优雅降级为文字占位。
- **原有功能完全保留**：
  - 保留 5.8.10 的安静双栏阅读外观、排版调节、专注模式与跨章连续翻页。
  - 保留 API／Codex／pi 实时对话、人工笔记检索、确认保存、引用溯源及白板工作流。

### 安装与升级

BRAT 仓库：`leoyang1984/lumen-public`。已有用户在 BRAT 中检查更新即可。

手动安装只下载本页的 `main.js`、`manifest.json`、`styles.css`，放入笔记库的 `.obsidian/plugins/lumen/`。升级先备份，只替换这三个文件，保留 `data.json`、历史和阅读数据，再重载插件或重新打开 Obsidian。GitHub 自动生成的 Source code 压缩包不是插件安装包。

阅读可离线使用。AI 翻译与对话需要已配置的 API，或已安装、配置并登录的 Codex CLI／pi；无需一直打开终端或 CLI 界面。前序验证版本为 macOS / Obsidian 1.14.4、Codex CLI 0.160.1、pi 1.1.0，并非强制锁定版本。

### 验证范围

本轮通过完整 TypeScript 类型检查与生产混淆构建。整书翻译引擎在 11.6 万词长篇专著（*How We Learn*）中完成了全书 29 个章节的实战长文本连续翻译验收，空章节跳过、长难句单段降级与整书 EPUB 导出功能已实测通过。

## English

This release introduces whole-book and chapter-range AI translation workflows, along with standard EPUB publication export.

- **Full-Book and Chapter-Level AI Translation**:
  - Create translation tasks directly for the active EPUB book in the reader, with selectable chapter ranges, customizable translation styles, and custom glossaries.
  - Independent task state and chapter draft persistence, supporting pause at any time, automatic state retention, and resume from breakpoint.
- **Robust Fault Tolerance & Continuous Execution**:
  - **Automatic Empty Chapter Skip**: Non-text chapters (such as image-only plates and copyright pages) are automatically marked as `skipped`, preventing translation halts.
  - **Batch-to-Single-Unit Fallback**: Multi-paragraph batch translation automatically degrades to single-unit requests upon encountering extra-long passages or formatting anomalies, with exponential backoff retries.
  - **Resilient JSON Parser**: Multi-tier extraction supporting top-level arrays, singular objects, single-unit ID fault tolerance, automatic unescaped quote repair, and plain Markdown fallback.
  - **Explicit Error Diagnostics**: Distinct error messages for quota limits (Rate limit / Quota), authentication expiry, and unavailable models instead of generic error messages.
- **EPUB Publication Export (Translated / Bilingual)**:
  - Export completed translations into standard EPUB 3 files with "Chinese Translation Only" and "Bilingual Aligned" layouts.
  - Smart sanitization of citation links attached to exclamation marks (`![5](...)`) to eliminate false image asset errors, with graceful text fallbacks for missing assets.
- **Full Retention of Core Capabilities**:
  - Retains quiet dual-column reading, typography adjustments, focus mode, and continuous cross-chapter paging from 5.8.10.
  - Retains API/Codex/pi companion chat, note retrieval, confirmed saves, citation jumps, and Canvas workflows.

### Install and upgrade

Use `leoyang1984/lumen-public` in BRAT and check for updates. Manual installation needs only `main.js`, `manifest.json` and `styles.css` in `.obsidian/plugins/lumen/`. Back up and replace only these three files; retain settings, chat history and reading data, then reload Lumen or reopen Obsidian. GitHub-generated Source code archives are not plugin installation packages.

Reading works offline. AI translation and companion chat require a configured API or installed/configured/signed-in Codex CLI/pi; no foreground CLI window is needed. Earlier verification used macOS/Obsidian 1.14.4, Codex CLI 0.160.1 and pi 1.1.0.

### Verification scope

TypeScript type checking and production minification passed. The full-book translation engine was verified through an end-to-end continuous translation of an 116,000-word book (*How We Learn* across 29 chapters), confirming empty chapter skipping, single-unit fallback, and successful EPUB export.
