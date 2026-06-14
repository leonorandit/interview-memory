---
type: 列举型
domain: 人工智能
anchor: 百
rhyme: 百O小，跨域长
created: 2025-06-13
---

# RAG 中的 Embedding Model 嵌入模型

## 速记卡片
`百 | 百O小，跨域长 | 常见模型`

## 原始知识
- 常见Embedding模型：
  - **百**（BGE）- 智源研究院，中文效果优秀，开源免费
  - **O**（OpenAI）- text-embedding-ada-002/3，英文强，商用API
  - **小**（小模型/轻量）- GTE、E5 Small，速度快，资源少
  - **跨**（跨语言）- M3E、LaBSE，支持多语言对齐
  - **域**（领域专用）- MedEmbed（医学）、CodeEmbed（代码）
  - **长**（长文本）- Jina Embeddings、BGE Long，支持长上下文
- **易混点**：Embedding模型 vs LLM
- **追问点**：BGE和OpenAI哪个好？怎么评测Embedding模型？

## 顺口溜
**百O小，跨域长**

## 单字锚点 + 防崩推导
- **锚点字**：**百**
- **扩展口诀**：**百O小，跨域长**
- **为什么选它**：BGE是国内最常用的开源Embedding模型，"百"是中文场景的首选。
- **防崩推导**：
  - 百（BGE）→ 智源开源，中文效果优秀
  - O（OpenAI）→ text-embedding-3，英文强，商用
  - 小（小模型）→ GTE、E5 Small，轻量快速
  - 跨（跨语言）→ M3E、LaBSE，多语言
  - 域（领域）→ 医学、法律、代码等专用模型
  - 长（长文本）→ Jina、BGE Long，支持长上下文

## 一字一画面
- **百** —— 像**百灵鸟**：中文说得特别好，国内最常用。（本质：BGE中文优秀）
- **O** —— 像**外籍专家**：英文特别好，但要付费请。（本质：OpenAI英文强，商用API）
- **小** —— 像**轻便摩托**：跑得快，不耗油。（本质：小模型轻量快速）
- **跨** —— 像**翻译官**：会说多国语言。（本质：跨语言模型）
- **域** —— 像**专科医生**：只看一种病，但看得特别准。（本质：领域专用模型）
- **长** —— 像**加长轿车**：能装更多人。（本质：长文本支持）

## 面试话术
- 问有哪些模型 → "常见的Embedding模型，口诀是**百O小，跨域长**。**百**——BGE，智源开源，中文效果优秀，国内最常用；**O**——OpenAI的text-embedding-3，英文强，商用API；**小**——GTE、E5 Small等轻量模型，速度快；**跨**——M3E、LaBSE等跨语言模型；**域**——医学、法律、代码等领域专用模型；**长**——Jina、BGE Long等支持长上下文的模型。选型要根据语言、场景、资源来定。"
- 问BGE和OpenAI怎么选 → "中文场景优先BGE（开源免费，中文优化好），英文或国际化场景用OpenAI（API方便，英文效果顶尖），资源受限场景用小模型（GTE、E5）。"

## 防混补丁
- 容易和"LLM"搞混。Embedding模型只负责把文本转向量，不生成回答；LLM负责生成。补丁：**Embedding是翻译官，LLM是作家**。

## 追问预演
- **问**：怎么评测Embedding模型？→ 用MTEB（大规模文本嵌入基准）排行榜，看 retrieval、classification、clustering 等任务得分。
- **问**：BGE有几个版本？→ BGE-small、BGE-base、BGE-large、BGE-m3（多语言）、BGE-reranker（重排）。
- **问**：可以微调Embedding模型吗？→ 可以，用领域数据微调能显著提升特定场景的检索效果。

## 手撕代码（加载Embedding模型）

```python
from sentence_transformers import SentenceTransformer

# BGE中文模型
model = SentenceTransformer('BAAI/bge-large-zh-v1.5')

# OpenAI Embedding（需API Key）
# from openai import OpenAI
# client = OpenAI()
# response = client.embeddings.create(input="Hello", model="text-embedding-3-small")

# GTE轻量模型
# model = SentenceTransformer('thenlper/gte-small')

embeddings = model.encode(["这是一个测试句子"])
```

## 关联知识点
- [ ] [RAG中的Embedding嵌入](RAG中的Embedding嵌入.md)
- [ ] [RAG中的Embedding模型选择](RAG中的Embedding模型选择.md)

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
