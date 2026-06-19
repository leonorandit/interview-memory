---
type: 因果型
domain: 人工智能/大模型基础
anchor: 页
rhyme: 页分块，零碎片，批连续
created: 2026-06-19
---

# 什么是 vLLM PagedAttention 原理

## 速记卡片
`页 | 页分块，零碎片，批连续 | KV不浪费`

## 原始知识
- **vLLM**：UC Berkeley 开源的大模型**高吞吐推理引擎**，吞吐量比 HuggingFace 高 10~20 倍
- **PagedAttention**：vLLM 的核心，灵感来自 OS **虚拟内存分页**，解决 KV Cache 的内存浪费
- **传统痛点**：每个序列预分配最大长度连续显存，短序列造成**内部碎片**；不同长度序列交错造成**外部碎片**，显存利用率仅 20~40%
- **分页机制**：把 KV Cache 切成固定大小 **Block**（通常16 tokens），用 **Block Table** 非连续映射，**