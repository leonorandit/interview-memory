---
type: 流程型
domain: 人工智能
anchor: 做
rhyme: 找证派做交
created: 2025-06-13
---

# A2A 协议的工作原理

## 速记卡片
`做 | 找证派做交 | 先找证再派做后交`

## 原始知识
- A2A（Agent-to-Agent Protocol）是Google推出的Agent间通信协议
- 工作原理分五步：
  1. **找**（Discovery）- 通过Agent Card发现对方Agent
  2. **证**（Authentication）- 双方身份认证（OAuth/API Key）
  3. **派**（Task Creation）- 创建任务并派发给目标Agent
  4. **做**（Execution）- 目标Agent执行任务，实时推送状态更新
  5. **交**（Delivery）- 任务完成后交付最终结果（Artifact）
- 通信基于HTTP+JSON，状态更新用SSE（Server-Sent Events）或Webhook
- **易混点**：A2A vs 传统API调用、A2A vs MCP
- **追问点**：Agent Card里有什么？状态更新怎么实现？支持哪些内容类型？

## 顺口溜
**找证派做交**

## 单字锚点 + 防崩推导
- **锚点字**：**做**
- **扩展口诀**：**先找证，再派做，后交**
- **为什么选它**：A2A的核心是Agent之间**协作完成任务**，"做"是整个流程的目的，其他步骤都是为了让"做"顺利发生。
- **防崩推导**：
  - 做（执行）→ A2A的核心是Agent协作完成任务
  - 找（发现）→ 先找到对方Agent（通过Agent Card）
  - 证（认证）→ 确认对方身份，防止冒充
  - 派（派发任务）→ 把任务需求发给对方
  - 交（交付成果）→ 对方做完后把结果交回来

## 一字一画面
- **找** —— 像**在招聘网站找外包团队**：浏览对方的简介和擅长领域（Agent Card）。（本质：Agent Discovery）
- **证** —— 像**签合同前查资质**：确认对方公司营业执照、法人身份，防止被骗。（本质：身份认证）
- **派** —— 像**派发工单**：把具体需求和截止时间写清楚，发给外包团队。（本质：Task Creation）
- **做** —— 像**外包团队干活**：过程中每天汇报进度（SSE实时推送），有问题及时沟通。（本质：Task Execution + 状态更新）
- **交** —— 像**项目验收交付**：外包团队提交最终成果，甲方验收确认。（本质：Artifact Delivery）

## 面试话术
- 问工作原理 → "A2A协议的工作原理，口诀是**找证派做交**。**找**——通过Agent Card发现对方Agent；**证**——双方进行身份认证（OAuth）；**派**——创建任务并派发给对方Agent；**做**——对方Agent执行任务，过程中通过SSE实时推送状态更新；**交**——任务完成后交付最终结果。整个过程就像企业外包：先找到供应商，签合同，派工单，对方干活，最后验收成果。"
- 问A2A和API区别 → "传统API是一次性请求-响应，像点外卖；A2A是长时任务协作，支持流式状态更新，像外包项目。口诀：**API是点外卖，A2A是外包项目**。"

## 防混补丁
- 容易和"传统API调用"搞混。传统API是一次性请求-响应；A2A是长时任务协作，支持流式状态更新。补丁：**API是点外卖，A2A是外包项目**。
- 容易和"MCP"搞混。MCP是Agent-Tool协议，A2A是Agent-Agent协议。补丁：**MCP管工具，A2A管协作**。

## 追问预演
- **问**：Agent Card里有什么？→ 包含Agent名称、描述、能力列表、认证方式、API端点、支持的输入/输出格式等元数据。
- **问**：状态更新怎么实现？→ 通过SSE（Server-Sent Events）服务端推送或Webhook回调，实时通知任务进度。
- **问**：支持哪些内容类型？→ 文本、图片、音频、视频、结构化数据（JSON）等多种模态。
- **问**：任务可以嵌套吗？→ 可以，Agent A可以派任务给Agent B，Agent B再派给Agent C，形成任务链。

## 手撕代码（A2A任务交互伪代码）

```python
# 1. 找（Discovery）- 获取对方Agent Card
agent_card = fetch_agent_card("https://agent-b.example.com/.well-known/agent.json")

# 2. 证（Authentication）- OAuth认证
token = oauth_authenticate(agent_card.auth_endpoint)

# 3. 派（Task Creation）- 创建任务
task = create_task(
    agent_url=agent_card.endpoint,
    instruction="分析这份销售数据并生成图表",
    attachments=[sales_data],
    auth_token=token
)

# 4. 做（Execution）- 接收实时状态更新（SSE）
for event in stream_task_updates(task.id):
    if event.type == "status":
        print(f"进度: {event.status}")
    elif event.type == "artifact":
        # 5. 交（Delivery）- 接收最终成果
        save_artifact(event.data)
```

## 关联知识点
- [ ] [A2A协议的五大设计原则](A2A协议的五大设计原则.md)
- [ ] [什么是Google ADK](什么是Google ADK.md)
- [ ] [RAG的完整流程](RAG的主要流程.md)

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
