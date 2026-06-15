---
type: 列举型
domain: 人工智能
anchor: 集
rhyme: 百川归海集万物
created: 2026-06-14
---

## 速记卡片
`集 | 百川归海集万物 | 模块化插件生态`

## 原始知识
- **模型层**：OpenAI、Anthropic、HuggingFace、Ollama、VLLM
- **向量库**：Chroma、FAISS、Pinecone、Milvus、Weaviate、PGVector
- **工具层**：Google Search、SerpAPI、Wikipedia、Arxiv
- **框架层**：LlamaIndex、AutoGPT、Flowise
- **存储层**：Redis、Postgres、MongoDB、SQL
- **部署层**：FastAPI、Streamlit、LangServe
- **监控层**：LangSmith、Langfuse、WandB
- **核心机制**：BaseModel、BaseRetriever、BaseTool接口统一

## 顺口溜
百川归海集万物

## 单字锚点 + 防崩推导
- **锚点字**：集
- **扩展口诀**：百川归海集万物
- **为什么选它**："集"是"集成"的核心字，一听就知道是讲LangChain生态对接
- **防崩推导**：集→集成→和谁集成→模型端（OpenAI/HF/Ollama）、向量库（Chroma/FAISS/Pinecone）、工具（Search/Arxiv）、框架（LlamaIndex）、存储（Redis/Postgres）、部署（FastAPI/LangServe）→统一接口是BaseXxx

## 一字一画面
**集** —— 像**乐高积木的万能接口**：不管来的是红色砖（OpenAI）、蓝色板（HuggingFace）、绿色轮（向量库），凸点和凹孔都一样（统一Base接口），咔哒一声就拼上（本质：LangChain用抽象接口把不同厂商的组件标准化，用户无缝切换）

## 面试话术
- "LangChain的设计哲学就是模块化集成，它通过统一的抽象接口把不同厂商的组件接进来：模型层用BaseLLM/BaseChatModel兼容OpenAI、HuggingFace、Ollama；向量库通过BaseVectorStore接Chroma、Milvus、Pinecone；工具层BaseTool可以接搜索、数据库、API。"
- "部署上可以用LangServe把chain打包成REST服务，监控用LangSmith做全链路追踪，和其他框架比如LlamaIndex也能混用，各自负责擅长的环节。"

## 防混补丁
- LangChain不是绑定OpenAI，切换模型只需改一行初始化代码
- 向量库选择要看规模和运维，不是LangChain替你做决定
- LangServe是部署工具，不是运行时引擎

## 追问预演
- Q：从OpenAI切到本地模型要改多少代码？A：基本就改llm=ChatOpenAI()为llm=ChatOllama()，chain逻辑不用动
- Q：LlamaIndex和LangChain什么关系？A：可以互补，LlamaIndex偏检索和索引，LangChain偏链式和Agent，项目里可以混用
- Q：自研模型怎么接入？A：实现BaseLLM或BaseChatModel的几个抽象方法，主要是_generate和_agenerate

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
