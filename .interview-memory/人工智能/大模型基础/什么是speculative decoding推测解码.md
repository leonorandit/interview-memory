---
type: 因果型
domain: 人工智能
anchor: 验
rhyme: 小跑大验批
created: 2026-06-19
---

# 什么是speculative decoding推测解码

## 速记卡片
`验 | 小跑大验批 | 小模型跑草稿，大模型批验证`

## 原始知识
- **Speculative Decoding**：推测解码 / 投机采样
- 用**小模型**（Draft Model）快速自回归生成 k 个候选 token
- **大模型**（Target Model）一次前向**并行验证**这 k+1 个位置
- 按接受概率 **min(1, p_target / p_draft)** 决定是否采纳
- 被拒绝的位置从大模型分布重新采样，后续 token 丢弃重算
- **数学保证**：与直接用大模型采样**完全等价**，不损失质量
- 大模型瓶颈在内存带宽，减少前向次数 → **吞吐大幅提升**
- 平均接受