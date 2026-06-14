---
type: 列举型
domain: 人工智能
anchor: 忆
rhyme: 窗口缓冲向量忆
created: 2026-06-14
---

## 速记卡片
`忆 | 窗口缓冲向量忆 | 有来有回才不丢`

## 原始知识
- 作用：多轮对话存上下文
- `ConversationBufferMemory`：全量存
- `ConversationBufferWindowMemory`：只存最近 k 轮
- `ConversationSummaryMemory`：摘要压缩历史
- `VectorStoreRetrieverMemory`：向量检索相关历史
- **加粗易混点**：Memory 存在链外，不占用 LLM 上下文长度

## 顺口溜
窗口缓冲向量忆

## 单字锚点 + 防崩推导
- **锚点字**：忆
- **扩展口诀**：忆往昔靠窗口，摘要向量省空间
- **为什么选它**："忆" = Memory = 记忆，直指主题
- **防崩推导**：Memory = 记忆 → 回忆 → 忆

## 一字一画面
**忆** —— 像 **[蓝色相册]**：[5秒画面] 蓝色相册翻页，全页是 Buffer，最近三页是 Window，边角便利贴是 Summary，检索标签是 Vector（本质：Memory 就是给 LLM 准备的历史对话输入）

## 面试话术
Memory 组件解决的是多轮对话里上下文丢失的问题，它负责把历史消息按照不同策略注入到新的 Prompt 里。常见类型有四种：全量 Buffer、窗口 Window、摘要 Summary、向量检索 Vector，选型就看对话长短和 token 预算。

## 防混补丁
- `Buffer` 最准但费 token，`Summary` 省 token 但可能丢细节
- Memory 本身不自动持久化，重启进程数据丢
- `VectorStoreRetrieverMemory` 不是按时间序，是按语义相关度召回

## 追问预演
- Q：Memory 和 Prompt 里的 history 有什么区别？A：Memory 是抽象层，可自动管理；history 是硬编码
- Q：长对话怎么省 token？A：Summary + Window 组合，或走向量检索过滤

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
