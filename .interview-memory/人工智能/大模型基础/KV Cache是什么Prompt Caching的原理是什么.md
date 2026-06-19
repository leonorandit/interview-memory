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
- **存** —— 像**记账本**：每次聊天把说过的话记下来，下次不用再重新想。（KV Cache：存历史 K/V，避免重复计算）
- **前** —— 像**剧本序幕**：每部戏开头都一样，把序幕录像存好，不用每场重新演。（Prompt Caching：prefix 固定，预计算缓存）
- **算** —— 像**抄作业**：同桌已经算好的题，直接抄答案，不用再算一遍。（复用缓存，省去重复 Attention 计算）
- **省** —— 像**月票**：买一次管一个月，不用每次上车都买票。（prefix 越长，均摊成本越低，省 50%-90% 计算）

## 面试话术
- 问 KV Cache → "KV Cache 是推理加速的核心。自回归生成时，每步只出新 token，但 Attention 要看到之前所有 token。如果不缓存，每步都要重算前面所有 K/V，复杂度 O(N²)。KV Cache 把历史 K/V 存下来，下一步只算新 token 的 K/V 再拼接，复杂度降到 O(N)。代价是显存随序列长度线性增长。"
- 问 Prompt Caching → "Prompt Caching 是 KV Cache 的进阶。很多场景 prefix（system prompt、长文档）是固定的，Prompt Caching 把 prefix 的 KV 预先算好存起来，后续请求直接复用，只计算新加入的 token。prefix 越长省得越多，能省 50%-90% 的计算。"

## 防混补丁
- 容易把 Prompt Caching 当成模型结构修改。补丁：**Prompt Caching 是系统缓存策略，不改模型**。
- 容易以为 KV Cache 只存 K 不存 V。补丁：**K 和 V 都存**，所以显存占用是 2 倍。

## 追问预演
1. **KV Cache 显存占用怎么算？**
   → batch_size × seq_len × hidden_dim × num_layers × 2(K+V) × sizeof(dtype)。FP16 下 13B 模型 4K 序列约 2-4GB。
2. **Prompt Caching 和 KV Cache 什么关系？**
   → Prompt Caching 是 KV Cache 在 prefix 级别的复用，是系统层优化，让固定前缀不用重复计算。
3. **哪些框架支持 Prompt Caching？**
   → vLLM（Prefix Caching）、OpenAI API、SGLang（RadixAttention 自动管理）。
4. **为什么 Prompt Caching 能省这么多？**
   → 长文档或 system prompt 往往占 token 数的 80% 以上，这部分从 O(N²) 降到 O(1) 复用。

## 关联知识点
- [ ] 多头注意力MHA局限与优化（链接到对应md文件）
- [ ] 大模型部署方案选型
- [ ] vLLM PagedAttention原理
- [ ] SGLang RadixAttention

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
