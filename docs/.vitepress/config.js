module.exports = {
    title: '欧美斯-前端开发规范',
    description: '欧美斯前端开发规范文档',
    themeConfig: {
        activeHeaderLinks: false, // 默认值：true
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
                    text: "JS规范",
                    children: [
                        { text: "代码规范", link: "devStandard/jsStandard/code" }
                    ]
                },
                {
                    text: "Vue书写规范",
                    link: "devStandard/vueStandard/code"
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