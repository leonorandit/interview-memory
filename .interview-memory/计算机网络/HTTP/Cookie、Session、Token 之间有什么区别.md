---
type: 对比型
domain: 计算机网络
anchor: 状
rhyme: 状存签三分天下
created: 2026-06-14
---

## 速记卡片

状 | 状存签，三区别 | Cookie客户端存 / Session服务端存 / Token客户端存且自包含

## 原始知识

- **Cookie**：客户端存储，大小限制4KB，不安全易篡改，每次请求自动携带
- **Session**：服务端存储，依赖Cookie传SessionID，有状态，服务端内存压力大
- **Token**：客户端存储，JWT自包含信息，服务端无状态，适合分布式
- **JWT结构**：Header.Payload.Signature（头.载荷.签名）
- **安全性**：Cookie可设HttpOnly和Secure，Session相对安全，Token需防泄露
- **跨域**：Token天然适合跨域，Cookie受同源策略限制
- **扩展性**：Session不利于水平扩展，Token利于分布式

## 顺口溜

状存签三分天下

## 单字锚点 + 防崩推导

- **锚点字**：状
- **扩展口诀**：状存签，三区别
- **为什么选它**：三者都是处理用户"状态"保持的方案
- **推导链**：
  1. 状 → 状态保持
  2. 状态 → 三种方案：Cookie、Session、Token
  3. Cookie → **客户端**存，4KB限制，每次请求自动带，不安全易篡改
  4. Session → **服务端**存，依赖Cookie传SessionID，有状态，内存压力大
  5. Token → **客户端**存，JWT自包含用户信息，服务端无状态，适合分布式
  6. Token结构 → Header（算法）.Payload（数据）.Signature（签名）
  7. 对比 → Cookie/Session是传统方案，Token是现代分布式首选

## 一字一画面

状 —— 像酒店房卡：Cookie像把房间号写在自己手背上（客户端裸存，容易被看到）；Session像前台电脑存档案、你只拿一张编号牌（服务端存，牌丢了换一张）；Token像一张自带房号+身份+防伪水印的智能卡（自包含，走到哪里都能用）（本质：状态信息存在哪、怎么传、安不安全的差异）

## 面试话术

"这三者都是做状态保持的。Cookie存在客户端，有大小限制而且不安全；Session存在服务端，靠Cookie传SessionID过来，服务端有状态不利于扩展；Token比如JWT也存在客户端，但自带用户信息，服务端无状态，更适合分布式系统和移动端。"

## 防混补丁

容易觉得Session比Token安全？记住：Session依赖Cookie传ID，Cookie被截一样完；Token配HTTPS+短时效，安全性不输Session。

## 追问预演

- **问**：JWT有什么缺点？
  **答**：Token比SessionID大，增加传输开销；一旦签发无法提前撤回，只能等过期。
- **问**：怎么防止Cookie被篡改？
  **答**：设置HttpOnly防XSS、Secure强制HTTPS、SameSite防CSRF、对内容做签名。
- **问**：分布式系统为什么倾向Token？
  **答**：Token自包含信息，任意服务节点都能验证，不需要集中式Session存储。

## 关联知识点

- JWT原理与结构
- HTTP无状态协议
- XSS与CSRF攻击
- OAuth2.0认证

## 复习记录

- [ ] 第1次
- [ ] 第2次
- [ ] 第3次
- [ ] 第4次
