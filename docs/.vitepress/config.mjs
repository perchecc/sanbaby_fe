import { defineConfig } from "vitepress";
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [AutoSidebar({ prefix: ".", collapsed: false })],
  },
  title: "前端加油站",
  description: "vitepress搭建的博客，前端加油站，学习前端知识",
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    siteTitle: false,
    head: [["link", { rel: "icon", type: "image/ico", href: "/favicon.ico" }]],
    lastUpdatedText: "更新时间",
    outline: "deep",
    outlineTitle: "大纲",
    footer: {
      message: "sanbaby - 前端的加油站",
      copyright: "苏ICP备2022011280号-1",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      {
        text: "人间烟火",
        items: [
          { text: "吃", link: "/eat/不吃的" },
          { text: "追剧", link: "/追剧/成就" },
          { text: "愿望储存罐", link: "/愿望储存罐/清单" },
          { text: "冥想", link: "/冥想" },
        ],
      },
      { text: "工作复盘", link: "/工作复盘/2024-01-03" },
      {
        text: "兴趣学习",
        items: [
          {
            text: "前端",
            link: "/兴趣学习/前端",
          },
          {
            text: "考证",
            link: "/兴趣学习/考证",
          },
          {
            text: "idea",
            link: "/兴趣学习/idea",
          },
        ],
      },
      {
        text: "业务成长",
        items: [
          {
            text: "快速搭建业务系统",
            link: "/快速搭建业务系统/产品反馈社区-兔小巢",
          },
          {
            text: "微信开发",
            items: [
              {
                text: "小程序",
                link: "/微信开发/小程序/小程序备案",
              },
            ],
          },
        ],
      },
      {
        text: "自用软件",
        link: "/自用软件/axure10/axure安装教程（附中文汉化包）",
      },
      {
        text: "第三方",
        items: [
          {
            text: "前端插件",
            items: [
              {
                // [Lodash 简介 | Lodash 中文文档 | Lodash 中文网](https://www.lodashjs.com/)
                text: "Lodash 中文文档",
                link: "https://www.lodashjs.com/",
              },
            ],
          },
          {
            text: "webGL",
            items: [
              {
                // [Three.js - examples](http://stemkoski.github.io/Three.js/#hello-world)
                text: "Three.js - examples",
                link: "http://stemkoski.github.io/Three.js/#hello-world",
              },
              {
                // [glTF Viewer](https://gltf-viewer.donmccurdy.com/)
                text: "glTF Viewer",
                link: "https://gltf-viewer.donmccurdy.com/",
              },
            ],
          },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/perchecc" }],
  },
});
