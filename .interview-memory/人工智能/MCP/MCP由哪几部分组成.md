---
type: 列举型
domain: 人工智能
anchor: 主
rhyme: 主客服务
created: 2026-06-18
---

# MCP由哪几部分组成

## 速记卡片
`主 | 主客服务 | MCP四部分`

## 原始知识
- **主（Host）**：运行 AI 模型的宿主应用，如 Claude Desktop、IDE、Chat 客户端
- **客（Client）**：Host 内的协议客户端，与 Server 维持 1:1 连接
- **服（Server）**：轻量程序，通过标准化接口暴露具体能力（资源/工具/Prompt）
- **务（Data/Services）**：Server 对接的本地数据源和远程服务（API、数据库、文件等）
- **易混点**：MCP vs Function Calling、MCP vs 微服务
- **追问点**：传输协议、Server 暴露的能力类型、Host 与 Client 的关系

## 顺口溜
**主客服务**

## 单字锚点 + 防崩推导
- **锚点字**：**主**
- **扩展口诀**：**主客服务**
- **为什么选它**：MCP 的核心是 Host（主），没有宿主应用，客户端和服务端都无从谈起。
- **防崩推导**：
  - 主 → Host 宿主应用 → 运行 AI 模型的程序（Claude Desktop、IDE）
  - 客 → Client 客户端 → 住在 Host 里，帮 Host