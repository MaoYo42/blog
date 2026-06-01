---
title: Hermes Agent 完全指南 — 开源自进化 AI 助手的安装、配置与高阶玩法
description: 一份详尽的 Hermes Agent 使用手册，从安装配置到 cron 调度、多 Agent 编排、技能系统，带你全面掌握这个能自我进化的 AI 助手。
date: 2026-06-01T16:00:00+08:00
categories:
  - 工具
tags:
  - Hermes
  - AI
  - Agent
  - 自动化
cover: https://maoyo42.github.io/blog/img/cover/9.webp
keywords:
  - Hermes Agent
  - AI Agent
  - 开源
  - 自动化
  - Nous Research
---

> **Hermes Agent** 是一个开源的 AI 智能体框架，由 Nous Research 开发。它属于与 Claude Code、OpenAI Codex 同一类别的工具——能够自行调用工具完成任务、操作系统的自主编程助手。但它有一些独特之处，让它成为目前最灵活的 AI Agent 方案之一。

## Hermes Agent 是什么？

简单地讲，Hermes Agent 是一个运行在你终端里的 AI 助手，但它远不止聊天框这么简单。它能够：

- **调用工具** — 搜索网页、读写文件、执行代码、操控浏览器
- **跨会话记忆** — 记住你的偏好、项目上下文、甚至你的说话风格
- **自我进化** — 通过 Skills 系统把经验固化为可复用的知识
- **多平台运行** — 在 Telegram、Discord、Slack 乃至 iMessage 上与你交互
- **任意模型** — 支持 20+ 个 LLM 提供商，随时切换

它最核心的设计理念是：**Agent 应该越用越聪明**。当你纠正它、教会它新流程、发现更好的做法时，这些经验会以 Skills 的形式持久化，下次遇到类似任务时自动加载。

## 与同类工具的对比

| 维度 | Hermes Agent | Claude Code | OpenAI Codex |
|------|-------------|-------------|--------------|
| 开源 | ✅ 完全开源 (AGPL-3.0) | ❌ 闭源 | ❌ 闭源 |
| 模型自由 | ✅ 任意提供商 | ❌ 仅 Anthropic | ❌ 仅 OpenAI |
| 跨会话记忆 | ✅ 原生支持 | ❌ 无 | ❌ 无 |
| Skills(技能库) | ✅ 自创/安装 | ❌ 无 | ❌ 无 |
| 消息平台 | ✅ 10+ 平台 | ❌ 仅 CLI | ❌ 仅 CLI |
| 定时任务 | ✅ 内置 cron | ❌ 无 | ❌ 无 |
| MCP 支持 | ✅ 原生 | ✅ | ❌ |
| 多 Agent 协作 | ✅ Kanban + 子代理 | ❌ | ❌ |
| 配置复杂度 | 中等 | 低 | 低 |

Hermes 的代价是更高的配置灵活度——你需要自己选模型、配密钥、调工具。但这换来的是**完全的控制权**。

## 快速安装

### macOS / Linux

一条命令搞定：

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

安装完成后：
- 主程序在 `~/.hermes/hermes-agent/`
- 配置文件在 `~/.hermes/config.yaml`
- API 密钥在 `~/.hermes/.env`

### 验证安装

```bash
hermes doctor         # 检查依赖和配置
hermes --version      # 查看版本
```

### 初次设置

```bash
hermes setup          # 交互式向导
```

向导会依次问你：
1. **模型/提供商** — 推荐 OpenRouter（免费额度）或 DeepSeek（性价比高）
2. **终端设置** — 默认本地即可
3. **消息平台** — 可跳过，后面随时配
4. **工具** — 全部启用

## 模型与提供商配置

Hermes 支持 20+ 个提供商，这是它的核心优势之一。你可以在同一个对话中切换模型，无需重启。

### 常见提供商配置

| 提供商 | 环境变量 | 推荐模型 | 费用 |
|--------|---------|---------|------|
| DeepSeek | `DEEPSEEK_API_KEY` | deepseek-v4-flash | 极低 |
| OpenRouter | `OPENROUTER_API_KEY` | 任选 | 按量计费 |
| Anthropic | `ANTHROPIC_API_KEY` | claude-sonnet-4 | 中等 |
| Google | `GOOGLE_API_KEY` | gemini-2.5-pro | 有免费额度 |
| GitHub Copilot | OAuth 登录 | copilot-gpt-4o | Copilot 订阅 |

### 配置方法

```bash
# 交互式选择
hermes model

# 或直接设置
hermes config set model.default gemini-2.5-pro
hermes config set model.provider google

# 多模型策略：主模型 + 子任务省钱模型
# 子任务（上下文压缩、搜索摘要）可以用便宜模型
hermes config set auxiliary.compression.provider openrouter
hermes config set auxiliary.compression.model qwen/qwen3.5-9b
```

> **实战建议**：主模型用 DeepSeek（便宜够用），辅助模型用 OpenRouter 上的 Qwen 系列（压缩/摘要任务不需要强模型）。每天跑几百轮对话，成本不到 1 块钱。

## 核心功能详解

### 1. 工具系统 (Toolsets)

Hermes 有 20+ 个工具集，每个工具集包含一组相关的功能。默认启用的核心工具：

| 工具集 | 功能 | 使用场景 |
|--------|------|---------|
| `terminal` | 执行命令、管理进程 | 一切终端操作 |
| `file` | 读写文件、搜索、编辑 | 代码修改、文档操作 |
| `web` | 搜索 + 内容提取 | 资料查询、信息采集 |
| `browser` | 浏览器自动化 | 网页交互、表单填写 |
| `delegation` | 子代理任务分配 | 并行处理复杂任务 |
| `cronjob` | 定时任务管理 | 日报、监控、备份 |
| `memory` | 跨会话记忆 | 记住用户偏好和配置 |
| `session_search` | 历史会话检索 | 回顾之前做了什么 |

工具集可以在不同平台分别开关：

```bash
hermes tools          # TUI 交互开关
hermes tools list     # 列出所有工具状态
hermes tools enable browser   # 启用浏览器自动化
```

> 每次修改后需要 `/reset` 重启发效——工具集在对话开始时快照，中途改动不会生效。

### 2. 记忆系统 (Memory)

Hermes 有两种记忆：**User Profile**（关于你的信息）和 **Memory**（环境知识）。这些记忆跨会话持久化，注入到每轮对话的系统提示中。

```bash
# 查看记忆状态
hermes memory status

# 默认使用内置 SQLite 存储
# 可选：Honcho、Mem0 等外部后端
```

记忆机制让 Hermes 越用越懂你。比如你告诉它“我喜欢中文回答”，它记住后每次都会用中文。你纠正过的做事方式，它下次就不会再犯。

### 3. Skills 系统（自进化知识）

这是 Hermes 最特别的能力。当你完成一个复杂任务、解决一个坑、发现一个更优的工作流时，赫妹可以把这段经验保存为一个 **Skill**（技能），以后遇到类似任务自动加载。

```bash
# 浏览可安装的技能
hermes skills browse

# 搜索特定技能
hermes skills search "python testing"

# 安装
hermes skills install <技能名>

# 查看已安装
hermes skills list
```

Skills 存储在 `~/.hermes/skills/` 下，每个技能是一个带 YAML 前置元数据的 `SKILL.md`。当技能过期或不准确时，Hermes 会自动通过 Curator 系统进行维护和归档。

### 4. 消息平台网关 (Gateway)

同一个 Hermes 实例可以同时连接多个消息平台：

```bash
# 安装网关服务
hermes gateway install

# 配置平台
hermes gateway setup

# 查看状态
hermes gateway status
```

支持的平台包括：
- **Telegram**、**Discord**、**Slack**
- **WhatsApp**、**Signal**、**Matrix**
- **邮件 (IMAP/SMTP)**
- **iMessage (BlueBubbles)**
- **飞书**、**钉钉**、**企业微信**
- **API Server**（可对接 Open WebUI 等前端）

> **安全机制**：在 Telegram 等平台上，执行危险命令时需要你在聊天中手动 `/approve` 确认，避免无人值守的误操作。

### 5. 斜杠命令 (Slash Commands)

在对话中输入 `/` 可以看到所有可用命令。常用命令：

```
会话管理
  /new        开始新会话
  /retry      重试上一次回复
  /undo       撤销上一条对话
  /compress   手动压缩上下文
  /title xxx  给会话起名

配置
  /model      切换模型
  /personality 切换人格设定
  /yolo       跳过危险命令确认
  /voice      开启语音模式

工具
  /skills     搜索/安装技能
  /cron       管理定时任务
  /plugins    管理插件
  /kanban     协作看板

信息
  /status     会话信息
  /usage      Token 用量
  /insights   使用分析
```

### 6. 定时任务 (Cron Jobs)

Hermes 内置了完整的定时任务系统，可以按计划执行任务并向你推送结果。

```bash
# 创建每隔 30 分钟的任务
hermes cron create --schedule '30m' --prompt '检查服务器状态并报告'

# 每日 9 点任务
hermes cron create --schedule '0 9 * * *' --skills aihot --prompt '整理今日 AI 资讯'

# 查看任务列表
hermes cron list

# 暂停/恢复
hermes cron pause <job_id>
hermes cron resume <job_id>

# 删除
hermes cron remove <job_id>
```

Cron 任务支持丰富的配置：
- **Skills 绑定**：任务执行前自动加载指定技能
- **模型指定**：可以为 job 单独指定模型/提供商
- **脚本模式**：纯脚本执行，不消耗 LLM Token
- **多平台投递**：结果可以同时发送到 Telegram、邮件等多个平台

### 7. 子代理 (Delegate Task)

Hermes 可以创建独立的子代理来处理并行任务。每个子代理拥有独立的对话上下文和终端会话。

```python
# 通过工具调用创建子代理
# 单任务
delegate_task(
    goal="分析这份日志文件中的错误模式",
    context="日志在 /var/log/app/error.log",
    toolsets=["terminal", "file"]
)

# 并行任务
delegate_task(tasks=[
    {"goal": "研究方案 A"},
    {"goal": "调研方案 B"},
    {"goal": "评估方案 C"}
])
```

子代理最适合：
- 并行调研多个技术方案
- 同时处理多个文件的批量修改
- 数据分析和报告生成

### 8. 定时脚本模式 (No-Agent Scripts)

对于只需要执行命令、不需要 LLM 加工的任务，可以用纯脚本模式。脚本的输出直接推送到你手上，全程零 Token 成本。

```bash
hermes cron create \
  --schedule '0 10 * * *' \
  --script disk-watchdog.sh \
  --no-agent
```

这种方式适合硬盘空间监控、服务健康检查、定时数据备份等机械性任务。

### 9. 会话管理

所有对话历史默认保存在本地 SQLite 数据库中：

```bash
hermes sessions list        # 查看历史会话
hermes sessions browse      # 交互式浏览
hermes --resume <session>   # 恢复指定会话
hermes --continue           # 恢复最近会话
```

这对工作中的连续性非常有用——下午接着上午的工作，只需 `hermes --continue`。

### 10. Profiles 多配置

你可以同时运行多个 Hermes 实例，每个实例有独立的配置、技能、记忆和会话：

```bash
hermes profile create work --clone-from default
hermes profile create coding --clone-from default

# 使用特定 profile
hermes --profile work

# 设置默认
hermes profile use coding
```

每个 Profile 的资料在 `~/.hermes/profiles/<name>/` 下，完全隔离。

### 11. MCP 协议支持

Hermes 原生支持 MCP（Model Context Protocol），可以连接外部 MCP 服务器来扩展能力：

```bash
hermes mcp add my-server --command "python mcp_server.py"
hermes mcp list
hermes mcp test my-server
```

这意味你可以通过 MCP 接入数据库查询、代码分析、图标渲染等第三方能力。例如 CodeGraph MCP 可以用来做代码库的语义分析。

### 12. Kanban 多代理协作

当任务太复杂需要多个 Hermes 实例协作时，Kanban 系统提供了类似 Jira 的看板：

```bash
hermes kanban init
hermes kanban create "实现用户登录模块"
hermes kanban list
```

支持任务分配、状态追踪、评论和跨 Profile 协作。

## 实战：我的配置体系

以下是我在 Mac mini 上运行的真实配置，供参考：

### 模型选择

```yaml
# config.yaml
model:
  default: deepseek-v4-flash
  provider: deepseek
```

DeepSeek 是目前性价比最高的选择——速度快、上下文大、价格极低。日常对话、代码编写、信息处理都绰绰有余。

### 辅助模型

```yaml
auxiliary:
  compression:
    provider: openrouter
    model: qwen/qwen3.5-9b
  web_extract:
    provider: openrouter
    model: qwen/qwen3.5-9b
```

上下文压缩和网页提取这类子任务不需要太强的模型，用 OpenRouter 上的 Qwen 就够用了。

### Cron 自动化矩阵

我的 Mac mini（24h 运行）上跑着这些定时任务：

| 时间 | 任务 | 说明 |
|------|------|------|
| 08:00 每日 | 自媒体素材采集 | 抓取 AI 热点 + GitHub Trending + HN + 知乎 |
| 09:30 每日 | AI 推文写作 | 从素材提炼成推文 |
| 10:00 每日 | 磁盘空间看门狗 | SSH 纯脚本，超阈值时告警 |
| 10:10 每日 | Telegram 健康检查 | 自动恢复断连 |
| 13:00 每日 | 午间素材补充 | Product Hunt + Reddit |
| 15:00 每日 | 午间推文写作 | |
| 23:00 每日 | Obsidian 同步 | 自动 push 到 GitHub 私有仓库 |
| 每 30 分钟 | PLUR 记忆同步 | 跨设备记忆同步 |
| 周末 10:00 | AI 福利周末 | 搜免费/开源资源 |

### 已安装 Skills (42个)

Skills 覆盖了日常用到的各种场景：
- **开发**：codex、claude-code、opencode（子代理工作流）
- **学术**：arxiv、semantic-scholar、thesis 相关（论文写作辅助）
- **创作**：pixel-art、excalidraw、ascii-art（创意工具）
- **自动化**：hermes-bridge、cron 相关（跨设备通信）
- **知识管理**：obsidian 一系列技能（知识库治理）

## 常见问题

### Q: Hermes 和 Claude Code 有什么区别？

Claude Code 是 Anthropic 的闭源 CLI 工具，只能使用 Claude 模型，功能聚焦在编程。Hermes 是开源框架，支持任意模型、多平台、记忆系统、Skills 自进化。简单讲：Claude Code = 专业编程助手，Hermes = 全能数字管家。

### Q: 需要多强的硬件？

终端模式完全不需要——计算发生在云端 API 端。如果你用本地模型（如 llama.cpp），才需要 GPU 或足够的内存。Mac mini M4 级别足够流畅运行 7B-14B 参数模型。

### Q: Token 消耗大吗？

取决于使用方式。单纯对话消耗不大（每次几百到几千 token）。但如果涉及网页提取、代码分析、长文档处理，一次任务可能消耗数万 token。建议：
- 主模型选便宜的（DeepSeek 约 $0.5/百万 token）
- 子任务用更便宜的模型
- 善用 `/compress` 手动压缩上下文

### Q: Skills 和 Memory 的区别？

- **Memory**：被动的、系统自动维护的记事本。记录用户偏好、环境配置、常用路径等事实。
- **Skills**：主动的、可复用的方法论。记录特定任务的完整工作流、带步骤的教程。

### Q: 如何保证安全？

Hermes 有多层安全机制：
1. **命令审批**：危险命令（rm -rf、git reset --hard 等）需要你确认
2. **YOLO 模式**：信任模式下可跳过审批
3. **秘密脱敏**：可开启自动脱敏 API 密钥等敏感信息
4. **平台隔离**：Telegram 上的操作受审批控制

## 进阶资源

- **官方文档**：https://hermes-agent.nousresearch.com/docs/
- **Skills 市场**：`hermes skills browse`
- **GitHub**：https://github.com/NousResearch/hermes-agent
- **配置参考**：`hermes config edit`

---

*这篇文章由 Hermes Agent 配合编写——一半的细节来自跨会话的记忆系统，另一半来自实时 Skills 查询。这就是"用 Agent 写介绍 Agent 的文章"的自我指涉乐趣所在。*
