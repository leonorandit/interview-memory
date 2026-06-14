---
type: 因果型
domain: Java
anchor: 增
rhyme: 增CR，三区别
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 增 | 增CR，三区别 | Plus是MyBatis增强工具，扩展通用CRUD，完全兼容MyBatis |

## 原始知识

- MyBatis-Plus是MyBatis的**增强工具**
- 提供**通用CRUD**：`BaseMapper`、`IService`
- 内置**代码生成器**，减少重复编码
- 内置**分页插件**，一行代码搞定分页
- **条件构造器**（Wrapper），链式拼接SQL条件
- **完全兼容**MyBatis，可无缝迁移
- **三区别**：扩展性、开箱即用、工具链丰富

## 顺口溜

增CR，三区别，
Plus在Batis上搭梯。
BaseMapper省手写，
分页代码生成齐。
Wrapper链式拼条件，
兼容迁移不费棋。

## 单字锚点 + 防崩推导

**锚点字：增**

- **扩展口诀**：增CR，三区别
- **为什么选它**：MyBatis-Plus的本质是"增强"，不是替代
- **推导链**：
  1. 增 → 增强工具（Enhancement）
  2. 增了什么 → 通用CRUD：BaseMapper + IService
  3. 还有啥 → 分页插件、代码生成器、条件构造器Wrapper
  4. 区别在哪 → 三点：扩展性（功能更多）、开箱即用（零配置启动）、工具链（生成器+分页+Wrapper）
  5. 核心原则 → 完全兼容MyBatis，不是另起炉灶

## 一字一画面

- **增** —— 像[红色积木塔]：在蓝色MyBatis底座上叠了三层新积木，颜色鲜艳不倒（本质：增强=叠加扩展，不拆底座）
- **C** —— 像[复印机]：咔咔咔自动吐出一沓标准CRUD代码，白底黑字整齐划一（本质：通用方法复用，减少手写）
- **R** —— 像[放大镜分页]：圆形镜片里显示第3页共10页，边缘带齿轮刻度（本质：分页是查询的放大切片）
- **Wrapper** —— 像[卷尺链]：银色金属片一节一节拉出来，量完自动卡位固定（本质：链式条件拼接，灵活锁定查询范围）

## 面试话术

"MyBatis-Plus是MyBatis的增强工具，它在完全兼容MyBatis的基础上，提供了通用的CRUD接口、分页插件、代码生成器和条件构造器Wrapper。简单说就是，MyBatis要手写的增删改查，Plus都帮你封装好了，开箱即用，但不影响你继续使用原生MyBatis。"

## 防混补丁

容易和MyBatis搞混？一句补丁：
> MyBatis是地基打桩，Plus是在上面盖精装房，地基还是那根桩。

## 追问预演

| 追问 | 简要答案 |
|------|----------|
| Plus和MyBatis能混用吗？ | 能，完全兼容，可共存 |
| Wrapper有几种？ | QueryWrapper、UpdateWrapper、LambdaQueryWrapper等 |
| 分页插件怎么配置？ | 注册PaginationInterceptor，代码里Page对象传参 |
| 代码生成器怎么用？ | AutoGenerator配置数据源+包名+策略，一键生成 |
| Plus的IService和BaseMapper啥关系？ | IService在BaseMapper上再封装一层，含批量操作 |

## 关联知识点

- MyBatis核心原理（SqlSession、MapperProxy）
- Spring Boot Starter `mybatis-plus-boot-starter`
- `Page`分页对象与IPage接口
- `QueryWrapper` / `LambdaQueryWrapper`
- 代码生成器 `AutoGenerator`
- MyBatis插件机制（Interceptor）

## 复习记录

- 第1次：_______
- 第2次：_______
- 第3次：_______
- 第4次：_______
