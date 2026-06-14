---
type: 因果型
domain: Java
anchor: 池
rhyme: 池核最，七参数
created: 2026-06-14
---

# 你了解 Java 线程池的原理吗？

## 速记卡片
`池 | 池核最，七参数 | 核队非拒`

## 原始知识
- **corePoolSize**：核心线程数，常驻
- **maximumPoolSize**：最大线程数，上限
- **keepAliveTime**：非核心线程空闲存活时间
- **workQueue**：任务等待队列
- **threadFactory**：创建线程的工厂
- **handler**：拒绝策略
- **allowCoreThreadTimeOut**：核心线程也超时回收
- **执行流程**：核心线程 → 队列 → 非核心线程 → 拒绝策略
- **Fixed**：固定线程数，队列无界易OOM
- **Cached**：线程无限扩，队列不缓存易压垮
- **Single**：单线程串行
- **Scheduled**：定时调度

## 顺口溜
**池核最，七参数，核队非拒**

## 单字锚点 + 防崩推导
- **锚点字**：**池**
- **扩展口诀**：**池核最，七参数**
- **为什么选它**：线程池的核心就是"池"，一听到线程池先想"池"，池子里有几条鱼、最多几条、怎么排队、满了怎么办。
- **防崩推导**：
  - 池 → 线程池 → ThreadPoolExecutor
  - 七参数 → 核（corePoolSize）+ 最（maximumPoolSize）+ 活（keepAliveTime）+ 队（workQueue）+ 厂（threadFactory）+ 拒（handler）+ allowCoreThreadTimeOut
  - 执行流程 → 来任务先给核心线程 → 核心满了进队列 → 队列满了开非核心 → 非核心也满了走拒绝策略
  - 四种默认池 → Fixed（固定数）+ Cached（缓存弹性）+ Single（单线程）+ Scheduled（定时）
  - 坑点 → Fixed用无界队列会OOM，Cached线程数无上限会压垮CPU

## 一字一画面
- **池** —— 像**养鱼池**：池里常年养着几条核心鱼（core），忙时最多能养到最大数量（max），闲时多余的鱼会死掉（keepAliveTime）。（本质：线程复用）
- **核** —— 像**固定工位**：办公室里有3个固定座位，永远有人坐。（本质：核心线程常驻）
- **队** —— 像**候诊区**：诊室满了病人先坐大厅排队，FIFO叫号。（本质：workQueue缓冲）
- **非** —— 像**临时加班工位**：固定座位和大厅都满了，走廊加椅子，但忙完就撤。（本质：非核心线程临时创建）
- **拒** —— 像**医院拒诊**：诊室、大厅、走廊全满，新病人只能被劝退或转院。（本质：拒绝策略）

## 面试话术
- "线程池核心是**ThreadPoolExecutor**，有**七个参数**，口诀是**池核最，七参数**。任务进来先丢给核心线程，核心满了进队列，队列满了创建非核心线程，全满了就执行拒绝策略。日常推荐自定义线程池，因为Executors创建的Fixed和Cached都有隐患，Fixed无界队列会OOM，Cached线程数无限会撑爆。"

## 防混补丁
- 容易和"数据库连接池"搞混。线程池复用的是线程，连接池复用的是TCP连接。补丁：**线程池管干活，连接池管路子**。
- 容易把核心线程和最大线程的关系搞反。补丁：**核≤最，核常驻，最是天花板**。

## 追问预演
- **问：四种默认线程池为什么不推荐用？**
  - 答：Fixed和Single用无界LinkedBlockingQueue，任务积压会OOM；Cached用SynchronousQueue且最大线程是Integer.MAX_VALUE，高并发会创建海量线程导致CPU耗尽。
- **问：线程池提交任务后具体执行流程？**
  - 答：先判断运行线程数 < corePoolSize？是则创建核心线程执行；否则加入workQueue；队列满了则判断运行线程数 < maximumPoolSize，是则创建非核心线程；否则执行拒绝策略。
- **问：核心线程会被回收吗？**
  - 答：默认不会，allowCoreThreadTimeOut默认false。设置true后，核心线程空闲超过keepAliveTime也会被回收。
- **问：队列有哪些类型？**
  - 答：ArrayBlockingQueue（有界数组）、LinkedBlockingQueue（链表，可选有界）、SynchronousQueue（不存元素，直接传递）、PriorityBlockingQueue（优先级）。

## 关联知识点
- [ ] Java线程池有哪些拒绝策略
- [ ] 如何合理地设置Java线程池的线程数
- [ ] AQS原理
- [ ] CompletableFuture异步编程

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
