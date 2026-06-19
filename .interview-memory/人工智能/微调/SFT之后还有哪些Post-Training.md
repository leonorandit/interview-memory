---
type: 连环型
domain: 人工智能
anchor: 后
rhyme: 后拒采，R奖D直G组
created: 2026-06-18
---

# SFT之后还有哪些Post-Training

## 速记卡片
`后 | 后拒采，R奖D直G组 | Post-Training全家福`

## 原始知识
- **后（Post-Training）**：SFT 之后的训练阶段，让模型从"会答题"进化到"答得好"
- **拒（拒绝采样）**：模型生成多个回答，筛选高分样本用于 SFT，是数据层面的提质手段
- **采（采样）**：生成多样回答供筛选
- **R奖（RLHF）**：Reinforcement Learning from Human Feedback，需训练 Reward Model + PPO，工程复杂、显存消耗大
- **D直（DPO）**：Direct Preference Optimization，直接对偏好数据优化，**无需 Reward Model**，简化工程
- **G组（GRPO）**：Group Relative Policy Optimization，**无需 Critic 模型**，组内采样估计相对优势，省显存（DeepSeek-R1 使用）
- **关系链**：拒绝采样是数据手段，可与任意优化方法配合；RLHF 是祖师爷，DPO 是其免奖版，GRPO 是 PPO 的省卡版
- **易混点**：DPO 和 RLHF 没关系、GRPO 和 PPO 没关系
- **追问点**：DPO 为什么不需要 RM、GRPO 组内 baseline 原理、DeepSeek-R1 训练流程

## 顺口溜
**后拒采，R奖D直G组**

## 单字锚点 + 防崩推导
- **锚点字**：**后**
- **扩展口诀**：**后拒采，R奖D直G组**
- **为什么选它**：一切 Post-Training 都从"SFT 之后"开始，"后"字是时间锚点，一想起就知道是 SFT 进阶。
- **防崩推导**：
  - 后 → SFT 之后 → 进入 Post-Training 阶段
  - 拒 → 拒绝采样 → 模型生成多答 → 筛选高分 → 补充高质量 SFT 数据
  - 采 → 采样生成多样回答
  - R奖 → RLHF → 需训练 Reward Model（奖励模型）→ PPO 优化 → 工程最重
  - D直 → DPO → Direct Preference Optimization → 把奖励函数隐式编码进策略 → 直接偏好优化 → 无需 RM
  - G组 → GRPO → Group Relative Policy Optimization → 同一问题采样一组回答 → 组内相对比较算优势 → 无需 Critic → 省显存

## 一字一画面
- **后** —— 像**大学毕业后的进修**：本科毕业了（SFT），还要读研读博（Post-Training）。（SFT 是基础，后训练是进阶）
- **拒** —— 像**HR 筛简历**：收了一堆简历（模型生成多个回答），只挑