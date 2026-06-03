# Content Pipeline Documentation

本博客有两条自动化内容管线，每天自动抓取、生成、提交并部署。

---

## 管线总览

| 管线 | 定时 | 内容来源 | 输出文件 |
|------|------|----------|----------|
| 每日福利热点 | 每天 10:00 (CST) | GitHub Trending + V2EX 热门 + Linux.do 热门 + 福利羊毛 | `src/content/blog/daily-trending-YYYY-MM-DD.md` |
| 每日科技速递 | 每天 20:00 (CST) | AI 热点 + 科技新闻 + 经济要闻 | `src/content/blog/daily-news-YYYY-MM-DD.md` |

---

## 触发机制

管线由 **外部自动化系统**（非本仓库的 GitHub Actions cron）定时触发。

工作流：

```
定时器触发
  ↓
数据采集（GitHub Trending / V2EX / Linux.do / 新闻源）
  ↓
AI 摘要生成（调用 LLM 整理内容）
  ↓
写入 Markdown 文件到 src/content/blog/
  ↓
git commit + git push（提交变更到 main 分支）
  ↓
GitHub Actions deploy.yml 自动构建并部署到 GitHub Pages
  ↓
Telegram Bot 发送通知（含文章链接）
```

---

## 手动触发

如果需要在非定时时间手动发布：

1. 创建或修改 `src/content/blog/daily-trending-YYYY-MM-DD.md`（福利热点）或 `src/content/blog/daily-news-YYYY-MM-DD.md`（科技速递）
2. 确保 frontmatter 格式正确：
   ```yaml
   ---
   title: "今日开源热点与福利 | YYYY-MM-DD"
   description: "..."
   date: YYYY-MM-DDT10:00:00+08:00
   categories:
     - 开源       # 福利热点
     - 资讯       # 科技速递
   tags:
     - GitHub
     - 每日
   cover: https://maoyo42.github.io/blog/img/cover/1.webp
   ---
   ```
3. 更新 `CHANGELOG.md` 记录内容变更
4. commit 并 push：
   ```bash
   git add src/content/blog/ CHANGELOG.md
   git commit -m "chore: 每日福利热点 YYYY-MM-DD 发布"
   git push
   ```

push 到 `main` 分支后，GitHub Actions 会自动构建并部署。

---

## 文章格式规范

- **文件路径**：`src/content/blog/daily-trending-YYYY-MM-DD.md` 或 `src/content/blog/daily-news-YYYY-MM-DD.md`
- **日期格式**：使用 `YYYY-MM-DDTHH:mm:ss+08:00` 含时区
- **分类**：
  - 福利热点 → `categories: [开源]`
  - 科技速递 → `categories: [资讯]`
- **封面图**：默认使用 `/img/cover/1.webp`，可替换为其他封面

---

## 常见问题

**Q: 内容管线脚本在哪里？**
A: 管线触发和内容生成由外部自动化系统管理，不在本仓库中。本仓库只接收生成的 Markdown 文件。

**Q: 构建失败怎么办？**
A: 检查 frontmatter 格式、分类名称是否在 `config/site.yaml` 的 `categoryMap` 中有对应映射，以及标题/描述是否包含特殊字符。

**Q: 如何调整发布时间？**
A: 外部定时器的调度由自动化系统控制，修改 cron 表达式需在外部系统中进行。
