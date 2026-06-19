---
type: 流程型
domain: 人工智能/大模型基础
anchor: 训
rhyme: 训标调，三阶段
created: 2026-06-18
---

# 大模型的 Function Call 能力是怎么训练出来的？

## 速记卡片
`训 | 训标调，三阶段 | Function Call 训练`

## 原始知识
- **预训练**：海量文本学语言，此时还不会工具调用
- **工具微调/SFT**：构造对话数据，让模型学 JSON 格式、参数填充、调用时机
- **数据格式**：System Prompt 注入 JSON Schema → User 请求 → Assistant 思考 → function_call → 工具执行结果 → Assistant 总结
- **RLHF/DPO 对齐**：避免过度调用（tool overuse）或该调不调
- **关键细节**：特殊 Token 标记调用片段、并行调用训练、参数类型约束
- **追问点**：训练数据怎么构造？怎么评估效果？

## 顺口溜
**训标调，三阶段**

## 单字锚点 + 防崩推导
- **锚点字**：**训**
- **扩展口诀**：**训标调，三阶段**
- **为什么选它**：Function Call 本质是**训练**出来的能力，不是预训练天然就会的。
- **防崩推导**：
  - 训 → 训练 → 三个阶段
  - 训 → 预训练：学语言，不会调工具
  - 标 → 工具微调（SFT）：标数据，学格式、学参数、学时机
  - 调 → RLHF/DPO：调偏好，学会判断该不该调

## 一字一画面
- **训** —— 像**驾校学车**：先学科目一（理论/预训练），再学科目二（倒库/工具格式），最后上路实习（RLHF/实际判断）。（本质：三阶段渐进）
- **标** —— 像**填空题模板**：给出 "天气{城市}" 的模板，学生学会把 "北京" 填进去。（本质：JSON Schema + 参数填充）
- **调** —— 像**教练坐副驾**：该踩刹车时没踩、不该踩时乱踩，教练都会纠正。（本质：RLHF 纠正调用时机）

## 面试话术
- **问训练** → "Function Call 不是预训练天生就会的，而是**训标调三阶段**练出来的。预训练只学了自然语言；然后做工具微调 SFT，把 API 文档和调用示例做成对话数据，让模型学会生成标准 JSON 格式的函数调用；最后用 RLHF 或 DPO 对齐，让模型判断什么时候该调工具、什么时候直接回答。"
- **问数据** → "训练数据的核心是构造'思考-调用-观察-回答'的完整链路。System Prompt 里放工具描述的 JSON Schema，然后对话轮次里模型输出 function_call 的 JSON，外部执行后把结果以 tool 角色回传，模型再总结。"

## 防混补丁
- **容易和 RAG 搞混**。RAG 是给模型外部知识库，Function Call 是给模型外部工具手。
- **补丁**：**RAG 是查资料，Function Call 是干实事**。
- **容易以为预训练后模型自然就会 Function Call**。
- **补丁**：**预训练只学说话，工具调用是后学的技能**。

## 追问预演
| 追问 | 简要答案 |
|------|----------|
| 预训练后为什么不能直接 Function Call？ | 预训练数据里没有结构化工具调用格式，模型不知道 JSON Schema 怎么填 |
| Tool Learning 和普通 Instruction Tuning 区别？ | Tool Learning 必须包含"思考→调用→观察→回答"完整链路，不是单纯问答 |
| 训练数据怎么构造？ | 人工标注 + 自动化合成（用强模型生成调用示例）+ 实际调用日志反馈 |
| 怎么评估训练效果？ | 调用正确率（调对工具）、参数准确率（填对参数）、时机准确率（该调才调） |
| 并行调用怎么训练？ | 训练数据里包含一次调多个工具的场景，模型输出多个 function_call |
| 参数类型错了怎么办？ | 代码层校验 JSON Schema；回传错误让模型重试；SFT 时加错误案例 |

## 手撕代码
```json
// 训练数据格式示例（多轮对话）
[
  {
    "role": "system",
    "content": "You have access to the following tools:\n{\"name\": \"get_weather\", \"description\": \"获取天气\", \"parameters\": {\"city\": {\"type\": \"string\"}}}"
  },
  {
    "role": "user",
    "content": "北京今天天气怎么样？"
  },
  {
    "role": "assistant",
    "content": null,
    "tool_calls": [
      {
        "id": "call_1",
        "type": "function",
        "function": {
          "name": "get_weather",
          "arguments": "{\"city\": \"北京\"}"
        }
      }
    ]
  },
  {
    "role": "tool",
    "tool_call_id": "call_1",
    "content": "{\"temperature\": 25, \"condition\": \"晴\"}"
  },
  {
    "role": "assistant",
    "content": "北京今天晴天，25度。"
  }
]
```

## 关联知识点
- [ ] Function Calling 原理（外）
- [ ] MCP（模型上下文协议）
- [ ] Agent 架构与工具调用
- [ ] RLHF 对齐训练（协）
- [ ] SFT 监督微调

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
