---
type: 列举型
domain: Java
anchor: 反
rhyme: 反单主多，三模型
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 反 | 反单主多，三模型 | 单线程、多线程、主从Reactor |

## 原始知识

- **单线程Reactor**：一个线程处理**所有IO事件+业务逻辑**
- **多线程Reactor**：一个线程处理**IO**，**线程池**处理业务
- **主从Reactor**：**MainReactor**监听连接，**SubReactor**处理IO，线程池处理业务
- **Netty使用主从Reactor**：BossGroup + WorkerGroup

## 顺口溜

反单主多，三模型，
单线程全包揽，
多线程拆业务，
主从分工最清晰。

## 单字锚点 + 防崩推导

- **锚点字**：反
- **扩展口诀**：反单主多，三模型
- **为什么选它**："反"代表**反应堆（Reactor）**，是整个模型的名字和灵魂。记住"反"就能锚定主题，再拆出单、主、多三种形态
- **推导链**：
  1. 反 → Reactor（反应堆）→ 事件驱动，IO多路复用（select/epoll）
  2. 单 → 单线程Reactor → 一个线程：accept + read + write + 业务 → 简单但业务阻塞IO
  3. 多 → 多线程Reactor → IO线程 + 业务线程池 → 业务不阻塞IO，但accept仍单点
  4. 主 → 主从Reactor → MainReactor专门accept → 分给SubReactor处理IO → 线程池处理业务 → 三层分工
  5. Netty → BossGroup（主）+ WorkerGroup（从）+ 业务线程池

## 一字一画面

- **反** —— 像核反应堆：中子（事件）撞击铀核（Channel），释放能量（处理逻辑），持续链式反应（事件循环）（本质：事件驱动+循环分发）
- **单** —— 像单人餐厅：老板一人迎客、点菜、炒菜、上菜，客人多就忙不过来（本质：单线程瓶颈）
- **主** —— 像酒店大堂：门童（MainReactor）只负责开门迎客，服务员（SubReactor）带客入座，厨师（线程池）炒菜（本质：三层职责分离）

## 面试话术

"Reactor线程模型有三种，我记成'反单主多'。单线程就是一个线程包干所有事；多线程是把业务逻辑丢给线程池，IO还是单线程；主从Reactor最成熟，MainReactor专门监听连接，SubReactor处理读写，Netty就是这么实现的。"

## 防混补丁

- **容易和Proactor搞混**：Reactor是事件通知+应用处理IO；Proactor是内核完成IO再通知应用
- **补丁口诀**：Reactor通知你来读，Proactor内核读完送

## 追问预演

| 追问 | 简要答案 |
|------|----------|
| 单线程Reactor的缺点？ | 业务逻辑阻塞IO线程，无法处理其他事件 |
| 多线程Reactor的瓶颈？ | accept仍单线程，海量连接时可能成为瓶颈 |
| 主从Reactor为什么最好？ | 连接建立和数据读写分离，水平扩展SubReactor |
| Netty中Boss和Worker分工？ | BossGroup（1个EventLoop）accept连接；WorkerGroup处理读写 |
| 为什么不用阻塞IO？ | Reactor基于NIO，一个线程管理多个Channel，资源利用率高 |

## 关联知识点

- NIO / Selector / epoll
- Netty线程模型（EventLoop、EventLoopGroup）
- Proactor模型（AIO）
- 线程池（ThreadPoolExecutor）
- IO多路复用原理

## 复习记录

- 第1次：__________
- 第2次：__________
- 第3次：__________
- 第4次：__________
