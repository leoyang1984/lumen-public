# Automated public releases / 公开版本自动发布

## 中文

发布分为内容准备与自动执行两部分。维护者准备中英文说明；公开仓库接收审核后的分发文件，GitHub Actions 自动上传并发布，不需要手动创建 Release 或上传附件。

### 内容准备

在开发仓库更新版本、完成测试和生产构建后，准备：

- `docs/RELEASE_NOTES_<version>.md`：面向用户的中英文更新说明。
- `docs/release-content/<version>.json`：版本、发布标题、中英文首页要点。

执行以下命令；`--public-dir` 指向独立的公开仓库 main 检出目录：

```sh
npm run release:prepare -- --public-dir /path/to/lumen-public
npm run release:prepare -- --public-dir /path/to/lumen-public --apply
```

第一条仅预览，第二条准备白名单文件。脚本检查公开 origin、main 分支、干净工作区、构建版本、源码映射、个人路径和常见凭据。仅同步三个运行文件、版本映射、相关指南、README、更新说明及发布基础设施；不会合并开发仓库历史。

检查实际差异和全部待发布内容，按现有 Git 隐私检查流程提交到公开 main 并推送。准备脚本不自动提交或推送。README 会更新当前版本和安装链接，保留历史更新记录。

### 自动执行

只有公开 main 的 `release.json` 改变才自动发布。该文件记录版本、标题、说明文件及其 SHA-256、三个运行文件的 SHA-256。普通文档提交不会重复发布；也可在 Actions 页面重跑原失败任务，或对当前发布提交使用手动触发。

工作流使用 GitHub 自带 `GITHUB_TOKEN` 的 `contents: write` 权限，无需另外保存个人令牌。固定版本的 checkout Action 检出事件的准确提交；之后无需安装 npm 依赖。

流程：验证版本／说明／文件 → 创建草稿 → 上传三个运行附件 → 下载核对 SHA-256 → 正式发布并标为 Latest → 再下载核对并检查标签。

失败的上传可从草稿继续；只会补齐或修复该草稿的三个预期附件。已公开版本仅校验，不能覆盖。标签若指向其他提交、出现未知附件、版本倒退或任何校验不符，任务失败并保留证据。对同一提交的重复运行不会创建重复版本。需要更改已公开的内容时，使用新版本。

发布前先确认 Actions 已启用。首次推送新增工作流时，维护者的 GitHub 认证还需具备修改 workflow 的权限；此权限不应通过关闭检查来绕过。

本地故障测试：`npm run test:public-release`。公开仓库的版本验证：`node scripts/release/validate.mjs`。公开发布入口：`.github/workflows/release.yml`。GitHub 自动生成的源码包不是插件安装包；安装仍使用三个运行附件。

## English

Maintainers author bilingual release notes and homepage highlights in the development repository. `release:prepare` previews or copies an explicit allowlist into a separate clean public main checkout, without committing, pushing or merging private history. Review the outgoing files, run the existing privacy checks, then commit and push public main.

Only changes to `release.json` trigger publication. The manifest binds the version, title, bilingual notes and the three runtime files to SHA-256 hashes. Actions checks out the exact event commit using a pinned checkout Action and needs no npm installation or separately stored personal token.

The publisher creates a draft, uploads the three runtime assets, downloads and verifies them, then publishes as Latest and verifies the published assets and tag again. Failed drafts can resume. Published releases are verified without modification. Unknown assets, mismatched tags, older versions or changed content fail closed. Re-run the original failed Actions run to retry the same reviewed commit; changed published content requires a new version.
