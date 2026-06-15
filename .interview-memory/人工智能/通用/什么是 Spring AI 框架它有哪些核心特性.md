---
type: 列举型
domain: 人工智能
anchor: 特
rhyme: 框模工顾，四特性
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 框 | 框模工顾，四特性 | Spring生态的AI框架，统一抽象多种模型，八大核心能力 |

## 原始知识

- **Spring AI定义**：Spring生态的AI应用开发框架，简化AI应用开发，统一抽象多种模型
- **核心特性一**：ChatClient统一调用多种LLM
- **核心特性二**：ChatMemory对话记忆管理
- **核心特性三**：Function Calling工具调用
- **核心特性四**：Advisor模块化扩展
- **核心特性五**：RAG检索增强
- **核心特性六**：Structured Output结构化输出
- **核心特性七**：Embedding向量嵌入
- **核心特性八**：ETL数据加载
- **Spring生态集成**：Spring Boot自动配置、依赖注入、测试支持

## 顺口溜

框模工顾，四特性，
Chat记忆函顾问。

（框架、模型、工具、顾问四大特性，ChatClient、ChatMemory、Function、Advisor要记全。）

## 单字锚点 + 防崩推导

**锚点字**：框

**扩展口诀**：框模工顾，四特性

**为什么选它**：Spring AI首先是一个"框架"——框。记住框，就记住它是Spring生态的一部分，有统一抽象和自动配置。

**推导链**：
1. 框 → Spring AI框架：Spring生态的AI开发框架
2. 模 → 模型（Model）：ChatClient统一封装多种LLM，切换模型只改配置
3. 工 → 工具（Tool）：Function Calling让模型调程序函数
4. 顾 → 顾问（Advisor）：模块化扩展点，插入重读、日志、限流等逻辑
5. 四特性 → 框模工顾之外，还有：ChatMemory记忆、RAG检索、Structured Output结构化、Embedding向量、ETL数据
6. Spring生态 → Boot自动配置、DI依赖注入、测试支持，Java开发者零门槛

## 一字一画面

- **框** —— 像乐高底板：所有积木（组件）都插在一个标准底板上，组合稳固（本质：统一抽象，生态兼容）
- **模** —— 像万能遥控器：一个遥控器控制电视、空调、音响，按品牌切换（本质：ChatClient统一接口，底层模型可替换）
- **工** —— 像瑞士军刀：刀身（模型）弹出螺丝刀（函数），自己不会拧但会指挥（本质：Function Calling，模型发令程序执行）
- **顾** —— 像酒店管家：在你入住前后加服务，送水果、整理房间，不影响你本身行程（本质：Advisor AOP式扩展）
- **忆** —— 像聊天软件的聊天记录：关对话框再打开，上下文还在（本质：ChatMemory持久化对话状态）

## 面试话术

"Spring AI是Spring团队出的AI应用开发框架，核心思路是把各种大模型能力封装成Spring风格的组件。比如ChatClient统一调用不同厂商的LLM，Function Calling让模型能调我们的Java方法，Advisor机制可以在调用链里插扩展逻辑。还有ChatMemory管对话记忆、RAG做检索增强、BeanOutputParser做结构化输出这些。最大的优势就是对Spring Boot用户来说，配置一下依赖就能用，自动配置和依赖注入都很自然。"

## 防混补丁

- **容易和什么搞混**：容易和LangChain混为一谈——LangChain是Python为主，Spring AI是Java/Spring生态原生，设计哲学不同。
- **补丁口诀**：Python找LangChain，Java用Spring AI，生态不同别乱配。

## 追问预演

| 追问 | 简要答案 |
|------|----------|
| Spring AI和LangChain区别？ | Spring AI是Java原生、Spring生态风格；LangChain是Python为主、链式编排。两者设计哲学不同 |
| ChatClient怎么切换模型？ | 改配置文件里的模型提供商和API Key，代码层面接口不变，实现解耦 |
| Advisor能做什么？ | 日志记录、重试机制、Re-Reading、限流、缓存等，像Spring AOP的Around Advice |
| ETL数据加载做什么？ | 把PDF、网页、数据库等数据源加载、分割、向量化，为RAG准备知识库 |
| Spring AI支持哪些模型？ | OpenAI、Azure、Anthropic、Ollama、智谱、文心等，持续扩展中 |

## 关联知识点

- Spring Boot Auto-Configuration
- ChatClient / ChatModel / EmbeddingModel
- Function Calling / Tool Callback
- Advisor / Re-ReadingAdvisor
- RAG / Vector Store / DocumentReader
- BeanOutputParser / Structured Output

## 复习记录

- 第1次：____/____/____
- 第2次：____/____/____
- 第3次：____/____/____
- 第4次：____/____/____
