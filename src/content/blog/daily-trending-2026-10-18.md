---
title: "今日开源热点与福利 | 2026-10-18"
description: GitHub Trending 热门项目、V2EX/Linux.do 社区热议话题、今日福利羊毛汇总。
date: 2026-10-18T10:00:00+08:00
categories:
  - 开源
tags:
  - GitHub
  - V2EX
  - Linux.do
  - 福利
  - 每日
cover: https://maoyo42.github.io/blog/img/cover/1.webp
---

今天的榜单几乎被 "Agent 基础设施" 占满：Claude Code 插件目录、Agent 记忆层、Agent 编排台、给 Agent 用的科学技能库。另一条主线是"把软件改造成 Agent 原生"。福利侧则是一个明确的时间窗——Bolt 的 GLM 5.3 Flash 周末免费正好覆盖今天。

### 🚀 GitHub 热门项目

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** · JavaScript · ⭐ 282,548
  Agent harness 的性能优化系统，涵盖技能、直觉、记忆、安全与"研究优先"开发流程，兼容 Claude Code、Codex、Opencode、Cursor。
- **[anthropics/claude-code](https://github.com/anthropics/claude-code)** · TypeScript · ⭐ 151,784
  终端里的 agentic 编程工具，能读懂代码库、执行常规任务、解释复杂代码并处理 git 工作流。
- **[stablyai/orca](https://github.com/stablyai/orca)** · TypeScript · ⭐ 95,459
  面向"Agent 舰队"的工作台，用你自己的订阅同时跑多个编码 Agent，桌面端、移动端与远程运行时齐备。
- **[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)** · Python · ⭐ 73,457
  完全本地化的 ElevenLabs 替代品：声音克隆、音色设计、视频配音、听写转写与有声书制作，支持 646 种语言。
- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** · Python · ⭐ 54,084
  "让所有软件都变成 Agent 原生"——把普通 CLI 工具包装成 Agent 可调用的能力，附带 CLI-Hub 生态。
- **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)** · Python · ⭐ 52,277
  科研向 Agent 技能库，177 个经验证的技能 + 100 多个科学数据库，覆盖生物、化学、医学与药物发现。
- **[MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search)** · Python · ⭐ 50,486
  跑在本地机器上的求职框架：评估岗位、改简历、写求职信、准备面试，全部基于 Claude Code 构建。
- **[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)** · Python · ⭐ 41,813
  Anthropic 官方维护的 Claude Code 高质量插件目录，适合作为插件选型的第一站。
- **[akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory)** · Rust · ⭐ 9,940
  给编码类 CLI Agent 做长期记忆，并支持在不同厂商的 Agent 之间做上下文交接。

> 观察：榜单前十里八个与"Agent 怎么长期干活"有关——记忆、编排、技能、插件、终端入口。Rust 写的记忆层能挤进榜，说明"上下文可迁移"正在成为硬需求。

### 💬 社区热议

**V2EX 热门 / Linux.do 热门**：今日两个站点的公开 API 均未正常响应（直连与代理重试都失败），本期社区板块暂缺数据。可按需自行访问 [v2ex.com](https://www.v2ex.com/) 与 [linux.do](https://linux.do/) 查看实时热帖。

### 🎁 今日福利羊毛

**⏰ 今天就是窗口期，优先领这两个**

1. **Bolt 周末免费 GLM 5.3 Flash** — 有效期 10.17 15:00 至 **10.19 14:59**（上海时间）。Builders Week 活动，免费号与付费号都能用，无需兑换码，直接在模型列表里选 GLM 5.3 Flash。额度按 6 小时一块发放，从打开 Bolt 起计时，未用完不累积；付费号每块是免费号的 5 倍。这两天仅此一个模型免费，其他照常扣费。
2. **WorkBuddy 补偿 500 积分** — 因 DeepSeek 模型服务异常补发，不用蹲点、不用邀请码，自己到「成长计划 → 套餐与积分」页点「立即领取」，**10 月 22 日前**有效，逾期作废。

**♾️ 长期或截止未公布**

3. **DeepSeek V4.1-Flash-1017 上线** — 网页端、App、API 全量切换，模型名仍是 `deepseek-flash`。两个口子：首次登录 DeepSeek Harness 领 6 元赠金（7 天有效、限量）；经 Harness / Claude Code / Codex 服务端调用的 Search、Fetch 接口免费到 **11 月 1 日** 00:00。权重同步在 HuggingFace 与 ModelScope 以 MIT 许可开源。
4. **AMD Radeon Cloud 中国区免费 API** — 8 个对话模型（DeepSeek V4.1 Flash、Qwen3.8-Flash-Next、GLM-5.3-Flash、MiMo-V2.6-Flash 等）加 OCR、语音、决策端点，OpenAI 兼容、不绑卡、不消耗 GPU 积分。边界明确：仅限评测/原型/学习，禁生产与转售，请求日志保留约 2 天。
5. **OpenCode Zen 免费档** — 一批 `free` 模型输入输出全 0，含 DeepSeek V4.1 Flash Free（1M 上下文、原生多模态、网关侧零留存）、GLM 5.3 Flash Free、LongCat 2.5 Preview Free 等。注意部分免费模型会用你的数据改进训练，别传隐私。
6. **华为云 210 元无门槛券** — 报名「2026 华为开发者大赛·小红书 Skill 创新赛」并实名认证，在码道 CodeArts / 果办 OfficeAce 装 HuaweiCloud Devkit 插件，AI 对话框发两条口令即领 10 元 + 200 元券。无需提交作品，大赛报名与提交截止 11/13。

**⚠️ 排雷与提醒**

- **AutoClaw 今天领不到**：上一期已于 10/16 24:00 收口，10/17–10/18 是空档；下一期 10/19–10/25，首日 3000 万 Token、之后每天 500 万，整期合计 6000 万（约为上一期的 45%），当天清零。
- **腾讯元器 11 月 9 日停服**：10/29 起停止创建新智能体，把它当长期免费额度的攻略已全部作废，尽早导出迁移。
- **豆包工作 30 天订阅**：首轮自 10/17 起陆续到期，可再续一轮，两轮合计最多 60 天。
- **MiniMax Code 免费试用**已延长至 11/7；国庆签到双倍积分已于 10/7 结束。
- 免费额度的规则与截止时间说变就变，领取前以官方页面与客户端实际显示为准；只走官方入口，别碰"代领/内部渠道"。

### 📝 一句话总结

今天开源界的主题是"给 Agent 装上记忆和手脚"，福利界的主题是"周末限时"——Bolt 的 GLM 5.3 Flash 今晚仍在免费窗口内，WorkBuddy 那 500 积分记得在 10/22 前手动点掉。
