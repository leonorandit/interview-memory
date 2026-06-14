---
type: 流程型
domain: 人工智能
anchor: 融
rhyme: 图像文本融一体
created: 2026-06-14
---

## 速记卡片
`融 | 图像文本融一体 | ViLT 无需 CNN 提取特征，直接 patch 嵌入`

## 原始知识
- **弃 CNN**：ViLT 完全不用卷积网络
- **分块嵌入**：图像切 patch，线性投影
- **联合编码**：图文拼接输入 Transformer
- **统一表示**：模态嵌入区分图像/文本
- **端到端训练**：分类/检索直接优化
- **轻量高效**：推理速度大幅提升

## 顺口溜
ViLT 融图文，Patch 进 Transformer。

## 单字锚点 + 防崩推导
- **锚点字**：融
- **扩展口诀**：图像文本融一体，Patch 拼接进 Encoder
- **为什么选它**："融"字点破 ViLT 的核心创新——把图像和文本两种模态"融合"进同一个 Transformer，而不是像之前先用 CNN 提取图像特征再拼接
- **防崩推导**：
  1. 想到"融"→融合多模态
  2. 怎么融？→图像不经过 CNN，直接切成 patch，每个 patch 线性映射成向量
  3. 和谁融？→文本 token embedding 拼接在一起
  4. 怎么区分？→加模态类型嵌入（modality-type embedding）
  5. 输出什么？→Transformer Encoder 统一编码，做图文匹配或 VQA

## 一字一画面
**融** —— 像**两股颜料倒入同一杯中旋转**：左管蓝色（图像 patch），右管金色（文本 token），在透明杯（Transformer）中旋成一道紫流（统一表示），杯底析出标签（预测结果）。（本质：抛弃 CNN 中介，模态在底层即交融）

## 面试话术
"ViLT 的核心思路是把图像和文本在输入层就‘融’在一起。具体来说，它把图像切成固定大小的 patch，每个 patch 线性投影成向量，然后和文本的 token embedding 直接拼接，送进标准的 Transformer Encoder。这样就不需要额外的 CNN 或 Region Proposal 网络来做图像特征提取，实现了真正的端到端多模态学习。"

## 防混补丁
- **ViLT vs ViT**：ViT 只处理图像，ViLT 处理图文对
- **ViLT vs CLIP**：CLIP 有双塔独立编码器，ViLT 是单塔联合编码
- **ViLT vs Oscar/UNITER**：后者依赖 Faster R-CNN 提取区域特征，ViLT 完全不用目标检测
- **防崩**：提到"无 CNN"即可锁定 ViLT 的最大卖点

## 追问预演
Q：ViLT 的图像 patch embedding 具体怎么做？
A：将图像 reshape 为 N×(P²·C)，P 是 patch 尺寸（如 32），再用线性层映射到隐藏维度。

Q：模态怎么区分？
A：加可学习的 modality-type embedding，图像 patch 和文本 token 分别加不同的类型向量。

Q：性能上有什么取舍？
A：速度大幅提升，但在复杂视觉推理任务上略弱于基于目标检测的方法。

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
