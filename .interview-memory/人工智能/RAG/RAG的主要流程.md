---
type: 流程型
domain: 人工智能
anchor: 主
rhyme: 切存查排合生
created: 2025-06-13
updated: 2025-06-13
---

# RAG 的完整流程

## 速记卡片
`查 | 切存查排合生 | 先切存再查排后合生`

## 原始知识
- RAG = Retrieval-Augmented Generation（检索增强生成）
- 解决大模型知识截止、幻觉、无法访问私有数据的问题
- 完整流程六步：
  1. **切**（Chunk）- 文档切分成小块
  2. **存**（Store）- Embedding编码成向量，存入向量数据库
  3. **查**（Retrieve）- 用户提问，检索召回相关文档片段
  4. **排**（Rerank）- 对召回结果精细化重排序（可选但推荐）
  5. **合**（Combine）- 把检索结果+用户问题拼接成Prompt
  6. **生**（Generate）- 大模型基于上下文生成回答
- **易混点**：RAG vs Fine-tuning、RAG vs 传统搜索引擎
- **追问点**：文档怎么切分？向量数据库怎么选？检索策略有哪些？怎么评估RAG效果？

## 顺口溜
**切存查排合生**

## 单字锚点 + 防崩推导
- **锚点字**：**查**
- **扩展口诀**：**先切存，再查排，后合生**
- **为什么选它**：RAG的核心是"检索增强"，"查"是承上启下的关键环节。前面是准备工作（切+存），后面是生成工作（合+生），"查"在中间连接一切。
- **防崩推导**：
  - 查（检索）→ RAG的核心，承上启下
  - 切（切分）→ 先把长文档切成小块，才能编码和检索
  - 存（存储）→ 编码成向量存入数据库，查的时候才能找到
  - 排（重排）→ 检索结果可能不准，需要精排取最相关的
  - 合（合并）→ 把结果和问题拼成Prompt，给LLM上下文
  - 生（生成）→ LLM基于上下文生成回答

## 一字一画面
- **切** —— 像**切菜**：把整颗白菜切成小段，方便下锅。（本质：文档切分）
- **存** —— 像**放入冰箱保鲜**：切好的菜分类装进保鲜盒，贴上标签。（本质：Embedding编码+向量库存储）
- **查** —— 像**在冰箱里找食材**：根据要做的菜，找出需要的保鲜盒。（本质：向量检索/BM25召回）
- **排** —— 像**按新鲜度排序**：把找到的食材按新鲜程度排好，先用最好的。（本质：Rerank重排）
- **合** —— 像**把食材和菜谱放一起**：食材摆在案板上，菜谱摊在旁边，准备炒菜。（本质：Prompt构建，上下文拼接）
- **生** —— 像**厨师炒菜出锅**：根据食材和菜谱，炒出一盘菜。（本质：LLM生成回答）

## 面试话术
- 问完整流程 → "RAG的完整流程，口诀是**切存查排合生**。**切**——先把文档切分成小块；**存**——用Embedding模型编码成向量，存入向量数据库；**查**——用户提问时，检索召回最相关的文档片段；**排**——用Rerank模型对召回结果重排序，取最精准的；**合**——把检索结果和用户问题拼成Prompt；**生**——大模型基于上下文生成回答。整个流程就是：预处理→编码→存储→检索→重排→生成。"
- 问RAG vs Fine-tuning → "Fine-tuning是把知识'教'进模型权重里，适合通用能力；RAG是把知识'放'在库中检索，适合频繁更新的私有数据，成本低且可解释。"

## 防混补丁
- 容易和"传统搜索引擎"搞混。搜索引擎只返回相关链接；RAG是把检索结果喂给大模型，让模型**基于资料生成回答**。补丁：**搜索给链接，RAG给答案**。
- 容易和"长上下文模型"搞混。长上下文是把整本书塞给模型；RAG是只给最相关的几页。补丁：**长上下文是全书硬塞，RAG是精准投喂**。

## 追问预演
- **问**：文档怎么切分？→ 按固定长度、按段落、按语义（如使用NLTK、spaCy或专用切分模型）。
- **问**：向量数据库怎么选？→ 常见有Milvus（大规模）、PGVector（PostgreSQL扩展）、Pinecone（托管）、Weaviate（开源），选型考虑规模、延迟、成本。
- **问**：检索策略有哪些？→ 稠密检索（向量相似度）、稀疏检索（BM25）、混合检索（两者结合）、重排序（Rerank）。
- **问**：怎么评估RAG效果？→ 检索准确率（Recall@K）、生成质量（BLEU/ROUGE）、端到端评估（人工打分）、忠实度（是否 hallucination）。

## 手撕代码（RAG完整流程伪代码）

```python
# 1. 切（Chunk）
chunks = text_splitter.split(documents, chunk_size=500, overlap=50)

# 2. 存（Store）
embeddings = embedding_model.encode(chunks)
vector_db.insert(chunks, embeddings)

# 3. 查（Retrieve）
query_embedding = embedding_model.encode(query)
retrieved_docs = vector_db.search(query_embedding, top_k=100)

# 4. 排（Rerank）- 可选但推荐
scores = [reranker.predict(query, doc) for doc in retrieved_docs]
top_docs = sorted(zip(retrieved_docs, scores), key=lambda x: x[1], reverse=True)[:10]

# 5. 合（Combine）
prompt = build_prompt(query, top_docs)

# 6. 生（Generate）
answer = llm.generate(prompt)
```

## 关联知识点
- [ ] [RAG中的Rerank](RAG中的Rerank.md)
- [ ] [什么是混合检索](什么是混合检索.md)
- [ ] A2A协议的五大设计原则
- [ ] 什么是Google ADK

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
