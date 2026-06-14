---
type: 流程型
domain: Java
anchor: 启
rhyme: 启自运，四步走
created: 2026-06-14
---

# 说说 Springboot 的启动流程？

## 速记卡片
`启 | 启自运，四步走 | 一键启动四阶段`

## 原始知识
- **启**动入口：SpringApplication.run()
- **自**动推断：创建 SpringApplication，**推断**应用类型 / 加载初始化器 / 加载监听器
- **运**行 run：准备 Environment → 创建 ApplicationContext → **刷新**容器 → 执行 Runner
- **自**动装配：@EnableAutoConfiguration **加载** starter 自动配置类

## 顺口溜
**启自运，四步走**

## 单字锚点 + 防崩推导
- **锚点字**：**启**
- **扩展口诀**：**启自运，四步走**
- **为什么选它**：SpringBoot 的灵魂就是"启动即运行"，一个 main 方法一键启动，"启"字代表一切的开始。
- **防崩推导**：
  - 启 → SpringApplication.run() → 一键启动
  - 自 → 自动推断：什么类型应用（Servlet/Reactive/None）？加载哪些初始化器和监听器？
  - 运 → run 方法执行：准备环境 → 创建容器 → 刷新容器 → 执行 Runner
  - 四步走 → 推断（自）→ 准备环境 → 刷新容器 → 执行 Runner
  - 自动装配穿插在刷新容器阶段：@EnableAutoConfiguration 扫描 META-INF/spring.factories 加载 starter
  - 只记"启"：run() → 先造 SpringApplication（自）→ 再 run（运）→ run 里四步走

## 一字一画面
- **启** —— 像**按下红色一键启动键**：机长手指一按红色大按钮，整架飞机引擎轰鸣，所有仪表自检开始。（本质：SpringApplication.run() 是总入口）
- **自** —— 像**智能识别登机牌**：闸机自动扫描机票，判断你是经济舱还是商务舱（推断应用类型），自动分配座位、发耳机、加载对应服务。（本质：创建 SpringApplication 时推断类型，加载 ApplicationContextInitializer 和 ApplicationListener）
- **运** —— 像**绿色跑道四段加速**：飞机在绿色跑道上分四段加速——第一段检查天气环境（准备 Environment），第二段搭建驾驶舱（创建 ApplicationContext），第三段启动所有引擎系统（刷新容器），第四段机长确认起飞（执行 Runner）。（本质：run 方法的四个核心阶段）
- **装** —— 像**蓝色机械臂自动装配件**：刷新容器时，蓝色机械臂从仓库（META-INF/spring.factories）自动抓取 starter 配件，拧螺丝装到飞机上，不用人工一个个装。（本质：@EnableAutoConfiguration 的自动装配机制）

## 面试话术
- "SpringBoot 启动可以概括为口诀**启自运，四步走**。入口是 SpringApplication.run()，首先自动推断应用类型，加载初始化器和监听器；然后 run 方法里四步走：准备 Environment、创建 ApplicationContext、刷新容器、执行 Runner。刷新容器阶段会自动装配，通过 @EnableAutoConfiguration 加载各个 starter 的自动配置类。"
- "和 Spring 传统方式比，SpringBoot 把配置和启动都自动化了，从'刷按钮'变成了'按开机键'。"

## 防混补丁
- 容易和"Spring 启动过程"搞混。Spring 是**手动加载 XML/注解然后 refresh**，SpringBoot 是**自动推断+一键 run**。补丁：**Spring 是手刷，SpringBoot 是一键启**。

## 追问预演
1. **SpringApplication 怎么推断应用类型？** → 看 classpath 里有没有 Servlet、Reactive 相关类，判断是 SERVLET / REACTIVE / NONE。
2. **初始化器和监听器什么时候加载？** → 从 META-INF/spring.factories 读取，创建 SpringApplication 时就加载好。
3. **自动装配发生在哪一步？** → refresh 容器阶段，@EnableAutoConfiguration 借助 AutoConfigurationImportSelector 加载 spring.factories 里的自动配置类。
4. **CommandLineRunner 和 ApplicationRunner 区别？** → 都在容器启动完成后执行，前者参数是 String 数组，后者参数是 ApplicationArguments，后者更友好。
5. **Environment 准备阶段做了什么？** → 加载配置文件（application.properties/yml）、解析命令行参数、激活 profile、绑定到 Environment 对象。

## 关联知识点
- [ ] Spring 启动过程
- [ ] 自动装配原理
- [ ] SpringApplication 事件监听
- [ ] SpringBoot Starter 自定义

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
