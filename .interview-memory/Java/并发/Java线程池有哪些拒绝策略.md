---
type: 列举型
domain: Java
anchor: 拒
rhyme: 拒抛弃，caller跑
created: 2026-06-14
---

# Java 线程池有哪些拒绝策略？

## 速记卡片
`拒 | 拒抛弃，caller跑 | 抛丢跑老`

## 原始知识
- **AbortPolicy**：默认，抛异常
- **CallerRunsPolicy**：调用者线程执行
- **DiscardPolicy**：静默丢弃
- **DiscardOldestPolicy**：丢弃最老任务
- **自定义**：实现RejectedExecutionHandler
- **抛**：直接抛RejectedExecutionException
- **丢**：无声消失，任务丢失
- **跑**：调用者自己跑，主线程变慢
- **老**：丢队列头，尝试提交新任务

## 顺口溜
**拒抛弃，caller跑**

## 单字锚点 + 防崩推导
- **锚点字**：**拒**
- **扩展口诀**：**拒抛弃，caller跑**
- **为什么选它**：拒绝策略的核心动作是"拒绝"，四种策略都是"拒"的不同方式。
- **防崩推导**：
  - 拒 → 拒绝策略 → 线程池满了之后的处理方式
  - 四种默认策略 → 拒抛（Abort抛异常）+ 拒丢（Discard静默丢）+ 拒跑（CallerRuns调用者跑）+ 拒老（DiscardOldest丢最老）
  - 自定义 → 实现RejectedExecutionHandler接口
  - 场景选择 → 重要任务用CallerRuns（保证不丢），非重要可用Discard，调试时用Abort

## 一字一画面
- **拒** —— 像**餐厅门口挂拒客牌**：客满了，后面来的人怎么办？有四种处理方式。（本质：拒绝策略入口）
- **抛** —— 像**保安直接吼**："满了！不准进！"来人吓一跳，知道进不去。（本质：AbortPolicy抛异常）
- **丢** —— 像**门口没人管**：来人默默转身走了，谁也不知道少了一个客人。（本质：DiscardPolicy静默丢弃）
- **跑** —— 像**店长亲自上阵**：厨师忙不过来，店长自己去后厨炒这道菜。（本质：CallerRunsPolicy调用者线程执行）
- **老** —— 像**踢掉最前排的号**：把等最久的那个人请走，让新来的坐下。（本质：DiscardOldestPolicy丢弃队列最老任务）

## 面试话术
- "线程池满了之后有四种拒绝策略，口诀是**拒抛弃，caller跑**——AbortPolicy直接抛异常，DiscardPolicy静默丢弃，DiscardOldestPolicy丢掉最老任务，CallerRunsPolicy让提交任务的线程自己执行。默认是AbortPolicy。如果任务不能丢，一般用CallerRunsPolicy，相当于给线程池降压。也可以自定义实现RejectedExecutionHandler。"

## 防混补丁
- 容易和"队列满了才触发拒绝"搞混。实际上队列满了且线程数达到maximumPoolSize才会触发拒绝。补丁：**队满且人满，才拒客**。
- 容易把Discard和DiscardOldest搞混。补丁：**Discard丢新的，Oldest丢老的**。

## 追问预演
- **问：四种策略分别适用于什么场景？**
  - 答：Abort适合快速失败、及时发现问题的场景；Discard适合允许丢任务的日志/埋点类非核心任务；DiscardOldest适合新任务比老任务更重要的实时场景；CallerRuns适合不允许丢任务且能接受主线程降速的场景。
- **问：如何自定义拒绝策略？**
  - 答：实现RejectedExecutionHandler接口，重写rejectedExecution(Runnable r, ThreadPoolExecutor executor)方法，可以做日志、降级、转存MQ等。
- **问：CallerRunsPolicy会不会导致主线程阻塞？**
  - 答：会，调用者线程（可能是主线程）自己执行任务，相当于一种反压机制，让提交速度自然降下来。
- **问：拒绝策略和队列类型有关系吗？**
  - 答：有，比如SynchronousQueue不存储元素，提交即消费，更容易快速触发热拒绝；LinkedBlockingQueue有缓冲，能抗一波峰值。

## 关联知识点
- [ ] 你了解Java线程池的原理吗
- [ ] 如何合理地设置Java线程池的线程数
- [ ] AQS原理
- [ ] 线程池执行流程

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
