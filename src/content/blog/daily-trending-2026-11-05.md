---
title: "今日开源热点与福利 | 2026-11-05"
description: GitHub Trending 热门项目、V2EX 社区热议话题、今日福利羊毛汇总。
date: 2026-11-05T10:00:00+08:00
categories:
  - 开源
tags:
  - GitHub
  - V2EX
  - Linux.do
  - 福利
  - 每日
cover: https://maoyo42.github.io/blog/img/cover/16.webp
---

今天的榜单依旧是「给 Agent 补齐零件」：操作桌面、管理记忆、并行改代码、本地仿真 AWS，模型本体一个没上榜。

### 🚀 GitHub 热门项目

以下按「今日新增 star」排序（GitHub 总星数为客户端渲染，静态页面取不到，故只用日增）。

- **vercel-labs/agent-desktop** · Rust · +2,470
  给 AI Agent 用的 computer use CLI——让模型直接操作桌面应用，而不是靠截图识别。
- **mattpocock/skills** · Shell · +1,379
  作者把自己的 `.agents` 目录原样公开的工程技能集，主打「给真工程师用的 skills」。
- **thedotmack/claude-mem** · TypeScript · +1,172
  跨会话持久上下文：抓取会话行为 → AI 压缩 → 按需注入。支持 Claude Code / Codex / Gemini / Copilot。
- **floci-io/floci** · Java · +1,090
  自称「轻、软、永远免费」的 AWS Local Emulator 替代品，本地上跑云服务。
- **github/spec-kit** · Python · +808
  GitHub 官方出的 SDD（规格驱动开发）工具包，帮你把「先写规格再写码」变成流程。
- **harry0703/MoneyPrinterTurbo** · Python · +617
  国内老牌项目：输入主题或关键词，AI 一键生成高清短视频。
- **max-sixty/worktrunk** · Rust · +531
  Git worktree 管理 CLI，专为「多个 AI Agent 并行改同一仓库」设计。
- **garrytan/gstack** · TypeScript · +290
  Garry Tan 公开的 Claude Code 配置：23 个工具分别扮演 CEO、设计师、工程经理。

另有 **The-PR-Agent/pr-agent**（Python，开源 PR 审查机器人）、**FareedKhan-dev/kimi-k3-in-c**（C，单 CPU 跑 2.78 万亿参数模型）、**Thysrael/Horizon**（Python，自建 AI 新闻雷达，中英双语日报）、**D4Vinci/Scrapling**（Python，爬虫框架）在榜。

**读榜结论**：前四名有三席在解决「Agent 摸不到桌面、记不住上一轮、改代码会打架」，工程化需求继续压过能力增量。

### 💬 社区热议

**V2EX 热门**

- 全新三端纯原生 SSH 客户端发布，SSH／SFTP／AI 合一，楼主按楼层送 100 位评论者各 50 个 $v2ex
- 可以一直压着最左侧限速跑在最左侧道吗 🐶
- 在快 AI 时代，如何做一款慢产品？
- Claude 升级 Max 会被 ban 吗？
- 群晖 NAS 被勒索后，从 SSD 缓存里恢复文件
- 没有人讨论 Apple 智能？
- 怎么判断一段文字是不是 AI 写的？
- 节点「加了锁」是什么意思？

两条值得多说一句：一是「慢产品」与「AI 写的字怎么认」同时上榜，说明大家对 AI 生成内容的疲劳已经从吐槽走到了方法论；二是 NAS 勒索事件——SSD 缓存救回来的前提是缓存还没被覆盖，备份这件事没有替代品。

**Linux.do 热门**

本期 `/latest.json` 与 `/hot.json` 直连、走代理均返回 Cloudflare 挑战页（Just a moment...），无数据。按规矩这里留空，不臆测填充。

### 🎁 今日福利羊毛

- **阿里云免费试用**：开放 160+ 款产品，含 ECS、轻量应用服务器、数据库与 AI 能力／免费 tokens 额度，新用户可领。（媒体口径，未逐项实测）
- **阿里云长效特惠**：轻量应用服务器 38 元/年起，ECS 经济型 e 实例 99 元/年，新购续费同价。
- **Oracle Cloud 永久免费**：4 核 24G ARM 实例仍是长期白嫖首选，需外卡验证，注册门槛高、开机成功率看运气。
- **V2EX 楼内福利**：上面那条 SSH 客户端推广帖，前 100 位评论者各 50 个 $v2ex，本质上也是白嫖。
- **B 站 11-05 抽奖合集**：当日汇总 23 场抽奖、357 个奖品（键鼠、显卡、显示器等），链接在视频评论区。

提醒：免费套餐普遍有配置和流量上限，超额照常计费，记得设账单提醒并清理闲置实例。

### 📝 一句话总结

Agent 的短板正在被一件件补上——能看屏幕、能记事、能并行干活；而人这边的短板是备份和判断力，NAS 勒索和「这段是不是 AI 写的」都在提醒同一件事。
