---
type: 列举型
domain: Java
anchor: 反
rhyme: 反工责管，五模式
created: 2026-06-13
---

## 速记卡片

反 | 反工责管，五模式 | Reactor/工厂/责任链/观察者/策略/单例

---

## 原始知识

- **Reactor模式**：事件驱动，IO多路复用，一个线程处理多个连接
- **工厂模式**：ChannelFactory创建Channel，PooledByteBufAllocator分配缓冲区
- **责任链模式**：ChannelPipeline中的handler链式处理，入站/出站依次传递
- **观察者模式**：ChannelFutureListener监听IO事件完成，异步回调
- **策略模式**：EventExecutorChooser选择线程策略（轮询/随机等）
- **单例模式**：部分全局组件单例存在

---

## 顺口溜

反工责管，五模式，反应工厂责任链，观察策略单例全。

---

## 单字锚点 + 防崩推导

- **锚点字**：反
- **扩展口诀**：反工责管，五模式
- **为什么选它**：Reactor是Netty最核心的设计模式，"反"是Reactor的首字，也是Netty高性能的灵魂
- **推导链**：
  1. 反 → Reactor（反应器模式）→ 事件驱动 + IO多路复用
  2. 工 → 工厂模式 → ChannelFactory、ByteBufAllocator → 负责创建对象
  3. 责 → 责任链模式 → ChannelPipeline → handler像链条一环扣一环
  4. 管 → 观察者模式（谐音"观"→管）+ 策略模式（管=管理策略）+ 单例模式（管=全局管理）
  5. 五模式 = Reactor + 工厂 + 责任链 + 观察者 + 策略（+单例作为补充）
  6. 反工责管 = 反应器、工厂、责任链、观察者/策略/单例

---

## 一字一画面

- **反** —— 像反应堆里中子撞击原子核：透明的球形反应堆中心，一颗中子（事件）飞速撞入铀原子核（Channel），瞬间触发链式反应，释放巨大能量却不爆炸（本质：Reactor模式，一个事件轮询线程调度大量IO事件，高效且可控）
- **工** —— 像自动化流水线机器人造零件：黄色机械臂在流水线上精准抓取铁板，冲压、切割、焊接一气呵成，每5秒产出一个标准零件（本质：工厂模式，ChannelFactory按统一标准批量创建Channel对象）
- **责** —— 像消防队接力传水桶灭火：一排消防员站成直线，第一个人从河边舀水，传给下一个，再下一个，最后一个人浇向火源，每个人只负责递给自己下家（本质：责任链模式，ChannelPipeline中handler依次处理入站/出站事件，各handler职责单一）
- **观** —— 像观众盯着舞台等演员谢幕：剧院里观众（Listener）坐在座位上，眼睛盯着红色大幕（Future），一旦幕布拉开演员鞠躬（IO完成），观众立刻鼓掌（触发回调）（本质：观察者模式，ChannelFutureListener注册到Future上，事件完成时异步通知）
- **策** —— 像教练根据对手换战术板：足球教练手里拿着三块不同颜色的战术板，看到对手阵型后，迅速抽出红色板子（轮询策略）布置球员站位（本质：策略模式，EventExecutorChooser根据配置选择不同线程分配算法）

---

## 面试话术

1. "Netty里面主要用了六种设计模式，我归纳为'反工责管'：最核心的是Reactor反应器模式，配合工厂模式创建Channel，责任链模式处理Pipeline，还有观察者模式做异步回调，策略模式选择线程，以及单例管理全局组件。"
2. "Reactor模式是Netty高性能的基础，它基于IO多路复用，用一个或少量的线程就能管理成千上万个连接，避免了传统阻塞IO一个连接一个线程的弊端。"
3. "责任链模式体现在ChannelPipeline上，编码、解码、业务处理都拆成独立的handler，像流水线一样传递，非常清晰。"

---

## 防混补丁

容易和 **Tomcat 的 IO 模型** 搞混？

**补丁口诀**：Netty反模式，Tomcat连线程，反应堆是事件驱，连接器是请求接。

---

## 追问预演

1. **问**：Reactor模式有哪些变体？Netty用的是哪种？
   **答**：单线程Reactor、多线程Reactor、主从Reactor。Netty默认用主从Reactor（BossGroup+WorkerGroup），Boss接收连接，Worker处理IO。

2. **问**：责任链模式中handler是怎么区分入站和出站的？
   **答**：ChannelInboundHandler处理入站事件（读数据、连接建立），ChannelOutboundHandler处理出站事件（写数据、绑定端口），Pipeline里按顺序排列。

3. **问**：观察者模式和回调函数有什么区别？
   **答**：回调是一对一，观察者是多对一。ChannelFuture可以添加多个Listener，一个事件完成时通知所有观察者。

4. **问**：ByteBuf为什么要用工厂模式？
   **答**：因为ByteBuf有堆内存、直接内存、池化、非池化等多种类型，用PooledByteBufAllocator/UnpooledByteBufAllocator统一创建，隐藏具体实现。

5. **问**：Netty怎么保证单例组件的线程安全？
   **答**：类似EventLoopGroup中的组件通常采用饿汉式单例或静态内部类，配合volatile和CAS操作保证并发安全。

---

## 关联知识点

- NIO与BIO/AIO区别
- Selector / Channel / Buffer 核心组件
- TCP粘包拆包与编解码器（ByteToMessageDecoder）
- 内存池化与引用计数（ByteBuf引用计数）
- 心跳检测与空闲状态监听（IdleStateHandler）

---

## 复习记录

| 次数 | 日期 | 效果 |
|------|------|------|
| 第1次 | | |
| 第2次 | | |
| 第3次 | | |
| 第4次 | | |
