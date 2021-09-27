module.exports = {
    title: '欧美斯-前端开发规范',
    description: '欧美斯前端开发规范文档',
    themeConfig: {
        sidebar: {
            // 侧边栏
            "/": [{
                    text: "HTML规范",
                    children: [
                        { text: "代码规范", link: "devStandard/htmlStandard/code" },
                        { text: "注释规范", link: "devStandard/htmlStandard/annotation" },
                        { text: "文件模板", link: "devStandard/htmlStandard/template" }
                    ]
                },
                {
                    text: "CSS规范",
                    children: [
                        { text: "注释规范", link: "devStandard/cssStandard/annotation" },
                        { text: "代码规范", link: "devStandard/cssStandard/code" },
                        { text: "SASS规范", link: "devStandard/cssStandard/sassStd" },
                        { text: "媒体查询", link: "devStandard/cssStandard/mediaquery" },
                        { text: "移动端常用属性", link: "devStandard/cssStandard/mobileCommonAttr" },
                    ]
                },
                {
                    text: "命名规范",
                    children: [
                        { text: "目录命名", link: "devStandard/namedStandard/dirnamed" },
                        { text: "图片命名", link: "devStandard/namedStandard/picnamed" },
                        { text: "HTML/CSS命名", link: "devStandard/namedStandard/domnamed" },
                        { text: "CLASSNAME命名", link: "devStandard/namedStandard/classname" }
                    ]
                },
                {
                    text: "JS规范",
                    children: [
                        { text: "语言规范", link: "devStandard/jsStandard/language" },
                        { text: "代码规范", link: "devStandard/jsStandard/code" }
                    ]
                },
                {
                    text: "Vue书写规范",
                    children: [
                        { text: "代码规范", link: "devStandard/vueStandard/code" }
                    ]
                },
            ],
        },
        nav: [
            // 顶部右侧导航栏
            { text: "介绍", link: "/", activeMatch: "^/$|^/guide/" },
            {
                text: "官方风格指南",
                link: "https://cn.vuejs.org/v2/style-guide/",
            },
        ],
    },
    // 使用插件
    plugins: [
        '@vuepress/plugin-active-header-links', // 页面滚动时自动激活侧边栏链接的插件
        '@vuepress/plugin-back-to-top' // 返回顶部插件
    ],
}