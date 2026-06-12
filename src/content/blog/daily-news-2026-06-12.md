---
title: "每日科技速递 | 2026-06-12 — AI · 科技 · 经济"
description: 今日 AI 与大模型动态、科技行业新闻、经济政策要闻汇总。
date: 2026-06-12T20:00:00+08:00
categories:
  - 资讯
tags:
  - AI
  - 科技
  - 新闻
  - 日报
  - 人工智能
  - 经济
cover: https://maoyo42.github.io/blog/img/cover/5.webp
---

## 🤖 AI 大模型动态

**Midjourney V8.1 已成为默认模型**
Midjourney 正式将默认模型从 V7 升级至 V8.1。新版在智能性、连贯性、对详细提示的遵循度以及文本渲染效果上均有显著提升，HD 模式也已同步支持。

**Gemini Omni Flash 视频任务达 SOTA**
Google DeepMind 的 Gemini Omni Flash 在图像到视频、文本到视频和视频编辑任务上均达到业界最先进水平（SOTA），即将通过 API 向开发者开放。

**mlx-vlm v0.6.3 发布，首发支持 DiffusionGemma 和 North Mini Code**
mlx-vlm v0.6.3 上线即日支持 Google DeepMind 的 DiffusionGemma（26B MoE，仅激活 3.8B，量化后 18GB 可运行）和 Cohere North Mini Code 1.0（30B MoE，仅激活 3B，BF16 下约 66 tok/s）。

**DeepSeek-R1 开源复现项目发布**
DeepSeek-R1 的开源复现项目在 GitHub 发布，在 Hacker News 上获得高度关注，旨在以开源方式完整复现 DeepSeek-R1 模型的推理能力。

**MiniMax Sparse Attention（MSA）块状稀疏注意力论文发布**
MiniMax 提出 MSA 块状稀疏注意力机制，基于 GQA 构建。在 109B 参数多模态模型上，MSA 与 GQA 性能持平，1M 上下文下每 token 注意力计算减少 28.4 倍，配合定制 GPU 内核可实现 14.2 倍推理加速。

**腾讯混元开源 HPC-Ops 推理算子库全面升级**
腾讯混元 AI Infra 团队开源升级 HPC-Ops 推理算子库，推出五大核心算子。Attention 采用运行时动态负载调度，长文本最高加速 2.95 倍，端到端 QPM 提升 17%；FusedMoE 相对 vLLM、SGLang 性能提升 1.2x~1.6x。

**阿里云发布 Meoo CLI：本地 AI 编程项目一键部署上线**
阿里云推出 Meoo（秒悟）开源 CLI 工具，支持 Claude Code、Codex、Cursor 等本地 AI 编程助手，可自动完成数据库接入、用户登录、文件存储及项目发布，将本地项目一键部署上线并生成可分享链接。

## 🔧 科技产品与行业

**SpaceX 今日在纳斯达克上市，史上最大 IPO**
SpaceX 以代码 SPCX 在纳斯达克上市，定价每股 $135，估值约 $1.77 万亿，成为史上最大 IPO。Starlink 持续盈利及与 xAI 的潜在整合是市场关注焦点。

**贝佐斯 AI 公司 Prometheus 融资 $120 亿，估值 $410 亿**
杰夫·贝佐斯联合创立的 Prometheus 在成立仅 7 个月、尚无任何产品交付的情况下，以 $410 亿估值完成 $120 亿融资（最初估值仅 $62 亿）。公司定位为"人工通用工程师"，计划斥资 $1000 亿收购传统工业企业以获取制造业训练数据。

**Anthropic 与 DXC 达成全球联盟，将 Claude 引入关键行业系统**
Anthropic 与 IT 服务巨头 DXC Technology 达成多年全球联盟。DXC 将培训数万名 Claude 认证前沿部署工程师（FDE），将 Claude 引入全球大型银行、航空、保险和政府机构的关键系统。DXC OASIS 平台超 95% 代码已由 Claude 编写。

**全自主无人机首次击毙人类士兵**
据《新科学家》6 月 10 日报道，全自主无人机首次在实战中执行致命攻击并击毙人类士兵。这是有记录以来第一次由完全自主运行的无人机执行致命打击，引发自主武器系统的伦理与安全讨论。

**Runway 与 Lionsgate 扩大战略合作**
Lionsgate 取得 Runway 股权，双方启动联合开发项目，将基于 Lionsgate 现有 IP 和 Runway 生成模型共同创作短剧系列。Lionsgate 还将作为主持伙伴参与 Runway AI 电影节。

**苹果 iOS 27 健康 App 大改版**
苹果在 iOS 27 中重构健康 App，改为卡片布局并新增导航栏。新增视觉智能营养识别（iPhone 15 Pro 及以上），通过相机拍摄食物即可获取加工程度、蛋白质、含糖量等信息。经期追踪扩展支持围绝经期，Fitness+ 新增相关课程。

**OpenAI Codex 推出速率重置攒存和浏览器开发者模式**
Codex 推出将速率限制重置保留到以后使用的功能，同时为 Chrome 和内置浏览器引入开发者模式（CDP），支持调试 JavaScript 性能、检查网络流量和页面状态。

**Cursor 推出 Auto-review 机制**
Cursor 推出 Auto-review，通过分类器智能体在工具调用前审查动作风险。高风险操作被阻止并返回解释，低风险操作放行。分类器采用小模型运行在智能体循环内，测试基于约 12 小时内部开发生成的数据。

## 📊 经济与科技政策

**AI 监管立法加速：纽约州通过 7 项 AI 相关法案**
纽约州立法机构在 2026 年会期结束时通过了 7 项 AI 相关法案并送交州长签署。罗德岛也通过了相关 AI 法案，全美 AI 监管立法进程持续加速。

**Anthropic CEO 警告 AI 或造成大规模长期性岗位流失**
Anthropic CEO 达里奥·阿莫迪警告，AI 导致的大规模岗位流失是技术固有属性。他提出应对思路：完善劳动力市场监测、推行薪资保障与留岗税收优惠、发放培训补贴，若人力需求永久下降则需通过征税推行全民基本收入。

**OpenAI 正酝酿大幅降价，引发市场关注**
OpenAI 考虑大幅降价，AI 学者 Gary Marcus 认为这暴露了公司面对竞争加剧的疲软态势。

**中国 AI 浪潮引发官媒呼吁保护劳动者权益**
中国工作场所快速采用 AI 引发官媒异常直白地呼吁保护劳工权利。北京正在研究如何控制新技术带来的社会风险。

**Deezer 推出面向跨平台的 AI 音乐检测器**
Deezer 推出可扫描用户在其他流媒体平台播放列表的服务，检测其中的 AI 生成音乐，成为首个跨平台 AI 音乐检测工具。

## 📝 今日看点

**今日最大事件当属 SpaceX 以史上最大 IPO 登陆纳斯达克**，估值 $1.77 万亿的航天巨头正式上市标志着科技资本市场的历史性时刻。**同时，贝佐斯的 Prometheus 以 $120 亿融资和 $410 亿估值再次刷新 AI 创业公司的融资纪录**，尽管尚无产品交付，其"人工通用工程师"愿景已吸引巨额资本。此外，**Anthropic 与 DXC 联盟、全自主无人机首次实战攻击、以及多州 AI 监管立法**共同构成了一个科技与治理交织的密集新闻日。
