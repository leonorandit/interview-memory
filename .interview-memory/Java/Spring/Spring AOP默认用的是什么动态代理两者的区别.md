---
type: 对比型
domain: Java
anchor: 接
rhyme: 接C接，两代理
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 接 | 接C接，两代理 | JDK接口代理 vs CGLIB继承代理 |

## 原始知识

- **默认JDK动态代理**：目标类**必须实现接口**
- **无接口时CGLIB代理**：通过**继承**目标类生成子类
- **JDK原理**：基于接口 + InvocationHandler**反射**调用
- **CGLIB原理**：基于**字节码生成** + MethodInterceptor
- **性能差异**：JDK反射调用慢，CGLIB用FastClass索引加速
- **Spring Boot 2.x默认CGLIB**：配置项 `spring.aop.proxy-target-class=true`

## 顺口溜

有接口JDK，没接口CGLIB，Boot二默认接C接。

## 单字锚点 + 防崩推导

**锚点字：接**

- **扩展口诀**：接C接，两代理
- **为什么选它**：JDK动态代理的核心前提是"接口"，接是接口的代称
- **推导链**：
  1. 接 -> 接口
  2. 有接口用什么？-> JDK动态代理
  3. JDK基于什么？-> InvocationHandler + 反射
  4. 没接口怎么办？-> CGLIB代理
  5. CGLIB基于什么？-> 字节码生成子类（继承）
  6. CGLIB怎么加速？-> FastClass避免反射
  7. Spring Boot 2.x默认谁？-> CGLIB（配置proxy-target-class）
  8. 怎么记顺序？-> 接（JDK）C（CGLIB）接（JDK again，默认先看接口）

## 一字一画面

**接** —— 像USB-TypeC接口：手机有接口就插线充电（JDK），耳机没接口只能放无线充板上（CGLIB绕过接口直接继承能量）（本质：JDK代理要求目标实现接口作为"插口"，CGLIB通过生成子类继承来"无线充电"）。

## 面试话术

Spring AOP默认优先用JDK动态代理，但前提是目标类必须实现了接口。如果没有实现接口，就会退化成CGLIB代理。JDK是基于接口和反射调用，CGLIB是基于ASM字节码生成目标类的子类，然后用FastClass做方法索引来避免反射开销。另外Spring Boot 2.x之后默认改成了CGLIB，可以通过spring.aop.proxy-target-class来配置。

## 防混补丁

容易和静态代理搞混？一句补丁：**静态代理编译写死一对一，动态代理运行时生成一对多**。

## 追问预演

| 追问 | 简要答案 |
|------|----------|
| Spring Boot 2.x为什么默认CGLIB？ | 为了避免代理类型转换异常，让代理类可以直接强转为目标类，同时CGLIB性能更优。 |
| CGLIB有什么缺点？ | 不能代理final类和方法，生成字节码有一定开销。 |
| 怎么强制用JDK代理？ | 设置spring.aop.proxy-target-class=false且目标实现接口。 |

## 关联知识点

- 代理模式（静态/动态）
- Java反射机制
- ASM字节码操作
- AspectJ编译期织入
- Spring事务底层实现

## 复习记录

- [ ] 第1次
- [ ] 第2次
- [ ] 第3次
- [ ] 第4次
