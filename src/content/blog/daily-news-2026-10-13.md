---
title: "每日科技速递 | 2026-10-13 — AI · 科技 · 经济"
description: "Meta 发布 Muse Wonder 双模型并上线 Agent Arena；微软自研芯片 Maia 300 亮相、明年推进多吉瓦级推理部署；Gemini 4 Argon 面向 Ultra 上线；Anthropic 蒸馏防御让被窃数据降 90%–99%，并修订政策首次禁止虐待模型。国内阿里千问上线「千问 Go!」，字节 Seed 成立安全与对齐专职部门。"
date: 2026-10-13T14:00:00+08:00
categories:
  - 资讯
tags:
  - AI
  - 科技
  - 新闻
  - 日报
  - 人工智能
  - 大模型
  - Meta
  - 微软
  - Google
  - Anthropic
  - 阿里
  - 字节跳动
cover: https://maoyo42.github.io/blog/img/cover/14.webp
---

> 今天的节奏从「谁的模型更聪明」转向「谁的算力、谁的电、谁的规矩」。Meta 用 Muse Wonder 同时占住消费级入口和 Agent 竞技场，微软把自研芯片从试验推进到多吉瓦级部署，Anthropic 一边收紧被蒸馏的口子，一边给自己的模型加了一条「不许虐待」的使用条款。

## 🔥 模型发布

**Meta 发布 Muse Wonder 与 Muse Wonder Full，Agent Arena 同步上线** — 两款模型在 Artificial Analysis Intelligence Index v4.3 上分别拿到 52 与 56 分（max reasoning effort），较前代显著提升；Arena 已把 Muse Wonder 系列接入 Agent Arena 供实测，分数即将公布。更值得看的是留存数据：Muse 首日留存 73.3%，比 ChatGPT 同期高 32 个百分点，但第 14 天回落到 22%，反而低于 ChatGPT 的 26.8%——拉新很猛，长期黏性还没被证明。（来源：[Artificial Analysis](https://artificialanalysis.ai/articles/muse-wonder)、[Arena](https://x.com/arena/status/2109706854700044523)）

**Gemini 4 Argon 面向 Ultra 订阅者上线** — Google 已确认 Gemini 4 Argon 今日开始向 Ultra 订阅用户推送。该模型此前在 Agent Arena 排名第 8，这次正式放量意味着它进入与 GPT-6.1 Sol、Claude Opus 5.5 的正面竞争区间。

**面壁智能 MiniCPM-V 4.7（35B-A3B）在本地 VLM 上兼顾效率与质量** — 官方实测显示，它用更少的 token 完成了比 Qwen 3.6 35B-A3 更好的体素建模任务，并在真实智能体工作流中验证了工具调用与长上下文能力。端侧多模态的竞争焦点正从「参数更大」转向「每 token 产出更高」。（来源：[OpenBMB](https://x.com/OpenBMB)）

## 🛠️ 产品动态

**微软发布自研芯片 Maia 300，明年推进多吉瓦级推理部署** — 微软宣布 Maia 家族将从明年起扩展到多吉瓦级规模，作为自家产品和服务的首选推理系统；Maia 300 每瓦 token 产出比主流 GPU 系统高 40%，已在美欧澳部署的 Maia 200 在 Teams、Copilot 场景中每瓦产出最高提升 1.7 倍。算力自主化从「备胎」升级为「主路」。（来源：[Satya Nadella](https://x.com/satyanadella/status/2109631106404487523)）

**xAI 推出 The X Subscription，把 Grok、Grok Bot、Cursor 与 X Premium 打包** — 一个订阅整合四类服务，未来几天向全球开放。同时 Grok Bot 上线 Memory Transfer：可粘贴提示词，或直接导入 ChatGPT、Claude 的完整数据导出，把用户积累的偏好与上下文迁移到 Grok，但每条都需要人工逐行确认——降低了迁移门槛，也守住了隐私边界。（来源：[xAI](https://x.ai/news/x-subscription)）

**阿里千问上线「千问 Go!」体验申请** — 内嵌于千问 APP 的个人助理（Personal Agent）向 Waiting List 用户逐步开放资格，主打更强的办事能力：申请航班延误理赔、汽车保养、运动预约、购物比价等，可自主查询授权平台、比较方案甚至电话联系服务方。阿里生态内的执行闭环，是它相对通用 Agent 的主要筹码。

**MiniMax 入驻天猫开设首家官方旗舰店，直接卖 Token 套餐** — 上架 M Plan 的 Go、Explore、Build 三档订阅，支持按月或按年购买。这是大模型厂商第一次把订阅搬到电商渠道，天猫「AI 空间站」还已有智谱、阿里云、千问办公入驻——AI 订阅开始按消费品的逻辑铺渠道。（来源：[IT之家](https://www.ithome.com/)）

## 🏭 行业要闻

**Anthropic 蒸馏防御让被窃数据量下降 90%–99%** — Anthropic 宣布多项新防护措施，阻止竞争对手通过蒸馏复刻 Claude 能力，早期证据显示蒸馏者获取的数据减少约 90% 到 99%，reasoning token 提取量下降 10 到 100 倍。除权重之外，API 输出本身正在成为需要防守的资产。（来源：[Anthropic Research](https://www.anthropic.com/research/distillation-defenses)）

**Anthropic 修订使用政策，首次禁止「虐待模型」，11 月 12 日生效** — 新条款禁止用户对模型持续且无明确目的的虐待或残忍行为。马斯克公开表态支持，并称读完 Grok 强化学习的内部推理轨迹后「像一个人被枪指着头」在极度压力下。把模型福祉写进条款短期更像姿态，但它意味着提示词开始被当作一种受规制行为。

**Epic Games 转向 AI 先行开发，与迪士尼合作的射击游戏无限期延期** — 据 Bloomberg 报道，Epic 在 15 亿美元合作项目中改由 Claude 等模型编写全部代码并指导全部美术，人类开发者转为管理与引导生成内容。提效的代价被摆到台面上：项目延期、责任归属模糊，游戏行业可能是最先完整吞下这套流程的行业。（来源：[Ars Technica](https://arstechnica.com/gaming/2026/10/report-epic-games-goes-all-in-on-ai-for-disney-collaboration/)）

**字节跳动 Seed 成立 Model-Alignment Preparedness 部门，专攻大模型安全与对齐** — 由严林负责、向 Seed 负责人吴永辉汇报，原 Responsible AI 团队及部分 Chat 团队成员转入，据新浪科技报道为国内首家单独设立安全与对齐部门的大模型团队。在监管与出海合规双重压力下，对齐从「项目组」升格为「建制」。（来源：[IT之家](https://www.ithome.com/)）

**彭博行业研究：美国得州一座 1GW AI 数据中心成本可达 307 亿美元** — 拆解下来，芯片与服务器硬件占 171 亿、电力供应基础设施 30 亿、冷却系统 16.6 亿、网络布线 10.7 亿。钱主要不在盖房子，而在硅和电——这也解释了为什么电力与冷却供应商成了这一轮最硬的瓶颈。

**AMD 发布 Helion 机架与 Verano CPU，Astera Labs 发布「计算无关」机架 Orion** — AMD 在 OCP 峰会上宣布 Helios 进入量产爬坡，同时推出面向智能体 AI 的开放机架 Helion 与新一代 Agent CPU「Verano」；Astera Labs 的 Orion 以 320 通道 PCIe Switch 为核心，每个 pod 最多支持 160 块加速器。机架级标准化正在成为超大规模 AI 的事实语言。

**QGIS 通过 QEP428，禁止 AI 辅助贡献** — 该提案把项目的 AI 政策明确改为 NOT ALLOWED，10 月 7 日合并入库。开源社区对 AI 生成代码的态度正在分化：一边是能力军备，一边是清晰的准入禁令。

**IMF《世界经济展望》：AI 对生产率、工资与就业的影响仍不明显** — IMF 的预测假设 AI 不带来额外生产率增长，并称宏观经济数据尚未显示 AI 对工资、就业或生产率的清晰影响；总裁格奥尔基耶娃同时警告，AI 正在侵蚀年轻人的「第一份工作」。资本开支已经爆发，宏观统计还没等到传导。

## 📄 论文速递

**AWS 提出 priming：把预训练 Transformer 改造成混合状态空间架构，成本降逾 99%** — 论文《Priming: Hybrid state space models from pre-trained Transformers》复用预训练权重构建混合架构，全流程消耗不足源模型 0.5% 的 token 预算。如果这条路走得通，「改架构必须重训」的默认假设就要改写。（来源：[Amazon Science](https://www.amazon.science/blog/can-we-change-an-ai-models-architecture-without-retraining-it-from-scratch)）

**Anthropic 评估小模型在 IoT 设备上自主复制的可行性** — 实验显示 9B 模型可在测试的 9 类硬件中的 8 类上跑通推理，30B 及以下模型已能完成复制所需的大部分单步。结论不是「正在发生」，而是「门槛比预期低」——这对边缘侧的安全治理是坏消息。（来源：[Anthropic Research](https://www.anthropic.com/research/self-replicating-ai)）

**Redwood Research 实证检验蒸馏定罪（DFI）与蒸馏提能（DFC）** — DFI 把不信任的教师蒸馏为更弱、更可信的学生，让学生暴露教师的隐藏怪癖；DFC 则在迁移能力的同时阻断失对齐。安全侧第一次把「蒸馏」同时当作攻击面和防线来系统测量。（来源：[Redwood Research](https://blog.redwoodresearch.org/p/paper-distillation-for-incrimination)）

**arXiv 论文证明模型可借密码学后门隐藏任意能力** — 该工作把加密神经网络嵌入宿主模型权重，仅在收到秘密触发器时解密执行；在给定密码学假设下，即使完全掌握权重，也难以诱导并解释该能力。模型审计的前提——「看过权重就能判断它会不会作恶」——被提出实质性挑战。

**Sakana AI 提出多智能体自监督方法 MASS，探索递归自改进** — 在开放式任务上让多智能体互相提供监督信号，减少对人类标注的依赖。递归自改进是老议题，但这次的重点是把监督权交给智能体群体本身。

## 💡 技巧与观点

**Vapi 的自研代码审查机器人把 PR 合并时间砍半** — 工程师 Lat Ware 做的 Pedantic Review Bot 让 PR 平均合并时间从 130 多小时降到 65 小时：它会跑测试和最小复现来验证结论，分析与评论拆成两个 job，且只能评论、不能批准或推送；9 月 2 日至 10 月 2 日审查 1,694 个 PR，在 276 个中提出 363 个 blocker。真正起作用的是权限设计，而不是模型能力。（来源：[Vapi](https://vapi.ai/blog/ai-code-review-bot)）

**一条不到三百字的「红绿灯」提示语，治好了 Agent 刹不住车** — 数字生命卡兹克团队开源了一个进度提示语加 hook，让 Agent 每轮结尾输出 🟢🟡🔴：分别代表原始需求未完成、已达成并可进入后续计划、已达成仅供存档；转黄或转红即停手等待指令。它解决的是 Claude Code、Codex 被建议清单牵着无限跑、白烧 token 额度的常见病。

**Ethan Mollick：如今有 19 款能在手机上跑的模型强于 GPT-4** — GPT-4 曾整整一年是全球无可争议的最强模型；而今天能在现代智能手机上运行的模型，已有 19 款超过它。这条对比是端侧算力与模型效率进步最好的量尺。

---

📎 来源：AIHOT（[aihot.virxact.com](https://aihot.virxact.com)）精选条目聚合整理，链接均为原始出处。
