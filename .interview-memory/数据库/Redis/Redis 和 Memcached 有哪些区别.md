---
type: 对比型
domain: 数据库
anchor: 多
rhyme: 多持持，五区别
created: 2026-06-13
---

## 速记卡片

**多** | 多持持，五区别 | Redis 数据类型多、持持久化、持集群原生；五区别 = 类型 / 持久化 / 集群 / 线程 / 内存管理

## 原始知识

- **数据类型**：Redis 丰富 5+ 种，Memcached 仅 String
- **持久化**：Redis 支持 RDB+AOF，Memcached 不支持
- **集群**：Redis 原生 Cluster，Memcached 需客户端分片
- **线程模型**：Redis 单线程，Memcached 多线程
- **内存管理**：Redis 有淘汰策略，Memcached 有 LRU
- **应用场景**：Redis 复杂缓存，Memcached 简单 KV 缓存

## 顺口溜

多持持，五区别，Redis 功能更全面

## 单字锚点 + 防崩推导

**锚点字**：多

**扩展口诀**：多持持，五区别

**为什么选它**：Redis 相比 Memcached 最大的特点就是"多"

**推导链**：
1. 多 → 什么多？**数据类型多**（5+ 种 vs 仅 String）
2. 持 → 持久化，Redis 有 RDB+AOF，Mem 没有
3. 持 → 集群支持，Redis 原生 Cluster，Mem 客户端分片
4. 五区别还有？线程模型（单 vs 多）、内存管理（淘汰策略 vs LRU）
5. 场景？Redis 做复杂缓存，Mem 做简单 KV 缓存

## 一字一画面

**多** —— 像[瑞士军刀]：[一把刀弹出剪刀、螺丝刀、开瓶器，十八般武艺]（本质：Redis 功能丰富，Memcached 只是一把小刀）

## 面试话术

Redis 和 Memcached 最核心区别就是 Redis 数据类型更丰富，支持持久化和原生集群。Redis 是单线程但支持多种数据结构，Memcached 是多线程但只支持 String。简单 KV 缓存 Memcached 够用，复杂场景选 Redis。

## 防混补丁

容易以为"Memcached 多线程所以性能一定比 Redis 好"？其实 Redis 单线程 I/O 多路复用，纯 KV 读写并不比 Mem 慢，而且功能多得多。

## 追问预演

**Q：为什么 Redis 单线程还能这么快？**
A：纯内存操作 + I/O 多路复用 + 避免上下文切换，瓶颈在内存和网络而非 CPU。

**Q：Memcached 什么场景比 Redis 更适合？**
A：纯 KV 缓存、缓存数据量极大、多核 CPU 充分利用时。

**Q：Redis 持久化 RDB 和 AOF 区别？**
A：RDB 是快照，恢复速度快但可能丢数据；AOF 是日志，数据更完整但文件大。

## 关联知识点

- Redis 数据类型
- RDB/AOF 持久化
- Redis Cluster
- I/O 多路复用
- 缓存淘汰策略

## 复习记录

- 第1次：
- 第2次：
- 第3次：
- 第4次：
