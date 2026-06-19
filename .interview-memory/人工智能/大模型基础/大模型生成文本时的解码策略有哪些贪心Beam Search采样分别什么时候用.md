---
type: 对比型+列举型
domain: 人工智能/大模型基础
anchor: 贪
rhyme: 贪快束稳采创多
created: 2026-06-18
---

# 大模型生成文本时的解码策略有哪些？贪心、Beam Search、采样分别什么时候用？

## 速记卡片
`贪 | 贪快束稳采创多 | 确定vs创造`

## 原始知识
- **贪心（Greedy）**：每步选概率最高token，最快但容易重复、局部最优
- **Beam Search**：每步保留top-k候选序列，全局更稳，适合确定性任务
- **采样（Sampling）**：按概率分布随机选，包括 Temperature、Top-k、Top-p
- **Temperature**：<1保守更确定，>1平坦更随机
- **Top-k**：固定取概率最高的k个再采样
- **Top-p（Nucleus）**：取累积概率达p的最小集合再采样，比Top-k更自适应
- **使用场景**：翻译/摘要/代码用贪/束；聊天/写诗/头脑风暴用采
- **追问点**：Top-k和Top-p什么区别？Temperature怎么调？

## 顺口溜
**贪快束稳采创多**

## 单字锚点 + 防崩推导
- **锚点字**：**贪**
- **扩展口诀**：**贪快束稳采创多**
- **为什么选它**：解码策略的对比从"贪心"这个最基础策略出发，自然带出后续所有策略。
- **防崩推导**：
  - 贪 → 贪心搜索 → 每步选概率最高 → 最快但容易重复
  - 快 → 计算开销最小，无分支
  - 束 → Beam Search → 保留多条候选 → 结果更稳
  - 稳 → 适合确定性任务（翻译、摘要、代码）
  - 采 → 采样策略（Temperature/Top-k/Top-p）
  - 创 → 创造性任务（写诗、头脑风暴）
  - 多 → 生成结果更多样化

## 一字一画面
- **贪** —— 像**赌徒每次都押最大的筹码**：简单直接，但容易一条路走到黑，输光所有。（本质：每步选概率最高token，局部最优）
- **快** —— 像**直行道不绕路**：一脚油门到底，不停下来看地图。（本质：计算量最小，无分支）
- **束** —— 像**侦探同时追踪多条线索**：保留top-k个嫌疑人，最后锁定真凶。（本质：维护多个候选序列，全局更优）
- **稳** —— 像**手术刀精准切割**：翻译、摘要、代码要求准确，不能天马行空。（本质：确定性任务用Beam Search）
- **采** —— 像**抽奖转盘按概率转**：大奖（高概率词）容易中，小奖（低概率词）也可能中。（本质：按概率分布随机选）
- **创** —— 像**画家自由泼墨**：不规定每一笔必须怎么画，允许意外之美。（本质：Temperature/Top-p让生成更有创造力）
- **多** —— 像**打开话匣子**：同一句话有多种说法，不千篇一律。（本质：采样带来多样性）

## 面试话术
- **问策略** → "大模型解码策略口诀是**贪快束稳采创多**。贪心最快但容易重复；Beam Search保留多条候选，结果更稳，适合做翻译、摘要、代码这类确定性任务；采样策略包括Temperature、Top-k、Top-p，适合聊天、写诗、头脑风暴这类需要创造性和多样性的任务。"
- **问选型** → "实际线上最常用的是**Temperature + Top-p 组合**。代码生成用低Temperature或Beam Search保证准确；开放域聊天用Temperature 0.7~0.9 + Top-p 0.9让回复更自然有温度。"

## 防混补丁
- **容易把Beam Search和贪心搞混**。Beam Search是贪心的扩展，保留多条路。
- **补丁**：**贪心是一条道走到黑，Beam Search是多线并行最后挑最优**。
- **容易把Top-k和Top-p搞混**。
- **补丁**：**Top-k是固定取前k个，Top-p是动态取累积概率达到p的最小集合**。

## 追问预演
| 追问 | 简要答案 |
|------|----------|
| Temperature 具体作用？ | 对logits除Temperature后再softmax。<1分布更尖锐，高概率词更容易被选中，生成更保守确定；>1分布更平坦，多样性增加 |
| 为什么Top-p比Top-k更好？ | 不同步骤概率分布差异大，固定k可能包含极低概率词或遗漏合理词，Top-p按累积概率自适应调整集合大小 |
| 代码生成用什么策略？ | 低Temperature（0.2~0.4）或Beam Search，因为代码需要语法正确和确定性 |
| 聊天机器人为啥不用贪心？ | 贪心会导致回复单调、重复、缺乏个性，像机器人 |
| Temperature和Top-p能一起用吗？ | 能，最常用组合。先Temperature调整分布，再Top-p截断，最后采样 |

## 手撕代码
```python
# 伪代码：Temperature + Top-p 采样

def sample_top_p(logits, temperature=0.8, top_p=0.9):
    """
    logits: [vocab_size]  模型输出的原始分数
    """
    # 1. Temperature 调整
    logits = logits / temperature
    
    # 2. softmax 转概率
    probs = softmax(logits, dim=-1)
    
    # 3. 按概率降序排列
    sorted_probs, sorted_indices = torch.sort(probs, descending=True)
    
    # 4. 计算累积概率，找到最小集合使累积概率 >= top_p
    cumsum_probs = torch.cumsum(sorted_probs, dim=-1)
    mask = cumsum_probs <= top_p
    
    # 5. 只保留 Top-p 集合内的概率，其余置零后重归一化
    filtered_probs = sorted_probs * mask
    filtered_probs = filtered_probs / filtered_probs.sum()
    
    # 6. 采样
    sampled_idx = torch.multinomial(filtered_probs, num_samples=1)
    return sorted_indices[sampled_idx]
```

## 关联知识点
- [ ] 自回归属性（归）
- [ ] Transformer 架构基本原理（注）
- [ ] LLaMA 基本原理（基）
- [ ] 大模型结构化输出（格）

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
