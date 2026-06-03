---
title: "每日科技速递 | 2026-06-03 — AI · 科技 · 经济"
description: 微软 Build 大会发布 MAI-Thinking-1 推理模型；Anthropic 秘密提交 IPO 申请；特朗普签署 AI 行政令；ChatGPT 月活突破 10 亿。
date: 2026-06-03T20:00:00+08:00
categories:
  - 资讯
tags:
  - AI
  - 科技
  - 新闻
  - 日报
  - 人工智能
  - 经济
  - Microsoft
  - Anthropic
cover: https://maoyo42.github.io/blog/img/cover/5.webp
---

## 🤖 AI 大模型动态

**微软发布首款自研推理模型 MAI-Thinking-1**
微软在 Build 2026 大会上正式发布其首款高级推理 AI 模型 MAI-Thinking-1。该模型为中等规模（350 亿参数，128K 上下文窗口），在关键软件工程基准测试中达到领先水平，盲测中人类偏好评价与 Claude Sonnet 4.6 持平。微软强调模型从头使用干净数据训练，未涉及第三方知识蒸馏，标志着其摆脱对 OpenAI 依赖迈出关键一步。同期发布的还有 MAI-Code-1-Flash，即日向全部 GitHub Copilot 用户开放。

**阶跃星辰发布 Step 3.7 Flash 推理优化模型**
阶跃星辰推出推理优化型模型 Step 3.7 Flash，采用 196B MoE 架构。模型采用多矩阵分解注意力机制，KV-cache 成本仅为 DeepSeek 模型的约 22%，通过注意力与 FFN 解耦实现高效服务。该模型已通过 Fireworks AI 提供，采用 Apache 2.0 许可，可用于构建智能体应用。

**Holo3.1：快速本地计算机使用智能体**
基于 Qwen 模型家族的 Holo3.1 发布，提供 0.8B 到 35B-A3B 四种尺寸，首次发布 FP8、Q4 GGUF 和 NVFP4 量化检查点。在 AndroidWorld 基准测试中，35B-A3B 得分从 67% 提升至 79.3%；NVFP4 量化在 DGX Spark 上实现 1.74 倍 token 吞吐量提升，步骤时间从 6.8 秒缩短至 3.3 秒。

## 🔧 科技产品与行业

**Claude Code 新增动态工作流与 CLI 工具**
Anthropic 为 Claude Code 新增动态工作流功能，模型可在运行时即兴创建多智能体框架处理复杂任务，适用于研究、安全分析、代码审查等场景。同时推出 Claude Platform CLI（ant CLI），使每个 API 端点可从终端直接调用，支持将结果管道传输至 Shell。

**OpenAI Codex 发布 Python SDK**
OpenAI Codex 正式推出 Python SDK（`pip install openai-codex`），开发者可将代码分析和生成功能直接嵌入自有应用，并可复用 Codex 登录态。同天还发布了 Codex Sites 功能及团队专属插件。

**Google DeepMind 开源科学智能体工具包**
DeepMind 开源 Science Skills 工具包，旨在加速用于科学发现的自主智能体构建，以科学基础和更高 token 效率支持智能体工作流开发。此外还发布了 Gemini 多智能体科研系统。

**GitHub Copilot 应用定位为"智能体原生桌面体验"**
微软 Build 大会上，GitHub 宣布 Copilot 应用升级，定位为智能体原生桌面体验，让 AI 智能体以用户熟悉的方式工作。Replit 同步宣布与微软合作，支持将工具直接发布到 Microsoft Fabric。

**Runway Aleph 2.0 视频编辑 API 上线**
Runway 通过 API 推出 Aleph 2.0，支持多镜头序列中编辑最长 30 秒、1080p 视频，仅修改用户指定的部分，实现精准视频编辑。

**微软发布开源评估框架**
微软开源发布 Adaptive Spec-driven Scoring 框架，开发者可通过文本描述快速生成 AI 行为测试，用于模型评估与回归测试。

## 🏭 行业要闻

**Anthropic 秘密提交 IPO 申请，冲击 AI 史上最大 IPO**
成立仅 5 年的 Anthropic 已秘密向 SEC 提交 IPO 申请，估值逼近万亿美元。就在交表前夕，公司刚完成 650 亿美元 H 轮融资，半年内年化收入运转率从 90 亿美元飙升至 470 亿美元。Anthropic 在上市竞赛中领先于竞争对手 OpenAI 和 SpaceX。

**Alphabet 拟融资 800 亿美元扩建 AI 基础设施**
Google 母公司 Alphabet 宣布拟通过股权融资 800 亿美元，用于扩展 AI 基础设施。这一规模在科技行业极为罕见，反映出 AI 领域对算力和数据中心资源的巨大需求。

**特朗普签署 AI 行政令：要求发布前 30 天向政府申报**
美国总统特朗普签署 AI 行政令，要求 AI 公司在公开发布强大模型前 30 天向政府提供相关模型信息。该版本是 5 月 21 日搁置版本的精简版，Anthropic 已公开表示支持。

**ChatGPT 月活突破 10 亿，史上最快**
Sensor Tower 数据显示，OpenAI 旗下 ChatGPT 月活跃用户已突破 10 亿，成为史上增长最快的应用。OpenAI 同时呼吁通过全球领导力推进青年 AI 安全与机遇。

**SK 海力士计划五年内晶圆产能翻倍**
SK 海力士会长崔泰源宣布，计划未来五年将整体晶圆产能提高一倍，以应对 AI 普及带来的持续存储供应短缺。目前 SK 海力士市值已首次突破 1 万亿美元。

**DeepSeek 首轮融资 500 亿元，腾讯宁德时代参投**
消息称 DeepSeek 首轮融资拟筹集 500 亿元，腾讯、宁德时代等参投，标志着中国 AI 模型公司的资本热度持续升温。

**Anthropic 扩展 Project Glasswing 网络安全计划**
Anthropic 将 Project Glasswing 扩展至约 150 个新组织，覆盖电力、水务、医疗、通信等关键基础设施行业。项目利用 Claude Mythos Preview 等前沿模型扫描漏洞并协助修复。

## 📊 经济与科技政策

**美国 AI 行政令落地**
特朗普签署的 AI 行政令要求对强大模型进行上市前安全评估，标志着美国联邦层面 AI 监管取得实质性进展。Anthropic 表态支持，认为这是加强美国 AI 领导地位的重要一步。

**全球 AI 立法进入深水区**
2026 年被视为 AI 监管元年。欧盟 AI 法案全面生效，中国《人工智能法》正式实施，美国各州 AI 立法加速。全球 AI 治理格局正在成型，各国在创新激励与风险控制间寻求平衡。

**HPE 年度销售预期超市场预估**
HPE（慧与科技）因 AI 基础设施需求旺盛，年度销售预期超出市场预估，反映出企业级 AI 基础设施建设持续加速。

## 📝 今日看点

今日科技圈被三件大事主导：**微软 Build 2026** 推出首款自研推理模型 MAI-Thinking-1，标志着微软正式建立独立 AI 模型体系；**Anthropic 秘密提交 IPO**，5 年估值逼近万亿美元，成为 AI 商业化里程碑事件；**特朗普签署 AI 行政令**，美国联邦 AI 监管迈出实质一步。三件事共同指向一个趋势：AI 正从技术竞赛全面转向商业化、基础设施化和监管规范化的新阶段。
