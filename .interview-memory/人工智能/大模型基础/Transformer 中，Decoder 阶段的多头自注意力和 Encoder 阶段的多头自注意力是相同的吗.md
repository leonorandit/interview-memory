---
type: 对比型
domain: 人工智能
anchor: 遮
rhyme: 遮掩分，前看全
created: 2026-06-14
---

# Transformer 中，Decoder 阶段的多头自注意力和 Encoder 阶段的多头自注意力是相同的吗

## 速记卡片
`遮 | 遮掩分，前看全 | Mask遮不遮`

## 原始知识
- Encoder自注意力：双向，所有token互相可见（Full Attention）
- Decoder自注意力：因果掩码，只能看到当前及之前token（Causal/Masked Attention）
- Decoder还有Cross Attention连接Encoder输出
- 两者都是多头机制，计算方式相同，只是掩码不同
- **易混点**：Decoder里有两种注意力，自注意力和交叉注意力

## 顺口溜
遮掩分，前看全

## 单字锚点 + 防崩推导
- **锚点字**：**遮**
- **扩展口诀**：**遮前全**
- **为什么选它**："遮"直接对应"掩码遮蔽"，是Decoder和Encoder最核心的区别。
- **防崩推导**：
  - 遮 → 遮蔽/掩码 → 有没有mask
  - 掩 → Mask → causal mask
  - 分 → 不同 → 不完全相同
  - 前 → Decoder只能看前面 → 单向
  - 看 → 可见范围 → 当前及之前
  - 全 → Encoder全可见 → 双向

## 一字一画面
- **遮** —— 像**舞台幕布**：Decoder拉上了幕布，遮住后面的演员。（掩码本质）
- **掩** —— 像**眼罩**：Decoder戴着眼罩，只能看到前面，不能偷看未来。（因果掩码）
- **分** —— 像**分道行驶**：两条车道，规则不同。（区别）
- **前** —— 像**倒车雷达**：只能探测后方已走过的地方。（单向可见）
- **看** —— 像**电影院座位**：Encoder坐中间，前后左右都看得见。（全向可见）
- **全** —— 像**全景窗**：360度无死角。（双向Attention）

## 面试话术
- "不完全相同，区别在**遮掩分，前看全**。计算机制一样都是多头点乘，但Encoder是双向全可见，像全景窗；Decoder用了因果掩码，只能看当前位置及之前，像戴着眼罩走路。Decoder另外还有Cross Attention连接Encoder输出，这是Decoder独有的。"

## 防混补丁
- 容易说"完全不同"或"完全相同"。补丁：**机制同，掩码异，Decoder多一个Cross**。

## 追问预演
- **Q：为什么Decoder需要Mask？** A：训练时防止模型偷看未来token，保持和推理时一样的自回归生成方式。
- **Q：Cross Attention和Self Attention的区别？** A：Self Attention的QKV都来自同一序列；Cross Attention的Q来自Decoder，KV来自Encoder输出，实现两序列交互。

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
