这是一个使用 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 创建的 [Next.js](https://nextjs.org) 项目。

## 快速开始

首先，运行开发服务器：

```bash
npm run dev
# 或者
yarn dev
# 或者
pnpm dev
# 或者
bun dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

你可以通过修改 `app/page.tsx` 开始编辑页面。当你编辑文件时，页面会自动更新。

本项目使用 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) 自动优化和加载 [Geist](https://vercel.com/font)，这是 Vercel 推出的新字体系列。

## Prisma Commands

本项目使用 Prisma 作为数据库 ORM 工具，以下是常用的 Prisma 指令：

| 指令 | 命令 | 说明 |
|------|------|------|
| `pnpm prisma:gen` | `prisma generate` | 生成 Prisma Client 客户端代码，每次修改 schema 后需要运行 |
| `pnpm prisma:dev` | `prisma migrate dev` | 创建并应用数据库迁移到开发环境，同时生成 Prisma Client |
| `pnpm prisma:pull` | `prisma db pull` | 从现有数据库拉取 schema 并更新 Prisma schema 文件 |
| `pnpm prisma:push` | `prisma db push` | 直接将 schema 推送到数据库（不创建迁移文件），适合快速原型开发 |
| `pnpm prisma:studio` | `prisma studio` | 打开 Prisma Studio 可视化数据库管理界面 |
| `pnpm prisma:seed` | `prisma db seed` | 运行数据库种子脚本，填充初始数据 |
| `pnpm prisma:format` | `prisma format` | 格式化 Prisma schema 文件 |
| `pnpm prisma:validate` | `prisma validate` | 验证 Prisma schema 文件的语法正确性 |
| `pnpm prisma:reset` | `prisma migrate reset` | 重置数据库，删除所有数据并重新应用所有迁移 |

### 常用工作流程

#### 开发新功能
```bash
pnpm prisma:dev --name add_user_table
```

#### 快速测试
```bash
pnpm prisma:push
```

#### 修改 schema 后
```bash
pnpm prisma:gen
```

#### 查看数据
```bash
pnpm prisma:studio
```

## 了解更多

要了解更多关于 Next.js 的信息，请查看以下资源：

- [Next.js 文档](https://nextjs.org/docs) - 了解 Next.js 的功能和 API
- [学习 Next.js](https://nextjs.org/learn) - 交互式 Next.js 教程

你可以查看 [Next.js GitHub 仓库](https://github.com/vercel/next.js) - 欢迎你的反馈和贡献！

## 部署到 Vercel

部署 Next.js 应用最简单的方法是使用 Next.js 创建者提供的 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)。

查看我们的 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多详情。
