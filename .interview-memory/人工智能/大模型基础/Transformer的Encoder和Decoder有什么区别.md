---
type: 对比型
domain: 人工智能/大模型基础
anchor: 编
rhyme: 编双理，解掩生
created: 2026-06-18
---

# Transformer 的 Encoder 和 Decoder 有什么区别？

## 速记卡片
`编 | 编双理，解掩生 | 编解差异`

## 原始知识
- **编（Encoder）**：双向自注意力（Bidirectional Self-Attention），每个 token 能看到整个输入序列的所有位置
- **双**：双向上下文感知，同时看左边和右边
- **理**：理解任务，输出上下文表示（Contextual Representation），不做生成
- **解（Decoder）**：带 Mask 的因果自注意力（Masked/Causal Self-Attention），只能看已生成的 token，不能偷看未来
- **掩**：Mask 遮蔽未来位置，保证训练和推理的自回归一致性
- **生**：生成任务，自回归地逐个输出 token
- **结构差异**：Decoder 比 Encoder 多一层 **Cross-Attention**（编码器-解码器注意力），用于连接 Encoder 输出
- **典型模型**：
  - 只用 Encoder：BERT（理解）
  - 只用 Decoder：GPT（生成）
  - Encoder-Decoder：T5、BART、原始 Transformer（翻译、摘要）
- **易混点**：Encoder-Decoder vs 纯 Decoder、Cross-Attention 作用
- **追问点**：为什么 Decoder 要 Mask、为什么现在大模型多用 Decoder-only

## 顺口溜
**编双理，解掩生**

## 单字锚点 + 防崩推导
- **锚点字**：**编**
- **扩展口诀**：**编双理，解掩生**
- **为什么选它**：Encoder 是"编码器"，"编"字直接挂钩；与"解"形成天然对偶，一听就知是编解码对比。
- **防崩推导**：
  - 编 → Encoder（编码器）
  - 双 → 双向注意力，看全句所有位置
  - 理 → 理解任务，输出上下文表示，不生成新文本
  - 解 → Decoder（解码器）
  - 掩 → Masked Self-Attention，遮蔽未来 token
  - 生 → 生成任务，自回归逐个输出

## 一字一画面
- **编** —— 像**翻译官通读整篇合同**：先完整读完、理解全部上下文，再动笔。（本质：Encoder 双向编码）
- **双** —— 像**双眼同时看左右**：读"苹果"时既看前面"吃"也看后面"派"，判断是水果还是公司。（本质：双向上下文感知）
- **理** —— 像**图书馆管理员**：分类、整理、提取信息，但不写新书。（本质：理解任务，BERT）
- **解** —— 像**作家写小说**：只能按顺序写，写到第 5 章时不能偷看第 10 章的结局。（本质：Decoder 自回归生成）
- **掩** —— 像**蒙眼走路**：只能摸前面走过的路，后面未知区域被遮住了。（本质：Masked Attention）
- **生** —— 像**打字机从左到右敲出文字**：每敲一个新字，只能看已敲出的内容。（本质：单向生成，GPT）

## 面试话术
- 问区别 → "Encoder 和 Decoder 的核心区别口诀是**编双理，解掩生**。Encoder 是双向注意力，看全句做理解，像翻译官先通读全文，BERT 只用 Encoder；Decoder 是单向掩码注意力，自回归做生成，像作家按顺序写小说，GPT 只用 Decoder。Decoder 还多一层 Cross-Attention 来连接 Encoder 输出，用于翻译等 Seq2Seq 任务。"
- 问为什么现在多用 Decoder-only → "因为生成和理解可以统一用生成方式解决，架构更简单，扩展性更好，GPT 系列证明了 Scaling Law 在 Decoder-only 上的有效性。"

## 防混补丁
- 容易把 Encoder-Decoder 和纯 Decoder 搞混。GPT 只有 Decoder，T5 有 Encoder+Decoder。补丁：**GPT是解，BERT是编，T5是编解双全**。
- 容易觉得 Encoder 也能生成。Encoder 输出的是表示向量，不是文本序列。补丁：**编出向量，解出文字**。

## 追问预演
1. **为什么 Decoder 需要 Masked Self-Attention？**
   → 防止模型在训练时偷看未来的 token，保证训练和推理的一致性（推理时确实看不到未来）。
2. **Cross-Attention 是什么？什么时候用？**
   → Decoder 通过 Cross-Attention 查询 Encoder 的输出，用于 Seq2Seq 任务（如机器翻译），让生成时能看到源序列信息。
3. **BERT 和 GPT 分别用了什么结构？**
   → BERT 是 Encoder-only（双向），GPT 是 Decoder-only（单向）。
4. **Encoder-Decoder 模型代表有哪些？**
   → 原始 Transformer（翻译）、T5、BART。
5. **为什么现在大模型多用 Decoder-only？**
   → ① 生成和理解可统一用生成方式解决；② 架构简单，Scaling 更有效；③ GPT 系列成功验证了路线；④ 预训练目标统一（Next Token Prediction）。
6. **Decoder 比 Encoder 多哪些结构？**
   → 多一层 Masked Self-Attention（因果掩码）和一层 Cross-Attention（连接 Encoder）。

## 关联知识点
- [ ] [讲讲Transformer架构基本原理Encoder和Decoder是什么](讲讲Transformer架构基本原理Encoder和Decoder是什么.md)
- [ ] [Transformer 中，Decoder 阶段的多头自注意力和 Encoder 阶段的多头自注意力是相同的吗](Transformer 中，Decoder 阶段的多头自注意力和 Encoder 阶段的多头自注意力是相同的吗.md)
- [ ] [讲一下你对 Transformer 的 Encoder 模块的理解](讲一下你对 Transformer 的 Encoder 模块的理解.md)
- [ ] [Transformer 中如何实现序列到序列的映射](Transformer 中如何实现序列到序列的映射.md)

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
