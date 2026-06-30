---
title: "每日科技速递 | 2026-06-30 — AI · 科技 · 经济"
description: 今日 AI 与大模型动态、科技行业新闻、经济政策要闻汇总。
date: 2026-06-30T20:00:00+08:00
categories:
  - 资讯
tags:
  - AI
  - 科技
  - 新闻
  - 日报
  - 人工智能
  - 经济
cover: https://maoyo42.github.io/blog/img/cover/5.webp
---

## 🤖 AI 大模型动态

- **美团 LongCat-2.0 旗舰模型发布** — 美团 LongCat 推出 LongCat-2.0，采用 1.6T 参数 MoE 架构（约 48B 活跃参数），原生支持 1M 上下文窗口，定价极低（Input Cache 仅 $0.015/1M tokens）。模型专为 Agentic Coding 设计，包含 LSA 稀疏注意力、Zero-Compute Experts 动态激活和 MOPD 三组专家分类三大核心技术。

- **美团 Owl Alpha 成为 OpenRouter 最流行模型** — 1.6 万亿参数 MoE 模型 Owl Alpha 累计消耗 10 万亿 tokens，性能达 Gemini/Opus 4.6 级别。该模型完全在 5 万块国产 ASIC 上训练，上线后每日调用量全球 Top 3，在 Hermes Agent 排名第一。该模型即将退役，后续版本待公布。

- **X（Twitter）推出 hosted X MCP** — X 官方发布 hosted X MCP 服务，AI 智能体可通过 MCP 协议直接调用 X API 获取实时信息，支持 Grok、Cursor 等工具。定价低至每次调用 $0.01，拉取近三天书签仅花 $0.1。

- **Claude 在 Microsoft Foundry 正式可用** — Claude 模型现已在 Azure 环境的 Microsoft Foundry 上可用，首批提供 Claude Opus 4.8 和 Claude Haiku 4.5，运行在 NVIDIA GB300 GPU 上，支持提示缓存和扩展思考。Azure Enterprise Agreement 客户可将 Claude 用量计入承诺消费。

- **Anthropic 推出 Claude apps gateway** — 一个自托管控制平面，让企业能在 Amazon Bedrock 和 Google Cloud 上运行 Claude Code。提供企业级 SSO、集中策略管理、角色权限、故障转移路由和消费上限控制，不向 Anthropic 发送推理流量。

- **Meta 发布 Brain2Qwerty v2** — 非侵入式脑电信号解码新里程碑。基于当天发表在《Nature》的 v1，v2 是性能最高的端到端管道，能从原始脑信号实时解码句子，有望帮助数百万因脑损伤无法沟通的人群。

- **Agents-A1：35B MoE 模型达到万亿参数级性能** — 研究人员提出 Agents-A1，通过扩展智能体 horizon（长轨迹与异构能力）达到万亿参数模型性能。采用三阶段训练，对比 Kimi-K2.6 和 DeepSeek-V4-pro 在多项基准上表现优异。

## 🛠️ 科技产品与行业

- **Cursor for iOS 公测版发布** — Cursor 推出 iOS 原生公测版，所有付费计划可用。开发者可在手机上启动云端智能体或远程操控电脑端智能体，支持语音输入、斜杠命令和选模型。云端智能体可在隔离虚拟机中运行并自动生成 PR。

- **OpenClaw 发布原生 iOS 与 Android 应用** — AI 智能体平台 OpenClaw 正式登陆移动端，支持频道、任务和回复随时随地处理。

- **小红书 RedKnot 推理引擎开源** — RedKnot 将 KV Cache 沿注意力头维度拆解，通过头分类稀疏、稀疏 FFN 和 SegPagedAttention 三个机制加速长文本推理。在 8 卡 H800 上 TTFT 最高加速 3.54×，单卡并发提升 7.8×。

- **EverOS：开源 Markdown 优先智能体记忆运行时** — EverMind 推出开源智能体记忆运行时，以可编辑 Markdown 文件为记忆主体，经 SQLite 管理状态、LanceDB 实现混合检索。每个完成的任务提炼为可复用 Skill，支持自进化。

- **NVIDIA Rubin Ultra 取消** — 在 GTC 2026 宣布仅 3 个月后，原 4-die Rubin Ultra 因制造执行问题被取消，新版本尺寸性能减半。

- **三星和 SK 海力士计划投资 $5900 亿扩产芯片** — 在韩国政府支持下，两家公司合计控制全球近 80% 的 HBM 市场。Jefferies 预测 2026 Q3 内存价格将上涨 40%-50%，内存涨价已推高消费电子产品成本。

- **SK 集团宣布 1000 万亿韩元 AI 数据中心计划** — SK 集团会长崔泰源宣布到 2035 年建成 15GW AI 数据中心，总投资 1000 万亿韩元（约 4.4 万亿元人民币），定位为韩国国家级基础设施。

## 📊 经济与科技政策

- **国务院印发《教育发展"十五五"规划》** — 规划要求推进人工智能全学段教育，提升学生 AI 素养，强化科技教育与人文教育协同，加大拔尖创新人才自主培养力度，目标到 2030 年高质量教育体系基本建成。

- **美军 AI 选目标误炸伊朗学校** — 美军在打击伊朗时首次大规模使用 AI 选择目标（Anthropic Claude 嵌入 Palantir Maven Smart System），首日建议约 1000 个目标，但对一所学校的导弹袭击导致约 120 名儿童死亡。调查发现情报系统数据未及时同步，引发对 AI 武器化的深刻反思。

- **OpenAI 发布欧洲 AI 劳动力报告** — 报告分析 AI 对欧盟就业的影响，划定哪些职业面临自动化、增长或工作流程变化，为政策制定提供参考。

- **AI 就业争论持续升温** — 截至 2026 年 5 月，AI 相关裁员接近 9 万个，预计未来五年美国最多 15% 的岗位将被 AI 替代。但高 AI 投入企业总员工数增长 10.2%，入门级岗位增长 12%，AI 更多成为企业扩张工具而非岗位消灭者。

## 📝 今日看点

今日 AI 圈热闹非凡：美团 LongCat 接连放出两大旗舰模型（Owl Alpha 成为全球最流行模型，LongCat-2.0 正式发布），Anthropic 加速企业级布局（Claude 登陆 Microsoft Foundry + 推出 apps gateway + Claude Code v2.1.196），Cursor 和 OpenClaw 双双登陆移动端。产业消息方面，NVIDIA Rubin Ultra 被取消、三星 SK 海力士 5900 亿美元扩产计划显示 AI 硬件竞赛持续白热化。值得警惕的是，美军 AI 选目标误炸学校的悲剧引发了对 AI 军事化应用的深度反思。
