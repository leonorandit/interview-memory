---
type: 流程型
domain: 人工智能
anchor: 义
rhyme: 定名加参三步工
created: 2026-06-14
---

## 速记卡片
`工 | 定名加参三步工 | 继承基类、装饰器、结构化`

## 原始知识
- 继承 `BaseTool` 重写 `_run`
- `@tool` 装饰器快速包装函数
- `StructuredTool` 支持多参数
- 必须定义 `name` + `description`
- `args_schema` 用 Pydantic 校验
- **加粗易混点**：`description` 会被 LLM 读取决策

## 顺口溜
定名加参三步工

## 单字锚点 + 防崩推导
- **锚点字**：工
- **扩展口诀**：工匠造器先定名，参数描述后执行
- **为什么选它**："工" = Tool = 工具，直接映射
- **防崩推导**：自定义 Tool ≈ 造工具 → 工匠 → 工

## 一字一画面
**工** —— 像 **[红色扳手]**：[5秒画面] 钳工拿起红色扳手，先刻名字（name），再贴参数标签（args_schema），最后拧紧螺丝（_run执行）（本质：Tool 就是可被 LLM 调用的函数封装）

## 面试话术
在 LangChain 里自定义 Tool 主要有三种方式：用 `@tool` 装饰器快速包一个函数、继承 `BaseTool` 写类、或者走 `StructuredTool` 做多参数复杂工具。核心是 name、description、_run 方法这三个缺一不可，description 写得准 LLM 才能决定调不调。

## 防混补丁
- `@tool` vs `BaseTool`：前者快，后者可控性强
- `description` 不是给人看的，是给 LLM 做路由决策的
- 同步 `_run` / 异步 `_arun` 都要实现，否则并发场景报错

## 追问预演
- Q：Tool 和 Chain 的区别？A：Tool 是对外能力的原子封装，Chain 是内部流程编排
- Q：如何让 LLM 强制调用 Tool？A：用 bind_tools + 强制 tool_choice

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
