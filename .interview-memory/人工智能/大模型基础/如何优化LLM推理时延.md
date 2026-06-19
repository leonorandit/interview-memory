---
type: 列举型
domain: 人工智能/大模型基础
anchor: 批
rhyme: 量批存，快投机
created: 2026-06-19
---

# 如何优化 LLM 推理时延

## 速记卡片
`批 | 量批存，快投机 | 推理六板斧`

## 原始知识
- **量**：量化（INT8/INT4/AWQ/GPTQ），降低权重精度，减少显存占用和计算量
- **批**：动态批处理（Continuous Batching / Inflight Batching），vLLM 等框架实现 token 级调度，提升吞吐降低平均延迟
- **存**：KV Cache 优化，缓存历史注意力计算；Prefix Caching / PagedAttention 减少重复计算和内存碎片
- **快**：算子加速，FlashAttention（减少 HBM 访问）、PageAttention、算子融合（kernel fusion）
- **投**：投机采样（Speculative Decoding），小模型 Draft 生成候选序列，大模型 Target 并行验证，一步顶多步
- **机**：硬件加速，TensorRT-LLM、FasterTransformer、Triton Inference Server，编译优化与流水线并行
- **架构侧**：GQA/MQA 减少 KV 缓存，滑动窗口注意力降低长序列复杂度
- **体感侧**：流式输出（Streaming）降低首 token 延迟（TTFB），提升用户体验
- **易混点**：Continuous Batching 不同于简单 Dynamic Batching，前者是 token 级抢占调度
- **追问点**：AWQ vs GPTQ、Speculative Decoding 加速比公式、FlashAttention IO 复杂度

## 顺口溜
**量批存，快投机** —— *仓库量完批存好，快去投机*

## 单字锚点 + 防崩推导
- **锚点字**：**批**
- **扩展口诀**：**量批存，快投机**
- **为什么选它**：推理服务的核心矛盾是"批处理与延迟的平衡"，批（Batching）是服务端优化的灵魂，也是 vLLM 等框架的标志性创新。
- **防崩推导**：
  - 批 → 推理服务 → 量（量化，减模型体积）→ 批（动态批处理，提吞吐）→ 存（KV Cache 缓存，省重复计算）→ 快（算子加速，FlashAttention）→ 投（投机采样，小模型 Draft 大模型 Verify）→ 机（硬件加速，TensorRT-LLM）

## 一字一画面
- **量** —— 像**给货物称重量化打包**：FP16 的货太大，压成 INT8/INT4 小包裹，AWQ/GPTQ 是打包机器。（量化）
- **批** —— 像**公交连续上下客**：vLLM 的 Continuous Batching，不等上一批坐满就走，有客就上、到站就下，吞吐最大化。（动态批处理）
- **存** —— 像**仓库寄存柜**：KV Cache 把算过的历史存进 PagedAttention 的格子，下回直接取，不用重算。（缓存优化）
- **快** —— 像**高速公路闪送**：FlashAttention 像闪送员走捷径，PageAttention 像智能分拣，算子融合像合并快递单。（算子加速）
- **投** —— 像**投标前小队长探路**：小模型（Draft）先快速探路写好草稿，大模型（Target）一眼验证通过，一步顶多步。（投机采样）
- **机** —— 像**机器人工厂流水线**：TensorRT-LLM 把模型编译成专用机器码，GPU 流水线满负荷运转。（硬件加速）

## 面试话术
- 问优化 → "我总结为六个字：**量批存，快投机**。量化降低模型精度省显存；Continuous Batching 动态批处理提吞吐；KV Cache 和 Prefix Caching 省重复计算；FlashAttention 等算子加速；Speculative Decoding 投机采样；再加上 TensorRT-LLM 等硬件层优化。实际项目中，我们先做量化和算子优化，再上 vLLM 做动态批和 PagedAttention，体感延迟能降 50% 以上。"

## 防混