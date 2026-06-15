---
type: 因果型
domain: 人工智能
anchor: 达
rhyme: 管道串联表意清
created: 2026-06-14
---

## 速记卡片
`表 | 管道串联表意清 | 流式异步类型明`

## 原始知识
- LCEL = LangChain Expression Language
- 用 `|` 管道符串联组件
- 优势：流式输出、异步原生、类型安全、可观察
- `Runnable` 接口统一：LLM、Prompt、Parser 都是 Runnable
- **加粗易混点**：LCEL 不是新语言，是 Python 对象重载运算符

## 顺口溜
管道串联表意清

## 单字锚点 + 防崩推导
- **锚点字**：表
- **扩展口诀**：表达式里管道连，声明式写逻辑链
- **为什么选它**："表" = 表达式 = 声明式表达，且与"链"区分
- **防崩推导**：LCEL = Expression Language → 表达式 → 表

## 一字一画面
**表** —— 像 **[绿色水管接头]**：[5秒画面] 绿色 PVC 水管一节接一节，水流（数据）从 Prompt 管流入 LLM 管，再流入 Parser 管，中途透明段能看到流式水花（本质：LCEL 用管道语法把异步、流式、类型检查内建于组合逻辑中）

## 面试话术
LCEL 是 LangChain 的表达式语言，简单说就是用 Python 的管道符 `|` 把 Prompt、LLM、Parser 这些组件像搭乐高一样串起来。它的好处特别实在：原生支持流式输出、异步调用、类型推断，而且每个中间步骤都能自动接入回调观察，代码量比传统 Chain 少一半。

## 防混补丁
- LCEL 不是字符串 DSL，是 Python 对象重载 `__or__`
- `RunnableLambda` 可把任意函数包成 Runnable 接入管道
- 调试时加 `.with_config(callbacks=...)` 而不是改内部逻辑

## 追问预演
- Q：LCEL 的 `|` 和 Unix 管道有什么区别？A：语义类似，但支持异步 yield、类型传递和回调冒泡
- Q：怎么在 LCEL 里加条件分支？A：用 `RunnableBranch` 或 `.bind()` 配合 router

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
