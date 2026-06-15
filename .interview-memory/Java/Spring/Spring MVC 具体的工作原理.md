---
type: 流程型
domain: Java
anchor: 具
rhyme: 分映适，九步走
created: 2026-06-13
---

## 速记卡片

分 | 分映适，九步走 | DispatcherServlet→HandlerMapping→HandlerAdapter→Controller→ViewResolver→View

---

## 原始知识

- **DispatcherServlet**：前端控制器，接收所有请求
- **HandlerMapping**：映射处理器，根据URL找Controller
- **HandlerAdapter**：适配器，统一调用不同Controller
- **Controller**：处理业务逻辑
- **ModelAndView**：返回数据和视图名
- **ViewResolver**：解析视图，拼前后缀
- **View**：渲染页面
- **返回响应**：输出给浏览器

---

## 顺口溜

分映适，九步走，分发映射适配控，视图解析再渲染。

---

## 单字锚点 + 防崩推导

- **锚点字**：分
- **扩展口诀**：分映适，九步走
- **为什么选它**：DispatcherServlet 是核心，"分"既指分发请求，也是 Dispatcher 的音译首字
- **推导链**：
  1. 分 → DispatcherServlet（分发器）→ 所有请求先经过它
  2. 映 → HandlerMapping（映射）→ 根据URL映射到对应处理器
  3. 适 → HandlerAdapter（适配）→ 适配不同形式的Controller
  4. 九步走 = 请求到达 → DispatcherServlet接收 → HandlerMapping找处理器 → HandlerAdapter适配 → Controller执行业务 → 返回ModelAndView → HandlerAdapter回传 → ViewResolver解析视图 → View渲染 → 返回响应
  5. 核心组件：分(DispatcherServlet) + 映(HandlerMapping) + 适(HandlerAdapter) + Controller + ViewResolver

---

## 一字一画面

- **分** —— 像机场值机柜台的分流员：穿制服的工作人员站在航站楼入口，所有旅客（请求）必须先经过他，他根据航班号（URL）指向不同值机岛（本质：DispatcherServlet前端控制器，统一入口，分发所有请求）
- **映** —— 像商场导览屏查店铺：顾客在触摸屏上输入店名（URL），屏幕立刻亮出楼层地图并标红路线，指引到具体店铺位置（本质：HandlerMapping根据请求路径映射到目标Controller处理器）
- **适** —— 像万能转换插头：出国旅行者拿出一个魔方般的转换头，无论面对欧标、英标还是美标插座，都能插进去通电（本质：HandlerAdapter适配器，兼容实现Controller接口、注解@Controller等多种形式的处理器）
- **控** —— 像厨房大厨炒菜接单：厨师拿到订单（请求参数），开火颠勺处理食材（业务逻辑），最后把成品菜（Model）和菜名（ViewName）交给传菜员（本质：Controller处理核心业务，返回ModelAndView）
- **视** —— 像摄影师按主题修图出片：摄影师拿到 raw 照片（Model数据），根据客户要求的风格模板（ViewName），套用滤镜修图，最终输出精修成片返回给客户（本质：ViewResolver解析视图名，View渲染最终页面）

---

## 面试话术

1. "Spring MVC的工作原理我总结为'分映适，九步走'，核心是DispatcherServlet作为前端控制器，统一接收请求，然后通过HandlerMapping映射处理器，再由HandlerAdapter适配执行具体的Controller。"
2. "Controller处理完业务后返回ModelAndView，DispatcherServlet把它交给ViewResolver解析成真正的视图，最后渲染输出给客户端。"
3. "整个过程围绕几个核心组件：DispatcherServlet、HandlerMapping、HandlerAdapter、Controller和ViewResolver，它们各司其职。"

---

## 防混补丁

容易和 **Spring Boot 自动配置流程** 搞混？

**补丁口诀**：MVC是请求通路，Boot是启动装配，九步走是请求来，自动配是应用起。

---

## 追问预演

1. **问**：HandlerMapping 是怎么找到处理器的？
   **答**：常用的实现有 RequestMappingHandlerMapping，扫描@RequestMapping注解，建立URL与HandlerMethod的映射关系。

2. **问**：HandlerAdapter 为什么要存在？
   **答**：Spring MVC支持多种Controller写法（实现Controller接口、实现HttpRequestHandler、@Controller注解），HandlerAdapter统一适配这些不同的调用方式。

3. **问**：拦截器在哪个阶段执行？
   **答**：HandlerInterceptor 在 HandlerMapping 找到处理器之后、Controller 执行之前（preHandle），以及 Controller 返回之后（postHandle），视图渲染完成后（afterCompletion）。

4. **问**：@RestController 和 @Controller 有什么区别？
   **答**：@RestController = @Controller + @ResponseBody，不走视图解析流程，直接返回JSON数据，跳过了ViewResolver和View渲染阶段。

5. **问**：Spring MVC 是单例还是多例？
   **答**：默认Controller是单例的，所以要注意线程安全问题，避免在Controller中定义可变成员变量。

---

## 关联知识点

- Spring Boot 自动配置原理
- RESTful API 设计规范
- 拦截器 vs 过滤器区别与执行顺序
- Spring MVC 异步请求处理（Callable/DeferredResult）
- 视图技术：Thymeleaf / JSP / FreeMarker

---

## 复习记录

| 次数 | 日期 | 效果 |
|------|------|------|
| 第1次 | | |
| 第2次 | | |
| 第3次 | | |
| 第4次 | | |
