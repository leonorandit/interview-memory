---
type: 对比型
domain: 人工智能/Agent
anchor: 单
rhyme: 单简多协，看规模
created: 2026-06-14
---

# 说说 Single-Agent 和 Multi-Agent 的设计方案？

## 场景触发词
Single-Agent vs Multi-Agent、单智能体设计、多智能体设计、Agent 架构选型、Agent 规模选择

## 速记卡片
`单 | 单简多协，看规模 | Single vs Multi-Agent`

## 原始知识

- **Single-Agent 设计方案**
  - **核心思想**：一个 Agent 包揽所有任务，通过工具调用扩展能力
  - **架构特点**：
    - 单一 LLM + 工具集（搜索、代码执行、API）
    - 记忆模块（短期 + 长期）
    - 规划模块（ReAct / Plan-and-Execute）
  - **适用场景**：任务边界清晰、不需要复杂协作、开发迭代快
  - **优点**：简单、可控、延迟低、调试容易
  - **缺点**：能力天花板有限、无法并行、单点瓶颈

- **Multi-Agent 设计方案**
  - **核心思想**：多个 Specialist Agent 分工协作，通过通信协调完成任务
  - **架构特点**：
    - 角色定义（PM、Dev、QA、Researcher）
    - 通信机制（消息队列 / 共享黑板 / 直接调用）
    - 协调者（Orchestrator）分配任务和汇总结果
  - **适用场景**：复杂系统需多角色、需要并行处理、需要多角度验证
  - **优点**：专业化程度高、可并行、容错性好、可扩展
  - **缺点**：复杂度高、通信开销、调试困难、一致性难保证

- **选型决策树**
  ```
  任务复杂度低？
    ├─ 是 → Single-Agent（简单直接）
    └─ 否 → 需要多角色分工？
           ├─ 是 → Multi-Agent（专业协作）
           └─ 否 → Single-Agent + 高级工具（足够）
  ```

- **混合架构**
  - 外层 Multi-Agent 做任务分解和协调
  - 内层每个 Agent 用 Single-Agent + Tools 执行具体任务
  - 典型：MetaGPT（外层分角色，内层各 Agent 独立执行）

## 顺口溜
**单简多协，看规模**

## 单字锚点 + 防崩推导
- **锚点字**：单
- **扩展口诀**：单简多协
- **为什么选它**：“单”= Single-Agent，是两种方案中更基础的形态，用它做对比锚点
- **防崩推导**：
  1. 单 → Single-Agent
  2. 简 → **简**单直接，一个 Agent 包干
  3. 多 → Multi-Agent
  4. 协 → **协**作分工，多个 Agent 配合
  5. 看规模 → 任务简单用单，复杂用多

## 一字一画面
**单** —— 像 **瑞士军刀**：[红色刀柄] 一把刀上有螺丝刀、剪刀、开瓶器，一个人出门带它就够了。
**简** —— 像 **单人帐篷**：[橙色小帐] 搭起来快，收起来也快，但住不下两个人。
**多** —— 像 **施工队**：[黄色安全帽] 瓦工、电工、水管工各干各的，同时开工，最后交房。
**协** —— 像 **交响乐团**：[指挥棒] 小提琴、大提琴、钢琴各司其职，指挥统一节奏，合奏出复杂乐曲。

## 面试话术
Single-Agent 和 Multi-Agent 的设计方案核心区别在于**规模和协作**。Single-Agent 是一个 Agent 配一套工具，简单可控，适合任务边界清晰的场景；Multi-Agent 是多个 Specialist Agent 分工协作，通过消息或协调者通信，适合复杂多角色任务。实际选型看规模：**简单任务用 Single-Agent 足够，复杂系统用 Multi-Agent，中间地带可以用混合架构**——外层 Multi-Agent 分解任务，内层每个 Agent 用 Tools 执行。

## 防混补丁
**别混**：不要把"一个 Agent 多次调用工具"当成 Multi-Agent。Multi-Agent 是每个 Agent 有独立角色和记忆。口诀：**一人多用是单，多人协作是多**。

## 追问预演
1. **问**：Multi-Agent 通信延迟高怎么办？
   **答**：关键路径串行，非关键路径并行；用异步消息队列；必要时缓存中间结果。
2. **问**：Single-Agent 能力不够又不想上 Multi-Agent 怎么办？
   **答**：给 Agent 配更强大的 Tools（如代码解释器、搜索引擎），或升级模型（GPT-3.5 → GPT-4）。
3. **问**：Multi-Agent 怎么保证结果一致性？
   **答**：引入协调者 Agent 做最终审核；定义共享协议和数据格式；关键节点做投票或共识机制。

## 手撕代码（伪代码）
```python
# Single-Agent 方案
class SingleAgent:
    def __init__(self):
        self.tools = [SearchTool(), CodeTool(), APITool()]
        self.memory = MemoryStore()
    
    def run(self, task):
        plan = self.plan(task)
        for step in plan:
            tool = self.select_tool(step)
            result = tool.execute(step)
            self.memory.add(result)
        return self.synthesize()

# Multi-Agent 方案
class MultiAgentSystem:
    def __init__(self):
        self.agents = {
            "planner": Agent("规划师"),
            "researcher": Agent("研究员"),
            "writer": Agent("撰写员"),
        }
        self.orchestrator = Orchestrator()
    
    def run(self, task):
        subtasks = self.orchestrator.decompose(task)
        results = {}
        for agent_name, subtask in subtasks.items():
            results[agent_name] = self.agents[agent_name].execute(subtask)
        return self.orchestrator.merge(results)
```

## 关联知识点
- [ ] 多（什么是 Multi-Agent）
- [ ] 范（Agent 设计范式）
- [ ] 选（ReAct/Plan/Reflection 选型）
- [ ] 拆（复杂任务拆分）

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
