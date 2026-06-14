---
type: 对比型
domain: 人工智能
anchor: 合
rhyme: 索链合，分工明
created: 2025-06-13
---

# LlamaIndex 如何与 LangChain 结合

## 速记卡片
`合 | 索链合，分工明 | 框架结合`

## 原始知识
- LlamaIndex：专注数据索引和检索的框架（数据层）
- LangChain：专注LLM编排和链式调用（应用层）
- 结合方式：
  - LlamaIndex负责**索**（索引构建、检索召回）
  - LangChain负责**链**（Chain编排、Agent决策、工具调用）
  - 两者**合**作，**分工**明确
- 集成点：LlamaIndex的Retriever可以作为LangChain的Tool/Retriever使用
- **易混点**：LlamaIndex vs LangChain
- **追问点**：什么时候用哪个？怎么集成？

## 顺口溜
**索链合，分工明**

## 单字锚点 + 防崩推导
- **锚点字**：**合**
- **扩展口诀**：**索链合，分工明**
- **为什么选它**：面试题问"如何结合"，"合"是核心动作。
- **防崩推导**：
  - 合（结合）→ 两个框架结合使用
  - 索（LlamaIndex）→ 负责索引和检索
  - 链（LangChain）→ 负责链式编排
  - 分工 → LlamaIndex管数据，LangChain管应用
  - 明 → 职责分明

## 一字一画面
- **索** —— 像**图书馆管理员**：专门负责找书。（本质：LlamaIndex检索）
- **链** —— 像**项目经理**：安排谁做什么、什么时候做。（本质：LangChain编排）
- **合** —— 像**搭档合作**：一个找资料，一个写报告。（本质：框架结合）
- **分工** —— 像**厨房分工**：切菜的切菜，炒菜的炒菜。（本质：职责分离）

## 面试话术
- 问怎么结合 → "LlamaIndex和LangChain的结合口诀是**索链合，分工明**。**索**——LlamaIndex专注索引构建和检索召回；**链**——LangChain专注LLM编排和链式调用；**合**——两者结合使用；**分工明**——LlamaIndex管数据层，LangChain管应用层。具体集成时，可以把LlamaIndex的Retriever作为LangChain的Tool或Retriever接入Chain/Agent中。"

## 防混补丁
- 容易和"二选一"搞混。不是竞争关系，是互补。补丁：**不是打架，是搭伙**。"

## 关联知识点
- [ ] [什么是LangChain](什么是LangChain.md)
- [ ] [RAG的完整流程](RAG的主要流程.md)

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
