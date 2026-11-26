---
title: "今日开源热点与福利 | 2026-11-27"
description: GitHub Trending 热门项目、V2EX 社区热议话题、今日福利羊毛汇总（Epic 本周双免）。
date: 2026-11-27T10:00:00+08:00
categories:
  - 开源
tags:
  - GitHub
  - V2EX
  - Linux.do
  - 福利
  - 每日
cover: https://maoyo42.github.io/blog/img/cover/17.webp
---

今天榜单分成两拨：一拨继续给 Agent 备货（抓取层、技能包、CI/CD 可靠性），另一拨是「把长内容重新切成短内容」的老需求。榜首 firecrawl 与 Ghost-Downloader-3 的日增都还在四位数附近，说明工具链热度没有随模型新闻冷却。

数据说明：GitHub 只用页面显示的「今日新增 star」（总星数为客户端渲染，HTML 取不到，故不混用总星）；V2EX 走旧版热门接口经代理取到 10 条；Linux.do `/latest.json` 直连与代理两次均超时，本日缺数据、不臆测。

## 🚀 GitHub 热门项目

按今日新增 star 排序（已剔除 5 个 sponsors 赞助位：elementalsouls +1,600／cathrynlavery +951／obra +853／mjmirza +561／toeverything +521，不计入排名）：

1. **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** · TypeScript · +1,042
   单个 API 打通 550+ 数据源的搜索、抓取与结构化。连续多期在榜，Agent 的「外部知识进料口」，本期唯一四位数增长的重基建。

2. **[XiaoYouChR/Ghost-Downloader-3](https://github.com/XiaoYouChR/Ghost-Downloader-3)** · Python · +887
   自称「你唯一需要的下载器」，多协议多站点带 GUI。日增从 1,100 回落到 880 上下，热度仍在第一梯队。

3. **[zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)** · Python · +770
   开源的 OpusClip 替代：长视频本地切成短视频，自动出字幕、封面与文案，适配抖音、小红书、TikTok、Reels、Shorts。

4. **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** · Python · +755
   跨 Reddit、X、YouTube、HN、Polymarket 做某个话题近 30 天的调研，再合成带出处的摘要。选题摸底用得上。

5. **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** · Python · +744
   把任意软件的命令行封装成 Agent 原生接口，配套 CLI-Hub。逻辑是「与其等每个软件自己出 MCP，不如给所有 CLI 套统一出口」。

6. **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** · Python · +701
   两小时从 0 训出 64M 小模型，教学向工程，跑通「预训练—SFT—推理」全流程。

7. **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)** · Python · +325
   面向 CI/CD 可靠性的开源 Agent，盯的是构建失败与线上异常的排查链路。

8. **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** · TypeScript · +308
   Google Labs 的 Agent Skills 库，配套 Stitch MCP 使用。

另有两个老牌基建回榜：**[openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino)**（C++，+176，推理部署优化工具链）与 **[nginx/nginx](https://github.com/nginx/nginx)**（C，+150）。

**读榜结论**：前八里没有一席在训更大的模型，七席在解决「Agent 怎么拿到数据、怎么接上工具、怎么被验证」。模型竞赛的叙事在往工程层让位。

## 💬 社区热议

**V2EX 热门**（本日 10 条，部分标题照录）：

- 「个人知识库怎么搞比较好？」——与本站刚做完的 Obsidian 治理同一命题，说明这已是普遍需求而非极客自嗨。
- 「我开始受 AI 毒害了。。。」与「一个完全用 AI coding 开发的数据库 MyDB：兼容 MySQL，性能提升 5 倍以上，累计消耗 5000 亿 token」同现：一边是对 AI 的疲劳，一边是对 AI 的战果展示。
- 「30 岁，专科，10 年前端，有几个 offer，请各位帮忙参考下。」与「认真问，现在是不是可以抄底了？」——职业与资产的两条焦虑线依旧。
- 「想换一台 MacBook，纠结 14 寸和 16 寸」——年关前的换机咨询开始变多。
- 其余为「2026 赣南脐橙给 v 友抽几箱」（社区福利帖）、「彩票预测分析」、「最近买冬装，淘宝首页已经被各种杂牌占领了」、「美股同学看过来，需要老雷交易笔记的可以留下联系方式」。

**Linux.do 热门**：`/latest.json` 直连与代理两次均超时，本日无数据，不臆测填充。

## 🎁 今日福利羊毛

**Epic 本周双免**（官方接口实测，窗口 2026-11-27 00:00 至 2026-12-04 00:00 CST）：

- **火之石 – 放置点击英雄RPG**，0 元保留。
- **Bread and Fred**（面包和年糕），双人合作攀爬，0 元保留。
- 下周预告：**Strange Antiquities** 自 12-04 00:00 CST 起免费。
- 避坑：**TerraScape** 当前是 70% 折扣（11-21 至 12-22）不是免费；《幽灵行者 2》《LISA: Definitive Edition》《纪念碑谷》均为 12-10 起的打折，非免单。

**AI 免费额度（长期可白嫖型）**：Groq 免费层每天 14,400 次调用、推理速度极快（模型以开源为主）；Cursor Hobby 不绑卡即可用 AI 编程；Google Gemini API 免费层标注 2026-12-31 到期，想用的尽早。选型建议：优先「每天刷新」型（Groq／火山引擎）与「永久免费模型」型（GLM Flash 系），而不是一次性的「送 N 百万 tokens」。

**黑五尾声（海外，需美国地址或会员资格）**：Lowe's 会员 11-27 送礼桶、7-Eleven 外卖满 $30 用码 `BLKFRI` 送大披萨、7 Brew 烘焙品买一送一；移动端《Lonesome Village》免费领取窗口到 11-26 已结束，不再列。

核实说明：Epic 条目为官方 `freeGamesPromotions` 接口实测；AI 额度与黑五条目为社区／媒体聚合口径，未逐项实测，领取前请自行确认地区与截止时间；配图 cover/17.webp（第 331 天 % 21 + 1）。

## 📝 一句话总结

工具链热度还在，但榜单已经连续多日没有新故事——真正值得动手的是 Epic 那两份 0 元游戏和 Groq 的每日额度，其余先收藏。
