---
type: 因果型
domain: 人工智能
anchor: 回
rhyme: 钩子回调处处埋
created: 2026-06-14
---

## 速记卡片
`回 | 钩子回调处处埋 | 日志监控费用裁`

## 原始知识
- Callback = 在链/LLM/Tool 生命周期插钩子
- `on_chain_start` / `on_chain_end`
- `on_llm_start` / `on_llm_end` / `on_llm_new_token`
- 用途：日志、监控、流式、计费、调试
- **加粗易混点**：Callback 是同步/异步双版本，混用会阻塞

## 顺口溜
钩子回调处处埋

## 单字锚点 + 防崩推导
- **锚点字**：回
- **扩展口诀**：出去回来有回执，钩子一挂全记录
- **为什么选它**："回" = 回调 = Callback，回环触发
- **防崩推导**：Callback = 回调 → 回

## 一字一画面
**回** —— 像 **[橙色鱼钩挂铃铛]**：[5秒画面] 橙色鱼钩上挂着小铃铛，鱼咬钩（事件触发）铃铛响，钓鱼人（CallbackHandler）收到信号收杆，起、咬、收三个动作每个都响（本质：Callback 是在组件生命周期的关键节点广播事件，供外部监听处理）

## 面试话术
Callback 是 LangChain 的事件钩子机制，你可以在 Chain、LLM、Tool 的开始、结束、甚至每个 token 生成时插自己的逻辑。最常见的用法是打日志做监控、做流式 SSE 推送、还有统计 token 费用。实现的话继承 `BaseCallbackHandler`，重写你关心的事件方法，然后传给链的 `callbacks` 参数就行。

## 防混补丁
- `on_llm_new_token` 是流式核心，但只有支持 streaming 的模型才触发
- 异步链必须用 `AsyncCallbackHandler`，否则阻塞事件循环
- Callback 抛异常不能崩主链，要自己 try-catch

## 追问预演
- Q：Callback 和 Middleware 的区别？A：Callback 是事件驱动、单向通知；Middleware 是拦截器、可改写请求
- Q：怎么只给特定链加 Callback？A：在 `invoke/ainvoke` 时传 `config={"callbacks": [...]}`，不是全局注册

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
