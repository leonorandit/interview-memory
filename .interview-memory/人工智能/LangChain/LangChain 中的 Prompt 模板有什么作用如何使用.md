---
type: 因果型/列举型
domain: 人工智能
anchor: 中
rhyme: 模板复用格式稳
created: 2026-06-14
---

## 速记卡片
`模 | 模板复用格式稳 | 结构化+可复用+动态填充`

## 原始知识
- **PromptTemplate**：字符串模板，变量插值
- **ChatPromptTemplate**：多角色消息列表
- **FewShotPromptTemplate**：示例驱动
- **作用**：标准化输入、减少重复、便于维护
- **使用方式**：template.format()或管道传参
- **输出解析**：配合OutputParser结构化
- **变量占位**：{input}、{context}等

## 顺口溜
模板复用格式稳

## 单字锚点 + 防崩推导
- **锚点字**：模
- **扩展口诀**：模板复用格式稳
- **为什么选它**："模"是"模板"的核心字，直接定位PromptTemplate题型
- **防崩推导**：模→模板→作用→标准化提示格式、复用、动态填充变量→怎么用→定义模板字符串→传入变量→format生成最终prompt→还有Chat版、FewShot版

## 一字一画面
**模** —— 像**做月饼的模具**：面团（变量）塞进去，压出来都是统一花型（标准化格式），中秋做一百个也不变形（复用），想换馅料随时换（动态填充）（本质：模板是提示词的生产线，保证输出结构一致、维护成本低）

## 面试话术
- "Prompt模板的核心作用是标准化和复用，把提示词里的动态内容抽成变量，避免每次手写prompt；LangChain里用PromptTemplate做字符串插值，ChatPromptTemplate处理多轮对话的角色消息。"
- "实际使用我会定义system template和user template，通过chain组合，配合OutputParser让LLM输出结构化数据，整个流程清晰可维护。"

## 防混补丁
- PromptTemplate是给文本模型用的，ChatPromptTemplate是给聊天模型用的，别混
- FewShotPromptTemplate的示例要选代表性强的，不是越多越好
- 模板变量名要和传入字典的key一致，大小写敏感

## 追问预演
- Q：PromptTemplate和f-string有什么区别？A：模板可以序列化保存、复用、组合，f-string只是语法糖
- Q：怎么保证输出格式稳定？A：模板里写清楚格式要求，配合OutputParser做后校验，不对就重试
- Q：多语言场景模板怎么处理？A：可以做多语言模板库，按用户语言路由，或让LLM翻译后填充

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
