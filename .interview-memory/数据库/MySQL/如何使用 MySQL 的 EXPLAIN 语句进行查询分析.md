---
type: 列举型
domain: 数据库
anchor: 型
rhyme: 型键行，五看板
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 型 | 型键行，五看板 | 看type、看key、看rows、看Extra、看possible_keys |

## 原始知识

- **型**（type）：访问类型，**system>const>eq_ref>ref>range>index>ALL**
- **键**（key）：实际使用的索引
- **行**（rows）：预估扫描行数
- **Extra**：额外信息，Using index/Using filesort/Using temporary
- **possible_keys**：可能使用的索引
- **system**：表仅一行，const特例
- **const**：主键/唯一索引等值查询
- **eq_ref**：联表主键/唯一索引匹配
- **ref**：非唯一索引等值查询
- **range**：索引范围扫描
- **index**：索引全扫描
- **ALL**：**全表扫描**，最差

## 顺口溜

型看访问优到劣，
键看实际走哪列。
行数越少越喜悦，
Extra信息藏秘诀，
possible_keys别忽略。

## 单字锚点 + 防崩推导

**锚点字：型**

- **扩展口诀**：型键行，五看板；system最好，ALL最差，index覆盖可接受，filesort要消灭。
- **为什么选它**：type字段是Explain输出中最核心的指标，直接反映查询的访问类型和效率等级；"型"字简洁有力，是五看板的第一看。
- **推导链**：
  1. 型 → type（访问类型）→ 效率排序：
     system（1行表）> const（主键等值）> eq_ref（联表主键）> ref（非唯一等值）> range（范围）> index（索引全扫）> ALL（全表扫）
  2. 键 → key（实际使用索引）→ 看有没有走索引，走了哪个
  3. 行 → rows（扫描行数）→ 越小越好，预估值
  4. Extra → 额外信息：
     - Using index：覆盖索引，不用回表 → 好
     - Using filesort：需要额外排序 → 差，加索引
     - Using temporary：需要临时表 → 差，优化group by/order by
     - Using where：回表后过滤
     - Using index condition：ICP索引下推
  5. possible_keys → 优化器认为可能用的索引 → 如果key是NULL但possible_keys有值，说明索引没被选上，可能因统计信息不准

## 一字一画面

**型** —— 像[彩虹阶梯排座位]：[七级彩虹阶梯，金色system坐最高，红色ALL坐地板，SQL查询像学生，坐的越高成绩越好]（本质：type等级直接决定查询效率等级）

**键** —— 像[金色钥匙开银门]：[一把金色钥匙插进银色门锁，咔哒一声门开了；如果没插钥匙直接撞门，就是ALL全表扫]（本质：key字段显示是否用索引开门）

## 面试话术

1. "用Explain分析SQL，我主要看五样东西：type看访问类型，system到ALL效率递减；key看实际走了哪个索引；rows看扫描行数；Extra看有没有filesort或temporary；possible_keys看有没有遗漏的索引。"
2. "type如果是ALL说明全表扫描了，一般要加索引；如果能到ref或者range就算合格；const和eq_ref是理想状态。"
3. "Extra里出现Using filesort说明排序没走索引，需要优化；Using index说明是覆盖索引，性能最好。"

## 防混补丁

容易把**type=index和ALL**搞混觉得都不错？一句补丁：

> index是全扫索引树，ALL是全扫数据表；索引树比数据表小，index比ALL强，但range比index更强。

## 追问预演

| 追问 | 简要答案 |
|------|----------|
| type有哪些常见值？ | system、const、eq_ref、ref、range、index、ALL |
| Using index和Using where同时出现什么意思？ | 覆盖索引过滤，或者索引下推，大部分条件在索引层完成 |
| possible_keys有值但key是NULL为什么？ | 优化器认为全表扫描更快，或者索引统计信息过期 |
| rows是精确值吗？ | 不是，是优化器基于统计信息的预估 |
| 怎么解决Using filesort？ | 给order by字段加索引，或者调整联合索引顺序让排序走索引 |

## 关联知识点

- [ ] MySQL 的乐观锁和悲观锁是什么
- [ ] MySQL 中如果发生死锁应该如何解决
- [ ] MySQL 中 count(*)、count(1) 和 count(字段名) 有什么区别
- [ ] MySQL 中如何进行 SQL 调优
- [ ] 索引原理与B+树结构

## 复习记录

- [ ] 第1次：________
- [ ] 第2次：________
- [ ] 第3次：________
- [ ] 第4次：________
