---
type: 流程型/因果型
domain: 人工智能
anchor: 增
rhyme: 检索增强生答案
created: 2026-06-14
---

## 速记卡片
`增 | 检索增强生答案 | 外挂知识库防幻觉`

## 原始知识
- **RAG定义**：检索增强生成，Retrieval-Augmented Generation
- **核心思想**：LLM+外部知识库
- **解决痛点**：幻觉、知识过时、私域数据
- **LangChain组件**：DocumentLoader→Splitter→Embedding→VectorStore→Retriever→Chain
- **典型Chain**：RetrievalQA、ConversationalRetrievalChain
- **流程**：加载→分块→向量化→检索→构造prompt→生成
- **关键类**：create_retrieval_chain

## 顺口溜
检索增强生答案

## 单字锚点 + 防崩推导
- **锚点字**：增
- **扩展口诀**：检索增强生答案
- **为什么选它**："增"是"增强"的核心字，直接对应RAG全称里的Augmented
- **防崩推导**：增→增强生成→为什么需要→LLM有幻觉和知识截止日期→怎么实现→LangChain里DocumentLoader加载→TextSplitter分块→Embedding→VectorStore→Retriever→chain.invoke()→输出答案

## 一字一画面
**增** —— 像**开卷考试翻参考书**：学生（LLM）坐在考场，旁边有一摞课本（知识库），遇到不会的立刻翻目录找相关页（向量检索），抄下关键段落再组织语言答题（增强生成），不会瞎编（本质：生成模型+实时检索=有依据的回答）

## 面试话术
- "RAG就是检索增强生成，给LLM外挂一个知识库，解决它幻觉和知识过时的问题；流程是把文档分块向量化存进向量数据库，用户提问时先检索相关片段，再和查询一起拼成prompt给LLM生成答案。"
- "在LangChain里最简单的方式是用create_retrieval_chain，把retriever和llm串起来；也可以自定义chain，加入重排序、记忆模块做更复杂的对话式RAG。"

## 防混补丁
- RAG不是微调，是用检索给LLM提供上下文，模型参数不变
- 向量数据库只是RAG的一部分，不是RAG本身
- LangChain的RetrievalQA是旧版API，新版推荐create_retrieval_chain

## 追问预演
- Q：RAG和微调哪个好？A：各有场景，知识频繁更新用RAG，需要改变模型行为用微调，也可以结合
- Q：RAG还是答不对怎么办？A：检查分块策略、检索精度、prompt设计，或加reranking、query改写
- Q：多轮对话RAG怎么做？A：用ConversationalRetrievalChain，把历史对话也作为检索条件或上下文

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
