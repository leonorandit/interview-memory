---
type: 列举型
domain: Java
anchor: 新
rhyme: 新等运阻终，六状态
created: 2026-06-14
---

# 线程的生命周期在 Java 中是如何定义的？

## 速记卡片
`新 | 新等运阻终，六状态 | 六态循环`

## 原始知识
- **NEW**新建未启动
- **RUNNABLE**可运行（含就绪和运行）
- **BLOCKED**阻塞等锁
- **WAITING**无限等待
- **TIMED_WAITING**限时等
- **TERMINATED**终止
- **易混**：BLOCKED等锁，WAITING等通知
- **易混**：Java RUNNABLE≠OS Running

## 顺口溜
**新等运阻终，六状态**

## 单字锚点 + 防崩推导
- **锚点字**：**新**
- **扩展口诀**：**新等运阻终，六状态**
- **为什么选它**：生命周期从"新"开始，顺着时间线排列六状态，像人生阶段一样好记。
- **防崩推导**：
  - 新（NEW）→ 刚new出来，start()还没调用
  - 等 → 包含两种等待：WAITING（无限期等，如wait()/join()）和 TIMED_WAITING（限时等，如sleep(1000)）
  - 运（RUNNABLE）→ 可运行，注意Java把**Running和Ready合并**了
  - 阻（BLOCKED）→ 被锁阻塞，等monitor锁
  - 终（TERMINATED）→ run()执行完，线程结束
  - 关键区分：**BLOCKED是被锁挡在外面，WAITING是自己选择等待被叫醒**

## 一字一画面
- **新** —— 像**刚出生的婴儿**：被new出来了，但还没睁眼（start()没调用），不会自己跑。（本质：Thread对象存在，OS线程未创建）
- **等** —— 像**排队等叫号**：无限期等（wait()）或定闹钟等（sleep(1000)），不是被门挡住，是自己选择坐下来等待。（本质：主动放弃CPU，等待唤醒或超时）
- **运** —— 像**跑步机上的人**：可能在跑（Running），也可能在跑步机边上站着准备按开始（Ready），在JVM眼里都是RUNNABLE。（本质：Java线程状态不区分运行和就绪）
- **阻** —— 像**被锁在门外的快递小哥**：手里有单（有任务），但门被锁了进不去（拿不到monitor锁），只能干站着等。（本质：被动阻塞，等待锁释放）
- **终** —— 像**跑到终点挂奖牌的人**：run()方法执行完毕，挂上了完赛奖牌，不再复活，不可restart()。（本质：线程结束，生命周期完结）

## 面试话术
- "Java线程有六状态，口诀是**新等运阻终，六状态**。NEW是刚new出来没start；RUNNABLE是可运行，这里要注意Java把'运行中'和'就绪'合并成一个状态了，和OS线程状态不一样；BLOCKED是等锁阻塞；WAITING是无限等待，比如wait()和join()；TIMED_WAITING是限时等待，比如sleep()；TERMINATED是执行完了。最容易混的是BLOCKED和WAITING，BLOCKED是被锁挡在外面，WAITING是自己等着被叫醒。"
- "面试里经常问jstack看到的线程状态，比如看到BLOCKED就要去找锁竞争，看到WAITING就要去找谁没notify。"

## 防混补丁
- 容易和"OS线程状态（五态/七态）"搞混。Java把Running和Ready合并为RUNNABLE，这是为了跨平台屏蔽OS差异。
- 补丁：**JVM大一统，运行就绪不分家**

## 追问预演
1. **Java的RUNNABLE和OS的Running有什么区别？**
   - Java的RUNNABLE包含Ready（就绪等待CPU）和Running（真正在CPU上执行），而OS线程模型通常会把这两个状态分开。

2. **BLOCKED和WAITING的区别？**
   - BLOCKED是等待获取monitor锁，发生在进入synchronized块/方法时；WAITING是线程主动调用wait()、join()等方法后释放锁并等待其他线程唤醒。一个是被动等锁，一个是主动等待。

3. **为什么Java线程状态要这样设计？**
   - Java作为跨平台语言，需要屏蔽不同OS线程模型的差异，用最精简的六态模型覆盖所有场景，同时保证jstack等诊断工具的可移植性。

4. **如何从WAITING回到RUNNABLE？**
   - 无限等待需要notify()/notifyAll()或interrupt()；限时等待除了被唤醒，时间到了也会自动恢复为RUNNABLE。

5. **start()两次会怎样？**
   - 抛IllegalThreadStateException。线程一旦进入TERMINATED或已经从NEW启动过，就不能再次start。

## 关联知识点
- [ ] Object.wait()/notify()机制
- [ ] synchronized与monitor锁
- [ ] 线程调度与CPU时间片
- [ ] jstack线程Dump分析
- [ ] 并发编程中的线程池

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
