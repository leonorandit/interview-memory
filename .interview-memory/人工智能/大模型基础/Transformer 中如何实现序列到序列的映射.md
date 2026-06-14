---
type: 流程型
domain: 人工智能
anchor: 映
rhyme: 编码解码双路映，注意力桥接上下文
created: 2026-06-14
---

## 速记卡片
`映 | 编码解码双路映，注意力桥接上下文 | Encoder→Context→Decoder`

## 原始知识
- 序列到序列 = Seq2Seq
- Encoder：把输入序列编码成上下文向量
- Decoder：自回归生成输出序列
- 桥梁：Encoder-Decoder Cross Attention
- **Encoder 用双向自注意力，Decoder 用掩码自注意力**
- 每步 Decoder 查询 Encoder 输出
- **易混**：GPT 只有 Decoder，BERT 只有 Encoder，T5 有两者

## 顺口溜
编码压缩，解码展开

## 单字锚点 + 防崩推导
- **锚点字**：映
- **扩展口诀**：输入映成向量，向量映成输出
- **为什么选它**："映"是映射的核心意象，Seq2Seq 本质就是两次映射
- **防崩推导**：忘了流程 → 想"映" → 什么映到什么？→ 序列→序列 → 怎么映？→ 先编码（压缩）再解码（展开）→ 中间靠什么？→ Cross Attention → Encoder 做什么？→ 双向理解上下文 → Decoder 做什么？→ 自回归生成，每步看已生成+Encoder 输出

## 一字一画面
**映** —— 像**幻灯机投屏**：左侧暗室（Encoder）里一叠彩色幻灯片（输入序列）被强光灯（自注意力）照透，合成一张高清明信片（上下文表示）；右侧（Decoder）幻灯机一张一张吐出新的幻灯片（输出序列），每吐一张都要回头对照左侧明信片（Cross Attention）。光束是金黄色，幻灯片边缘发蓝光（本质：Encoder 压缩信息，Decoder 借助 Cross Attention 逐 token 生成）

## 面试话术
"Transformer 做 Seq2Seq 是靠编码器把输入序列压缩成上下文表示，解码器再自回归地生成输出。关键是在解码器里加了 Cross Attention，让解码器每一步都能回头查看编码器的输出，实现输入到输出的映射。"

## 防混补丁
| 组件 | 注意力类型 | 方向 |
|------|-----------|------|
| Encoder | Self-Attention | 双向 |
| Decoder | Masked Self-Attention | 单向（自回归） |
| Cross Attention | Q from Decoder, KV from Encoder | 桥接 |
| 典型模型 | T5、BART | 有编有解 |
| GPT | 只有 Decoder | 生成式 |
| BERT | 只有 Encoder | 理解式 |

## 追问预演
- Q: Decoder 为什么需要 Masked Attention？
  A: 训练时防止偷看未来 token，保持自回归特性。
- Q: Cross Attention 和普通 Self Attention 区别？
  A: Q 来自 Decoder，K/V 来自 Encoder，实现两端信息交互。

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
