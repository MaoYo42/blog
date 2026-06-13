## 2026-06-12

### 内容
- **每日福利热点 | 2026-06-12** — GitHub（apple/container、addyosmani/agent-skills、NVIDIA/SkillSpector、kenn-io/agentsview、hexo-ai/sia 等 12 个项目）/ V2EX 热门（币安 C2C 反诈联系、llama.cpp 重大 bug、vibe coding 依赖症、Claude Code 自写年度报告等 7 条）/ Linux.do 热点（bohe 公益抽奖、Qwen 新模型发布、付费文合集等 4 条）/ 福利汇总（ChatGPT Pro + Claude Max 开源维护者免费申请、17 个免费 LLM API、30+ 免费大模型平台、免费云服务器试用）
- **每日科技速递 | 2026-06-12** — AI 模型动态（Midjourney V8.1 默认 / Gemini Omni Flash SOTA / MiniMax MSA 稀疏注意力 / DeepSeek-R1 开源复现 / 腾讯混元 HPC-Ops 开源 / 阿里云 Meoo CLI）/ 科技行业新闻（SpaceX 史上最大 IPO 上市 / Prometheus $120 亿融资 / Anthropic-DXC 全球联盟 / 苹果 iOS 27 健康大改 / 全自主无人机首次实战攻击 / Cursor Auto-review）/ 经济政策（纽约 7 项 AI 法案 / OpenAI 降价信号 / Anthropic CEO 岗位流失警告 / 中国官媒呼吁保护 AI 时代劳工权益 / Deezer 跨平台 AI 音乐检测）

## 2026-06-11

### 内容
- **每日科技速递 | 2026-06-11** — AI 模型动态（DiffusionGemma 开源 4x 速度 / Midjourney V8.1 默认 / Grok Voice / 摩尔线程 MusaCoder / GPT-Rosalind）/ 科技产品与行业（小米 MiMo Code 开源 / 华为 CloudRobo 具身 AI / Cursor Bugbot 更新 / 火山引擎版权平台 / Anthropic 350 亿美元芯片租赁 / OpenAI-Oracle 合作 / Replit Package Firewall / Magnetar AI 替代分析师）/ 经济与政策（德国法院判 Google AI 幻觉担责 / Anthropic 安全研究 / 欧盟令 Meta 开放 WhatsApp / 白宫 AI 行政令 / EU AI 法案更新 / 工信部实施意见 / AI 就业焦虑社会反响）

## 2026-06-09

### 内容
- **每日福利热点 | 2026-06-09** — GitHub（last30days-skill 3,558⭐、turbovec 1,729⭐、supervision 1,288⭐、Agent-Reach 679⭐、tolaria 651⭐、ChinaTextbook 592⭐、google/skills 461⭐、CopilotKit 378⭐）/ V2EX 热门（iOS 27 史诗级更新、AI 实战讨论、淘宝20周年、顺丰AI笑话等7条）/ Linux.do 热点（站长被人作局、副业上岸板块、公益签到解释、NotebookLM更新、Vibe coding展示、小米模型额度等8条）/ 福利汇总（腾讯云3月免费、GLM-4-Flash永久免费、火山引擎每日200万Tokens、30+平台API免费额度、Leonardo API 额度）
- **每日科技速递 | 2026-06-09** — AI 模型动态（Apple AFM 第三代 / 小米 UltraSpeed 1000 tokens/s / NVIDIA Nemotron 3 Ultra / VoxCPM2 开源 / 高德 ABot-Earth0.5）/ 科技产品与行业（OpenAI IPO 秘密提交 / Apple WWDC Siri AI / SpaceX 轨道 AI 数据中心 / Runway Aleph 2.0 / ChatGPT 图表 / NotebookLM 升级）/ 经济与政策（美国 AI 法案草案 / 特朗普 AI 行政令 / 黄仁勋缺席听证会 / 中国人形机器人政策）

## 2026-06-08

### 内容
- **每日福利热点 | 2026-06-08** — GitHub（Skylight、Goose、JoyAI-Echo 等 8 个项目）/ V2EX 热门（微信多开、国产显卡部署、IT 行业焦虑等 6 条）/ Linux.do 热点（关闭公开注册、PPT Agent、服务器压力等 6 条）/ 福利汇总（腾讯云 618、免费 LLM API、免费节点等）
- **每日科技速递 | 2026-06-08** — AI 模型动态（ChatGPT 超级应用、Microsoft MAI-Thinking-1、Harness-1）/ 科技行业（WWDC 2026 开幕、NVIDIA RTX Spark 韩国发布、SpaceX IPO）/ 经济与政策（Trump AI 行政令、EU AI Act 倒计时）

## 2026-06-07

### 新增
- **每日福利热点 2026-06-07（手动补发）** — cron 因 Hermes PluginManager bug 挂起，手动采集 + 撰写 + 部署
  - GitHub Trending 热门项目（Agent-Reach、open-notebook、MemPalace 等 10 个）
  - V2EX 今日热议话题 10 条
  - Linux.do 热门话题 10 条（含社区风气帖、高考热议、公益站 Grok 免费号）
  - 今日福利羊毛汇总（Grok 免费号、免费节点、大模型 API 免费额度、阿里云券包、腾讯云 618）
  - 文章位置：src/content/blog/daily-trending-2026-06-07.md

## [Unreleased]

### Fixed
- 替换 logo 为真透明版（来自原始 LOGO透明底.png）
# Changelog

## 2026-06-02

### 全量更新：依赖升级 + 配置增强 + 构建验证
- **依赖升级** — 升级 16 个过时包（react 19.2.1→19.2.6、tailwindcss 4.1.17→4.3.0、biome 2.3.10→2.4.16 等），锁 Astro 5.x 防止 breaking change
- **pnpm 配置迁移** — `pnpm.onlyBuiltDependencies` 从 package.json 迁移到 .npmrc，消除 pnpm 11 警告
- **SEO 增强** — 站点描述 +12 个关键词（AI Agent / Minecraft / Obsidian / 知识管理 / 自动化 等）
- **社交配置** — 新增 Twitter/X 占位注释，方便后续激活
- **构建验证** — 47 pages 构建成功，10.32s

## 2026-06-01

### 站点美化与清理
- **about 页面** — 全面更新：研0过渡期描述、新项目（QuantMind、博客管线）、知识库数据修正、博客自动化写作流程说明
- **友链清理** — 移除 3 个示例友链，仅保留真实友链
- **分类卡片** — 首页新增「开源」和「资讯」精选分类入口
- **配置清理** — 移除 Twikoo placeholder URL、禁用 Umami 占位配置、精简 comment 区块
- **旧 cron 管线清理** — 停用 5 条废弃的旧自媒体管线（素材采集/写作 早晚间）

### 新增
- **新增每日福利热点管线**（10:00 自动发布）
  - 采集源：GitHub Trending + V2EX 热门 + Linux.do 热门 + 福利羊毛
  - 自动写入 `src/content/blog/daily-trending-YYYY-MM-DD.md`
  - 自动 git commit + push 部署
  - Telegram 通知带链接
- **新增每日AI科技新闻管线**（20:00 自动发布）
  - 采集源：AI 热点（aihot skill）+ 科技新闻 + 经济要闻
  - 自动写入 `src/content/blog/daily-news-YYYY-MM-DD.md`
  - 自动 git commit + push 部署
  - Telegram 通知带链接
- 新建 `CHANGELOG.md`，记录项目变更历史

### 修复
- **文章列表页链接双重 /blog 导致 404** — `routeBuilder` 和 `localizedPath` 两端都拼接了 `BASE_URL`，修复：`routeBuilder` 不再拼接 BASE_URL，由 `localizedPath` 统一处理
- **`config/site.yaml` 分类映射** — 新增 `开源→opensource`、`资讯→news` 的 categoryMap 条目
- **文章封面字段** (`hello-world.md`) — 将 `image:` 改为 `cover:`，符合主题 schema
- **随机文章组件 base path** — 在 `PostRandomPosts` 组件中为链接加 `/blog` 前缀，解决客户端渲染跳转 404

### 恢复
- **三个被删除页面** — 从原版主题恢复 `friends.astro`、`bangumi.astro`、`music.md`，修复 Header logo 链接为 BASE_URL

### 内容
- **Hermes Agent 完全指南** — 发布长文介绍 Hermes Agent 安装配置与高阶玩法
- **Minecraft on Mac 指南** — Apple Silicon Mac 上游玩 Minecraft 全方位指南
- **Obsidian 知识库治理** — 从 2000 条 Twitter 收藏到结构化知识库的实战

---


### 内容
- **每日科技速递 | 2026-06-01** — AI 大模型动态 / 科技行业新闻 / 经济政策要闻
## 2026-05-31

### 修复
- **`config/site.yaml` 头像 base path** — 修复精选分类封面图和头像的路径前缀
- **`localizedPath` 函数** — 拼接 `import.meta.env.BASE_URL`，解决子路径 `/blog` 下所有客户端路由链接的 404 问题

### 项目初始化
- 克隆自 `MaoYo42/blog`（Arch 端已有 5 commit）
- 安装 pnpm 依赖（首次 onnxruntime-node 下载失败后重试成功）
- 配置 Astro 5 + astro-koharu 主题 + Tailwind CSS
- 配置 base: '/blog' 子路径部署

## 2026-06-02

### 内容
- **每日福利热点 | 2026-06-02** — GitHub Trending（MoneyPrinterTurbo、TradingAgents、markitdown 等 17 个项目）/ V2EX 热门（macOS 26 升级、QQ 邮箱回收、Qwen 3.7 Plus 等）/ 福利汇总（Claude 开源计划免费、Google Cloud $300 赠金、BazaarLink 免费 LLM API）
- **每日科技速递 | 2026-06-02** — MiniMax M3 开源超越 GPT-5.5 / Anthropic IPO 正式启动 / xAI Composer 2.5 / NVIDIA Cosmos 3 / Computex 2026 台北开幕 / Alphabet 800 亿美元 AI 支出

## 2026-06-03

### 内容
- **每日福利热点 | 2026-06-03** — GitHub Trending（markitdown 3,618⭐、hermes-webui 1,722⭐、headroom 1,265⭐、Scrapling 1,182⭐、VoxCPM 783⭐、supermemory 680⭐）/ V2EX 热门（Codex 二次验证、裁员感想、OpenAI 风控警告、Brivionix 内测）/ Linux.do 热点（OpenAI 开源维护者 6 月免费 Codex Pro、GLM5 上线、CCG v3.1.0）/ 福利汇总（OpenAI 开源维护者福利、Veo AI Free、TRAE AI 编程、zerostack、Beart AI 换脸）
- **每日科技速递 | 2026-06-03** — AI 模型动态（微软 MAI-Thinking-1 推理模型 / 阶跃星辰 Step 3.7 Flash / Holo3.1 计算机使用智能体）/ 科技行业新闻（Anthropic 提交 IPO / Alphabet 800 亿融资 / ChatGPT 月活破 10 亿 / 特朗普 AI 行政令）/ 经济政策要闻

## 2026-06-04

### 内容
- **每日福利热点 | 2026-06-04** — GitHub Trending（odysseus 44K⭐、WechatOnCloud、goose、aBaiAutoplus、美股指南、skylight、memory-os、tab-labeler）/ V2EX 热门（断牛奶免疫力、Codex 周中刷新、AI Token 用量 34亿、机器人留言攻击）/ Linux.do 热点（抽奖帖优化、秘密花园邀请函、社区戾气讨论、熬夜戒断）/ 福利汇总（2026 免费大模型 API 大盘点、NVIDIA NIM 免费无限调用、免费 GPT API Key 汇总）
- **每日科技速递 | 2026-06-04** — AI 模型动态（Grok Imagine 1.5 / MiniMax M3 加速 / Miso One 开源语音 / Ideogram v4.0 / NVIDIA CVPR 2026）/ 科技行业新闻（Meta WhatsApp AI Agent / xAI Grok 语音上 Vapi / NVIDIA RTX Spark / 微软OpenAI分道扬镳 / DeepSeek 融 500 亿 / Suno 4 亿美元融资 / 欧盟技术主权）/ 经济政策要闻（特朗普 AI 行政令 / OpenAI 与白宫分歧 / NVIDIA PC 芯片挑战 Intel AMD）

## 2026-06-05

### 内容
- **每日科技速递 | 2026-06-05** — AI 模型动态（NVIDIA Nemotron 3.5/3 Ultra/3.5 ASR 系列 / Nex-N2-Pro 397B 达 GPT-5.5 / Google MRT2 实时音乐 / OpenAI RSI 信号 / DeepSeek 连冠 Token 榜 / Higgs Audio v3 TTS / OpenJarvis 本地智能体框架）/ 科技行业新闻（Replit×Shopify 快速建店 / ChatGPT Dreaming 记忆 / Gemini macOS 快捷窗口 / Cloudflare 机器人流量 57.5% 首超人类 / 台积电 AI 产能压力 / 联合国 AI 数据中心环境报告）/ 论文研究（Google PHRM 被动心率监测 / Nemotron 任务种子 SDG / PPISP 光度补偿 3D 重建）
- **每日福利热点 | 2026-06-05** — GitHub Trending（headroom 12,631⭐、ECC 207,304⭐、hermes-agent 181,082⭐、PaddleOCR、Open-LLM-VTuber、NVIDIA/cosmos、trivy、coding-interview-university）/ V2EX 热门（纯吐槽公司技术团队、失业家庭矛盾、35岁被裁、赛博朋克 vs 原子之心、Gemma4 12B 显存优化）/ Linux.do 热点（NSA 利用 Mythos 网络攻击、免费 VPS 羊毛、DeepSeek V4 Pro 前端痛点、淘宝百亿补贴陷阱、世界杯冀冠讨论）/ 福利汇总（GitHub Copilot SDK 发布、免费 VPS 汇总、MCP Server 生态、Fiat24 海外支付教程）


## 2026-06-07

### 内容
- **每日福利热点 | 2026-06-07** — GitHub（open-notebook 794⭐、Agent-Reach 683⭐、CopilotKit 631⭐、MemPalace 446⭐、last30days-skill 439⭐、PaddleOCR、VibeVoice、openai/plugins）/ V2EX 热门（iPhone Air vs iPhone 17、PDD翻车、景区门票、Surge vs Loon、固定IP VPS）/ Linux.do 热点（OpenAI 封号Bug反转、夏日游戏节、GLADOS抽奖、AI+科研板块、高考祝福）/ 福利汇总（Steam Pico Park免费、GLaDOS抽奖、30+平台免费AI API、腾讯云618 VPS、Google Cloud免费AI工具）

## 2026-06-06

### 内容
- **每日福利热点 | 2026-06-06** — GitHub Trending（odysseus 55,864⭐、OpenLogi 4,017⭐、美股指南 3,238⭐、Anthropic 安全工具 3,177⭐、PilotDeck 3,014⭐、social-card-skill 2,959⭐、gsd-core 2,844⭐、goose 2,120⭐）/ V2EX 热门（AI 编程真实体验、Codex 封号统计、OpenAI 解封讨论、鸿蒙 Bark/Shark 适配）/ Linux.do 热点（秘密花园邀请函、社区关闭注册、最强 PPT Agent、BettaFish 获三千万投资、域名云服务器教程）/ 福利汇总（30+ 免费 AI API 大盘点、免费 VPN 节点更新、免费 VPS 清单、GitHub Copilot SDK 发布）
- **每日科技速递 | 2026-06-06** — AI 模型动态（Anthropic Mythos 脱离控制警告 / Google Gemma 4 / Riverflow 2.5 图像模型）/ 科技行业新闻（Apollo 350 亿美元 Anthropic 芯片融资 / SpaceX-Google 110 亿美元云协议 / Google Colab CLI / Meta 人脸识别争议）/ 论文研究（PixelDiT CVPR 最佳论文 / Agent Arena 排行榜）/ 经济政策（AI 基建 GDP 翻倍 / 纳斯达克大跌 / Anthropic 秘密 IPO / 特朗普 AI 行政令）


## 2026-06-07

### 内容
- **每日科技速递 | 2026-06-07** — AI 模型动态（OpenCV 5 发布 / GitHub Spec Kit 开源 / MiniMax M3 代码审计 / GPT-5.5 vs Opus 4.8 设计对比 / YC Paxel 发布 / Harness Codex 实践）/ 科技行业新闻（谷歌每月 9.2 亿美元租 SpaceX 算力 / 美国 AI 联邦监管法案 / ResNet 获 CVPR 2026 时间检验奖 / 海螺 AI 上影节 / Persona Atlas / Job Searcher）/ 经济政策要闻（EU AI Act 倒计时 / 美国各州 AI 立法加速 / 全球 AI 监管格局）

## 2026-06-10

### 内容
- **每日科技速递 | 2026-06-10** — AI 模型动态（Claude Fable 5/Mythos 5 发布 / Google Gemma 4 12B / 小米 MiMo UltraSpeed 突破 1000t/s / Cohere North Mini Code）/ 科技产品与行业（Apple WWDC Siri AI / OpenAI 秘密 IPO / Cursor 伦敦总部 / Claude Managed Agents / OpenRouter Advisor）/ 经济政策（SpaceX 轨道 AI 数据中心 / Apollo 350亿 AI 融资 / 中国 2950亿 AI 基建 / 德国 AI Overviews 责任裁决 / 台湾 AI 芯片出口限制 / 新能源渗透率 62.9%）
- **每日福利热点 | 2026-06-10** — GitHub（last30days-skill 37K⭐今日+3,191、turbovec 10K⭐、supervision 43K⭐、opencv 88K⭐、tolaria 14K⭐、goose 48K⭐、career-ops 51K⭐、ChinaTextbook 73K⭐）/ V2EX 热门（电车香、Claude Fable 5测评、macOS 27问题、微信支付优惠、免费IP兑换码）/ Linux.do 热点（火山引擎 Coding Plan降价至¥9.9、8000万token写小说、Codex营销分析、Qoder免费模型API转换）/ 福利汇总（Google Cloud $300赠金、免费AI工具Claude/Perplexity/NotebookLM、Nano Banana 2免费4K图像、免费节点订阅）

## 2026-06-11

### 内容
- **每日福利热点 | 2026-06-11** — GitHub（apple/container 1,611⭐、last30days-skill 2,535⭐、superpowers 1,104⭐、MoneyPrinterTurbo 1,389⭐、agent-skills 821⭐、supervision 695⭐、tolaria 612⭐、maigret 318⭐）/ V2EX 热门（赛博AI中转送$50、金价885、免费法兰西域名、土区GPT Plus调价、tvOS App、视频日记App）/ Linux.do 热点（Macaron-V1-Preview 749B参数超越GPT-5.4、KernelUNO Arduino微型OS、GLM Coding Plan体验卡）/ 福利汇总（Agnes AI 模型API无限期免费、aifreeforever 1000+免费AI工具、Nano Banana免费图像生成、Aiarty Image Matting限免）

## 2026-06-13

### 内容
- **每日科技速递 | 2026-06-13** — AI 模型动态（Anthropic Fable 5/Mythos 5 被美政府强制下线 / MiniMax M3 开源 428B 权重模型 / Kimi K2.7-Code 发布 / OpenAI 遭多州总检察长调查）/ 科技行业新闻（SpaceX 史上最大 IPO 上市涨 19% / 字节豆包任务模式上线 / 苹果 iOS 27 健康 App 大改 / TCS 与 Anthropic 合作 / EngineAI 递表港交所）/ 经济政策要闻（美国 AI 出口管制升级 / OpenAI 跨州调查 / SpaceX IPO 重塑科技资本市场）
- **每日福利热点 | 2026-06-13** — GitHub（superpowers 226K⭐、agency-agents 112K⭐、agent-skills🔥、PowerToys 134K⭐、LMCache 8.6K⭐、mattermost 37.6K⭐、apple/container 35.2K⭐、tolaria 15.8K⭐）/ V2EX 热门（房贷压力、AI中医自诊、买房vs租房、币安C2C反诈、$1美元美国手机号）/ Linux.do 热点（Agent ALE评测全军覆没、DigitalOcean学分7月到期、Agent岗位面试题、Openterm SSH工具）/ 福利汇总（DigitalOcean学分7/31到期提醒、$1美元美国手机号、24+免费AI工具合集、1000+免费AI工具目录）
