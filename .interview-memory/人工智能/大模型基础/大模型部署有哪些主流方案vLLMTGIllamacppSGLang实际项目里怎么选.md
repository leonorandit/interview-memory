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
