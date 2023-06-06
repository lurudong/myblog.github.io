

import { defaultTheme } from 'vuepress'

export default {
    base: process.env.NODE_ENV == "production" ? "/myblog.github.io" : "/",
    theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '首页',
        link: '/',
      }
    ],
  }),
}