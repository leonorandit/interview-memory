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
- **拒** —— 像**HR 筛简历**：收了一堆简历（模型生成多个回答），只挑最好的几个发 offer。（拒绝采样筛选高质量）
- **采** —— 像**采样试吃**：从一批蛋糕里抽几个尝，好的才大量生产。（采样生成数据）
- **R奖** —— 像**比赛评委打分**：先培训一批评委（Reward Model），再给选手打分排名。（RLHF 需要奖励模型）
- **D直** —— 像**观众直接投票**：没有评委，观众直接选最喜欢的。（DPO 直接偏好优化）
- **G组** —— 像**小组内评比**：不用找外部评委，组内成员互相比较，排出名次。（GRPO 组内相对比较）

## 面试话术
- 问 Post-Training → "SFT 之后的 Post-Training 我概括为**后拒采，R奖D直G组**。**后**是 SFT 之后进入后训练阶段；**拒采**是拒绝采样，生成多个回答筛选高质量数据；**R奖**是 RLHF，需要训练 Reward Model 然后用 PPO 优化，工程复杂；**D直**是 DPO，直接对偏好数据优化，不需要 Reward Model；**G组**是 GRPO，不需要 Critic 模型，用组内采样计算相对优势，进一步降低显存。拒绝采样是数据层面的操作，可以和任何一种优化方法配合。"
- 问关系 → "RLHF 是祖师爷，DPO 是它的**免奖版**（去掉 Reward Model），GRPO 是 PPO 的**省卡版**（去掉 Critic，组内比）。"

## 防混补丁
- 容易以为"DPO 和 RLHF 是完全不同的东西"。实际上 DPO 是 RLHF 的简化替代，目标一致。**补丁：DPO 是 RLHF 的免奖版。**
- 容易以为"GRPO 和 PPO 没关系"。实际上 GRPO 是 PPO 的改进版。**补丁：GRPO 是 PPO 的省卡版。**

## 追问预演
1. **DPO 为什么不需要 Reward Model？** 答：DPO 把奖励函数隐式地编码进策略的偏好概率中，直接用 Bradley-Terry 模型对偏好数据优化。
2. **GRPO 相比 PPO 省了什么？** 答：省了 Critic 模型（价值网络），用同一问题的组内采样结果估计 baseline，降低显存。
3. **拒绝采样具体怎么做？** 答：模型对同一问题生成多个回答，用规则或 Reward Model 打分，只保留高分回答用于 SFT。
4. **DeepSeek-R1 的训练流程？** 答：SFT 冷启动 → GRPO → 拒绝采样生成数据 → 再次 SFT → 再次 GRPO。

## 关联知识点
- [ ] RLHF的完整训练流程是怎样的
- [ ] 什么是DPO它相比RLHF和PPO有什么优势
- [ ] 介绍几种常见的微调策略的优缺点
- [ ] SFT指令微调数据如何构建

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
