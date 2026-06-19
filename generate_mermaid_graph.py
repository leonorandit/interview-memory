import os
import re
from collections import defaultdict

BASE = '/root/code/project/.interview-memory'

def parse_index(path):
    entries = []
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    for line in lines:
        line = line.strip()
        if not line.startswith('|') or '锚点字' in line or '---' in line:
            continue
        parts = [p.strip() for p in line.split('|')]
        parts = [p for p in parts if p]
        if len(parts) >= 4:
            entries.append({
                'anchor': parts[0],
                'domain': parts[1] if len(parts) > 1 else '',
                'title': parts[2],
                'rhyme': parts[3] if len(parts) > 3 else '',
                'type': parts[4] if len(parts) > 4 else '列举型',
            })
    return entries

all_entries = parse_index(os.path.join(BASE, '_INDEX.md'))

# 按领域分组
domain_entries = defaultdict(list)
for e in all_entries:
    domain_entries[e['domain']].append(e)

def extract_keywords(title):
    """从标题中提取关键词"""
    # 提取2-10字的技术名词
    words = re.findall(r'[A-Za-z]+|[\u4e00-\u9fff]{2,10}', title)
    # 过滤常见停用词
    stopwords = {'什么', '如何', '为什么', '怎么', '哪些', '请', '一个', '一下', '可以', '进行', '怎样', '说说', '描述', '了解', '解释', '简述', '什么是', '有哪些', '有什么', '请描述', '请解释', '怎么做', '情况下', '应用场景'}
    keywords = []
    for w in words:
        w = w.strip()
        if len(w) >= 2 and w not in stopwords and not w.startswith('什么') and not w.startswith('如何'):
            keywords.append(w)
    return keywords

def build_links(entries, max_links_per_node=3):
    """构建知识点之间的联系"""
    links = []
    linked = defaultdict(set)
    
    # 1. 基于关键词相似度建立联系
    node_keywords = {}
    for e in entries:
        node_keywords[e['anchor']] = extract_keywords(e['title'])
    
    anchors = [e['anchor'] for e in entries]
    for i, e1 in enumerate(entries):
        kw1 = node_keywords[e1['anchor']]
        scores = []
        for j, e2 in enumerate(entries):
            if i == j:
                continue
            kw2 = node_keywords[e2['anchor']]
            # 计算共同关键词
            common = set(kw1) & set(kw2)
            score = len(common) * 10  # 关键词匹配权重高
            # 加上同领域加分
            if e1['domain'] == e2['domain']:
                score += 2
            # 类型关联
            if '流程' in e1['type'] and '流程' in e2['type']:
                score += 3
            if '对比' in e1['type'] and '对比' in e2['type']:
                score += 3
            if '因果' in e1['type'] and ('因果' in e2['type'] or '列举' in e2['type']):
                score += 1
            if score > 0:
                scores.append((score, j, e2))
        
        # 取最高分的几个
        scores.sort(reverse=True)
        for score, j, e2 in scores[:max_links_per_node]:
            if e2['anchor'] not in linked[e1['anchor']]:
                linked[e1['anchor']].add(e2['anchor'])
                linked[e2['anchor']].add(e1['anchor'])
                links.append((e1['anchor'], e2['anchor'], '关联'))
    
    return links

def sanitize_mermaid_id(text):
    """转义为安全的 Mermaid 节点 ID"""
    return re.sub(r'[^a-zA-Z0-9\u4e00-\u9fff]', '', text)

def generate_domain_mermaid(domain, entries, links):
    """为单个领域生成 Mermaid 图"""
    lines = []
    lines.append(f"## {domain} 知识关联图")
    lines.append("")
    lines.append("```mermaid")
    lines.append("graph TD")
    lines.append("    %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#e1f5fe', 'primaryTextColor': '#01579b', 'primaryBorderColor': '#0288d1', 'lineColor': '#0288d1', 'secondaryColor': '#fff3e0', 'tertiaryColor': '#e8f5e9'}}}%%")
    lines.append("")
    
    # 定义节点
    for e in entries:
        node_id = sanitize_mermaid_id(e['anchor'])
        label = f"{e['anchor']}: {e['title'][:12]}..."
        # 根据类型着色
        if '流程' in e['type']:
            style = f"style {node_id} fill:#e3f2fd"
        elif '对比' in e['type']:
            style = f"style {node_id} fill:#ffebee"
        elif '因果' in e['type']:
            style = f"style {node_id} fill:#e8f5e9"
        else:
            style = f"style {node_id} fill:#fff8e1"
        lines.append(f"    {node_id}[\"{label}\"]")
        lines.append(f"    {style}")
    
    lines.append("")
    
    # 定义边
    seen_edges = set()
    for a1, a2, rel in links:
        id1 = sanitize_mermaid_id(a1)
        id2 = sanitize_mermaid_id(a2)
        edge_key = tuple(sorted([id1, id2]))
        if edge_key not in seen_edges:
            seen_edges.add(edge_key)
            lines.append(f"    {id1} --- {id2}")
    
    lines.append("```")
    lines.append("")
    return "\n".join(lines)

def generate_overview_mermaid():
    """生成全局总览 Mermaid 图"""
    lines = []
    lines.append("## 全局知识领域总览图")
    lines.append("")
    lines.append("```mermaid")
    lines.append("graph LR")
    lines.append("    %%{init: {'theme': 'base'}}%%")
    lines.append("")
    
    # 定义领域节点（每个领域选一个代表性知识点）
    domain_nodes = {}
    for domain, entries in domain_entries.items():
        if not entries:
            continue
        # 选第一个作为代表
        rep = entries[0]
        node_id = sanitize_mermaid_id(domain.replace('/', '_'))
        domain_nodes[domain] = node_id
        label = f"{domain}: {len(entries)}题"
        lines.append(f"    {node_id}[\"{label}\"]")
    
    lines.append("")
    
    # 领域间联系
    cross_links = [
        ("人工智能/大模型基础", "人工智能/Prompt工程"),
        ("人工智能/大模型基础", "人工智能/Agent"),
        ("人工智能/大模型基础", "人工智能/微调"),
        ("人工智能/Prompt工程", "人工智能/Agent"),
        ("人工智能/Prompt工程", "人工智能/RAG"),
        ("人工智能/RAG", "人工智能/向量数据库"),
        ("人工智能/RAG", "人工智能/LangChain"),
        ("人工智能/LangChain", "人工智能/Agent"),
        ("人工智能/微调", "人工智能/大模型基础"),
        ("Java", "分布式与中间件"),
        ("Java", "数据库"),
        ("计算机网络", "分布式与中间件"),
        ("操作系统", "Java"),
        ("操作系统", "计算机网络"),
        ("数据库", "分布式与中间件"),
        ("设计模式", "Java"),
        ("设计模式", "分布式与中间件"),
    ]
    
    for d1, d2 in cross_links:
        if d1 in domain_nodes and d2 in domain_nodes:
            lines.append(f"    {domain_nodes[d1]} --> {domain_nodes[d2]}")
    
    lines.append("```")
    lines.append("")
    return "\n".join(lines)

# 生成知识图谱文件
output_path = os.path.join(BASE, 'KNOWLEDGE_GRAPH.md')
with open(output_path, 'w', encoding='utf-8') as f:
    f.write("# 面试记忆全局知识关联图谱\n\n")
    f.write("> 覆盖 512 个知识点的跨领域关联图，每个知识点之间用箭头标注关联关系。\n\n")
    f.write("---\n\n")
    
    # 总览图
    f.write(generate_overview_mermaid())
    f.write("---\n\n")
    
    # 按领域顺序生成详细图
    domain_order = [
        '人工智能/大模型基础',
        '人工智能/Prompt工程',
        '人工智能/RAG',
        '人工智能/向量数据库',
        '人工智能/LangChain',
        '人工智能/Agent',
        '人工智能/微调',
        'Java',
        '计算机网络',
        '数据库',
        '操作系统',
        '设计模式',
        '分布式与中间件',
    ]
    
    for domain in domain_order:
        entries = domain_entries.get(domain, [])
        if not entries:
            continue
        links = build_links(entries, max_links_per_node=3)
        f.write(generate_domain_mermaid(domain, entries, links))
        f.write("\n---\n\n")
    
    # 最后加一个全局锚点字索引表
    f.write("## 锚点字全局索引\n\n")
    f.write("| 锚点字 | 领域 | 知识点 |\n")
    f.write("|--------|------|--------|\n")
    for e in sorted(all_entries, key=lambda x: x['anchor']):
        f.write(f"| {e['anchor']} | {e['domain']} | {e['title'][:30]}... |\n")

print(f"Generated KNOWLEDGE_GRAPH.md with Mermaid diagrams for {len(domain_entries)} domains")
