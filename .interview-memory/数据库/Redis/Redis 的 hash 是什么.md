---
type: 因果型
domain: 数据库
anchor: 对
rhyme: 对键值，两结构
created: 2026-06-13
---

## 速记卡片

**对** | 对键值，两结构 | Hash 是 field-value 键值对集合；底层 ziplist（<512 个 / 64KB）或 hashtable

## 原始知识

- **Hash** 是键值对集合（field-value）
- **底层实现**：ziplist 压缩列表（<512 个 / 64KB）、hashtable 字典
- **适用场景**：对象存储、购物车、用户属性
- **常用命令**：HSET、HGET、HGETALL、HDEL

## 顺口溜

对键值，两结构，对象存储最顺手

## 单字锚点 + 防崩推导

**锚点字**：对

**扩展口诀**：对键值，两结构

**为什么选它**：Redis Hash 的本质就是 field-value "键值对" 集合

**推导链**：
1. 对 → 什么对？**field-value 键值对**
2. 什么结构存？两种：数据少时用 ziplist（压缩列表），数据多时用 hashtable（字典）
3. 什么时候用 ziplist？元素 < 512 个且单个值 < 64KB
4. 用在哪？存对象、购物车、用户属性
5. 命令？HSET 设、HGET 取、HGETALL 全取、HDEL 删

## 一字一画面

**对** —— 像[成双成对的鸳鸯]：[两只并排游，一个 field 一个 value 形影不离]（本质：一个 key 下挂多组 field-value 对）

## 面试话术

Redis 的 Hash 就是一个键值对集合，特别适合存对象。底层会根据数据量自动选择 ziplist 或 hashtable，数据小的时候用 ziplist 省内存，大了就切 hashtable 保证性能。常用命令有 HSET、HGET 这些。

## 防混补丁

容易和 String 搞混？String 是一个 key 对一个 value，Hash 是一个 key 对多组 field-value。

## 追问预演

**Q：ziplist 和 hashtable 怎么选？**
A：元素个数小于 512 且每个值小于 64 字节时用 ziplist，否则转 hashtable。

**Q：Hash 比 String 存对象好在哪？**
A：Hash 可以单独改某个 field，不用整个对象序列化后重写。

**Q：HGETALL 大 Hash 会有什么问题？**
A：会阻塞，大 Hash 建议用 HSCAN 分批取。

## 关联知识点

- ziplist
- hashtable
- String 类型
- HSCAN 命令
- 内存优化

## 复习记录

- 第1次：
- 第2次：
- 第3次：
- 第4次：
