# 发布规则 / Publishing policy

## 中文

每个新版 Release 仅上传 `main.js`、`manifest.json`、`styles.css`。BRAT 按这些文件名获取插件；不要额外上传 ZIP、说明文档或校验和。更新说明放发布正文，中英文安装指南和第三方声明放仓库文档。GitHub 自动生成的 Source code ZIP/tar.gz 不是插件安装包。

发布前核对版本、审核三个构建文件和待公开的文档，检查隐私；发布后回下载三个文件并核对本地哈希。审核记录和本地备份不作为附件上传。只同步审核后的分发文件，不合并私有开发历史。

## English

Upload only `main.js`, `manifest.json` and `styles.css` to each release. BRAT fetches these filenames. Do not add ZIPs, notes or checksum attachments. Use the release body for changes and repository documents for bilingual guides and third-party notices. GitHub-generated Source code archives are not plugin installation packages.

Review versions, built files, public documents and privacy before publication. Download the three assets and compare local hashes afterward. Keep review records/backups local. Publish reviewed distribution files without merging private development history.
