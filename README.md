# Flarum 简体中文语言包

适用于 Flarum 2.x 的简体中文语言包，以 Flarum 扩展形式发布。

当前翻译基线对应 `Flarum v2.0.0-beta.8`，覆盖核心组件与默认安装的官方扩展。

## 安装

```bash
composer require chulingera2025/flarum-lang-chinese
```

安装完成后，在 Flarum 管理后台启用语言包，并将站点默认语言切换为 `简体中文`。

## 包含内容

- `flarum/core`
- `flarum/approval`
- `flarum/bbcode`
- `flarum/emoji`
- `flarum/flags`
- `flarum/gdpr`
- `flarum/likes`
- `flarum/lock`
- `flarum/markdown`
- `flarum/mentions`
- `flarum/messages`
- `flarum/nicknames`
- `flarum/realtime`
- `flarum/statistics`
- `flarum/sticky`
- `flarum/subscriptions`
- `flarum/suspend`
- `flarum/tags`

## 说明

- 语言代码为 `zh-Hans`
- 日期与时间本地化由 `locale/config.js` 中的 Day.js 配置提供
- 当 Flarum 发布新 beta、RC 或正式版时，本仓库会按对应版本补充翻译并打同名标签
