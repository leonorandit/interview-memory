---
type: 因果型
domain: Java
anchor: 弱
rhyme: 弱防泄，两原因
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 弱 | 弱防泄，两原因 | ThreadLocalMap的key用弱引用，防内存泄漏；但value是强引用，需手动remove |

## 原始知识

- ThreadLocalMap的**key是弱引用**（指向ThreadLocal对象）
- 目的是**防止内存泄漏**：key若为强引用，ThreadLocal不用时无法GC
- **value仍是强引用**，ThreadLocal不用后value仍存在
- 弱引用key在**GC后变为null**
- 下次**get/set**时清理null key的entry
- **最佳实践**：用完调用`remove()`

## 顺口溜

弱防泄，两原因，
key弱value强要记清。
GC后key变null，
getset顺带扫干净。
remove一下最安心。

## 单字锚点 + 防崩推导

**锚点字：弱**

- **扩展口诀**：弱防泄，两原因
- **为什么选它**：ThreadLocalMap的key是弱引用，这是最核心的设计点
- **推导链**：
  1. 弱 → 弱引用（WeakReference）
  2. 弱的是谁 → ThreadLocalMap的key，指向ThreadLocal对象
  3. 为什么弱 → 防止内存泄漏
  4. 怎么泄漏的 → key强引用 → ThreadLocal无法GC → value一直占内存
  5. 弱了就没事了吗 → value还是强引用，ThreadLocal销毁后value仍在
  6. 怎么清 → GC后key变null，下次get/set清理null key；手动remove最保险

## 一字一画面

- **弱** —— 像[枯叶藤蔓]：黄褐色叶片轻轻一扯就断，不再死死缠住树干，让树能自由生长（本质：弱引用不阻止GC，让ThreadLocal对象能被回收）
- **泄** —— 像[漏底水桶]：水从桶底小洞不断渗出，水面线越来越低但永远有残留（本质：内存泄漏=对象无法释放，持续占用堆内存）
- **null** —— 像[被擦掉的门牌号]：蓝色门牌上字迹逐渐变淡消失，快递员（get/set）路过时发现无号便顺手清理信箱（本质：key变null后成为清理标记）
- **remove** —— 像[拔钥匙关灯]：金属钥匙咔哒拔出，啪一声开关切断电源，房间彻底断电（本质：手动remove是彻底切断key和value的双重引用）

## 面试话术

"ThreadLocalMap的key设计成弱引用，主要是为了防止内存泄漏。你想啊，如果key是强引用，那ThreadLocal对象就算业务代码里不用了，也因为Map里还引用着它，GC不了。key变弱引用后，ThreadLocal能被正常回收，key变成null。但value还是强引用，所以下次调用get或set的时候，会顺便清理这些null key的entry。不过最保险的做法还是手动remove。"

## 防混补丁

容易和"用了弱引用就不会泄漏"搞混？一句补丁：
> key弱了能GC，value还强挂着，remove才是终极解法。

## 追问预演

| 追问 | 简要答案 |
|------|----------|
| 为什么value不用弱引用？ | value弱引用可能导致业务数据被意外GC |
| 什么场景下会泄漏？ | 线程池场景，线程复用，ThreadLocal不复用 |
| 清理null key发生在什么时候？ | 调用get、set、remove时触发expungeStaleEntry |
| ThreadLocalMap在哪？ | 在Thread对象里，每个线程私有 |
| 子线程能拿到父线程的ThreadLocal吗？ | 用InheritableThreadLocal可以 |

## 关联知识点

- 强引用 / 软引用 / 弱引用 / 虚引用
- ThreadLocal原理（ThreadLocalMap、Entry）
- `expungeStaleEntry`清理机制
- 线程池与ThreadLocal泄漏
- `InheritableThreadLocal`
- `TransmittableThreadLocal`（阿里开源）

## 复习记录

- 第1次：_______
- 第2次：_______
- 第3次：_______
- 第4次：_______
