---
type: 列举型
domain: 人工智能/MCP
anchor: 通
rhyme: 标推两通
created: 2026-06-18
---

# MCP 协议通常采用什么通信方式？

## 速记卡片
`通 | 标推两通 | 两种通信`

## 原始知识
- **stdio**（标准输入输出）：本地进程间通信，Host 启动 Server 子进程，双向 JSON-RPC 消息通过 stdin/stdout 传输
- **SSE**（Server-Sent Events）：基于 HTTP 的服务器推送事件，Client 通过 HTTP POST 发送请求，Server 通过 SSE 流返回响应
- **Streamable HTTP**：MCP 新规范引入的传输方式，通过 HTTP POST 发送请求并接收响应，是 SSE 的演进
- 底层消息格式：**JSON-RPC 2.0**
- 选择原则：本地工具用 stdio，远程服务用 SSE/HTTP
- **易混点**：SSE vs WebSocket、stdio vs 管道
