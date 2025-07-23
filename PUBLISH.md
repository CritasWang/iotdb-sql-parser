# 发布到 npm 指南

本文档说明如何将 `iotdb-sql-parser` 发布到 npm。

## 前置准备

### 1. npm 账户设置
确保您有 npm 账户，并且有权限发布包：
```bash
npm login
npm whoami
```

### 2. GitHub Secrets 配置
在 GitHub 仓库设置中添加以下 Secrets：
- `NPM_TOKEN`: 您的 npm 访问令牌

获取 npm token 的方法：
1. 登录 npmjs.com
2. 进入 Account Settings > Access Tokens
3. 点击 "Generate New Token"
4. 选择 "Automation" 类型
5. 复制生成的 token 并添加到 GitHub Secrets

## 发布方式

### 方式 1: 通过 GitHub Release（推荐）
1. 在 GitHub 上创建新的 Release
2. 标签格式：`v1.0.0`（遵循语义化版本）
3. 发布 Release 后，GitHub Actions 会自动触发 npm 发布

### 方式 2: 手动触发 GitHub Actions
1. 进入 GitHub 仓库的 Actions 页面
2. 选择 "Publish to npm" workflow
3. 点击 "Run workflow"
4. 选择版本类型（patch/minor/major）
5. 点击运行

### 方式 3: 本地发布（不推荐）
```bash
# 确保代码是最新的
git pull origin main

# 安装依赖
pnpm install

# 运行测试
pnpm test

# 构建项目
pnpm build

# 发布版本（patch/minor/major）
pnpm release:patch
# 或
pnpm release:minor
# 或  
pnpm release:major
```

## 版本管理

我们遵循 [语义化版本](https://semver.org/lang/zh-CN/) 规范：

- **MAJOR**: 当您做了不兼容的 API 修改
- **MINOR**: 当您做了向下兼容的功能性新增
- **PATCH**: 当您做了向下兼容的问题修正

## 发布流程

1. **开发阶段**: 在 `develop` 分支进行开发
2. **测试**: 确保所有测试通过
3. **合并**: 将 `develop` 分支合并到 `main` 分支
4. **发布**: 在 `main` 分支创建 Release 或手动触发发布

## 检查发布结果

发布成功后，您可以：
1. 在 [npmjs.com](https://www.npmjs.com/package/iotdb-sql-parser) 查看包信息
2. 使用 `npm install iotdb-sql-parser` 安装测试
3. 检查 GitHub Actions 的执行日志

## 回滚发布

如果需要回滚发布的版本：
```bash
# 废弃某个版本
npm deprecate iotdb-sql-parser@1.0.0 "This version has critical bugs"

# 撤销发布（仅限发布后24小时内）
npm unpublish iotdb-sql-parser@1.0.0
```

## 注意事项

1. 确保版本号唯一，npm 不允许发布相同版本号的包
2. 发布前务必运行完整的测试套件
3. 确保 `dist` 目录包含所有必要的构建文件
4. 检查 `package.json` 中的 `files` 字段确保包含正确的文件
5. 遵循 Apache 2.0 许可证要求
