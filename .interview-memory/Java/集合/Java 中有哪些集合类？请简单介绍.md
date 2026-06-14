---
type: 列举型
domain: Java
anchor: 集
rhyme: 集列映，三大家族
created: 2026-06-13
---

# Java 中有哪些集合类？请简单介绍

## 速记卡片

| 锚点字 | 口诀       | 核心差异               |
|--------|------------|------------------------|
| 集     | 集列映，三大家族 | Collection 和 Map 两大接口 |

## 原始知识

- **两大接口**：Collection（单列）和 Map（双列键值对）
- **List**：有序、可重复
  - **ArrayList**：底层数组，查询快 O(1)，增删慢，线程不安全
  - **LinkedList**：底层双向链表，增删快，查询慢，可作队列/栈
  - **Vector**：古老实现，线程安全（synchronized），已不推荐
- **Set**：无序、不可重复
  - **HashSet**：底层 HashMap，去重靠 hashCode+equals
  - **TreeSet**：底层 TreeMap（红黑树），自动排序
  - **LinkedHashSet**：底层 LinkedHashMap，维护插入顺序
- **Queue**：队列，FIFO
- **Map**：键值对
  - **HashMap**：数组+链表/红黑树，线程不安全
  - **TreeMap**：红黑树，key 有序
  - **LinkedHashMap**：维护插入/访问顺序
  - **ConcurrentHashMap**：线程安全，CAS+synchronized
  - **Hashtable**：全局锁，线程安全，已过时

## 顺口溜

> 集列映，三大家族；List 有序可重复，Set 去重无先后，Map 键值对牵手。

## 单字锚点 + 防崩推导

- **锚点字**：集
- **扩展口诀**：集列映，三大家族
- **为什么选它**：Java 集合框架总称是 **Collection Framework**，"集"是所有集合的统称
- **推导链**：
  1. 集 → 集合框架 → 两大根接口：Collection 和 Map
  2. 集 → Collection 下有三大家族 → List、Set、Queue
  3. 列 → List（列表）→ 有序可重复 → ArrayList（数组）、LinkedList（链表）、Vector（线程安全）
  4. 映 → Map（映射）→ 键值对 → HashMap、TreeMap、LinkedHashMap、ConcurrentHashMap、Hashtable
  5. 三大家族 → List、Set、Queue → 再加上 Map 自成一派

## 一字一画面

- **集** —— 像一个大集合广场：广场上有两大区域，左边是单人区（Collection），右边是配对区（Map）。（本质：Java 集合框架的顶层划分）
- **列** —— 像一列绿皮火车：每节车厢有编号（索引），可以 duplicate（重复乘客），按顺序排列。（本质：List 有序、可重复、有索引）
- **映** —— 像一把钥匙开一把锁：每个 key 唯一对应一个 value，key 不能重复，value 可以重复。（本质：Map 键值对映射关系）
- **Array** —— 像连续停着的共享单车：每辆车有固定车位号，找车直接报号（O(1)），但中间插入一辆车要挪一大片。（本质：数组连续内存，随机访问快，增删慢）
- **Linked** —— 像手拉手的幼儿园小朋友：每个小朋友牵着前后两个伙伴，中间插一个人只需解开两只手（O(1)），找第 10 个要挨个数。（本质：双向链表，增删快，随机访问慢）
- **Hash** —— 像快递按尾号分货架：包裹（key）按尾号（hash）放货架，找包裹先算尾号直达货架。（本质：哈希表，理想 O(1) 查找）
- **Tree** —— 像图书馆书架按字母排序：书按字母顺序排列，找书走二分路线，自动有序。（本质：红黑树，有序，O(log n)）

## 面试话术

1. "Java 集合主要分两大类，一类是 Collection 接口下的单列集合，包括 List、Set 和 Queue；另一类是 Map 接口下的键值对集合。"
2. "List 是有序可重复的，最常用的是 ArrayList，底层是数组，适合随机查询；LinkedList 底层是双向链表，适合频繁增删；Vector 是线程安全的但基本不用了。"
3. "Set 是无序不可重复的，HashSet 底层是 HashMap，去重靠 hashCode 和 equals；TreeSet 是红黑树实现，会自动排序；LinkedHashSet 能维护插入顺序。"
4. "Map 里最常用的是 HashMap，线程不安全；ConcurrentHashMap 是线程安全的；TreeMap 能按键排序；Hashtable 已经过时了。"

## 防混补丁

- **容易把 Collection 和 Collections 搞混？** Collection 是接口，Collections 是工具类（排序、反转、同步化）。
- **容易把 ArrayList 和 LinkedList 场景搞混？** 随机访问多用 ArrayList，频繁头尾增删用 LinkedList。
- **容易把 HashMap 和 Hashtable 搞混？** HashMap 允许 null、线程不安全；Hashtable 不允许 null、全局锁、已过时。
- **补丁口诀**：Collection 接口 Collections 工具，Array 查询 Linked 增删，HashMap 新 Hashtable 旧。

## 追问预演

1. **Q：ArrayList 和 LinkedList 哪个更费内存？**
   A：LinkedList 更费，每个节点要维护前后两个指针；ArrayList 只有数组本身，但可能有预留空间（扩容后未用完）。
2. **Q：HashSet 怎么判断重复？**
   A：先比较 hashCode，hashCode 相同再 equals，都相同则认为是重复元素。
3. **Q：为什么 Vector 被废弃了？**
   A：Vector 所有方法都加 synchronized，性能差；需要线程安全时优先用 CopyOnWriteArrayList 或 Collections.synchronizedList。
4. **Q：Queue 有哪些常见实现？**
   A：LinkedList（双端队列）、ArrayDeque（数组双端队列，无容量限制）、PriorityQueue（优先级队列，堆实现）、ConcurrentLinkedQueue（并发无界队列）。
5. **Q：Map 的遍历方式有哪些？**
   A：keySet() 遍历 key、values() 遍历 value、entrySet() 遍历键值对（推荐，效率最高）、forEach（Java 8 Lambda）。

## 关联知识点

- ArrayList 扩容机制
- HashMap 原理
- ConcurrentHashMap
- 红黑树
- equals 和 hashCode 契约
- 迭代器 Iterator / ListIterator
- Java 8 Stream API

## 复习记录

| 次数 | 日期       | 熟练度 |
|------|------------|--------|
| 第1次 | 2026-06-13 |        |
| 第2次 |            |        |
| 第3次 |            |        |
| 第4次 |            |        |
