---
type: 因果型
domain: Java
anchor: 修
rhyme: 调set核，两参数
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 调 | 调set核，两参数 | setCorePoolSize + setMaximumPoolSize |

## 原始知识

- ThreadPoolExecutor**支持动态调整**
- **setCorePoolSize**修改核心线程数
- **setMaximumPoolSize**修改最大线程数
- JDK**1.6+**支持
- 调大立即**创建新线程**
- 调小等**空闲销毁**
- **allowCoreThreadTimeOut**控制核心线程回收

## 顺口溜

调大立即创，调小空闲亡，配allow回收强。

## 单字锚点 + 防崩推导

- **锚点字**：调
- **扩展口诀**：调set核，两参数
- **为什么选它**："调"=动态调整，线程池运行期修改核心数的唯一考点就是"调"
- **推导链**：调 → ThreadPoolExecutor → setCorePoolSize / setMaximumPoolSize → JDK1.6+ → 调大立即创建 / 调小等空闲销毁 → allowCoreThreadTimeOut让核心线程也能超时回收

## 一字一画面

**调** —— 像调音台的旋钮：一只手拧动标着"核心数"的银色旋钮，左边绿灯亮起表示当前活跃线程，右边黄灯亮起表示最大上限，拧左边核心数变大时立即蹦出新线程小人，拧变小时多余线程小人打个哈欠下班消失（本质：运行期动态控制并发度）。

## 面试话术

"能修改。ThreadPoolExecutor提供了两个set方法，setCorePoolSize和setMaximumPoolSize，JDK1.6之后就支持了。"

"调大的时候，如果当前活跃线程数不够，会立即创建新线程；调小的时候，多出来的线程不会强制杀死，而是等它们空闲了再销毁。"

"另外可以开allowCoreThreadTimeOut，这样核心线程在空闲一段时间后也能被回收，默认核心线程是不会被回收的。"

## 防混补丁

容易和"线程池创建后参数固定"搞混，记住：**调音台随时拧，运行期也能调**。

## 追问预演

1. **问**：调小核心数会立即销毁线程吗？
   **答**：不会，会等线程空闲后自然销毁。

2. **问**：allowCoreThreadTimeOut是干嘛的？
   **答**：默认核心线程即使空闲也不会被回收，开了这个之后核心线程也能像非核心线程一样超时回收。

3. **问**：哪些线程池不支持动态调整？
   **答**：Executors创建的固定线程池、缓存线程池本质都是ThreadPoolExecutor，都支持；但如果自己封装死了接口就不行。

## 关联知识点

- 线程池七大参数
- 拒绝策略（AbortPolicy/CallerRunsPolicy等）
- 线程生命周期
- keepAliveTime含义

## 复习记录

- [ ] 第1次
- [ ] 第2次
- [ ] 第3次
- [ ] 第4次
