---
type: 流程型
domain: Java
anchor: 方
rhyme: 运推刷，四步走
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 运 | 运推刷，四步走 | run → 推断 → 初始化 → 刷新上下文 → 启动容器 |

## 原始知识

- `SpringApplication.run()` **入口方法**
- 推断Web应用类型 **Servlet/Reactive/None**
- 加载BootstrapRegistryInitializer **和ApplicationContextInitializer**
- 创建并刷新 **ApplicationContext**
- 启动嵌入式容器 **Tomcat/Jetty/Undertow**
- 注册ShutdownHook **优雅关闭**
- 发布事件 **ApplicationStartedEvent等**

## 顺口溜

运推刷，四步走，
推断类型先看头，
刷新容器Bean尽有，
内嵌容器跑不休。

## 单字锚点 + 防崩推导

- **锚点字**：运
- **扩展口诀**：运推刷，四步走
- **为什么选它**：一切从`SpringApplication.run()`开始，"运"字是启动的源头动作
- **推导链**：
  1. 运 → SpringApplication.run()启动
  2. 推 → 推断Web类型（Servlet/Reactive）
  3. 刷 → 刷新ApplicationContext（创建容器、加载BeanDefinition、实例化Bean）
  4. 四步走 → 推断类型 → 加载初始化器 → 刷新上下文 → 启动嵌入式容器

## 一字一画面

- **运** —— 像按下跑步机启动键：手指按绿色START（run()），机器自检（推断类型），传送带开始转动（初始化器加载），进入匀速跑动（容器运行）。
- **推** —— 像侦探推理：看现场脚印（类路径查Servlet/Reactive），判断凶手身份（确定Web类型），决定用哪套侦查方案（创建对应ApplicationContext）。
- **刷** —— 像手机刷机：进入Recovery模式（创建上下文），清除旧数据（加载BeanDefinition），写入新系统（实例化初始化Bean），重启进入桌面（容器就绪）。
- **四** —— 像四节火箭：第一节点火推断（Web类型），第二节推进初始化（Initializer），第三节主引擎刷新（Context），第四节分离入轨（嵌入式容器启动）。

## 面试话术

"调用`SpringApplication.run()`之后，SpringBoot大概走四步：首先推断是Servlet还是Reactive应用；然后加载各种初始化器；接着创建并刷新ApplicationContext，把Bean都扫描实例化；最后启动内嵌的Tomcat或者Jetty，注册一个ShutdownHook保证优雅关闭。整个过程就是把传统外置容器那一套内嵌化了。"

## 防混补丁

**容易和什么搞混？** 有人以为是main方法直接启动Tomcat，实际上是Spring容器刷新后才触发容器启动。

**补丁口诀**：先刷上下文后起飞，容器躲在Context里。

## 追问预演

1. **Q：推断Web类型的依据是什么？**
   A：类路径检测：有`javax.servlet.Servlet`且没有`reactive`相关就是Servlet；有`org.springframework.web.reactive.DispatcherHandler`是Reactive。

2. **Q：嵌入式容器怎么启动的？**
   A：刷新Context时，ServletWebServerApplicationContext会触发`onRefresh()`，创建WebServerFactory，生成嵌入式Tomcat并启动。

3. **Q：ShutdownHook作用？**
   A：JVM关闭时回调，调用`close()`优雅释放资源，先停容器再销毁Bean，防止请求中断和数据丢失。

## 关联知识点

- ServletWebServerApplicationContext
- ReactiveWebServerApplicationContext
- ApplicationContextInitializer
- WebServerFactory
- SpringApplicationRunListeners
- ApplicationEvent

## 复习记录

- 第1次：
- 第2次：
- 第3次：
- 第4次：
