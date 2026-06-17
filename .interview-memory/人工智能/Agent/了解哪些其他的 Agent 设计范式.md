---
anchor: "范"
rhyme: "范反计多，五范式"
type: "列举型"
tags: ["AI", "Agent", "设计范式", "ReAct", "CoT", "Multi-Agent"]
difficulty: "中等"
---

# 了解哪些其他的 Agent 设计范式？

## 场景触发词
Agent 设计模式、Agent 范式、ReAct、Plan-and-Execute、Multi-Agent、Reflection、Agent 架构模式

## 速记卡片
`范 | 范反计多，五范式 | Agent 设计范式`

## 原始知识
常见的 Agent 设计范式（除基础 Tool Use 外）：

1. **ReAct（Reasoning + Acting）**
   - 推理与行动交替：观察 → 思考 → 行动 → 观察...
   - 每一步都显式输出推理过程，提高可追溯性
   - 代表：LangChain ReAct Agent

2. **Plan-and-Execute（计划再执行）**
   - 先制定完整计划，再按步骤执行
   - 适合多步骤复杂任务，减少中间漂移
   - 代表：Plan-and-Solve、BabyAGI

3. **Reflection（自我反思）**
   - 执行后对结果进行自我评估和修正
   - 循环：执行 → 反思 → 改进 → 再执行
   - 代表：Reflexion、Self-Refine

4. **Multi-Agent（多智能体协作）**
   - 多个 Agent 分工协作，各自负责不同子任务
   - 通过通信协调完成复杂目标
   - 代表：AutoGen、MetaGPT、CAMEL

5. **Tree of Thoughts（思维树）**
   - 维护多个推理路径，像树一样分支探索
   - 评估各路径得分，选择最优解
   - 适合需要探索的决策问题

## 顺口溜
**范反计多，五范式**

## 单字锚点 + 防崩推导
- **锚点字**：范
- **扩展口诀**：范反计多
- **为什么选它**：“范”= 范式，直接对应题目问的“设计范式”
- **防崩推导**：
  1. 范 → 范式
  2. 反 → ReAct（推理+行动，**反**复循环）
  3. 计 → Plan-and-Execute（先**计**划再执行）
  4. 多 → Multi-Agent（**多**个智能体协作）
  5. 五范式 → 加上 Reflection（反思）和 Tree of Thoughts（思维树），共五种

## 一字一画面
**范** —— 像 **五本武功秘籍**：[古旧书卷] 封面上分别写着《React掌法》《计划剑法》《反思心法》《群战阵法》《树形迷踪步》。
**反** —— 像 **太极拳**：[白色衣袂] 一招一式之间都在思考下一步，打完一招马上调整姿势。
**计** —— 像 **作战地图**：[沙盘推演] 将军先在地图上标出进军路线，再让部队按计划推进。
**多** —— 像 **足球队**：[绿茵场] 前锋、中场、后卫、门将各司其职，通过传球配合进球。
**树** —— 像 **迷宫分叉口**：[多条小路] 每走一步都有几个选择，评估哪条路最可能通向出口。

## 面试话术
除了基础的 Tool Use，常见的 Agent 设计范式主要有五种：**ReAct**（推理与行动交替）、**Plan-and-Execute**（先计划再执行）、**Reflection**（执行后自我反思修正）、**Multi-Agent**（多智能体分工协作）、**Tree of Thoughts**（多路径分支探索）。简单说：ReAct 适合实时决策，Plan-and-Execute 适合复杂任务，Reflection 提升质量，Multi-Agent 解决大规模协作，Tree of Thoughts 解决探索性问题。

## 防混补丁
**别混**：ReAct 和 Plan-and-Execute 都是单 Agent 范式，区别在于 ReAct 是“边想边做”，Plan-and-Execute 是“先想后做”。口诀：**React边打边想，Plan先算后干**。
