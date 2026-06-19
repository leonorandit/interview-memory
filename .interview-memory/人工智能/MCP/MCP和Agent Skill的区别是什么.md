---
type: 对比型
domain: 人工智能/MCP
anchor: 线
rhyme: MCP是线，Skill是电
created: 2026-06-18
---

# MCP 和 Agent Skill 的区别是什么

## 速记卡片
`线 | MCP是线，Skill是电 | 协议层vs能力层`

## 原始知识
- **MCP**：Anthropic 提出的开放协议/标准，定义模型与外部工具的**通信规范**
- **Agent Skill**：AI Agent 的**具体能力单元**，如搜索、画图、写代码、查数据库等
- **层次差异**：MCP 是**协议层/连接层**，Skill 是**应用层/能力层**
- **关注点**：MCP 关注"**怎么连**"（标准化接口、stdio/SSE、Host-Client-Server）；Skill 关注"**能做什么**"（业务功能）
- **调用方式**：MCP Server **被动暴露**（等 Host 来连）；Skill 被 Agent **主动调用**
- **平台绑定**：MCP 是**跨平台通用**标准；Skill 通常绑定特定框架/平台
- **核心关系**：MCP 是 Skill 的**传输管道之一**，Skill 是管道里传输的**内容**
- **追问点**：Skill 必须走 MCP 吗？MCP 能替代 Function Calling 吗？

## 顺口溜
**MCP是线，Skill是电**

## 单字锚点 + 防崩推导
- **锚点字**：**线**
- **扩展口诀**：**MCP是线，Skill是电**
- **为什么选它**：用"线 vs 电"的对偶，一眼分清"连接管道"和"管道里跑的内容"，画面极具体。
- **防崩推导**：
  - 线 → 连接 → 协议 → 标准化 → 接口统一 → 跨平台
  - 线 → 怎么连 → stdio / SSE → Host-Client-Server
  - 电 → 能力 → 功能 → 业务逻辑 → Agent 主动调用
  - 电 → 干什么 → 搜索、画图、写代码、查数据
  - 线 + 电 → 电线通电 → 有线没电是空管，有电没线传不动

## 一字一画面
- **线** —— 像 **电线和插座**：国家标准统一，不管什么电器插上都能通电，不用为每个电器单独拉闸。（本质：协议标准化，解决 N×M 适配）
- **电** —— 像 **各种电器**：灯泡发光、风扇转、空调制冷，各有各的具体功能。（本质：能力实现，解决业务问题）
- **线** —— 还像 **USB 数据线**：只规定插口形状和传输规则，不规定里面传的是照片还是音乐。（本质：协议与内容解耦）
- **电** —— 还像 **APP 功能按钮**：搜索、画图、写代码，点哪个按钮干哪件事。（本质：Agent 的主动能力）

## 面试话术
- 问区别 → "核心区别是**协议层 vs 能力层**。我概括为**MCP是线，Skill是电**。MCP 是标准化协议，像电线和插座，解决模型和外部工具**怎么连**的问题；Agent Skill 是具体能力，像灯泡风扇，解决**能干什么**的问题。Skill 可以通过 MCP 暴露，也可以走 Function Calling 或直调 API。"
- 问为什么需要 MCP → "以前每个平台都要为每个工具单独适配，是 N×M。MCP 相当于给 Skill 们铺了一条**标准化电线**，工具实现一次 Server，所有支持 MCP 的模型都能接。"

## 防混补丁
容易搞混：以为 MCP 是 Skill 的一种，或者 Skill 必须走 MCP。

**补丁口诀**：**MCP 是电话线，Skill 是通话内容——同一条线可以聊不同内容**

## 追问预演
1. **Skill 必须通过 MCP 暴露吗？**
   → 不一定。Skill 可以通过 MCP、Function Calling、直接 API 调用等多种方式暴露。MCP 只是其中一种标准化协议。

2. **MCP 能替代 Function Calling 吗？**
   → 不能简单替代。Function Calling 是模型"调用函数"的**能力**，MCP 是"如何暴露函数"的**协议**。MCP 可以基于 Function Calling 实现。

3. **一个 MCP Server 可以包含多个 Skill 吗？**
   → 可以。一个 MCP Server 可以暴露多个 Resources、Prompts、Tools，相当于一个插线板上插了多个电器。

4. **为什么需要 MCP 而不是平台自己定义 Skill？**
   → 统一标准降低适配成本。没有 MCP，N 个模型 × M 个工具 = N×M 次适配；有了 MCP，工具写一次 Server，所有模型都能用。

5. **MCP 和 LangChain Tool 的区别？**
   → LangChain Tool 是特定框架（LangChain）里的 Skill 封装；MCP 是跨框架的开放协议。LangChain 也可以集成 MCP Client 来调用 MCP Server。

## 关联知识点
- [ ] 什么是MCP模型上下文协议
- [ ] Function Calling 原理
- [ ] LangChain/LangGraph 工具调用
- [ ] A2A（Agent-to-Agent）协议
- [ ] AI Agent 架构设计

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
