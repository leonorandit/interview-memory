---
type: 流程型
domain: 人工智能
anchor: 搭
rhyme: 搭分存查，四步建
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 搭 | 搭分存查，四步建 | LangChain 文档问答 = 搭积木：加载 → 拆分 → 存入 → 查询 |

## 原始知识

- **加载**文档（Document Loader：PDF / Word / Markdown）
- **拆分**文本（Text Splitter：按字符 / Token / 语义切分）
- **嵌入**向量（Embedding Model：OpenAI / HuggingFace / 自研）
- **存储**向量（Vector Store：FAISS / Chroma / Milvus / Pinecone）
- **检索**召回（Retriever：TopK 相似度匹配）
- **组装**链条（LLM + Chain：RetrievalQA / ConversationalRetrievalQA）
- **实现**步骤：加载 → 拆分 → 嵌入存储 → 检索 → 组装 Chain → 输出答案

## 顺口溜

搭分存查，四步建（7 字）

## 单字锚点 + 防崩推导

- **锚点字**：搭
- **扩展口诀**：搭分存查，四步建
- **为什么选它**："搭" = 搭建 = 像搭乐高积木，模块化拼出完整问答系统
- **推导链**：
  1. 搭 → 搭建系统
  2. 搭建 → 四步流水线：搭（加载 + 拆分）、分（嵌入 + 存储）、存（Retriever 检索）、查（Chain 组装问答）
  3. 技术组件对齐：Document Loader + Text Splitter = 搭；Embedding + Vector Store = 分 / 存；Retriever + LLM + Chain = 查
  4. Chain 选型：**RetrievalQA**（单轮）、**ConversationalRetrievalQA**（多轮带历史记忆）

## 一字一画面

**搭** —— 像【拼乐高积木的手】：绿色底座是文档加载，蓝色中层是向量存储，红色顶层是问答链条，一块块按说明书拼接才算完工（本质：LangChain 是模块化组装框架）。

## 面试话术

"LangChain 搭文档问答就像搭积木，先加载文档拆成块，然后嵌入向量存进数据库，用户提问时检索相关片段，最后塞进 LLM 做问答，整个流程就是搭分存查四步，Chain 部分单轮用 RetrievalQA，多轮用 ConversationalRetrievalQA。"

## 防混补丁

容易和**直接用 LLM 问答**搞混？一句补丁：**搭字记积木，纯 LLM 没记忆，向量库是底座。**

## 追问预演

- **Q：文本为什么要拆分？**
  - A：超过窗口限制，且细粒度检索更精准，避免整篇文档噪声干扰。
- **Q：RetrievalQA 和 ConversationalRetrievalQA 区别？**
  - A：后者带历史记忆，适合多轮对话；前者只基于当前问题检索，适合单次问答。
- **Q：向量数据库怎么选型？**
  - A：本地轻量选 Chroma / FAISS，生产高并发选 Milvus / Pinecone / Weaviate。

## 关联知识点

- LangChain
- RAG（检索增强生成）
- Vector Database
- Embedding Model
- Text Splitter 策略（RecursiveCharacterTextSplitter 等）

## 复习记录

- 第 1 次：2026-06-13
- 第 2 次：
- 第 3 次：
- 第 4 次：
