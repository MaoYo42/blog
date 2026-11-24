---
title: "今日开源热点与福利 | 2026-11-25"
description: GitHub Trending 热门项目、V2EX 社区热议话题、今日福利羊毛汇总。
date: 2026-11-25T10:00:00+08:00
categories:
  - 开源
tags:
  - GitHub
  - V2EX
  - Linux.do
  - 福利
  - 每日
cover: https://maoyo42.github.io/blog/img/cover/15.webp
---

今天榜单的主线是**「把 Agent 能碰到的东西都装备齐全」**：榜首是集大成下载器，紧随其后的是把任意 CLI 包成 Agent 原生接口的桥接层、给 Agent 喂外部知识的抓取层、长视频一键切短视频的流水线，再加上一批只做一件事的技能包。前十里有七席是 Python 写的「小工具＋技能」组合。

数据说明：GitHub 只用页面显示的「今日新增 star」（总星数为客户端渲染，HTML 取不到，故不混用总星）；Linux.do 接口本次返回 Cloudflare 人机校验页，无数据即跳过、不臆测。

## 🚀 GitHub 热门项目

按今日新增 star 排序（已剔除 5 个 sponsors 赞助位，不计入排名）：

1. **[XiaoYouChR/Ghost-Downloader-3](https://github.com/XiaoYouChR/Ghost-Downloader-3)** · Python · +1,102
   集大成下载器，连续多期在榜首或紧邻榜首。多协议、多站点、带 GUI，做的是「一个软件替掉十个下载脚本」。

2. **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** · Python · +1,075
   把任意软件的命令行封装成 Agent 原生接口，配套 CLI-Hub。思路很直接：与其等每个软件自己出 MCP，不如给所有 CLI 套一层统一出口。

3. **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** · TypeScript · +990
   单一 API 打通 550+ 数据源的抓取层，负责搜索、抓取、结构化。Agent 的「外部知识进料口」，本期是榜单里唯一的 TypeScript 重基建。

4. **[zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)** · Python · +981
   一个链接一键出片：把播客、访谈、课程这类长视频自动切成短视频，生成字幕、封面与发布文案，适配抖音、小红书、TikTok、Reels、YouTube Shorts。

5. **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** · Python · +727
   两小时从 0 训出 64M 小模型。不是刷榜模型，而是让人真正跑通一次「预训练—SFT—推理」全流程的教学向工程。

6. **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** · Python · +695
   跨 Reddit、X、YouTube、HN、Polymarket 与网页做某个话题近 30 天的调研，再合成带出处的摘要。信息密度高，适合做选题前的摸底。

7. **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)** · Python · +408
   面向 CI/CD 可靠性的开源 Agent，把「构建为什么挂了」这件事交给自动化排查。

8. **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** · TypeScript · +401
   配合 Stitch MCP server 使用的 Agent 技能库，遵循 Agent Skills 开放标准，方便跨客户端复用。

另外两个老牌基建在榜：**openvinotoolkit/openvino**（C++，+187）与 **nginx/nginx**（C，+158）。每次「Agent 生态」热过一轮，这两个总会被重新捡起来——推理端与网关端的位置没变。

**读榜结论**：前八里没有一个是在训更大的模型，七个在解决「Agent 够得着、拿得回、交得出」。这轮热度是工具链的，不是模型的。

## 💬 社区热议

**V2EX 热门**（`/api/topics/hot.json`，经代理取到 9 条）：

- 养猫两个月，我和猫的关系却越来越糟
- 2026 年我的常用 Mac 软件分享
- 北京 35+ 前端失业一个月心态崩了，想去干转转上门回收，月入过万靠谱吗？
- 有多少人通过 AI 赚到工作以外额外的钱了？
- 小时候背的诗，长大了才懂。
- 体验到了被崩老头的快乐
- 戴了十几年眼镜，想做近视手术，想听听做过的 v 友的真实体验
- Apple ID 刚刚被盗刷了！
- 难受啊！为什么我开不了 99.99 刀的 Gemini Ai Pro?

两个值得留意的信号：一是**「35+ 前端失业」与「靠 AI 赚外快」两条同现**，说明焦虑和试探在同一个人群里并存；二是**Apple ID 被盗刷**帖，年关前这类事故会明显变多，建议顺手检查一下双重认证与订阅授权。

**Linux.do**：`/latest.json` 直连与代理均返回 Cloudflare 人机校验页，本期缺数据，不做推测。

## 🎁 今日福利羊毛

**Epic 喜加一（本周最后两天）**

- **《深渊之印》（Mark of the Deep）**：海盗题材类银河恶魔城＋魂系战斗，Epic 国区原价 ¥55，免费窗口到 **2026-11-27 00:00（北京时间）**。入库即永久保留，领了不玩也不亏。
- 下周预告：**《面包和年糕》（Bread & Fred）**，双人绳索登山合作平台跳跃，Epic 国区原价 ¥47，预计 11-27 起免费。

**Amazon Prime Gaming（有 Prime 会员可顺手领，领后永久保留）**

- Kiborg（截至 12-02）、Squirrel with a Gun（截至 12-09）、Caravan SandWitch（截至 12-16），均通过 Amazon Luna 的领取页拿码，之后在 GOG／Epic 兑换。

**学生向（长期有效，需认证）**

- **Google AI Plus 12 个月试用**：个人 Gmail ＋ SheerID 学生认证 ＋ 绑定支付方式，到期自动转付费，记得设日历提醒（入口 `one.google.com/ai-student`）。
- **JetBrains Student Pack**：10 个 IDE 正式版＋AI 订阅，在校期间免费、每年续期，注意仅限非商业教育用途。
- **GitHub Student Developer Pack**：Copilot 补全＋Codespaces Pro 级额度，学生身份两年有效。

避坑提醒：第三方渠道的「低价 Gemini / Claude 订阅」在 V2EX 上仍在热传，这类多为共享号或中转，存在随时失效与账号连带封禁风险，账号里有钱包与云资源的不要碰。

核实说明：Epic 档期以官方 freeGamesPromotions 与两家第三方日历交叉核对（窗口截止 11-26T16:00Z 即 CST 11-27 00:00）；Amazon 与学生向条目为聚合口径，未逐项实测，领取前以官方页面为准。

## 📝 一句话总结

今天没有人造发动机，所有人都在造零件——而真正值得动手的，是把那个能下一切的下载器和那个能把任意 CLI 变成 Agent 接口的桥接层装上试一遍。
