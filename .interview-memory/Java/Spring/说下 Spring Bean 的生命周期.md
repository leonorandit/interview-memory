---
type: 流程型
domain: Java
anchor: 生
rhyme: 生初消，五阶段
created: 2026-06-13
---

## 速记卡片

生 | 生初消，五阶段 | 实例化→属性赋值→初始化→使用→销毁

---

## 原始知识

- **实例化**：new 或反射创建空对象
- **属性赋值**：populateBean，DI依赖注入
- **初始化**：InitializingBean、init-method、@PostConstruct
- **使用**：业务逻辑运行
- **销毁**：DisposableBean、destroy-method、@PreDestroy

---

## 顺口溜

生初消，五阶段，实例赋值初始化，业务跑完就销毁。

---

## 单字锚点 + 防崩推导

- **锚点字**：生
- **扩展口诀**：生初消，五阶段
- **为什么选它**：生命周期=从无到有再到无，"生"是起点，也是题目核心关键词
- **推导链**：
  1. 生 → 生命周期 = 生 → 死（消）
  2. 中间过程 = 初（初始化相关）
  3. 五阶段 = 实例化（生出来）→ 属性赋值（给血肉）→ 初始化（唤醒）→ 使用（干活）→ 销毁（消掉）
  4. 生初消 = 生出来、初始化、消掉 = 头尾和关键中间节点
  5. 五阶段 = 实例化、赋值、初始化、使用、销毁

---

## 一字一画面

- **生** —— 像婴儿从蛋壳裂开出生：一个白白的 Bean 宝宝从 Spring 容器这个大蛋壳里破壳而出（本质：实例化，对象诞生）
- **初** —— 像机器人刚出厂被安装电池和程序：工人拿着螺丝刀给机器人拧上四肢、注入能量核心，然后按下启动按钮双眼亮起蓝光（本质：属性赋值 + 初始化，装配完成并唤醒）
- **消** —— 像烟花燃尽后飘散的黑烟：夜空中最后一朵火花熄灭，化作一缕青烟被风吹散，地面只剩空纸筒（本质：销毁，资源释放）

---

## 面试话术

1. "Spring Bean 的生命周期我一般用五个阶段来记：实例化、属性赋值、初始化、使用、销毁，对应口诀就是'生初消，五阶段'。"
2. "初始化阶段有三种方式可以实现：实现 InitializingBean 接口、配置 init-method、或者用 @PostConstruct 注解，Spring 推荐注解方式。"
3. "销毁阶段也类似，有 DisposableBean、destroy-method 和 @PreDestroy，通常在容器关闭时触发。"

---

## 防混补丁

容易和 **JVM 对象生命周期** 搞混？

**补丁口诀**：Spring管Bean，JVM管堆，容器生灭非GC。

---

## 追问预演

1. **问**：Bean 初始化的执行顺序是什么？
   **答**：@PostConstruct → InitializingBean.afterPropertiesSet() → 自定义 init-method。

2. **问**：Bean 后置处理器在什么时候执行？
   **答**：BeanPostProcessor 在初始化前后各执行一次 postProcessBeforeInitialization 和 postProcessAfterInitialization。

3. **问**：单例 Bean 和原型 Bean 生命周期有什么区别？
   **答**：单例 Bean 随容器创建和销毁；原型 Bean 只负责创建和初始化，不管理销毁，需要调用方自行处理。

4. **问**：Aware 接口是什么时候调用的？
   **答**：在属性赋值之后、初始化之前，比如 BeanNameAware、ApplicationContextAware。

---

## 关联知识点

- Spring IoC 容器启动流程
- BeanPostProcessor 原理
- 循环依赖解决（三级缓存）
- 作用域：singleton / prototype / request / session
- FactoryBean 与 BeanFactory 区别

---

## 复习记录

| 次数 | 日期 | 效果 |
|------|------|------|
| 第1次 | | |
| 第2次 | | |
| 第3次 | | |
| 第4次 | | |
