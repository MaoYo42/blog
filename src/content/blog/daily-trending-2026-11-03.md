---
title: "今日开源热点与福利 | 2026-11-03"
description: GitHub Trending 热门项目、V2EX/Linux.do 社区热议话题、今日福利羊毛汇总。
date: 2026-11-03T10:00:00+08:00
categories:
  - 开源
tags:
  - GitHub
  - V2EX
  - Linux.do
  - 福利
  - 每日
cover: https://maoyo42.github.io/blog/img/cover/14.webp
---

榜单今天继续在「给 Agent 配电脑」这条路上加速：给智能体用的 computer use CLI 冲到第一，本地跑大模型的引擎占了三个席位，而 V2EX 上最热的几条全跟职场有关——回去救场的、想换娱乐方式的、以及吵「agent 写的代码到底该不该审」。福利面则是过渡期：Epic 本周仅剩一款真免费，11 月 6 日零点换档。

## 🚀 GitHub 热门项目

按今日新增 star 排序。榜单页为客户端渲染总星数，此处只取「stars today」，不混用总星；已剔除 sponsors 赞助位卡片。

1. **pingdotgg/t3code**（TypeScript，+3,229）— 今日新增第一，介绍文案依旧为空，但已连续多期在榜。没有描述还能稳坐头部，说明社区买的是它的口碑而非文案。
2. **vercel-labs/agent-desktop**（Rust，+2,275）— Vercel Labs 出的 computer use CLI，让 AI 智能体直接操作桌面应用，而不是靠截图猜界面。这条路线上周刚开源，本周就冲进前二。
3. **shiyu-coder/Kronos**（Python，+857）— 面向金融市场的「K 线语言」基础模型，把价格序列当文本训练，是榜内唯一金融方向。
4. **JustVugg/colibri**（C，+675）— 纯 C、零依赖，把专家权重从磁盘流式读入，让本地机器也能跑前沿 MoE 模型。轻量派对抗「必须上数据中心」的思路。
5. **FlashML-org/FreeToken**（Python，+653）— 把数据中心级的模型推理搬到桌面上，主打本地大模型的吞吐效率。
6. **hyprwm/Hyprland**（C++，+509）— Wayland 下的动态平铺合成器，老牌钉子户，这次靠新版本回榜。
7. **p-e-w/heretic**（Python，+420）— 免训练的语言模型改造工具，去审查、压废话、降谄媚，属于「模型后处理」这一支。
8. **paperclipai/paperclip**（TypeScript，+412）— 开源的在职 Agent 管理面板，把团队里跑着的智能体统一看管起来。

赞助位里另有 thedotmack/claude-mem（+1,803，跨会话持久记忆）、Donchitos/Claude-Code-Game-Studios（+1,379，49 个 agent 把 Claude Code 改造成游戏工作室）、D4Vinci/Scrapling（+706，抓取框架）与 mattpocock/skills（+858，工程师技能包），方向与主榜一致，未计入排名。

读榜结论：今天的增量集中在「落地层」——让 Agent 有桌面可操作（agent-desktop）、有模型可本地跑（colibri、FreeToken）、有记忆可延续（claude-mem）。模型本身一个没上榜。

## 💬 社区热议

**V2EX 热门**

- 「前公司老板找我回去救场，情况比较特殊，想听听各位的建议」（职场话题，187 回复）— 今日第一，典型的「人走了活还在」难题。
- 「你们除了上班 娱乐方式有哪些」（生活，173）— 高回复生活帖，底下基本是健身、游戏、骑行三分天下。
- 「兄弟们这辈子买过的最贵的东西是什么？」（问与答，145）— 房子之外，答案里出现了不少「一台车换来的自由」。
- 「朋友一家定期献血，我看着矿泉水瓶陷入了沉思」（生活，144）— 关于献血机制与激励的讨论帖，意外地认真。
- 「agent 的代码到底审不审核」（程序员，123）— 与榜单主题正好对上：工具铺得越快，审代码这事越绕不开。
- 「AI 普及之后，应该把所有 Electron 重写为 native」（OpenAI，82）— 反方观点是「重写成本比省下的内存贵」。
- 「挂着日本节点，网站一眼就看出我是中国人。所以我写了个工具，看谁卖了我」（分享创造，65）— 指纹探测，属实用向分享。
- 两条中转站推广帖（HyperAPI 评论留 ID 送 $10、双 11 新用户送 10 元）合计 170 余回复，热度不低。

**Linux.do 热门**：本期 `/latest.json` 与 `/top.json` 直连、代理均返回 Cloudflare 人机校验页（`Just a moment...`），无法取数，故不臆测填充。

## 🎁 今日福利羊毛

- **Epic 免费游戏**：《Sorry We're Closed》（原价 ¥78）当前 0 元，截止 2026-11-05T16:00Z，即 **11 月 6 日 00:00（CST）**。这是本周唯一在免的一款，官方 freeGamesPromotions 接口实测确认 discountPrice 为 0，其余带 promotionalOffers 的项目均为折扣非免费。
- **接档提醒**：11 月 6 日零点换档，据此前排期为《浮游世界》（¥75）与 Idle Champions 起免，可等到当天再领。
- **中转站羊毛**（来自 V2EX 推广帖，未逐项实测）：HyperAPI 评论区留 ID 送 $10 体验额度；另一家双 11 新用户注册送 10 元。第三方中转站建议只用于测试、**勿绑支付方式、勿跑敏感数据**。

## 📝 一句话总结

今天开源圈在给智能体修基础设施——桌面、本地引擎、记忆三件套齐了；社区在聊人情与去留；福利处于空窗，真正的羊毛要等周五零点。

---

数据源与核实说明：GitHub Trending 走代理 `127.0.0.1:7890` 抓取 HTML（589,906 字节）后本地解析；V2EX 用旧版 `/api/topics/hot.json` 经代理取到 10 条（`/api/v2` 仍返回非 JSON）；Linux.do 直连与代理均被 Cloudflare 拦截，本期缺数据；福利以 Epic 官方 `freeGamesPromotions` 接口（zh-CN／CN）实测为准；`ds-search.sh` 本次执行仍为零输出（exit 0、无内容），未用第二路 web_search；配图 cover/14.webp。
