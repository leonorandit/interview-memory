---
type: 因果型
domain: Java
anchor: 监
rhyme: 监升对，四实现
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 监 | 监升对，四实现 | Monitor 对象 + 锁升级 + 对象头 Mark Word + JDK6 优化 |

## 原始知识

- JVM 通过 **Monitor 对象** 实现
- **monitorenter / monitorexit** 指令
- 对象头 **Mark Word** 存锁状态
- 锁升级：**无锁 → 偏向锁 → 轻量级锁 → 重量级锁**
- 轻量级锁靠 **CAS 自旋**
- 重量级锁用 **操作系统 Mutex**
- JDK6 优化：**锁消除 / 锁粗化 / 自适应自旋**

## 顺口溜

Monitor 管，Mark Word 藏，  
无偏轻重量级长，  
消除粗化自适应，  
四实现，记心上。

## 单字锚点 + 防崩推导

- **锚点字**：监
- **扩展口诀**：监升对，四实现
- **为什么选它**：Monitor 监视器是 synchronized 实现的本质核心
- **推导链**：监 → Monitor 监视器 → monitorenter / monitorexit → 对象头 Mark Word 记录锁状态 → 锁升级（无锁 → 偏向 → 轻量级 → 重量级） → 四个实现维度（Monitor 指令 / Mark Word / 锁升级 / JDK6 编译优化）

## 一字一画面

**监** —— 像[监控室大爷]：[大爷坐在监控室，盯着一排屏幕，谁进谁出他按按钮，绿灯进红灯停]（本质：Monitor 监视器管控线程进出）

## 面试话术

"synchronized 底层靠 Monitor 监视器实现，编译成 monitorenter 和 monitorexit 两条指令。锁信息存在对象头的 Mark Word 里。JDK6 之后做了锁升级优化，从偏向锁到轻量级 CAS 自旋，最后再膨胀成重量级操作系统锁。"

## 防混补丁

容易和 "ReentrantLock 的 AQS" 搞混？一句补丁：**synchronized 靠 Monitor，Lock 靠 AQS 队列。**

## 追问预演

**Q: 偏向锁什么时候升级？**  
A: 有第二个线程竞争时，撤销偏向锁，升级为轻量级锁。

**Q: 锁消除是什么？**  
A: JVM 检测到不可能存在竞争的锁，编译时直接去掉。

**Q: 自适应自旋是什么意思？**  
A: JVM 根据历史成功率自动调整自旋次数，不是固定值。

## 关联知识点

- Mark Word
- CAS
- AQS
- 锁升级
- 对象头

## 复习记录

- 第 1 次：
- 第 2 次：
- 第 3 次：
- 第 4 次：
