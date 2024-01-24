import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端加油站",
  description: "vitepress搭建的博客，前端加油站，学习前端知识",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    siteTitle: false,
    head: [["link", { rel: "icon", type: "image/ico", href: "/favicon.ico" }]],
    nav: [
      { text: "Home", link: "/" },
      { text: "吃", link: "/eat/index" },
      { text: "工作复盘", link: "/工作复盘/工作每日复盘2024-01-03" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "吃",
        items: [
          { text: "青岛小花蛤", link: "/eat/青岛小花蛤" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "工作复盘",
        items: [
          { text: "工作每日复盘2024-01-03", link: "/工作复盘/工作每日复盘2024-01-03" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/perchecc" }],
  },
});
