---
type: 流程型
domain: 人工智能
anchor: 存
rhyme: 存史有术分三级
created: 2026-06-14
---

## 速记卡片
`存 | 存史有术分三级 | 内存+文件+数据库`

## 原始知识
- 内存存储：ChatMessageHistory 默认字典
- 文件持久化：FileChatMessageHistory JSON存本地
- 数据库存储：RedisChatMessageHistory、MongoDB
- SQL 存储：SQLChatMessageHistory
- 自定义存储：继承 BaseChatMessageHistory
- **易混点**：Memory 和 History 是两层，Memory 用 History

## 顺口溜
存史三级内存文件库

## 单字锚点 + 防崩推导
- **锚点字**：存
- **扩展口诀**：存史有术分三级，内存文件数据库递
- **为什么选它**：对话历史的核心需求是"存"住不丢
- **防崩推导**：问历史持久化 → 想到"存" → 存哪？→ 内存（重启丢）、文件（单机）、数据库（分布式）

## 一字一画面
**存** —— 像** Russian Doll 套娃**：最内层小娃娃是内存（热但易失），中间木盒是文件（单机持久），最外层铁柜是数据库（多人共享）（本质：持久化层级越深，可靠性越高，延迟越大）

## 面试话术
对话历史持久化分三级：开发阶段用内存 ChatMessageHistory，单机部署用 FileChatMessageHistory 存 JSON，生产环境用 Redis 或 MongoDB 做共享存储。也可以继承 BaseChatMessageHistory 对接公司自研存储。

## 防混补丁
- Memory 组件内部封装了 History，别混为一谈
- Redis 要设 TTL，否则历史无限膨胀
- File 存储并发写会丢数据，只适合单进程
- SQLChatMessageHistory 需要预先建表

## 追问预演
Q：多实例部署怎么共享历史？
A：必须上 Redis 或 MongoDB，内存和文件都做不到跨实例共享。

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
