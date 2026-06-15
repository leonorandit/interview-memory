---
type: 列举型/对比型
domain: 人工智能
anchor: 检
rhyme: 检索分类记心间
created: 2026-06-14
---

## 速记卡片
`检 | 检索分类记心间 | 各类型特点差异`

## 原始知识
- **VectorStore**：语义匹配，最常用
- **BM25**：关键词权重，SparseRetriever
- **MultiQuery**：一拆多问，覆盖更广
- **ParentDocument**：小块索引大块出
- **SelfQuery**：LLM把问题转过滤条件
- **Ensemble**：多路召回再融合
- **ContextualCompression**：压缩去冗余
- **多路vs单路**：精度与召回的平衡

## 顺口溜
检索分类记心间

## 单字锚点 + 防崩推导
- **锚点字**：检
- **扩展口诀**：检索分类记心间
- **为什么选它**："检"直接对应"检索器"，一听就定位到Retriever题型
- **防崩推导**：检→检索器→有哪些类型→向量/关键词/多查询/父子文档/自查询/集成/压缩→分别对应什么场景

## 一字一画面
**检** —— 像**安检口的不同通道**：蓝色通道刷人脸（向量语义），红色通道查证件（关键词匹配），绿色通道拆行李再合并（父子文档），快速通道多路并联（Ensemble）（本质：Retriever是信息入口，类型决定检索策略）

## 面试话术
- "LangChain的Retriever类型很多，最常用的是VectorStoreRetriever做语义检索，BM25做关键词检索，还有MultiQueryRetriever通过扩展查询来提升召回，ParentDocumentRetriever用小chunk索引、大chunk返回保持上下文完整。"
- "实际项目中我会根据数据特点组合使用，比如先用EnsembleRetriever多路召回，再用ContextualCompressionRetriever压缩冗余内容。"

## 防混补丁
- VectorStoreRetriever vs BM25：前者是语义相似，后者是词频统计，不是一回事
- ParentDocumentRetriever不是返回父文档的全部，而是按需加载
- MultiQueryRetriever是查询扩展，不是结果融合，融合是EnsembleRetriever干的

## 追问预演
- Q：什么时候用BM25不用向量检索？A：短文本、关键词明确、专业术语密集的场景
- Q：ParentDocumentRetriever的原理？A：子块建索引，检索后找对应父文档返回，兼顾精度和上下文
- Q：ContextualCompression怎么压缩？A：用LLM或抽取模型去掉无关段落，只保留相关内容

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
