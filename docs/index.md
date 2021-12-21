---
sideBarDepth: 1
home: true
heroImage: /logo.png
actionText: 前端规范手册
actionLink: /devStandard/index

altActionText: 系统操作手册
altActionLink: /systemStandard/index
features:
- title: 功能丰富
  details: 包括对开发规范、分销系统、欧小斯内购系统、欧小斯优选系统、埃森哲内购系统操作手册的输出
- title: 易于扩展
  details: 后续可以支持新系统手册的加入
- title: 面向未来
  details: 后期开发人员方便维护、升级，对使用人群也带来了极大的便利性
footer: Copyright © 2021 欧美斯集团 | OMS-DOCS
---
<script setup>
import * as dd from 'dingtalk-jsapi'
if(dd.env.platform == 'notInDingTalk'){
  location.href="/error.html"
  alert("请登录钉钉后打开")
}
</script>