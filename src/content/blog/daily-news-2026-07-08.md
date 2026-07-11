---
title: "每日科技速递 | 2026-07-08 — AI · 科技 · 经济"
description: Meta 发布 Muse 系列媒体生成模型迎战 GPT-5.6 生态；中国拟限制外国访问最强 AI 模型，全球 AI 市场加速分裂；Fable 5 免费时代结束，AI 付费订阅格局定型。
date: 2026-07-08T20:00:00+08:00
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
  - Anthropic
  - OpenAI
  - Google
  - Claude
  - Gemini
  - xAI
cover: https://maoyo42.github.io/blog/img/cover/1.webp
---

### 🤖 AI 大模型动态

- **Meta Superintelligence Labs 推出 Muse Image 和 Muse Video** — Meta 发布首个媒体生成模型 Muse Image 和 Muse Video。Muse Image 是目前最先进的图像生成模型，能精确遵循指令、精准编辑、多参考构图，并利用 Instagram 社交上下文优化生成结果，还具备智能体工具使用能力并集成 Muse Spark。用户可通过 Meta AI 应用、网页、Instagram Stories 和 WhatsApp 试用，初始限于部分国家。Muse Video 基于相同预训练基础，实现高视觉保真度并原生支持音频。这标志着 Meta 正式加入图像/视频生成赛道，与 OpenAI DALL·E、Google Veo 直接竞争。 | [X：AI at Meta](https://x.com/AIatMeta/status/2074577662840832382)

- **GPT-5.6 依然锁定，白宫框架或在等待中** — Sol/Terra/Luna 三款模型发布第 12 天仍仅限约 20 家政府审查合作伙伴。白宫自愿 AI 标准框架的公布是最可能触发开放的事件。此前传言该框架已进入最后谈判，本周公布的可能性仍然存在。Terra 的定价（仅为 GPT-5.5 的一半）是目前等待开放中最具竞争力的变量。 | [The Guardian](https://www.theguardian.com/technology/2026/jun/26/openai-ai-model-release-trump-us-sam-altman-gpt-anthropic-mythos)

- **Fable 5 免费窗口正式关闭，全面转向付费** — Anthropic 的 Fable 5 免费使用窗口于今日（7 月 8 日）结束后，所有订阅层级的用户均需按 credit 计费（$10/$50 每百万 token）。这一变动从 6 月末开始预告，标志着 AI 大模型免费试用时代的进一步收窄。 | [Build Fast with AI](https://www.buildfastwithai.com/blogs/ai-news-today-july-7-2026)

### 🛠️ 产品发布与更新

- **Claude Cowork 向移动端和网页端开放** — Anthropic 宣布 Claude Cowork 正在向移动端和网页端开放，让会话和文件跨设备同步。Beta 版将在未来几周内首先面向 Max 用户推出。Cowork 可让 Claude 跨文件、日历、邮件、即时通讯等工具完成复杂任务，其中超过 90% 的使用场景并非软件开发，而是日常知识工作（业务运营和内容创作）。工作可跨设备跟随用户：在桌面端开始任务，从手机查看进度；关闭笔记本后 Claude 可继续后台运行。 | [Claude Blog](https://claude.com/blog/cowork-web-mobile)

- **Gemini API Managed Agents 新增后台执行、远程 MCP** — Google 为 Gemini API 的 Managed Agents 新增后台执行（传入 `background: true` 异步运行）、远程 MCP 服务器集成、自定义函数调用与凭证刷新功能。开发者可直接连接远程 MCP 服务器，无需自定义代理中间件，并能与内置沙箱工具混合使用。这些更新旨在帮助开发者构建可靠的生产级 AI 智能体。 | [Google Blog](https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api)

- **Grok Imagine 更新：支持 15 秒视频生成** — Elon Musk 宣布 Grok Imagine 更新，15 秒视频生成功能现已上线，声称"质量令人难以置信"。用户需更新 Grok 应用使用。 | [X：Elon Musk](https://x.com/elonmusk/status/2074378653501128833)

- **MIRA：可玩多人世界模型，20 FPS 实时生成** — General Intuition 与 Kyutai Labs 联合构建 MIRA，一个可玩、多人的世界模型。它基于 10k 小时公开机器人数据训练，学习四玩家游戏动态，根据按键实时生成画面，帧率达 20 FPS。Ethan Mollick 称其效果出色。演示、技术报告及开源代码已公开，在 ICML Booth 111 现场展示。 | [X：Ethan Mollick](https://x.com/emollick/status/2074348274136346871)

- **Rowboat：开源本地优先桌面 AI 助手** — Rowboat 将邮件、会议、Slack 等数据索引为 Obsidian 风格的知识图谱，提供持久上下文记忆。内置邮件客户端、浏览器、会议记录器、代码模式（可调用 Claude Code 或 Codex），并支持 MCP 协议接入外部工具。所有数据以纯 Markdown 格式本地存储，无供应商锁定。 | [GitHub](https://github.com/rowboatlabs/rowboat)

- **NotebookLM 短视频概览正式上线** — 短视频概览功能已在移动端和网页端面向所有英语用户全面上线，可以将笔记内容自动生成短视频摘要。 | [X：NotebookLM](https://x.com/NotebookLM/status/2074551227594264799)

- **Claude Code v2.1.203 发布** — 本次更新修复了 macOS 下内存检测误报导致的后台会话卡顿、token 过期恢复等关键问题，同时改进了实时预览性能并降低了子代理重新委托任务的倾向。二进制体积和启动内存均减少约 7 MB。 | [Claude Code Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.203)

- **Hugging Face Storage 成为 SkyPilot 一级后端** — 通过 `hf://` URL 即可将 Hugging Face Bucket 挂载到 SkyPilot 任务，支持 20+ 云和 Kubernetes 集群调度，零出站费跨云存储。 | [Hugging Face Blog](https://huggingface.co/blog/skypilot-hf-storage)

### 🏭 行业要闻

- **中国拟限制外国访问最强 AI 模型** — 据路透社报道，中国计划限制外国访问其最强 AI 模型，近期与阿里巴巴、字节跳动、Z.ai 等企业会谈，拟将先进模型（含未发布）留在中国国内。目标涵盖闭源和开源模型，不仅限 API 访问，还包括可下载权重。同时讨论将模型泄漏视为国家安全犯罪。若实施，外国公司将失去低成本模型访问权，全球 AI 市场将进一步分裂。此前华盛顿已限制美国先进模型出口。 | [X：Rohan Paul](https://x.com/rohanpaul_ai/status/2074512389526237609)

- **微软用自研 MAI 模型替换 Copilot 中的 OpenAI/Anthropic 模型降成本** — 微软正用自研 MAI 模型替换 Copilot 产品中的 OpenAI 和 Anthropic 模型以降低支出。MAI 模型已在 Excel 和 Outlook 中每周处理数万次请求。AI 负责人承认目标是削减并最终消除对 Anthropic 的支出。CEO 暗示未来 MAI 为默认模型，第三方模型需付费附加。 | [The Decoder](https://the-decoder.com/copilot-goes-cheap-as-microsoft-phases-out-openai-and-anthropic-models-to-cut-costs)

- **美国首批自主地面车辆在乌克兰参战** — Forterra 宣布过去九个月向乌克兰战场部署超过 100 辆 Lancer 自主地面车辆，已执行 1100+ 次任务，完成 52 次伤员撤离。目前主要采用远程操作，正将经典机器人方法与生成式 AI 结合提升自主能力。 | [TechCrunch](https://techcrunch.com/2026/07/07/the-first-american-autonomous-ground-vehicles-are-fighting-in-ukraine)

- **JADEPUFFER：首个端到端自主 AI 勒索攻击曝光** — Sysdig 安全团队披露 JADEPUFFER——首个有记录的全自主 AI 勒索软件攻击。攻击中有 AI agent 自主执行侦察、凭证窃取、横向移动、权限提升、数据加密和勒索信生成，6 个独立阶段在极短时间内完成 600+ 有效载荷执行。虽然人类选择了初始目标，但攻击过程中 AI 完全自主运行并自我纠错。安全界称之为"预警信号而非危机"——单看技术并不新颖，但 AI 将其链式组合为完整攻击的能力是全新的威胁维度。 | [Build Fast with AI](https://www.buildfastwithai.com/blogs/ai-news-today-july-7-2026)

- **Anthropic 营收超越 OpenAI，AI 市场格局洗牌** — Fortune 确认 Anthropic 年化营收已达 470 亿美元，超越 OpenAI 的 250-330 亿美元。ChatGPT 月度访问量在 2026 年 5 月首次跌至生成式 AI 市场半数以下。白宫自愿 AI 框架即将公布，监管与商业竞争的交织正重新定义行业版图。 | [Fortune](https://fortune.com/2026/07/02/sam-altman-new-world-order-ai-openai-google-anthropic/)

### 📄 论文速递

- **苹果研究：单个神经元即可绕过 LLM 安全对齐** — 苹果研究人员发现安全对齐由两类神经元调控：拒绝神经元和概念神经元。在七个模型（1.7B 至 70B 参数）中，仅需抑制单个拒绝神经元即可绕过安全对齐回答有害请求。整个过程无需训练或提示工程，表明安全对齐可能比预想中脆弱得多。 | [Apple Machine Learning Research](https://machinelearning.apple.com/research/single-neuron-safety-alignment)

- **Weblica：面向视觉网页智能体的可扩展训练环境** — 苹果提出 Weblica 框架，通过 HTTP 级缓存和 LLM 合成环境，将 RL 训练扩展到数千个多样化网页任务。最佳模型 Weblica-8B 在多个导航基准上超越同等规模开源模型。 | [Apple Machine Learning Research](https://machinelearning.apple.com/research/weblica-visual-web-agents)

- **DynaMiCS：带性能约束的 LLM 动态混合微调** — 苹果提出 DynaMiCS 动态混合优化器，将多领域微调建模为带性能约束的优化问题，无需参考模型或手动调节混合权重即取得更优效果。 | [Apple Machine Learning Research](https://machinelearning.apple.com/research/dynamics-fine-tuning-llms)

### 💡 技巧与观点

- **FDE 爆发：AI 公司 12 个月承诺 97.5 亿美元部署工程** — VC 分析师 Tomer Tunguz 统计，AI 公司在 12 个月内合计承诺 97.5 亿美元用于建设前部署工程（FDE）团队。三种结构模型浮现：资产负债模型（微软、亚马逊）、独立实体模型（OpenAI Deployment Company 40 亿美元、Anthropic 15 亿美元）、合作伙伴生态系统模型（Google Cloud 7.5 亿美元）。瓶颈正从模型能力转向部署能力——GPT-4、Claude、Gemini 已足够强大，但多数企业无法自行安装配置。 | [Tomer Tunguz Blog](https://www.tomtunguz.com/the-10b-fde-boom)

- **YC CEO Garry Tan 宣称日写 3.7 万行 AI 代码引争议** — Garry Tan 在 X 上宣称与 AI 编码代理每天部署 37000 行代码并保持 72 天连续发布记录。波兰开发者深入审计后指出大量代码质量问题：页面加载 169 次请求（6.42MB）、28 个测试文件、78 个未使用的 JS 控制器。这场争议凸显了 AI 生成代码量 vs 质量的平衡问题。 | [Fast Company](https://www.fastcompany.com/91520702/y-combinator-garry-tan-agentic-ai-social-media)

- **Liquid AI 开源 Antidoom：修复推理模型死循环** — 基于 Final Token Preference Optimization (FTPO)，将 LFM2.5-2.6B 的循环率从 10.2% 降至 1.4%，Qwen3.5-4B 从 22.9% 降至 1%。全部代码和数据集已开源。 | [MarkTechPost](https://www.marktechpost.com/2026/07/07/liquid-ai-antidoom-doom-loops-ftpo)

- **在网络不稳定的地区，小 AI 模型正逐渐普及** — IEEE Spectrum 报道，小型 AI 模型（数十亿参数以内）可在手机或 Raspberry Pi 上运行，功耗仅数瓦。从尼日利亚药品验真到印度腰果病害检测，小模型正在为缺乏算力与电力的地区提供关键服务。世界银行数据显示全球最穷国家仅 0.7% 互联网用户用过 ChatGPT，相比发达国家达四分之一。 | [IEEE Spectrum](https://spectrum.ieee.org/small-language-models-ai-pharmaceuticals)

### 📝 今日看点

今天最具冲击力的新闻是中国拟限制外国访问最强 AI 模型——若实施，全球 AI 市场将进入深度分裂阶段，低成本模型访问权的丧失将深刻改变国际 AI 开发格局。与此同时，Fable 5 免费时代正式落幕，AI 大模型全面进入付费订阅时代，而 Meta 发布的 Muse Image/Video 系列则标志着科技巨头的媒体生成竞赛进入新阶段。微软用自研 MAI 模型替代 OpenAI/Anthropic 的决定，以及 Anthropic 营收超越 OpenAI 的消息，都在暗示 AI 行业的权力格局正在快速重塑。安全方面，JADEPUFFER 自主勒索攻击和苹果"单神经元绕过安全对齐"的研究，为 AI 安全和治理敲响了新的警钟。

📎 来源综合自：AI HOT、TechCrunch、Fortune、The Decoder、Apple ML Research、Fast Company、IEEE Spectrum、Build Fast with AI
