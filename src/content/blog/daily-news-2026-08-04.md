---
title: "每日科技速递 | 2026-08-04 — AI · 科技 · 经济"
description: "商汤开源 SenseNova U1.5-Lite-Preview 轻量统一多模态模型；OpenAI 宣布 GPT-5.6 Luna 降价 80% 永久生效；欧盟《人工智能法案》透明度规则正式生效，违规最高罚 1500 万欧元。"
date: 2026-08-04T20:00:00+08:00
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
  - 商汤
  - 微软
  - Cloudflare
  - MiniMax
  - 欧盟
cover: https://maoyo42.github.io/blog/img/cover/7.webp
---

## 🇨🇳 国内 AI 动态

**🧠 商汤开源 SenseNova U1.5-Lite-Preview：8B-MoT 轻量模型比肩商业闭源质量** — 商汤推出 SenseNova U1.5-Lite-Preview，一个基于 NEO-Unify 架构的轻量级原生统一多模态模型，仅 8B-MoT 参数即可达到商业闭源模型的生成与编辑质量。**为什么重要**：这是国产厂商在"小参数、高性价比"路线上的又一落子——不拼参数规模，而是用统一架构把图像生成、编辑等多模态能力压进 8B 级别，直接对标可商用、可自部署的轻量底座。**影响**：中小企业与端侧应用将获得更低成本的多模态自部署选项，轻量模型的"能力密度"竞赛进一步加剧，闭源 API 在性价比上的护城河被继续削弱。 [来源](https://x.com/SenseTime_AI/status/2084288424236782073)

**🛠️ 面壁智能开源 ForgeStencil：一周自动优化 100+ 工业与科学软件，零人工介入** — 面壁智能发布开源项目 ForgeStencil，能够在一周内自动完成 100 多个工业与科学软件的优化，全程无需人工介入。**为什么重要**：传统软件优化高度依赖领域专家逐案调试，ForgeStencil 把这一过程自动化，意味着 AI 改造传统工业软件的范式从"辅助工具"走向"自主流水线"，是智能体落地实体行业的一个代表性案例。**影响**：工业软件、科研计算等领域有望迎来一轮自动化改造浪潮，AI 厂商从"卖模型"转向"卖改造能力"，国内 AI 应用层的差异化竞争加剧。 [来源](https://mp.weixin.qq.com/s?__biz=Mzg3Mzg2MTg2NQ%3D%3D&mid=2247498861&idx=1&sn=d2d16692dd7eb27f9d466803f25c2b78)

**🎬 MiniMax H3 正式开源：通用全模态生成系统支持 2K 视频与原生立体声** — MiniMax 宣布 H3 正式开源。作为通用全模态生成系统，H3 支持 2K 分辨率视频与原生立体声输出，覆盖图、音、视频多模态生成。**为什么重要**：在 8 月初 H3 发布引发关注后，此次权重开源把旗舰级多模态生成能力交到社区手中——视频生成模型开源本就稀缺，同时具备原生音频能力的更是少数。**影响**：多模态生成的开源生态被进一步充实，视频创作者与开发者的自部署选项增多，也将给闭源视频生成 API 带来价格压力。 [来源](https://mp.weixin.qq.com/s?__biz=MzE5MTA3NzcxMQ%3D%3D&mid=2247488931&idx=1&sn=0506e1d52edd5166becf35f5ebd83a07)

**💡 Kimi Work 发布幻灯片制作教程：K3 驱动全流程** — Kimi 官方发布 Kimi Work 幻灯片制作教程，Kimi Slides 由 Kimi K3 驱动，覆盖从结构研究、连贯设计（含图表与 SmartArt）到可编辑下载的完整流程。**为什么重要**：办公场景是国产模型的必争之地，官方教程的推出说明厂商开始系统化教育用户、降低上手门槛，而非仅停留在模型能力宣传。**影响**：AI 办公工具的使用范式加速普及，PPT 制作等高频场景将率先完成 AI 化，办公软件赛道的竞争从"生成效果"延伸到"流程体验"。 [来源](https://x.com/Kimi_Moonshot/status/2084245860339298423)

---

## 🌍 国际 AI 动态

### 🔥 头条

**💰 OpenAI 宣布 GPT-5.6 Luna 降价 80% 永久生效** — OpenAI 正式确认 GPT-5.6 系列最小模型 Luna 的 API 价格下调 80% 永久生效：输入降至 $0.20/百万 tokens、输出 $1.20/百万 tokens；Terra 同步降价 20%（$2/$12）；Sol 新增可选的 2.5 倍速 Fast 模式（成本 2 倍）。**为什么重要**：Luna 是当前调用量最大的轻量模型之一，降价 80% 意味着推理价格体系的"锚点"被大幅下移，同时确认降价不是促销而是长期策略，直接改变开发者的成本模型与选型逻辑。**影响**：Agent 类应用的单次调用成本显著下降，"模型编排 + 高频调用"的架构将更加经济；国产低价模型出海将面临 OpenAI 在轻量档的正面价格战。 [来源](https://x.com/thsottiaux/status/2084506501834829833) · [详解](https://explainx.ai/blog/openai-gpt-5-6-luna-terra-price-cuts-july-2026)

### 🛠️ 产品与发布

**🎙️ OpenAI 发布 GPT-Live：实时音频新架构，边听边说不打断** — OpenAI 公布 GPT-Live，一套用于实时音频对话的新架构与语音栈：模型可以在说话的同时聆听，音频持续流动，更深入的推理与工具使用不会打断对话，实现 ChatGPT 规模的类人语音体验。**为什么重要**：实时语音交互的体验瓶颈在于"延迟与打断"——传统方案需要等用户说完再推理，GPT-Live 用全链路重建的方式让音频与推理并行，这是语音助手走向自然对话的关键一步。**影响**：实时语音将成为下一波 Agent 应用的标配交互层，语音 API 与端侧语音栈的竞争将围绕"自然度与并行性"展开。 [来源](https://x.com/gdb/status/2084405421041963356)

**🔧 微软开源 Orchard：面向研究社区的智能体训练框架** — 微软开源 Orchard，一个用于跨任务类型训练与评估 AI 智能体的研究框架，通过让研究者复用同一套基础设施降低复杂性，并支持较小模型也能取得强劲性能。**为什么重要**：智能体训练的工程门槛高、基础设施重复造轮子，微软把内部基础设施开源，瞄准的是"智能体训练框架"这一尚在早期的基础设施空白。**影响**：学术界与小型团队研究 Agent 的门槛下降，智能体评测与训练方法将更快迭代，生态话语权向开源框架集中。 [来源](https://x.com/MSFTResearch/status/2084364547142418722)

**☁️ Cloudflare Agents Week 三连发：智能体运行时、成本可见性与 TCP/gRPC** — Cloudflare 在本周 Agents Week 密集发布三项能力：开源智能体运行时 @cloudflare/computer 预览版（为每个智能体提供虚拟文件系统，可在 isolate、容器沙箱或浏览器中执行代码）；Billable Usage API（一次调用返回按产品与计费周期拆分的用量成本）；Workers 与 Containers 新增入站 TCP 连接与 gRPC 支持。**为什么重要**：这三项分别对应智能体时代的执行环境、成本治理与通信协议——云厂商开始为"智能体工作负载"补齐底层设施，而不是停留在模型 API 层。**影响**：智能体应用的部署与计费模型将快速标准化，开发者构建 Agent 基础设施时的云选型逻辑被重新定义。 [来源](https://blog.cloudflare.com/cloudflare-computer) · [Billable Usage](https://blog.cloudflare.com/billable-usage-api) · [gRPC](https://blog.cloudflare.com/grpc-workers)

**🏦 Palantir CEO 炮轰前沿 AI 实验室：Q2 营收 19 亿美元，同比增长 93%** — Palantir 公布 Q2 财报：营收 19 亿美元、同比增长 93%，利润 11 亿美元。CEO Alex Karp 在股东信中警告前沿 AI 实验室对企业"过于不可信"，称其意图"占有所谓合作伙伴的生产资料"，带有"马克思主义色彩"，并主张企业应采用模型无关的 AI 软件，自主掌控数据与 AI"废气"（提示词、编排、上下文）。**为什么重要**：这是头部企业软件公司对"模型厂商绑定"模式最直白的公开批评——当 AI 价值从模型层向数据与工作流层转移，谁掌握上下文谁就掌握议价权。**影响**：企业级 AI 采购将更重视"模型无关"架构与数据主权，Agent 编排与上下文管理成为新的企业软件战场。 [来源](https://techcrunch.com/2026/08/03/after-killer-quarter-palantir-ceo-alex-karp-calls-ai-industry-marxist)

**⚖️ 欧盟《人工智能法案》透明度规则正式生效：违规最高罚 1500 万欧元** — 欧盟《人工智能法案》下的新透明度义务于 8 月 2 日生效：公司必须披露用户何时在与 AI 模型互动，并为合成音视频与文本添加机器可读标记；违规面临最高 1500 万欧元或全球年营业额 3% 的罚款，8 月 2 日前推出的模型享有 4 个月宽限期。**为什么重要**：这是全球主要经济体首次以强制立法约束 AI 交互透明度，直接针对深度伪造与"AI 冒充人类"问题，监管从"原则讨论"进入"合规执行"阶段。**影响**：面向欧盟市场的 AI 产品必须增加披露与内容标记能力，合成内容检测与溯源技术迎来合规刚需，全球其他司法管辖区大概率跟进类似规则。 [来源](https://www.theverge.com/ai-artificial-intelligence/974571/eu-ai-act-transparency-labels-rules-deepfakes)

### 📄 论文与观点

**🧪 Gary Marcus 再发文：Anthropic 数学家 24 小时复现 OpenAI Astra 半数结果** — Gary Marcus 发布关于 OpenAI Astra 数学成果的两则重要更新：Anthropic 数学家 Levent Alpöge 使用已公开的 Fable 模型，在 24 小时内复现了 OpenAI 宣称的半数结果，引发对 Astra 真实进展的质疑。**为什么重要**：昨日关于 Astra"约 2000 美元证明 10 项数学难题"的新闻刷屏后，这是最直接的实证反驳——若公开模型即可快速复现，则突破的稀缺性与技术含量都需要重新评估。**影响**：前沿模型宣传的可信度辩论升温，行业对"单点突破"的报道将更谨慎，可复现性有望成为评测与媒体报道的默认标准。 [来源](https://garymarcus.substack.com/p/two-critical-updates-re-astra-and)

**📚 Apple 系统梳理多模态大模型对齐：提出免标注的 BDHS 数据构建法** — Apple 研究团队全面梳理了多模态大语言模型（MLLM）的偏好对齐方法，将算法分为离线（如 DPO）与在线（如 online-DPO）两类并发现两者结合可提升性能；同时提出无需额外标注或外部模型的 Bias-Driven Hallucination Sampling（BDHS）方法，在多项基准上达到与既有对齐工作相当的竞争力。**为什么重要**：多模态对齐缺乏系统性的方法论梳理，Apple 这份研究为"如何让多模态模型更听话"提供了分类框架与低成本数据方案。**影响**：多模态模型的幻觉抑制与偏好对齐将获得更可复用的路径，小团队构建对齐数据集的成本有望下降。 [来源](https://machinelearning.apple.com/research/alignment-multimodal-llms)

**🗣️ 论文速递：SwanTale 统一多说话人语音生成，UEmbed 统一稀疏稠密嵌入** — 两篇值得关注的 arXiv 新作：SwanTale 面向指令与零样本任务，提出统一的多说话人语音与音频生成框架；UEmbed 提出统一稀疏与稠密表示的多模态嵌入模型。**为什么重要**：前者瞄准语音合成中"多说话人 + 指令控制"的整合难题，后者试图融合稀疏与稠密检索两种路线——都是各自方向上"做减法、做统一"的代表性探索。**影响**：语音交互与检索增强（RAG）基础设施有望随这类统一模型简化，端侧语音应用与混合检索系统将受益。 [来源](https://arxiv.org/abs/2608.02023) · [UEmbed](https://arxiv.org/abs/2608.02583)

---

📎 来源：AI HOT ([aihot.virxact.com](https://aihot.virxact.com/daily/2026-08-04)) · OpenAI · 商汤科技 · 面壁智能 · MiniMax · 微软研究院 · Cloudflare · TechCrunch · The Verge · Gary Marcus · Apple ML Research · arXiv
