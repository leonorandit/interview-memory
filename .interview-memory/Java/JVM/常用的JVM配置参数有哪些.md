---
type: 列举型
domain: Java
anchor: 常
rhyme: 堆代收，八参数
created: 2026-06-13
---

# 常用的 JVM 配置参数有哪些

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 堆 | 堆代收，八参数 | 堆内存、元空间、GC、日志、栈、直接内存、OOM 转储 |

## 原始知识

- **堆** 内存（**-Xms** / **-Xmx** / -Xmn / -XX:NewRatio）
- **代** 元空间（**-XX:MaxMetaspaceSize**）
- **收** 集器（**-XX:+UseG1GC** / -XX:+UseZGC）
- **日** 志（**-Xloggc** / -XX:+PrintGCDetails）
- **栈** 大小（**-Xss**）
- **直** 接内存（**-XX:MaxDirectMemorySize**）
- **转** 储（**-XX:+HeapDumpOnOutOfMemoryError**）
- **路** 径（**-XX:HeapDumpPath**）

## 顺口溜

堆代收，八参数  
（堆内存、元空间、收集器、日志、栈、直接内存、转储、路径）

## 单字锚点 + 防崩推导

> **锚点字：堆**
>
> **扩展口诀**：堆代收，八参数
>
> **为什么选它**：JVM 参数里最容易被问到、最影响性能的就是**堆内存参数**，记住"堆"就像抓住了参数地图的中心点。
>
> **推导链**：
> - 堆 → **堆**内存参数（-Xms 初始堆、-Xmx 最大堆、-Xmn 年轻代、-XX:NewRatio 老年代比例）
> - 代 → **元空间**（-XX:MaxMetaspaceSize，Java 8 后永久代被元空间取代）
> - 收 → **收**集器（-XX:+UseG1GC、-XX:+UseZGC、-XX:+UseParallelGC 等）
> - 八参数补齐 →
>   - **日**志（-Xloggc:file、-XX:+PrintGCDetails）
>   - **栈**（-Xss，线程栈大小，影响线程数上限）
>   - **直**接内存（-XX:MaxDirectMemorySize，Netty / NIO 常用）
>   - **转**储（-XX:+HeapDumpOnOutOfMemoryError，OOM 时自动生成堆快照）
>   - **路**径（-XX:HeapDumpPath，指定堆转储文件存放位置）

## 一字一画面

**堆** —— 像[一座金字塔仓库]：底座是**堆**内存（-Xms/-Xmx 划定仓库大小），上层年轻代区域贴**代**字标签（-Xmn 划年轻代专区），仓库门口站着穿不同制服的**收**垃圾车队（UseG1GC / UseZGC），墙上挂着黑板记录进出**日**志（-Xloggc），每个工人头顶有自己的小工作台**栈**（-Xss），仓库外还有一块直接卸货区标着**直**（MaxDirectMemorySize），一旦仓库爆炸就会自动拍一张全景照片**转**存到指定**路**径（HeapDumpOnOutOfMemoryError + HeapDumpPath）。（本质：JVM 参数围绕运行时数据区的每一块区域配置）

## 面试话术

"常用的 JVM 参数我归纳为'堆代收，八参数'：**堆**内存用 -Xms/-Xmx/-Xmn 控制；**代**元空间用 -XX:MaxMetaspaceSize；GC **收**集器选 -XX:+UseG1GC 或 UseZGC；GC **日**志用 -Xloggc；线程**栈**用 -Xss；**直**接内存用 -XX:MaxDirectMemorySize；OOM 时自动**转**储用 -XX:+HeapDumpOnOutOfMemoryError，再配个**路**径 -XX:HeapDumpPath。"

## 防混补丁

容易和"GC 调优参数"搞混？一句补丁：  
**GC 调优参数只是 JVM 参数的子集，JVM 参数还包括编译、线程、内存模型等其他配置。**

## 追问预演

1. **问：-Xms 和 -Xmx 一般怎么设？**  
   答：生产环境建议设成一样，避免运行时动态扩缩容触发 Full GC。

2. **问：-Xmn 设多大合适？**  
   答：一般设为堆的 1/3 到 1/2，具体看对象生命周期，短生命周期对象多可以设大些。

3. **问：元空间（Metaspace）和永久代（PermGen）区别？**  
   答：Java 8 前永久代在堆内，固定上限容易 OOM；Java 8 后元空间在本地内存，默认自动扩，但生产环境建议设 MaxMetaspaceSize 防止无限制增长。

4. **问：-Xss 默认值是多少？**  
   答：Linux 64 位下 HotSpot 默认 1MB，栈越小能创建的线程数越多，但过深递归会 StackOverflow。

## 关联知识点

- [如何对 Java 的垃圾回收进行调优](如何对Java的垃圾回收进行调优.md)
- JVM 内存模型（堆/栈/元空间/直接内存/PC 寄存器）
- G1 / ZGC 收集器原理
- MAT / JProfiler 堆转储分析

## 复习记录

| 次数 | 日期 | 熟练度 |
|------|------|--------|
| 第 1 次 | | |
| 第 2 次 | | |
| 第 3 次 | | |
| 第 4 次 | | |
