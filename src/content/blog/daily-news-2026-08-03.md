---
title: "每日科技速递 | 2026-08-03 — AI · 科技 · 经济"
description: "阿里巴巴正式发布 Qwen3.8-Max：2.4 万亿参数首次开源 Qwen-Max 级权重；小米 MiMo-V2.5 登顶 OpenRouter 周调用量榜全球第一；Gary Marcus 撰文质疑 OpenAI Astra 数学成果被过度吹捧。"
date: 2026-08-03T20:00:00+08:00
categories:
  - 资讯
tags:
  - AI
  - 科技
  - 新闻
  - 日报
  - 人工智能
  - 大模型
  - 阿里巴巴
  - Qwen
  - 小米
  - OpenAI
  - Cloudflare
  - Thinking Machines
cover: https://maoyo42.github.io/blog/img/cover/6.webp
---

## 🇨🇳 国内 AI 动态

**🧠 阿里巴巴正式发布 Qwen3.8-Max：2.4 万亿参数，首次开源 Qwen-Max 级权重** — 阿里今日正式发布新一代基座大模型 Qwen3.8-Max，总参数量 2.4 万亿（激活 95B），采用 MoE 架构，是阿里首个突破万亿参数的原生多模态模型，在编程（Coding）与专业办公（Cowork）能力上大幅提升，并在今日放榜的权威三方榜单 Arena 中表现亮眼。官方同步宣布首次开源 Qwen-Max 级权重，开放权重将于下周发布；据称团队使用 Qwen3.8 自主编程仅 16 天便完成了"Hermes Agent"的开发。**为什么重要**：这是继 Kimi K3（2.8T）之后，国产开源大模型在万亿参数赛道的又一次正面交锋——Qwen 以"Max 级权重开源"打破了过去只开源中小模型的惯例，意味着顶级旗舰模型的能力将首次向社区完全开放。**影响**：开源模型的能力天花板被再次抬高，自部署、微调与国产算力适配将获得旗舰级底座；中美开源模型竞争进入"旗舰权重对轰"阶段，闭源 API 的定价与生态压力进一步加大。 [来源](https://qwen.ai/blog?id=qwen3.8) · [快科技](https://news.mydrivers.com/1/1140/1140897.htm) · [36氪](https://36kr.com/p/3908187603621252)

**🏆 小米大模型上央视：MiMo-V2.5 登顶 OpenRouter 周调用量全球第一** — 据央视新闻报道，全球多模型聚合平台 OpenRouter 公布最新一周 AI 大模型调用量榜单，排名前五的模型全部由中国企业研发；其中小米 MiMo-V2.5 以单周 10.5 万亿 Tokens 的调用量位居全球第一。**为什么重要**：调用量是模型"被真实使用"的最直接指标，前五名被中国模型包揽，说明国产模型在性价比与开发者生态上已形成规模优势，而不只是参数竞赛。**影响**：中国 AI 模型的全球渗透率继续提升，低成本推理路线被市场验证，国际大厂在开发者市场的份额承压；"开源 + 低价"正在成为中国模型出海的组合拳。 [来源](https://news.mydrivers.com/1/1140/1140758.htm)

**⚙️ 国产开源生态加速：从盘古到 Qwen，万亿级旗舰进入开源周期** — 继华为开源 5050 亿参数 openPangu-2.0-Pro、Kimi K3 开源 2.8T 权重之后，Qwen3.8-Max 的"Max 级开源"标志着国内头部模型厂商已集体转向旗舰开源路线。**为什么重要**：过去开源多为"降级版"策略，如今旗舰权重直接开放，意味着开源社区第一次能拿到与闭源旗舰同级的模型底座，围绕其构建的推理框架、微调生态与行业应用将快速膨胀。**影响**：国产开源模型在全球开发者中的话语权显著增强，也倒逼海外厂商重新审视开源策略；对企业而言，自部署旗舰模型的成本门槛成为新的选型变量。 [来源](https://aihot.virxact.com/daily/2026-08-03)

---

## 🌍 国际 AI 动态

### 🔥 头条

**🧮 Gary Marcus 撰文质疑 OpenAI Astra 数学成果：表现惊艳但被过度吹捧** — 认知科学家 Gary Marcus 发表评论文章，指出围绕 OpenAI Astra 数学突破的讨论犯了"合成谬误"：擅长某类数学不等于擅长所有数学、科学乃至一切认知任务。他认为数学之所以成为 AI 突破口，是因为它便于用符号工具验证、且能廉价生成海量合成数据，而开放世界的真实问题无法如此模拟；此外 OpenAI 未公布方法细节，外界尚无法评估其真实意义。**为什么重要**：这是对昨日刷屏的"Astra 以约 2000 美元证明 10 项数学难题"最系统的理性回应——在 Lean 证书证明"结论正确"之外，模型能力的外推边界仍是未解问题，避免行业把单点突破误读为通用智能。**影响**：围绕前沿模型评测与宣传的辩论将更受关注，模型厂商的宣传口径可能趋于谨慎；对学界与开发者而言，"可验证的数学成绩"与"开放世界的泛化能力"之间的鸿沟值得持续跟踪。 [来源](https://garymarcus.substack.com/p/openais-amazing-but-vastly-oversold)

### 🛠️ 产品与发布

**☁️ Cloudflare 开启 Agents Week：Agent Cloud 应该是什么形态？** — Cloudflare 启动为期五天的 Agents Week，核心议题是"Agent Cloud"应具备何种形态。其认为现有云和网络皆为人设计，而智能体在速度、结构与访问上有独特需求，因此 Agent Cloud 需同时构建面向智能体原生的底层能力，并充当现有网络与智能体网络之间的转换层。本周将围绕执行层、智能体开发生命周期、安全控制及智能体网络等主题展开。**为什么重要**：当头部云厂商把"智能体"上升为云架构设计的出发点，意味着行业共识正在从"在云上跑模型"转向"为智能体建云"——基础设施的竞争维度被重新定义。**影响**：云厂商的产品路线将加速向智能体原生演进，安全、可观测性与网络层成为智能体时代的差异化战场，企业上云选型需开始考虑 Agent 工作负载的适配性。 [来源](https://blog.cloudflare.com/agents-week-welcome)

**🤖 Thinking Machines 发布 Inkling-Small：四分之一规模性能持平旗舰** — Thinking Machines 发布 Inkling-Small，以 276B 总参数（12B 激活）实现与 975B-A41B 旗舰版 Inkling 相当的性能，完整权重开放。同期开源模型盘点（Interconnects #23）显示，Laguna S2.1、Inkling 与 Kimi K3 正在开源模型的帕累托前沿上各占一席。**为什么重要**：激活参数仅 12B 的小模型追平旗舰性能，验证了稀疏 MoE 路线的效率潜力——小激活参数意味着更低的推理成本与更广的部署场景，是"开源模型普惠化"的关键一步。**影响**：端侧与边缘部署将获得更强的开源底座，中小团队可以用更低的成本自部署接近旗舰级能力的模型，推理价格体系继续下探。 [来源](https://thinkingmachines.ai/news/inkling-small/) · [Interconnects](https://www.interconnects.ai/p/latest-open-artifacts-23-laguna-s21)

### 💡 技巧与观点

**💻 Codex 高阶玩法：用 Sol 指挥 Luna Max，省额度翻倍产出** — 社区分享 Codex 的高阶用法：让 Sol 在 `~/.codex/agents/` 下创建 `luna-worker.toml` 子代理，模型设为 `gpt-5.6-luna`、reasoning effort 设为 max，由 Sol 负责拆解任务与审查代码，具体实现自动委托给 Luna Max 完成。**为什么重要**：这展示了"多模型分工"的 Agent 架构范式——用低成本模型做编排与评审、把高成本推理集中在关键实现环节，在额度与产出之间取得平衡。**影响**：Agent 工作流的设计从"单模型打天下"走向"模型编排"，成本优化成为智能体工程的核心技能，类似模式将越来越多地被引入日常开发。 [来源](https://x.com/AYi_AInotes/status/2083867265179537565)

---

📎 来源：AI HOT ([aihot.virxact.com](https://aihot.virxact.com/daily/2026-08-03)) · Qwen Blog · 快科技 · 36氪 · Gary Marcus · Cloudflare · Thinking Machines · Interconnects
