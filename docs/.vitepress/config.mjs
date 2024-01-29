import { defineConfig } from "vitepress";
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";
import nav from "./nav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [AutoSidebar({ prefix: ".", collapsed: false })],
  },
  title: "前端加油站",
  description: "vitepress搭建的博客，前端加油站，学习前端知识",
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    search: {
      provider: "local",
    },
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
    nav,
    socialLinks: [{ icon: "github", link: "https://github.com/perchecc" }],
  },
});
