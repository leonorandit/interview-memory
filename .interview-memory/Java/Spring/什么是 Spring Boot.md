---
type: 因果型
domain: Java
anchor: 简
rhyme: 简快约，三定义
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 简 | 简快约，三定义 | 简化配置+快速开发+约定大于配置 |

## 原始知识

- Spring**快速开发脚手架**
- **自动配置** + Starter依赖
- **内嵌服务器**（Tomcat/Jetty/Undertow）
- 独立运行 **`java -jar`**
- **Actuator**监控端点
- Spring Cloud**基础底座**
- **约定大于配置**理念

## 顺口溜

简配置，约开发，内嵌服务器跑起来。

## 单字锚点 + 防崩推导

- **锚点字**：简
- **扩展口诀**：简快约，三定义
- **为什么选它**：Spring Boot的核心价值就是"简化"Spring应用的开发和部署
- **推导链**：简 → Spring Boot脚手架 → 自动配置（AutoConfiguration）+ Starter一站式依赖 → 内嵌Tomcat/Jetty/Undertow → java -jar独立运行 → Actuator监控端点 → Spring Cloud微服务基础底座

## 一字一画面

**简** —— 像一键启动的红色跑车：驾驶座上只有一个大大的红色圆形启动按钮，按下去之后引擎自动预热、档位自动挂到D档、导航自动亮起规划路线，驾驶员直接踩油门就走，不需要自己拧钥匙、踩离合、挂挡（本质：约定大于配置，开箱即用，默认都帮你设好了）。

## 面试话术

"Spring Boot是Spring框架的快速开发脚手架，核心就三个字：简、快、约。"

"简是简化配置，靠自动配置和Starter依赖，比如引入spring-boot-starter-web就自动有了Web开发全套；快是快速启动和部署，因为它内嵌了Tomcat这些服务器，可以直接java -jar跑起来；约是约定大于配置，默认设置就能工作。"

"它还自带Actuator做监控和健康检查，也是Spring Cloud微服务体系的底座。"

## 防混补丁

容易和Spring Framework搞混，记住：**Boot是Framework的"快车道"，不是替代品**。

## 追问预演

1. **问**：自动配置原理是什么？
   **答**：核心是@EnableAutoConfiguration注解，配合META-INF/spring.factories里注册的自动配置类，加上@Conditional条件注解判断是否生效。

2. **问**：Starter是什么？
   **答**：是一站式依赖组合包，比如spring-boot-starter-web把Spring MVC、Tomcat、Jackson等都打包好了。

3. **问**：内嵌服务器怎么切换成Jetty？
   **答**：排除掉spring-boot-starter-web里的Tomcat依赖，再引入spring-boot-starter-jetty就行。

## 关联知识点

- Spring Framework核心（IoC/AOP）
- Spring Cloud微服务
- 自动配置源码（spring.factories）
- Actuator端点与安全配置

## 复习记录

- [ ] 第1次
- [ ] 第2次
- [ ] 第3次
- [ ] 第4次
