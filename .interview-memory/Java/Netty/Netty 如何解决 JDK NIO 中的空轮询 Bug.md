---
type: 因果型
domain: Java
anchor: 空
rhyme: 空计替，三修复
created: 2026-06-13
---

## 速记卡片

| 锚点字 | 口诀 | 核心差异 |
|--------|------|----------|
| 空 | 空计替，三修复 | Selector.select() 返回 0 但仍有事件，Netty 三招修复 |

## 原始知识

- JDK NIO **空轮询 Bug**
- Selector.select() 在 Linux 下可能 **返回 0**
- Netty 用**计数器**（空轮询 > **512** 次则重建 Selector）
- **select 超时**控制
- **epoll 替代 select**（Linux 下用 EpollEventLoopGroup）

## 顺口溜

空计替，三修复；
超五百，换 epoll。

## 单字锚点 + 防崩推导

- **锚点字**：空
- **扩展口诀**：空计替，三修复
- **为什么选它**：问题名就是"空轮询"，空字直接对应 select 返回 0 却仍在轮询
- **推导链**：
  1. 空 → 空轮询
  2. 空轮询 → Selector.select() 返回 0
  3. Netty 三修复 → 计数器 / 超时控制 / epoll 替代
  4. 计数器 → 空轮询 > 512 次 → 重建 Selector
  5. 替代 → Linux 下用 EpollEventLoopGroup 替换 select

## 一字一画面

- **空** —— 像电梯空转：门开了没人进，却不停上下跑浪费电（本质：select 唤醒却无事件，CPU 空转 100%）
- **计** —— 像红绿灯计数器：闯红灯超过 5 次就扣驾照，强制换司机（本质：空轮询计数 > 512 次重建 Selector）
- **替** —— 像柴油车换电动车：老旧引擎总故障，直接换新能源动力系统（本质：EpollEventLoopGroup 替代 select）
- **修** —— 像修水龙头：不光换龙头还加装限流阀和定时器（本质：三管齐下综合治理）

## 面试话术

- "JDK NIO 在 Linux 下有个空轮询 Bug，Selector.select() 可能返回 0 但实际有事件没处理，导致 CPU 飙到 100%，Netty 用了三招修复。"
- "第一是空轮询计数器超过 512 次就重建 Selector；第二是控制 select 超时时间；第三是在 Linux 下直接用 epoll 替代 select。"

## 防混补丁

容易和 CPU 100% 混淆？空轮询确实导致 CPU 100%，但根因是 select 伪唤醒。  
**补丁口诀**：空是病，百是症，治病因不是止症状。

## 追问预演

- **Q：为什么计数器阈值是 512？**  
  A：经验值，既能快速识别 Bug 又避免正常情况误重建。
- **Q：重建 Selector 具体怎么做？**  
  A：创建新 Selector，把旧 Selector 上注册的 Channel 逐个迁移重新注册。
- **Q：只有 Linux 有这问题吗？**  
  A：主要出现在 Linux JDK 早期版本，Windows 较少见，epoll 机制更稳定。

## 关联知识点

- epoll / select / poll 区别
- Selector 原理
- Reactor 模式
- CPU 100% 排查

## 复习记录

- 第 1 次：2026-06-13
- 第 2 次：
- 第 3 次：
- 第 4 次：
