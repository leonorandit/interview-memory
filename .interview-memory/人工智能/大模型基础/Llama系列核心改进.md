---
type: 列举型
domain: 人工智能/大模型基础
anchor: 群
rhyme: 一基二群三万境
created: 2026-06-19
---

# Llama 系列核心改进

## 速记卡片
`群 | 一基二群三万境 | 版本三步走`

## 原始知识
- **Llama1**：开源高效基座，RMSNorm + SwiGLU + RoPE，无 bias，Chinchilla 最优训练原则，32k 词表
- **Llama2**：引入 GQA（分组查询注意力，70B 先用），上下文 2k→4k，RLHF（PPO + 拒绝采样），代码预训练，安全性提升
- **Llama3**：全系 GQA，词表 128k（多语言），训练数据 15T+（高质量筛选），上下文 8k→128k，后训练 SFT + DPO
- **易混点**：Llama2 的 GQA 只有 70B 用，Llama3 才全系标配
- **追问点**：GQA 与 MHA/MQA 的区别、DPO 相比 PPO 的优势、RoPE 外推性

## 顺口溜
**一基二群三万境** —— *羊群进化三步走*

## 单字锚点 + 防崩推导
- **锚点字**：**群**
- **扩展口诀**：**羊群进化三步走**
- **为什么选它**：Llama = 羊驼，"群"既指羊驼成群进化，又指 GQA（Group/分组查询注意力），一语双关。
- **防崩推导**：
  - 群 → Llama 是羊驼 → 羊群进化
  - 一步走（一基）：Llama1 打地基，RMSNorm + SwiGLU + RoPE
  - 二步走（二群）：Llama2 引入 GQA（群查询）+ RLHF
  - 三步走（三万境）：Llama3 扩词表、扩数据、扩上下文

## 一字一画面
- **一** —— 像**一只羊驼打地基**：RMSNorm 垫平地面（Pre-norm），SwiGLU 做骨架，RoPE 拧螺丝，32k 小词表开局。（Llama1 筑基）
- **群** —— 像**羊群分组排队**：70B 大羊驼带头，Query 分组共享