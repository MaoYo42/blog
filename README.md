# MaoYo's Blog 🌱

个人博客，基于 [Quartz 5](https://quartz.jzhao.xyz/) 构建。

## 写作工作流

1. 在 **Obsidian** 中写草稿
2. 定稿后复制 `.md` 文件到 `content/` 目录
3. 推送到 `main` 分支 → GitHub Actions 自动构建部署

## 本地预览

```bash
npm run quartz -- build --serve
```

## 部署

推送到 `main` 分支后，GitHub Actions 自动部署到 GitHub Pages：
https://maoyo42.github.io/blog

## 内容结构

```
content/
├── index.md          ← 首页
├── about.md          ← 关于页面
└── 你的文章.md       ← 你的博客文章
```

## 后续计划

- [ ] 自定义域名
- [ ] 迁移到 Cloudflare Pages
- [ ] 评论系统
