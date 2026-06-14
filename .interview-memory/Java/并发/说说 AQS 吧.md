---
type: 因果型
domain: Java
anchor: 队
rhyme: 队状模，三要点
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 队 | 队状模，三要点 | CLH队列 + state状态 + 模板方法 |

## 原始知识

- **AbstractQueuedSynchronizer**
- **state**变量（volatile int）
- **CLH双向虚拟队列**
- **Node节点**组成
- **acquire/release**模板方法
- **独占模式**（ReentrantLock）
- **共享模式**（Semaphore/CountDownLatch）
- **CAS**操作保证原子性

## 顺口溜

队排队，状态变，模板管两头。

## 单字锚点 + 防崩推导

- **锚点字**：队
- **扩展口诀**：队状模，三要点
- **为什么选它**：AQS的核心数据结构就是CLH队列，一切同步逻辑都围绕"排队"展开
- **推导链**：队 → AQS → CLH双向虚拟队列（Node节点，prev/next指针） → state状态变量（volatile int，表示资源状态） → acquire/release模板方法（子类只需实现逻辑） → 独占模式（ReentrantLock） / 共享模式（Semaphore、CountDownLatch） → CAS保证出队入队原子性

## 一字一画面

**队** —— 像医院挂号排队的大厅：病人们手拉手站成两队（双向CLH队列），护士台有个红色电子叫号屏显示当前号码（volatile state），医生按"下一个"绿色按钮（acquire）叫病人进诊室，看完病按"结束"红色按钮（release）放人出来；有人想插队时，穿制服的保安立即用对讲机喊停（CAS原子操作拦住）（本质：FIFO队列 + 状态管理 + 模板方法模式）。

## 面试话术

"AQS是AbstractQueuedSynchronizer，是JUC包下锁和同步器的一个抽象基类，核心可以概括为三个部分：一个CLH双向队列、一个volatile的state状态变量、一套acquire和release的模板方法。"

"线程抢不到锁的时候，会被包装成Node节点放进队列里排队；state表示同步状态，比如重入次数或者剩余许可数；子类只需要实现独占或共享模式下资源获取和释放的逻辑，排队和唤醒的机制AQS都封装好了。"

"像ReentrantLock是独占模式，Semaphore和CountDownLatch是共享模式，底层都用CAS来保证操作的原子性。"

## 防混补丁

容易和synchronized的Monitor机制搞混，记住：**AQS是Java层面的队列同步器，Monitor是JVM底层对象头的锁实现**。

## 追问预演

1. **问**：CLH队列为什么是"虚拟"队列？
   **答**：节点之间并不是真正的链表数据结构连续存储，而是通过每个节点里的prev和next指针逻辑关联，线程自旋检查前驱节点状态来决定是否阻塞。

2. **问**：state在不同同步器里分别代表什么？
   **答**：ReentrantLock里表示重入次数，Semaphore里表示剩余许可数，CountDownLatch里表示还需要倒数的次数。

3. **问**：AQS为什么用CAS而不是直接加锁？
   **答**：CAS是一种乐观锁策略，不需要线程挂起和唤醒，在竞争不激烈的时候性能更好，保证原子性同时减少系统开销。

## 关联知识点

- ReentrantLock与Condition
- Semaphore、CountDownLatch、CyclicBarrier
- volatile内存可见性
- CAS与Unsafe类
- LockSupport.park/unpark

## 复习记录

- [ ] 第1次
- [ ] 第2次
- [ ] 第3次
- [ ] 第4次
