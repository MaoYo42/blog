---
title: "每日科技速递 | 2026-06-22 — AI · 科技 · 经济"
description: 今日 AI 与大模型动态（Fable 5 禁令第 10 天 / Anthropic 韩国扩张 / OpenAI RL 对齐 / NVIDIA SpatialClaw / 阿里 Zvec 开源）、科技行业新闻（美团 tabbit 免费旗舰模型 / 三星部署 ChatGPT Enterprise / Figure 机器人首超人类员工）、经济政策要闻（FERC 电网历史性命令 / 八部门 AI+消费 政策 / L3/L4 自动驾驶国标公示）。
date: 2026-06-22T20:00:00+08:00
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

- **Fable 5 禁令进入第 10 天，Anthropic 韩国办公室开幕** — Anthropic 的旗舰模型 Fable 5 因出口管制禁令在全球范围内被下架已进入第 10 天。API 仍返回错误，退款截止日（6 月 20 日）已过，免费试用窗口于 6 月 22 日关闭。与此同时，Anthropic 首尔办公室开幕，与韩国科学信息通信部签署 AI 安全合作 MOU，并收获 NAVER、Nexon、三星 SDS、LG CNS 等多家韩国企业大规模部署 Claude 的订单。Claude Code 在韩国的周活用户 4 个月内增长 6 倍。

- **AlphaFold 负责人 John Jumper 离开 Google DeepMind 加入 Anthropic** — 在 Google DeepMind 工作近 9 年后，AlphaFold 团队负责人 John Jumper 宣布离职并将加入 Anthropic。DeepMind CEO Demis Hassabis 表示过去 9 年与 Jumper 的合作"改变了世界"。

- **OpenAI 通过强化学习实现广泛且持久的模型对齐** — OpenAI 在真实对话场景中通过 RL 训练模型，使其展现诚实、认知谦逊、元认知透明、可纠正性等有益特质。训练后模型在数十项独立对齐评测上均表现提升，且难以通过对抗性提示或微调被导向有害行为。

- **NVIDIA Research 发布 SpatialClaw：免训练空间推理框架** — 该框架通过代码作为动作接口，让智能体调用感知工具（Depth Anything 3、SAM 3）自由组合输出。在 20 项基准测试中平均准确率达 59.9%，比近期智能体 SpaceTools 高 11.2 个百分点。

- **阿里开源向量数据库 Zvec** — 阿里将内部向量数据库 Zvec 开源，支持 pip install zvec 免费使用，对标 Pinecone 每月 70 美元的能力。支持十亿向量毫秒级检索，v0.5.0 新增原生全文混合搜索。

- **Grok 4.3 登陆 Amazon Bedrock** — xAI 的 Grok 4.3 在 Amazon Bedrock 上架，定价 $1.25/$2.50 每百万输入/输出 token，支持 100 万上下文窗口和可配置推理深度。

- **DeepSeek 研究员开源 AutoResearch** — DeepSeek 研究员将 AutoResearch 协议开源，其 AI 智能体首次完全自主地在 DeepSeek 285B 模型上完成完整 RL 研究闭环，全程零人工干预。

- **6 月成史上最集中的 AI 模型发布月** — 在约 30 天内，Anthropic Fable 5、Gemini 3.5 Flash & Pro、Grok 4.3、DeepSeek V4 preview、GPT-5.6 泄露传闻等多款前沿模型集中登场。

## 🔧 科技产品与行业

- **美团 tabbit 国际版免费接入 GPT-5.5 / Claude Opus 4.8 等旗舰模型** — 美团上线 tabbit 国际版应用，免费集成 GPT-5.5、Claude Opus 4.8、Gemini 3.5 Flash 及国内 Kimi-2.6、GLM-5.1、MiniMax-M3 等多款顶级模型，目前处于免费推广阶段。

- **三星电子向全球员工部署 ChatGPT Enterprise 和 Codex** — 三星电子为全球员工推出 ChatGPT Enterprise 和 Codex，这是 OpenAI 目前规模最大的企业级 AI 部署之一，显示大企业多模型策略趋势。

- **Figure 机器人数量首超人类员工** — Figure 创始人宣布公司机器人数量首次超过人类员工，标志着具身智能商业化的重要里程碑。

- **AI 员工 Viktor 登陆 Microsoft Teams** — AI 员工 Viktor 在 Slack 上实现 2000 万美元年化收入（无销售团队），现已正式进驻 Microsoft Teams，面向 Teams 的 3.2 亿用户。

- **微软成为全球最大 AI 模型中间商** — 彭博社报道，微软既将 ChatGPT 卖给中国企业，也反向将 DeepSeek 模型卖给西方客户。微软正在测试 DeepSeek-R1 和 DeepSeek-V4。

- **Cloudflare 为 AI 智能体推出临时账户** — Cloudflare 在 Workers 上推出临时账户功能，允许 AI 智能体直接运行 wrangler deploy --temporary，数秒内获取实时 Worker。

- **Coowa 计划香港 IPO** — 上海具身智能机器人公司 Coowa 估值 30 亿美元，在融资 6 亿美元后计划赴港上市。

- **OpenAI 为 ChatGPT Enterprise 推出新用量分析功能** — 全局管理控制台统一展示 ChatGPT 和 Codex 的信用消耗，支持按时间、用户、产品、模型追踪用量趋势。

## 📊 经济与科技政策

- **FERC 发布历史性电网命令：为 AI 数据中心提供快速并网通道** — 美国联邦能源监管委员会（FERC）命令六大电网运营商为数据中心提供快速并网通道。数据中心电力需求预计到 2035 年增长近三倍，部分地区批发电价较五年前上涨 267%。

- **八部门联合发文力推"人工智能 + 消费"** — 商务部等 8 部门印发《关于加快"人工智能 + 消费"发展的实施意见》，从 5 方面提出 17 条举措，扩大 AI 手机电脑、智能网联汽车、AI 机器人等供给。

- **我国首部 L3/L4 自动驾驶强制性国标公示** — 工信部就《智能网联汽车自动驾驶系统安全要求》征求意见，建议 2027 年 7 月 1 日起实施。L3 重点规范人机交接，L4 强调自身风险处置。

- **JAWBONE Act 反审查法案提出** — 参议员 Ted Cruz 和 Ron Wyden 提出两党法案，为受政府胁迫的广播商、AI 提供商创建针对政府官员的联邦诉讼权。

- **欧洲转向工业 AI** — 在消费级 AI 领域落后于中美后，欧洲工程公司和初创公司开始大规模采用工业 AI 以提升效率。

## 📝 今日看点

Fable 5 出口禁令进入第 10 天，Anthropic 一方面面临白宫极强的合规压力，另一方面在韩国市场收获空前企业订单，折射出 AI 地缘政治的复杂性。六月份已成为 AI 历史上最密集的前沿模型发布月，OpenAI 的 RL 对齐研究、NVIDIA 的空间推理框架、阿里开源向量数据库等技术进展表明行业正在能力提升、安全对齐和开源普惠三个维度同步推进。FERC 的历史性电网命令则预示着 AI 基础设施的瓶颈正在从算力芯片转向电力基础设施。