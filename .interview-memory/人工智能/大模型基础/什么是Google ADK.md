---
type: 列举型
domain: 人工智能
anchor: 编
rhyme: 搭编工话部
created: 2025-06-13
---

# 什么是 Google ADK

## 速记卡片
`编 | 搭编工话部 | 首字串联`

## 原始知识
- Google ADK（Agent Development Kit）是 Google 开源的 Agent 开发框架
- 支持 Python 和 Java
- 核心功能：
  1. **Agent 搭建**（Build）- 快速构建单 Agent/多 Agent 系统
  2. **多 Agent 编排**（Orchestration）- 顺序、并行、循环、条件等编排模式
  3. **工具集成**（Tools）- Function Calling、REST API、数据库等
  4. **会话管理**（Session）- 内置状态管理，保持上下文连续性
  5. **部署支持**（Deploy）- 本地运行 + 部署到 Vertex AI/Google Cloud
- **易混点**：ADK vs LangChain/LlamaIndex、ADK vs MCP/A2A
- **追问点**：ADK支持哪些编排模式？和 Vertex AI 什么关系？

## 顺口溜
**搭编工话部**

## 单字锚点 + 防崩推导
- **锚点字**：**编**
- **扩展口诀**：**ADK编工话**
- **为什么选它**：ADK 的核心竞争力是**多 Agent 编排**（Orchestration），"编"是灵魂。
- **防崩推导**：
  - 编（多Agent编排）→ ADK的核心卖点是让多个Agent协同工作
  - 搭（Agent搭建）→ 先搭出Agent才能编排
  - 工（工具集成）→ Agent需要调用外部工具才能干活
  - 话（会话管理）→ 多轮对话需要记住上下文
  - 部（部署支持）→ 开发完要部署到线上

## 一字一画面
- **搭** —— 像**搭乐高**：用现成的积木块快速拼出各种Agent。（本质：Agent构建）
- **编** —— 像**导演调度演员**：让多个Agent按顺序或并行执行任务，互相配合。（本质：多Agent编排）
- **工** —— 像**工具腰带**：Agent可以调用函数、API、数据库等各种外部工具。（本质：工具集成）
- **话** —— 像**聊天记录**：记住之前的对话，保持上下文连续性。（本质：会话管理）
- **部** —— 像**快递发货**：本地开发完后，一键部署到云端运行。（本质：部署支持）

## 面试话术
- 问什么是ADK → "Google ADK是Google开源的Agent开发工具包，口诀是**搭编工话部**。**搭**——快速搭建单Agent或多Agent系统；**编**——支持多种编排模式，如顺序、并行、循环等；**工**——内置工具集成，支持Function Calling、REST API等；**话**——内置会话管理，保持上下文连续性；**部**——支持本地运行和云端部署。ADK用Python/Java编写，可以部署到Vertex AI。"
- 问ADK和LangChain区别 → "LangChain更侧重链式调用和工具集成，像一条流水线；ADK更侧重多Agent编排和企业级部署，像一个导演组调度多个演员。口诀：**LangChain是工具链，ADK是导演组**。"

## 防混补丁
- 容易和"LangChain/LlamaIndex"搞混。LangChain侧重链式调用，ADK侧重多Agent编排。补丁：**LangChain是工具链，ADK是导演组**。
- 容易和"MCP/A2A"搞混。MCP/A2A是协议标准，ADK是实现框架（ADK内置支持A2A协议）。补丁：**MCP/A2A是规矩，ADK是干活的**。

## 追问预演
- **问**：ADK支持哪些编排模式？→ 顺序（Sequential）、并行（Parallel）、循环（Loop）、条件（Conditional）等。
- **问**：ADK和Vertex AI什么关系？→ ADK可以本地开发和测试，然后部署到Vertex AI Agent Engine上运行。
- **问**：ADK内置支持A2A吗？→ 是的，ADK原生支持A2A协议，方便不同Agent之间互相发现和协作。

## 手撕代码
不适用（框架概念型）。

## 关联知识点
- [ ] [A2A协议的五大设计原则](A2A协议的五大设计原则.md)
- [ ] MCP协议
- [ ] [RAG的主要流程](RAG的主要流程.md)

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
