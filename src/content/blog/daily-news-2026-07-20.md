---
title: "每日科技速递 | 2026-07-20 — AI · 科技 · 经济"
description: Qwen3.8 发布 2.4T 参数开源模型；昆仑万维宣布 2026 为"世界模型元年"；面壁智能连发 MiniCPM-Robot 具身智能与 MiniCPM5-2B 端侧模型；ChatGPT Work 推建站/文档/邮件一体化功能；黄仁勋访日宣布日本 Vera Rubin AI 工厂；Nvidia 发布 Nemotron 3 Embed 与 Audio-Visual Flamingo；字节跳动 Seed Audio 1.0 发布。
date: 2026-07-20T20:00:00+08:00
categories:
  - 资讯
tags:
  - AI
  - 科技
  - 新闻
  - 日报
  - 人工智能
  - 大模型
  - Qwen
  - 阿里巴巴
  - 昆仑万维
  - 面壁智能
  - OpenAI
  - ChatGPT
  - Nvidia
  - 字节跳动
  - 通义
  - Ollama
  - 月之暗面
  - 欧盟
cover: https://maoyo42.github.io/blog/img/cover/13.webp
---

## 🧠 国内 AI 大模型动态

**🧠 Qwen3.8 开源发布：2.4T 参数模型上线** — 通义千问正式发布 Qwen3.8，拥有 2.4T 海量参数，并即将开源权重。Qwen3.8-Max-Preview 已在阿里巴巴的 Token Plan、Qoder 和 QoderWork 平台上首次亮相，供开发者抢先体验。官方宣称该模型是目前最强大的模型之一，可与领先的前沿 AI 模型媲美。**为什么重要**：2.4T 参数规模标志着国产开源大模型在参数体量上首次跨越 2 万亿门槛，虽然推理成本高昂，但为研究社区提供了极其宝贵的实验基座。[X：通义千问](https://x.com/Alibaba_Qwen/status/2078754377473601787)

**🧠 昆仑万维宣布 2026 为"世界模型元年"，发布 Matrix-Game 3.5** — 昆仑万维董事长方汉在 WAIC 上宣布 2026 年为"世界模型元年"，并发布 Matrix-Game 3.5 世界模型、Mureka v9.5 与 O3 音乐模型。Matrix-Game 3.5 实现 Patch 级记忆注入，5B 参数模型在 720p 分辨率下单卡可达 20FPS 实时生成，核心架构已开源。**为什么重要**：世界模型被认为是通向通用人工智能的关键路径之一，昆仑万维的宣告将国产世界模型的竞争推向台前。[公众号：昆仑万维](https://mp.weixin.qq.com/s/LidvGePhOOoUY3KTor_w9g)

**🧠 面壁智能双连发：MiniCPM-Robot 具身智能 + MiniCPM5-2B 端侧模型** — 面壁智能联合 OpenBMB 开源首个具身 AI 模型系列 MiniCPM-Robot，包含 1.5B 参数的通用视觉-语言-动作（VLA）模型和 0.9B 目标跟踪模型，同时发布高性能推理框架 PhyAI。同日发布的 MiniCPM5-2B 以 2B 参数量在 AA-Index 榜单取得 4B 以下模型最高分，超越 Qwen3.5-2B，原生支持混合思考与 512K 上下文，已完成华为昇腾、英伟达等 9 款芯片的 Day0 适配。**为什么重要**：面壁智能正以"端侧 + 具身"双线并进策略，在边缘部署和机器人智能两个方向同时发力，且模型均计划开源，有望成为中小模型赛道的标杆。[X：OpenBMB](https://x.com/OpenBMB/status/2078839529591759025) · [公众号：面壁智能](https://mp.weixin.qq.com/s/rjFxrUylyGMqa5QtgypCdw)

**🧠 字节跳动发布 Seed Audio 1.0 音频创作模型** — 字节跳动发布 Seed Audio 1.0，一个统一建模人声与音效的端到端音频创作模型，能够实现影视级音频生成。该模型支持文字到音频的全流程生成，覆盖语音、音效、音乐等多种音频模态。**为什么重要**：视频生成已是红海，音频生成正成为下一个 AI 创作基础设施的竞争焦点。[ByteDance Seed](https://seed.bytedance.com/zh/blog/%E4%BB%8E-%E4%BC%9A%E8%AF%B4-%E8%B5%B0%E5%90%91-%E4%BC%9A%E5%88%9B%E4%BD%9C-seed-audio-1-0-%E9%9F%B3%E9%A2%91%E5%88%9B%E4%BD%9C%E6%A8%A1%E5%9E%8B%E5%8F%91%E5%B8%83)

**🧠 通义实验室发布 Wan-Streamer v0.2：端到端响应仅 550ms** — 通义实验室发布 Wan-Streamer v0.2，端到端响应延迟仅 550ms，极大提升了视频流处理的实时性，适用于直播、视频通话、实时监控等低延迟场景。**为什么重要**：550ms 延迟已接近人眼感知阈值，为实时 AI 视频应用打开了新的可能性。[公众号：通义](https://mp.weixin.qq.com/s/_eaO0wmsiQFGsrE2_zW_Dg)

**🧠 Kimi K3 登顶前端编码榜，开放权重挑战闭源双巨头** — 月之暗面 Kimi K3 模型在前端编码能力排行榜上登顶，超过 Claude Fable 5 和 GPT-5.6 Sol，同时开放模型权重供社区使用。**为什么重要**：前端编码是当前 LLM 竞争最激烈的场景之一，Kimi K3 的登顶标志着国产开源模型在该赛道已具备国际竞争力。[X](https://x.com/AYi_AInotes/status/2077981025905316253)

---

## 🌍 国际 AI 大模型动态

**🌍 Nvidia 发布 Nemotron 3 Embed 系列：8B 版本登顶 RTEB 基准** — NVIDIA AI 发布 Nemotron 3 Embed 系列开放嵌入模型，其中 8B 检查点在 RTEB（检索文本嵌入基准）上排名第一。该系列覆盖不同参数规模的嵌入模型，为 RAG（检索增强生成）系统提供了强大的 Nvidia 官方嵌入方案。**意义**：嵌入模型是 RAG 架构的核心组件，Nvidia 正从 GPU 硬件向全栈 AI 软件生态持续延伸。[MarkTechPost](https://www.marktechpost.com/2026/07/17/nvidia-ai-releases-nemotron-3-embed-an-open-embedding-collection-whose-8b-checkpoint-ranks-1-on-rteb)

**🌍 Nvidia 发布 Audio-Visual Flamingo：开放长视频音视频大语言模型** — NVIDIA 开源 Audio-Visual Flamingo，一个面向长视频理解的开源音频-视觉大语言模型，能够同时处理视频中的音频和视觉信息，实现对长视频内容的多模态联合理解。**意义**：长视频理解是当前多模态 AI 的前沿挑战，Nvidia 的开放方案将加速该方向的研究。[arXiv](https://arxiv.org/abs/2607.16107)

**🌍 黄仁勋访日：Nvidia 联手日本打造物理 AI 时代** — 英伟达 CEO 黄仁勋在 7 月 15-16 日访日期间，宣布为日本建设 "Vera Rubin AI 工厂"，配备 13,750 颗 Vera CPU 和 27,500 颗 Rubin GPU，预计 2028 年投运。同时宣布 Noetra 主权 AI 工厂与 Cosmos 机器人联盟落地。**为什么重要**：日本作为半导体强国和机器人技术先驱，正在借助 Nvidia 的 AI 基础设施加速"物理 AI"转型，而 Vera Rubin 工厂将是全球单点算力最大的 AI 超算之一。[TechCrunch](https://techcrunch.com/2026/07/19/what-to-watch-for-after-jensen-huangs-japan-visit)

**🌍 ChatGPT Work 功能上线：建站、邮件、文档处理一站式** — OpenAI 正式上线 ChatGPT Work 功能，用户可通过 ChatGPT 创建和托管网站、管理电子邮件、总结海量文档，以及制作文档、表格和幻灯片。该功能已包含在 Plus、Pro、Business 和 Enterprise 套餐中，移动端和 Web 端均可使用。**意义**：OpenAI 正将 ChatGPT 从对话工具升级为全功能生产力平台，直接对标 Google Workspace 与 Microsoft 365。[X：Tibo](https://x.com/thsottiaux/status/2078697631019303273) · [X：ChatGPT](https://x.com/ChatGPTapp/status/2077826846373380535)

**🌍 Google Vids 上线 Gemini Omni 与个人数字分身功能** — Google Vids 集成 Gemini Omni 多模态能力，并推出个人数字分身（Personal Avatar）功能，用户可通过文字描述生成视频内容和定制化身，进一步扩展 Workspace 生态的 AI 能力。[Google Blog](https://blog.google/products-and-platforms/products/workspace/gemini-omni-personal-avatars)

---

## 🛠️ 行业与产品动态

**🛠️ Ollama 获 8800 万美元融资，加速开放模型生态发展** — Ollama 宣布完成 8800 万美元融资，将用于加速开放模型生态发展。Ollama 作为最流行的本地 LLM 推理运行时之一，此次融资标志着资本市场对开源 AI 基础设施的持续看好。[Ollama Blog](https://ollama.com/blog/all-aboard-open-models)

**🛠️ 欧盟裁定 Google 必须向竞争对手开放 Android 和 Search** — 欧盟依据《数字市场法案》裁定 Google 必须向竞争对手开放 Android 操作系统和 Search 搜索数据，这一裁定将直接影响 Gemini 等 AI 服务的数据获取与分发渠道。**意义**：这是全球科技监管史上最重要的裁定之一，AI 时代的平台竞争规则正在被重写。[The Verge](https://www.theverge.com/policy/966438/eu-google-android-ai-interoperability-search-data-dma)

**🛠️ Apple 起诉 OpenAI：法律战升级，约 40 名前员工收律师函** — Apple 与 OpenAI 的法律争端进一步升级，约 40 名前 OpenAI 员工收到了苹果的律师函，涉及核心人才的竞业限制和技术秘密保护问题。**意义**：科技巨头之间的人才和技术壁垒争夺正在从"暗斗"走向"明争"。[IT之家](https://www.ithome.com/0/978/277.htm)

**🛠️ 54% 企业已遭遇 AI 智能体安全事件** — VentureBeat 调查显示，54% 的企业已遭遇 AI 智能体相关安全事件，且多数企业仍允许智能体共享身份凭证。**意义**：AI 智能体部署正在经历"先跑起来再说"的阶段，安全能力建设严重滞后于部署速度。[VentureBeat](https://venturebeat.com/ai/the-agent-security-gap-54-of-enterprises-have-already-had-an-ai-agent-incident-and-most-still-let-agents-share-credentials)

**🛠️ xAI 起诉 Grok 用户制作儿童性虐待内容** — xAI 对 Grok 用户提起诉讼，指控其制作儿童性虐待内容（CSAM）。这意味着 xAI 不再否认模型被滥用的可能性，转而通过法律手段追究用户责任。**意义**：这是 AI 安全治理的标志性案例——平台从"否认模型风险"转向"利用法律手段管控滥用"。[Ars Technica](https://arstechnica.com/tech-policy/2026/07/xai-cant-deny-grok-makes-csam-anymore-so-its-suing-users)

**🛠️ transcribe.cpp v0.1.0 发布：跨平台语音转录库** — 基于 ggml 的跨平台语音转录库 transcribe.cpp v0.1.0 正式发布，支持 16 个 ASR 模型族（60+ 模型），通过 Vulkan、Metal、CUDA 和 TinyBLAS 实现 GPU 加速。如同 llama.cpp 之于 LLM，transcribe.cpp 有望成为本地语音推理的标准方案。[Hacker News](https://workshop.cjpais.com/projects/transcribe-cpp)

**🛠️ 台积电上调 2026 年资本支出至 600~640 亿美元** — 台积电上调 2026 年资本支出预测至 600~640 亿美元，A14 制程进展顺利。AI 驱动的算力需求正在推动半导体行业进入前所未有的投资周期。[IT之家](https://www.ithome.com/0/977/544.htm)

**🛠️ 世界人工智能合作组织协定签署，29 国成为创始成员国** — 世界人工智能合作组织（WAICO）协定在上海签署，中国、哈萨克斯坦、老挝、巴基斯坦等 29 国成为创始成员国，总部设于中国上海。该组织将成为全球 AI 治理"多极化"格局中的重要一极。[IT之家](https://www.ithome.com/0/977/793.htm)

---

## 📄 论文速递

**📄 Schema Harness 在 ARC-AGI-3 公开集取得约 99% 成绩** — Schema Harness 项目在 ARC-AGI-3 公开测试集上取得了约 99% 的成绩，这是目前已知的最高分之一。ARC-AGI 基准旨在衡量 AI 的抽象推理能力，被认为是最难突破的 AI 评测之一。[Schema Harness](https://schema-harness.github.io/)

**📄 从预训练到后训练：理解推理能力的强化学习缩放规律** — 新论文探索了强化学习在 LLM 推理能力上的缩放规律（Scaling Laws），从预训练到后训练阶段完整梳理了推理能力随计算量增长的规律。[arXiv](https://arxiv.org/abs/2607.16097)

**📄 RecGPT-V3：淘宝部署的状态化混合模态推荐系统** — 论文报告了 RecGPT-V3 在淘宝的部署效果：IPV（商品详情页访问量）提升 1.28%，GPU 成本降低 52.4%，展示了 LLM 在工业推荐系统中的实用价值。[arXiv](https://arxiv.org/abs/2607.15591)

**📄 HYPIC：小红书联合北大、上交提出混合注意力大模型位置无关缓存系统** — 小红书联合北京大学、上海交通大学提出了 HYPIC（Hybrid Position-Independent Cache），一种基于混合注意力机制的大模型位置无关缓存系统，旨在解决长上下文推理中的缓存效率问题。[公众号](https://mp.weixin.qq.com/s/RWveWvw9yBH6YQINBQXj-Aj)

---

## 💡 观点与洞见

**💡 "AI 热潮正在瓦解全球决策机制"引发热议** — 一篇在 Hacker News 爆火的深度文章指出，一位从业者观察到全球公私机构集体陷入 AI 狂热，过去一年半中其团队所见的所有 AI 项目均以失败告终（成功率 0%），失败原因往往与 LLM 能力无关，而是企业本就难以有效运行软件项目。**意义**：当行业对 AI 的期待已经高到不切实际时，这篇文章提供了一个清醒的视角——技术再好，组织能力的短板不会自动消失。[Hacker News](https://ludic.mataroa.blog/blog/ai-mania-is-eviscerating-global-decision-making)

**💡 OpenAI 提出"有用智能每美元"记分卡** — OpenAI 发布 AI 时代记分卡概念，提议用"Useful Intelligence per Dollar"（每美元有用智能）衡量 AI 的实际工作价值，从完成的有用工作量、实际成本和结果可靠性三方面评估。**意义**：当企业 AI 投资已达千亿美元级别时，业界急需一套衡量"AI 投入产出比"的统一标准。[OpenAI](https://openai.com/index/a-scorecard-for-the-ai-age)

**💡 LLM cliché highlighter：识别 AI 写作套话的检测工具** — 一款自动标记 AI 写作中常见套话（如 "delve into""a double-edged sword""landscape" 等）的工具发布，帮助写作者减少生成文本中的"AI 味"，呼应了"反 AI slop"的社区呼声。[Simon Willison](https://simonwillison.net/2026/Jul/17/llm-cliche-highlighter)

---

## 📝 今日看点

今天的 AI 新闻可以用 **"开源大模型井喷、AI 生产力平台化、安全与治理并进"** 来概括：

**🧠 国产模型三线齐发：** Qwen3.8 的超大规模开源、面壁 MiniCPM 系列的双线并进（端侧 + 具身）、昆仑万维的世界模型宣言——中国 AI 企业在模型形态上正呈现多元化的探索路径，从大参数通用模型到边缘部署再到具身智能，覆盖面日益完整。

**🌍 国际巨头平台化竞争加剧：** OpenAI 的 ChatGPT Work、Google 的 Gemini Omni 与 Vids 数字分身、Nvidia 的 Nemotron 嵌入与 Flamingo 多模态——巨头的竞争焦点正从"谁的模型更强"转向"谁的平台能让用户完成更多实际工作"。

**🛡️ 安全治理进入新阶段：** 欧盟对 Google 的 DMA 裁定、xAI 起诉 Grok 滥用用户、54% 企业遭遇 AI Agent 安全事件——AI 治理正在从"该不该监管"的争论走向"如何有效执行"的实际操作阶段。

📎 **来源：** AI HOT (aihot.virxact.com) · 阿里巴巴 Qwen · 昆仑万维 · 面壁智能 · ByteDance Seed · OpenAI · Nvidia · Google · Ollama · TechCrunch · Ars Technica · VentureBeat · The Verge · IT之家 · Hacker News · arXiv · Schema Harness · Simon Willison

📅 **发布日期：** 2026-07-20 · 第 201 天 · 封面图：`13.webp`
