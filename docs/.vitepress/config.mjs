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
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    siteTitle: false,
    head: [["link", { rel: "icon", type: "image/ico", href: "/favicon.ico" }]],
    lastUpdatedText: "更新时间",
    outline: "deep",
    outlineTitle: "大纲",
    footer: {
      message: "sanbaby - 前端的加油站",
      copyright: "Copyright © 2019-present 随易科技",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "吃", link: "/eat/index" },
      { text: "工作复盘", link: "/工作复盘/工作每日复盘2024-01-03" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/perchecc" }],
  },
});
