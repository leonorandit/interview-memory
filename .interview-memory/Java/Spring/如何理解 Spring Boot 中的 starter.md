---
type: 因果型
domain: Java
anchor: 启
rhyme: 启依配，三作用
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 启 | 启依配，三作用 | Starter = 依赖聚合 + 自动配置 + 约定简化 |

## 原始知识

- Starter是 **预定义依赖集合**
- pom.xml **聚合相关依赖**
- 包含 **自动配置类**
- 约定大于配置 **开箱即用**
- 命名规范 **spring-boot-starter-xxx**
- 与自动配置 **紧密配合**
- 自定义Starter **META-INF/spring.factories**

## 顺口溜

启依配，三作用，
依赖一堆自动送，
约定优先配少用，
命名统一找得动。

## 单字锚点 + 防崩推导

- **锚点字**：启
- **扩展口诀**：启依配，三作用
- **为什么选它**：Starter翻译为"启动器"，"启"字直接对应，看到"启"就想到它是项目的启动入口
- **推导链**：
  1. 启 → Starter启动器
  2. 依 → 依赖聚合（pom.xml汇集jar包）
  3. 配 → 自动配置（带AutoConfiguration类）
  4. 三作用 → 聚合依赖 + 自动配置 + 约定简化

## 一字一画面

- **启** —— 像汽车一键启动：手指按下（引入Starter），引擎自检（条件判断），全车通电（依赖就绪），直接挂挡走人（开箱即用）。
- **依** —— 像火锅套餐：一份毛肚套餐（Starter）里，毛肚、锅底、蘸料（相关依赖）全部配齐，不用单点（省去逐个找依赖）。
- **配** —— 像智能家居场景模式：说"回家模式"（加starter依赖），灯自动亮、空调自动开、窗帘自动拉（自动配置全部生效）。

## 面试话术

"Starter你可以理解成一个'依赖套餐'，它做了三件事：第一把相关jar包都聚合到pom里；第二带了自动配置类，加进来就能自动生效；第三遵循约定大于配置，基本不用写额外配置。比如`spring-boot-starter-web`，一行依赖就把Tomcat、SpringMVC全带进来了。"

## 防混补丁

**容易和什么搞混？** 有人把Starter和自动配置划等号，其实Starter是"容器"，自动配置是"内容物"。

**补丁口诀**：Starter是礼盒装，自动配置是盒中糖。

## 追问预演

1. **Q：自定义Starter怎么做？**
   A：新建模块，pom引入`spring-boot-autoconfigure`，写AutoConfiguration类，resources下建`META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports`声明配置类。

2. **Q：spring-boot-starter-parent是Starter吗？**
   A：不是，parent是父POM负责版本管理，本身不含业务依赖；命名不带xxx后缀的是特殊用途。

3. **Q：Starter和普通Maven依赖区别？**
   A：普通依赖只引jar包；Starter还包含自动配置、版本兼容、默认属性，是场景化解决方案。

## 关联知识点

- spring-boot-autoconfigure
- @EnableAutoConfiguration
- META-INF/spring.factories
- spring-boot-starter-parent
- 依赖管理（Dependency Management）

## 复习记录

- 第1次：
- 第2次：
- 第3次：
- 第4次：
