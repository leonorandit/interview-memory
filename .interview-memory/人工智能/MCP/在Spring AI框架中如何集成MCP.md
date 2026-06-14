---
type: 因果型
domain: 人工智能
anchor: 集
rhyme: 框配客，Spring连
created: 2025-06-13
---

# 在 Spring AI 框架中如何集成 MCP

## 速记卡片
`集 | 框配客，Spring连 | Spring AI集成`

## 原始知识
- Spring AI MCP集成方式：
  - **框**（框架）- Spring AI提供MCP Starter依赖
  - **配**（配置）- application.yml配置MCP Server连接
  - **客**（Client）- 注入McpClient调用工具
  - **Spring连** - Spring生态无缝集成
- 步骤：
  1. 添加 `spring-ai-mcp-client-spring-boot-starter` 依赖
  2. 配置 `spring.ai.mcp.client.servers` 列表
  3. 注入 `McpClient` 或 `McpSyncClient`
  4. 在ChatClient/Agent中调用工具
- **易混点**：Spring AI MCP vs 原生MCP SDK
- **追问点**：支持同步和异步吗？怎么配置多个Server？

## 顺口溜
**框配客，Spring连**

## 单字锚点 + 防崩推导
- **锚点字**：**集**
- **扩展口诀**：**框配客，Spring连**
- **为什么选它**：面试题问"如何集成"，"集"是核心动作。
- **防崩推导**：
  - 集（集成）→ Spring AI集成MCP
  - 框（框架）→ Spring AI框架
  - 配（配置）→ 配置文件
  - 客（Client）→ MCP Client
  - Spring连 → Spring生态连接

## 一字一画面
- **框** —— 像**乐高底板**：给积木提供统一底座。（本质：Spring AI框架）
- **配** —— 像**插电源**：插上就能用。（本质：配置即集成）
- **客** —— 像**遥控器**：控制各种设备。（本质：MCP Client）
- **Spring连** —— 像**弹簧连接**：无缝对接。（本质：Spring生态集成）

## 面试话术
- 问怎么集成 → "Spring AI集成MCP口诀是**框配客，Spring连**。**框**——Spring AI提供MCP Starter框架；**配**——application.yml配置MCP Server连接信息；**客**——注入McpClient调用工具；**Spring连**——和Spring生态无缝集成。具体三步：加依赖starter→配Server地址→注入Client调用。支持同步（McpSyncClient）和异步（McpAsyncClient），可配置多个Server。"

## 防混补丁
- 容易觉得"要写很多代码"。其实Spring AI是配置驱动。补丁：**Spring AI是自动挡，原生SDK是手动挡**。"

## 关联知识点
- [ ] [什么是MCP协议](什么是MCP协议.md)
- [ ] [MCP的工作流程是什么](MCP的工作流程是什么.md)

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
