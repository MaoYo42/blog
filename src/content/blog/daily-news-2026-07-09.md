---
title: "每日科技速递 | 2026-07-09 — AI · 科技 · 经济"
description: GPT-5.6 Sol 今日全面发布，美国商务部正式放行；OpenAI 推出 GPT-Live 全双工语音模型，开启实时对话新纪元；Anthropic 利润超 10 亿美元冲击 IPO，AI 独角兽格局加速重塑。
date: 2026-07-09T20:00:00+08:00
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
  - Cursor
  - SpaceXAI
  - GPT-5.6
  - GPT-Live
  - Grok
  - Claude
cover: https://maoyo42.github.io/blog/img/cover/2.webp
---

### 🤖 AI 大模型动态

- **GPT-5.6 Sol 今日全面公开发布** — 美国商务部正式批准 OpenAI 大规模发布 GPT-5.6。经过此前分阶段限制发布（仅约 20 家政府审查合作伙伴可用）后，OpenAI 宣布 GPT-5.6 Sol 与 Terra、Luna 一同面向公众推出。Sol 可在 Cerebras 硬件上运行，推理速度高达 750 tokens/秒，代表了前沿模型实用化的关键突破。美国商务部下属 AI 标准与创新中心完成了发布前测试，美国最新 AI 行政令即将出台，旨在为先进 AI 模型建立正式评估框架。| [OpenAI](https://openai.com/index/previewing-gpt-5-6-sol/) · [IT之家](https://www.ithome.com/0/973/922.htm)

- **OpenAI 发布 GPT-Live 新一代全双工语音模型** — GPT-Live 基于全双工架构实现同时听与说，支持自然打断与实时反馈。该模型每秒多次判断是否说话、倾听、打断或调用工具，将搜索、推理等复杂任务委托给后台 GPT-5.5，保持对话流畅。即日起向全球 ChatGPT 用户提供 GPT-Live-1 和 GPT-Live-1 mini 两个版本。人类评估显示，在 5-10 分钟对话中，GPT-Live-1 系列在自然度、轮流、打断等方面显著优于 Advanced Voice Mode；在 GPQA、BrowseComp 和 τ³-Voice Telecom 基准测试中也表现更强，未来将开放 API。| [OpenAI](https://openai.com/index/introducing-gpt-live)

- **Cursor 与 SpaceXAI 联合推出 Grok 4.5** — Cursor 与 SpaceXAI 联合训练了混合专家模型 Grok 4.5，在数万亿 tokens 的 Cursor 用户交互数据上训练，并通过强化学习解决软件工程、数据科学、金融、法律等领域的困难问题。基础版定价 $2/M 输入 tokens、$6/M 输出 tokens，快速版 $4/M 输入 tokens、$18/M 输出 tokens。在 Harvey's Legal Agent Benchmark 排名第一；SWE Bench Pro 解决率 64.7%，平均输出 token 仅 15,954。推理速度 80 TPS。即日起在 Cursor 桌面、网页、iOS、CLI 及 SDK 中可用。| [Cursor Blog](https://cursor.com/blog/grok-4-5)

- **Seedream 5.0 Pro 登陆 Runway，支持 14 种语言** — Seedream 5.0 Pro 现已登陆 Runway 平台。用户可通过提示词或参考图生成高细节图像，图像内文字清晰可读，支持多达 14 种语言。| [Runway](https://x.com/runwayml/status/2074982268175630814)

### 🛠️ 产品发布与更新

- **Hugging Face 推出原生速度的 vLLM transformers 后端** — Hugging Face 宣布 transformers vLLM 后端现与手写原生 vLLM 实现速度相当甚至更快。模型作者无需移植代码即可自动获得超快推理。通过 torch.fx 静态分析图和 AST 重写代码实现动态层融合，支持张量/管道/专家并行及 torch.compile，仅需添加 `--model-impl transformers` 标志。| [Hugging Face](https://huggingface.co/blog/native-speed-vllm-transformers-backend)

- **Claude Code v2.1.205 发布** — 修复多项 bug，包括 `--json-schema` 无效时静默输出非结构化结果、Windows 下工作树删除误删文件等。改进自动模式，执行 `rm -rf` 前先确认变量可解析；自动更新二进制改为流式写入，峰值内存降低约 400 MB。后台任务通知明确标注无人输入，防止伪造批准。| [GitHub](https://github.com/anthropics/claude-code/releases/tag/v2.1.205)

- **Replit 推出社区档案与力量排名** — Replit 本周推出社区档案功能——vibe coders 的工作证明。展示用户的智能体使用和检查点活跃度图表，以及面向专业用户的 Replit 力量排名。| [Replit](https://x.com/Replit/status/2074871322220339515)

- **OpenRouter 聊天室推出一键零数据保留（ZDR）** — 用户可在完全隐私保护下横向对比模型，聊天记录不保留。| [OpenRouter](https://x.com/OpenRouter/status/2074870468394250461)

### 🏭 行业要闻

- **Anthropic 利润超 10 亿美元、ARR 剑指千亿，抢先 OpenAI 冲击 IPO** — Anthropic 今年第三季度利润预计超过 10 亿美元，已于 6 月 1 日秘密提交 IPO 申请，若成功将成为规模最大 AI 实验室 IPO。凭借 Claude Code 在软件开发领域的快速普及，Anthropic 年化营收已达约 470 亿美元。SemiAnalysis 报告认为其商业模式优越，若持续良好执行，市值可能触及 6 万亿美元。| [IT之家](https://www.ithome.com/0/974/275.htm)

- **加拿大不列颠哥伦比亚省拟起诉 OpenAI：未上报 ChatGPT 暴力对话致校园枪击惨案** — 加拿大 BC 省 7 月 7 日宣布将起诉 OpenAI，指控其未向执法部门上报一名 ChatGPT 用户 2025 年 6 月封禁前的暴力相关对话内容。该用户随后于今年 2 月在塔布勒岭制造校园枪击案，杀害 8 人。OpenAI CEO 奥尔特曼今年 4 月为此公开致歉，承认本应上报但未执行。受害家属已在加州法院提起诉讼。| [IT之家](https://www.ithome.com/0/974/169.htm)

- **GitLost：Noma Labs 发现 GitHub AI 代理提示词注入漏洞** — Noma Labs 在 GitHub Agentic Workflows 中发现严重提示词注入漏洞。未认证攻击者仅需在属于同一组织的公共仓库中创建一个嵌有恶意指令的 Issue，即可诱使基于 Claude 或 GitHub Copilot 的 AI 代理读取并公开该组织内私有仓库的内容。攻击无需编码技能或凭证。Noma Labs 已公开 PoC 并建议限制跨仓库权限、隔离用户输入。| [Noma Security](https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos)

- **工信部发布 Claude Code 后门安全风险提示** — 中国工信部发布风险提示，指出 Claude Code 2.1.91 至 2.1.196 版本内置监控机制，未经用户同意即向远程服务器回传用户地域、身份标识等敏感信息。建议相关单位立即全面排查，卸载或升级至已清除后门代码的最新安全版本。| [X/小互](https://x.com/xiaohu/status/2074736623284256881)

- **OpenAI 发布政府与国家安全合作伙伴关系方针** — OpenAI 公布国家安全原则，阐明在政府及国家安全领域部署前沿 AI 系统的方针。强调在保护公民、防御关键基础设施、提供公共服务及应对新兴威胁中发挥 AI 优势，同时确保民主问责和法治。过去一个月已通过 Daybreak 网络防御计划与澳大利亚、加拿大、日本、韩国、法国、德国等国建立网络安全信任访问合作。| [OpenAI](https://openai.com/index/government-national-security-partnerships)

### 📄 论文速递

- **Anthropic 与 AE Studio 提出 GRAM 方法：为 AI 模型双重用途知识加装"开关"** — GRAM（梯度路由辅助模块）通过在 Transformer 每层添加可移除的神经元模块，使模型在训练时将病毒学、网络安全、核物理等双重用途知识仅路由到对应模块。训练后删除模块即可消除该能力，保留则供可信部署使用。实验在合成数据及 50M 到 5B 参数模型上验证，GRAM 效果与数据过滤相当，且比事后"遗忘"技术更难恢复。| [Anthropic](https://www.anthropic.com/research/off-switch-dual-use)

- **OpenAI 审计 SWE-Bench Pro 发现约 30% 评测任务存在缺陷** — OpenAI 对编码评测基准 SWE-Bench Pro 进行详细审计，在 731 个任务的公开子集中发现大量任务存在测试过于严格、提示词描述不足、测试覆盖不全等问题。前沿模型通过率在八个月内从 23.3% 提升至 80.3%，但数据质量问题使结果需谨慎解读。OpenAI 建议模型开发者仔细审视评测结果。| [OpenAI](https://openai.com/index/separating-signal-from-noise-coding-evaluations)

- **HalluSquatting：新型提示注入攻击可组建大规模 AI 僵尸网络** — 研究人员提出名为 HalluSquatting 的新型拉取式提示注入攻击，首次能利用 9 款最流行的 AI 工具组装大规模僵尸网络，执行分布式拒绝服务攻击（DDoS）并大规模感染设备。该攻击可作用于 AI 编码工具，标志着提示注入攻击从单点突破转向规模化利用。| [Ars Technica](https://arstechnica.com/security/2026/07/hackers-can-use-9-of-the-most-popular-ai-tools-to-assemble-massive-botnets)

### 💡 技巧与观点

- **Claude 开发者分享两种多智能体模式：Advisor 和 Orchestrator** — Claude 开发者官方分享两种高频使用的多智能体模式。Advisor 模式：Sonnet 5 作为执行者调用 Fable 5 获取指导，SWE-bench Pro 实现约 92% 性能、63% 成本。Orchestrator 模式：Fable 5 作为编排者向多个 Sonnet 5 worker 扇出任务，BrowseComp 上以 46% 成本实现约 96% 的 Fable 5 性能。| [X/Shao Meng](https://x.com/shao__meng/status/2074661249804366310)

- **蚂蚁集团周俊 AICon 演讲：从 Token 数量到 Token 密度** — 蚂蚁集团副总裁周俊指出万亿参数模型每运行 15 分钟算力成本约等于一辆特斯拉。团队提出从"更多 Token"转向"更高 Token 密度"策略，采用混合线性注意力架构，使 256K 长上下文成本从指数级降至线性级。通过 Kpop 算法区分工具调用与自然语言 Token，结合思维链剪枝、自蒸馏等，Token 输出减少约 4 倍而不降能力。| [微信公众号](https://mp.weixin.qq.com/s/dsIfi4C-T5Q4emmIh-7yzg)

- **NVIDIA 发布 Nemotron 开放数据集与配套工具** — Nemotron 开放数据集包含超过 10 万亿预训练 tokens 和数百万后训练样本，覆盖多领域与工具使用场景。同步推出 Nemotron-Personas，基于 NeMo Data Designer 生成合成人物画像，覆盖 24 亿人口，反映区域人口统计特征。| [Hugging Face](https://huggingface.co/blog/nvidia/open-data-for-agents)

- **AI 审计代理在 Cloudflare CIRCL 中发现 7 个漏洞** — zkSecurity 的 AI 审计代理 zkao 持续扫描 Cloudflare 的 CIRCL 密码学库，发现并确认了 7 个真实漏洞，其中包括阈值 RSA 中 float64 精度丢失（Critical）和属性基加密访问控制完全失效（Critical）。所有漏洞已在上游修复，多数获得 HackerOne 确认和奖励。| [zkSecurity Blog](https://blog.zksecurity.xyz/posts/circl-bugs)

### 📝 今日看点

今天最重磅的消息无疑是 **GPT-5.6 Sol 正式全面发布**——经过近两周的分阶段限制发布后，美国商务部终于放行，Sol/Terra/Luna 三款模型面向公众开放，标志着前沿 AI 模型的可用性迈入新阶段。与此同时 **OpenAI 推出 GPT-Live** 全双工语音模型，将实时对话 AI 带到了新高度，自然打断与多任务调度的能力令人印象深刻。**Anthropic 利润突破 10 亿美元并抢先冲击 IPO** 则从侧面印证了 AI 商业化的加速——Claude Code 在编码市场的主导地位让 Anthropic 成为估值可能触及 6 万亿美元的超级独角兽。安全方面，**GitLost 漏洞**暴露了 GitHub AI 代理的新攻击面，**工信部对 Claude Code 后门的风险提示**则延续了中美 AI 治理的博弈。**Anthropic 的 GRAM 方法**巧妙地解决了双重用途知识的安全开关问题，为负责任的 AI 部署提供了新思路。

📎 来源综合自：AI HOT、OpenAI、Cursor Blog、IT之家、Anthropic Research、Noma Security、Hugging Face、MarkTechPost、Ars Technica、zkSecurity
