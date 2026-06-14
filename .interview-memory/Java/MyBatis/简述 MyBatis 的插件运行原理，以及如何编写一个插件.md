---
type: 因果型
domain: Java
anchor: 代
rhyme: 代四接，拦签名
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 代 | 代四接，拦签名 | 动态代理、四大接口、拦截签名配置 |

## 原始知识

- **动态代理**：Plugin类实现**InvocationHandler**，JDK代理
- **四大接口**：Executor、StatementHandler、ParameterHandler、ResultSetHandler
- **@Intercepts注解**：配置拦截签名（Signature）
- **intercept方法**：实现拦截逻辑
- **plugin方法**：包装目标对象，返回代理

## 顺口溜

代四接，拦签名，
代理包目标，
拦截有签名，
四路都能行。

## 单字锚点 + 防崩推导

- **锚点字**：代
- **扩展口诀**：代四接，拦签名
- **为什么选它**："代"直接指向MyBatis插件的底层机制——**动态代理**，这是所有拦截能力的根基
- **推导链**：
  1. 代 → 动态代理（JDK Proxy）→ Plugin实现InvocationHandler
  2. 四 → 四大可拦截对象 → Executor（执行）、StatementHandler（SQL处理）、ParameterHandler（参数）、ResultSetHandler（结果集）
  3. 接 → 拦截接口方法 → @Intercepts + @Signature 指定类+方法+参数
  4. 拦 → intercept方法写逻辑 → 改SQL、改参数、改结果
  5. 签名 → Signature{type=Executor.class, method="query", args={...}} → 精确匹配拦截点

## 一字一画面

- **代** —— 像替身演员：导演喊Action（调用方法），替身先上场做动作（拦截逻辑），再交给真演员（目标方法）（本质：InvocationHandler拦截方法调用）
- **四** —— 像十字路口：四条路（四大接口），每条路都能设卡检查（本质：全链路可拦截）
- **签** —— 像门禁刷卡：只有刷卡匹配（Signature匹配）的人才能通过并触发警报（拦截逻辑）（本质：精确方法签名匹配）

## 面试话术

"MyBatis插件基于动态代理实现，核心就是'代四接，拦签名'。Plugin类实现了InvocationHandler，可以拦截四大对象：Executor、StatementHandler、ParameterHandler、ResultSetHandler。通过@Intercepts和@Signature配置拦截点，在intercept方法里写增强逻辑。"

## 防混补丁

- **容易和Spring AOP搞混**：AOP用代理增强业务Bean，MyBatis插件只拦截四大接口
- **补丁口诀**：Spring AOP切业务，MyBatis插件切SQL

## 追问预演

| 追问 | 简要答案 |
|------|----------|
| 四大接口各自职责？ | Executor调度执行；StatementHandler处理SQL；ParameterHandler设参数；ResultSetHandler映射结果 |
| 如何编写一个分页插件？ | 拦截Executor.query，解析SQL拼接limit offset，处理count查询 |
| plugin()方法的作用？ | 用Plugin.wrap(target, this)包装目标对象，返回代理实例 |
| 能拦截Mapper接口方法吗？ | 不能直接拦截Mapper接口，只能拦截四大核心接口 |
| 多个插件执行顺序？ | 按配置顺序层层代理，形成代理链 |

## 关联知识点

- JDK动态代理 vs CGLIB
- InvocationHandler原理
- MyBatis执行流程（SqlSession→Executor→StatementHandler）
- 分页插件PageHelper原理
- SQL解析与改写

## 复习记录

- 第1次：__________
- 第2次：__________
- 第3次：__________
- 第4次：__________
