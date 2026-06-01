# Changelog

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
- **`config/site.yaml` 分类映射** — 新增 `开源→opensource`、`资讯→news` 的 categoryMap 条目，使新管线文章的分类页正确生成
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
