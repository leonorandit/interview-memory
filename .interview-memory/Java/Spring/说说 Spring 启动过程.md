---
type: 流程型
domain: Java
anchor: 刷
rhyme: 刷加实，五步走
created: 2026-06-14
---

# 说说 Spring 启动过程？

## 速记卡片
`刷 | 刷加实，五步走 | 刷新容器五部曲`

## 原始知识
- **刷**新容器：调用 refresh() 方法启动一切
- **加**载配置：XML / 注解 / 配置类 读入
- **注**册定义：BeanDefinition 存入注册表
- **扩**展加工：BeanFactoryPostProcessor 改定义
- **实**例化：单例 Bean 出生（依赖注入 + AOP 代理）
- **发**布事件：ContextRefreshedEvent 广播启动完成

## 顺口溜
**刷加实，五步走**

## 单字锚点 + 防崩推导
- **锚点字**：**刷**
- **扩展口诀**：**刷加实，五步走**
- **为什么选它**：Spring 启动的总开关就是 `refresh()`，一想"刷"就想到刷新容器，整台机器开始运转。
- **防崩推导**：
  - 刷 → refresh() → 启动容器 → 先加载配置（XML/注解/配置类）
  - 加 → 配置变成 BeanDefinition → 注册到 BeanDefinitionRegistry
  - 实 → 实例化单例 Bean → 依赖注入 + AOP 代理生成
  - 五步走 → 刷(准备环境) → 加(加载配置) → 实(实例化) → 扩(后置处理) → 发(事件发布)
  - 只记"刷"：refresh 里按顺序调方法，每个方法名字就是步骤提示

## 一字一画面
- **刷** —— 像**按下绿色启动刷**：机长按下刷新按钮，整个仪表盘亮起来，所有系统自检开始。（本质：refresh() 是 Spring 启动的总阀门）
- **加** —— 像**蓝色传送带进货**：XML、@Component、@Configuration 像不同颜色的包裹被蓝色传送带送进仓库。（本质：配置元数据被读取解析）
- **注** —— 像**红色标签贴货箱**：每个包裹贴上红色条形码标签，记录名字、类型、作用域，存入仓库货架。（本质：BeanDefinition 注册）
- **扩** —— 像**黄色扳手改图纸**：工人拿着黄色扳手，在货箱开箱前修改标签上的配置，比如把数据库地址换成测试环境。（本质：BeanFactoryPostProcessor 扩展点）
- **实** —— 像**白色3D打印机造零件**：打印机根据标签图纸，把零件一个个造出来，小的插进大的里（依赖注入），重要零件包上透明防弹膜（AOP代理）。（本质：Bean 实例化、DI、代理生成）
- **发** —— 像**金色喇叭广播**：仓库大门打开，金色喇叭大喊"开工！"，所有监听器收到信号开始干活。（本质：ContextRefreshedEvent 发布）

## 面试话术
- "Spring 启动可以概括为口诀**刷加实，五步走**。核心是调用 refresh() 方法，先把 XML 或注解配置加载进来，解析成 BeanDefinition 注册好；然后通过 BeanFactoryPostProcessor 扩展修改定义；接着实例化单例 Bean，做完依赖注入和 AOP 代理；最后发布 ContextRefreshedEvent，容器启动完成。"
- "实际跟源码的时候，refresh() 里十几个方法，但面试回答抓住这五步就够了。"

## 防混补丁
- 容易和"SpringBoot 启动流程"搞混。Spring 是**手动刷新容器**，SpringBoot 是**自动推断+ run 方法一键启动**。补丁：**Spring 是刷按钮，SpringBoot 是按开机键**。

## 追问预演
1. **refresh() 里具体调了哪些方法？** → prepareRefresh、obtainFreshBeanFactory、prepareBeanFactory、postProcessBeanFactory、invokeBeanFactoryPostProcessors、registerBeanPostProcessors、initMessageSource、initApplicationEventMulticaster、onRefresh、registerListeners、finishBeanFactoryInitialization、finishRefresh。
2. **BeanFactoryPostProcessor 和 BeanPostProcessor 区别？** → 前者改定义（标签），后者改实例（零件造出来后加工）。
3. **单例 Bean 什么时候实例化？** → 默认懒加载是 false，容器刷新时就把所有非懒加载单例实例化好。
4. **AOP 代理在什么时候生成？** → 在 BeanPostProcessor 的 postProcessAfterInitialization 阶段，用 JDK 动态代理或 CGLIB。

## 关联知识点
- [ ] Spring Bean 生命周期
- [ ] SpringBoot 启动流程
- [ ] Spring AOP 原理
- [ ] BeanFactory 与 ApplicationContext 区别

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
