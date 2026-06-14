---
type: 流程型
domain: 人工智能
anchor: 轮
rhyme: 轮上轮下记清楚
created: 2026-06-14
---

## 速记卡片
`轮 | 轮上轮下记清楚 | 窗口+摘要+分片`

## 原始知识
- Memory 组件管上下文
- ConversationBufferMemory 全存
- ConversationWindowMemory 限轮
- ConversationSummaryMemory 摘要
- VectorStoreRetrieverMemory 向量检索
- **易混点**：Window 是轮数限制，Summary 是内容压缩

## 顺口溜
轮来轮去记窗口

## 单字锚点 + 防崩推导
- **锚点字**：轮
- **扩展口诀**：轮上轮下记清楚，窗口摘要分片补
- **为什么选它**：多轮对话的核心就是"轮"次流转
- **防崩推导**：问多轮对话管理 → 想到"轮" → 轮次多了怎么办？→ 窗口限轮、摘要压缩、向量检索

## 一字一画面
**轮** —— 像**摩天轮转圈**：彩色座舱一圈圈升高，到顶自动清空旧乘客（本质：轮次流转，旧上下文要么丢弃要么压缩）

## 面试话术
多轮对话上下文主要靠 Memory 组件来管，常用的有 Buffer 全存、Window 限轮数、Summary 做摘要，还有向量检索做长期记忆。选型看对话长度和精度要求。

## 防混补丁
- Buffer vs Window：Buffer 存全部，Window 只存最近 K 轮
- Summary vs Vector：Summary 压缩成文本，Vector 按语义检索
- 不要和 Redis 缓存混淆，Memory 是逻辑层不是存储层

## 追问预演
Q：超长对话怎么办？
A：先用 SummaryMemory 压缩历史，再用 VectorStoreRetrieverMemory 做长期记忆检索。

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
