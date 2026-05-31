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
- 🚀 **GitHub Actions 自动部署**

---

## 📝 写作工作流

```
Obsidian 写草稿
       ↓ 定稿后复制
src/content/blog/xxx.md
       ↓ git push
GitHub Actions → 自动构建 → 上线
```

文章使用 Markdown 编写，通过 Astro Content Collections 管理，支持 TypeScript 类型安全的前置元数据校验。

---

## 🛠️ 本地开发

```bash
pnpm install        # 安装依赖
pnpm dev            # 启动开发服务器 (http://localhost:4321)
pnpm build          # 构建生产版本
pnpm preview        # 预览构建结果
pnpm koharu         # 交互式 CLI 工具
```

---

## 🚀 部署

推送到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

### 迁移到 Cloudflare Pages

零改动，只需在 Cloudflare Dashboard 连接此仓库：
- 构建命令：`pnpm run build`
- 输出目录：`dist`

---

## 📂 项目结构

```
├── config/
│   └── site.yaml        ← 博客配置（标题/导航/社交链接等）
├── src/
│   ├── content/blog/    ← 你的文章（.md 文件）
│   ├── pages/           ← 页面（首页/关于/归档等）
│   ├── components/      ← UI 组件
│   ├── layouts/         ← 页面布局
│   ├── lib/             ← 工具函数
│   ├── i18n/            ← 国际化
│   └── styles/          ← 样式
├── public/
│   └── img/             ← 静态图片
└── astro.config.mjs     ← Astro 配置
```

---

## 📄 许可

基于 [astro-koharu](https://github.com/cosZone/astro-koharu)（AGPL-3.0），感谢 [cosine](https://blog.cosine.ren/) 的精彩主题。
