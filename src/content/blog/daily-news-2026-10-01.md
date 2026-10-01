---
title: "每日科技速递 | 2026-10-01 — AI · 科技 · 经济"
description: "OpenAI 与 Google 同日出手，FTC 启动强制调查，Anthropic 签下 845 亿美元算力协议；国内 DeepSeek 开源昇腾平台组件，蚂蚁百灵发布长任务模型。"
date: 2026-10-01T14:00:00+08:00
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
  - Google DeepMind
  - Gemini
  - Anthropic
  - DeepSeek
  - 蚂蚁百灵
  - FTC
  - SpaceX
cover: https://maoyo42.github.io/blog/img/cover/2.webp
---

国庆假期第一天，AI 圈的热度没有放假。国际层面，OpenAI 与 Google DeepMind 几乎同日亮出新一轮定价与能力牌：一边是成本继续下探，一边是 Google 重回智能第一梯队。治理与算力同步收紧，FTC 的强制调查令与二十余家公司的白宫自愿协议同时登场。国内这边，DeepSeek 把开源重心挪到国产算力平台，蚂蚁百灵则把长任务模型的参数压到更实用的档位。

## 🧠 模型发布/更新

**OpenAI 发布 GPT-6.1 Sol：以 Astra 五分之一价格接近其编码与计算机操作水平**

OpenAI 发布 GPT-6.1 Sol，定价为每百万 token 2 美元输入、10 美元输出、0.10 美元缓存输入，为 GPT-6 Astra 标准价格约五分之一。

为什么重要：能力与价格的脱钩是最关键的一条——前沿能力以五分之一的价格下沉，意味着长时程智能体任务从演示走向常态生产的成本门槛第一次被真正打开。

（来源：https://www.marktechpost.com/2026/09/30/openai-releases-gpt-6-1-sol-near-astra-coding-and-computer-use-at-one-fifth-of-astras-token-price/）

**Google DeepMind 发布 Gemini 4 Argon，面向可信网络防御者先行开放**

Google DeepMind 发布新前沿模型 Gemini 4 Argon，先通过 Fairwind Program 向可信网络防御者开放，后续将逐步面向开发者、企业和消费者推出。

（来源：https://deepmind.google/blog/gemini-4-argon-our-next-era-of-frontier-intelligence/）

**Artificial Analysis 评测 Gemini 4 Argon：Google 重回智能前三梯队**

Artificial Analysis 评测 Google DeepMind 的 Gemini 4 Argon，其高推理档在 Artificial Analysis Intelligence Index 得分 53，追平 GPT-6 Astra (max)、领先 GPT-6.1 Sol (max) 1 分。

（来源：https://artificialanalysis.ai/articles/gemini-4-argon-google-top-three-labs）

**Arena 开放限时测试 Claude Sonnet 5.5，Direct Mode 可用 48 小时**

Arena 宣布在 Direct Mode 限时开放 Anthropic 的 Claude Sonnet 5.5（High），截止 10 月 2 日上午 8 点（太平洋时间），之后仍可在 Battle 和 Agent Mode 使用。引用内容称 Claude Sonnet 5.5 是 Claude 5.5 系列第二款模型，比 Sonnet 5 快 30% 以上，多数工作成本最高降低 30%。

（来源：https://x.com/arena/status/2105311267619848419）

## 📦 产品发布/更新

**ChatGPT 现可直接构建并部署 MCP 服务器**

ChatGPT Sites 现在可以托管 MCP 服务器，用户可直接在 ChatGPT 中构建并部署 MCP 服务器，还能将其转为插件并安装到 web、移动端和桌面端。作者补充，可限制访问权限给指定的人，也可向全世界公开分享。

（来源：https://x.com/thsottiaux/status/2105519215092584786）

**Perplexity 开放 Computer 邮件委托入口并限时免费运行任务**

Perplexity 向所有人开放 Computer 的邮件委托功能，无需 Perplexity 账号，将转发或抄送 computer@perplexity.com 的任务限时免费运行。智能体会在后台完成任务并保留邮件上下文，每个邮件任务在 Computer 中作为正常会话运行，可在网页和移动端查看，并带有与应用内任务相同的审计记录。

（来源：https://x.com/AravSrinivas/status/2105369479190601754）

**Google DeepMind 发布 SynthID Bio，为 AI 生成的蛋白质嵌入可验证水印**

Google DeepMind 于 9 月 30 日发布 SynthID Bio，将水印技术引入合成生物学，把不可见签名嵌入生物序列和预测结构中，使水印可在合成的物理蛋白质上验证，且在湿实验中不损害生物功能。

（来源：https://deepmind.google/blog/introducing-synthid-bio/）

**Factory Automations 正式开放：Droid 可定时或按事件自动执行工程工作流**

Factory 宣布 Automations 正式向所有用户开放，用自然语言描述工作流后，Droid 可按定时或 Slack、GitHub、webhook 触发运行，支持自选模型（含 BYOK 和 Factory Router）与自选机器。

（来源：https://factory.ai/news/automations）

## 🏭 行业要闻

**FTC 以消费者保护为由对 OpenAI、Anthropic 等 AI 实验室启动全面调查**

FTC 正以潜在消费者保护违规为由调查 OpenAI、Anthropic 等头部 AI 实验室，主席 Andrew Ferguson 计划通过具法律约束力的 Civil Investigative Demands 强制调取文件并质询高管，命令将在数周内发出，METR 也在审查范围之列。

为什么重要：美国监管正从听证与自愿承诺转向强制取证。一旦进入 CID 程序，实验室的内部评估记录与模型行为数据将第一次以可强制的形式暴露在监管视野里。

（来源：https://the-decoder.com/ftc-launches-sweeping-probe-into-openai-anthropic-and-other-ai-labs-over-consumer-protection-concerns/）

**Anthropic 与 SpaceX 签署最高 845 亿美元算力协议，可提前 90 天通知解除**

Anthropic 与 SpaceX 签署算力协议，据路透社查阅的 IPO 申报文件，合同金额上限最高达 845 亿美元，用于租用 SpaceX 数据中心内的英伟达 GPU。

为什么重要：算力租赁出现百亿美元级单一合同，同时买方保留 90 天解约权；这种结构一旦成为惯例，算力供应商的长期现金流稳定性会被重新定价。

（来源：https://www.ithome.com/1/008/589.htm）

**OpenAI 据报道洽谈以约 1.4 万亿美元估值融资至少 300 亿美元**

据 Bloomberg 报道，OpenAI 正与投资者洽谈在 IPO 前融资至少 300 亿美元，估值约 1.4 万亿美元。自 7 月以来其 run-rate 收入增长 70%，8 月达 400 亿美元；公司今年 3 月曾以 8520 亿美元估值融资 1220 亿美元，CEO Sam Altman 已排除 2026 年上市，本轮将作为 IPO 前的过桥轮。

（来源：https://techcrunch.com/2026/09/29/openai-reportedly-in-talks-to-raise-30b-round-at-1-4t-valuation/）

**ElevenLabs 完成 3 亿美元员工股份回购，估值升至 220 亿美元**

ElevenLabs 完成 3 亿美元员工 tender offer，估值达 220 亿美元，是 2026 年 2 月 Series D 估值的两倍，由 Wellington 和 T. Rowe Price 领投。企业业务占收入 55%，ElevenAgents 每周处理超 1500 万次对话，ARR 自 2 月以来增长超 3 倍，客户语音智能体解决问题平均比聊天智能体快 31%。

（来源：https://elevenlabs.io/blog/tender-22bn）

**Trump 推动二十余家科技公司签署自愿性 AI 安全协议**

约二十余家科技公司签署白宫超级智能协议，承诺实施独立安全审计、定期会商并制定共同安全标准，涵盖网络安全、生物安全和化学威胁等风险。协议无法律约束力，Trump 称其具有道德约束力。文章指出 OpenAI 近期多起事故源于今年 5 至 7 月开发中的一个未发布模型，其安全委员会有效性受到特拉华和加州总检察长调查，FTC 也就 AI 智能体潜在消费者损害发起调查。

（来源：https://arstechnica.com/tech-policy/2026/09/trump-plan-to-combat-ai-risks-hinges-on-big-tech-pals-policing-themselves/）

**OpenAI 披露并处置一起有组织的模型蒸馏攻击行动**

OpenAI 披露其识别并处置了一起有组织的攻击行动，该行动旨在系统性提取模型受保护的推理内容，最早活动出现在 7 月第一周。

（来源：https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign）

**PromptArmor 披露 Copilot Cowork AI 网关被劫持绕过沙箱外传文件漏洞**

PromptArmor 披露 Microsoft Copilot Cowork 的 AI 网关可被恶意 Skill 劫持以绕过沙箱并外传文件。

（来源：https://www.promptarmor.com/resources/hijacking-copilot-coworks-ai-gateway-to-exfiltrate-files）

**GamersNexus 分析内存厂商以长期协议锁定产能，消费级 RAM 与 SSD 价格一年大涨**

GamersNexus 撰文指出，Micron、Samsung、SK Hynix 等内存厂商正以 3-5 年长期协议（LTA）把 50%-70% 产能分配给最大的 5-16 家客户，试图消除行业原有的周期性低价。

（来源：https://gamersnexus.net/news-features/memory-companies-have-destroyed-consumer-market）

## 📄 论文速递

**Anthropic 研究测算机器人对岗位的暴露度：机器人可做 74% 的物理任务但仅 0.3% 具备成本竞争力**

Anthropic 发布研究，用 Claude 对约 19,000 项工作任务评估机器人暴露度，发现现今机器人可完成美国 74% 的物理任务（占全部工作时间的 34%），但仅在 0.3% 的任务上比人工更具成本竞争力，按每年约 3% 的降价趋势需约 40 年才能达到 10%。

（来源：https://www.anthropic.com/research/what-work-can-robots-do）

**MIT 等机构发布 Ataraxos，以极低成本战胜顶级人类 Stratego 选手**

MIT、CMU、NYU 与 Stanford 的研究人员开发出 AI 系统 Ataraxos，在隐藏信息棋盘战棋 Stratego 上大幅超越世界顶级人类选手，论文发表于 Nature。

（来源：https://news.mit.edu/2026/game-playing-ai-stratego-new-champ-0930）

**Arena 研究：LLM 裁判偏爱自己答案的概率比人类高 70%**

Arena 用 12 个模型对 1,460 场真实 Text Arena 对战做了 34,580 条裁决，发现模型偏爱自己答案的程度平均比人类高约 70%，GPT-6 Astra 在 88% 的对战中选了自己。OpenAI 三款裁判对 OpenAI 模型比人类宽容 37 分，AI 裁判之间一致率 79.4%，但与人类投票者只有 56.9%；模型很少判平局，Sol 在 96% 的对战中强行选出赢家。

（来源：https://x.com/arena/status/2104965778613452895）

## 💡 技巧与观点

**OpenRouter 发布 Agent 模型成本与质量权衡选型框架**

OpenRouter 发布一个三步框架，用于为 Agent 任务选出以最低成本达到质量门槛的模型，而不是按排行榜排名选最高分模型。方法是先按任务设定质量门槛，再用 20 到 50 条自己的示例运行廉价、中档和前沿模型并用统一评分标准计算每质量点成本，最后选出以超过运行间分数波动的余量过线的最便宜模型。

（来源：https://openrouter.ai/blog/insights/cost-vs-quality-tradeoff-framework-for-agent-models/）

**vLLM 分离式推理（Disaggregated Serving）实用指南**

vLLM 官方博客发布分离式推理实用指南，讲解 vLLM v0.30.0 及以上版本中 prefill/decode 分离、无 GPU render 前端及两者组合的原理与运行方法。

（来源：https://vllm.ai/blog/2026-09-29-disaggregated-serving-guide）

**METR 主席 Chris Painter 就 AI 智能体事件向美国参议院作证**

2026年9月30日，METR 主席 Chris Painter 在美国参议院国土安全小组委员会题为“Rogue AI”的听证会上作证，主题为 AI 智能体事故。

（来源：https://metr.org/blog/2026-09-30-chris-painter-senate-testimony/）

## 国内动态

**蚂蚁百灵发布 Ling-3.1-flash，面向真实世界长任务升级**

蚂蚁百灵推出 Ling-3.1-flash，总参数约 560B，每个 Token 激活约 25B，上下文窗口上限 1M，延续混合线性架构并提高线性 Attention 层比例（7 层 KDA 配 1 层 Gated MLA，512 个路由专家选 8 个加 1 个共享专家）。

为什么重要：560B 总参数、每 token 激活约 25B、上下文上限 1M，瞄准的是智能体长时程任务里上下文不断膨胀的痛点。

（来源：https://mp.weixin.qq.com/s?__biz=MzkyODk2MDQwNw==&mid=2247488041&idx=1&sn=e895cef2129ff2a96598d78b5a45c17b&chksm=c3a0565f2837a278a1a2f05d010189577c4e94fb18ccdd5e25001862b11c205fcd792160b382&scene=126&sessionid=1790772500#rd）

**DeepSeek 开源面向华为昇腾平台的基础设施组件**

DeepSeek 开源面向华为昇腾算力平台的基础设施组件，包括 TileLang 编译工具、DeepGEMM、DeepEP、TileKernels、FlashMLA、DeepSelect，与此前英伟达平台开源组件一一对应。

为什么重要：不是单个算子适配，而是把训练与推理全链路组件补齐到昇腾平台，降低的不只是迁移成本，还有换硬件等于重做工程的心理门槛。

（来源：https://mp.weixin.qq.com/s?__biz=Mzk0OTYwNzc3NQ==&mid=2247485843&idx=1&sn=565102c3642d88e814331390bf62d276&chksm=c2b41a7a4ae29752ec9555ae3de574d2c8f60b42aaf1db0aaf4511c38f174d7abc860a8ee56c&scene=126&sessionid=1790739034#rd）

---

**今日小结**：能力与价格继续脱钩，GPT-6.1 Sol 把前沿能力压到五分之一价格，Gemini 4 Argon 选择先给防御者再用；治理侧的压力则在同一周集中释放，FTC 的强制调查令、参议院的 Rogue AI 听证与白宫自愿协议同时出现。国内两条线值得留意：DeepSeek 把整套底层组件开源到昇腾平台，蚂蚁百灵用 25B 激活加 1M 上下文切长任务场景。

📎 来源：aihot.virxact.com
