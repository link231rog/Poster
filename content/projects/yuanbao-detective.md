---
slug: yuanbao-detective
title: Xiaoyuan Detective
title_zh: 小元查证
summary: Fact-checking workbench that verifies ads, specs and viral claims against primary official sources. Uses Tencent Yuanbao search, verbatim quote checks and evidence-fusion probabilities, and ships as a web console, a desktop pet and an MCP server for coding tools.
summary_zh: 对广告参数与网络传闻做实时核查的工作台。通过腾讯元宝检索官方一手来源，逐字核对原文引用，再用证据融合给出失实概率。提供网页控制台、桌面小宠与编码工具 MCP 三种入口。
tags:
  - agents
  - mcp
  - fact-checking
  - retrieval
demo: https://yuanbao-detective.pages.dev/
cover: /projects/yuanbao-detective-cover.jpg
featured: true
status: shipped
year: 2026
---

A fact-checking system for consumer claims and online rumors. It retrieves primary sources through Tencent Yuanbao search, merges syndicated reposts so one article counts as one source, checks every citation against the original text, and reports a verdict with false / true / uncertain probabilities plus clickable source links.

The same engine is exposed three ways: a desktop pet for quick lookups on any page, a web console for full reports, and an MCP server so coding agents can call the audit tool directly and read the reasoning chain.

针对消费宣传与网络传闻的核查系统：检索官方一手来源，合并同源转载，逐字核对原文引用，输出带失实、属实、不确定三项概率的结论，并附可点击的来源链接。同一套内核提供三种入口：随手查的桌面小宠、看完整报告的控制台，以及供编码工具直接调用的 MCP 服务。
