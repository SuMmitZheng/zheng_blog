import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "ZHENG BLOG",
  description: "a blog base on vuepress-theme-hope",

  base: "/",



  plugins: [
    searchPlugin({

      locales: {
        "/": {
          placeholder: "搜索",
        },
      },


    }),
  ],

  theme,
});
