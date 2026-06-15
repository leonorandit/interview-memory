---
type: 对比型
domain: 人工智能
anchor: 架
rhyme: 架域参量用不同
created: 2026-06-14
---

# Transformer 和 LLM 有哪些区别

## 速记卡片
`架 | 架域参量用不同 | 架构 vs 应用模型`

## 原始知识
- Transformer是通用深度学习架构
- LLM是基于Transformer的大语言模型
- Transformer可用于图像、语音等多模态
- LLM专指NLP领域，参数规模大
- LLM通常只用Transformer的Decoder部分
- **易混点**：LLM是Transformer的子集，不是并列关系

## 顺口溜
架域参量用不同

## 单字锚点 + 防崩推导
- **锚点字**：**架**
- **扩展口诀**：**架构域，参量殊**
- **为什么选它**：Transformer的本质是"架构"，LLM的本质是"应用模型"。先想"是不是一层东西"。
- **防崩推导**：
  - 架 → 架构 vs 模型 → 通用框架 vs 具体实例
  - 域 → 领域 → Transformer跨模态，LLM仅限语言
  - 参 → 参数量级 → LLM百亿起，普通Transformer可小可大
  - 量 → 数据量 → LLM需要海量文本预训练
  - 用 → 用途 → 通用组件 vs 端到端对话系统

## 一字一画面
- **架** —— 像**建筑钢架**：可以搭商场、住宅、工厂，通用骨架。（通用架构）
- **域** —— 像**地图分区**：钢架遍布全国，但LLM只住在语言区。（领域专注）
- **参** —— 像**乐高块数**：LLM的块数多到能盖摩天楼。（参数规模）
- **量** —— 像**粮仓吞吐量**：LLM要吞掉整个互联网的文本。（数据规模）
- **用** —— 像**工具箱**：Transformer是万能箱，LLM只是里面那把语言螺丝刀。（应用场景）

## 面试话术
- "核心区别是**架域参量用不同**。Transformer是通用架构，像建筑钢架，可用于图像、语音、NLP；LLM是专指基于Transformer的大语言模型，通常只取Decoder，参数规模百亿起，专注文本生成。简单说，Transformer是父类，LLM是子集。"

## 防混补丁
- 容易和"GPT和Transformer"搞混。补丁：**GPT是LLM的代表，LLM是Transformer的 offspring**。

## 追问预演
- **Q：GPT和Transformer是什么关系？** A：GPT是基于Transformer Decoder的LLM，是Transformer架构在语言模型上的一个具体实现。
- **Q：BERT和GPT都用Transformer，为什么BERT不算LLM？** A：早期BERT参数小（3亿），且是编码器结构，通常称为预训练模型；现代LLM一般指Decoder-only的百亿级以上大模型。

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
