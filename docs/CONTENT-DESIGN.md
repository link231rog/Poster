# Poster 站点内容设计文档

> 通过 2026-07-04 grilling session 固化。后续所有内容实现以此文档为准。

---

## 1. 身份定位

**一句话：** B.Eng. in Automation, Southwest University (211). AI Agent researcher at EZE LAB. 2 papers under review (CCS, AAAI). 工程驱动的 agent 设计者。

**六边形能力标识：** 学业 · 科研 · 工程 · 教学 · 投资 · 品味

**目标受众：** 港科广（HKUST-GZ）AP，方向 LLM Agent / Agentic AI（秦成伟、郭志江、王昊 等）。

**差异化锚点：**
- 自动化（非CS）背景 → 工程基因，和纯CS路线拉开区隔
- 从零到CCS在投仅 ~8 个月 → 快速自驱
- RAG safety + agent 工程化双轨 → 研究+落地闭环

---

## 2. 页面架构

| 路径 | 页面 | 用途 | 变更 |
|------|------|------|------|
| `/` | index | Hero + 双 Gate（Work/Life） | 修复 cv-list 内容 |
| `/work` | work | 三栏布局：左栏简介 → 中栏进度条 → 右栏 Study/Research/Engineering | 大面积重写 |
| `/travel` | travel | Map + Photos + Investment | 新增 Investment section |
| `/about` | about | 独立 About 页（个人叙述） | 全部重写 |
| `/blog` | blog | 技术博客（已有 3 篇） | 保持不变 |
| `/projects` | projects | 独立项目页 | 替换为真实项目 |
| `/timeline` | timeline | 时间线页 | 替换为真实数据 |
| `/now` | now | 当前状态页 | 更新内容 |
| `/resources` | resources | 资源汇总 | 保持不变 |

---

## 3. 各页面内容详设

### 3.1 Home (`/`)

**Hero section（不修改）：**
- "Poster" 大标题 + "I prefer to be a creator" tagline + 名字
- WireframeGlobe 动画

**Home-split section（需修改）：**
- 左栏（home-left）：
  - 名字 + headline
  - cv-list 替换为：
    ```
    B.Eng. in Automation, Southwest University (211)
    Member of EZE LAB
    Research focus: AI Agent
    CCS 2026 under review (3rd author)
    AAAI submitted (Hypergraph & LLM)
    ```
  - 状态指示器保持不变
- 右栏（home-right）：
  - Work gate → `/work`
  - Life gate → `/travel`

---

### 3.2 Work (`/work`) 🔥

**Layout：三栏结构**
```
左栏（~25%）  |  中栏（~5%）     |  右栏（内容）
              |                  |
· 名字        |  进度条           |  Study:
· 一句话定位   |  （section        |  · 条目
· key links   |   滚动监听）      |  · 条目
              |                  |
              |                  |  Research:
              |                  |  · 条目
              |                  |  · - 进行中（浅色）
              |                  |
              |                  |  Engineering:
              |                  |  · 条目
              |                  |  · - 进行中（浅色）
```

**右栏 Sections（严格 3 个）：**

#### Study
```
西南大学（211, 重庆）
自动化专业 本科
GPA 3.84 · Rank 5%
CET-6 540 · 备考 IELTS 中

· 西南大学校二等奖学金
· 西南大学三好学生
· 西南大学优秀共青团员
· 挑战杯、大学生创新创业大赛等比赛经历若干
```

#### Research
```
EZE LAB 成员，导师：黄俊杰副教授（huangjunjie-cs.github.io）
研究方向：AI Agent · RAG Safety

CCS 2026 在审（第三作者）—— RAG 安全与对抗鲁棒性
AAAI 已投稿 —— Hypergraph & LLM

- Hypergraph & LLM 实验进行中
- 人机共生方向论文撰写中
```

#### Engineering
```
Agent 工作流编排：多模型路由 + 上下文感知（2025.11–2026.01）
Markdown 工具链：Agent skill 管理与上下文工程
Harness Engineering：opencode skills 维护与 superpowers 集成
多智能体系统：模型选择策略与团队协作设计

- LoRA 微调实验进行中
```

**左栏内容：** 名字 + 一句话定位（"Agent 研究者 · 工程驱动的设计者"）+ GitHub / Email / Scholar 链接。

**中栏内容：** 竖线进度条，监听右栏滚动位置，高亮当前 section。

**条目格式：**
- 已完成的条目：正常颜色，无序列表
- 进行中的条目：`- ` 开头，浅色文字（`--text-warm-secondary`）

---

### 3.3 Life (`/travel`) → 新增 Investment

**现有 sections（保持不变）：**
- Map（省市地图 + 旅行笔记）
- Photos（照片画廊）

**新增 section：Investment**
```
投资经历（2 年港股实战）

· 关注价值投资与长期复利
· 经历过完整牛熊周期
· 将工程思维应用于投资决策：数据驱动、风险建模、系统化执行

> 投资是认知的变现——和做研究一样，需要框架、纪律和长期主义。
```
**风格：** 点到为止，一句话定性 + 两三条要点。放右边栏作为第三个 section。

**左栏 sections 更新：** Map · Photos · Investment

---

### 3.4 About (`/about`) → 全部重写

**核心叙事线：** 自动化出身 → AI Agent 研究者 → 工程化实践者

**段落结构：**
1. **Background：** 西南大学自动化专业，GPA 3.84 Rank 5%。不是传统 CS 路径——自动化给我的工程思维和系统化视角。
2. **Research：** 加入 EZE LAB 后在黄俊杰副教授指导下做 RAG 安全方向研究。CCS 2026 三作在审，AAAI 在投。关注 Agent 系统的可靠性和对抗鲁棒性。
3. **Engineering：** 从 2025 年 8 月用 Gemini CLI 开始，一年内经历了完整的 AI 工具链进化——从 markdown workflow 到多模型 agent 编排，再到自己开发 harness engineering 工具链。我相信好的研究需要好的工程支撑。
4. **Beyond Research：** 2 年港股投资经历、摄影、旅行。跨领域的经验让我习惯用多视角看问题。
5. **Connect：** GitHub / Email / Scholar。

**风格要求：** 真人口吻，不要 AI 味（不要写 "learning in public"、"boring technology that lasts" 等 AI 常见表达）。用中文语境下的英文表述。

---

### 3.5 Timeline → 替换真实数据

**当前文件：** `content/timeline/timeline.yaml`

**当前内容全部虚构：** Systems Lab、Interface Studio、University Program 均不存在。

**替换为：**
```yaml
items:
  - id: ccs-paper
    start: '2026.04'
    end: Present
    role: Undergraduate Researcher
    organization: EZE LAB, Southwest University
    type: research
    summary: CCS 2026 under review (3rd author). RAG safety and adversarial robustness.
    active: true
  - id: eze-lab
    start: '2025'
    end: Present
    role: Undergraduate Researcher
    organization: EZE LAB
    type: research
    summary: Joined EZE LAB under Associate Professor Junjie Huang. Focus on AI Agent and RAG safety.
    active: true
  - id: agent-engineering
    start: '2025.11'
    end: '2026.01'
    role: Independent Engineering
    organization: Personal Projects
    type: work
    summary: Built multi-agent orchestration with model routing and context-aware selection.
  - id: ai-tooling
    start: '2025.08'
    end: '2025.11'
    role: AI Tooling Explorer
    organization: Personal Projects
    type: work
    summary: Started with Gemini CLI, built Markdown workflow for agent skill management.
```

---

### 3.6 Projects → 替换真实项目

**当前问题：**
- `agent-lab`: repo 链接错误 (`link/agent-lab`)，年份错误（2024，实际最早 2025 年才接触 AI）
- `opencode-workflows`: repo 链接错误 (`link/opencode-workflows`)
- `poster-site`: repo 链接错误 (`link/poster-site`)

**替换为以下真实项目（不需要 GitHub 链接也可以写）：**

#### 1. Multi-Agent Orchestration System
```yaml
slug: agent-orchestration
title: Agent Orchestration System
summary: 多模型多智能体协作系统，支持上下文感知的模型选择与团队任务分配。
tags: [agents, routing, context-engineering]
repo: null  # 未开源
featured: true
status: ongoing
year: 2026
```

#### 2. Harness Engineering Toolkit
```yaml
slug: harness-toolkit
title: Harness Engineering Toolkit
summary: Agent 工具链的工程化封装——集成 opencode skills、superpowers 与自动化工作流。
tags: [tooling, skills, automation]
repo: https://github.com/link231rog  # 或 null
featured: true
status: ongoing
year: 2026
```

#### 3. Markdown Workflow System
```yaml
slug: markdown-workflow
title: Markdown Workflow System
summary: 基于 Markdown 的 Agent 指令系统，解决 prompt 漂移和上下文管理问题。
tags: [prompts, workflow, markdown]
repo: null
featured: false
status: shipped
year: 2025
```

#### 4. Poster Site
```yaml
slug: poster-site
title: Poster Site
summary: 内容驱动的个人网站，Astro + TypeScript，部署于 GitHub Pages。
tags: [astro, static, design-system]
repo: https://github.com/link231rog/Poster
demo: https://link231rog.github.io/Poster/
featured: false
status: ongoing
year: 2025
```

---

## 4. 数据文件修复清单

| 文件 | 当前问题 | 修复方案 |
|------|---------|---------|
| `content/site/profile.yaml` | headline 写 CS 相关 | 改为 Automation + Agent Research |
| `content/site/home.yaml` | hero 配置无关痛痒 | 确认不需要改 |
| `content/pages/about.md` | 全部 AI 生成虚构内容 | 按 3.4 重写 |
| `content/timeline/timeline.yaml` | 4 条全部虚构 | 按 3.5 替换 |
| `content/projects/agent-lab.md` | repo/年份全错 | 删除或替换为真实项目 |
| `content/projects/opencode-workflows.md` | repo 错误 | 修复或替换 |
| `content/projects/poster-site.md` | repo 错误 | 修复 |
| `content/blog/*.md` | 3 篇已有 | 审核内容是否真实 |

---

## 5. UI 变更清单

| 文件 | 变更 |
|------|------|
| `src/pages/index.astro` | 修复 cv-list 内容 |
| `src/pages/work.astro` | 三栏布局重写：左栏简介 + 中栏进度条 + 右栏 Study/Research/Engineering |
| `src/pages/travel.astro` | 新增 Investment section |
| `src/layouts/SplitLayout.astro` | 调整 layout 支持三栏结构，或新建 WorkLayout.astro |
| `src/styles/global.css` | 新 layout 样式 + 进度条样式 + 浅色 ongoing 条目样式 |

---

## 6. 实现优先级

1. **数据修复**（高）— 先修内容数据，再改 UI
2. **about.md 重写**（高）
3. **timeline.yaml 替换**（高）
4. **projects/*.md 修复**（高）
5. **work.astro 三栏重写**（中）
6. **travel.astro Investment section**（低）
7. **index.astro cv-list 修复**（中）

---

*设计定稿：2026-07-04 | 基于 grilling session 产出*
