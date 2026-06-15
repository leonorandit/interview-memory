---
type: 列举型/因果型
domain: 人工智能
anchor: 作
rhyme: 解格式，抓结构
created: 2026-06-14
---

# LangChain 的 OutputParser 有什么作用？有哪些常见类型？

## 速记卡片
`解 | 解格式，抓结构 | 输出解析`

## 原始知识
- 作用：把 LLM 文本输出解析成结构化数据
- 常见类型：PydanticOutputParser、StructuredOutputParser、CommaSeparatedListOutputParser、JsonOutputParser
- 失败处理：输出格式不对时抛异常或重试
- **加粗易混点**：不是模型本身输出结构化，是后处理解析
- **追问点**：解析失败怎么办？

## 顺口溜
解格式，抓结构

## 单字锚点 + 防崩推导
- **锚点字**：**解**
- **扩展口诀**：**解结构**
- **为什么选它**："解"是解析的核心动作，OutputParser 的本质就是解析器
- **防崩推导**：
  - 解 → 解析 → 从非结构化文本
  - 解 → 提取结构化数据 → JSON / 列表 / 对象
  - 解 → 程序可用

## 一字一画面
**解** —— 像 **海关安检仪**：行李箱（LLM 文本输出）通过 X 光机，液体、电池、衣物被自动分类识别（结构化字段），违禁品报警（解析失败抛异常）。（本质：非结构化 → 结构化的转换闸口）

## 面试话术
- "OutputParser 的作用用口诀概括就是**解格式，抓结构**。LLM 输出的是自然语言文本，但程序需要 JSON 或对象来消费。OutputParser 负责把文本解析成结构化数据，常见的有 Pydantic 解析器、JSON 解析器、列表解析器，解析失败还会自动重试或报错。"

## 防混补丁
- 容易和"Function Calling"搞混。Parser 是文本后处理，Function Calling 是模型原生调用外部函数。补丁：**Parser 是翻译官，Function Calling 是外交官**。

## 追问预演
- **Q: 模型输出格式不稳定怎么办？** A: 用 few-shot 示范格式、降低 temperature、或换原生支持 JSON mode 的模型。
- **Q: 自定义 Parser 怎么写？** A: 继承 BaseOutputParser，实现 parse 方法，可选 get_format_instructions。

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
