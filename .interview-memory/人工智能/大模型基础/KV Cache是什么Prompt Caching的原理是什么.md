---
type: 因果型
domain: 人工智能/大模型基础
anchor: 存
rhyme: 存前算，省复算
created: 2026-06-18
---

# KV Cache 是什么 Prompt Caching 的原理是什么

## 速记卡片
`存 | 存前算，省复算 | 显存换计算`

## 原始知识
- **KV Cache**：推理时缓存历史 token 的 K/V 矩阵，避免自回归生成中重复计算
- **不加 Cache**：每步重新算所有 token 的 Attention，O(N²) 复杂度，浪费巨大
- **加了 Cache**：只算新 token 的 K/V，和历史缓存拼接，复杂度降到 O(N)
- **代价**：显存随 batch × seq_len × hidden_dim × layers × 2 线性增长
- **Prompt Caching**：prefix（system prompt / 文档）固定时，预先计算并缓存 prefix 的 KV Cache
- **效果**：后续请求直接复用 prefix KV，只算新增部分，可省 50%-90% 计算
- **易混点**：Prompt Caching 是系统层优化，不是模型结构修改
- **追问点**：KV Cache 随什么增长？哪些框架支持 Prompt Caching？

## 顺口溜
**存前算，省复算**

## 单字锚点 + 防崩推导
- **锚点字**：**存**
- **扩展口诀**：**存前算**
- **为什么选它**：一切优化从"存"开始——先存历史 K/V，再存前缀 K/V，才能省去重复计算。
- **防崩推导**：
  - 存 → KV Cache → 存历史 token 的 K/V → 下一步只算新 token
  - 前 → Prompt Caching → 存固定 prefix 的 K/V → 后续请求复用
  - 算 → 省去重复 Attention 计算 → 显存换计算
  - 省 → prefix 越长，均摊越省，省 50%-90%

## 一字一画面
- **存** —— 像