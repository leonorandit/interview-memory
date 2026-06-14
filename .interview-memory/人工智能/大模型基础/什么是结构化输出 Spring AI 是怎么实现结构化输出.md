---
type: 因果型
domain: 人工智能
anchor: 格
rhyme: 格约束，三实现
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 格 | 格约束，三实现 | 用格式约束LLM输出，程序可直接解析，省掉后处理 |

## 原始知识

- **结构化输出定义**：要求LLM按指定格式输出（JSON/XML/列表/对象）
- **作用**：方便程序解析、减少后处理、提高可靠性
- **Spring AI实现一**：BeanOutputParser将输出映射到Java对象
- **Spring AI实现二**：使用@Description注解描述字段含义
- **Spring AI实现三**：在Prompt中指定输出格式要求
- **Spring AI实现四**：使用JSON Schema约束输出结构
- **Spring AI实现五**：自定义Parser解析特定格式

## 顺口溜

格约束，三实现，
Bean描述Prompt先。

（格式约束输出，BeanOutputParser、@Description、Prompt格式描述三种方式实现。）

## 单字锚点 + 防崩推导

**锚点字**：格

**扩展口诀**：格约束，三实现，Bean描述Prompt先

**为什么选它**：结构化输出的核心就是"格式"——格。有格才有规矩，没格LLM就会天马行空。

**推导链**：
1. 格 → 格式约束：给LLM画格子，让它按格填写
2. 约 → 约束：JSON Schema是硬约束，Prompt是软约束
3. 束 → 束缚输出范围：不允许自由发挥，只能按模板输出
4. Bean → BeanOutputParser：LLM输出JSON → Spring自动映射成Java对象
5. 描述 → @Description注解：给字段加注释，让LLM理解每个字段填什么
6. Prompt → 在Prompt里直接说"请输出JSON格式"，最简单直接
7. Schema → JSON Schema：最严格的格式校验，就像数据库表结构

## 一字一画面

- **格** —— 像 Excel 表格：每一列都有标题，每一行按列填数据，不能乱写（本质：预定义模板约束输出形态）
- **约** —— 像合同条款：红字标注必须遵守，违约就拒收（本质：Schema强制校验，不合规就报错）
- **束** —— 像捆绳扎箱子：绳子范围内随便装，超出就装不进（本质：限定输出边界，防胡言乱语）
- **B** —— 像自动分拣机：快递到站后机器按地址自动分到对应格子（本质：JSON→Java Bean自动映射）
- **描** —— 像商品标签：贴好"易碎""向上"，搬运工知道怎么处理（本质：@Description指引LLM填充语义）

## 面试话术

"结构化输出就是让LLM按我们规定的格式输出，比如JSON或者XML，这样程序就能直接解析，不用写一大堆正则去提取。在Spring AI里，最常用的就是BeanOutputParser，配合@Description注解，能把LLM的输出直接映射成Java对象。另外也可以在Prompt里明确格式要求，或者用JSON Schema做更严格的约束。"

## 防混补丁

- **容易和什么搞混**：容易和普通的JSON输出混为一谈——结构化输出强调的是"可解析、可映射、有约束"，不是让模型随便输出一个JSON样子。
- **补丁口诀**：不是能看就行，是要能直接转对象，Schema约束才够硬。

## 追问预演

| 追问 | 简要答案 |
|------|----------|
| 如果LLM输出不符合格式怎么办？ | 可以配置重试机制，或捕获异常后用LLM再次修正，最严的是用JSON Schema约束 |
| BeanOutputParser原理？ | 利用Java反射和Jackson，把LLM生成的JSON字符串反序列化成指定类型的Java对象 |
| @Description的作用？ | 描述字段的业务含义，帮助LLM理解该字段应该填充什么内容，提高输出准确率 |
| JSON Schema怎么写？ | 定义类型、必填字段、枚举值等，Spring AI支持在Prompt中附带Schema让模型遵循 |
| 除了JSON还能用什么格式？ | XML、YAML、CSV都可以，只要程序能解析，但JSON最常用 |

## 关联知识点

- JSON Schema Validation
- Jackson ObjectMapper
- Spring AI OutputParser
- Prompt Engineering（格式提示）
- Function Calling 参数约束

## 复习记录

- 第1次：____/____/____
- 第2次：____/____/____
- 第3次：____/____/____
- 第4次：____/____/____
