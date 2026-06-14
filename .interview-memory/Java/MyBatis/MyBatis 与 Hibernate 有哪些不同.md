---
type: 对比型
domain: Java
anchor: 半
rhyme: 半全配，三不同
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 半 | 半全配，三不同 | MyBatis 半自动，Hibernate 全自动 |

## 原始知识

- **MyBatis 是半自动 ORM**：**SQL 自己写**，灵活可控
- **Hibernate 是全自动 ORM**：**HQL 生成 SQL**，开发快但难优化
- MyBatis **学习成本低**，上手快
- Hibernate **缓存机制更完善**（一级/二级/查询缓存）
- MyBatis 适合**复杂 SQL / 老系统迁移**
- Hibernate 适合**快速 CRUD / 新系统**
- MyBatis 需要手动映射字段，Hibernate 自动映射

## 顺口溜

> 半全配，三不同，
> MyBatis 手写 SQL 控，
> Hibernate 全自动，
> 复杂选半，快开发选全。

## 单字锚点 + 防崩推导

- **锚点字**：半（半自动 ORM）
- **扩展口诀**：半全配，三不同
- **为什么选它**：MyBatis 的"半"是最大特征，自己写一半（SQL），框架帮一半（映射执行）
- **推导链**：
  1. 看到 "半" → MyBatis 半自动 ORM → SQL 自己写，结果映射框架做
  2. 对仗 "全" → Hibernate 全自动 ORM → HQL/JPQL 自动生成 SQL
  3. "配" → 配置方式不同：MyBatis XML/注解写 SQL；Hibernate 配置对象关系映射
  4. "三不同" → 自动化程度、学习成本、SQL 可控性 三方面不同
  5. 场景记忆：复杂 SQL/优化 → 半（MyBatis）；快速 CRUD → 全（Hibernate）

## 一字一画面

**半** —— 像一位厨师半自助做饭：食材自己切（手写 SQL），灶台帮你点火执行（框架映射结果）（本质：人掌控核心，机器打辅助）

**全** —— 像全自动扫地机器人：按个按钮全屋扫完（HQL 自动生成 SQL），但遇到复杂地形可能卡死或扫不干净（难优化复杂查询）（本质：全自动省心，但黑盒不可控）

## 面试话术

- "MyBatis 是半自动 ORM，SQL 要自己写，所以复杂查询优化起来很灵活；Hibernate 是全自动的，HQL 帮你生成 SQL，开发效率高，但遇到复杂 SQL 很难调优。"
- "如果项目需要大量手写 SQL、或者数据库结构很复杂，我倾向于选 MyBatis；如果是标准 CRUD 多的新系统，Hibernate 开发更快。"

## 防混补丁

- **容易和什么搞混**：以为 MyBatis 不是 ORM，或者以为 Hibernate 完全不需要写 SQL。
- **补丁口诀**：MyBatis 也是 ORM，只是半自动；Hibernate 也能写原生 SQL，只是不推荐。

## 追问预演

| 追问 | 简要答案 |
|------|----------|
| MyBatis 为什么叫半自动？ | SQL 需手写，但参数绑定、结果映射由框架完成 |
| Hibernate 的缓存优势在哪？ | 一级缓存自动，二级缓存生态成熟（Ehcache、Redis） |
| 两者分别适合什么场景？ | 复杂 SQL/老系统 → MyBatis；快速 CRUD/新系统 → Hibernate |
| MyBatis-Plus 改变了什么？ | 在 MyBatis 基础上加了通用 CRUD，缩小了与 Hibernate 的差距 |

## 关联知识点

- ORM 框架设计原理
- JDBC 与数据库连接池
- HQL / JPQL 与 SQL 的区别
- MyBatis 动态 SQL 标签
- Hibernate 缓存机制（一级/二级/查询缓存）
- Spring Data JPA

## 复习记录

- 第1次：___/___/______
- 第2次：___/___/______
- 第3次：___/___/______
- 第4次：___/___/______
