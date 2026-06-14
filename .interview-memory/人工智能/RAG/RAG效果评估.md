---
type: 因果型
domain: 人工智能
anchor: 评
rhyme: 检生忠，人机评
created: 2025-06-13
---

# RAG 调优后的效果评估

## 速记卡片
`评 | 检生忠，人机评 | 三维评估`

## 原始知识
- RAG效果评估三个维度：
  1. **检**（检索质量）- Recall@K、MRR、NDCG、检索准确率
  2. **生**（生成质量）- BLEU、ROUGE、BERTScore、流畅度
  3. **忠**（忠实度）- Faithfulness（答案是否基于上下文）、Answer Relevance、Context Relevance
- 评估方法：
  - **人**（人工评估）- 最准但慢，A/B测试、人工打分
  - **机**（自动评估）- LLM-as-a-Judge、RAGAS框架、TruLens
- **易混点**：检索准确率 vs 生成质量
- **追问点**：LLM-as-a-Judge原理？RAGAS是什么？怎么处理无标准答案的情况？

## 顺口溜
**检生忠，人机评**

## 单字锚点 + 防崩推导
- **锚点字**：**评**
- **扩展口诀**：**三维度，人机评**
- **为什么选它**：面试题的核心是"效果评估"，"评"是总纲。
- **防崩推导**：
  - 评（评估）→ 从三个维度评估RAG效果
  - 检（检索）→ 检索准不准？Recall@K、MRR
  - 生（生成）→ 生成好不好？BLEU、ROUGE、流畅度
  - 忠（忠实）→ 答案是否忠于上下文？Faithfulness
  - 人（人工）→ 人工评估，最准但成本高
  - 机（自动）→ LLM-as-a-Judge、RAGAS，快但可能有偏

## 一字一画面
- **检** —— 像**点名**：要看叫到的人对不对，有没有漏叫。（本质：检索质量）
- **生** —— 像**作文打分**：语言流畅、结构完整、用词准确。（本质：生成质量）
- **忠** —— 像**测谎仪**：回答是不是根据资料说的，有没有瞎编。（本质：忠实度）
- **人** —— 像**专家阅卷**：准但慢，贵。（本质：人工评估）
- **机** —— 像**自动阅卷机**：快但可能误判。（本质：自动评估）

## 面试话术
- 问效果评估 → "RAG效果评估口诀是**检生忠，人机评**。**检**——检索质量，看Recall@K、MRR；**生**——生成质量，看BLEU、ROUGE、流畅度；**忠**——忠实度，看Faithfulness、Answer Relevance。评估方法分两种：**人工**评估最准但慢，适合关键场景；**自动**评估用LLM-as-a-Judge或RAGAS框架，快但可能有偏。实际项目中通常是两者结合。"

## 防混补丁
- 容易只看生成质量忽略检索质量。检索差，生成再好也是胡说。补丁：**检索是地基，生成是楼房**。

## 追问预演
- **问**：LLM-as-a-Judge是什么？→ 用一个LLM来评估另一个LLM的输出，比如让GPT-4给回答打分。
- **问**：RAGAS是什么？→ 一个开源RAG评估框架，自动计算Faithfulness、Answer Relevance、Context Relevance等指标。
- **问**：无标准答案怎么评估？→ 用LLM-as-a-Judge或人工评估相关性、忠实度，不依赖标准答案。

## 手撕代码（RAGAS评估伪代码）

```python
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_relevancy

# 准备数据：问题、回答、上下文、参考答案
dataset = Dataset.from_dict({
    "question": ["什么是RAG？"],
    "answer": ["RAG是检索增强生成..."],
    "contexts": [["RAG通过检索外部知识..."]],
    "ground_truth": ["RAG是Retrieval-Augmented Generation的缩写..."]
})

# 自动评估
result = evaluate(
    dataset=dataset,
    metrics=[faithfulness, answer_relevancy, context_relevancy]
)
print(result)  # {'faithfulness': 0.85, 'answer_relevancy': 0.90, ...}
```

## 关联知识点
- [ ] [RAG的完整流程](RAG的主要流程.md)
- [ ] [RAG中的Rerank](RAG中的Rerank.md)

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
