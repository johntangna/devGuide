---
sidebarDepth: 3
---
# 文件模板

以下两种主要是 meta 标签设置的不同

## HTML5 模板

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      http-equiv="Content-Security-Policy"
      content="script-src 'self' 'unsafe-inline' cdn.bootcdn.net cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' cdn.bootcdn.net cdn.jsdelivr.net; object-src 'none'; form-action 'self'; child-src https:"
    />
    <meta name="renderer" content="webkit" />
    <link rel="icon" href="<%= BASE_URL %>buy100.png" />
    <link rel="stylesheet" href="<%= BASE_URL %>iconfont.css" />
    <title>分销系统</title>
  </head>

  <body>
    <noscript>
      <strong
        >We're sorry but app doesn't work properly without JavaScript enabled.
        Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <% for (var i in htmlWebpackPlugin.options.cdn &&
    htmlWebpackPlugin.options.cdn.css) { %>
    <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="stylesheet" />
    <% } %> <% for (var j in htmlWebpackPlugin.options.cdn &&
    htmlWebpackPlugin.options.cdn.js) { %>
    <script src="<%= htmlWebpackPlugin.options.cdn.js[j] %>"></script>
    <% } %>
  </body>
</html>
```

## 移动端

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
    />
    <!-- 是否将数字转换为拨号链接 -->
    <meta name="format-detection" content="telephone=no" />
    <title>移动端HTML模版</title>

    <!-- S DNS预解析 -->
    <link rel="dns-prefetch" href="" />
    <!-- E DNS预解析 -->

    <!-- S 线上样式页面片，开发请直接取消注释引用 -->
    <!-- #include virtual="" -->
    <!-- E 线上样式页面片 -->

    <!-- S 本地调试，根据开发模式选择调试方式，请开发删除 -->
    <link rel="stylesheet" href="css/index.css" />
    <!-- /本地调试方式 -->

    <link rel="stylesheet" href="http://srcPath/index.css" />
    <!-- /开发机调试方式 -->
    <!-- E 本地调试 -->
  </head>
  <body></body>
</html>

```
