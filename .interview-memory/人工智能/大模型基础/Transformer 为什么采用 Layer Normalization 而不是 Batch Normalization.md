---
type: 对比型
domain: 人工智能
anchor: 层
rhyme: 逐层归一序列稳
created: 2026-06-14
---

## 速记卡片
`层 | 逐层归一序列稳 | 不依赖批次大小`

## 原始知识
- LayerNorm沿特征维归一
- BatchNorm沿样本批归一
- 序列长度变化大
- 批大小敏感不稳定
- **独立同分布假设弱**
- **LayerNorm适合变长**
- **Transformer无批次依赖**

## 顺口溜
层内归一不顾批

## 单字锚点 + 防崩推导
- **锚点字**：层
- **扩展口诀**：层内归一不顾批，长短序列都安逸
- **为什么选它**：Layer Normalization的核心就是"层"内归一，区别于Batch的"批"内归一
- **防崩推导**：层→LayerNorm→对单个样本的所有特征维度归一→均值方差只依赖当前样本→与batch大小无关→序列长度变化不影响→NLP任务天然适配；BatchNorm→依赖batch内多个样本的统计→小batch估计不准→序列padding后统计失真

## 一字一画面
**层** —— 像【汉堡单层压扁】：不管同桌汉堡大小，每个汉堡内部配料高度都被压平一致，不受旁边桌子订单量影响（本质：单样本内部均衡）

## 面试话术
Transformer用LayerNorm是因为NLP序列长度变化大，而且训练时batch大小不稳定。LayerNorm是对单个样本的所有特征做归一化，不依赖批次大小；BatchNorm要沿batch维度算均值方差，小批量时统计不准确，padding后的序列还会让统计失真，所以不适合Transformer。

## 防混补丁
- Pre-LN vs Post-LN：原始Transformer是Post-LN（残差后归一），后来发现Pre-LN（残差前归一）训练更稳定，是大模型标配
- LayerNorm和RMSNorm：RMSNorm去掉均值中心化，计算更快，LLaMA等模型在用

## 追问预演
Q：BatchNorm在CV里效果好，为什么在NLP里不行？
A：图像尺寸固定，batch内样本统计稳定；文本长度不一，padding后同一位置的特征含义不同，统计无意义。

Q：LayerNorm具体在哪个维度操作？
A：对单个token的所有隐藏维度（如768维）计算均值和方差，然后归一化。

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
