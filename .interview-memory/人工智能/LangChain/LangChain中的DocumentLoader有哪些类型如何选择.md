---
type: 列举型
domain: 人工智能
anchor: 载
rhyme: 载文分类看源头
created: 2026-06-14
---

## 速记卡片
`载 | 载文分类看源头 | 本地文件+网页+数据库`

## 原始知识
- 本地文件：TextLoader、PyPDFLoader、UnstructuredFileLoader
- 网页：WebBaseLoader、SitemapLoader
- 数据库：SQLDatabaseLoader、MongoDBLoader
- 云存储：AWSS3Loader、AzureBlobLoader
- 代码：GitLoader、PythonLoader
- **易混点**：Unstructured 依赖系统包，部署注意

## 顺口溜
载文看源头分类挑

## 单字锚点 + 防崩推导
- **锚点字**：载
- **扩展口诀**：载文分类看源头，本地网页数据库各一兜
- **为什么选它**：DocumentLoader 的核心动作是"载"入文档
- **防崩推导**：问 Loader 类型 → 想到"载" → 载什么？→ 文档 → 从哪载？→ 本地、网页、DB、云

## 一字一画面
**载** —— 像**货车分类装货**：白色货车装纸箱（TextLoader 文本），红色货车装书本（PyPDFLoader PDF），蓝色货车拉网页（WebBaseLoader），绿色货车运数据库桶（SQLLoader）（本质：不同来源匹配不同装载工具）

## 面试话术
LangChain 的 Loader 按数据源分几大类：本地文件用 TextLoader 或 PyPDFLoader，网页用 WebBaseLoader，数据库用 SQLDatabaseLoader，云存储也有对应封装。选型就看数据存在哪，复杂格式用 UnstructuredFileLoader 兜底。

## 防混补丁
- PyPDFLoader 对扫描版 PDF 无效，要 OCR
- WebBaseLoader 抓动态页面可能失败，选 Selenium
- Unstructured 需要 poppler/tesseract 系统依赖
- GitLoader 拉大仓库慢，建议浅克隆

## 追问预演
Q：PDF 表格怎么准确提取？
A：简单表格用 PyPDFLoader，复杂表格建议 Camelot 或 Unstructured，再不行就转图片走多模态。

## 复习记录
- [ ] 第1次：
- [ ] 第2次：（+1天）
- [ ] 第3次：（+3天）
- [ ] 第4次：（+7天）
