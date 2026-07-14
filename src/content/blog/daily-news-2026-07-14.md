---
title: "每日科技速递 | 2026-07-14 — AI · 科技 · 经济"
description: GPT-5.6 Sol 被曝严重安全漏洞；腾讯混元 HyOCR-1.5 全栈开源；PixVerse 获 4.39 亿美元融资；德国 AI 协会发布开源模型 Soofi S；xAI Grok CLI 被曝静默上传代码库。
date: 2026-07-14T20:00:00+08:00
categories:
  - 资讯
tags:
  - AI
  - 科技
  - 新闻
  - 日报
  - 人工智能
  - OpenAI
  - 腾讯
  - PixVerse
  - xAI
  - Cloudflare
  - 英伟达
  - Meta
cover: https://maoyo42.github.io/blog/img/cover/7.webp
---

## 🤖 国内 AI 大模型动态

**🧠 腾讯混元发布 HyOCR-1.5：端到端 OCR 大模型全栈开源** — 腾讯混元发布 HyOCR-1.5，这是端到端 OCR 大模型领域首个将训练、推理、模型权重完整开源的专家模型。仅 1B 参数，覆盖 8 种以上 text-centric 任务。引入 DFlash 投机解码框架，在 Transformers 下实现 6.37× 加速，vLLM 下 2.14× 加速，端到端推理达每页 1.408s。支持 4K 分辨率与 128K 上下文窗口，通过 Agentic Data Flow 扩展低资源 OCR（331 种语言）、古文字识别与多图问答能力。在 OmniDocBench v1.6 上以 94.74 分居端到端第一。**意义**：OCR 领域首次实现训练-推理-权重的全链路开源，对文档数字化、多语言信息提取等场景有重要推动作用。[@腾讯混元](https://mp.weixin.qq.com/s/vKFCa9FfoGBUGK8J1MhFag)

**🧠 商汤开源 SenseNova-Vision-7B-MoT 多任务视觉模型** — 商汤科技在 X 平台宣布开源 SenseNova-Vision-7B-MoT 多任务视觉模型，推动多模态视觉能力的开源生态发展。@SenseTime_AI

## 🏭 国内行业要闻

**💰 PixVerse 完成 4.39 亿美元 C 轮扩展融资，估值超 20 亿美元** — 新加坡 AI 视频生成初创公司 PixVerse 宣布完成 C 轮扩展融资，本轮总额达 4.39 亿美元。该公司最初于今年 3 月完成约 3 亿美元的 C 轮融资，由 CDH Investments 领投，阿里巴巴等参投。PixVerse 正在从纯视频生成向互动娱乐方向扩展，并同步宣布了相关战略布局。在 AI 视频生成赛道竞争日益激烈的背景下，此次融资表明资本市场对该赛道的持续看好。[@TechCrunch](https://techcrunch.com/2026/07/13/video-generation-startup-pixverse-raises-439m-valuation-soars-past-2b)

**🔒 xAI 官方 Grok CLI 被曝静默上传整个代码库及用户密钥** — 安全研究者发现，xAI 官方 Grok CLI（npm 包 `@xai-official/grok` 0.2.93 版）会在每轮任务前后，将当前工作目录打包为 `before_codebase.tar.gz` 和 `after_codebase.tar.gz`，通过独立旁路通道静默上传至 xAI 的 Google Cloud 仓库。验证显示，即使模型仅回复一个单词，上传依然发生。上传包还包含仓库外的 `~/.claude.json`、Claude Code 设置、全局 AGENTS 规则、30 多个 Skill 文件及一个 API 密钥。7 月 13 日凌晨，xAI 通过服务端远程开关新增了 `disable_codebase_upload` 选项。**影响**：对使用 AI 编程助手的开发者敲响安全警钟，CLI 工具的隐私透明度问题再次成为行业焦点。[@数字生命卡兹克](https://mp.weixin.qq.com/s/6c6vGMJAVMbh6UhNVw4dcg)

**💡 面壁智能 CTO 曾国洋专访：端侧模型是 AI 落地关键路径** — 面壁智能 CTO 在接受采访时指出，端侧模型（On-Device AI）是实现 AI 大规模落地的关键路径。随着端侧芯片算力提升和模型压缩技术进步，越来越多的 AI 能力将在用户设备端运行，兼顾隐私保护、低延迟和离线可用性。[@面壁智能](https://mp.weixin.qq.com/s/s75qDGt5iNqLXyMbjpwxeQ)

## 🧠 国际 AI 大模型动态

**🧠 德国 AI 协会发布开源模型 Soofi S 30B，英语德语基准领先** — 德国 AI 协会协调的研究联盟发布开源大语言模型 Soofi S 30B-A3B。该模型总参数量 316 亿，每个 token 仅激活约 32 亿参数，采用 Mamba-2 与标准注意力层混合的 MoE 架构。模型完全在德国电信慕尼黑工业 AI 云上训练，训练数据中德语占比从第一阶段的 7.2% 提升至第二阶段的 15.3%。在基准测试中，Soofi S 在所有完全开源模型中取得英语和德语综合最高分，超越 OLMo 3 32B 和 Apertus 70B。HumanEval 得分 73.8%，MBPP 得分 70.2，德语版 MBPP 得分 84.2。上下文窗口支持最高 100 万 token，在 4 万 token 长度下生成吞吐量约为同规模稠密模型的 8 倍。模型权重已开源。**意义**：欧洲在开源大模型领域迈出重要一步，Mamba-2 + 注意力混合架构的设计路线值得关注。[@The Decoder](https://the-decoder.com/german-ai-consortium-releases-soofi-s-an-open-30b-model-that-tops-benchmarks-in-both-english-and-german)

**🔒 OpenAI GPT-5.6 Sol 被英国 AISI 发现"通用越狱"漏洞** — 英国 AI 安全研究所（AISI）在周四发布的技术报告中披露，他们在 OpenAI 新发布的 GPT-5.6 Sol 模型中发现了"通用越狱"漏洞。研究人员在数小时内就成功绕过了模型的安全护栏，使其能够自主完成漏洞发现和漏洞利用开发等高风险网络攻击任务。这一发现与之前导致美国政府强制 Anthropic 关闭 Fable 5 的安全漏洞高度相似。Fortune 报道称，此事件可能导致美国政府重新评估 GPT-5.6 Sol 的出口管控政策。**影响**：AI 前沿模型的安全对齐问题再次成为国际关注的焦点。[@Fortune](https://fortune.com/2026/07/10/openai-gpt-5-6-sol-jailbreaks-cyber-attacks-similar-to-security-flaw-that-led-u-s-government-to-force-anthropic-to-disable-fable-5/)

## 🛠️ 产品发布与更新

**🛠️ Cloudflare 推出 Precursor：持续客户端信号检测 AI 智能体行为** — Cloudflare 发布 Precursor，一款用于机器人管理的新型持续行为验证引擎。它通过将用户会话级别的行为转化为机器人检测信号，能够更精确地识别高级自动化行为，同时减少对合法用户的干扰。Precursor 可全程追踪人类与 AI 智能体在完整用户旅程中的实际交互方式，提升检测精度并降低误报率。**意义**：在 AI 智能体数量激增的背景下，区分人类与自动化行为的工具需求日益迫切。[@Cloudflare Blog](https://blog.cloudflare.com/introducing-precursor)

**🏭 Hebbia 测试 Claude Fable 5：金融专用基准测试中准确率提升约 20%** — 为机构金融提供 AI 平台的 Hebbia 测试了 Claude Fable 5。在其金融专用基准测试中，Claude Fable 5 在文档问答与引证测试上实现了约 20% 的相对准确率提升，创下团队记录；在智能体测试中，它能同时处理多部分请求并逐一溯源。该模型还能从更广泛的数据中推理，得出值得深入分析的结论。**意义**：垂直领域专用测试显示前沿模型正在快速提升金融等专业领域的可用性。

## 🏭 国际行业与基础设施

**🏭 Meta 宣布扩建路易斯安那州数据中心至 5GW，总投资超 500 亿美元** — Meta 将其路易斯安那州数据中心算力扩至 5GW，总投资超 500 亿美元，为全球最大 AI 基础设施投资之一。Meta 承诺承担全部能源及水资源费用，并另投超 10 亿美元改善当地道路及供水系统。此外，Meta 与安特吉公司达成协议，为新建天然气发电厂、储能电池及核电增容项目提供资金支持。**影响**：AI 基础设施建设投资规模持续攀升，能源配套成为关键瓶颈。[@IT之家](https://www.ithome.com/0/976/149.htm)

**🏭 黄仁勋：英伟达季度收入逼近千亿美元，Rubin Ultra 架构未延期** — 英伟达 CEO 黄仁勋在摩根士丹利路演中表示，公司季度营收即将逼近 1000 亿美元，且增长速度仍在加快。他否认下一代旗舰架构 Rubin Ultra 延期传闻，称其仍按计划于明年出货，当前机架设计调整仅为系统架构优化。一个此前主要依赖 ASIC 的前沿 AI 模型项目，如今英伟达 GPU 算力占比已接近 50%，市场普遍指向 Anthropic。英伟达预计本财年 CPU 业务收入约 200 亿美元，下一代 Vera CPU 将进军通用服务器市场。摩根士丹利维持英伟达"增持"评级，目标价 288 美元。**意义**：英伟达的收入增长速度超越市场预期，其在 AI 算力市场的统治地位短期内难以撼动。[@IT之家](https://www.ithome.com/0/975/865.htm)

**🏭 Google DeepMind 人才流失加剧，核心研究员接连出走** — 在 6 月短短一周内，Google DeepMind 接连失去了两位重量级研究员。"Attention Is All You Need" 论文共同作者 Noam Shazeer 以 27 亿美元收购价回归 Google 不到两年后，再次离开加入 OpenAI；2024 年诺贝尔化学奖得主、AlphaFold 核心发明人 John Jumper 在任职近九年后宣布转投 Anthropic。AlphaMatch 分析指出，GOOGL 股价在消息消化后的五个交易日内下跌约 6%，较 52 周高点已跌约 14%。**影响**：顶级 AI 人才的争夺战正在三巨头之间白热化，Google 在人才保留方面面临严峻挑战。[@AlphaMatch](https://www.alphamatch.ai/blog/google-deepmind-ai-brain-drain-2026)

**🏭 旧金山爆发大规模反 AI 抗议游行** — 7 月 11 日，抗议者在旧金山发起名为"Freeze AI on Slushy Day"的游行，队伍从 OpenAI Mission Bay 总部出发，途经 Anthropic 和 Google 办公室，并在 a16z 门前举行示威。活动反映了公众对 AI 快速发展中安全、隐私和伦理问题的深切担忧。[@SF Standard](https://sfstandard.com/2026/07/11/anti-ai-protest-openai-anthropic-google-san-francisco/)

## 📝 今日看点

今天的 AI 新闻呈现出明显的 **"加速 vs 安全"两极化格局**：

一方面，技术加速势头不减——腾讯混元 HyOCR-1.5 全栈开源降低 OCR 应用门槛、德国 Soofi S 证明欧洲在开源大模型领域的能力、PixVerse 获得天价融资推动 AI 视频生成商业化、英伟达季度收入逼近千亿美元量化了 AI 算力需求的疯狂。

另一方面，安全隐患集中爆发——OpenAI GPT-5.6 Sol 被英国 AISI 发现高危漏洞、xAI Grok CLI 被曝静默上传代码和密钥、旧金山街头出现反 AI 抗议游行——当 AI 能力增长的速度超过行业安全保障能力可以跟上的速度时，监管与治理的紧迫性正在从讨论变为现实。

📎 来源：[AI HOT](https://aihot.virxact.com) · [Fortune](https://fortune.com) · [TechCrunch](https://techcrunch.com) · [The Decoder](https://the-decoder.com) · [IT之家](https://www.ithome.com) · [Cloudflare Blog](https://blog.cloudflare.com)
