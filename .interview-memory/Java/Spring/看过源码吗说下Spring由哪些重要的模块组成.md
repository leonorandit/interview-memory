---
type: 列举型
domain: Java
anchor: 过
rhyme: 核数W，七模块
created: 2026-06-13
---

# 看过源码吗？说下 Spring 由哪些重要的模块组成？

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 核 | 核数W，七模块 | 核是心脏，W是手脚 |

## 原始知识

- **Core Container**：Beans/Core/Context/SpEL（核心容器）
- **AOP**：Aspects/Instrumentation（面向切面）
- **Data Access**：JDBC/ORM/Tx/JMS（数据访问）
- **Web**：WebMVC/WebFlux/WebSocket/Portlet（Web层）
- **Test**：单元测试和集成测试支持
- **Messaging**：消息传递（JMS/STOMP等）
- **Integration**：企业集成（远程调用/邮件等）

## 顺口溜

核数W，七模块，
容A数Web测信成。
Beans容器管对象，
MVCflux两手撑。

## 单字锚点 + 防崩推导

**锚点字**：核

**扩展口诀**：核数W，七模块

**为什么选它**：核心容器（Core Container）是Spring的根基，"核"字代表一切从这里开始。

**推导链**：
1. 核 → Core Container核心容器（Beans/Core/Context/SpEL）
2. 数 → Data Access数据访问层（JDBC/ORM/Transaction/JMS）
3. W → Web层（WebMVC/WebFlux/WebSocket/Portlet）
4. 七模块 → 核（Core Container）、A（AOP）、数（Data Access）、W（Web）、测（Test）、信（Messaging）、成（Integration）
5. Core Container细化 → Beans（Bean工厂）、Core（核心工具）、Context（应用上下文）、SpEL（表达式语言）
6. AOP模块 → Aspects（集成AspectJ）、Instrumentation（代理相关）

## 一字一画面

**核** —— 像**一颗棕色核桃裂开两半**：硬壳是Core框架，里面的四瓣仁分别是Beans、Core、Context、SpEL（本质：IoC容器是Spring的心脏，所有对象都在这里孕育）

**W** —— 像**两只白色天鹅摆成W字形飞翔**：左边的天鹅是WebMVC（同步阻塞），右边的天鹅是WebFlux（异步非阻塞），尾巴连着WebSocket和Portlet（本质：Web层两手抓，传统和响应式并重）

## 面试话术

"Spring主要分七大模块，最核心的当然是Core Container，包含Beans、Core、Context和SpEL，这是IoC和依赖注入的基础。然后是AOP模块，数据访问层有JDBC、ORM、Transaction这些，Web层最熟悉的是SpringMVC，现在也支持WebFlux响应式编程。另外还有Test测试模块、Messaging消息模块和Integration集成模块。"

## 防混补丁

容易和SpringBoot模块搞混？一句补丁："Spring是厨房七大件，Boot是打包好的外卖盒。"

## 追问预演

**Q：Core Container里各组件的作用？**
A：Beans是Bean工厂，Core是基础工具，Context是应用上下文，SpEL是表达式语言。

**Q：Spring WebFlux和SpringMVC的区别？**
A：MVC基于Servlet阻塞式，WebFlux基于Reactor非阻塞式，支持高并发。

**Q：ORM模块具体指什么？**
A：Spring对Hibernate、JPA、MyBatis等ORM框架的集成支持，不是ORM本身。

**Q：你读过哪些Spring源码？**
A：重点看过IoC容器的refresh流程、Bean的生命周期、AOP的代理创建过程。

## 关联知识点

- IoC/DI原理
- Bean生命周期
- AOP实现机制
- SpringMVC执行流程
- SpringBoot自动配置

## 复习记录

- 第1次：2026-06-13
- 第2次：
- 第3次：
- 第4次：
