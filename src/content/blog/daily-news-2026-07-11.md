---
title: "每日科技速递 | 2026-07-11 — AI · 科技 · 经济"
description: Apple 起诉 OpenAI 窃取商业机密，OpenAI 回应否认；Meta 撤下 Instagram AI 生成头像功能；OpenAI 安全负责人 Johannes Heidecke 离职；Claude Code 桌面版新增应用内浏览器；蚂蚁集团开源 SGLang 高性能推理框架；小红书发布 PIPO 新架构；DeepSeek-V4 Flash RL 训练登陆 AMD GPU。 
date: 2026-07-11T20:00:00+08:00
categories:
  - 资讯
tags:
  - AI
  - 科技
  - 新闻
  - 日报
  - 人工智能
  - 大模型
  - Apple
  - OpenAI
  - Meta
  - Anthropic
  - Claude
  - DeepSeek
  - 蚂蚁集团
  - 小红书
  - GitHub
  - Perplexity
  - Thinking Machines Lab
cover: https://maoyo42.github.io/blog/img/cover/4.webp
---

## 🤖 国际 AI 大模型动态

### 🧠 Apple 起诉 OpenAI 窃取商业机密 —— 硅谷最大 AI 诉讼案

**事件：** Apple 于周五向美国加州北区联邦法院提起诉讼，指控 OpenAI 窃取商业机密并违反合同。诉状称，OpenAI 高级领导层（包括首席硬件官 Tang Tan）指使前 Apple 员工在招聘过程中窃取机密信息，包括使用未发布产品的项目代号、要求应聘者携带硬件组件参加面试。Apple 还指控前高级系统电气工程师 Chang Liu 在 2026 年离职加入 OpenAI 后未归还公司笔记本电脑，并用其下载机密技术文档，包括一项专有金属精加工技术。

OpenAI 迅速回应称"对其他公司的商业机密毫无兴趣"，并否认所有指控。Apple 则进一步反击，称 OpenAI 领导层将不当行为"正常化"，其硬件业务"从根本上依赖于窃取的商业机密"。

**为什么重要：** 这可能是硅谷历史上规模最大、影响力最深远的 AI 商业机密诉讼之一。Apple 与 OpenAI 的关系在 GPT-5.6 发布后本已紧张，Apple 曾因 Siri AI 升级与 OpenAI 合作但又同时推进自研模型。此案若 Apple 胜诉，可能严重冲击 OpenAI 的硬件业务布局，并引发 AI 行业人才流动规则的根本性重塑。

🔗 https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft | https://9to5mac.com/2026/07/10/openai-responds-apple-lawsuit

---

### 🧠 OpenAI 安全负责人 Johannes Heidecke 离职

OpenAI 安全负责人 Johannes Heidecke 离开公司，Mia Glaese 将接任研究与安全副总裁。此次离职的背景是 OpenAI 正在进一步整合其研究与安全团队，将安全职能更深度地融入到模型研发流程中。在 OpenAI 持续追求 AGI 的路径上，安全负责人的更迭引发外界对公司治理和"利益优先还是安全优先"的讨论。

🔗 https://www.wired.com/story/openai-head-of-safety-leaving

---

### 🧠 Meta 撤下 Instagram AI 生成头像功能 —— 用户强烈反弹

Meta 宣布停用一项允许用户利用公开 Instagram 账户在 Meta AI 中生成图像的功能。该功能上线后遭受广泛批评，许多用户发现自己的公开照片被他人用来生成 AI 图像，引发了关于隐私、肖像权和深度伪造的担忧。Meta 表示初衷是提供"有用的创意工具"并让用户控制自己的公开内容是否被引用，但已听取反馈并决定断开该功能。

🔗 https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash

---

### 🧠 Claude Code 桌面版新增应用内浏览器

Anthropic 的 Claude Code 桌面版新增了应用内浏览器功能。Claude 可以调用文档、设计稿或任何网站，像操作本地开发服务器一样进行阅读、点击浏览和交互。该浏览器采用沙盒机制且可配置——用户可选择会话是否持久保留。同时 Claude Code v2.1.206 正式发布，新增 `/cd` 目录路径建议、`/doctor` 检查、自动 `git push` 等多项改进。

🔗 https://x.com/ClaudeDevs/status/2075635283211772279 | https://github.com/anthropics/claude-code/releases/tag/v2.1.206

---

### 🧠 Perplexity 推出跨模型信用额度分析功能

Perplexity 推出 Computer Analytics，允许用户跨模型跟踪信用额度支出。该功能现已面向个人和企业用户开放，可在账户设置中的 Analytics 下使用。这是 Perplexity 在 AI 搜索订阅服务精细化运营上的重要一步。

🔗 https://x.com/perplexity_ai/status/2075599540640714863

---

### 🧠 DeepSeek-V4 Flash RL 训练登陆 AMD Instinct MI355X GPU

LMSYS 宣布，DeepSeek-V4 Flash 的强化学习训练现已在 AMD Instinct MI355X GPU 上通过 Miles 框架获得支持，基于 ROCm 软件栈运行。该 2840 亿参数 MoE 模型（每 token 激活 130 亿参数）需 SGLang 进行 rollout 生成、Megatron 进行策略更新，Miles 负责异步循环与权重同步。团队在四个八 GPU 节点上完成端到端验证：超过 100 个优化器步骤中训练-rollout 对数概率差可控，在线奖励持续提升，离线 AIME-2024 基准分数同步上涨。

**为什么重要：** 这是 AMD GPU 生态在 AI 训练领域的重要里程碑。DeepSeek-V4 作为全球最先进的 MoE 模型之一，能在 AMD 硬件上完成 RL 训练，意味着 NVIDIA CUDA 在 AI 训练领域的垄断地位正在被打破。

🔗 https://www.lmsys.org/blog/2026-07-10-rocm-miles-dsv4

---

### 🧠 Cognition 如何信任 Claude Fable 5 通宵工作

Cognition 研究高级副总裁 Silas Alberti 透露，其 AI 软件工程师 Devin 测试了几乎所有 Claude 模型，Claude Fable 5 是首个能信任其通宵运行的模型。在 Frontier Code 最难子集上，此前 Opus 得分约 10%，Claude Fable 5 得分约 30%。关键突破在于：模型可连续工作 8 小时并取得实际进展，能正确使用内部调试工具，在混乱上下文中保持清晰思路，并主动说明未知信息以重建信任。

🔗 https://claude.com/blog/working-at-the-frontier-how-cognition-trusts-claude-fable-5-to-work-through-the-night

---

### 🧠 Thinking Machines Lab 发布使命宣言：构建延伸人类意志与判断的 AI

Thinking Machines Lab 在官方博客中阐述其使命：构建能够延伸人类意志与判断的 AI。文章指出，当前多数 AI 在少数地方训练后便冻结，无法被使用者塑造。该实验室正致力于训练具备多模态交互和可定制化能力的强模型，开发允许用户训练模型权重的工具，并构建拓宽人机沟通渠道的界面。

🔗 https://thinkingmachines.ai/blog/the-future-worth-building-is-human

---

### 🧠 GitHub Copilot 代码审查成本降低 20%：工具不是关键，指令才是

GitHub 在 Copilot 代码审查中尝试用共享代码探索工具（grep、glob、view）替换原有专用工具，结果导致审查成本上升、有效评论下降。分析后发现：问题不在工具本身，而在于指令让智能体像通用编程助手一样大范围浏览仓库，而非像审查者一样从 diff 出发定向搜索。重写指令后，平均成本降低约 20%，同时保持相同审查质量。**启示：** AI Agent 的性能提升，有时不在于更强的工具，而在于更精确的指令设计。

🔗 https://github.blog/ai-and-ml/github-copilot/better-tools-made-copilot-code-review-worse-heres-how-we-actually-improved-it

---

## 🇨🇳 国内 AI 动态

### 🇨🇳 蚂蚁集团开源高性能大模型推理框架 SGLang

蚂蚁集团通过 GitHub 新仓库 inclusionAI/sglang 正式开源 SGLang，这是一个面向大语言模型和多模态模型的高性能推理服务框架。继蚂蚁灵波系列开源模型之后，蚂蚁在 AI 基础设施层继续发力，表明从模型到推理框架的全栈开源路线。

🔗 https://github.com/inclusionAI/sglang

---

### 🇨🇳 小红书发布大模型新架构 PIPO —— 输入减半、输出翻倍

小红书提出 PIPO 架构，通过输入侧压缩器将两个 token 折叠为一个 latent，输出侧 MTP head 将隐藏状态展开为额外 token。基于 Qwen3.5-4B/9B backbone，在 AIME 2025 等基准上最高带来 +7.15 pass@4 提升。部署测评中，TTFT 加速约 1.23×，TPOT 加速约 1.86×。训练采用 SFT 和 On-Policy Distillation 两阶段。

**为什么重要：** PIPO 以极简的架构改动实现了显著的推理加速，是端侧和成本敏感场景下的高效方案。小红书的这一创新表明，国内 AI 团队在模型架构创新上正在从"追赶"走向"原创"。

🔗 https://mp.weixin.qq.com/s/1eo7rrCAH-OA0TnXwwqJEg

---

### 🇨🇳 百度搭子在成都 AI Day 发布四项更新

百度搭子在成都百度 AI Day 上发布四项更新：个人版新增浏览器调用、智能路由（平均任务耗时降 20%，Token 利用率提升 25%）、多端共享记忆及强化 PPT 生成，上架"一镜"数字人制作、"灵医"报告解读等 Skill；行业首个自媒体专业套件支持选题到复盘全链路；企业版支持团队协作与权限管理；搭子联盟启动，中国联通等已加入。上线三个月，日均提问量增长 20 倍。

🔗 https://mp.weixin.qq.com/s/Haqbjim9YGmRu1XpxG_VvA

---

## 🏭 行业与地缘动态

### 🏭 扎克伯格首度回应 Meta "算力过剩"：没人会嫌算力太多，但租出去更赚钱

Meta CEO 扎克伯格首次正面回应公司筹划云基础设施业务一事，否认"算力过剩"猜测，称内部算力需求依然旺盛、满负荷运转。但他同时表示，当前市场对算力出价极高，将部分 AI 基础设施对外出租在财务上更划算。Meta 正制定代号"Meta Compute"的云计算计划，包括开放模型访问权限和直接出租裸算力两条路线。2026 年资本支出指引达 1250 亿至 1450 亿美元，计划 2026 年 9 月量产自研 AI 芯片，目标 2027 年部署算力提升至 14 吉瓦。

🔗 https://www.ithome.com/0/975/078.htm

---

### 🏭 Theory Ventures：AI 正以每 41 天一个新模型的速度重塑风投定义

Theory Ventures 合伙人 Tomer Tunguz 发文总结 AI 带来的市场巨变。新模型每 41 天发布一次，公司达 1 亿美元收入速度创纪录。AI 压缩时间导致风投阶段定义失效，种子轮规模从 100 万到 5 亿美元不等。推理正取代模型成为 AI 主导市场，基础设施按视频、批处理、本地、智能体等负载类型专业化细分。

🔗 https://www.tomtunguz.com/three-years-in

---

## 🛠️ 产品与应用

### 🛠️ Claude Code 桌面版浏览器 + v2.1.206 更多改进

如上文所述，Claude Code 桌面版新增应用内浏览器，同时新版本支持 `/commit-push-pr` 自动 git push、`/login` 支持公共网关端点、后台智能体自动升级等。详见 Claude 部分。

---

## 📄 论文速递

### 📄 宇树 G1 人形机器人完成首例活体微创手术

一篇新发表在《自然》期刊的论文展示了宇树 G1 人形机器人执行研究人员所称的首例由人形机器人完成的活体标准微创手术。加州大学圣地亚哥团队使用 G1，以常规手术器械完成了对两只活猪的腹腔镜胆囊切除术，第二次手术耗时 32 分钟。该机器人仍需反复校正，且尚无法满足手术无菌标准，但其成本可能仅为达芬奇系统的约 5%。

**为什么重要：** 这是人形机器人在医疗手术领域迈出的第一步，虽然距离临床应用仍有距离，但其成本优势意味着一旦技术成熟，可能颠覆达芬奇手术机器人每年数十亿美元的市场格局。

🔗 https://x.com/thexpin/status/2075640168896516139

---

## 💡 行业观点与洞见

### 💡 马斯克承认 Anthropic 是当前 AI 领导者

Elon Musk 在 X 上发文承认自己此前对 Anthropic 的判断有误，称其"显然是当前 AI 领域的领导者"。他表示没有公司发布过像 Mythos/Fable 这样优秀的模型，并相信 Anthropic 很快会推出 Mythos 2。他还强调即使作为竞争对手，也不会以伤害对方的方式切断合作，并列举了特斯拉开源专利、开放超级充电网络等先例。Anthropic 自 7 月起成为 SpaceX 最大客户之一，以每月 12.5 亿美元购买 xAI 旗下 Colossus 1 数据中心全部 300 兆瓦算力。

🔗 https://x.com/rohanpaul_ai/status/2075480331600417141

---

### 💡 博科圣地系统性利用前沿 AI 技术 —— AI 安全的全新维度

一份关于尼日利亚东北部 27 名前"博科圣地"成员的半结构化访谈研究揭示了令人不安的现实：该组织在 2024 年已系统性地利用 ChatGPT、Claude、Gemini、Grok、Meta AI 和 DeepSeek 辅助作战与日常运作。AI 应用通过专门小组和内部培训实现制度化，成员成功绕过部分安全限制，将 AI 用于袭击策划、武器故障排查及爆炸装置设计。

**为什么重要：** 这不仅是 AI 安全领域的警示案例，更暴露了当前 AI 安全护栏在非英语、非传统使用场景下的薄弱环节。如何在开放性和安全性之间取得平衡，是每个 AI 公司都必须面对的问题。

🔗 https://casp.ac/reports/ai-enabled-terrorism

---

📎 **来源：** AI HOT（aihot.virxact.com）、TechCrunch、Wired、LMSYS、GitHub Blog、IT之家、Thinking Machines Lab、Reuters

📅 **发布日期：** 2026-07-11 · 第 192 天 · 封面图：`4.webp`
