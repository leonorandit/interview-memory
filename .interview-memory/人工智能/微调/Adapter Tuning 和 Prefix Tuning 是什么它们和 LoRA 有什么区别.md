---
type: 对比型
domain: 人工智能
anchor: 插
rhyme: 插入模块，位置不同
created: 2026-06-14
---

## 速记卡片
`插 | 插入模块，位置不同 | 三者都是 PEFT，插入点各异`

## 原始知识
- **Adapter**：FFN 层间插入小模块， bottleneck 结构
- **Prefix Tuning**：在 K/V 前加可训练前缀向量
- **LoRA**：低秩分解注意力权重
- **共同点**：只训少量参数，冻结原模型
- **Adapter 加在 FFN，Prefix 加在 K/V，LoRA 改 W_q/W_v**
- **LoRA 推理可合并，Adapter 和 Prefix 需额外计算**

## 顺口溜
插入模块，位置不同

## 单字锚点 + 防崩推导
- **锚点字**：插
- **扩展口诀**：插入模块，位置不同，FFN 插 Adapter，K/V 插 Prefix，W 改 LoRA
- **为什么选它**："插"=插入，Adapter 和 Prefix 都是"插入"额外模块/向量到原网络，与 LoRA 的"修改权重"形成对比
- **防崩推导**：插 → 插入 → 不是改原有结构 → 新增模块 → Adapter=插入 bottleneck 层 → Prefix=插入前缀向量 → 对比 LoRA=修改现有权重 → 推理时 Adapter/Prefix 有额外开销，LoRA 可合并

## 一字一画面
**插** —— 像**插头插座**：白色墙壁上三个插座（插），第一个是圆形转接头（Adapter）插在 FFN 插孔，第二个是长条形延长线（Prefix）接在 K/V 插孔，第三个是直接替换内部铜线（LoRA）的改装版——本质：都是接入方式，但位置和形式不同

## 面试话术
Adapter 是在 Transformer 的 FFN 层之间插入小的 bottleneck 模块，Prefix Tuning 是在 attention 的 key 和 value 前面加一段可训练的前缀向量。LoRA 不一样，它不插新模块，而是把注意力的权重矩阵做低秩分解来微调。LoRA 的好处是推理时可以把这些低秩更新合并回原权重，没有额外延迟。

## 防混补丁
- Adapter 有推理延迟，LoRA 合并后无延迟
- Prefix Tuning 只影响前面 token，长文本可能受限
- 三者都属于 PEFT（参数高效微调）
- Prompt Tuning ≠ Prefix Tuning，Prompt 在输入层

## 追问预演
Q: 为什么 LoRA 能合并而 Adapter 不能？
A: LoRA 的更新是 W + BA，可以直接加到原权重上；Adapter 是新增了一个网络层，无法合并。

Q: Prefix Tuning 和 Prompt Tuning 区别？
A: Prefix 加在每一层的 K/V，Prompt 只在输入层加 embedding，Prefix 表达能力更强。

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
