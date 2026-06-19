---
type: 对比型
domain: 人工智能
anchor: 压
rhyme: 两压一盒
created: 2026-06-19
---

# AWQ、GPTQ、GGUF 区别？

## 速记卡片
`压 | 两压一盒 | 算法 vs 格式`

## 原始知识
- **AWQ**（Activation-aware Weight Quantization）：4-bit量化算法，根据激活幅度保护重要权重通道，精度高、对异常值鲁棒，需GPU推理
- **GPTQ**（General-purpose Post-Training Quantization）：4-bit量化算法，逐层OBS/Hessian最优压缩，通用性强、社区生态广，对异常值敏感
- **GGUF**（GPT-Generated Unified Format）：非量化算法，是llama.cpp的统一模型格式/容器，支持Q4_0~Q8_0多种位宽，CPU友好、跨平台
- **易混点**：GGUF不是压缩算法，是装压缩后模型的盒子
- **追问点**：实际部署怎么选？QLoRA和它们的关系？

## 顺口溜
**两压一盒**

## 单字锚点 + 防崩推导
- **锚点字**：**压**
- **扩展口诀**：**两压一盒**
- **为什么选它**：三者都和"压缩"相关，最本质的区别是"怎么压"和"装不装"。
- **防崩推导**：
  - 压