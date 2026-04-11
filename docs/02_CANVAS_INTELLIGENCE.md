[English Version Below](#english-version) | [中文版往下看](#中文版)

---

## English Version {#english-version}

# 02 Canvas Intelligence: Visual Recipes & Protocol Tags

LUMEN transforms your Obsidian Canvas into a visual "Agentic Brain." By using simple tags and arrows, you can build logic flows without writing a single line of code.

### 🎯 Variable Magic: The "Recipe" for Data Flow
You don't need to understand the underlying logic—just remember these simple "Ingredient" mappings to pass data between cards.

#### 1. Common Input (Generic Data)
- **Label**: Add ` #lumen/input ` (wrapped in backticks) to the top of a card.
- **Reference**: In your AI instruction card, type `{{input}}`.
- **Result**: AI will grasp the content of that specific input card.

#### 2. Numbered Inputs (Specific Data)
- **Label**: Add ` #lumen/input/1 `, ` #lumen/input/2 `, etc.
- **Reference**: Type `{{input1}}` or `{{input2}}`.
- **Scenario**: Use this when you have multiple sources feeding into one AI step.

#### 3. Step-to-Step Passing (Chain Logic)
- **Label**: Add ` #lumen/step/1 ` to an AI processing node.
- **Reference**: In the next node, type `Based on {{step1}}, please write...`.
- **Result**: This allows one AI response to be the context for the next AI action.

#### 4. File Node Reference (Auto-Sense)
- **How-to**: Drag a Markdown note from your vault directly onto the Canvas.
- **Recipe**: No tag needed! Simply draw an arrow from the note to your AI card and use `{{input}}`.
- **Result**: LUMEN automatically senses the file type and reads the entire content into the prompt.

---

### 🎨 Tag Encyclopedia: What to use and when?

| Tag | Usage | Variable Match |
| :--- | :--- | :--- |
| ` #lumen/start ` | Renders the "Run Flow" button. | N/A |
| ` #lumen/input/n ` | Marks a node as a source. | `{{inputn}}` |
| ` #lumen/step/n ` | Marks a node as a process. | `{{stepn}}` |
| ` #lumen/output ` | Replaces this node with the AI result. | N/A |

#### Category B: Action Hubs (Interactive Operators)
Adding these tags to a node (recommended with backticks) will immediately render an interactive UI panel.
- **` #lumen/image `**: Triggers the **Image Lab**. Connect an image for Img2Img or type a prompt for T2I.
- **` #lumen/video `**: Triggers the **Video Lab**. Supports professional camera controls (Wan2.1 / Luma).
- **` #lumen/audio `**: Triggers **TTS (Text-to-Speech)**. Converts the node's text to an `.mp3` file.
- **` #lumen/vision `**: Triggers **Visual Reverse Engineering**. Analyzes a connected image and outputs structured prompts.
- **`to_canvas_edge` (Action)**: Used in Skills to let AI automatically draw logical connections.

---

### 🚀 Pro Tip: Tag Stripping
When LUMEN sends your instructions to the AI, it automatically **removes** all lines starting with `#lumen/`.
- **Benefit**: Your AI won't see the "tags"—it only sees your clean instructions. You can safely put your tags at the very first line of any node.

<br>
<br>

---

## 中文版 {#中文版}

# 02 Canvas 视觉智能：协议变量与视觉算子

LUMEN 将您的 Obsidian Canvas（白板）转化为一个可视化的“代理大脑”。通过简单的标签和连线，您无需编写任何代码即可构建复杂的 AI 逻辑流。

### 🎯 变量魔法：数据流动的“快捷食谱”
您无需理解底层的运行逻辑，只需记住以下简单的“配料”映射规则，即可在卡片间传递数据。

#### 1. 通用输入 (Generic Data)
- **打标**：在卡片开头输入反引号包裹的标签，例如 ` #lumen/input `。
- **引用**：在执行任务的 AI 卡片中输入 `{{input}}`。
- **效果**：AI 会自动抓取该输入卡片的内容作为背景。

#### 2. 编号输入 (Numbered Inputs)
- **打标**：输入 `#lumen/input/1`, `#lumen/input/2` 等。
- **引用**：输入 `{{input1}}` 或 `{{input2}}`。
- **场景**：当您有多个数据源（例如一份“风格指南”和一份“初稿”）同时汇聚到一个 AI 步骤时，使用编号进行精准区分。

#### 3. 步骤间传递 (Chain Logic)
- **打标**：在 AI 处理节点开头输入 ` #lumen/step/1 `。
- **引用**：在下一步的卡片中输入 `根据 {{step1}} 的结论，请写出...`。
- **效果**：实现“环环相扣”的流水线，让上一步的输出成为下一步的输入。

#### 4. 笔记引用 (自动感应)
- **操作**：直接从库中将 Markdown 笔记拖入白板。
- **食谱**：无需打标！只需拉一条箭头指向 AI 卡片，并在指令中使用 `{{input}}`。
- **效果**：LUMEN 会自动感应文件类型并抓取其全文内容。

---

### 🎨 标签全科：何时使用什么标签？

#### 控制类标签 (逻辑锚点)
| 标签 | 用途 | 对应变量 |
| :--- | :--- | :--- |
| ` #lumen/start ` | 渲染“运行工作流”紫色按钮。 | 无 |
| ` #lumen/input/n ` | 将节点标记为特定数据源。 | `{{inputn}}` |
| ` #lumen/step/n ` | 将节点标记为 AI 处理步骤。 | `{{stepn}}` |
| ` #lumen/output ` | AI 的回答会直接覆盖此节点。 | 无 |

#### 算子类协议 (交互式 AI 算子)
在白板节点中添加带有反引号的标签会立即渲染出一个交互式算子 UI。
- **` #lumen/image `**：**图像算子**。支持文生图或通过连线实现图生图。
- **` #lumen/video `**：**视频算子**。支持万 2.1 或 Luma 的专业运镜生成。
- **` #lumen/audio `**：**语音算子** (TTS)。将文字节点一键转为 `.mp3` 本地文件。
- **` #lumen/vision `**：**视觉反向算子** (I2P)。分析连入的图片并产出结构化提示词。
- **` #lumen/research `**：**科研算子** (AutoResearch)。驱动浏览器进行全网调研。
- **`to_canvas_edge` (逻辑算子)**：通常用于轻技能中，允许 AI 分析多个选中节点并自动建立逻辑连线。

---

### 🚀 进阶技巧：标签自动剔除
当 LUMEN 将指令发送给 AI 时，会自动**删除**所有以 `#lumen/` 开头的行。
- **好处**：AI 不会看到这些“协议标签”，只会看到干净的指令内容。您可以放心地将标签写在任何节点的首行。
