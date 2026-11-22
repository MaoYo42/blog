---
title: "今日开源热点与福利 | 2026-11-22"
description: GitHub Trending 热门项目、V2EX 社区热议话题、今日福利羊毛汇总。
date: 2026-11-22T07:00:00+08:00
categories:
  - 开源
tags:
  - GitHub
  - V2EX
  - Linux.do
  - 福利
  - 每日
cover: https://maoyo42.github.io/blog/img/cover/12.webp
---

今天榜单的主线是**「让别的软件也能被 Agent 用」**：榜首把任意 CLI 包装成 Agent 原生接口，第二梯队是技能包与评测技能，模型本体只有一个"两小时训 64M"的教学项目。换句话说，社区这周在铺管道，不在造发动机。以下数据取自 GitHub Trending 当日页面（只用页面显示的「今日新增」，总星数为客户端渲染、HTML 中取不到，故不混用）与 V2EX 热门话题接口。

### 🚀 GitHub 热门项目

1. **HKUDS/CLI-Anything**（Python，今日 +769）
   港大数据智能实验室的项目，一句话说明是「让所有软件变成 Agent 原生」（CLI-Hub：clianything.cc）。思路是把现成命令行工具统一封装成 Agent 可调用的接口层——不是重写软件，而是给旧软件加一层 Agent 能用的话。读榜时它排第一，恰好点出了当下的瓶颈：模型不缺，缺的是可被可靠调用的动作面。

2. **XiaoYouChR/Ghost-Downloader-3**（Python，今日 +779）
   自称「你唯一需要的下载器」的集大成型项目。这类工具长期有需求，说明多协议、多来源、断点续传这些"脏活"仍然没有一站式答案。

3. **zhouxiaoka/autoclip**（Python，今日 +683）
   开源 AI 视频剪辑桌面工具：给一个链接，把播客、访谈、课程等长视频自动切成短视频，同时生成字幕、封面与发布文案，适配抖音、小红书、TikTok、Reels、YouTube Shorts。它的价值不在"会剪"，而在一次产出多平台所需的全部素材。

4. **mvanhorn/last30days-skill**（Python，今日 +560）
   一个 Agent 技能：跨 Reddit、X、YouTube、Hacker News、Polymarket 与普通网页抓取某个话题最近 30 天的信息，再合成结论。这是"调研型技能"的标准形态——输入一个词，输出带来源的近期图景。

5. **jingyaogong/minimind**（Python，今日 +488）
   「两小时从 0 训出你的 64M 大模型」。教学向但完整：从数据到训练到推理的闭环。对想弄明白 LLM 到底怎么长出来的人，比读十篇综述管用。

6. **Tracer-Cloud/opensre**（Python，今日 +450）
   面向 CI／CD 可靠性的开源 Agent。运维场景是 Agent 落地最不容易翻车的地方：失败有客观信号、动作可回滚、收益能量化。

7. **google-labs-code/stitch-skills**（TypeScript，今日 +326）
   Google Labs 的 Agent Skills 库，配合 Stitch MCP server 使用，遵循 Agent Skills 开放规范。大厂开始把"技能"当交付物，而不是把"提示词"当交付物。

8. **cursor/plugins**（TypeScript，今日 +260）
   Cursor 的插件规范与官方插件集。编辑器侧也在标准化扩展面。

9. **firecrawl/firecrawl**（TypeScript，今日 +1,006）
   给 Agent 用的知识基础设施：搜索、抓取、接入 550+ 数据源。今日增量在榜内居首，与第 1 名同向——都在解决"Agent 拿不到、拿不稳外部信息"。

10. **openvinotoolkit/openvino**（C++，今日 +200）／**nginx/nginx**（C，今日 +189）
    两个老牌基础设施项目同日上榜。周期性回到榜内，通常意味着端侧推理部署与流量网关这两件事又被重新捡起来了。

**读榜结论**：前五里有三席在造"Agent 的接入层与技能包"，没有一个是新模型。这已是连续多期同构——增量在接口与工程，不在参数。

### 💬 社区热议

**V2EX 热门**（`/api/topics/hot.json` 经代理取得 10 条）：

- Google 黑五 1 年 100 刀的活动，和 APP 上 15 刀 3 个月的活动能叠加吗？
- 为什么没有 AI 攻克医学难题的消息？是因为跨学科吗？
- 今年以来大家盈亏多少？
- 分享一下我订阅 gemini 黑五优惠的流程
- Apple Watch：戴了 8 年，我的使用测评
- 过了 30，配好了电脑，感觉电子阳痿了
- Gemini 4 neon high，实测高强度使用量消耗，Cli 模式［时间：2026.11.21］
- 重度使用 neon 后，我宣布中国人可以不用考虑开 claude 订阅了
- 体验多天，发现国行苹果 ai 一点都不好用！
- ［分享创造］磁带猫：把 NAS／WebDAV 上的影音整理成私人媒体库，送 20 个兑换码

把四条 AI 订阅相关的话题连起来看，会发现同一个结构：**能力在涨、额度在收紧、价格在打架**。有人算 Google 黑五能不能叠加、有人实测 Gemini 高强度的消耗、有人干脆宣布不再需要别家订阅、有人吐槽国行苹果 AI。订阅制疲劳已经从前两年的"要不要买"变成"买哪家更亏得少"。

**Linux.do 热门**：本期 `/latest.json` 返回 Cloudflare 人机校验页（Just a moment...），未取得数据，故不臆测填充。

### 🎁 今日福利羊毛

- **Epic 本周免费游戏：《Mark of the Deep》**（原价 ¥55，现 0 元）。领取窗口 2026-11-19 16:00Z 至 2026-11-26 16:00Z，即北京时间 11 月 27 日 00:00 截止。数据取自 Epic 官方 freeGamesPromotions 接口（zh-CN／CN）实测，不是二手汇总。
- **顺手澄清一条**：同一接口里《TerraScape》是 ¥53 → ¥37.1 的七折（11-21 至 12-21），《LISA: Definitive Edition》《纪念碑谷》《幽灵行者 2》均非免费，别按往期页面惯性当成免单。
- **开发者侧的折扣**：OpenCode 上 GLM 5.3 与 DeepSeek V4.1 Flash 六折；Qwen4 Max 在 Together AI 上线（1M 上下文），截至 11-22 打七折。对天天跑 agent 的人，这类"推理折扣"比领游戏更实在。
- **社区赠送**：V2EX 帖「磁带猫」送 20 个兑换码——把 NAS／WebDAV 上的影音整理成私人媒体库。兑换码先到先得，自建媒体库的人可以蹲一下。
- **低价订阅仅作线索**：V2EX 今日两条 Gemini 黑五渠道帖（Google 官方的 1 年 $100 与 App 内 $15／3 个月能否叠加、以及个人订阅流程）。第三方渠道的稳定性与合规性无法保证，不建议把重要工作流押在上面。

### 📝 一句话总结

今天开源社区做的是"插座和转接头"：让 Agent 能调用一切、能查清一切、能被评测；福利侧最确定的一条是 Epic 那款《Mark of the Deep》，其余都是折扣——别把七折当免单。

---

数据源：GitHub Trending 当日 HTML（经代理 127.0.0.1:7890 抓取，只用「stars today」，总星数为客户端渲染不取）、V2EX `/api/topics/hot.json`（10 条）、Epic 官方 `freeGamesPromotions`（zh-CN／CN，实测价格与窗口）、AIHOT 公开接口 `aihot.news/api/v1`（折扣与产品条目）。Linux.do `/latest.json` 本期返 Cloudflare 校验页，缺数据未臆测。本期为人工按既有管线规程补发（2026-11-22 早 07:00 例行前的当日稿），未走 `ds-search.sh` 兜底。
