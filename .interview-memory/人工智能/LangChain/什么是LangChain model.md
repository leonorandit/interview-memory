---
type: 因果型
domain: 人工智能
anchor: 模
rhyme: 模封装，统一调
created: 2025-06-13
---

# 什么是 LangChain Model

## 速记卡片
`模 | 模封装，统一调 | Model封装`

## 原始知识
- LangChain Model：统一封装各种LLM和Chat Model的接口
- 两类模型：
  - **LLM** - 文本补全模型（text-davinci-003）
  - **Chat Model** - 对话模型（GPT-4、Claude）
- 核心价值：**统一调用**，无论底层是OpenAI、Anthropic还是本地模型，调用方式一样
- 接口：invoke、batch、stream、ainvoke（异步）
- **易混点**：LLM vs Chat Model
- **追问点**：怎么切换模型？本地模型怎么接？

## 顺口溜
**模封装，统一调**

## 单字锚点 + 防崩推导
- **锚点字**：**模**
- **扩展口诀**：**模封装，统一调**
- **为什么选它**：LangChain Model的核心是"模型"，"模"是天然钩子。
- **防崩推导**：
  - 模（Model）→ LangChain的模型封装
  - 封装 → 统一接口封装不同模型
  - 统一调 → 无论底层是谁，调用方式一样
  - LLM → 文本补全
  - Chat → 对话模型

## 一字一画面
- **模** —— 像**万能遥控器**：一个遥控器控制所有品牌的电视。（本质：统一接口）
- **封装** —— 像**手机壳**：不管手机什么颜色，套上壳都一样握。（本质：接口标准化）
- **统一调** —— 像**通用插座**：英标、美标、国标都能插。（本质：统一调用方式）

## 面试话术
- 问什么是LangChain Model → "LangChain Model是对各种LLM的统一封装，口诀是**模封装，统一调**。**模**——封装LLM和Chat Model；**封装**——统一接口，无论底层是OpenAI、Anthropic还是本地模型；**统一调**——都通过invoke、batch、stream等方式调用。分两类：LLM是文本补全模型，Chat Model是对话模型。切换模型只需改配置，业务代码不用动。"

## 防混补丁
- 容易和"原始API"搞混。LangChain Model是封装层，原始API是直接调用。补丁：**原始API是手动挡，LangChain Model是自动挡**。"

## 关联知识点
- [ ] [什么是LangChain](什么是LangChain.md)
- [ ] [LangChain的核心组件](LangChain的核心组件.md)

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
