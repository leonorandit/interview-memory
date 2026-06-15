---
type: 列举型
domain: 人工智能
anchor: 设
rhyme: 找宣管安用
created: 2025-06-13
---

# A2A 协议的五大设计原则

## 速记卡片
`管 | 找宣管安用 | 首字串联`

## 原始知识
- A2A（Agent-to-Agent Protocol）是Google推出的开放协议，用于不同AI Agent互相通信协作
- 五大设计原则：
  1. **Agent Discovery**（Agent发现）- Agent可以被发现和识别
  2. **Capability Exposure**（能力宣告）- Agent暴露自己能做什么
  3. **Task Management**（任务管理）- 以任务为核心进行交互和协作
  4. **Secure Collaboration**（安全协作）- 支持认证、授权、加密等安全机制
  5. **User in the Loop**（用户参与）- 用户始终处于控制之中
- **易混点**：A2A vs MCP、A2A vs Function Calling
- **追问点**：A2A基于什么协议传输？Agent Card是什么？怎么实现认证？

## 顺口溜
**找宣管安用**

## 单字锚点 + 防崩推导
- **锚点字**：**管**
- **扩展口诀**：**管要找宣安用**
- **为什么选它**：A2A的核心是Agent之间的"任务协作管理"，"管"是中心，其他都是支撑。
- **防崩推导**：
  - 管（Task Management任务管理）→ A2A的核心是Agent协作完成任务
  - 找（Agent Discovery发现）→ 先找到对方Agent
  - 宣（Capability Exposure能力宣告）→ 告诉对方我能做什么
  - 安（Secure Collaboration安全）→ 协作过程要安全
  - 用（User in the Loop用户参与）→ 最终用户要知情和控制

## 一字一画面
- **找** —— 像**在人才市场找人**：先找到有哪些Agent可以协作。（本质：Agent Discovery）
- **宣** —— 像**求职者展示简历**：告诉对方我有什么技能、能做什么任务。（本质：Capability Exposure）
- **管** —— 像**项目经理分配任务**：把大任务拆成小任务，分配给不同人，跟踪进度。（本质：Task Management）
- **安** —— 像**签合同+保密协议**：协作前确认身份，过程中信息加密。（本质：Secure Collaboration）
- **用** —— 像**老板最终签字**：关键决策必须老板（用户）确认，不能Agent自作主张。（本质：User in the Loop）

## 面试话术
- 问五大原则 → "A2A协议的五大设计原则，口诀是**找宣管安用**。**找**——Agent Discovery，Agent可以被发现和识别；**宣**——Capability Exposure，Agent通过Agent Card暴露自己能做什么；**管**——Task Management，以任务为核心进行交互和协作；**安**——Secure Collaboration，支持认证、授权、加密等安全机制；**用**——User in the Loop，用户始终处于控制之中，关键决策需用户确认。"
- 问A2A和MCP区别 → "MCP是Model Context Protocol，解决Agent和工具（Tool）的连接问题；A2A是Agent-to-Agent Protocol，解决Agent和Agent之间的协作问题。口诀：**MCP管工具，A2A管协作**。"

## 防混补丁
- 容易和"MCP协议"搞混。MCP是Agent-Tool协议，A2A是Agent-Agent协议。补丁：**MCP管工具，A2A管协作**。
- 容易和"Function Calling"搞混。Function Calling是单个Agent调用工具，A2A是多个Agent互相协作。补丁：**Function Call是自己干活，A2A是找人一起干活**。

## 追问预演
- **问**：A2A基于什么传输协议？→ 基于HTTP和JSON，使用SSE（Server-Sent Events）或Webhook进行实时通信。
- **问**：Agent Card是什么？→ Agent Card是JSON格式的元数据文件，描述Agent的能力、认证方式、接口端点等信息，相当于Agent的"简历"。
- **问**：怎么实现认证？→ 基于OAuth 2.0或API Key，支持企业级身份验证和授权。

## 手撕代码
不适用（概念型协议）。

## 关联知识点
- [ ] [RAG的主要流程](RAG的主要流程.md)
- [ ] MCP协议
- [ ] Function Calling

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
