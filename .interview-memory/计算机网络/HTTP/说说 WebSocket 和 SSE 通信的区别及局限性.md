---
type: 对比型
domain: 计算机网络
anchor: 双
rhyme: Web双全，SSE单轻
created: 2026-06-18
---

# 说说 WebSocket 和 SSE 通信的区别及局限性

## 速记卡片
`双 | Web双全，SSE单轻 | 双工vs单工`

## 原始知识
- **WebSocket**：全双工通信，基于 TCP，需 HTTP 101 协议升级，ws/wss 协议
- **SSE**：服务器单向推送，基于标准 HTTP，text/event-stream，EventSource API
- 核心区别：
  - **双