---
type: 列举型
domain: Java
anchor: 包
rhyme: 包锁容，五工具
created: 2026-06-14
---

# 你使用过哪些 Java 并发工具类？

## 速记卡片
`包 | 包锁容，五工具 | JUC包五器+集合+Future`

## 原始知识
- **CountDownLatch**：倒计时门闩，等N个线程完成
- **CyclicBarrier**：循环栅栏，线程互相等待集合
- **Semaphore**：信号量，限流控制并发数
- **Exchanger**：交换器，两线程交换数据
- **Phaser**：分段器，分阶段执行，比Latch更灵活
- **并发集合**：ConcurrentHashMap、ConcurrentLinkedQueue
- **Future体系**：Future、FutureTask、CompletableFuture
- **锁工具**：ReentrantLock、ReadWriteLock、StampedLock
- **原子类**：AtomicInteger、LongAdder

## 顺口溜
**包锁容，五工具**

## 单字锚点 + 防崩推导
- **锚点字**：**包**
- **扩展口诀**：**包锁容，五工具**
- **为什么选它**：所有并发工具都在java.util.concurrent包里，"包"是总入口。
- **防崩推导**：
  - 包 → java.util.concurrent → JUC包
  - 三大类 → 锁（Lock体系）+ 容（并发集合）+ 五工具（同步器）
  - 五工具 → 门闩（CountDownLatch）+ 栅栏（CyclicBarrier）+ 信号量（Semaphore）+ 交换器（Exchanger）+ 分段器（Phaser）
  - 扩展 → Future/FutureTask/CompletableFuture异步结果 + 原子类Atomic/LongAdder

## 一字一画面
- **包** —— 像**万能工具包**：打开JUC包，里面有锁、有容器、有各种小工具。（本质：java.util.concurrent包）
- **门闩** —— 像**火箭发射倒计时**：10个工程师各检查一个系统，全部OK后总指挥按下发射键。（本质：CountDownLatch，一个等多个）
- **栅栏** —— 像**春游集合**：大家分散玩，导游说"3点门口集合"，人到齐了一起上车，下次还能再用。（本质：CyclicBarrier，互相等+可循环）
- **信号量** —— 像**停车场闸机**：只有10个车位，满了亮红灯，出去一辆才能进一辆。（本质：Semaphore限流）
- **交换器** —— 像**特工接头**：两个人各拿一个公文包，碰头瞬间互换，然后各自离开。（本质：Exchanger两线程交换数据）
- **分段器** —— 像**接力赛分段点**：第一棒跑完到交接区，等所有人到齐再发第二棒，可以分很多段。（本质：Phaser分阶段执行）

## 面试话术
- "我主要用过JUC包里的**锁、并发集合、和五大同步工具**。五工具的口诀是**包锁容，五工具**——CountDownLatch倒计时门闩，适合一个线程等N个线程完成；CyclicBarrier循环栅栏，适合多线程互相等待；Semaphore信号量做限流；Exchanger做两线程数据交换；Phaser更灵活，适合分阶段任务。异步处理常用CompletableFuture，并发集合用ConcurrentHashMap。"

## 防混补丁
- 容易把CountDownLatch和CyclicBarrier搞混。补丁：**门闩一等多，栅栏互相等；门闩一次性，栅栏能循环**。
- 容易漏掉Phaser。补丁：**门闩和栅栏不够用，Phase分段来补充**。

## 追问预演
- **问：CountDownLatch和CyclicBarrier的区别？**
  - 答：CountDownLatch是一个等多个，计数器到0后不能重置；CyclicBarrier是多个互相等，人到齐了一起出发，还能循环使用。
- **问：Semaphore应用场景？**
  - 答：数据库连接池限流、API接口限流、资源访问控制。比如只允许100个并发访问数据库。
- **问：CompletableFuture相比Future的优势？**
  - 答：Future只能阻塞get结果，CompletableFuture支持链式回调thenApply/thenCompose、组合allOf/anyOf、异常处理exceptionally，写异步代码像写同步代码。
- **问：ConcurrentHashMap怎么保证线程安全？**
  - 答：JDK1.7用分段锁Segment，JDK1.8用CAS+synchronized锁单个桶节点，细粒度锁提高并发。
- **问：Exchanger实际用过吗？**
  - 答：用得较少，典型场景是遗传算法里两个线程交换染色体数据，或者双缓冲填充与消费交换缓冲区。

## 关联知识点
- [ ] AQS原理
- [ ] synchronized与Lock的区别
- [ ] 线程池原理
- [ ] Java内存模型

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
