---
type: 列举型
domain: 人工智能
anchor: 链
rhyme: 链串组件顺序连
created: 2026-06-14
---

## 速记卡片
`链 | 链串组件顺序连 | 预组装流程省 token`

## 原始知识
- Chain = 组件按序执行的预组装流程
- `LLMChain`：Prompt + LLM + OutputParser
- `SequentialChain`：多链串行或并行
- `RouterChain`：动态路由选择子链
- `TransformChain`：自定义转换函数
- **加粗易混点**：Chain 是静态编排，Agent 是动态决策

## 顺口溜
链串组件顺序连

## 单字锚点 + 防崩推导
- **锚点字**：链
- **扩展口诀**：一环扣一环，输入输出穿成链
- **为什么选它**：Chain 直译就是链，最不会忘
- **防崩推导**：Chain = 链条 → 一环接一环 → 链

## 一字一画面
**链** —— 像 **[银色自行车链]**：[5秒画面] 银色链节一环咬一环，Pedal 踩下带动后轮，中途可变速（Router）可拆接（Transform）（本质：Chain 是把 LLM 调用、Prompt 模板、数据转换固化为可复用流程）

## 面试话术
Chain 是 LangChain 里对多个组件进行顺序编排的抽象，你可以把它理解成一条流水线：输入先进 Prompt 模板，再进 LLM，最后过 OutputParser。常见类型有 LLMChain、SequentialChain、RouterChain、TransformChain，分别对应简单调用、多步串联、条件路由和自定义转换。

## 防混补丁
- Chain 适合流程固定场景，Agent 适合工具选择不确定场景
- `SequentialChain` 要注意输入输出 key 对齐
- LCEL 出现后，传统 Chain 类逐渐被 `|` 管道语法替代

## 追问预演
- Q：Chain 和 LCEL 的区别？A：Chain 是面向对象封装，LCEL 是声明式管道，更灵活
- Q：RouterChain 怎么决定走哪条？A：靠 LLM 根据输入描述做选择题

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
