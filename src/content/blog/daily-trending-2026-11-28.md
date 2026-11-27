---
title: "今日开源热点与福利 | 2026-11-28"
description: GitHub Trending 热门项目、V2EX 社区热议话题、今日福利羊毛汇总（Epic 双免 + 周末大额 Token）。
date: 2026-11-28T10:00:00+08:00
categories:
  - 开源
tags:
  - GitHub
  - V2EX
  - Linux.do
  - 福利
  - 每日
cover: https://maoyo42.github.io/blog/img/cover/18.webp
---

榜单今天换了个顺序，但主线没变：下载器、抓取层、切短视频三件"老活儿"仍在前三，Agent 技能库紧随其后。值得记一笔的是，今天前八席里有六席是 Python，且没有一个是新模型——热度继续集中在"让 Agent 干得成事"这一层，而不是"把模型练得更大"。

数据说明：GitHub 只取页面显示的"今日新增 star"（总星数为客户端渲染，HTML 取不到，故不混用总星），并把带 Sponsor 标记的 5 个赞助位（elementalsouls +1,615／obra +916／cathrynlavery +731／mjmirza +531／toeverything +469）单独剔除、未计入排名；V2EX 走旧版热门接口经代理取到 9 条；Linux.do `/latest.json` 直连与代理两次均返回 Cloudflare 人机校验页，本日缺数据、不臆测。

## 🚀 GitHub 热门项目

按今日新增 star 排序（已剔除赞助位）：

1. **XiaoYouChR/Ghost-Downloader-3**（Python，+843）— 下载器的集大成者，连续第四期稳居前三。多线程、跨协议、界面现代，属于"装一个就够用"的工具。
2. **firecrawl/firecrawl**（TypeScript，+833）— 单个 API 打通 550+ 数据源的抓取层，把搜索、抓取、清洗合成一步，是当下 Agent 取数的事实标准之一。
3. **zhouxiaoka/autoclip**（Python，+733）— 开源版 OpusClip 替代品，本地优先做长视频切片、出字幕与封面文案，MCP 服务可直连。
4. **HKUDS/CLI-Anything**（Python，+668）— 把任意软件的命令行封装成 Agent 原生接口，配套 CLI-Hub。思路是"不给 Agent 造新工具，而是让它学会用旧工具"。
5. **jingyaogong/minimind**（Python，+667）— 两小时从零训出 64M 参数小模型，教学向但工程完整，适合第一次想看全训练流程的人。
6. **mvanhorn/last30days-skill**（Python，+664）— 跨 Reddit／X／YouTube／HN／Polymarket 做 30 天带出处的主题调研，输出可溯源，比"问一句总结一下"靠谱得多。
7. **Tracer-Cloud/opensre**（Python，+326）— 面向 CI/CD 可靠性的开源 Agent，把"流水线又挂了"这类重复排障交给它。
8. **google-labs-code/stitch-skills**（TypeScript，+311）— 配合 Stitch MCP 服务器的 Agent Skills 库，Google 官方在技能标准化上的下注。

另有 **cursor/plugins**（TypeScript，+242）官方插件规范、**openvinotoolkit/openvino**（C++，+152）与 **nginx/nginx**（C，+148）两个老牌基建在榜。

一句话读榜：前八没有一个在训更大模型，七个在解决"Agent 摸得到数据、接得上工具、验证得了结果"。

## 💬 社区热议

**V2EX 热门（9 条）**

- **模型忠诚度开始松动**：两条同现——"其他模型真的好用，我又何必折腾 Claude 呢"与"有人从 codex 弃坑转到 Antigravity 的没"，前者是成本与体验的比较，后者是工具链迁移的实际摩擦。同期还有"最近 Antigravity 重置太频繁了"，于是有人直接上线了一个重置信号监测站，并在帖内抽 50 位评论者各送 50$V2EX——把基础设施的不确定性做成了产品。
- **轻量家庭影音怎么搭**："求推荐：怎么解决家庭超轻量的看电影/动画片需求"，典型的 NAS 太重、投屏太糙的中间地带需求。
- **硬件两问**："为何新出的手机完全不支持 TF 卡了？"（可扩展存储退场的讨论）与"2-3k 可以买到比较可以的相机吗"。
- **生活与开销**："有没有年付 1000-1500 左右的机场，要稳"、"元旦准备飞到香港看 MyGO 演唱会，有点纠结要不要告诉父母"。
- **周末气氛**："周五好，大家周末打算干啥"。

**Linux.do 热门**：`/latest.json` 直连与代理两次均被 Cloudflare 拦在人机校验页，本日缺数据，不补猜。

## 🎁 今日福利羊毛

**游戏（已核对官方接口，截至 2026-11-28）**

- **Epic 本周双免**：《火之石 – 放置点击英雄RPG》与《Bread and Fred（面包和年糕）》，领取窗口 2026-11-26T16:00Z 至 2026-12-03T16:00Z，即北京时间 11-27 00:00 到 **12-04 00:00**。下档预告《Strange Antiquities》自 12-04 00:00 起免。
- **GOG 黑五**：《Dead Age 2》限时免费保留（加入库即永久），属黑五促销附带的真免，不是折扣。
- **Fanatical 地区限量**：《Vertical Drop Heroes HD》限量免费领，视地区库存而定，领不到不必强求。

**AI 额度**

- **ZCode 周末 3 亿 Token**：智谱编程客户端 ZCode 本周末送 3 亿 GLM-5.3-Flash 额度，有效期北京时间 11-27 23:00 至 **11-30 09:00**，覆盖整个周末白天（不同于此前只能夜间用的那批）。需把客户端更新到 v4.0 及以上，应用内弹窗领取；使用时把模型提供方切到「Start Plan」才扣这批额度，每账号每设备限一次。社区反馈是速度偏慢、质量一般，适合跑不着急的轻量任务。
- **商汤 SenseNova Token Plan 公测**：Free 档在公测期为 ¥0/月，大陆手机号注册并完成实名后可在控制台建 API Key，单账号最多 20 把，兼容 OpenAI 接口。
- **Muse + OpenRouter 限免**：可免费调用 Recraft V4.1 Flash v2 生图（截至 11-28）与 HeyGen Voice Turbo 语音（截至 11-30），需自备 OpenRouter 免费账号的 API Key，标准免费额度每天 50 次、每分钟 20 次。
- **小米 tokenplan 到期提醒**：等价约 ¥23 的额度将在 11-28 23:59 UTC（北京时间 11-29 07:59）到期，有券的记得用掉。

**开发者小羊毛**

- **.ggff.net 免费二级域名**：限时免费注册两年，可绑定 Cloudflare，适合挂个人站或给 VPS 做解析。新老用户都能领。
- **JetBrains 免费 AI 额度**：注册账号即可使用，免实名免绑卡，走 IDE 2026.3 或 Junie CLI，后台接 Qwen3.6-27B-FP8。

**提醒**：本栏目只收"官方渠道、无需破解、不涉及绕过付费墙"的条目。凡是要求逆向结算接口、装来路不明客户端换额度、或让你把账号密码交给第三方中转的，一律不列——省下的那点钱不够赔一次账号。

*核实说明：Epic 两条来自官方 `freeGamesPromotions` 接口（zh-CN／CN）实测，时间为接口原始 UTC 值换算；ZCode、商汤、Muse、JetBrains、域名五条为社区与媒体报道的聚合口径，未逐项实领，领取入口与配额请以官方页面为准。*

## 📝 一句话总结

本周热度全在"把 Agent 的活干成"——下载、抓取、切内容、接工具；周末福利则是 Epic 双免加 ZCode 的 3 亿 Token，够用两天。
