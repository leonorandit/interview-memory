---
type: 列举型
domain: 人工智能
anchor: 你
rhyme: 模工记顾，四特性
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 模 | 模工记顾，四特性 | 模型调用+工具+记忆+Advisor扩展 |

## 原始知识

- **Spring AI核心特性**：ChatClient统一调用多种模型、ChatMemory对话记忆管理、Function Calling工具调用、Advisor模块化扩展、RAG检索增强
- **开发流程**：引入spring-ai-starter、配置模型API Key、定义System Prompt和User Prompt、集成ChatMemory保存历史、使用@Tool注册工具、Advisor链组合RAG和记忆
- **实际应用**：客服机器人、文档问答、代码助手

## 顺口溜

模型统，一键换；
工具招，@Tool上；
记忆存，不忘样；
Advisor，链上绑；
RAG来，文档帮。

## 单字锚点 + 防崩推导

- **锚点字**：模
- **扩展口诀**：模工记顾，四特性
- **为什么选它**：Spring AI的核心是"统一模型调用"，"模"字直接点出框架价值——换模型不用改代码
- **推导链**：
  1. 看到"模" → 想到"模型"，Spring AI的ChatClient统一封装多模型调用
  2. "模工记顾" → 模=ChatClient模型调用，工=Function Calling工具调用，记=ChatMemory记忆管理，顾=Advisor模块化扩展
  3. "四特性" → 核心四大特性，RAG通过Advisor链集成

## 一字一画面

- **模** —— 像[万能遥控器]：黑色遥控器上有红绿蓝黄四个按键，按一下就能切换电视、空调、机顶盒（本质：ChatClient统一接口，切换模型只改配置不改代码）
- **工** —— 像[机器人伸出的机械臂]：银色金属臂精准抓起零件，"咔"地安装到位（本质：Function Calling让模型能调用外部API和工具）
- **记** —— 像[海马体形状的记忆芯片]：淡蓝色芯片上闪烁着神经突触的图案，信息持久存储（本质：ChatMemory管理多轮对话历史，模型不会"失忆"）
- **顾** —— 像[俄罗斯套娃组成的流水线]：一个套娃打开里面还有另一个，层层处理再输出（本质：Advisor链模块化组合RAG、记忆、日志等功能）
- **R** —— 像[图书馆的检索卡片柜]：棕色木抽屉上贴满标签，抽出一格就能找到对应书籍位置（本质：RAG检索增强，从知识库找相关文档喂给模型）

## 面试话术

> "我们在Agent项目里用Spring AI主要是图它的统一抽象和模块化。通过ChatClient一层封装，OpenAI、Claude、通义千问切换起来只改配置。功能上重点用了四个特性：ChatMemory做对话记忆，多轮问答不会断片；Function Calling用@Tool注解注册工具，让Agent能查数据库、调API；Advisor链把RAG检索和记忆管理串起来；最后System Prompt和User Prompt分层管理，业务逻辑很清晰。"

## 防混补丁

容易把"Spring AI"和"LangChain"搞混定位？一句补丁：
> "LangChain是瑞士军刀功能全，Spring AI是Spring生态原生集成爽。"

## 追问预演

| 追问 | 简要答案 |
|------|----------|
| ChatMemory怎么管理长对话？ | 设最大token阈值，超限时摘要压缩或滑动窗口截断 |
| Advisor链的执行顺序怎么控制？ | 按添加顺序执行，可通过order属性调整优先级 |
| Function Calling失败怎么处理？ | 捕获异常返回错误描述给模型，让模型决定重试或Fallback |
| 和LangChain相比为什么选Spring AI？ | 团队是Java技术栈，Spring AI集成更原生，依赖管理更简洁 |

## 关联知识点

- Spring Boot Starter
- Function Calling / Tool Use
- RAG（Retrieval-Augmented Generation）
- Vector Database
- ReAct Agent

## 复习记录

- [ ] 第1次
- [ ] 第2次
- [ ] 第3次
- [ ] 第4次
