---
type: 对比型
domain: Java
anchor: 区
rhyme: 显中可，五区别
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 显 | 显中可，五区别 | Synchronized 是 JVM 关键字自动释放，ReentrantLock 是显式 API 类需手动控制 |

## 原始知识

- **Synchronized** 是 JVM 关键字
- **自动释放锁**，代码块结束即释放
- ReentrantLock 是 **API 层面的类**
- 需 **手动 lock/unlock**
- ReentrantLock **可中断 / 可超时 / 可公平**
- 支持 **多 Condition 条件队列**
- 性能接近（JDK6 **锁升级** 优化）
- **两者都支持可重入**

## 顺口溜

显式锁，关键字，  
可中断，可公平，  
手动释放别忘关。

## 单字锚点 + 防崩推导

- **锚点字**：显
- **扩展口诀**：显中可，五区别
- **为什么选它**：ReentrantLock 是显式锁，与 Synchronized 隐式释放形成最核心对比
- **推导链**：显 → 显式锁 → ReentrantLock → 对比 Synchronized → 五大区别（实现层面 / 释放方式 / 可中断 / 可公平 / 多 Condition）

## 一字一画面

**显** —— 像[红色手闸]：[伸手猛拉红色手闸，咔哒一声锁住，不拉就不锁]（本质：显式控制，手不拉就不锁）

## 面试话术

"Synchronized 是 JVM 层面的关键字，出代码块自动释放；ReentrantLock 是 API 层面的显式锁，必须手动 lock 和 unlock，忘记 unlock 就会死锁。它额外支持中断、超时、公平锁和多 Condition，功能更灵活。"

## 防混补丁

容易和 "volatile" 搞混？一句补丁：**锁是互斥进，volatile 是可见性。**

## 追问预演

**Q: 什么场景用 ReentrantLock 不用 Synchronized？**  
A: 需要超时获取锁、可中断、公平调度或多条件唤醒时。

**Q: ReentrantLock 公平锁影响性能吗？**  
A: 公平锁吞吐量下降明显，非公平锁性能更好。

**Q: 两者都支持可重入，什么意思？**  
A: 同一线程可以多次获取同一把锁，不会死锁自己。

## 关联知识点

- volatile
- AQS
- 锁升级
- 死锁
- Condition

## 复习记录

- 第 1 次：
- 第 2 次：
- 第 3 次：
- 第 4 次：
