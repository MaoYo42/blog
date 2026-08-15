---
title: "每日科技速递 | 2026-08-15 — AI · 科技 · 经济"
description: "智谱发布 GLM-5.3：不换基座只靠后训练 Scaling 就把编程能力推到开源第一，并涌现出超预期的网络安全能力（已发现 Cursor 严重漏洞）；SpaceX 以 600 亿美元完成对 Cursor 的收购，AI 编程工具并入全球最大 GPU 集群；OpenAI 与 Anthropic 打起价格战，中国开源模型崛起倒逼美系降价。"
date: 2026-08-15T20:00:00+08:00
categories:
  - 资讯
tags:
  - AI
  - 科技
  - 新闻
  - 日报
  - 人工智能
  - 大模型
  - 智谱
  - SpaceX
  - Cursor
  - OpenAI
  - Anthropic
  - Google
  - 小红书
  - DeepSeek
  - 通义千问
cover: https://maoyo42.github.io/blog/img/cover/18.webp
---

## 🇨🇳 国内 AI 动态

**🧠 智谱发布 GLM-5.3：不换基座、只靠后训练 Scaling，编程能力冲到开源第一，还涌现出网络安全能力** — 8 月 14 日，智谱（Z.ai）正式发布 GLM-5.3，官方一句话点破核心：「Scaling post-training is all we did for GLM-5.3」——基座与 GLM-5.2 相同（约 743B 参数，不到 Kimi K3 的三分之一），全部提升来自极致的后训练扩展。效果惊人：编程能力较前代提升 50%，Terminal-Bench 3.0 从 4.6 飙升至 28.3、DeepSWE v1.1 从 46.2 升至 66.9，多项智能体编码基准超越 Kimi K3，部分指标甚至超过 Claude Fable 5 与 GPT-5.6-Sol；更受关注的是其网络安全能力「超出公司预期」——CyberGym 得分 84.5%、AutomationBench 48.2%，在白盒代码审查等防御性任务中持平 Mythos 5，据 VentureBeat 报道已用该模型发现了 AI 编程工具 Cursor 的严重漏洞。发布策略也出现明显转向：即日起仅限 GLM Coding Plan（Lite $12.6/月、Pro $56/月）与 ZCode 使用，API 与开源权重将在安全评估后分阶段放出，权重预计约两周后上线 Hugging Face。**为什么重要**：「后训练 Scaling」路线被验证——不堆参数、不换基座，仅靠对齐与强化学习就能追平甚至反超前沿，这意味着中国实验室正在用「更少的算力、更聪明的训练」保持与世界顶尖的同步，也让「蒸馏论」的解释站不住脚。**影响**：开源编程模型的天花板被抬高，开发者获得又一个接近前沿的免费底座；网络安全能力引发的是另一层讨论——当开源模型具备攻防能力，「分阶段发布 + 安全评估」可能成为高能力开源模型的常态化节奏。 [来源](https://z.ai/blog/glm-5.3) · [VentureBeat](https://venturebeat.com/) · [Interconnects](https://www.interconnects.ai/p/glm-53-how-chinese-labs-keep-stride)

**🧠 小红书开源 dots3-note Preview：280B 参数、16B 激活，主打长程智能体与多模态** — 小红书技术团队正式开源 dots3 系列首款模型 dots3-note Preview：总参数 280B、激活参数仅 16B，原生支持 512K 上下文，具备文本、视觉、语音多模态理解能力，并针对复杂推理和长程 Agent 任务专项优化，采用 Apache 2.0 协议开放权重与建模代码，已同步上线 Hugging Face 与 ModelScope。**为什么重要**：内容社区平台把自研基座模型开源，且延续了「大参数、小激活」的 MoE 降本路线——16B 激活意味着高质量推理可以在更低算力门槛上运行，长程 Agent 是当前智能体落地最缺的能力之一。**影响**：国产开源模型阵营再添多模态新兵，512K 上下文 + 多模态 + 长程 Agent 的组合直接对标头部开源模型，社区与开发者获得更多元的选择。 [来源](https://studio.dots.ai/dots/dots3-zh.html) · [GitHub](https://github.com/studio-dots-ai/dots3-note-prev)

**🧠 通义千问开源 Qwen3.8 系列：27B 原生多模态稠密模型全面超越 Qwen3.7-Plus** — 通义千问兑现承诺，开源 Qwen3.8 系列模型：其中 Qwen3.8-27B 为原生多模态稠密模型，仅 27B 参数即在多项评测中全面超越 Qwen3.7-Plus，原生支持 262K 上下文、可通过 YaRN 扩展至 1M tokens，采用 Apache 2.0 许可；同系列还有 Max 级 Qwen3.8-2.4T 旗舰。**为什么重要**：27B 的稠密模型就能超越更大参数的前代，说明小模型的「能效比」路线在持续兑现；千问延续「开源全家桶」策略，用 Apache 2.0 抢占开发者心智。**影响**：中小团队「本地跑千问旗舰能力」的门槛进一步降低，多模态 + 超长上下文的组合让端侧与私有化部署场景更有吸引力。 [来源](https://aihot.virxact.com/daily/2026-08-15)

**🚀 DeepSeek V4 Pro 登陆硅基流动：1M 上下文，MIT 协议保持到底** — DeepSeek-V4-Pro-0813 正式上线硅基流动 SiliconFlow，提供 Day-0 支持：1M 上下文窗口、低/高/最大三档推理强度，更侧重编码、工具调用与智能体工作流，仍保持 MIT 开源协议；定价输入 $1.32/M、输出 $3.96/M、缓存命中 $0.44/M，同系 DeepSeek-V4-Flash-0731 则主打速度与成本效益的日常生产场景。**为什么重要**：V4 Pro 是 DeepSeek 面向 Agent 工作流的主力型号，硅基流动 Day-0 上线意味着国产推理平台与模型厂的协同越来越快，「MIT 开源 + 低价 API」的组合拳继续压缩全球模型定价。**影响**：开发者做智能体应用时「国产高性价比底座」的选择面更宽，对 OpenAI/Anthropic 的 API 定价形成持续压力（见下条国际动态）。 [来源](https://aihot.virxact.com/story/fff2d26b-ea2c-48a8-8b0b-9117e394a505) · [硅基流动](https://siliconflow.cn/models)

---

## 🌍 国际 AI 动态

### 🔥 头条

**🚀 SpaceX 以 600 亿美元完成对 Cursor 的收购：AI 编程工具并入全球最大 GPU 集群** — SpaceX 于 8 月 14 日（周五）正式完成对 Anysphere（Cursor 母公司）的 600 亿美元全股票收购，结束了自今年 4 月启动、6 月官宣的收购流程——这也是有史以来最大的 VC 背景初创公司收购案。合并后 Cursor 将获得全球最大 GPU 集群，目标是构建更强且运行成本更低的模型，以更低价格向客户提供更强大的能力；本周三发布的 Grok 4.6 已被视为双方合作的早期成果。**为什么重要**：编码工具是当前 AI 变现最成熟的场景之一，而算力是模型成本的决定因素——「最受欢迎的 AI IDE + 最大规模 GPU 集群」的组合，可能同时改写编程工具市场与模型定价格局。**影响**：Cursor 用户有望迎来更便宜的强模型；对 Google、AWS、IBM 等云与开发者工具巨头而言，一个「自带算力」的竞争对手进入市场，AI 编程赛道的地缘格局就此改变。 [来源](https://www.govconwire.com/articles/spacex-cursor-60b-stock-acquisition-ai-coding) · [LinkedIn News](https://www.linkedin.com/news/story/spacex-fortifies-ai-foothold-with-60b-cursor-deal-7497940/)

**💸 OpenAI 与 Anthropic 打起价格战：中国开源模型崛起逼着美系降价** — 据英国《金融时报》报道，OpenAI 和 Anthropic 正竞相推出更便宜的模型，以留住对价格敏感的客户——这些客户此前因账单压力转向中国厂商，如今在美系降价后开始重新比较能力与价格。上月 OpenAI 已对 GPT-5.6 系列最高降价 80%，Anthropic 亦跟进调价；SCMP 报道称企业级 AI 成本已跌至 2026 年以来新低。**为什么重要**：中国开源模型 + 低价 API 的组合拳第一次系统性地撬动了美系闭源定价体系，「能力溢价」正在被「性价比竞争」取代，价格弹性成为模型 API 市场的新常态。**影响**：对开发者是重大利好——模型 API 成本持续下行，应用层创新门槛降低；对头部实验室则是利润率压力，资本市场对其「收入与投入的剪刀差」的审视将更加严格。 [来源](https://www.ft.com/content/32a70a3c-7d28-40b4-808e-36edb58c7d01) · [SCMP](https://www.scmp.com/tech/tech-trends/article/3363549/enterprise-ai-costs-hit-2026-low-driven-price-wars-chinese-open-source-models-research)

### 🛠️ 产品与发布

**⚡ Gemini 3.7 Flash 全面上线：Pro 与 Ultra 用户可用，个人智能体更精准** — Gemini 3.7 Flash 现已向 Gemini 聊天中的 Pro 和 Ultra 用户开放：模型更新提升了多步骤任务的推理与准确性（如智能整合数十个文件和邮件为一份主文档），同时 Gemini Spark 也已运行于 3.7 Flash，通过改进对 Google Workspace 应用的工具调用，让个人 AI 智能体更精准地完成任务。**为什么重要**：Flash 系列是 Google「低成本高频调用」的主力型号，向付费用户全面开放意味着多步推理能力开始向日常办公场景下沉。**影响**：Google Workspace 全家桶的 AI 自动化体验再进一步，个人智能体「替你干活」的完成度是这轮竞争的看点。 [来源](https://aihot.virxact.com/daily/2026-08-15)

**🔤 Claude 文本水印机制曝光：为遵守欧盟《AI 法案》而生** — Anthropic 披露未来 Claude 模型生成的文本将包含水印，用于判断文本由 Claude 撰写的可能性——这是其为遵守欧盟《AI 法案》透明度要求而实施的变更。方案基于 Google DeepMind 的 SynthID-Text 技术，官方称对输出质量、创造力和可读性无实际影响，读者无法区分水印文本与普通文本，且不增加额外 token 或成本。**为什么重要**：这是欧盟《AI 法案》对生成内容可溯源要求的直接落地——头部模型厂开始把「内容水印」做成默认能力而非可选项。**影响**：AI 生成内容的可溯源时代开启，对内容平台审核、学术诚信与媒体可信度治理都是基础设施级的变化；水印方案是否可被抹除、能否跨模型识别，将成为下一轮讨论焦点。 [来源](https://aihot.virxact.com/daily/2026-08-15)

### 🌏 行业与观点

**🏫 印尼首个大学 AI 中心落成：UGM、Indosat 与 NVIDIA 联手培养本地 AI 人才** — 印尼通信与数字事务部、Indosat、NVIDIA 与加查马达大学（UGM）在日惹共同启动 UGM Indosat NVIDIA AI 技术中心（NVAITC）——这是印尼首个大学 AI 技术中心，聚焦本地 AI 人才培养与产业落地。**为什么重要**：东南亚大国把「AI 人才基建」放在国家战略位置，NVIDIA 的 NVAITC 大学合作网络正在向新兴市场下沉——算力出口之外，人才生态是更长远的布局。**影响**：印尼及东南亚的 AI 开发者供给将加速，区域数字经济的自主能力增强；对 NVIDIA 而言，本地生态绑定是巩固芯片市场地位的长线投资。 [来源](https://aihot.virxact.com/daily/2026-08-15)

**📊 OpenRouter 数据揭示真相：84% 的 token 来自非前沿模型，性价比才是主流** — OpenRouter 数据显示，84% 的模型 token 并非来自 SOTA 模型：用户最常用的六款模型性能约为前沿模型的 77%，成本却仅为 Claude Fable 5 的 2.5%；8 月 10 日当周这六款模型承载了 80% 流量，混合价格约 $0.50/百万 token，而 Fable 5 高达 $20。最佳开源模型的性能也已从一年前的 48% 提升至前沿模型的 80%，企业正转向更小、微调或开源模型以优化性价比。**为什么重要**：这组数据为「价格战」提供了底层注脚——真实世界的模型消费早就用脚投票转向性价比，「最强模型」与「最常用模型」是两个市场。**影响**：对创业公司是生存指南：先跑通性价比模型，再按需升级前沿模型；对头部实验室则是清醒剂：光靠「最强」标签撑不起 API 收入基本盘。 [来源](https://aihot.virxact.com/daily/2026-08-15)

---

### 📝 一句话总结

今日关键词：**智谱 GLM-5.3 发布**——不换基座只靠后训练 Scaling 就把编程能力推到开源第一，还涌现出超预期的网络安全能力（已发现 Cursor 严重漏洞），权重两周后开源；**SpaceX 以 600 亿美元完成对 Cursor 的收购**，AI 编程工具并入全球最大 GPU 集群；**OpenAI 与 Anthropic 打起价格战**，中国开源模型崛起逼着美系最高降价 80%；国内方面**小红书开源 dots3-note Preview**（280B/16B 激活、512K 上下文、Apache 2.0）、**通义千问开源 Qwen3.8 系列**、**DeepSeek V4 Pro 登陆硅基流动**（1M 上下文）；Claude 文本水印为欧盟《AI 法案》落地，OpenRouter 数据印证「性价比才是主流」。
