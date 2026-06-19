---
type: 对比型
domain: 人工智能/大模型基础
anchor: 云
rhyme: 云V端C，快T学S
created: 2026-06-18
---

# 大模型部署有哪些主流方案 vLLM TGI llama.cpp SGLang 实际项目里怎么选

## 速记卡片
`云 | 云V端C，快T学S | 吞吐vs本地vs易用vs探索`

## 原始知识
- **vLLM**：**云上攻高吞吐**。核心 PagedAttention（OS式页管理 KV Cache），消除显存碎片，continuous batching，吞吐拉满。适合生产 GPU 集群。
- **TGI**：**快速原型易用**。HuggingFace 出品，HF 生态一键部署，支持 Flash Attention / 量化。适合中小规模、快速上线。
- **llama.cpp**：**端侧本地跑**。C++ 实现 + GGUF 量化，CPU 都能推 70B，资源占用极低。适合边缘设备、隐私场景、消费级硬件。
- **SGLang**：**学术探索新玩法**。RadixAttention 自动 KV Cache 复用，编程式交互（SGLang 语言），结构化生成。适合复杂多轮交互、研究实验。
- **选型口诀**：云上高并发 → vLLM；本地/边缘 → llama.cpp；HF 生态快速上线 → TGI；复杂交互/学术 → SGLang
- **易混点**：SGLang 不是只能学术，生产也可；llama.cpp 也能跑 GPU
- **追问点**：PagedAttention 原理？RadixAttention 和 Prefix Caching 区别？

## 顺口溜
**云V端C，快T学S**

## 单字锚点 + 防崩推导
- **锚点字**：**云**
- **扩展口诀**：**云V端C**
- **为什么选它**：大模型部署首先分场景——云上服务还是端侧本地？"云"字一出，vLLM 跟上；"端"字一出，llama.cpp 跟上。
- **防崩推导**：
  - 云 → GPU 集群高并发 → **vLLM**（PagedAttention 把显存碎片归零，batch 塞满）
  - 端 → 本地/边缘/无 GPU → **llama.cpp**（C++ 量化，CPU 能跑，资源极简）
  - 快 → 快速原型/HF 生态 → **TGI**（HuggingFace 全家桶，一键部署）
  - 学 → 学术探索/复杂交互 → **SGLang**（RadixAttention 自动缓存复用，编程式调用）

## 一字一画面
- **云** —— 像**数据中心**：成百上千台 GPU 服务器，追求极致吞吐和利用率。（vLLM：PagedAttention 像操作系统管理内存页，KV Cache 碎片归零，batch 塞得满满当当）
- **V** —— 像**高速公路收费站**：vLLM 把车道（显存）管理得井井有条，车再多也不堵。（PagedAttention block table 管理，continuous batching 动态调度）
- **端** —— 像**手机本地跑**：没网、没 GPU、要隐私，一个 C++ 程序把 70B 模型压到几 G 内存。（llama.cpp：GGUF 量化 + NEON/AVX 指令优化，CPU 都能推理）
- **C** —— 像**老式诺基亚**：极简、省电、到哪都能用。（llama.cpp 资源占用极低，树莓派都能跑 7B）
- **快** —— 像**HF一键发布**：模型在 HuggingFace 上，点一下就能部署，不用改代码。（TGI：和 Transformers 生态无缝衔接，Safetensors + Flash Attention 开箱即用）
- **T** —— 像**快餐店**：上菜快、标准化，适合快速吃饱。（TGI 适合快速原型和中小规模服务）
- **学** —— 像**实验室新玩具**：支持编程式调用、自动缓存复用、结构化输出，适合探索新玩法。（SGLang：RadixAttention 像文件系统管理缓存树，多轮对话自动命中）
- **S** —— 像**瑞士军刀**：功能多、玩法新，但有时候需要看说明书。（SGLang 生态较新，功能丰富但学习成本略高）

## 面试话术
- 问部署方案 → "四个方案口诀是**云V端C，快T学S**。云上高并发生产环境选 vLLM，PagedAttention 把显存利用率拉满；端侧本地跑选 llama.cpp，C++ 量化后 CPU 都能推 70B；快速原型和 HF 生态选 TGI，一键部署；学术探索和复杂交互选 SGLang，RadixAttention 自动管理 KV Cache 复用。实际生产云部署，vLLM 是主流首选。"
- 问实际怎么选 → "先分场景：有 GPU 集群要吞吐 → vLLM；没 GPU 要本地跑 → llama.cpp；要快速上线验证 → TGI；有多轮复杂交互或要结构化输出 → SGLang。也可以组合，比如 vLLM 做主力服务，llama.cpp 做离线本地备份。"

## 防混补丁
- 容易以为 llama.cpp 只能跑 CPU。补丁：**llama.cpp 也支持 GPU**，只是强项在 CPU 量化。
- 容易把 SGLang 当成纯学术玩具。补丁：**SGLang 生产也可用**，RadixAttention 的自动缓存复用在多轮场景比手动 Prefix Caching 更智能。

## 追问预演
1. **vLLM 的 PagedAttention 原理是什么？**
   → 把 KV Cache 分成固定大小的 block（类似 OS 内存页），用 block table 动态映射逻辑位置到物理显存，消除 padding 和碎片，提高显存利用率。
2. **SGLang 的 RadixAttention 和 vLLM Prefix Caching 有什么区别？**
   → Prefix Caching 是显式配置前缀缓存；RadixAttention 是自动构建 KV Cache 前缀树（Radix Tree），多轮对话、并行采样、分支推理时自动命中公共前缀，更智能。
3. **llama.cpp 为什么能在 CPU 上跑大模型？**
   → GGUF 量化（INT4/Q4_K_M）+ NEON/AVX 指令集优化 + mmap 内存映射，把 FP16 模型压到几 G 内存，CPU 缓存友好。
4. **生产环境一般怎么组合部署？**
   → 模型服务层 vLLM + TP/PP 并行，网关层做限流路由，监控 Prometheus+Grafana。需要本地离线时配一套 llama.cpp。

## 关联知识点
- [ ] KV Cache与Prompt Caching（链接到对应md文件）
- [ ] PagedAttention原理
- [ ] RadixAttention与Prefix Caching
- [ ] GGUF量化格式
- [ ] Continuous Batching

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
