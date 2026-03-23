我来打开这个文档，为你详细解读 pnpm 工作空间（Workspaces）的概念和使用方法。
好的，我来用通俗易懂的方式为你解释 pnpm 工作空间（Workspaces）的概念和使用方法。

## 🏢 什么是工作空间？（一句话理解）

**工作空间 = 一个仓库里管理多个项目**

想象你有一个大文件夹，里面装着好几个相关的 Node.js 项目（比如一个前端页面、一个后端 API、一个工具库），pnpm 的工作空间功能让你可以用一条命令管理它们，而不是每个项目单独打开终端操作。


---

## 📁 核心文件：`pnpm-workspace.yaml`

要使用工作空间，**必须在根目录创建这个文件**：

```yaml
# pnpm-workspace.yaml
packages:
  - 'packages/*'      # packages 目录下的所有子目录
  - 'apps/*'          # apps 目录下的所有子目录
  - 'components/**'   # components 及其子目录下的所有包
```

**作用**：告诉 pnpm "这些文件夹里的项目都属于这个工作空间"。


---

## 🔗 核心概念：`workspace:` 协议

这是 pnpm 工作空间最厉害的功能！用来**在工作空间内部引用其他包**。

### 为什么需要它？

假设你有两个包：

- `packages/utils`（工具库，版本 1.0.0）
- `apps/web`（前端应用，需要用到 utils）

**传统做法的问题**：

- 如果写 `"utils": "^1.0.0"`，pnpm 可能去 npm 仓库下载，而不是用本地的
- 版本号变了还要手动改，很麻烦

**用** `workspace:` 协议：

```json
// apps/web/package.json
{
  "dependencies": {
    "utils": "workspace:*",     // 始终使用本地最新版本
    "utils": "workspace:^",     // 发布时变成 ^1.0.0
    "utils": "workspace:~"      // 发布时变成 ~1.0.0
  }
}
```

### 发布时会自动转换！

当你发布 `apps/web` 到 npm 时，pnpm 会自动把 `workspace:*` 换成真实的版本号：

```json
// 发布前
"utils": "workspace:*"

// 发布后（假设 utils 是 1.5.0）
"utils": "1.5.0"
```

这样用户安装你的包时，就能正常从 npm 下载依赖了。


---

## 🛠️ 常用命令

```bash
# 给工作空间中的某个包安装依赖
pnpm --filter utils add lodash

# 运行某个包的脚本
pnpm --filter web dev

# 运行所有包的测试
pnpm -r test

# 给所有包安装依赖（在根目录执行）
pnpm install
```


---

## ⚙️ 重要配置选项

### 1. `linkWorkspacePackages`（默认 false）

- `true`：本地包自动链接，不用写 `workspace:` 也能链接
- `false`：必须用 `workspace:` 协议才会链接本地包

**建议保持 false**，这样更明确、不容易出错。

### 2. `sharedWorkspaceLockfile`（默认 true）

- 所有包共用一个 `pnpm-lock.yaml` 文件（在根目录）
- **好处**：安装更快、依赖去重、审查方便

### 3. `saveWorkspaceProtocol`（默认 rolling）

控制运行 `pnpm add` 时如何保存依赖：

- `rolling` → `workspace:*`（推荐，总是用最新本地版本）
- `true` → `workspace:1.0.0`（固定版本）
- `false` → `1.0.0`（不用 workspace 协议）


---

## ⚠️ 常见问题：循环依赖

如果 A 依赖 B，B 又依赖 A，pnpm 会警告：

```text
There are cyclic workspace dependencies
```

**解决办法**：检查 `dependencies`、`devDependencies`、`optionalDependencies`，打破循环。


---

## 🌰 实际例子

假设你的项目结构：

```text
my-project/
├── pnpm-workspace.yaml
├── package.json
├── apps/
│   ├── web/          # 前端应用
│   └── admin/        # 管理后台
└── packages/
    ├── ui/           # UI 组件库
    └── utils/        # 工具函数
```

**pnpm-workspace.yaml**：

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

**apps/web/package.json**：

```json
{
  "dependencies": {
    "@my/ui": "workspace:*",
    "@my/utils": "workspace:*"
  }
}
```

这样开发时，修改 `packages/ui` 的代码，`apps/web` 会立即生效，不需要发布到 npm！


---

## 🚀 谁在用？

文档里列了很多大厂项目：Next.js、Vue、Vite、Nuxt、Astro、Prisma、Turborepo... 都在用 pnpm 工作空间管理代码。


---

**总结**：pnpm 工作空间就是让你在一个仓库里优雅地管理多个相关项目，通过 `workspace:` 协议实现本地包之间的互相引用，既方便开发，又方便发布。

# workspace:* 这个版本号读取的是哪里？

好问题！`workspace:*` 读取的是**本地工作空间中那个包的** `package.json` 里的 `version` 字段。

让我详细解释一下：

## 📍 读取来源

```text
workspace:*  ← 读取的是本地包的 package.json 中的 version
     ↓
本地文件系统：packages/ui/package.json
{
  "name": "@my/ui",
  "version": "1.5.0"  ← 就读取这个！
}
```

## 🔄 完整流程

假设你的工作空间结构：

```text
my-project/
├── apps/
│   └── web/
│       └── package.json    ← 这里写了 "ui": "workspace:*"
└── packages/
    └── ui/
        └── package.json    ← 这里有 "version": "2.0.0"
```

**pnpm 的处理逻辑**：


1. **安装时**：pnpm 发现 `workspace:*`，就去本地找 `packages/ui`
2. **读取版本**：打开 `packages/ui/package.json`，看到 `"version": "2.0.0"`
3. **创建链接**：把 `packages/ui` 链接到 `apps/web/node_modules/ui`
4. **发布转换**：当你发布 `apps/web` 时，`workspace:*` 变成 `"2.0.0"`

## 📝 各种写法对应的转换

假设本地包 `foo` 的 `version` 是 `1.5.0`：

|你写的 |发布时变成 |
|---|---|
|`"foo": "workspace:*"` |`"foo": "1.5.0"` |
|`"foo": "workspace:~"` |`"foo": "~1.5.0"` |
|`"foo": "workspace:^"` |`"foo": "^1.5.0"` |
|`"foo": "workspace:^1.5.0"` |`"foo": "^1.5.0"` |

## ⚠️ 关键点

`workspace:*` 不关心 semver 范围，只关心本地有没有这个包！

```json
// 即使本地 foo 是 2.0.0，你依赖的是 1.0.0
"foo": "workspace:*"  // 也能链接成功，用本地的 2.0.0

// 但这样写会严格检查版本
"foo": "workspace:1.0.0"  // 如果本地是 2.0.0，安装会失败！
```

## 🎯 一句话总结

> `workspace:*` 就是告诉 pnpm："不管版本号是多少，直接用我本地工作空间里的那个包！"


