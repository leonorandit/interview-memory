---
type: 对比型
domain: 人工智能
anchor: 调
rhyme: 调函直，接标扩
created: 2026-06-18
---

# Function Calling和MCP的区别及使用场景

## 速记卡片
`调 | 调函直，接标扩 | FC能力vsMCP协议`

## 原始知识
- **Function Calling**：大模型原生能力，生成过程中自主识别需调用的函数，输出结构化请求
- **MCP**：Model Context Protocol，开放协议标准，标准化 AI 与外部数据/工具的连接方式
- **Function Calling 场景**：对话实时调用、工具集固定、追求低延迟轻量集成、模型自主决策调用时机
- **MCP 场景**：多源异构接入、构建可复用工具生态、工具提供方独立开发、需要统一权限管理
- **核心差异**：FC 是**模型侧能力**（怎么调），MCP