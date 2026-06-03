# MaoYo's Blog 🌸

**思考 · 技术 · 生活** — 一个开发者的数字花园

基于 [Astro](https://astro.build/) 5 + [astro-koharu](https://github.com/cosZone/astro-koharu) 主题构建，部署在 GitHub Pages。

🔗 **https://maoyo42.github.io/blog/**

---

## ✨ 特性

- 🏝️ **Astro 岛屿架构** — 零 JS 默认，性能拉满
- 🌸 **萌系二次元主题** — 粉蓝配色，寒蝉全圆体
- 🔍 **Pagefind 全站搜索** — 无后端，即时搜索
- 🌓 **深色/浅色模式** — 流畅切换动画
- 📡 **RSS 订阅** — 自动生成
- 📊 **分类/标签/归档** — 自动索引
- 🤖 **自动化内容管线** — 每日福利热点 & 科技速递自动发布
- ✅ **Zod 配置校验** — 构建时自动检查 `config/site.yaml` 结构
- 🚀 **GitHub Actions CI/CD** — lint + Knip 死代码检测 + 自动部署

---

## 🤖 自动化管线

| 管线 | 时间 | 内容 |
|------|------|------|
| 📰 每日福利热点 | 每天 10:00 | GitHub Trending + V2EX + Linux.do + 福利羊毛 |
| 📡 每日科技速递 | 每天 20:00 | AI 热点 + 科技新闻 + 经济要闻 |

详见 [`CONTENT.md`](./CONTENT.md)。

---

## 📝 写作工作流

```
Obsidian / 编辑器写草稿
         ↓ 定稿后复制
src/content/blog/xxx.md
         ↓ git push
GitHub Actions → 构建 → 部署上线
```

文章使用 Markdown 编写，通过 Astro Content Collections 管理，支持 TypeScript 类型安全的前置元数据校验。  
构建时自动检查 `config/site.yaml` 配置结构（Zod schema），不匹配则报错退出。

---

## 🛠️ 本地开发

```bash
pnpm install            # 安装依赖
pnpm dev                # 启动开发服务器 (http://localhost:4321)
pnpm build              # 构建生产版本
pnpm preview            # 预览构建结果
pnpm check              # TypeScript 类型检查
pnpm lint               # Biome 代码检查
pnpm knip               # 死代码/未使用依赖检测
pnpm change             # git-cliff 自动生成 CHANGELOG
```

---

## 🚀 部署

推送到 `main` 分支后，GitHub Actions 自动运行 **Knip 检测 → 构建 → 部署** 到 GitHub Pages。

CI 工作流（`.github/workflows/deploy.yml`）：
1. `pnpm install --frozen-lockfile` — 锁定版本安装
2. `pnpm knip` — 死代码/未使用依赖检测
3. `pnpm build` — Astro 构建
4. `upload-pages-artifact` — 上传构建产物
5. `deploy-pages` — 部署到 GitHub Pages

### 迁移到 Cloudflare Pages

零改动，只需在 Cloudflare Dashboard 连接此仓库：
- 构建命令：`pnpm run build`
- 输出目录：`dist`

---

## 📂 项目结构

```
├── config/
│   └── site.yaml            ← 博客配置（标题/导航/社交链接/管线开关等）
├── src/
│   ├── content/blog/        ← 你的文章（.md 文件）
│   ├── pages/               ← 页面（首页/关于/归档等）
│   ├── components/          ← UI 组件
│   ├── layouts/             ← 页面布局
│   ├── lib/
│   │   ├── config/
│   │   │   ├── schema.ts    ← Zod 配置校验 schema
│   │   │   └── types.ts     ← TypeScript 类型定义
│   │   └── ...              ← 工具函数
│   ├── i18n/                ← 国际化
│   └── styles/              ← 样式
├── public/
│   └── img/                 ← 静态图片
├── CONTENT.md               ← 自动化管线文档
├── CHANGELOG.md             ← 全量变更记录
└── astro.config.mjs         ← Astro 配置
```

---

## ⚙️ 配置校验

`config/site.yaml` 在构建时通过 Zod schema 自动校验，结构不匹配会带详细错误信息退出：

```
[config] config/site.yaml validation failed:
  [social.rss.url] Invalid input
  [seo.robots] Invalid input: expected object, received null
```

这确保配置错误在构建阶段就被发现，不会静默吞掉功能。

---

## 📄 许可

基于 [astro-koharu](https://github.com/cosZone/astro-koharu)（AGPL-3.0），感谢 [cosine](https://blog.cosine.ren/) 的精彩主题。
