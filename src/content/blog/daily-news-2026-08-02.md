---
title: "每日科技速递 | 2026-08-02 — AI · 科技 · 经济"
description: "OpenAI 内部版 Astra 以约 2000 美元证明 10 项数学难题，附 Lean 证书；慕尼黑法院裁定 Suno 侵犯 GEMA 版权并驳回合理使用抗辩；美国会两委员会调查 DoorDash 使用月之暗面 Kimi 模型；MiniMax 宣布 H3 即将开源。"
date: 2026-08-02T20:00:00+08:00
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
  - Suno
  - MiniMax
  - 谷歌
  - 高通
  - 月之暗面
  - DoorDash
cover: https://maoyo42.github.io/blog/img/cover/5.webp
---

## 🇨🇳 国内 AI 动态

**🧠 MiniMax 宣布 H3 模型即将开源：多模态生成进入"开放"赛道** — MiniMax 在发布全能多模态生成模型 H3（支持 2K 原生立体声视频）后，紧接着宣布 H3 模型权重即将开源，以支持开源社区并加速硬件兼容。**为什么重要**：H3 是首个把"2K 分辨率 + 原生音频"打包进开源路线的国内多模态模型，开源意味着第三方可以自部署、微调并围绕它构建生态，而不是只能调用 API。**影响**：视频生成的价格体系与生态格局将被进一步改写，开源社区将获得与 Sora、Veo 正面竞争的多模态底座。 [来源](https://www.minimax.io/blog/minimax-h3)

**🏛️ 山东印发行动方案：力争 3 年内集聚万名人工智能 OPC 创新人才** — 山东省印发专项行动方案，提出力争 3 年内集聚 1 万名人工智能 OPC（Operator/操作智能体方向）创新人才，围绕智能体产业布局人才梯队与产业载体。**为什么重要**：这是省级政府首次以"万人规模"单列智能体方向人才目标，说明 Agent 产业正从企业竞赛上升为地方产业政策的主战场。**影响**：智能体相关岗位、算力集群与产业园区将获得政策与资金倾斜，山东有望成为国内 Agent 落地的又一高地。 [来源](https://aihot.virxact.com/daily/2026-08-02)

**🧮 DeepSeek-V4-Flash API 公测数据出炉：单任务成本比 GPT-5.6 Luna 低约 60%** — DeepSeek-V4-Flash 正式版 API 公测持续放量，公开数据显示其单任务推理成本较 GPT-5.6 Luna 低约 60%，叠加开源权重路线，成为性价比标杆。**为什么重要**：成本差距是开发者选型的第一驱动力，60% 的单任务价差足以让大批中小团队把默认模型切换为 DeepSeek。**影响**：推理价格的"锚点"被进一步拉低，国际大厂的定价策略将承受更大压力。 [来源](https://aihot.virxact.com/daily/2026-08-02)

**⚙️ 腾讯混元开源 AngelSpec 投机解码框架** — 腾讯混元团队开源 AngelSpec 投机解码框架，用于加速大模型推理吞吐、降低解码延迟。**为什么重要**：推理加速是模型落地成本的关键杠杆，投机解码能在不损失质量的前提下显著提升 token 生成速度。**影响**：国内推理基础设施开源组件再添一员，自部署场景的性价比继续提升。 [来源](https://aihot.virxact.com/daily/2026-08-02)

---

## 🌍 国际 AI 动态

### 🔥 头条

**🧮 OpenAI Astra 以约 2000 美元证明 10 项数学难题，全部附 Lean 证书** — OpenAI 公布内部版 Astra 模型（下一代模型家族）在数学与理论计算机科学领域解决 10 项长期未解难题，总成本约 2000 美元（按 Sol API 价格估算）。成果包括：证明非 sofic 群的存在性、推翻 Connes 刚性猜想，以及 von Neumann 代数、高维球堆积、电路复杂度等方向的突破。OpenAI 已发布全部 10 份证明，附带 Lean 4 形式化证书（使用 Lean 4.32.0 + mathlib）与 CoT 逐步推导，任何人都可机器验证，而非依赖对实验室的信任。**为什么重要**：这是"AI 做数学"从演示走向可验证产出的里程碑——Lean 证书意味着结论的正确性由机器保证，且单题成本低至约 200 美元，数学研究的边际成本被彻底改写。**影响**：纯数学与理论计算机科学的开放问题可能迎来 AI 加速破解潮，学界对"AI 合作者"的态度将从怀疑转向常态化使用。 [来源](https://www.implicator.ai/openai-astra-10-math-problems-lean-proofs/) · [Techmeme](https://www.techmeme.com/260801/p11) · [X: Greg Brockman](https://x.com/gdb/status/2083457463337287721)

**🎵 慕尼黑法院裁定 Suno 侵犯 GEMA 版权，驳回合理使用抗辩** — 德国慕尼黑地区法院裁定，AI 音乐生成器 Suno 在模型训练过程及输出结果中均侵犯版权：法院认定 Suno 3.5 与 4 版本可复现六首 GEMA 代理歌曲的原创元素，构成"记忆化"侵权，责任归于 Suno 而非使用其服务的用户；同时驳回 Suno 基于美国版权法的合理使用抗辩，并要求其披露非法所得。判决目前尚未最终生效。**为什么重要**：这是欧洲对"AI 训练即侵权"立场的又一次强确认，直接否定了"合理使用"在德国司法辖区对音乐训练数据的适用性，为全球 AI 版权诉讼提供了重要判例参照。**影响**：AI 音乐公司（乃至所有用受版权保护内容训练的生成式模型）在欧盟的合规风险显著上升，授权路线与数据溯源将成为行业标配。 [来源](https://the-decoder.com/german-court-rules-ai-music-generator-suno-violated-copyrights-rejects-fair-use-defense) · [Reuters](https://www.reuters.com/world/german-court-rules-ai-music-firm-suno-broke-copyright-rules-2026-07-31/) · [Variety](https://variety.com/2026/digital/news/suno-loses-ai-lawsuit-gema-1236825010/)

**🏛️ 美国会两委员会调查 DoorDash 使用月之暗面 Kimi 模型** — 美国众议院两个委员会对 DoorDash 发起调查，针对其部署北京月之暗面（Moonshot AI）开发的 Kimi K2.6 开源模型：DoorDash 联合创始人 Andy Fang 曾在 X 上透露公司用该模型处理低层级代码审查等 AI 工作。议员以国家安全、网络安全与经济安全为由，要求 DoorDash 在 8 月 14 日前说明使用了哪些中国模型及安全评估情况，并安排相关人员于 8 月 21 日前接受面谈。**为什么重要**：这是"中国开源模型出海"与"美国监管审查"正面碰撞的标志性事件——开源权重模型天然无国界，但企业采用时的地缘政治风险正在显性化。**影响**：美国企业部署中国开源模型将面临更严的合规审查，开源模型供应链的"国籍"议题将被摆上台面，中国模型厂商出海策略也需要重新评估。 [来源](https://www.cnbc.com/2026/07/31/us-lawmakers-doordash-chinese-ai-models.html) · [China Strategy](https://www.chinastrategy.org/2026/07/31/us-lawmakers-investigate-doordashs-use-of-moonshot-ais-kimi-k2-6-model/)

**🏭 高通完成收购 Modular：Mojo 语言并入 AI 计算版图** — 高通宣布完成对 Modular 的收购（交易最早于 6 月 24 日公布，规模约 40 亿美元）。Modular 是 AI 原生软件基础设施公司，旗下有 Mojo 编程语言、MAX 与 Modular Cloud 平台。高通将借此强化从设备、边缘到数据中心的生成式与智能体 AI 软件栈。**为什么重要**：芯片巨头吞下编译器/运行时公司，说明 AI 竞争已从"造芯片"延伸到"软硬件协同"，谁能把模型高效跑在自己的硬件上，谁就掌握生态话语权。**影响**：高通在端侧与边缘 AI 的软件能力将显著增强，Mojo 语言与 MAX 生态的开发路线值得持续关注。 [来源](https://www.qualcomm.com/news/releases/2026/07/qualcomm-completes-acquisition-of-modular) · [Reuters](https://www.reuters.com/business/qualcomm-buy-ai-startup-modular-2026-06-24/)

### 🛠️ 产品与发布

**🤖 Gemini Spark 向 160+ 国家开放，集成 Chrome 自动浏览** — 谷歌宣布 Gemini Spark 智能体向 Google AI Pro 订阅用户在超过 160 个国家/地区开放，并新增 Chrome 自动浏览集成：经用户许可，Spark 可直接在浏览器中处理订机票、填航班信息、预约看房等网页任务。**为什么重要**：从"回答问题"到"替你做事"，Spark 是谷歌智能体战略从实验室走向规模化分发的一步，160+ 国家的铺开意味着 Agent 产品开始进入大众市场。**影响**：浏览器成为智能体入口的争夺加剧，Chrome 的装机量优势可能转化为 Agent 分发优势。 [来源](https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-july-2026/)

**📺 Grok 新增视频观看与分析功能** — xAI 的 Grok 推出视频观看与分析能力，用户可直接让 Grok 理解视频内容并回答相关问题。**为什么重要**：多模态理解从"看图"延伸到"看视频"，是聊天机器人能力边界的又一次扩展，也补齐了 xAI 在视频理解侧的短板。**影响**：视频内容检索、分析与问答场景将迎来新的 AI 入口，同类产品的多模态军备竞赛继续升级。 [来源](https://aihot.virxact.com/daily/2026-08-02)

**⏰ ChatGPT Work 可处理任意周期性任务** — OpenAI 为 ChatGPT Work 增加周期性任务能力，用户可设定任意频率的自动执行任务（如每日报告、每周汇总），由 AI 按时完成。**为什么重要**：从"你问它答"走向"它替你按时干活"，周期性任务是把 AI 从工具变成生产力基座的关键功能，直接对标智能体自动化赛道。**影响**：企业知识工作者可以开始把重复性工作委托给 AI 定时执行，办公自动化体验将再上一个台阶。 [来源](https://aihot.virxact.com/daily/2026-08-02)

**📉 2026 科技行业裁员潮加剧：前 7 个月裁员已超 2025 全年，AI 投资却狂飙** — 最新统计显示，2026 年前 7 个月科技行业裁员人数已超过 2025 年全年，与此同时 AI 领域的投资与招聘持续增长，呈现"一边裁员、一边抢人"的分化格局。**为什么重要**：AI 正在重构科技行业的劳动力结构——非 AI 岗位收缩、AI 相关岗位溢价，行业性"换血"正在发生。**影响**：从业者技能转型压力加大，AI 技能成为就业市场的硬通货，监管与再培训议题将更加紧迫。 [来源](https://aihot.virxact.com/daily/2026-08-02)

**🤖 Figure F.03 自主爬梯：人形机器人突破关键一步** — Figure 人形机器人 F.03 展示自主爬楼梯能力，无需人工干预即可完成台阶攀爬。**为什么重要**：楼梯是室内环境最普遍的"非平面"障碍，自主爬梯是人形机器人从实验室走向家庭、仓储等真实场景的必备技能。**影响**：人形机器人的环境适应能力继续突破，具身智能商业落地的时间表有望提前。 [来源](https://aihot.virxact.com/daily/2026-08-02)

**💼 前 DeepMind 研究员爆料：谷歌曾在 ChatGPT 发布前一年做出类似产品却被雪藏** — 前 DeepMind 研究员蒂博（Thibault）爆料，谷歌内部曾打造与 ChatGPT 类似的产品 LMChat，时间早于 ChatGPT 发布约一年，但最终被雪藏未发布。**为什么重要**：这再次引发"大公司为何错失先机"的讨论——技术领先不等于产品领先，组织决策与风险偏好同样决定市场格局。**影响**：科技公司的内部创新流程与 AI 产品发布节奏将受到更多审视，也为"AI 时代公司为何掉队"提供了又一案例。 [来源](https://aihot.virxact.com/daily/2026-08-02)

**⚖️ 法官驳回 xAI 诉求，明尼苏达州 AI"脱衣"应用禁令如期生效** — 明尼苏达州关于 AI"脱衣"（deepfake 生成裸露图像）应用的禁令按计划生效，法院驳回 xAI（SpaceXAI）的相关诉求。**为什么重要**：深度伪造治理从"讨论"走向"执行"，司法系统开始为 AI 滥用划定明确红线。**影响**：生成式模型的滥用治理压力持续上升，各州与各国立法将加速跟进，平台内容审核责任进一步加重。 [来源](https://aihot.virxact.com/daily/2026-08-02)

---

📎 来源：AI HOT ([aihot.virxact.com](https://aihot.virxact.com/daily/2026-08-02)) · Reuters · Variety · The Decoder · CNBC · Qualcomm · Google Blog · Techmeme · OpenAI
