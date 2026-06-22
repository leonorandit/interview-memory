const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '.interview-memory');
const OUTPUT_HTML = path.join(__dirname, 'knowledge-graph.html');

function walkDir(dir, callback) {
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (stat.isFile() && entry.endsWith('.md')) {
      callback(fullPath);
    }
  }
}

function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return {};
  const yaml = match[1];
  const data = {};
  for (const line of yaml.split('\n')) {
    const idx = line.indexOf(':');
    if (idx > 0) {
      const key = line.slice(0, idx).trim();
      const value = line.slice(idx + 1).trim();
      data[key] = value;
    }
  }
  return data;
}

function extractMarkdownLinks(content) {
  const regex = /\[([^\]]*)\]\(([^)]+)\)/g;
  const links = [];
  let m;
  while ((m = regex.exec(content)) !== null) {
    links.push(m[2]);
  }
  return links;
}

function extractRelatedTopics(content) {
  const sectionMatch = content.match(/##\s*关联知识点\s*\n([\s\S]*?)(?=##|$)/);
  if (!sectionMatch) return [];
  const lines = sectionMatch[1].split('\n');
  const topics = [];
  for (const line of lines) {
    // Match both - [ ] text and - [ ] [text](path)
    const m = line.match(/^\s*-\s*\[\s*\]\s*(.+)$/);
    if (m) {
      topics.push(m[1].trim());
    }
  }
  return topics;
}

// Extract mermaid edges from KNOWLEDGE_GRAPH.md
function extractMermaidDomainEdges(content) {
  const edges = [];
  const regex = /(\S+)\s*-->\s*(\S+)/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    edges.push({ source: m[1], target: m[2] });
  }
  return edges;
}

function extractKeywords(text) {
  const stopWords = new Set([
    '的','是','如何','什么','与','及','和','有','哪些','吗','在','中','为','怎么','请','你','我','它',
    '没有','不','了','过','呢','吧','啊','对','从','到','就','都','而','或','但','又','也','很','会',
    '能','要','去','来','上','下','个','种','些','一','二','三','四','五','六','七','八','九','十',
    '之','者','其','该','某','哪','若','当','让','给','把','被','向','比','跟','同','如','即','便',
    '虽','仅','只','最','更','太','非常','已经','正在','曾经','现在','这里','那里','这样','那样',
    '为什么','谁','哪儿','多少','几','怎样','或者','还有','以及','关于','对于','由于','根据',
    '通过','进行','使用','利用','实现','完成','开始','结束','过程','结果','原因','方法','方式',
    '作用','意义','区别','差异','特点','特征','优势','缺点','问题','解决','处理','应对','避免',
    '防止','导致','引起','产生','发生','出现','存在','具有','属于','包含','包括','组成','构成',
    '需要','必须','应该','可以','可能','能够','愿意','准备','打算','计划','目标','目的','意图'
  ]);
  return text
    .toLowerCase()
    .replace(/[^\u4e00-\u9fa5a-z0-9]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 2 && !stopWords.has(w));
}

function computeMatchScore(topic, fileTitle) {
  const topicWords = extractKeywords(topic);
  const fileWords = extractKeywords(fileTitle);
  if (topicWords.length === 0 || fileWords.length === 0) return 0;
  const fileSet = new Set(fileWords);
  let intersection = 0;
  for (const w of topicWords) {
    if (fileSet.has(w)) intersection++;
  }
  // Score = intersection / min length
  return intersection / Math.min(topicWords.length, fileWords.length);
}

// Collect all files
const files = [];
const fileMap = new Map();
const titleToRel = new Map(); // normalized title -> rel
const allTitles = []; // {norm, rel, title}

walkDir(BASE_DIR, (fullPath) => {
  const rel = path.relative(BASE_DIR, fullPath);
  const content = fs.readFileSync(fullPath, 'utf-8');
  const fm = parseFrontmatter(content);
  const title = path.basename(rel, '.md');
  const info = { rel, fullPath, content, fm, title, dir: path.dirname(rel) };
  files.push(info);
  fileMap.set(rel, info);
  const norm = title.toLowerCase().replace(/[\s\\/:*?"<>|]+/g, '');
  titleToRel.set(norm, rel);
  titleToRel.set(norm.replace(/[\s]+/g, ''), rel);
  allTitles.push({ norm, rel, title });
});

const nodes = [];
const edges = [];
const nodeSet = new Set();
const edgeSet = new Set();

function getNodeId(rel) {
  return rel.replace(/\\/g, '/');
}

function addNode(rel, fm, title) {
  const id = getNodeId(rel);
  if (nodeSet.has(id)) return id;
  nodeSet.add(id);
  nodes.push({
    id,
    title,
    domain: fm.domain || '其他',
    type: fm.type || '未知',
    anchor: fm.anchor || '',
    rhyme: fm.rhyme || ''
  });
  return id;
}

function addEdge(source, target, edgeType = 'link') {
  if (source === target) return;
  const key = source < target ? `${source}||${target}||${edgeType}` : `${target}||${source}||${edgeType}`;
  if (edgeSet.has(key)) return;
  edgeSet.add(key);
  edges.push({ source, target, type: edgeType });
}

// Create nodes
for (const f of files) {
  addNode(f.rel, f.fm, f.title);
}

// 1. Parse explicit markdown links
for (const f of files) {
  const sourceId = getNodeId(f.rel);
  const dir = path.dirname(f.rel);
  const links = extractMarkdownLinks(f.content);
  for (const rawLink of links) {
    if (/^[a-z][a-z0-9+.-]*:/i.test(rawLink)) continue;
    let resolved = decodeURIComponent(rawLink);
    if (!resolved.endsWith('.md')) resolved += '.md';
    resolved = path.normalize(path.join(dir, resolved));
    const resolvedId = getNodeId(resolved);
    if (nodeSet.has(resolvedId)) {
      addEdge(sourceId, resolvedId, 'link');
    }
  }
}

// 2. Fuzzy match related topics with keyword scoring
for (const f of files) {
  const sourceId = getNodeId(f.rel);
  const topics = extractRelatedTopics(f.content);
  for (const topic of topics) {
    const plain = topic.replace(/\[([^\]]*)\]\([^)]+\)/g, '$1').trim();
    if (!plain) continue;

    // Try exact title match first
    const exactNorm = plain.toLowerCase().replace(/[\s\\/:*?"<>|]+/g, '');
    let matchedRel = titleToRel.get(exactNorm) || titleToRel.get(exactNorm.replace(/\s+/g, ''));

    if (!matchedRel) {
      // Keyword similarity match
      let bestScore = 0;
      let bestRel = null;
      for (const t of allTitles) {
        const score = computeMatchScore(plain, t.title);
        if (score > bestScore) {
          bestScore = score;
          bestRel = t.rel;
        }
      }
      if (bestScore >= 0.4) {
        matchedRel = bestRel;
      }
    }

    if (matchedRel) {
      addEdge(sourceId, getNodeId(matchedRel), 'related');
    }
  }
}

// 3. Directory structure edges (chain + index hub)
const dirGroups = {};
for (const f of files) {
  if (f.title === '_INDEX') continue; // handled separately
  const d = f.dir;
  if (!dirGroups[d]) dirGroups[d] = [];
  dirGroups[d].push(f);
}

for (const [dir, group] of Object.entries(dirGroups)) {
  if (group.length < 2) continue;
  group.sort((a, b) => a.title.localeCompare(b.title));

  // Chain: connect each node to next 2
  for (let i = 0; i < group.length; i++) {
    for (let j = 1; j <= 2 && i + j < group.length; j++) {
      addEdge(getNodeId(group[i].rel), getNodeId(group[i + j].rel), 'dir');
    }
  }

  // Ring: connect last to first for cohesion
  if (group.length > 2) {
    addEdge(getNodeId(group[group.length - 1].rel), getNodeId(group[0].rel), 'dir');
  }

  // Connect _INDEX.md as hub
  const indexRelNorm = getNodeId(path.join(dir, '_INDEX.md'));
  if (nodeSet.has(indexRelNorm)) {
    for (const f of group) {
      addEdge(indexRelNorm, getNodeId(f.rel), 'index');
    }
  }
}

// 4. Cross-domain bridges from KNOWLEDGE_GRAPH.md
const kgPath = path.join(BASE_DIR, 'KNOWLEDGE_GRAPH.md');
if (fs.existsSync(kgPath)) {
  const kgContent = fs.readFileSync(kgPath, 'utf-8');
  const domainEdges = extractMermaidDomainEdges(kgContent);

  // Build domain -> node ids mapping
  const domainNodes = {};
  for (const n of nodes) {
    const d = n.domain;
    if (!domainNodes[d]) domainNodes[d] = [];
    domainNodes[d].push(n.id);
  }

  for (const de of domainEdges) {
    // Map mermaid node names to domains roughly
    // e.g. "人工智能RAG" -> "人工智能", "JavaJVM" -> "Java"
    const srcDomain = de.source.replace(/[A-Za-z]+$/, '').replace(/[^\u4e00-\u9fa5]/g, '');
    const tgtDomain = de.target.replace(/[A-Za-z]+$/, '').replace(/[^\u4e00-\u9fa5]/g, '');

    const srcNodes = domainNodes[srcDomain] || [];
    const tgtNodes = domainNodes[tgtDomain] || [];

    if (srcNodes.length && tgtNodes.length) {
      // Create a few bridge edges between random nodes of the two domains
      const count = Math.min(3, srcNodes.length, tgtNodes.length);
      for (let i = 0; i < count; i++) {
        const s = srcNodes[Math.floor(Math.random() * srcNodes.length)];
        const t = tgtNodes[Math.floor(Math.random() * tgtNodes.length)];
        addEdge(s, t, 'bridge');
      }
    }
  }
}

// Group domains
let domains = [...new Set(nodes.map(n => n.domain))];
const domainColor = {};
const palette = [
  '#ef4444', '#f97316', '#f59e0b', '#84cc16', '#10b981',
  '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#d946ef',
  '#f43f5e', '#14b8a6', '#0ea5e9', '#a855f7', '#eab308'
];
domains.forEach((d, i) => {
  domainColor[d] = palette[i % palette.length];
});

// Compute degree for node sizing
const degree = {};
for (const e of edges) {
  degree[e.source] = (degree[e.source] || 0) + 1;
  degree[e.target] = (degree[e.target] || 0) + 1;
}
for (const n of nodes) {
  n.degree = degree[n.id] || 0;
}

const graphData = { nodes, edges, domains, domainColor };

// Build HTML
const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Interview Memory 知识关联图谱</title>
<script src="https://d3js.org/d3.v7.min.js"></script>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  background: #0f172a;
  color: #e2e8f0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  overflow: hidden;
}
#graph {
  width: 100vw;
  height: 100vh;
}
#ui {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 12px;
  padding: 16px;
  max-width: 300px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
#ui h1 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #f8fafc;
}
#ui .stats {
  font-size: 12px;
  color: #94a3b8;
  margin-bottom: 12px;
}
#search {
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(148,163,184,0.25);
  background: rgba(30, 41, 59, 0.8);
  color: #e2e8f0;
  font-size: 13px;
  outline: none;
  margin-bottom: 12px;
}
#search:focus { border-color: #3b82f6; }
.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #cbd5e1;
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
  transition: background .2s;
}
.legend-item:hover { background: rgba(255,255,255,0.05); }
.legend-color {
  width: 10px; height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
#tooltip {
  position: absolute;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(148,163,184,0.2);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  color: #e2e8f0;
  pointer-events: none;
  opacity: 0;
  transition: opacity .15s;
  max-width: 280px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
  z-index: 100;
}
#tooltip .tt-title { font-weight: 600; margin-bottom: 4px; color: #fff; }
#tooltip .tt-meta { color: #94a3b8; font-size: 12px; }
.controls {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
}
.controls button {
  width: 36px; height: 36px;
  border-radius: 8px;
  border: 1px solid rgba(148,163,184,0.2);
  background: rgba(15,23,42,0.8);
  color: #e2e8f0;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.controls button:hover { background: rgba(30,41,59,0.9); }
.edge-legend {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(148,163,184,0.15);
}
.edge-legend-title {
  font-size: 11px;
  color: #64748b;
  margin-bottom: 6px;
}
.edge-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #94a3b8;
  margin-bottom: 4px;
}
.edge-line {
  width: 20px;
  height: 2px;
  border-radius: 1px;
}
</style>
</head>
<body>
<div id="graph"></div>
<div id="ui">
  <h1>知识关联图谱</h1>
  <div class="stats">节点: ${nodes.length} &nbsp;|&nbsp; 关联: ${edges.length}</div>
  <input id="search" placeholder="搜索知识点..." autocomplete="off">
  <div class="legend" id="legend"></div>
  <div class="edge-legend">
    <div class="edge-legend-title">连线类型</div>
    <div class="edge-item"><div class="edge-line" style="background:rgba(148,163,184,0.5)"></div> 明确内链</div>
    <div class="edge-item"><div class="edge-line" style="background:rgba(148,163,184,0.3);border-top:1px dashed rgba(148,163,184,0.4);height:0"></div> 关联知识点匹配</div>
    <div class="edge-item"><div class="edge-line" style="background:rgba(56,189,248,0.25)"></div> 同目录关联</div>
    <div class="edge-item"><div class="edge-line" style="background:rgba(168,85,247,0.3)"></div> 领域间桥梁</div>
  </div>
</div>
<div id="tooltip"></div>
<div class="controls">
  <button id="zoomIn" title="放大">+</button>
  <button id="zoomOut" title="缩小">−</button>
  <button id="reset" title="重置">⌂</button>
</div>
<script>
const graphData = ${JSON.stringify(graphData)};

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select("#graph").append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", [0, 0, width, height]);

const g = svg.append("g");

const zoom = d3.zoom()
  .scaleExtent([0.05, 4])
  .on("zoom", (event) => g.attr("transform", event.transform));

svg.call(zoom);

// Domain cluster centers
const domainAngles = {};
const domainCount = graphData.domains.length;
graphData.domains.forEach((d, i) => {
  domainAngles[d] = (i / domainCount) * Math.PI * 2;
});

const simulation = d3.forceSimulation(graphData.nodes)
  .force("link", d3.forceLink(graphData.edges).id(d => d.id).distance(d => {
    if (d.type === 'link') return 80;
    if (d.type === 'related') return 100;
    if (d.type === 'bridge') return 120;
    return 60; // dir / index
  }).strength(d => {
    if (d.type === 'link') return 0.8;
    if (d.type === 'related') return 0.5;
    if (d.type === 'bridge') return 0.3;
    return 0.2;
  }))
  .force("charge", d3.forceManyBody().strength(d => -120 - (d.degree || 0) * 5))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("collide", d3.forceCollide().radius(d => Math.sqrt(d.degree || 1) * 4 + 10))
  .force("x", d3.forceX(d => {
    const angle = domainAngles[d.domain] || 0;
    return width / 2 + Math.cos(angle) * 180;
  }).strength(0.06))
  .force("y", d3.forceY(d => {
    const angle = domainAngles[d.domain] || 0;
    return height / 2 + Math.sin(angle) * 180;
  }).strength(0.06));

const link = g.append("g")
  .selectAll("line")
  .data(graphData.edges)
  .join("line")
  .attr("stroke", d => {
    if (d.type === 'link') return 'rgba(148,163,184,0.45)';
    if (d.type === 'related') return 'rgba(148,163,184,0.25)';
    if (d.type === 'bridge') return 'rgba(168,85,247,0.35)';
    return 'rgba(56,189,248,0.2)';
  })
  .attr("stroke-opacity", 0.7)
  .attr("stroke-width", d => d.type === 'link' ? 1.5 : (d.type === 'bridge' ? 1.2 : 0.8))
  .attr("stroke-dasharray", d => d.type === 'related' ? "3,3" : (d.type === 'bridge' ? "4,2" : null));

const node = g.append("g")
  .selectAll("g")
  .data(graphData.nodes)
  .join("g")
  .call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended));

node.append("circle")
  .attr("r", d => Math.min(28, Math.sqrt(d.degree || 1) * 3.5 + 5))
  .attr("fill", d => graphData.domainColor[d.domain] || '#94a3b8')
  .attr("stroke", d => d.degree > 5 ? '#fff' : 'rgba(255,255,255,0.25)')
  .attr("stroke-width", d => d.degree > 5 ? 2 : 1)
  .style("cursor", "pointer")
  .style("transition", "all 0.2s");

node.append("text")
  .attr("x", d => Math.min(28, Math.sqrt(d.degree || 1) * 3.5 + 5) + 4)
  .attr("y", 4)
  .text(d => d.title.length > 14 ? d.title.slice(0, 12) + '…' : d.title)
  .attr("fill", "#e2e8f0")
  .attr("font-size", d => Math.min(13, 9 + (d.degree || 0) * 0.35) + 'px')
  .attr("font-weight", d => (d.degree || 0) > 3 ? 600 : 400)
  .style("pointer-events", "none")
  .style("opacity", d => (d.degree || 0) >= 1 ? 0.9 : 0.55);

const tooltip = d3.select("#tooltip");

node.on("mouseover", function(event, d) {
  tooltip.style("opacity", 1)
    .html('<div class="tt-title">' + d.title + '</div>' +
          '<div class="tt-meta">领域: ' + d.domain + ' | 连接: ' + (d.degree || 0) + '</div>' +
          (d.rhyme ? '<div class="tt-meta" style="margin-top:4px;color:#cbd5e1;">口诀: ' + d.rhyme + '</div>' : ''));
  d3.select(this).select("circle").attr("stroke", "#fff").attr("stroke-width", 3).attr("r", Math.min(30, Math.sqrt(d.degree || 1) * 3.5 + 7));

  const neighborIds = new Set();
  neighborIds.add(d.id);
  graphData.edges.forEach(e => {
    if (e.source.id === d.id) neighborIds.add(e.target.id);
    if (e.target.id === d.id) neighborIds.add(e.source.id);
  });
  node.style("opacity", n => neighborIds.has(n.id) ? 1 : 0.12);
  link.style("opacity", l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.04);
})
.on("mousemove", function(event) {
  tooltip.style("left", (event.pageX + 14) + "px").style("top", (event.pageY + 10) + "px");
})
.on("mouseout", function(event, d) {
  tooltip.style("opacity", 0);
  d3.select(this).select("circle")
    .attr("stroke", d.degree > 5 ? '#fff' : 'rgba(255,255,255,0.25)')
    .attr("stroke-width", d.degree > 5 ? 2 : 1)
    .attr("r", Math.min(28, Math.sqrt(d.degree || 1) * 3.5 + 5));
  node.style("opacity", 1);
  link.style("opacity", 0.7);
});

simulation.on("tick", () => {
  link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

  node.attr("transform", d => 'translate(' + d.x + ',' + d.y + ')');
});

function dragstarted(event, d) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x; d.fy = d.y;
}
function dragged(event, d) {
  d.fx = event.x; d.fy = event.y;
}
function dragended(event, d) {
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null; d.fy = null;
}

// Legend
const legend = d3.select("#legend");
graphData.domains.forEach(d => {
  const item = legend.append("div").attr("class", "legend-item")
    .on("click", function() {
      const isDimmed = d3.select(this).classed("dimmed");
      d3.select(this).classed("dimmed", !isDimmed).style("opacity", isDimmed ? 1 : 0.35);
      const activeDomains = new Set();
      legend.selectAll(".legend-item").each(function(dom) {
        if (!d3.select(this).classed("dimmed")) activeDomains.add(dom);
      });
      if (activeDomains.size === graphData.domains.length) {
        node.style("opacity", 1);
        link.style("opacity", 0.7);
      } else {
        node.style("opacity", n => activeDomains.has(n.domain) ? 1 : 0.06);
        link.style("opacity", l => (activeDomains.has(l.source.domain) && activeDomains.has(l.target.domain)) ? 0.6 : 0.02);
      }
    });
  item.append("div").attr("class", "legend-color").style("background", graphData.domainColor[d]);
  item.append("span").text(d);
});

// Search
const search = d3.select("#search");
search.on("input", function() {
  const val = this.value.trim().toLowerCase();
  if (!val) {
    node.style("opacity", 1);
    link.style("opacity", 0.7);
    return;
  }
  const matched = new Set();
  graphData.nodes.forEach(n => {
    if (n.title.toLowerCase().includes(val) || n.domain.toLowerCase().includes(val)) {
      matched.add(n.id);
    }
  });
  node.style("opacity", n => matched.has(n.id) ? 1 : 0.08);
  link.style("opacity", 0.03);
});

// Controls
d3.select("#zoomIn").on("click", () => svg.transition().duration(300).call(zoom.scaleBy, 1.3));
d3.select("#zoomOut").on("click", () => svg.transition().duration(300).call(zoom.scaleBy, 1 / 1.3));
d3.select("#reset").on("click", () => {
  svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
  simulation.alpha(1).restart();
});

// Resize
window.addEventListener("resize", () => {
  const w = window.innerWidth, h = window.innerHeight;
  svg.attr("width", w).attr("height", h).attr("viewBox", [0, 0, w, h]);
  simulation.force("center", d3.forceCenter(w / 2, h / 2));
  simulation.alpha(0.3).restart();
});
</script>
</body>
</html>`;

fs.writeFileSync(OUTPUT_HTML, html, 'utf-8');
console.log('Generated:', OUTPUT_HTML);
console.log('Nodes:', nodes.length, 'Edges:', edges.length);
const isolated = nodes.filter(n => (n.degree || 0) === 0).length;
console.log('Isolated nodes:', isolated);
