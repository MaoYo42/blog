---
title: "每日科技速递 | 2026-09-04 — AI · 科技 · 经济"
description: "OpenAI 发布 GPT-6 Astra：首个达到关键级网络安全门槛的模型，ARC-AGI-3 得分 99.9%；英伟达 129.3 亿美元收购 Hugging Face；阿里云 Wan3.0 全面开放。"
date: 2026-09-04T14:00:00+08:00
categories:
  - 资讯
tags:
  - AI
  - 科技
  - 新闻
  - 日报
  - 人工智能
  - 大模型
  - OpenAI
  - GPT-6
  - 英伟达
  - Hugging Face
  - 阿里云
  - 智谱
cover: https://maoyo42.github.io/blog/img/cover/17.webp
---

> 每日科技速递，聚焦 AI · 科技 · 经济三大板块。以下为 2026-09-04 精选要闻：GPT-6 Astra 落地、英伟达收购 Hugging Face、阿里云 Wan3.0 全面开放。

## 🇨🇳 国内 AI 新闻

🎨 **阿里云 Wan3.0 正式全面开放，视频生成进入"生产可用"阶段**
阿里云宣布 Wan3.0 正式全面开放（Generally Available），支持 30 秒视频生成和一键文档转视频，定位生产可用而非实验特性。作为万相系列的最新升级，Wan3.0 的全面开放意味着国内视频生成赛道从"演示级抽卡"转向"企业级接入"——开发者可通过云 API 直接把长视频生成、文档转视频能力嵌入业务流。对内容生产、营销与教育行业而言，这是继文本、图像之后，国产多模态模型在视频侧兑现"开箱即用"承诺的重要一步。

🧠 **智谱 GLM Coding Plan 推出夜间免费畅用，编程订阅开打"错峰算力"战**
智谱 AI 宣布 GLM Coding Plan 推出 Flash × ZCode 夜间畅用活动：9 月 3 日至 20 日每晚 23:00 至次日 9:00，付费套餐用户自动生效，可免费畅用 GLM-5.3-Flash 的代码能力。此前智谱 GLM-5.3-Flash 刚以 AA 综合指数 57 分登顶 OpenRouter、定价仅为旗舰的 1/10。同时智谱已入驻天猫开设官方旗舰店，GLM Coding Plan 月付 118 元起可直接网购。把夜间闲置算力包装成订阅权益，是国产编程助手在价格与体验之外新增的差异化打法。

📊 **LMArena 第 35 周周榜：GLM-5.3-Flash 首秀进代码榜前十，Qwen3.8-Max 登顶前端榜**
LMArena 公布第 35 周大模型周榜：智谱 GLM-5.3-Flash 首次亮相即进入代码榜前十，通义 Qwen3.8-Max-0902 登顶前端（Frontend）榜。国产开源模型在竞技场细分榜单上的密集上榜，与 GLM-5.3-Flash 在 OpenRouter 上的高份额互相印证——头部国产模型正从"能打"走向"在真实流量与盲测中都站得住"，前端、代码等垂直维度的榜单开始被系统性占领。

## 🌍 国际 AI 新闻

🧠 **OpenAI 发布 GPT-6 Astra：首个"关键级网络安全"模型，ARC-AGI-3 拿下 99.9%**
9 月 3 日，OpenAI 发布新一代旗舰 GPT-6 Astra（API 名 gpt-6-astra），定位计算机操作模型：1.05M 上下文、128K 最大输出，OSWorld V2-Offline 得分 72.6%，真实桌面任务平均耗时从约 75 分钟降到 40 分钟，职场自动化成功率从 18% 升至 41%。基准方面，FrontierMath Tier 4 达 98%、ARC-AGI-3 达 99.9%（该基准发布仅半年即被饱和，快于 Chollet 预期一倍）、ExploitBench 满分。更关键的是，它是首个在其 Preparedness Framework 下达到**网络安全 Critical 门槛**的模型——可在无人逐步引导下发现防护严密系统的未知漏洞，因此先向 Daybreak 网络安全计划客户开放，随后数日内推送到 ChatGPT Plus/Pro 及 API。API 定价每百万输入 Token 10 美元、输出 50 美元，与 Claude Fable 5 系持平。Mark Chen 称这是迄今能力最强、对齐最好的模型；117 页系统卡显示其链式思维可控性从 16.1% 跃升至 60.9%，但 TechCrunch 等也指出 opaque recurrence（不透明循环推理）引发可监控性争议。GPT-6 Astra 的意义在于：OpenAI 首次用"能力越强、门槛越高"的方式向公众解释安全分级，计算机操作 Agent 的竞赛被推到新高度。

🏭 **英伟达以 129.3 亿美元收购 Hugging Face，黄仁勋承诺维持开放平台**
英伟达 9 月 3 日官宣，以 129.303 亿美元（约合 870.92 亿元人民币）收购开源 AI 社区 Hugging Face。HF 拥有超过 1800 万开发者，托管超 300 万个模型、50 万个数据集和 100 万个应用，服务超 20 万家企业，是开源 AI 事实上的"分发层"。黄仁勋在博客中称，开放模型能强化安全与网络安全、加速创新与扩散、支持主权 AI，并承诺英伟达将成为 HF 及其社区的好归宿、维持开放平台。这笔收购把英伟达从"卖算力"推进到"拥有开发者入口+生态"：芯片厂商接管模型分发平台，产业链话语权进一步向算力上游集中，其后续对 HF 开放治理的承诺是否兑现，将直接牵动全球开源生态。

🧠 **Google 双响：Gemini 3.8 Flash / 3.8 Flash Cyber 发布，WeatherNext 3 刷新全球天气 AI 上限**
Google DeepMind 发布 Gemini 3.8 Flash 与 3.8 Flash Cyber 两款新模型——这是六周内第三款 Flash 迭代，延续小步快跑节奏，Cyber 变体面向网络安全场景。同日 DeepMind 发布全球天气 AI 模型 WeatherNext 3，支持逐小时更新，分辨率较上一代提升约 5 倍，并已通过 Brightband 的独立实时评估。天气 AI 的军备竞赛正从"预测更准"转向"更新更快、分辨率更高"，其对极端天气预警与能源调度的实际价值是确定性场景中少见的直接落地路径。

🧠 **Meta Muse Spark 1.3 发布：五个月第四版，单日使用量登顶**
Meta 发布 Muse Spark 1.3，是五个月内第四个 Muse Spark 版本。在 Artificial Analysis Intelligence Index 中，max 变体得 62 分、xhigh 版得 61 分，逼近 Claude 与 GPT-5.6 系。Alexandr Wang 转发称 Muse Spark 单日使用量登顶，是"美国模型首次在日活上超过 DeepSeek"。高速迭代加上双轨定价（标准档输入 1.25 美元/百万 Token），Meta 正用开源+广告数据反哺的路径在模型战中抢占身位，也成为观察"开源追赶闭源"叙事的新样本。

🛠️ **IFM 开源 K2 Horizon 六款模型，0.9B 到 375B 全家族 Apache 2.0**
IFM 发布 K2 Horizon 系列共六款模型：375B-A23B、36B-A4B、32B、7B、3.7B 和 0.9B，全部以 Apache 2.0 开源，并公开完整训练生命周期。其中 0.9B/3.7B/7B 宣称在其规模上达到 SOTA，36B-A4B 采用新提出的稀疏注意力架构 MoVA。全家族开源+复现链路透明，是开源社区补上"小到可自托管、大到可研究"完整谱系的一次供给——对希望在自有硬件上部署的公司来说，又多了一个无授权成本的候选。

🛠️ **Agent 产品混战：Claude 后台操作电脑、Grok Bot 企业版、Cursor 自托管执行机**
三家公司同日加码 Agent 产品：Anthropic 宣布 Claude Cowork 与 Claude Code 支持后台操作电脑，用户把任务交给 Claude 后可同时去忙别的；xAI 发布 Grok Bot 企业版，Grok 与 Cursor Enterprise 客户两周内免费，其设计文章披露了"Bot 拥有身份、记忆、自己的计算机和工具"的持久化智能体界面；Cursor 推出 Self-Hosted Machines，让云智能体在企业自有机器上执行。桌面自动化、企业落地、本地执行三条路线同日推进，说明 Agent 竞争已从"谁更会聊天"全面转向"谁更能干活、更敢把机器交给模型"。

⚖️ **美国司法部介入《纽约时报》诉 OpenAI：主张 AI 训练属合理使用**
美国司法部 9 月 1 日向曼哈顿联邦法院提交利益声明，介入《纽约时报》诉 OpenAI 版权案，支持 OpenAI 主张大模型训练属合理使用，主要论据为国家安全与 AI 产业竞争力，称训练使用具有转换性。《纽约时报》发言人批评政府"站在 AI 公司一边牺牲创作者权益"。法官已要求双方最迟 9 月 4 日提交简易判决动议——这起案件的结果可能为 AI 训练数据的版权边界定下基调，影响范围远超两家公司。

📎 来源：aihot.virxact.com 精选 | 各新闻原始链接见上
