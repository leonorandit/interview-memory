---
type: 因果型
domain: 人工智能
anchor: 精
rhyme: 粗召精排，双快交准
created: 2025-06-13
---

# RAG 中的 Rerank

## 速记卡片
`精 | 粗召精排，双快交准 | 先粗后精`

## 原始知识
- RAG检索分两步：召回（Retrieval）和重排（Rerank）
- 召回阶段：用向量相似度或BM25快速召回Top-K候选文档（追求速度，可能不精准）
- Rerank阶段：用更精确的交叉编码器（Cross-Encoder）对召回结果重新打分排序，取Top-N送给LLM
- 双塔模型（Bi-Encoder）：查询和文档分别编码，点积算相似度，速度快但交互浅
- 交叉编码器（Cross-Encoder）：查询和文档联合输入，深度交互后打分，更准但更慢
- **易混点**：Rerank vs 召回、Rerank vs 传统排序算法
- **追问点**：为什么不用Cross-Encoder直接召回？Rerank模型怎么训练？Rerank的延迟问题？

## 顺口溜
**粗召精排，双快交准**

## 单字锚点 + 防崩推导
- **锚点字**：**精**
- **扩展口诀**：**粗快精准**
- **为什么选它**：Rerank的核心价值就是"精"——没有精排，召回结果噪声大，LLM回答质量差。
- **防崩推导**：
  - 精 → 为什么需要？召回追求速度，结果不够准，需要二次筛选
  - 精 → 用什么？Cross-Encoder（交叉编码器），查询和文档联合编码
  - 精 → 怎么做？双塔召回Top-100 → Cross-Encoder重排取Top-10 → 送给LLM
  - 反过来：不精 → 召回噪声大 → LLM幻觉/回答偏差

## 一字一画面
- **精** —— 像**海选后的评委打分**：先海选挑出100人，再由专业评委逐个仔细对比，选出真正的前10名。（本质：Rerank是对召回结果的精细化重排序）
- **粗** —— 像**海选投票**：观众快速投票，效率高但可能看走眼。（本质：召回阶段用Bi-Encoder快速筛选，追求速度和召回率）
- **双** —— 像**两个裁判分别打分再相加**：查询和文档各自编码，点积算相似度，速度快但交互少。（本质：Bi-Encoder双塔模型，查询和文档独立编码）
- **交** —— 像**两个裁判面对面讨论**：查询和文档一起输入模型，深度交互后打分，更准但慢。（本质：Cross-Encoder交叉编码器，查询和文档联合编码）
- **准** —— 像**评委看完表演后给综合评分**：不是只看人气，而是真正理解内容质量。（本质：Rerank模型理解查询和文档的深层语义关联）

## 面试话术
- 问什么是Rerank → "Rerank是RAG流程中的**精排阶段**，口诀是**粗召精排，双快交准**。RAG检索分两步：第一步**粗排召回**，用双塔模型快速召回Top-K候选文档，追求速度；第二步**精排重排**，用Cross-Encoder对召回结果重新打分排序，取更精准的Top-N送给LLM。因为双塔模型把查询和文档分别编码，速度快但交互不够深；Cross-Encoder把查询和文档一起输入，能捕捉更细粒度的语义关系，打分更准但慢。所以先用双塔快速粗筛，再用Cross-Encoder精排，兼顾效率和效果。"
- 问具体怎么做 → "具体做法是：1）文档切分后用Bi-Encoder编码入库；2）用户提问时，计算查询和文档的向量相似度，召回Top-100；3）把这100个（查询，文档）对输入Cross-Encoder，输出相关性分数；4）按分数重排，取Top-10作为上下文送给LLM生成回答。常用的Rerank模型有BGE-Reranker、Cohere Rerank等。"

## 防混补丁
- 容易和"传统排序算法"搞混。Rerank不是简单的按分数排序，而是用**深度模型重新计算相关性分数**。补丁：**不是简单排序，是重新打分**。

## 追问预演
- **问**：为什么不用Cross-Encoder直接召回？→ Cross-Encoder需要把查询和每个文档一起输入，计算复杂度O(N)，如果文档库有百万级，直接召回太慢。Bi-Encoder是O(1)查向量库，速度可控。
- **问**：Rerank模型怎么训练？→ 用（查询，正样本，负样本）三元组训练，正样本是相关文档，负样本是不相关文档，用对比学习或交叉熵损失优化。
- **问**：Rerank的延迟问题怎么解决？→ 控制召回数量（如只重排Top-50）、模型量化/蒸馏、异步预计算、缓存热门查询结果。

## 手撕代码（伪代码）

```python
# 双塔召回（Bi-Encoder）- 粗排，快
query_embedding = bi_encoder.encode(query)
candidate_docs = vector_db.search(query_embedding, top_k=100)

# 精排（Cross-Encoder）- 重排，准
scores = []
for doc in candidate_docs:
    score = cross_encoder.predict(query, doc.text)
    scores.append((doc, score))

# 重排取Top-N
top_docs = sorted(scores, key=lambda x: x[1], reverse=True)[:10]

# 送给LLM生成
prompt = build_prompt(query, top_docs)
answer = llm.generate(prompt)
```

## 关联知识点
- [ ] [RAG的主要流程](RAG的主要流程.md)
- [ ] 向量检索（Embedding + 向量数据库）
- [ ] 注意力机制（Cross-Encoder的核心）

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
