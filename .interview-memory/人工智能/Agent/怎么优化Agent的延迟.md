---
type: 列举型
domain: 人工智能/Agent
anchor: 量
rhyme: 量批流异缓降
created: 2026-06-18
---

# 怎么优化Agent的延迟

## 速记卡片
`量 | 量批流异缓降 | 模型→推理→架构→网络→业务`

## 原始知识
- **模型层**：模型量化（INT8/INT4/AWQ/GPTQ）、模型蒸馏（小模型替代）、模型选择（任务适配大小）
- **推理层**：KV Cache / Prompt Caching、批量推理（Batching）、流式输出（Streaming）、投机采样（Speculative Decoding）、高效推理框架（vLLM/TGI/SGLang）
- **架构层**：异步调用（Async）、并行工具调用（Parallel Tool Calling）、结果缓存（Cache）、预加载/预热（Warmup）
- **网络层**：就近部署（Region选择）、连接池/Keep-alive、CDN/边缘计算
- **业务层**：精简 Prompt（减少 Token）、CoT 压缩（减少轮次）、提前返回（Progressive Response）、降级策略（Fallback 小模型）
- **监控**：P50/P99/TTFB 指标定位瓶颈
- **易混点**：Streaming 降低的是感知延迟，不是总生成时间；量化可能轻微影响效果
- **追问点**：Streaming 原理？Parallel Tool Calling 实现？Prompt Caching 能省多少？

## 顺口溜
**量批流异缓降**

## 单字锚点 + 防崩推导
- **锚点字**：**量**
- **扩展口诀**：**量批流异缓降**
- **为什么选它**：Agent 延迟优化从"量"开始——模型量化是最直接的计算量削减手段，再想其他层。
- **防崩推导**：
  - 量 → 模型量化（INT8/INT4，减少计算量和显存占用）
  - 批 → 批量推理（Batching，合并请求提高 GPU 利用率）
  - 流 → 流式输出（Streaming，首 Token 先到，降低感知延迟）
  - 异 → 异步/并行（Async + Parallel Tool Calling，工具调用并行化）
  - 缓 → 缓存（Prompt Caching + 结果缓存，省去重复计算）
  - 降 → 降级（Fallback 小模型、精简 Prompt、提前截断）

## 一字一画面
- **量** —— 像**压缩包**：把 FP16 大文件压成 INT4 小文件，传输快但质量稍降。（模型量化：减少显存占用和计算量，INT8 几乎无损，INT4 轻微下降）
- **批** —— 像**拼单外卖**：一个人点配送慢，多人一起点既快又省。（Batching：合并请求提高 GPU 利用率，continuous batching 动态调度）
- **流** —— 像**直播**：不用等整部电影下载完，一边缓冲一边看。（Streaming：首 Token 先到，TTFB 低，用户感知延迟大幅降低）
- **异** —— 像**多线程下载**：同时开多个线程，各下各的片段。（Async + Parallel Tool Calling：多个工具调用并行执行，不用串行等待）
- **缓** —— 像**浏览器缓存**：之前访问过的网页秒开。（Prompt Caching：固定 System Prompt 和长文档前缀预计算缓存，省 50%-90% 计算时间）
- **降** —— 像**降级套餐**：高峰期自动切换到轻量版服务。（Fallback：小模型兜底、精简 Prompt、CoT 压缩、提前返回部分结果）

## 面试话术
- 问延迟优化 → "Agent 延迟优化口诀是**量批流异缓降**。模型量化减少计算量；批量推理提高吞吐；流式输出降低首 Token 感知延迟；异步并行工具调用减少等待；缓存固定前缀和相似结果；降级策略兜底。实际项目要分层优化，模型层、推理层、架构层、网络层一起发力，先监控 P50/P99 找到瓶颈再针对性优化。"
- 问具体做法 → "模型层做量化蒸馏，7B 变 4B；推理层用 vLLM + Streaming + Prompt Caching；架构层工具调用并行化 + 结果缓存；业务层精简 System Prompt + CoT 压缩 + 提前返回。关键是 Streaming 让用户体验从'等 5 秒'变成'1 秒就有反馈'。"

## 防混补丁
- 容易把 Streaming 当成加速总生成时间。补丁：**Streaming 降低的是感知延迟（TTFB），不是总 Token 生成时间**。
- 容易以为量化一定会掉效果。补丁：**INT8 几乎无损，AWQ/GPTQ 比朴素量化效果更好**，关键看任务对精度敏感度。

## 追问预演
1. **Streaming 为什么能降低延迟感知？**
   → 用户不需要等完整回答，首 Token 出来就有反馈。TTFB（Time To First Byte）是关键指标，Streaming 让 TTFB 从秒级降到百毫秒级。
2. **Parallel Tool Calling 怎么实现？**
   → 模型一次生成多个工具调用请求（JSON 数组），系统并行执行所有工具，等所有结果回来后再统一生成最终回答。省去串行等待时间。
3. **Prompt Caching 能省多少延迟？**
   → 固定 System Prompt 和长文档前缀可省 50%-90% 的计算时间。prefix 越长，节省比例越高。
4. **量化对效果影响大吗？**
   → INT8 几乎无损；INT4/Q4_K_M 轻微下降，适合对精度要求不高的场景；AWQ/GPTQ 保护重要权重，效果优于朴素 INT4。
5. **怎么定位 Agent 延迟瓶颈？**
   → 分层拆解：模型推理时间（GPU 利用率）、工具调用时间（外部 API 延迟）、网络传输时间（Region 距离）、Prompt 处理时间（Token 数）。用 P50/P99 分位监控，找到长尾瓶颈。

## 关联知识点
- [ ] KV Cache与Prompt Caching
- [ ] vLLM PagedAttention
- [ ] Function Calling并行化
- [ ] 模型量化INT8/INT4
- [ ] 流式输出Streaming

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
