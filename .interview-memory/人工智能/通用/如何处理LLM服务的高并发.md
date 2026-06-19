---
type: 列举型
domain: 人工智能/通用
anchor: 并
rhyme: 批快缓分弹限
created: 2026-06-18
---

# 如何处理 LLM 服务的高并发？

## 速记卡片
`并 | 批快缓分弹限 | 六层并发方案`

## 原始知识
- **批**（动态批处理）：Continuous Batching / In-flight Batching，请求生成完立即释放资源并加入新请求，不需要等整批完成，极大提升 GPU 利用率（vLLM、TensorRT-LLM 支持）
- **快**（推理加速）：
  - 模型量化：INT8 / INT4 / AWQ / GPTQ 减少显存、提升吞吐
  - FlashAttention / Kernel Fusion：减少内存带宽瓶颈
  - 投机采样（Speculative Decoding）：小模型草稿 + 大模型验证，减少解码步数
  - Prefill-Decoding 分离：如 Splitwise，分别优化计算密集和内存带宽密集阶段
- **缓**（多级缓存）：
  - KV Cache 复用：vLLM PagedAttention 按块管理，减少碎片
  - Prompt Cache / Prefix Caching：相同前缀直接复用，避免重复计算
  - 结果缓存：完全相同请求直接返回缓存（如嵌入向量、分类结果）
- **分**（分布式与并行）：
  - 负载均衡：多实例部署，按 GPU 显存/队列长度/延迟分发（Nginx / K8s Ingress）
  - Tensor Parallelism / Pipeline Parallelism：多卡并行分摊单请求
  - 多模型路由：简单请求走小模型（7B），复杂请求走大模型（70B）
- **弹**（弹性扩缩容）：K8s HPA 根据 GPU 利用率 / 队列长度 / QPS 自动扩缩容，结合 Spot 实例降低成本
- **限**（限流降级）：
  - 限流：网关层令牌桶/漏桶，按用户/API Key 配额控制
  - 降级：过载时非核心功能关闭，简单请求走缓存或小模型
  - 熔断：快速失败，防止级联拖垮
- **补充**：异步队列（Kafka / Redis Stream）削峰填谷；流式返回（SSE）减少用户等待感
- **易混点**：Continuous Batching vs Static Batching；TP vs PP 适用场景
- **追问点**：vLLM PagedAttention 原理、投机采样机制、Prefill-Decoding 分离

## 顺口溜
**批快缓分弹限**

## 单字锚点 + 防崩推导
- **锚点字**：**并**
- **扩展口诀**：**并批快缓分弹限**
- **为什么选它**：题目问"高并发"，"并"字直接锁定主题，六层方案系统覆盖。
- **防崩推导**：
  - 并 → 高并发场景
  - 批 → 动态批处理（Continuous Batching），提升 GPU 吞吐
  - 快 → 推理加速（量化、FlashAttention、投机采样）
  - 缓 → 多级缓存（KV Cache、Prompt Cache、结果缓存）
  - 分 → 分布式（负载均衡、多卡并行、多模型路由）
  - 弹 → 弹性扩缩容（K8s HPA）
  - 限 → 限流降级（令牌桶、熔断、小模型降级）

## 一字一画面
- **并** —— 像**春运火车站**：人流量巨大，必须多窗口、分批次、限流量才能不瘫痪。（本质：高并发场景）
- **批** —— 像**动态拼车**：一辆车坐满就走，不等迟到的人，空位随时上人。（本质：Continuous Batching）
- **快** —— 像**高铁提速**：轨道优化 + 列车轻量化 + 自动驾驶，跑得更快。（本质：推理加速优化）
- **缓** —— 像**快递中转仓**：同一批货不再重复打包，直接从仓库拿现成包裹。（本质：缓存复用）
- **分** —— 像**多车道高速**：小车走快车道，货车走慢车道，事故时换道分流。（本质：分布式与负载均衡）
- **弹** —— 像**弹性 workforce**：忙时招临时工，闲时裁员，按需调配。（本质：弹性扩缩容）
- **限** —— 像**景区限流**：超过承载量就停止售票， VIP 走快速通道。（本质：限流降级）

## 面试话术
- 问高并发 → "处理 LLM 高并发我分六个层面，口诀是**并批快缓分弹限**。**批**——Continuous Batching 动态批处理，提升 GPU 利用率；**快**——量化 + FlashAttention + 投机采样加速推理；**缓**——KV Cache 和 Prompt Cache 多级缓存；**分**——多实例负载均衡 + Tensor/Pipeline 并行 + 多模型路由；**弹**——K8s HPA 弹性扩缩容；**限**——网关层令牌桶限流 + 过载时小模型降级 + 熔断快速失败。"
- 问核心瓶颈 → "LLM 推理瓶颈主要在内存带宽和显存，不是算力。所以 Continuous Batching 和 KV Cache 优化比单纯加卡更有效。"

## 防混补丁
- 容易把"动态批处理"和"静态批处理"搞混。静态批要等所有请求同时完成，动态批可以持续加入新请求。补丁：**静态等齐走，动态不断流**。
- 容易忽略"Prompt Cache"。相同前缀的反复计算是隐形杀手。补丁：**前缀相同只算一次**。
- 容易觉得"加卡就能解决并发"。不加优化直接加卡，利用率可能只有 20%。补丁：**先优化再加卡，不然钱是白搭**。

## 追问预演
1. **Continuous Batching 是什么？和 Static Batching 有什么区别？**
   → Continuous Batching（也叫 In-flight Batching）允许当一个请求生成完 token 后立即释放资源并加入新请求，不需要等整批所有请求完成。Static Batching 要等最慢的那个请求完成才整批释放，GPU 利用率低。
2. **vLLM 的 PagedAttention 原理？**
   → 把 KV Cache 划分成固定大小的 Block（如 16 tokens），像操作系统的虚拟内存分页一样动态分配、复用和交换，解决传统方法中 KV Cache 内存碎片和预留浪费的问题。
3. **投机采样（Speculative Decoding）怎么工作？**
   → 用小模型（Draft Model）快速生成多个候选 token，大模型（Target Model）一次并行验证这些候选，接受正确的、拒绝错误的，只回退到第一个错误位置重新生成。大幅减少大模型解码步数，理想情况下加速 2-3 倍。
4. **Prefill 和 Decoding 分离是什么？**
   → Prefill 阶段（处理输入 Prompt）是计算密集，Decoding 阶段（自回归生成 token）是内存带宽密集。分离部署（如 Splitwise）可以让两个阶段各自用最优硬件配置，Prefill 用强算力卡，Decoding 用高带宽卡。
5. **Prompt Cache / Prefix Caching 怎么实现？**
   → 对相同前缀（如 System Prompt、重复上下文）的 KV 值做哈希索引缓存，新请求直接复用已计算的 KV，避免重复 Prefill。vLLM 和 SGLang 都支持。
6. **怎么做多模型路由？**
   → 网关层按请求复杂度路由：简单分类/摘要走 7B 小模型，复杂推理/代码走 70B 大模型。可用轻量级分类器（如 BERT）先判断请求类型，再决定路由目标。

## 关联知识点
- [ ] [如果一个GPU集群的LLM处理能力为1000 tokenss那1000个用户同时并发访问响应给每个用户的性能只有1 tokens吗怎么分析性能瓶颈](如果一个GPU集群的LLM处理能力为1000 tokenss那1000个用户同时并发访问响应给每个用户的性能只有1 tokens吗怎么分析性能瓶颈.md)
- [ ] [大模型部署有哪些主流方案vLLMTGIllamacppSGLang实际项目里怎么选](../大模型基础/大模型部署有哪些主流方案vLLMTGIllamacppSGLang实际项目里怎么选.md)
- [ ] [如何优化 LangChain 应用的性能和成本](../LangChain/如何优化 LangChain 应用的性能和成本.md)

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
