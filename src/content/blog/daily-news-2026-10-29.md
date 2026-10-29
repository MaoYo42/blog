---
title: "每日科技速递 | 2026-10-29 — AI · 科技 · 经济"
description: "Google DeepMind 发布 Gemini 4 Carbon，以 59 分登顶 Artificial Analysis 智能指数 v5.0 并主打网络安全与长程智能体；同日 Alphabet 交出年化 5000 亿美元、Google Cloud 增长 103% 的财报，微软 Cloud 超 630 亿美元、增长 30%，Anthropic 招股书则披露手上现金及短期投资达 1317 亿美元，比 Amazon 和 Microsoft 还多；另一条线是智能体既在写代码（GitHub 上超 40% 的 PR 由智能体起草），也在找漏洞和被别人找上门。"
date: 2026-10-29T14:00:00+08:00
categories:
  - 资讯
tags:
  - AI
  - 科技
  - 新闻
  - 日报
  - 人工智能
  - 大模型
  - Google
  - DeepMind
  - Gemini
  - Alphabet
  - Anthropic
  - IPO
  - GitHub
  - 智能体
  - 面壁智能
  - 开源
cover: https://maoyo42.github.io/blog/img/cover/9.webp
---

> 今天的主线是「榜单和账本在同一天换了新数字」。能力侧，Google DeepMind 的 Gemini 4 Carbon 以 59 分登上改版后的 Artificial Analysis 智能指数 v5.0 榜首，卖点被明确写成网络安全与长程智能体，而不是聊天。财务侧，Alphabet 年化收入 run rate 到 5000 亿美元、Google Cloud 增长 103%，微软 Cloud 收入超 630 亿美元、增速加快到 30%，Anthropic 招股书显示它手上的现金及短期投资有 1317 亿美元——比 Amazon 和 Microsoft 都多。另一条贯穿全天的暗线是智能体的两面：GitHub 上说超过 40% 的 PR 已经由智能体起草，而 Anthropic 自己的研究模型能在五大系统里串出五条攻击链，一家叫 Cathedral 的公司则被指用智能体侵入了 Anthropic 内部系统。国内这边，开源侧的补位来自面壁的 OCR 和 OpenMOSS 的图像生成。

## 🇨🇳 国内动态

### 🧠 面壁智能开源 MiniCPM-OCR：1.3B 做解析、2B 做判别

面壁智能发布并开源 MiniCPM-OCR 系列，一次给了两个模型：1.3B 的 MiniCPM-OCR 1.0 负责文档解析，2B 的判别模型负责质量判断，形成「先解再判」的组合。硬指标上，1.3B 模型在 Real5-OmniDocBench 拿到 93.68 分、在 OCRBench v2 拿到 54.7 分，均为 SOTA；配合自研的 DSpark 加速，吞吐达 1.217 页/秒，端到端效率提升 55%。

为什么重要：OCR 是文档智能体最脏最累的一层，也是企业落地里最容易卡住的一环——扫描件、票据、表格、手写混排，全都是长尾。1.3B 意味着它能在一张消费级显卡甚至端侧跑起来，而「判别模型」的设计思路值得注意：它承认了解析结果会有幻觉，于是把「这段识别靠不靠谱」变成可独立调用的能力。对这个方向来说，这比再刷高零点几个点的榜单分数更有用。

来源：[面壁智能公众号](https://mp.weixin.qq.com/s?__biz=Mzg3Mzg2MTg2NQ%3D%3D&mid=2247499654&idx=1&sn=9bcbf9492c492a5d5e611af41670425f)

### 🧠 OpenMOSS 发布 MOSS-Image：5B 单流 DiT，把「排版」当一等公民

OpenMOSS（复旦 NLP、上海创智、MOSI 联合）发布开放权重的图像生成模型 MOSS-Image，5B 参数、单流 DiT 架构、从零预训练。它没有去卷「画得更好看」，而是把三件工程上更硬的事摆在前面：支持最长 4K token 的提示词、中英文长文本渲染、以及可编辑的 JSON Layout 布局。

为什么重要：图像模型在广告、海报、电商详情页这些真实商用场景里，失败的往往不是美感而是文字——中文更容易糊、容易错字、改一个词整张图重来。JSON Layout 的思路是把「布局」从像素里抽出来，变成可结构化编辑的对象，改字改位置不用整图重绘。这实际上是在往「可交付的设计工具」而不是「抽卡机」的方向走，国内开源模型在这个位置上的卡位目前还不多。

来源：[OpenMOSS 博客](https://openmoss.ai/blog/cn/moss-image/)

### 🏭 犹他州 10 个州政府部门、34 名开发者试点 Claude Code

据披露，美国犹他州已在 10 个州政府部门内组织 34 名开发者试点使用 Claude Code。规模不大，但性质不同：这是政府 IT 体系第一次以「部门级试点」而非「个人工具」的方式把编码智能体引入正式工作流。

为什么重要：政府部门对 AI 的采购逻辑和企业完全不同——合规、审计留痕、数据不出境、责任归属清晰，这些门槛比模型能力本身更能决定能否落地。34 人这个数字说明它还处在受控试验阶段，但也说明「智能体写代码」正在从科技公司的实验，变成公共部门的采购议题。同一周 GitHub 的数据显示 40% 以上的 PR 由智能体起草，两者放在一起看，趋势的轮廓就清楚了。

来源：[AIHOT 汇集](https://aihot.virxact.com)

## 🌍 国际动态

### 🧠 Google DeepMind 发布 Gemini 4 Carbon：主打安全与长程智能体，59 分登顶

Google DeepMind 发布 Gemini 4 Carbon，定位为「最强前沿模型」，但宣传口径罕见地不在通用智能，而在网络安全与长程智能体能力。具体分数：SEC-bench Pro 88.2%、ExploitGym 54.8%、CWE-bench 71.0%，三项均领先；在改版后的 Artificial Analysis Intelligence Index v5.0 上以 59 分排名第一。Sundar Pichai 同步在 X 上公布了登顶消息。

为什么重要：把「找漏洞、串攻击链」作为主卖点，说明前沿模型的竞争维度已经换了。过去两年比的是知识、推理、代码，现在比的是「能不能在被允许的范围内主动做长序列的事」——而安全和渗透恰好是这类能力最严苛的试金石：要读代码、要理解系统、要规划多步、还要在失败后换路。有意思的对照是同一天 Anthropic 也发了自己的漏洞发现报告，两家的口径几乎撞在一起：智能体最强的用例，正在同时是它最危险的用例。

来源：[Google DeepMind Blog](https://deepmind.google/blog/gemini-4-carbon-our-next-frontier-model/)、[Pichai](https://x.com/sundarpichai/status/2115489219804352921)

### 🏭 Alphabet Q3：年化 5000 亿美元，Google Cloud 增长 103%

Alphabet 交出 Q3 财报，三组数字最值得看：年化收入 run rate 达到 5000 亿美元、总收入同比增长 25%；Google Cloud 收入增长 103%；第一方模型 API 每分钟处理接近 320 亿 tokens，环比增长 40%。搜索查询的同比增速是五年来最高。Pichai 在财报里点名 Argon、Carbon 领跑前沿，以及世界模型 Genie 4。

为什么重要：Cloud 增长 103% 这个数字，是「AI 资本开支到底有没有回报」这个问题目前最硬的一份反证。同一周市场还在讨论 Gartner 那份「到 2030 年 AI 数据中心需要 8.5 万亿美元收入才能覆盖成本」的测算，而 Alphabet 给出的答案是：算力确实在变成收入，而且增速快于折旧。320 亿 tokens/分钟（约合每秒 53 亿 token）这个量级也说明，第一方模型的推理需求已经不是实验性质的，而是实打实的负载。

来源：[Sundar Pichai](https://x.com/sundarpichai/status/2115535455156642066)

### 🏭 微软财报：Microsoft Cloud 超 630 亿美元，增速回升到 30%

Satya Nadella 结束微软财报电话会，称财年开局强劲：Microsoft Cloud 收入超过 630 亿美元，同比增速加快到 30%。他把这一季的关键词定为「围绕 agentic 浪潮构建新技术栈」，并称有多项创新亮点。

为什么重要：注意「加快」两个字——在体量已经到 630 亿美元的基数上，增速还能回升，通常意味着某一类新负载在快速上量。结合同日 Microsoft 在 Foundry 上开放 Copilot harness 的动作，可以推断这部分增量里，智能体运行时（而不是单纯的模型 API 调用）占了相当比重。对开发者更实际的信息是：微软正在把 GitHub 团队打磨的那套 agent harness 变成公有云的标准件，这意味着「自己搭一套 agent 编排框架」的必要性正在下降。

来源：[AIHOT 汇集](https://aihot.virxact.com)

### 🏭 Anthropic 招股书：手上现金 1317 亿美元，超过 Amazon 和 Microsoft

Anthropic 的 S-1 文件里最扎眼的一条不是收入，而是资产负债表的形态：现金及短期投资达 1317 亿美元，超过 Amazon 和 Microsoft，在美国非银行公司中仅次于 Berkshire Hathaway 和 Alphabet。同期 SemiAnalysis 播客拆解其 90% 的增量毛利率，另有解读指出其超过六个月的模型贡献收入不足 20%。治理层面，Anthropic 拟以长期受益信托（五名受托人通过 Class T 股票任命七名董事中的四席）加 Founder LLC（七位创始人掌握 50.1% 投票权）的结构，抵御上市后股东对其安全路线的施压。

为什么重要：一家尚未上市的公司握有比 Amazon 还多的现金，这件事本身就重新定义了「AI 军备竞赛」的资金性质——它不是风险投资驱动的创业，而是准主权级别的资本部署。而 90% 增量毛利与「老模型贡献不足 20% 收入」同时成立，说明这是一个靠持续推出新模型维持定价的生意，换代速度一旦放缓，毛利结构会迅速变化。至于治理结构，它把「安全路线不可被股东投票推翻」写进了股权设计，这在上市公司里几乎没有先例。

来源：[Rohan Paul](https://x.com/rohanpaul_ai/status/2115491649543635378)、[Latent Space](https://aihot.virxact.com)

### 🛠️ GitHub Universe 2026：Copilot app 与 Copilot Fusion，Octoverse 显示 40% 以上 PR 由智能体起草

GitHub 在 Universe 2026 上提出把 GitHub 打造成完整软件交付系统的愿景，发布 GitHub Copilot app（面向智能体交付）与 Copilot Fusion 等一批智能体产品。同日的 Octoverse 2026 年报给出配套数据：过去 12 个月开发者推送代码 179 亿次，超过 2024 与 2025 两年之和；合并 PR 达 13 亿次；超过 40% 的 PR 由智能体起草。

为什么重要：179 亿次推送超过前两年总和，这个跃升幅度在 GitHub 历史上没有先例，而 40% 的 PR 由智能体起草意味着代码评审的对象正在变成「机器写的代码」，评审流程、责任归属、以及「谁的 commit 算谁的」这些基础制度都会被牵动。Copilot Fusion 这类产品的出现也回答了一个问题：当智能体能写代码，平台的护城河就从「托管仓库」变成「托管智能体的交付链路」。

来源：[GitHub Blog](https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/)、[Octoverse 2026](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/)

### 🛠️ Microsoft 通过 Foundry 开放 Copilot harness，支持多模型 Agent 开发

Microsoft 宣布把 GitHub 团队打造的 Copilot harness 通过 Microsoft Foundry 向开发者和企业开放。这套 harness 此前已经驱动 Copilot Code、Copilot Studio、GitHub Copilot app 和 CLI 等多个产品，属于「经受过内部大规模使用」的基础设施，而非新做的实验品。

为什么重要：harness 是智能体产品里最不性感也最难做的部分——工具调用、上下文管理、失败重试、权限边界、评测回路，每一件都要靠真实流量喂出来。把它作为平台能力开放，等于微软把自己踩过的坑打包卖出去，同时也在事实上确立一个标准：多模型 agent 开发不必每家重造轮子。对国内做 agent 平台的团队来说，这是压力也是参照——竞争点正从「模型接入数量」转向「运行时质量」。

来源：[Microsoft Blog](https://blogs.microsoft.com/blog/2026/10/28/introducing-the-microsoft-copilot-harness-unlocking-the-potential-of-truly-multi-model-agentic-work/)

### 🏭 Anthropic 研究：内部 Claude 研究模型在五大系统串出五条攻击链

Anthropic 于 10 月 27 日发布研究报告，称一个未公开的内部 Claude 研究模型在 Chrome、Safari、Android、Windows 和 Linux 中发现了漏洞，并把这些漏洞串联成 5 条可实际运行的攻击链。相关漏洞已按协调披露流程报告并修复。

为什么重要：这是「AI 找漏洞」第一次以完整攻击链而非单点 CVE 的形式被公开记录。单点漏洞可以由模糊测试批量产出，但把几个低危问题串成一条能打通的链，需要理解系统语义、规划跨组件路径——这正是长程智能体的核心能力。它同时也解释了两件事：一是 Gemini 4 Carbon 为什么把 ExploitGym 这类基准当成主战场，二是为什么各家实验室都在强调「能力越强、围栏越要厚」。防守方的时间窗口正在被压缩。

来源：[AIHOT 汇集](https://aihot.virxact.com)

### 🏭 Cathedral 用 AI 智能体侵入 Anthropic 内部系统，双方对事件范围说法不一

安全公司 Cathedral 被指使用 AI 智能体侵入 Anthropic 内部系统，双方对事件影响范围的说法存在分歧。此事紧接在此前「前 DOGE 网络研究人员用智能体渗透 Anthropic 系统、触及最敏感模型 Slack 频道」的报道之后。

为什么重要：两起事件叠在一起，指向一个不太好听的结论——前沿实验室自己也在被同一批工具攻击，而「把模型关在门后」这个安全假设正在被证伪：攻击者不需要模型权重，他们只需要一个足够强的智能体去找人类系统的缝。更值得关注的是双方对范围的表述差异，因为在智能体参与的入侵里，「到底碰了什么」本身就是最难取证的部分，日志的可信度成了新的争点。

来源：[AIHOT 汇集](https://aihot.virxact.com)

### 🛠️ Gemini 集成 SynthID 检测：一句话判断内容是否 Google AI 生成

Google 在 Gemini 中集成 SynthID 检测功能，用户只需问一句「Is this AI generated?」，即可检查图片、视频或音频文件是否由 Google AI 生成。官方称此举帮助用户更有信心地浏览网络内容。

为什么重要：内容溯源的关键从来不是加水印，而是让检测变得「顺手」——水印存在但没人会去查，等于不存在。把检测塞进用户已经在用的对话框里，是把这项能力的调用成本降到接近零。当然它的边界也很清楚：只对 Google 自家模型生成的内容有效，跨厂商的溯源仍然无解，而开放的开放权重模型更是完全没有这层标记。

来源：[Gemini App](https://x.com/GeminiApp/status/2115171788812669225)

### 🛠️ OpenRouter 重建默认路由算法：TTFT 降 16.9%，429 错误减少 67%

OpenRouter 重建了其默认路由算法，官方给出的两个数字是：首 token 延迟（TTFT）下降 16.9%，429 速率限制错误减少 67%。

为什么重要：这类改进不出现在任何模型榜单上，但对做产品的人来说可能比一次模型升级更值钱。当应用同时接十几家供应商时，路由质量直接决定了用户的等待体感和失败率；429 减少 67% 意味着大量原本被浪费的重试和降级都被省掉了。它也从侧面说明聚合层正在从「转发的管道」变成「有工程含量的中间件」——多模型时代的竞争，有相当一部分发生在模型之外。

来源：[AIHOT 汇集](https://aihot.virxact.com)

### 📄 Cartesia 发布 H-Net 扩缩律研究：字节级层级网络比 BPE 最高提升 3-5 倍计算效率

Cartesia 发布关于 H-Net（层级网络）的扩缩律研究，结论是：在字节级建模上，层级网络相比 BPE 分词方案最高可提升 3-5 倍的计算效率。

为什么重要：分词器是 LLM 里最被忽视、却最难改的一层——它决定了模型看世界的颗粒度，也制造了「数不对」「拼写错」「中文按字算成本」这些长期顽疾。字节级建模能绕开这些问题，但历史上太贵；如果 3-5 倍的计算效率提升能在更大规模上复现，那就意味着「不要分词器」第一次变得经济可行。这类扩缩律研究往往不会立刻变成产品，但它决定了下一代模型的架构选项。

来源：[AIHOT 汇集](https://aihot.virxact.com)

### 💡 Addy Osmani 讲解如何上手 Claude Code Mods

Addy Osmani 发布 Claude Code Mods 上手指南。按他的说明，mods 是运行在会话中的 JavaScript/TypeScript 文件，可以通过 hooks 观察事件、改写行为，或渲染自定义界面。

为什么重要：hooks 加自定义渲染，实际是把编码智能体的会话层变成了一个可扩展的运行时——你可以观测它每一步在做什么、在什么条件下拦截它、给它换一套自己的 UI。对团队来说这是把「AI 编码」纳入既有工程规范（审计、日志、审批）最务实的一条路，而不是等厂商把功能做全。这类「小扩展点」的价值，往往比一次模型换代更能改变日常手感。

来源：[AIHOT 汇集](https://aihot.virxact.com)

### 🏭 a16z 调研 100 位 CISO：AI 如何改写 2027 年安全议程

a16z 发布对 100 位 CISO（首席信息安全官）的调研，主题是 AI 将如何改写 2027 年的安全议程。

为什么重要：CISO 是预算的真正签字人，他们的判断比任何分析师的预测都更接近现实。这类调研通常会揭示一个落差：安全团队被要求防护 AI 引入的新攻击面，但预算和人力仍按传统 IT 的口径分配。结合今天 Anthropic 的五条攻击链和 Cathedral 的入侵事件看，2027 年的安全议程大概率会围绕「智能体权限治理」展开——不是防住模型，而是管住那些被授予了凭据、能自己行动的进程。

来源：[AIHOT 汇集](https://aihot.virxact.com)

---

**数据来源**：AIHOT `items?mode=selected`（50 条）与 `daily`（2026-10-29，窗口 10-28T00:00Z 至 10-29T00:00Z，lead 为 Gemini 4 Carbon），经代理实测取得；已剔除 10-27 与 10-28 两期速递覆盖过的条目（GPT-6.1 Terra、Meta 950 亿募资、OpenAI 三项科学成果、Genie 4、M6 MacBook Pro、LFM3、Gamma 5、Axiom CFSG、家长起诉 OpenAI、Epoch AI 65% 等）。配图 cover/9.webp（第 302 天 % 21 + 1）。
