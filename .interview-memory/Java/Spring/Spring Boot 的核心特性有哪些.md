---
type: 列举型
domain: Java
anchor: 自
rhyme: 自约独，三特性
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 自 | 自约独，三特性 | 自动配置、约定配置、独立运行 |

## 原始知识

- **自动配置**：根据类路径自动装配Bean
- **约定优于配置**：减少XML，按默认约定开发
- **独立运行**：内嵌Tomcat/Jetty/Undertow
- **Starter依赖**：一键引入功能模块
- **Actuator监控**：端点暴露健康、指标信息
- **SpringApplication**：简化启动类与配置

## 顺口溜

自约独，三特性，
Starter来搭积木，
Actuator睁眼看，
一行启动飞上天。

## 单字锚点 + 防崩推导

- **锚点字**：自
- **扩展口诀**：自约独，三特性
- **为什么选它**："自"是Spring Boot最标志性的特征——**自动配置**，面试官听到"自动配置"基本就认定你懂Spring Boot
- **推导链**：
  1. 自 → 自动配置（Auto-configuration）→ 扫描classpath，条件注解@Conditional
  2. 约 → 约定优于配置（Convention over Configuration）→ 默认配置替代XML
  3. 独 → 独立运行（Standalone）→ 内嵌容器，jar包直接java -jar
  4. 还有Starter（依赖管理）和Actuator（监控）作为加分项

## 一字一画面

- **自** —— 像自动售货机：投币（加依赖）→ 货自己掉出来（Bean自动装配）（本质：条件化自动装配）
- **约** —— 像默认座椅：不用调，坐下就舒服（本质：减少决策成本）
- **独** —— 像随身音响：不用接功放，自带喇叭（本质：内嵌容器，独立部署）

## 面试话术

"Spring Boot最核心的就三个字：自、约、独。自动配置让开发零XML起步；约定优于配置省掉大量样板代码；独立运行内嵌容器，一个jar包就能启动。"

## 防混补丁

- **容易和Spring搞混**：Spring是容器框架，Spring Boot是快速开发工具
- **补丁口诀**：Spring造轮子，Boot搭快车

## 追问预演

| 追问 | 简要答案 |
|------|----------|
| 自动配置的原理是什么？ | @EnableAutoConfiguration + META-INF/spring.factories，条件注解判断 |
| Starter的作用？ | 聚合依赖+自动配置，如spring-boot-starter-web |
| Actuator有哪些端点？ | /health、/metrics、/info，可暴露运行状态 |
| 如何自定义自动配置？ | 写@Configuration + @Conditional，配META-INF/spring.factories |

## 关联知识点

- Spring IoC / AOP
- Spring MVC
- Spring Cloud
- 条件注解（@ConditionalOnClass等）
- 内嵌Servlet容器原理

## 复习记录

- 第1次：__________
- 第2次：__________
- 第3次：__________
- 第4次：__________
