---
type: 对比型/因果型
domain: 人工智能
anchor: 子
rhyme: FastText带子词袋，OOV不怕构词强
created: 2026-06-14
---

# 说说 FastText 技术，是否比 Word2Vec 更优越？哪些情况下更适合使用 FastText

## 速记卡片
`子 | FastText带子词袋，OOV不怕构词强 | 子词+层级softmax`

## 原始知识
- **子词嵌入**：每个词 = n-gram字符子词向量之和
- **例子**：where = <wh, whe, her, ere, re> + where本身
- **OOV优势**：没见过wholeheartedly，但认识whole和hearted子词
- **层级softmax**：用霍夫曼树加速训练，类似Word2Vec negative sampling的替代
- **vs Word2Vec**：FastText更适合形态丰富、OOV多的语言（德语、芬兰语）
- **加粗易混点**：FastText不是总是更优，简单语料上反而慢且效果持平

## 顺口溜
带子词，不怕生，构词强

## 单字锚点 + 防崩推导
- **锚点字**：**子**
- **扩展口诀**：**子词袋构词**
- **为什么选它**：FastText区别于Word2Vec的核心就是"子词"（subword/n-gram），一个字点破本质。
- **防崩推导**：
  - 子 → 子词n-gram → 3-6个字符滑动窗口
  - 子 → 词向量 = 所有子词向量求和 → OOV也能表示
  - 子 → 适合构词丰富的语言 → 德语、土耳其语
  - 子 → 不总是优越 → 中文/英文简单场景Word2Vec更快够好

## 一字一画面
- **子** —— 像**汉字偏旁卡片**：看到"龘"不认识，但三个"龙"都见过，拼起来就懂个大概。（本质：组合性泛化）
- **袋** —— 像**把零件倒进布袋**：每个词的向量不是一块整铁，而是一袋小螺丝钉的重量之和。（本质：加性组合）
- **不怕生** —— 像**拼装玩具见新图**：没见过这个模型，但零件都熟悉，照图拼就行。（本质：OOV鲁棒性）

## 面试话术
- "FastText和Word2Vec最大的区别是**子词**。Word2Vec给每个整词一个向量，遇到OOV就傻眼；FastText把词拆成n-gram子词，比如'apple'由'app'、'ppl'、'ple'等子词向量求和得到。所以FastText对构词丰富的语言和OOV场景更鲁棒。但它不是绝对更优——在英语这种形态简单的语料上，Word2Vec又快又好，FastText反而多此一举。"

## 防混补丁
- 容易认为FastText一定优于Word2Vec。补丁：**子词是双刃剑，语料简单时子词=噪音，额外计算没收益**。

## 追问预演
- Q：FastText和BERT的子词有什么区别？
  - A：FastText是字符级n-gram固定滑动；BERT用WordPiece/BPE数据驱动合并，更智能。
- Q：FastText适合中文吗？
  - A：中文没空格，形态变化少，子词收益有限；但如果按字做n-gram，对部分新词有一定帮助。
- Q：层级softmax和负采样哪个快？
  - A：看词表大小和硬件；层级softmax是O(logV)，负采样是O(K)，通常负采样更常用。

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
