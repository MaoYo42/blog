---
title: "每日科技速递 | 2026-06-10 — AI · 科技 · 经济"
description: 今日 AI 与大模型动态：Anthropic 发布 Claude Fable 5 / Mythos 5，Google 推出 Gemma 4 12B，小米 MiMo 突破 1000 tokens/s 输出；Apple WWDC 2026 发布 Siri AI，Cursor 欧洲总部落子伦敦，OpenAI 秘密提交 IPO。
date: 2026-06-10T20:00:00+08:00
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

**Anthropic 发布 Claude Fable 5 与 Claude Mythos 5**
Anthropic 今日正式推出 Claude Fable 5（通用安全版）和 Claude Mythos 5（受限安全版）。Fable 5 在软件工程、知识工作、视觉、科研等几乎所有测试基准上达到 SOTA，Stripe 称其将数月工程压缩至数天，FrontierCode 评分居前沿模型之首，可仅凭截图重建网页应用源码。Mythos 5 在药物设计中实现约 10 倍加速，其分子生物学假说盲测获科学家偏好的概率约 80%。两模型定价均为 $10/百万输入 tokens、$50/百万输出 tokens，较 Mythos Preview 降价过半。

**Google DeepMind 发布 Gemma 4 12B**
全新中等规模多模态模型，采用无编码器统一架构，原生支持音频输入。基准测试性能接近 26B MoE 模型但内存占用不到一半，仅需 16GB 显存即可在消费级笔记本本地运行。基于 Apache 2.0 开源发布，累计下载超 1.5 亿次。

**小米 MiMo 与 TileRT 联合发布 UltraSpeed 模式**
1T 参数旗舰模型输出速度首次突破 1000 tokens/s。采用 FP4 混合量化与 DFlash 块级并行推测解码，编码场景平均接受长度 6.30 tokens。FP4 权重与 DFlash 模型 checkpoint 已开源至 HuggingFace。API 限时开放至 6 月 23 日。

**Cohere 发布 North Mini Code 开源编码模型**
30B 参数 MoE 模型（3B 活跃参数），Apache 2.0 开源。在 SWE-Bench Verified 上 pass@10 达 80.2%，Terminal-Bench v2 达 55.1%，支持 64K/128K 上下文，专为智能体编码任务优化。

**Google 发布 Gemini 3.5 Live Translate**
全新音频模型，专为快速跨语言交流构建，支持多语言实时翻译。

## 🔧 科技产品与行业

**Apple WWDC 2026：Siri AI 与下一代 Apple Intelligence**
Apple 在本周 WWDC 2026 上正式发布 Siri AI，推出下一代 Apple Intelligence 功能，同时预览 iOS 27 等新系统。Siri AI 被视为 Apple 在 AI 赛道的关键一战，业界关注其能否在 OpenAI、Anthropic 和 Google 的竞争中突围。

**OpenAI 秘密提交 IPO 申请**
据可靠消息，OpenAI 近日秘密提交 IPO 申请。与此同时，CEO 山姆·奥特曼旗下 Tools for Humanity（Worldcoin 母公司）正进行裁员，因营收困境缩减规模。肯尼亚叫停其运营，韩国因隐私违规罚款 83 万美元。

**Cursor AI 欧洲总部落子伦敦**
AI 编程独角兽 Cursor 将欧洲总部设在伦敦，计划招聘约 200 人，并在巴黎、慕尼黑开设小型办事处。SpaceX 拥有以 600 亿美元收购 Cursor 的选择权。Cursor B2B 年化营收约 26 亿美元，客户包括英国航空、英国石油、诺基亚等。

**Claude Managed Agents 新增定时运行与环境变量**
Claude Platform 公开测试两项新功能：代理可按 cron 计划自动执行周期性任务；vaults 新增环境变量支持，允许代理通过 CLI 认证请求。已集成 Browserbase、KERNEL、Notion、Ramp 和 Sentry 等 CLI。

**OpenRouter 推出 Advisor 工具**
允许低成本模型在生成过程中动态调用强模型增强生成，实现成本与质量的动态平衡——例如 GPT-4o Mini 日常处理 + Claude Fable 关键时刻介入。

**Luma AI Ray3.2 API 发布**
电影级渲染 API 可大规模集成到产品中，面向开发者、代理机构和企业。

**World Labs 与 Lore 合作打造互动体验**
李飞飞创办的 World Labs 与 Lore 合作，将前沿 AI 空间智能技术转化为用户可享受的互动体验。

**火山引擎 TRAE Work 企业版正式上线**
面向企业的 AI 办公平台，提供 Work 和 Code 两种模式，支持多格式混合输入直接输出 PPT/文档，语音讨论自动整理纪要，以及自动化的数据整理与报告生成。

## 📊 经济与科技政策

**SpaceX 详解轨道 AI 数据中心卫星方案**
Elon Musk 首次详细解释 SpaceX AI1 轨道 AI 数据中心卫星：峰值功率 150 kW，持续约 120 kW，相当于一个 NVIDIA GB300 机架；通过激光链路实现约 1 Tbps 互联，低轨延迟 6-8 ms。由 Starship 发射，计划部署多达百万颗卫星。

**Apollo 与 Blackstone 联手 350 亿美元 AI 融资交易**
Apollo 和 Blackstone 合作开展 350 亿美元 AI 基础设施融资，Anthropic 和 Broadcom 参与。可能标志全新 AI 投资类别的开端。

**中国计划 2950 亿美元建设全国 AI 基础设施**
未来五年投入约 2 万亿元人民币（约 2950 亿美元）建设全国数据中心，推动国内 AI 产业发展。

**台湾考虑限制 AI 芯片对华出口**
据知情人士透露，台湾当局正考虑对 AI 芯片出口中国大陆实施更严格管制，以配合美国出口限制措施。

**德国里程碑式裁决：Google 对 AI Overviews 内容承担直接责任**
德国地方法院裁定 Google 对其 AI 概览生成内容直接承担法律责任，不能援引搜索引擎的有限责任保护，可能为全球 AI 内容责任认定树立先例。

**中国乘联会：5 月新能源零售渗透率达 62.9% 创历史新高**
乘联分会发布 5 月数据，新能源零售渗透率 62.9% 达历史高位。受燃油车销量下滑影响，2026 年国内乘用车零售销量预期下调至 -11%，但全年汽车出口有望达 1200 万辆。

## 📝 今日看点

2026 年 6 月 10 日是 AI 行业具有标志性的一天：Anthropic 同时发布 Claude Fable 5 与 Mythos 5，代表前沿 AI 模型的又一次跃升；Apple 在 WWDC 上以 Siri AI 打响 AI 反击战；SpaceX 的轨道 AI 数据中心方案将 AI 算力竞争延展至太空。大模型、资本、基础设施三条战线同时推进，AI 产业正以前所未有的速度重塑科技格局。
