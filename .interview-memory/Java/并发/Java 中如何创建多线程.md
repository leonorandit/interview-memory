---
type: 列举型
domain: Java
anchor: 创
rhyme: 创继实，四方式
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 创 | 创继实，四方式 | 继承Thread / 实现Runnable / 实现Callable / 线程池 |

## 原始知识

- **继承Thread类**
- **实现Runnable接口**
- **实现Callable接口**
- 配合**FutureTask**取返回值
- **线程池**（Executors/ThreadPoolExecutor）
- 启动用**start()** 非run()
- Runnable**无返回值**
- Callable**有返回值**

## 顺口溜

创继实池，start才跑。

## 单字锚点 + 防崩推导

- **锚点字**：创
- **扩展口诀**：创继实，四方式
- **为什么选它**：题目问的就是"如何创建"，锚点直接对应问题核心
- **推导链**：创 → 创建多线程 → 继承Thread类（最直接，但单继承受限） → 实现Runnable接口（解耦，推荐） → 实现Callable接口 + FutureTask（有返回值、能抛异常） → 线程池Executors/ThreadPoolExecutor（生产环境推荐，复用线程） → 必须调start()启动新线程

## 一字一画面

**创** —— 像工厂四条生产线：一号线贴着"继承"红牌，直接把模具（Thread）传下去让子类照做；二号线贴着"实现"蓝牌，工人自带图纸（Runnable）交给机器执行；三号线贴着"Callable"绿牌，产完的产品还要贴个质检结果标签（FutureTask收返回值）；四号线贴着"池"金牌，工人复用不辞退，来活就顶上（本质：创建方式从简单到工程化的演进）。

## 面试话术

"Java里创建线程主要有四种方式：继承Thread类、实现Runnable接口、实现Callable配合FutureTask，还有用线程池。"

"生产环境强烈推荐线程池，因为可以复用线程、控制并发数量、便于管理。如果需要返回值或者要抛受检异常，就用Callable配合FutureTask。"

"特别注意，启动线程一定要调start()方法，这样JVM才会新建一个线程来执行；如果直接调run()，那只是普通的方法调用，不会创建新线程。"

## 防混补丁

容易把"Callable"和"Future"搞混，记住：**Callable是任务，FutureTask是包裹，线程池是容器**。

## 追问预演

1. **问**：Runnable和Callable有什么区别？
   **答**：Runnable没有返回值也不能抛受检异常；Callable有返回值，能抛异常，一般需要配合FutureTask或线程池提交使用。

2. **问**：为什么生产环境推荐线程池而不是直接new Thread？
   **答**：减少线程创建和销毁的开销、控制并发线程数、便于统一管理和监控、避免资源耗尽。

3. **问**：start()和run()到底有什么区别？
   **答**：start()会通知JVM创建新的操作系统线程来执行run()里的逻辑；直接调run()就是在当前线程里普通方法调用，没有新线程产生。

## 关联知识点

- 线程生命周期（NEW/RUNNABLE/BLOCKED/WAITING/TIMED_WAITING/TERMINATED）
- 线程池七大参数与四种拒绝策略
- Future模式与CompletableFuture
- 线程安全与并发工具类

## 复习记录

- [ ] 第1次
- [ ] 第2次
- [ ] 第3次
- [ ] 第4次
