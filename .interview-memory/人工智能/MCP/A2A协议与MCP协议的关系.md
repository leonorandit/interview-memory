---
type: 对比型
domain: 人工智能
anchor: 乙
rhyme: 工协分，互补生
created: 2025-06-13
---

# A2A 协议与 MCP 协议的关系

## 速记卡片
`分 | 工协分，互补生 | 工具vs协作`

## 原始知识
- MCP（Model Context Protocol）：Anthropic推出，**Agent-Tool协议**，标准化Agent与外部工具/数据源的通信
- A2A（Agent-to-Agent Protocol）：Google推出，**Agent-Agent协议**，标准化Agent之间的协作通信
- 关系：**分工不同，互补共生**，不是竞争关系
- 一个Agent可以同时使用：MCP调工具 + A2A和其他Agent通信
- **易混点**：MCP vs Function Calling、MCP vs 传统API
- **追问点**：能一起用吗？MCP和Function Calling什么关系？ADK支持MCP吗？

## 顺口溜
**工协分，互补生**

## 单字锚点 + 防崩推导
- **锚点字**：**分**
- **扩展口诀**：**工协分，互补生**
- **为什么选它**：面试官问"关系"，核心答案是"分工不同"，"分"一字点破本质。
- **防崩推导**：
  - 分（分工）→ MCP和A2A分工明确，不打架
  - 工（MCP管工具）→ Agent通过MCP调用外部工具（数据库、API、文件系统）
  - 协（A2A管协作）→ Agent通过A2A与其他Agent通信协作
  - 互补 → 两者不是竞争，是互补
  - 生（共生）→ 一个Agent可以同时用MCP和A2A

## 一字一画面
- **分** —— 像**分工合作**：一个人负责做饭（MCP），一个人负责送餐（A2A），各司其职。（本质：分工明确）
- **工** —— 像**工具箱**：MCP是Agent的工具箱，里面有螺丝刀、锤子等各种工具。（本质：MCP管工具调用）
- **协** —— 像**团队协作**：A2A是Agent之间的沟通方式，像同事之间发邮件、开会议。（本质：A2A管Agent协作）
- **补** —— 像**拼图**：两块拼图拼在一起才完整，单独一块都有缺失。（本质：互补关系）

## 面试话术
- 问关系 → "MCP和A2A的关系，口诀是**工协分，互补生**。**工**——MCP是Agent-Tool协议，管Agent调用外部工具；**协**——A2A是Agent-Agent协议，管Agent之间协作；**分**——两者分工不同，不是竞争关系；**互补生**——一个Agent可以同时用MCP调工具、用A2A和其他Agent通信，互相补充。比如一个客服Agent，用MCP查数据库，用A2A把复杂问题转给技术Agent。"
- 问MCP和Function Calling区别 → "Function Calling是模型层面的能力；MCP是在Function Calling之上的协议层，标准化了工具描述和调用方式。就像Function Calling是会说话，MCP是制定了'外交辞令'。"

## 防混补丁
- 容易和"传统API调用"搞混。MCP是标准化工具调用协议，传统API是每个服务各自定义接口。补丁：**MCP是万能转接头，传统API是专用插头**。
- 容易和"Function Calling"搞混。Function Calling是模型能力，MCP是协议标准。补丁：**Function Calling是会说话，MCP是定规矩**。

## 追问预演
- **问**：MCP和A2A能一起用吗？→ 能。一个Agent可以同时实现MCP Server（提供工具）和A2A Endpoint（与其他Agent通信）。
- **问**：MCP和Function Calling什么关系？→ Function Calling是模型层面的能力；MCP是在Function Calling之上的协议层，标准化了工具描述和调用方式。
- **问**：Google ADK支持MCP吗？→ ADK原生支持A2A，也可以通过适配器支持MCP。

## 手撕代码
不适用（协议对比概念型）。

## 关联知识点
- [ ] [A2A协议的工作原理](A2A协议的工作原理.md)
- [ ] [A2A协议的五大设计原则](A2A协议的五大设计原则.md)
- [ ] [什么是Google ADK](什么是Google ADK.md)

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
