---
type: 列举型
domain: 人工智能
anchor: 件
rhyme: 主机服，传四层
created: 2025-06-13
---

# MCP 架构核心组件

## 速记卡片
`件 | 主机服，传四层 | 四大组件`

## 原始知识
- MCP四大核心组件：
  1. **主**（Host）- 运行AI模型的主程序（如Claude Desktop）
  2. **机**（Client）- Host内的MCP客户端，管理Server连接
  3. **服**（Server）- 提供具体工具能力的MCP服务端
  4. **传**（Transport）- 通信层，stdio或SSE传输协议
- 关系：Host包含Client → Client连接Server → 通过Transport通信
- **易混点**：Host vs Client
- **追问点**：一个Host能连多个Server吗？Server怎么开发？

## 顺口溜
**主机服，传四层**

## 单字锚点 + 防崩推导
- **锚点字**：**件**
- **扩展口诀**：**主机服，传四层**
- **为什么选它**：面试题问"核心组件"，"件"直接对应。
- **防崩推导**：
  - 件（组件）→ MCP四大组件
  - 主（Host）→ 主程序
  - 机（Client）→ 客户端
  - 服（Server）→ 服务端
  - 传（Transport）→ 传输层
  - 四层 → 四层架构

## 一字一画面
- **主** —— 像**大脑**：总指挥。（本质：Host主程序）
- **机** —— 像**秘书**：帮大脑对接外部资源。（本质：MCP Client）
- **服** —— 像**供应商**：提供具体服务。（本质：MCP Server）
- **传** —— 像**电话线**：连接大脑和供应商。（本质：Transport传输层）

## 面试话术
- 问核心组件 → "MCP有四大核心组件，口诀是**主机服，传四层**。**主**——Host，运行AI模型的主程序；**机**——Client，Host内的MCP客户端，管理Server连接；**服**——Server，提供具体工具能力的服务端；**传**——Transport，通信传输层（stdio或SSE）。关系是：Host包含Client，Client连接多个Server，通过Transport通信。一个Host可以连多个Server，比如同时连GitHub Server和数据库Server。"

## 防混补丁
- 容易分不清Host和Client。Host是应用，Client是Host里的连接管理器。补丁：**Host是公司，Client是采购部，Server是供应商**。"

## 关联知识点
- [ ] [什么是MCP协议](什么是MCP协议.md)
- [ ] [MCP的工作流程是什么](MCP的工作流程是什么.md)

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
