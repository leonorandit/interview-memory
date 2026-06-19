---
type: 因果型+流程型
domain: 人工智能
anchor: 注
rhyme: 查键点softmax，V来加权 | QK除根V加权
created: 2026-06-18
---

## 速记卡片

注 | 查键点softmax，V来加权 | Self-Attention 原理

## 原始知识

- **核心思想**
  - 每个 token 都和序列中**所有其他 token** 计算关联度，得到一个上下文感知的表示
  - 类比：读一句话时，每个词都会"注意"到句子中其他相关词（如"它"注意"猫"）
- **三步计算流程**
  - **Step 1：生成 Q、K、V**
    - 输入向量 X 分别乘三个权重矩阵 W_Q、W_K、W_V，得到 Query、Key、Value
    - Q = XW_Q，K = XW_K，V = XW_V
    - Q：我要查什么（当前 token 的查询意图）
    - K：我有什么（所有 token 的索引标签）
    - V：我实际内容是什么（所有 token 的真实语义）
  - **Step 2：算注意力分数（Attention Score）**
    - Score = Q × K^T / sqrt(d_k)
    - Q 和每个 K 做内积，内积越大表示关联越强
    - **除以 sqrt(d_k)**：防止点积结果过大导致 Softmax 梯度消失（d_k 是 Q/K 的维度）
  - **Step 3：Softmax + 加权求和**
    - Attention Weights = Softmax(Score)
    - 输出 = Attention Weights × V
    - 每个 token 的最终表示 = 所有 token 的 V 按注意力权重加权求和
- **Multi-Head Attention（多头注意力）**
  - 把 Q/K/V 切分成 h 个头，每个头独立做 Attention，最后拼接
  - 类比：h 个不同的"阅读角度"同时读一句话，有的关注语法、有的关注语义、有的关注情感
  - 作用：增强表达能力，不同头学到不同的注意力模式
- **为什么 Self-Attention 比 RNN 强**
  - **并行化**：所有 token 同时计算 Attention，RNN 必须逐个串行
  - **长距离依赖**：任意两个 token 直接相连，距离永远是 O(1)；RNN 长距离是 O(n)
  - **可解释性**：Attention 权重矩阵可以直接可视化，看模型"注意"了哪里
- **复杂度**
  - 时间复杂度：O(n² × d)，n 是序列长度，d 是维度
  - 空间复杂度：O(n²)，需要存储 n×n 的 Attention 矩阵
  - 这是 Transformer 的瓶颈，长序列（如 100K+）需要用稀疏 Attention、FlashAttention 等优化

## 顺口溜

**查键点softmax，V来加权**

## 单字锚点 + 防崩推导

- **锚点字**：**注**
- **扩展口诀**：查键点softmax，V来加权
- **为什么选它**："注"是"注意力"的核心字，也是 Self-Attention 的灵魂。
- **防崩推导**：
  - 注 → 注意力 → 查（Query 查询）→ 键（Key 索引）→ 点（点积）→ softmax（归一化）→ V（Value）来加权
  - 完整链路：Q 查 K → 点积算分数 → 除根号 d_k → softmax → 加权 V

## 一字一画面

- **注** —— 像**聚光灯打向舞台**：一束光（Query）扫过所有演员（Key），照到谁身上亮，谁就被"注意"到。（本质：Query 和 Key 匹配，决定注意力分配）
- **查** —— 像**在图书馆查书目**：你拿着一张纸条（Q）去问管理员（K），"有没有关于猫的书？"（本质：Query 查询意图）
- **键** —— 像**书架上的分类标签**：每本书（token）都有一个标签（K），写着"动物-猫-宠物"。（本质：Key 是索引标签）
- **点** —— 像**按图索骥**：纸条上的关键词和标签匹配度越高，点积越大。（本质：Q·K 内积算关联度）
- **V** —— 像**书的内容**：标签匹配上了，最终拿下来看的是书里的正文（V），不是标签本身。（本质：Value 是真实语义内容）

## 面试话术

"Self-Attention 的核心口诀是**查键点softmax，V来加权**。输入向量分别乘三个权重矩阵得到 Q、K、V：Q 是查询意图，K 是索引标签，V 是真实内容。然后 Q 和 K 做点积算关联分数，除以 sqrt(d_k) 防止数值过大，再 Softmax 归一化得到注意力权重，最后用权重对 V 加权求和，得到每个 token 的上下文感知表示。多头注意力就是把 Q/K/V 切分成多个头并行计算，不同头学到不同模式。Self-Attention 比 RNN 强在三点：完全并行、长距离依赖 O(1)、注意力权重可解释。"

## 防混补丁

容易和 "Cross-Attention" 搞混。Self-Attention 的 Q/K/V 来自**同一个序列**（自己注意自己），Cross-Attention 的 Q 来自一个序列、K/V 来自**另一个序列**（如 Decoder 注意 Encoder 输出）。补丁：**Self 是 selfie 自拍，Cross 是跨界合作**。

## 追问预演

- **Q：为什么要除以 sqrt(d_k)？**
  → d_k 大时点积数值会很大，Softmax 进入饱和区梯度极小。除以 sqrt(d_k) 把数值缩放回合理范围，保证梯度稳定。
- **Q：Multi-Head 和单头有什么区别？**
  → 单头只有一个注意力视角，多头 h 个视角并行，能同时捕捉语法、语义、指代等多种关系。类似 h 个专家同时读一句话。
- **Q：Self-Attention 的复杂度瓶颈在哪？**
  → O(n²) 的 Attention 矩阵。序列长度 n 翻倍，计算量翻四倍。长文本需要用稀疏 Attention、Linear Attention、FlashAttention 优化。
- **Q：Attention 权重可以怎么可视化？**
  → 画热力图：横轴是 Query token，纵轴是 Key token，颜色深浅表示注意力权重。可以直观看到"它"注意"猫"、"吃"注意"鱼"等模式。
