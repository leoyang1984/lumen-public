# Lumen Pro - Changelog

[English Version Below](#english-version) | [中文版往下看](#中文版)

---

## English Version

- **v3.5.8 (2026-04-11)**: **Pro Version Milestone** — Official rebranding to "Lumen Pro" with enhanced activation stability and performance optimizations.
- **v3.1.5 (2026-04-01)**: **Batch Distribution & Dot-Notation** — Upgraded the Pipeline engine to support multi-topic "Broadcasting" (e.g., create files for each stock in a list) and precise field extraction via `{{StepID.FieldName}}` (supports Chinese). Added `overwrite: true` for file creation.
- **v3.1.3 (2026-04-01)**: **Smart Context & Reading Mode** — Introduced universal context sensing. The plugin now automatically extracts current lines or paragraphs even if no text is selected. In Reading Mode, it defaults to capturing the entire document, enabling "one-click" full-note analysis/summarization via Command Palette.
- **v3.1.2 (2026-04-01)**: **Pipeline Visibility & UI Refinement** — Introduced real-time word counts and continuation tracking. Added automatic completion reports with AI summaries. **UI Enhancement**: Implemented auto-expanding height and vertical resizing for the Pipeline approval textarea to support long-form editing. Fixed a path parsing bug for quoted strings.
- **v3.1.0 (2026-04-01)**: **Pipeline Auto-Continue** — Introduced an industrial-grade continuation mechanism. The engine now automatically detects truncated responses (`finish_reason: length`) and requests further content until the document is complete, effectively bypassing single-output token limits.
- **v3.0.7 (2026-04-01)**: **Multi-File Dispatcher** — Introduced `create_notes` action for Pipeline steps, allowing the creation of multiple markdown files in a single step via YAML configuration.
- **v3.0.6 (2026-04-01)**: **Industrial Token Expansion** — Increased default `max_tokens` from 4000 to 8192. Removed hardcoded restrictions in samples to support massive document generation.
- **v3.0.5 (2026-04-01)**: **Deep Token Precision** — Fixed a critical parser bug where `max_tokens` lines were not being stripped from the AI prompt. Enhanced `llmService` to support user-defined `max_tokens` in streaming requests.
- **v3.0.4 (2026-04-01)**: **Pure Data Pipelines** — Introduced `instruction:` field for `ask_user` steps to separate guidance from editable content, preventing prompt pollution. Added `white-space: pre-wrap` and `\n` support for multi-line instructions.
- **v3.0.3 (2026-04-01)**: **Pipeline Stepper UI** — Introduced a customized, real-time vertical step list in the sidebar. Features include "running" animation, "ask_user" blinking alerts, 2s auto-fade on success, and persistent "error" state for debugging.
- **v3.0.2 (2026-04-01)**: **Bilingual UX Refinement** — Standardized all settings and UI labels to a professional `[中文] [English]` bilingual format. Renamed Light Skills to **“轻技能”** for better brand recognition.
- **v3.0.1 (2026-03-31)**: **Multimodal Video & Visual Prompt** — Integrated **MiniMax (Hailuo)** video generation with support for 15+ camera movement instructions. Released **Visual Prompt Extraction** (`#lumen/image2prompt`) for analyzing reference images.
- **v3.0.0 (2026-03-31)**: **The Multimodal Milestone (Alpha)** — Introduced **Canvas Video Generation** (Experimental Alpha) via SiliconFlow Wan2.1.
- **v2.9.12 (2026-03-31)**: **Precision Pipelines & Smart RAG** — Introduced `max_tokens` support across all Light Skill steps. Fixed `create_note` variable resolution. Integrated Web Clipper with Memory Index for automatic post-clip annotation.
- **v2.9.10 (2026-03-31)**: **Memory Index (RAG) Complete** — Introduced a full-scale local semantic search engine. Features include single-note indexing with custom annotations, recursive folder batch indexing, automatic frontmatter tagging (`memory-indexed`), and a "Summoning" mechanic for the Canvas to visually connect distant ideas via vector similarity.

---

## 中文版

- **v3.5.8 (2026-04-11)**: **Pro 版本里程碑** — 品牌正式升级为 "Lumen Pro"，增强了激活稳定性并优化了核心引擎性能。
- **v3.3.2 (2026-04-03)**：**Pipeline 自动续写结构优化 (大纲锚点)**。引入了预生成大纲机制。在执行长文本生成前，引擎会自动构建任务大纲作为结构锚点，并在续写请求中通过“原始任务 + 完整大纲 + 500字上下文”的组合提示词，彻底解决了长篇创作逻辑中断与内容重复的问题。
- **v3.1.7 (2026-04-01)**：**Batch Distribution 算法优化 (齐位对齐)**。修复了占位符乘积导致的指数级文件创建 Bug（笛卡尔积问题）。引入了并行对齐（Zip-Aligned）逻辑，确保 $N$ 个提取项仅生成 $N$ 个文件，大幅提升性能与逻辑正确性。
- **v3.1.6 (2026-04-01)**：**Batch Distribution 作用域隔离**。修复了点号变量 (`{{StepID.Field}}`) 在批量分发循环中的串扰问题。
- **v3.1.5 (2026-04-01)**：**结构化全量提取支持**。Pipeline 引擎正式支持点号变量精细化提取（Dot-Notation），并引入 `matchAll` 全局扫描模式。不论 AI 输出多少次字段标签，均能完整捕获并合并，为自动化 Pipeline 提供强力数据支撑。
- **v3.1.4 (2026-04-01)**：内部稳定性修复与代码优化。
- **v3.1.2 (2026-04-01)**：**Pipeline 显化系统与 UI 体验优化**。Stepper 状态栏新增实时字数与续写显化；任务完成后自动下发交付报告。**UI 增强**：为 Pipeline 审批框引入了高度自适应与垂直手动拉伸功能。修复了步骤配置中路径引号引起的解析 Bug 以及 AI 摘要中的逻辑幻觉。
- **v3.1.0 (2026-04-01)**：**Pipeline 自动分段续写**。引入了工业级续写机制。执行引擎现在能自动识别截断信号 (`finish_reason: length`) 并发起追问补全，彻底打破了大模型单次输出字符限制，支持生成万字级超长分析报告。
- **v3.0.7 (2026-04-01)**：**多文件分发引擎**。引入 `create_notes` 动作，支持在单个步骤内通过 YAML 配置批量创建多个 Markdown 笔记，极大提升了 Pipeline 的产出原子化水平。
- **v3.0.6 (2026-04-01)**：**工业级 Token 扩容**。将默认生成上限从 4000 提升至 **8192**，彻底解决了长篇调研报告截断的问题，并优化了底层参数传导机制。
- **v3.0.5 (2026-04-01)**：**深度 Token 精准控制**。修复了解析器未剔除 `max_tokens` 指令导致的提示词污染 Bug；增强了 `llmService` 使其在流式请求中也能准确识别并透传用户定义的生成上限。
- **v3.0.4 (2026-04-01)**：**纯净数据管道**。为 `ask_user` 引入 `instruction:` 字段，将说明语与编辑内容解耦，彻底解决提示词污染问题。支持 `\n` 转义与多行说明显示。
- **v3.0.3 (2026-04-01)**：**Pipeline Stepper 可视化**。在侧边栏引入垂直步骤列表，支持成功 2 秒自动淡出、失败永久驻留，显著提升执行过程的透明度。
- **v3.0.2 (2026-04-01)**：**双语 UI 规范化**。将所有设置项名称与说明统一为中英双语格式。正式将 Light Skill 固化为 **“轻技能”** 品牌名。
- **v3.0.1 (2026-03-31)**：**多模态视频与视觉提示词**。接入了 MiniMax (海螺) 视频生成，支持 15 种专业运镜指令。上线了 **“视觉提示词提取 (I2P)”** 功能 (`#lumen/image2prompt`)。
- **v3.0.0 (2026-03-31)**：**多模态里程碑 (Alpha)**。引入了基于 SiliconFlow Wan2.1 的 **Canvas 视频生成**（实验性 Alpha 版本）。
- **v2.9.12 (2026-03-31)**：**流水线精确控制与智能 RAG**。为 Light Skill 所有步骤引入了 `max_tokens` 支持，防止上下文溢出；修复了 `create_note` 路径变量解析，支持动态归档；实现了网页剪藏与记忆库自动联动，保存后自动触发备注；新增入库二次确认弹窗，确保索引精度。
- **v2.9.10 (2026-03-31)**：**记忆索引 (RAG) 完整实现**。引入了全套本地搜索引擎。
