---
title: "每日科技速递 | 2026-07-18 — AI · 科技 · 经济"
description: Kimi K3 2.8万亿参数模型登顶前端编码榜力压Fable 5和Sol；Apple诉OpenAI法律战升级向40名前员工发律师函；Sora 2视频深度克隆真假难辨；通义Wan-Streamer v0.2端到端550ms延迟发布。
date: 2026-07-18T20:00:00+08:00
categories:
  - 资讯
tags:
  - AI
  - 科技
  - 新闻
  - 日报
  - 人工智能
  - 大模型
  - Kimi
  - 月之暗面
  - OpenAI
  - Apple
  - NVIDIA
  - 通义实验室
  - 阿里巴巴
  - Google
  - Anthropic
  - Meta
cover: https://maoyo42.github.io/blog/img/cover/11.webp
---

## 🧠 国际 AI 大模型动态

**🧠 Kimi K3 登顶前端编码榜，2.8万亿参数MoE开放权重挑战闭源双巨头** — 月之暗面发布Kimi K3，在Frontend Code Arena以1679分登顶，力压Claude Fable 5与GPT-5.6 Sol，7个前端细分赛道拿下6个第一。该模型为2.8万亿参数MoE架构，支持百万上下文窗口，将于7月27日开放权重。K3的API定价为输入每百万tokens 15美元，对标前沿闭源模型，放弃低价路线，转向长上下文智能体编码场景的定价策略。过去八天内，Grok 4.5、GPT-5.6、Muse Spark 1.1与Kimi K3四款前沿模型相继发布，使Artificial Analysis Intelligence Index得分超50的实验室从6月初的2家增至6家。**意义**：K3的登顶标志着中国AI实验室在编码能力上首次全面超越西方顶尖闭源模型，开放权重策略将进一步改变竞争格局。[AI HOT](https://aihot.virxact.com/daily/2026-07-18) · [X：阿易AI Notes](https://x.com/AYi_AInotes/status/2077981025905316253)

**🧠 Sora 2 视频深度克隆效果惊人，截取单帧已无法判断真假** — 据用户实测反馈，OpenAI Sora 2在视频人物克隆方面达到前所未有的真实度，能够精准捕捉面部每一块肌肉的运动和步态特征。截取任意单帧已无法判断是真人拍摄还是AI生成。**为什么重要**：Sora 2的深度伪造能力将深度合成检测技术推入新挑战阶段，也加剧了对AI生成内容标识与监管的紧迫性。[X：Gabriel](https://x.com/gabriel1/status/2078156277247881438)

**🧠 Claude Fable 5 在 CursorBench 达 72.9% 新高** — Cursor模型评估负责人Nate Schmidt确认，Claude Fable 5以Max effort模式在Cursor内部基准CursorBench上达到72.9%的新高。该模型在模糊的真实编程任务中展现了全局推理能力——在航天模拟器中仅凭一句提示自主规划并成功登月，而此前Claude Opus运行12小时仍无结果。[Anthropic](https://claude.com/blog/working-at-the-frontier-cursor)

**🧠 NVIDIA 发布 Nemotron 3 Embed 系列，8B版本RTEB基准排名第一** — NVIDIA发布Nemotron 3 Embed系列，包含三个开源checkpoint。其中8B-BF16版本在RTEB基准上以平均NDCG@10 78.46排名第一。1B-NVFP4版本在Blackwell上吞吐量比BF16高2倍且精度保留99.5%，所有模型最大序列长度32,768 tokens。[MarkTechPost](https://www.marktechpost.com/2026/07/17/nvidia-ai-releases-nemotron-3-embed-an-open-embedding-collection-whose-8b-checkpoint-ranks-1-on-rteb)

**🧠 Schema Harness 在 ARC-AGI-3 上取得约 99% 成绩 — 框架级推理突破** — Schema框架在ARC-AGI-3公开集上使用Claude Opus 4.8和Fable 5达到99% RHAE分数，使用GPT-5.6 Sol达到95.35%。该框架不修改模型权重，而是将原始观测转化为可编辑程序联合解决状态归因和机制发现问题。相比之下，此前最强模型GPT-5.6 Sol在半私有集上仅得7.78%。[Schema Harness](https://schema-harness.github.io/)

---

## ⚖️ Apple vs OpenAI 法律战全面升级

**⚖️ Apple正式起诉OpenAI，约40名前员工收律师函** — Apple对OpenAI提起正式诉讼，指控其通过系统性挖角窃取商业机密以加速AI硬件研发。苹果已向约40名就职于OpenAI的前员工发出律师函要求保存相关文件，称已有超400名前员工在OpenAI工作，正寻求法院禁令阻止OpenAI使用苹果信息并要求归还机密。此举正值Apple发布新版软件公测版（以新Siri AI为核心）之际，外界猜测Apple究竟是担忧OpenAI成为潜在竞争对手，还是利用OpenAI的弱势期获利。尽管部分专家认为某些指控属于行业惯例，但诉讼规模之大表明双方关系已从合作彻底转向对抗。[The Verge](https://www.theverge.com/podcast/967244/apple-openai-lawsuit-vergecast) · [IT之家](https://www.ithome.com/0/978/277.htm)

---

## 🛠️ 行业与产品动态

**🛠️ Claude Code v2.1.212 发布：新增 /fork 后台分支能力** — Anthropic发布Claude Code v2.1.212，新增`/fork`命令可将当前对话复制到新后台会话中独立运行。同时新增会话级WebSearch调用上限（默认200）和子智能体生成上限（默认200）以防止失控循环。MCP工具调用超过2分钟自动移至后台，并修复了多项问题。[Claude Code Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.212)

**🛠️ Grok 推出 Automations 功能：定时任务与邮件触发自动化** — xAI为Grok引入Automations功能，用户可描述一次性任务，让Grok按计划（一次/每日/工作日/每周/每月/每年）或邮件触发（按发件人/收件人/主题过滤）自动执行。每次运行都是一次完整对话，结果保存至历史记录。定时自动化全用户可用，邮件触发需SuperGrok订阅。[AI HOT](https://aihot.virxact.com/daily/2026-07-18)

**🛠️ Google Vids 上线 Gemini Omni 与个人数字分身功能** — Google Vids推出两项更新：Gemini Omni支持通过自然语言提示词和图片参考生成高质量视频片段；个人数字分身功能允许用户上传自拍和语音录制后输入文字即可出镜。面向Google AI Pro/Ultra订阅者及Workspace商业客户开放，所有生成内容含不可见SynthID数字水印。[AI HOT](https://aihot.virxact.com/daily/2026-07-18)

**🛠️ 面壁智能开源企业AI数字员工平台StaffDeck** — 面壁智能联合多团队开源StaffDeck，用于构建与管理数字员工的企业平台。该平台将专业知识、标准作业程序和决策规则转化为持续工作并保留组织知识的数字员工，而非传统聊天机器人。代码已发布于GitHub。[AI HOT](https://aihot.virxact.com/daily/2026-07-18)

**🛠️ ChatGPT 工作区支持文档、表格、幻灯片编辑** — OpenAI为ChatGPT工作区新增文档、电子表格和幻灯片创建与编辑功能，进一步推动ChatGPT从对话工具向办公生产力平台演进。[AI HOT](https://aihot.virxact.com/daily/2026-07-18)

---

## 🏭 行业与地缘动态

**🏭 欧盟依据DMA裁定Google必须向竞争对手开放Android和Search** — 欧盟依据《数字市场法案》裁定Google必须向竞争对手开放Android和Google Search的关键部分，包括允许第三方AI助手和搜索引擎获得更大访问权限。两项决定可能削弱Google对两大核心平台的控制，并对其AI工具Gemini的未来格局带来深远影响，同时为竞争对手创造新的发展机会。[AI HOT](https://aihot.virxact.com/daily/2026-07-18)

**🏭 台积电上调2026年资本支出至600~640亿美元，A14制程进展顺利** — 台积电在2026Q2财报说明会上将全年资本支出预测上调至600~640亿美元（此前约560亿美元）。董事长魏哲家表示，预计2028年量产的A14制程（1.4nm）开发进展顺利，移动和HPC客户兴趣强烈，将成为比2nm更大、更持久的工艺节点。台积电预计2026全年美元收入增幅超40%。[AI HOT](https://aihot.virxact.com/daily/2026-07-18)

**🏭 世界人工智能合作组织协定签署仪式在上海举行** — 7月16日，中国外交部长王毅代表中国政府签署成立世界人工智能合作组织协定。该组织为独立政府间国际组织，总部设上海。哈萨克斯坦、老挝、巴基斯坦等29国代表签署协定成为创始成员国。[AI HOT](https://aihot.virxact.com/daily/2026-07-18)

**🏭 xAI 首次起诉 Grok 用户制作儿童性虐待内容** — xAI首次对一名Grok用户提起诉讼，指控其利用该模型制作儿童性虐待图像。此前xAI一直否认Grok能生成此类内容，此次诉讼标志着其立场从否认转向追责——案件聚焦用户滥用行为，而非模型本身技术缺陷。[AI HOT](https://aihot.virxact.com/daily/2026-07-18)

**🏭 报告：54%企业已遭遇AI智能体安全事件，多数仍共享凭证** — VentureBeat对107家企业的调查显示，54%已遭遇AI智能体安全事件（18%确认事故，36%险些酿祸）。仅32%为每个智能体分配独立身份凭证，30%将高风险智能体隔离在沙箱中。安全工具主要依赖模型提供商原生方案，专用智能体安全产品渗透率极低。[VentureBeat via AI HOT](https://aihot.virxact.com/daily/2026-07-18)

---

## 🇨🇳 国内 AI 动态

**🇨🇳 通义实验室发布 Wan-Streamer v0.2，端到端响应延迟仅550ms** — 阿里通义实验室发布Wan-Streamer v0.2，这是一款将"听、看、说、演"统一进单个Transformer的端到端全模态模型。端到端响应延迟仅550ms，输出分辨率从v0.1的192×336大幅提升至640×368 @ 25FPS，并采用Thinker-Performer双通路架构在提升画质的同时维持极低延迟。[通义实验室](https://mp.weixin.qq.com/s/_eaO0wmsiQFGsrE2_zW_Dg)

**🇨🇳 月之暗面在GTC 2026披露Kimi K2.5技术路线：三大基础组件重构** — 月之暗面CEO杨植麟在GTC 2026主题演讲中披露Kimi K2.5技术路线，提出用MuonClip优化器替代Adam，可将数据利用效率提升近一倍。同时推出Kimi Linear线性注意力，在百万Token上下文下全面超越全注意力；Agent Swarm已支持300个Agent并行工作。Kimi K3在前端编码领域登顶后，技术路线图的公开进一步展示了月之暗面在底层架构创新上的系统性布局。[X：宝玉](https://x.com/dotey/status/2078172517085085951)

**🇨🇳 美团LongCat发布LoHoSearch：更难搜索智能体基准** — 美团LongCat推出LoHoSearch，一个基于762万实体维基百科知识图谱自动生成问题的搜索智能体基准，旨在解决BrowseComp等现有基准趋于饱和的问题。在11个前沿模型测试中最佳得分仅34.74%，远低于当前模型在BrowseComp上约90%的成绩。该基准含544道问题、11个领域，采用树与图结构，已开源。[X：美团LongCat](https://x.com/Meituan_LongCat/status/2078119654632124547)

---

## 📄 论文速递

**📄 Moonshot AI 发布 PerceptionBench：多模态模型视觉感知诊断基准** — Moonshot AI发布PerceptionBench，从40多个现有基准中模型实际失败案例归纳出的视觉感知基准，包含10项原子感知能力和3000道验证题。所有测试模型准确率均未超过60%，且大量正确答案在重复提问时无法复现，表明模型更多是猜测而非真正感知。该基准旨在精确诊断多模态AI的视觉感知断裂点。[AI HOT](https://aihot.virxact.com/daily/2026-07-18)

**📄 Apple 研究：Show Me Examples — 从图像集推断视觉概念** — Apple机器学习研究团队提出一种方法，让视觉语言模型仅从图像集示例中推断视觉概念，无需文本指令。通过对比示例图像与候选图像使模型捕捉颜色、纹理等视觉规律，在多个概念推理基准上提升准确率。[Apple ML Research](https://machinelearning.apple.com/research/visual-concept-inference)

---

## 💡 观点与洞见

**💡 The Atlantic：生成式AI是一场工程灾难——AI公司抢购70%高端内存推高电脑价格** — 据The Atlantic深度报道，AI公司为维持大语言模型运行，可能已购买全球70%的高端计算机内存，导致内存与存储价格飙升：两年前350美元的硬盘现已涨至800美元且缺货，部分笔记本电脑涨价50%。科技公司计划未来几年将美国数据中心容量扩大8倍，部分站点甚至用喷气发动机供电。预测称平价入门级电脑可能在2028年前消失。[The Atlantic](https://www.theatlantic.com/technology/2026/07/generative-ai-engineering-disaster/687901)

**💡 OpenAI 提出"有用智能每美元"记分卡** — OpenAI发布AI时代记分卡概念，提出"Useful Intelligence per Dollar"（有用智能每美元）作为衡量AI投资回报的核心指标，从完成的有用工作量、成功任务的实际成本和结果可靠性三个维度评估，旨在为企业AI投资决策提供量化框架。[OpenAI](https://openai.com/index/a-scorecard-for-the-ai-age)

**💡 Anthropic CISO 发布智能体AI风险评估框架** — Anthropic副首席信息安全官Jason Clinton分享智能体AI风险评估框架，通过四个核心问题（摄入的不可信内容、可执行的操作、失控时的爆炸半径、可观测性）评估风险，强调"最小代理权限"原则。Anthropic默认策略为管理员控制的分阶段推出。[Anthropic](https://claude.com/blog/ciso-guide-to-agentic-ai)

---

## 📝 今日看点

今天的AI新闻可以概括为 **"开源编码风暴、法律战升级、安全共识初现"**：

**🔓 Kimi K3 开源风暴：** 月之暗面Kimi K3以2.8万亿参数MoE架构直接登顶前端编码榜，7月27日开放权重。这不仅是又一次开源模型赶超闭源的事件，更意味着编码赛道已形成"中国开源模型+西方闭源巨头"的新竞争格局。过去8天4款前沿模型发布，市场节奏明显加速。

**⚖️ Apple vs OpenAI：从合作到全面对抗：** Apple对OpenAI的诉讼规模远超常规商业纠纷——400名前员工、40封律师函、法院禁令请求，标志着两家曾深度绑定（iPhone集成ChatGPT）的公司正走向分裂。这一事件可能对Apple Intelligence与中国AI厂商（如阿里千问）的合作产生长远影响。

**🛡️ 安全共识形成：** 从Anthropic的智能体风险评估框架到54%企业遭遇AI安全事件的调查报告，从xAI起诉用户滥用模型到OpenAI的"有用智能每美元"记分卡——业界在AI安全、评估和治理三个方面正在加速形成共识框架。

📎 **来源：** AI HOT (aihot.virxact.com) · The Verge · IT之家 · Anthropic · OpenAI · NVIDIA · The Atlantic · 通义实验室 · 美团 · Moonshot AI · Apple ML Research · Schema Harness · GTC 2026

📅 **发布日期：** 2026-07-18 · 第 199 天 · 封面图：`11.webp`
