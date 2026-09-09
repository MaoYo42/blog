---
title: "每日科技速递 | 2026-09-09 — AI · 科技 · 经济"
description: "OpenAI 智能体求解 Navier-Stokes 千禧年大奖难题引爆学术界诚信风波；GPT Image 2.5 图像模型上线；Runway 发布 Adobe 插件，Berkeley RDI 开源 CUA-Lite。"
date: 2026-09-09T14:00:00+08:00
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
  - Navier-Stokes
  - 千禧年难题
  - 图像生成
  - Agent
  - Runway
  - Meta
cover: https://maoyo42.github.io/blog/img/cover/1.webp
---

> 每日科技速递，聚焦 AI · 科技 · 经济三大板块。以下为 2026-09-09（周三）精选要闻：OpenAI 智能体声称求解 Navier-Stokes 千禧年大奖难题，随即陷入学术诚信指控漩涡；GPT Image 2.5 图像模型上线；Runway 杀入 Adobe 生态，Berkeley RDI 开源计算机使用智能体平台。

## 🇨🇳 国内 AI 新闻

今日国产大模型厂商暂无重磅发布，中文圈视线集中在两个方向：前日最高法涉 AI 意见的规则解读，以及 OpenAI 千禧年解题事件的中文媒体追踪。

📰 **中文创作者第一时间实测 GPT Image 2.5，与 image2 生图差异引热议**
OpenAI 上线图像模型 ChatGPT Images 2.5 后，中文科技媒体随即发布实测，重点对比新版与 image2 在生成速度、清晰度、多轮编辑一致性上的差异，并测试新增的区域标注精修、涂鸦绘图与图片模版功能。**为什么重要**：图像生成正进入"模型周更、评测追赶"的快节奏阶段，中文社区的实测与教程分发速度已成为产品影响力的重要一环。[来源：微信公众号](https://mp.weixin.qq.com/s?__biz=Mzg3MTk3NzYzNw%3D%3D&mid=2247510824&idx=1&sn=025a8b7c5fec54d8a00c8632f55f8d98)

## 🌍 国际 AI 新闻

🧠 **OpenAI 宣布智能体求解 Navier-Stokes 千禧年大奖难题**
OpenAI 智能体团队宣布，一组智能体使用能力显著超过 GPT-6 Astra 的下一代未发布模型，给出了悬置约 90 年的 Navier-Stokes 千禧年大奖难题（三维光滑流体运动描述是否会失效）的解，并向独立证明者致贺。同期发布的内部研究加速报告显示，其研究组织每投入 1 个人工工作日即运行 3.1 个 agent 工作日。**为什么重要**：若成立，这将是数学大奖难题首次由 AI 智能体攻克，被解读为"自动化 AI 研究员"路线（目标 2028 年 3 月）的关键里程碑。[来源：OpenAI](https://openai.com/index/navier-stokes-solution)

⚖️ **纽约大学数学家指控 OpenAI"不正当竞争"，Bubeck 否认**
OpenAI 公布解题的同时，NYU 数学教授 Tristan Buckmaster 与 Anthropic 数学家 Levent Alpöge 公布了三项针对该难题的初步证明结果，并指控其研究进展信息曾被泄露给 OpenAI——后者随后调用大量算力沿其独特路线"追赶"证明，涉嫌不正当竞争。OpenAI 研究负责人 Bubeck 否认指控，Sam Altman 亦公开回应。**影响**：千禧年难题之争迅速从数学竞赛升级为学术诚信公案，泄露指控若坐实，将重创业界对"AI 竞赛公平性"的信任。[来源：TechCrunch](https://techcrunch.com/2026/09/08/openai-fought-dirty-on-career-making-math-problem-says-nyu-mathematician) / [Buckmaster 声明](https://cims.nyu.edu/~tristanb/statement.pdf) / [Altman 回应](https://x.com/sama/status/2097385167002415140)

🎨 **OpenAI 发布 GPT Image 2.5：更快、更清、可区域精修**
OpenAI 正式上线 ChatGPT Images 2.5，主打更快生成、更高清晰度、多轮编辑一致性与区域标注精修，并新增涂鸦绘图及 15 个图片模版；API 同步推出 GPT-Image-2.5 Flare（速度提升 50%）与 GPT-Image-2.5 Sunburst（更高精度）两个档位。**影响**：文本生成进入"推理分级"后，图像生成也开始按速度/精度分层售卖，为创意工作流提供更细的成本档位。[来源：OpenAI](https://openai.com/index/introducing-chatgpt-images-2-5)

🖥️ **Berkeley RDI 开源 CUA-Lite：计算机使用智能体的标准底座**
加州大学伯克利机器人 AI 实验室（RDI）发布开源平台 CUA-Lite，为计算机使用智能体提供三个标准化抽象：环境接口覆盖 15+ 个桌面/浏览器/移动端基准，含 30k+ 可验证任务的免虚拟机桌面沙箱；统一监督数据格式已转换 10+ 个公开 CUA 数据集，每个模型一套 harness 即可在评测、SFT 与 RL 间复用，支持 14 个模型族。**为什么重要**：在 OpenAI、Anthropic 把"电脑操作"推为 Agent 主战场之际，开源侧需要一个可复现、可审计的公共底座，CUA-Lite 正是补齐这一环。[来源：Berkeley RDI](https://rdi.berkeley.edu/blog/cua-lite)

🎬 **Runway 发布 Adobe 插件：在时间线里直接生成与编辑视频**
Runway 推出 Runway Plugins，面板可直接嵌入 Premiere Pro 与 After Effects：创作者能在剪辑时间线内直接生成图像/视频、重绘片段并放置结果；Edit Studio 则基于已有片段用 Aleph 2 按原始时长重新渲染。插件免费下载（macOS/Windows），生成功能面向所有付费计划并消耗现有额度。**影响**：AI 视频工具正从"独立网页"侵入专业剪辑的原始工作流，改写的将是后期生产管线本身。[来源：Runway](https://runwayml.com/news/company-news/runway-for-adobe)

🤖 **Meta 智能体产品 Muse 开放体验**
Meta 的智能体产品 Muse 正式开放体验，官方团队在社交平台回应首批用户反馈，称其好评符合预期。**为什么重要**：继 GPT-6 Astra 全量推送后，Meta 入局消费级智能体意味着"桌面/移动端全能助手"赛道正式进入多巨头角力阶段。[来源：X](https://x.com/alexandr_wang/status/2097472059077202339)

## 📄 论文与研究

📚 **Dwarkesh Patel 研究：预训练进步主要来自数据改进**
研究者 Dwarkesh Patel 发文论证，大模型预训练的能力进步主要源自数据层面的改进（规模、质量与配比），而非单纯堆参数。**影响**：在"Scaling Law 见顶"讨论持续发酵的当下，该结论把工程注意力重新引向数据管线——合成数据、数据治理与清洗的质量竞争或成为下一轮分水岭。[来源：Dwarkesh Patel](https://www.dwarkesh.com/p/pretraining-progress-is-mostly-data)

---
📎 数据来源：aihot.virxact.com 精选聚合 · 内容基于公开报道整理，链接见各条目。
