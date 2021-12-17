module.exports = {
    title: "欧美斯在线文档",
    description: "囊括集团内软件系统操作手册",
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',



    // carbonAds: {
    //     carbon: 'CEBDT27Y',
    //     custom: 'CKYD62QM',
    //     placement: 'vuejsorg'
    // },
    themeConfig: {
        sidebar: {
            // 开发规范手册
            "/devStandard/index": getDevSidebar(),
            //系统操作手册
            "/systemStandard/index": getSystemSidebar()
        },
        // nav: [
        //     // 顶部右侧导航栏
        //     { text: "介绍", link: "/", activeMatch: "^/$|^/devStandard/" },
        //     {
        //         text: "官方风格指南",
        //         link: "https://cn.vuejs.org/v2/style-guide/",
        //     },
        // ],
    }
}

function getSystemSidebar() {
    return [{
            text: "返回首页",
            link: "/"
        },
        {
            text: "分销系统操作手册",
            children: [
                { text: "登录", link: "/systemStandard/fenxiaoStandard/index" }
            ]
        },
        {
            text: "欧小斯内购操作手册",
            children: [
                { text: "登录", link: "/systemStandard/insideStandard/index" }
            ]
        },
        {
            text: "埃森哲内购操作手册",
            children: [
                { text: "登录", link: "/systemStandard/omsb2cStandard/index" }
            ]
        },
        {
            text: "欧小斯优选操作手册",
            children: [
                { text: "登录", link: "/systemStandard/omsyxStandard/index" }
            ]
        }
    ]
}

function getDevSidebar() {
    return [{
            text: "返回首页",
            link: "/"
        },
        {
            text: "HTML规范",
            children: [
                { text: "代码规范", link: "/devStandard/htmlStandard/code" },
                { text: "注释规范", link: "/devStandard/htmlStandard/annotation" },
                { text: "文件模板", link: "/devStandard/htmlStandard/template" }
            ]
        },
        {
            text: "CSS规范",
            children: [
                { text: "注释规范", link: "/devStandard/cssStandard/annotation" },
                { text: "代码规范", link: "/devStandard/cssStandard/code" },
                { text: "SASS规范", link: "/devStandard/cssStandard/sassStd" },
                { text: "媒体查询", link: "/devStandard/cssStandard/mediaquery" },
                { text: "移动端常用属性", link: "/devStandard/cssStandard/mobileCommonAttr" },
            ]
        },
        {
            text: "命名规范",
            children: [
                { text: "目录命名", link: "/devStandard/namedStandard/dirnamed" },
                { text: "图片命名", link: "/devStandard/namedStandard/picnamed" },
                { text: "HTML/CSS命名", link: "/devStandard/namedStandard/domnamed" },
                { text: "CLASSNAME命名", link: "/devStandard/namedStandard/classname" }
            ]
        },
        {
            text: "JS规范",
            children: [
                { text: "语言规范", link: "/devStandard/jsStandard/language" },
                { text: "代码规范", link: "/devStandard/jsStandard/code" }
            ]
        },
        {
            text: "Vue书写规范",
            children: [
                { text: "代码规范", link: "/devStandard/vueStandard/code" }
            ]
        }
    ]
}