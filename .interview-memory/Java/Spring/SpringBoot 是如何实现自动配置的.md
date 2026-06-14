---
type: 因果型
domain: Java
anchor: 自
rhyme: 自条加，三核心
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 自 | 自条加，三核心 | 自动配置 = 条件注解 + SPI加载 + Starter聚合 |

## 原始知识

- `@EnableAutoConfiguration` **开启自动配置**
- `META-INF/spring.factories` **SPI加载AutoConfiguration类**
- `@Conditional` **条件判断**（OnClass/OnBean/OnProperty）
- `spring-boot-autoconfigure` **核心模块**
- Starter **简化依赖聚合**
- 条件不满足 **配置不生效**
- 自动配置类 **按优先级排序**

## 顺口溜

自条加，三核心，
条件注解判分明，
SPI加载进容器，
Starter一包万事兴。

## 单字锚点 + 防崩推导

- **锚点字**：自
- **扩展口诀**：自条加，三核心
- **为什么选它**：自动配置的"自"字直接点题，一看到"自"就联想到自动配置机制
- **推导链**：
  1. 自 → 自动配置
  2. 条 → 条件判断（@Conditional）
  3. 加 → 加载机制（spring.factories SPI）
  4. 三核心 → 条件注解 + SPI加载 + Starter简化

## 一字一画面

- **自** —— 像自动门：红外感应到有人（条件触发），门自动滑开（配置生效），无需手动推拉（减少人工配置）。
- **条** —— 像红绿灯：满足绿灯条件（@ConditionalOnClass存在），车辆通行（Bean注入）；红灯条件不满足，禁止通行（配置跳过）。
- **加** —— 像自动售货机投币：硬币投入（spring.factories声明），货道识别（SpringFactoriesLoader加载），商品掉落（AutoConfiguration类注册到容器）。

## 面试话术

"SpringBoot自动配置主要靠三个东西：第一是`@EnableAutoConfiguration`开启开关；第二是通过`META-INF/spring.factories`这个SPI机制把自动配置类加载进来；第三是用`@Conditional`一系列条件注解来判断当前环境到底该不该生效。最后Starter把这些东西打包，用户加一行依赖就全有了。"

## 防混补丁

**容易和什么搞混？** 有人以为自动配置就是Starter，其实Starter是"依赖包"，自动配置是"逻辑判"。

**补丁口诀**：Starter是外卖盒，自动配置是盒里菜。

## 追问预演

1. **Q：spring.factories和Java SPI有什么区别？**
   A：spring.factories是Spring自定义的增强版，支持多个key-value，更灵活；Java标准SPI是ServiceLoader单一接口实现。

2. **Q：自动配置类冲突怎么办？**
   A：用`@AutoConfigureBefore`/`@AutoConfigureAfter`控制顺序，或用`@Conditional`精确控制生效条件。

3. **Q：如何排除某个自动配置？**
   A：`@EnableAutoConfiguration(exclude=XXX.class)`或配置文件`spring.autoconfigure.exclude`。

## 关联知识点

- SpringFactoriesLoader
- @Conditional 系列注解
- spring-boot-starter-parent
- @AutoConfiguration
- BeanDefinitionRegistryPostProcessor

## 复习记录

- 第1次：
- 第2次：
- 第3次：
- 第4次：
