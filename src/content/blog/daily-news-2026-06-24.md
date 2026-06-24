---
title: "每日科技速递 | 2026-06-24 — AI · 科技 · 经济"
description: 字节 Seed2.1 发布、京东开源 JoyAI 交互模型、网易 Confucius4-TTS 语音克隆、Anthropic Claude Tag、Oracle 裁员 21000 人、Runway 推出三款新模型等今日要闻汇总。
date: 2026-06-24T20:00:00+08:00
categories:
  - 资讯
tags:
  - AI
  - 科技
  - 新闻
  - 日报
  - 人工智能
  - 经济
  - 字节
  - 京东
  - 网易有道
  - Anthropic
  - Oracle
  - Runway
  - 开源
cover: https://maoyo42.github.io/blog/img/cover/5.webp
---

## 🤖 AI 大模型动态

**字节 Seed2.1 正式发布，深入 AI 生产力场景** — 字节跳动旗下 Seed 团队发布 Seed2.1 系列模型，面向真实生产力场景强化通用 Agent 能力、代码工程交付与多模态理解。Seed2.1 Pro 在 GDPval 基准获最高分，Agents' Last Exam 位列参评模型第一梯队；MobileWorld 手机 GUI 任务最高分，CreativeWork 多环境任务表现突出。多模态在 CharXiv-RQ 等基准取得 SOTA。代码能力上，开发者评测相比 Claude Opus 4.6 获 59.1% 胜率。模型已在豆包、TRAE 上线，API 通过火山方舟提供。

**京东全栈开源 JoyAI-VL-Interaction 交互模型** — 京东开源全球首个全栈交互模型 JoyAI-VL-Interaction，获 vLLM-Omni 原生支持。该模型能持续观察视频流、主动判断关键事件并实时响应，支持将复杂任务委托后台 Agent 处理。在 58 个真人盲评中，对比豆包视频通话助手胜率 77.6%，对比 Gemini 视频通话助手胜率 87.9%，监控预警场景达 100% 胜率。开源内容包括模型权重、交互数据集、训练方案及完整可部署系统，适用于安防监控、老人看护、直播讲解等实时场景。

**网易有道发布 Confucius4-TTS：14 语种跨语种语音克隆开源模型** — 网易有道推出"子曰 4.0"TTS 引擎 Confucius4-TTS，声称是业内首个支持 14 种语言跨语种无口音、且无需参考文本即可完成语音克隆的开源模型。用户仅需 3 秒音频即可实现零样本音色克隆，克隆音色与原声相似度超 85%，任务准确度达 97%。模型已全量开源（Apache 协议），提供 54GB 资源包供本地部署。

**豆包音频生成模型 1.0 发布** — 火山引擎正式发布豆包音频生成模型 1.0（Doubao-Seed-Audio 1.0），支持文本与音频参考生成，端到端输出目标音频。单条 Prompt 可编排多角色对白、情绪语气、背景音乐及环境氛围，一次支持 2 分钟音频创作。已开启火山方舟 API 邀测，即将上线剪映、即梦、番茄等产品。

**FastWan-QAD：单卡 5090 上 1.8 秒生成 5 秒视频** — Sky Computing Lab 发布 FastWan-QAD 视频生成模型系列，基于 FastVideo 的量化感知蒸馏方案训练。在单张 RTX 5090 上，端到端生成 5 秒 480P 视频仅需 1.8 秒，模型及代码已开源。

**Mistral OCR 4 发布** — Mistral AI 发布 OCR 4，新增边界框、块分类（标题、表格、方程式、签名等）及逐页逐词置信度分数。支持 170 种语言，可单容器全自托管部署。在 OlmOCRBench 上得分 85.20，定价每 1000 页 $4。

**Krea 2 技术报告发布** — Krea AI 发布 Krea 2 技术报告，深入解析创建模型所用的数据、架构及训练技巧。

## 🔧 科技产品与行业

**Anthropic 推出 Claude Tag：在 Slack 中通过 @Claude 协作** — Anthropic 推出 Claude Tag，一种在 Slack 频道中通过 @Claude 委托任务的新协作方式。Claude 可记住频道上下文，支持多用户交互，经授权后可自动学习其他频道和数据源。开启"环境"行为后，能主动更新未解决的线程或任务，可自主推进项目数小时或数天。即日起面向 Claude Enterprise 和 Team 客户提供 beta 版。

**Claude Code v2.1.187 发布** — 新增 `sandbox.credentials` 设置保护凭证安全，模型选择器支持组织配置的模型限制。修复多项问题，包括远程 MCP 工具调用超时、韩文/中日韩文本粘贴乱码等。

**Runway 推出 Seedance 4K 等三款新模型** — Runway 推出 Seedance 4K、Seedance Mini 和 Kling 3.0 Turbo 三款新视频生成模型，汇聚于同一平台。全球最佳模型合集，优惠码首发可享七折。

**IBM 开源 CUGA 轻量级智能体框架** — IBM 开源 CUGA（Configurable Generalist Agent），一个轻量级智能体框架，提供二十余个单文件示例应用。内置计划-执行-反思循环，在 AppWorld 和 WebArena 基准上排名第一。支持 Fast / Balanced / Accurate 三种推理模式，可一键切换 OpenAI、watsonx、Ollama 等提供商。

**阿里千问高考志愿 AI 测评表现超人类咨询师** — 友松实验室发布国内首个高考志愿 AI 能力测评报告，千问高考志愿填报 Agent 在 44 道事实题中全对，模拟 10 个志愿中 6 个可录取，100 场匿名对比中专家 58 次倾向千问回答。使用千问辅助后，人类咨询师正确率提升，耗时减少约 27%。

**百度开源 Unlimited-OCR：单次长时域解析项目** — 百度在 GitHub 开源 Unlimited-OCR，实现单次长时域解析（One-Shot Long-Horizon Parsing），旨在一次性处理长时间跨度的 OCR 任务。

## 📊 经济与科技政策

**Oracle 因 AI 应用裁员 21000 人，债务驱动云基础设施投资** — Oracle 在截至 5 月 31 日的财年裁员 21000 人，员工总数降至 141,000 人，降幅 12.9%。公司称 AI 技术的采用导致劳动力缩减，重组成本达 18 亿美元，同比增长 481%。Oracle 计划 2026 年通过债务和股权筹集 450 至 500 亿美元，扩建 Oracle Cloud Infrastructure，服务 OpenAI、xAI、AMD、Nvidia、Meta 等客户。公司债务超 1200 亿美元。

**五眼联盟警告：AI 网络威胁数月内将影响普通用户** — 五眼联盟（美、英、加、澳、新）网络安全部门联合警告，即将到来的 AI 模型将降低编写复杂攻击代码的门槛。自动化智能体可全天候扫描互联网漏洞，AI 驱动的超个性化钓鱼诈骗已在亚太蔓延，印度 2026 年初勒索软件事件激增 165%。建议企业部署自动化防御 AI，个人用户开启多因素认证。

**GitHub 联合开源联盟呼吁修改加州 AI 透明度法案** — GitHub 联合 Black Forest Labs、Hugging Face 与 Mozilla 组成开源联盟，呼吁对加州 AI 透明度法案进行针对性修改。当前草案要求开发者在下游用户未履行义务时撤销开源许可证，与开源许可证永久不可撤销的性质冲突。联盟建议参考欧盟 AI 法案的透明度实践规范。

**OpenAI 助力 Appia Foundation 推动先进 AI 共享标准建设** — OpenAI 通过 Appia Foundation 支持制定先进 AI 的共享标准，涵盖评估框架、安全实践与全球合作。

## 📝 今日看点

今日 AI 圈迎来密集发布：字节 Seed2.1 深入 AI 生产力场景、京东全球首个全栈交互模型开源、网易 Confucius4-TTS 实现 14 语种无口音语音克隆，三家国内厂商同日发布重量级模型。行业层面，Oracle 因 AI 替代裁员 21000 人引发广泛关注，Anthropic 推出 Claude Tag 开启 Slack 协作新范式。从模型能力到行业应用，AI 进入全面生产力渗透阶段。

📎 数据来源：aihot.virxact.com
