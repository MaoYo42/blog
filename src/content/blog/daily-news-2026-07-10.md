---
title: "每日科技速递 | 2026-07-10 — AI · 科技 · 经济"
description: OpenAI 发布 ChatGPT Work 及 GPT-5.6 前沿模型，支持跨应用自主工作数小时；蚂蚁灵波三连开源（LingBot-World 2.0 / LingBot-Video / LingBot-VLA 2.0），具身智能矩阵成型；Elon Musk 盛赞 Anthropic，承诺不切断其算力供应；NVIDIA 发布压缩 MoE 模型 Nemotron Puzzle 系列，吞吐量翻倍。 
date: 2026-07-10T20:00:00+08:00
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
  - Anthropic
  - 蚂蚁灵波
  - NVIDIA
  - Tesla
  - Meta
  - GPT-5.6
  - ChatGPT-Work
  - Claude
  - Ollama
  - Mistral
  - 微软
  - Google
  - SpaceX
cover: https://maoyo42.github.io/blog/img/cover/3.webp
---

## 🤖 国际 AI 大模型动态

### 🧠 OpenAI 发布 GPT-5.6 与 ChatGPT Work —— 智能体新纪元

**事件：** OpenAI 今日正式发布 GPT-5.6，被 Sam Altman 称为"有史以来最好的模型"和该公司"写得最好的博文之一"。与之同步推出的 **ChatGPT Work** 是划时代的 AI 智能体产品——它能跨应用和文件收集信息、将复杂项目分解为小步骤独立完成，并可持续工作数小时。ChatGPT Work 内置 Codex 技术，目前每周超 500 万用户使用 Codex，其中超 100 万用于非软件开发场景（如文档撰写、数据分析）。

**为什么重要：** GPT-5.6 与 ChatGPT Work 的组合标志着 AI 从"问答工具"向"自主工作者"的关键跃迁。这不再是简单的对话升级，而是让 AI 真正能代替人类完成端到端、持续性工作任务的里程碑。桌面版 ChatGPT 已整合 Chat、Work 和 Codex 三种模式并面向所有计划（含免费版）开放。

**影响：** 企业级生产效率将迎来质变——Pro、Enterprise 和 Edu 计划今日先行可使用，Plus 和 Business 用户将在未来几天内获得。这直接冲击了 Cursor、Claude Code 等 AI 编程助手市场，也预示着 SaaS 行业面临 AI Agent 重塑工作流的深远变革。

🔗 https://openai.com/index/chatgpt-for-your-most-ambitious-work | https://openai.com/index/gpt-5-6/

---

### 🧠 Meta 发布 Muse Spark 1.1

Meta 的 AI 团队发布 Muse Spark 1.1 模型更新。目前细节暂未完全公开，但作为 Meta 在多模态生成方向的重要布局，此次迭代预计在图像质量和推理效率上有所提升。

🔗 https://x.com/AIatMeta/status/2075218647359111460

---

### 🧠 Cognition 推出 SWE-1.7，逼近 GPT-5.5 与 Opus 智能水平

Cognition 发布最强模型 SWE-1.7，基于 Kimi K2.7 基座训练，通过强化学习管线在基础设施、训练稳定性、数据质量和长程任务技术上全面改进。在 FrontierCode 1.1 Main 基准达 42.3%（Kimi K2.7 Code 为 30.1%，GPT-5.5 为 43.0%，Opus 4.8 为 46.5%），以极低的成本实现了接近前沿闭源模型的编码智能。

---

### 🧠 NVIDIA 发布 Nemotron-Labs-3-Puzzle-75B-A9B：压缩 MoE 吞吐量翻倍

NVIDIA 发布 Nemotron-3-Super 的压缩变体，总参数从 120.7B 压缩至 75.3B，活跃参数从 12.8B 降至 9.3B，保持 88 块混合布局（40 Mamba + 40 MoE + 8 注意力）。在 8×B200 节点上吞吐量提升 2.03 倍，单 H100 上 1M-token 并发从 1 增至 8，权重占用从 70GB 降至 44.5GB。**意义：** 模型推理成本大幅下降，使更小规模的企业也能部署高性能 MoE 模型。代价是 Arena-Hard-V2 得分略降 4.2 分。

🔗 https://www.marktechpost.com/2026/07/09/nvidia-releases-nemotron-labs-3-puzzle-75b-a9b

---

### 🧠 Google Research 推出 SensorFM：可穿戴健康数据通用基础模型

Google Research 发布 SensorFM，在超 100 万亿分钟多模态传感器数据上预训练，数据来自 500 万同意参与者、100 多个国家、20 余款 Fitbit 和 Pixel Watch 设备。模型可迁移至心血管、代谢、睡眠、心理健康及生活方式等 35 项健康预测任务，实现标签高效适配。这是 AI 在数字健康领域迄今规模最大的基础模型尝试。

---

### 🧠 Cognition SWE-1.7 与 Claude Code v2.1.206 发布

Anthropic 的 Claude Code 发布 v2.1.206，新增 `/cd` 目录路径建议、`/doctor` 检查、自动 `git push` 支持。同时后台智能体可在更新后自动升级，持续提升开发者体验。

---

## 🇨🇳 国内 AI 动态

### 🇨🇳 蚂蚁灵波三连开源：具身智能全栈矩阵成型

蚂蚁灵波科技今日密集发布三款开源模型，形成从世界模拟到具身感知再到动作控制的完整技术栈：

**① LingBot-World 2.0（14B 实时交互世界模型）** — 支持施法、攻击、跳跃等丰富角色动作，可通过文本驱动事件（如切换场景、召唤风暴），内置 Pilot Agent 与 Director Agent 实现世界持续演化，支持多人同时交互。稳定输出 720p/60fps 实时画面，长达一小时画质不衰减。采用 MoBA 混合双向自回归注意力掩码，以非商用协议开源。

**② LingBot-Video（全球首个面向具身智能的 MoE 视频基模）** — 总参数 30B，推理仅激活约 3B，效率是同等 Dense 架构的 3 倍。引入 7 万小时 VLA、VLN、Ego 机器人数据，多维强化学习对齐物理合理性与任务完成度。在 RBench 上总分 0.620 超越 Wan2.6，Physics-IQ Verified 排名第一。

**③ LingBot-VLA 2.0（6B 跨实体机器人视觉-语言-动作模型）** — 以 Qwen3-VL-4B-Instruct 为骨干，通过 55 维规范向量统一表示不同机器人状态和动作。训练数据含约 6 万小时（5 万小时机器人轨迹 + 1 万小时第一人称人类视频），覆盖 20 种机器人配置，以 Apache-2.0 许可开源。

**为什么重要：** 这是目前国内在具身智能领域最完整的开源模型矩阵，从世界模拟到物理感知到动作控制，已形成与海外竞品直接对标的技术栈。蚂蚁灵波正在复现一条类似 DeepSeek 的开源技术路线。

🔗 https://www.ithome.com/0/974/508.htm | https://www.ithome.com/0/974/517.htm

---

### 🇨🇳 美团 LongCat-2.0 正式开源：五万卡国产算力集群跑通万亿参数

美团万亿参数大模型 LongCat-2.0 正式开源，总参数 1.6T，平均激活约 48B，专为真实 Agentic Coding 任务设计。引入 LongCat 稀疏注意力机制与 N-gram Embedding。这不仅是万模时代的又一开源力作，更是业界首个在五万卡国产算力集群上完成推理的万亿参数模型，对国产芯片生态的验证意义重大。

---

## 🏭 行业与地缘动态

### 🏭 Elon Musk 盛赞 Anthropic，承诺不切断其算力供应

**事件：** Elon Musk 在 X 上公开承认此前对 Anthropic 的判断有误，称其"显然是当前 AI 领域的领导者"，盛赞 Mythos/Fable 模型"目前最好"，并承诺不会恶意切断其计算资源。背景是：自 2026 年 7 月起，Anthropic 成为 SpaceX 最大客户之一——双方 5 月签署协议，Anthropic 以每月 12.5 亿美元（至 2029 年 5 月，总计约 **400 亿美元**）购买 xAI 旗下 Colossus 1 数据中心全部 300 兆瓦算力。

**为什么重要：** 这标志着 AI 领域两大阵营（OpenAI 系 vs Anthropic/xAI 系）的微妙关系变化。Musk 以特斯拉开放专利先例佐证其"不挤压竞争对手"的风格，合同条款也提供了保障。Anthropic 获得 SpaceX 稳定算力供应，同时 Musk 的公开认可显著提升了 Anthropic 的品牌影响力。

🔗 https://techcrunch.com/2026/07/09/elon-musk-praises-mythos-fable-promises-not-to-cut-off-anthropic

---

### 🏭 Anthropic 任命本·伯南克为长期利益信托受托人

Anthropic 的长期利益信托（LTBT）任命前美联储主席、2022 年诺贝尔经济学奖得主本·伯南克为最新受托人。伯南克将参与公司经济研究，帮助理解 AI 对全球劳动力与经济的影响。LTBT 独立于管理团队和投资者，有权向 Anthropic 董事会任命成员。这是 Anthropic 在治理架构上持续差异化的重要举措。

🔗 https://www.anthropic.com/news/ben-bernanke

---

### 🏭 特斯拉 Optimus Gen 3 定型量产在即

据晚点 LatePost 报道，特斯拉 Optimus Gen 3 经马斯克评审通过，即将量产。供应链要求：9 月产能达 1000 台/周，年底升至 2000-2500 台/周（年产能可达 10 万台）。马斯克六月底高管会上要求年底前实现目标，否则开除整个 Optimus 采购团队。弗里蒙特工厂已改造为 Optimus 生产线。

**为什么重要：** 这是人形机器人从实验室走向工厂生产线的最具体信号之一。一旦特斯拉兑现产能目标，Optimus 将成为全球最大规模的人形机器人部署项目。

🔗 https://www.ithome.com/0/974/782.htm

---

### 🏭 Ollama 开发者数达 890 万，B 轮融资由 Theory 领投

Ollama 宣布拥有 890 万开发者、6.7 万集成，并与各大模型实验室及硬件供应商建立合作。B 轮融资由 Theory 领投。Ollama 让开源模型在本地或云端轻松运行，已成为本地 AI 推理的事实标准工具。

🔗 https://www.tomtunguz.com/ollama-series-b

---

### 🏭 法国对英伟达反垄断调查接近尾声

法国竞争管理局确认，对英伟达的反垄断调查已近尾声，即将发布正式异议声明。调查聚焦两大问题：市场对 CUDA 平台的严重依赖，以及英伟达对 CoreWeave 等 AI 云计算公司的投资。英伟达占全球 AI 加速器超 70% 份额。若认定滥用市场支配地位，最高可处全球年营业额 10% 罚款。法国是首个准备正式指控英伟达的监管机构。

---

## 🛠️ 产品与应用

### 🛠️ ChatGPT Sites：创意一键变可发布网站

OpenAI 推出 **ChatGPT Sites**，用户只需描述一个想法即可获得可发布和分享的实时网站。开发团队用 Sites 构建了个人专注应用等多个实例，大幅降低了网页创建门槛。

🔗 https://x.com/OpenAIDevs/status/2075331020090687666

---

### 🛠️ 微软发布 Flint：面向 AI 智能体的可视化语言

微软研究院推出 **Flint**，一种可视化中间语言，让 AI 智能体通过人类可编辑的 spec 自动生成美观图表。支持 46 种图表类型，可渲染到 Vega-Lite、ECharts 和 Chart.js 三个后端。已开源，并提供 MCP 服务器用于智能体工作流集成。可视化报告生成从此可纳入 AI Agent 自动工作流。

🔗 https://microsoft.github.io/flint-chart

---

### 🛠️ Google 推出 LiteRT.js：高性能 Web AI 推理运行时

Google 发布 LiteRT.js，专为 JavaScript 开发者设计，基于 WebGPU 和即将推出的 WebNN 实现 SOTA 推理性能，并回退到 WebAssembly CPU 方案。**意义：** 浏览器端运行机器学习模型的能力正在走向成熟，JavaScript 开发者将能直接在页面部署 AI 功能，无需后端 GPU 支持。

🔗 https://developers.googleblog.com/litertjs-googles-high-performance-web-ai-inference

---

### 🛠️ Claude 反思功能（Beta）上线

Anthropic 推出反思功能，帮助用户追踪过去 1、3、6 或 12 个月的 Claude 使用模式，涵盖关键主题、使用频率和任务类型。结合 4D AI Fluency Framework（委托、描述、辨别、勤勉）提供协作分析。面向 Free、Pro 和 Max 用户，需开启记忆功能。

🔗 https://www.anthropic.com/news/reflect-with-claude

---

### 🛠️ Mistral 推出 Studio：提示词与技能系统化管理

Mistral 发布 Studio，将 prompts 和 skills 视为生产资产，支持不可变版本、回滚、所有权、分类标签和审计日志。非开发者可直接编辑测试并通过标签推送至生产。面向 Mistral Studio 客户开放。

🔗 https://mistral.ai/news/manage-prompts-and-skills-in-studio

---

## 📄 论文速递

### 📄 Apple：揭密在线策略蒸馏——何时有益、何时有害

Apple 团队提出训练无关诊断框架，以每个 token、每个问题、每个教师的粒度分析 on-policy 蒸馏。发现蒸馏指导在错误 rollout 上的对齐程度显著高于正确 rollout，最优蒸馏上下文取决于学生模型容量和目标任务——不存在通用配置。核心启示：蒸馏不是万能的，需按任务逐一诊断。

🔗 https://machinelearning.apple.com/research/unmasking-on-policy-distillation

### 📄 Apple：TGPO —— 通过可验证奖励 RL 增强视频时序感知

提出 Temporal Global Policy Optimization（TGPO），通过对比有序帧与打乱帧输出生成全局归一化奖励信号，抑制 MLLM 在第一人称视频中依赖空间捷径的行为。在五个基准上一致提升时序定位与因果连贯性。

🔗 https://machinelearning.apple.com/research/incentivizing-temporal-awareness-egocentric

### 📄 Apple：SRLM —— 自反思程序搜索提升长上下文处理

Apple 提出 SRLM 框架，利用自一致性、推理链长度和口头置信度三种内在信号让模型在推理时评估候选长上下文程序。在相同时间预算下较传统 RLM 最高提升 22%。

🔗 https://machinelearning.apple.com/research/self-reflective-program-search

---

## 💡 行业观点与洞见

### 💡 AI 能否回答 3 万亿美元的问题？

Sequoia 合伙人 David Cahn 更新估算：2026 年全球 AI 基础设施投入达 **1.5 万亿美元**，行业需产生 **3 万亿美元收入**才能回本。Anthropic 年化收入 600 亿美元，OpenAI 2025 年收入 130 亿美元（2025 年 11 月 ARR 200 亿美元），但缺口仍然巨大。风险在于：更多组织转向更便宜的开放权重模型（尤其中国模型），且最新模型 token 效率持续提升（OpenAI 编码任务 token 效率提升 54%），token 价格通缩可能进一步压缩营收。

🔗 https://techcrunch.com/2026/07/09/can-ai-answer-the-3-trillion-question

### 💡 LinkedIn 超 40% 长文为 AI 写作

安全公司 Pangram 分析超 100 万条帖子发现：LinkedIn 超 40% 长文被标记为完全 AI 生成，占全部 AI 检测内容的 62%；X/Twitter 近一半文章为 AI 写作（23.9% 完全 AI + 22.9% 混合）；Reddit 整体 AI 率仅 4.4%，但顶层帖子 AI 率达 11.6%。假阳性率仅 0.01%。**启示：** AI 生成内容已深入渗透社交平台，内容真实性和信息价值正在被重新定义。

🔗 https://www.pangram.com/blog/ai-in-your-feed

---

📎 **来源：** AI HOT（aihot.virxact.com）、AIToolly、Second Talent、TechCrunch、IT之家

📅 **发布日期：** 2026-07-10 · 第 191 天 · 封面图：`3.webp`
