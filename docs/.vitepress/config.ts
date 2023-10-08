import { demoBlockPlugin } from "vitepress-theme-demoblock";

const sidebar = {
  '/': [
    {
      text: '介绍',
      link: '/',
      items: []
    },
    {
      text: '通用',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
        { text: 'Link 链接', link: '/components/link/' }
      ]
    },
    { text: '导航', items: [] },
    { text: '反馈', items: [] },
    { text: '数据录入', items: [] },
    { text: '数据展示', items: [] },
    { text: '布局', items: [] },
  ]
}
const config = {
  title: "🔨 Smarty-UI",
  description: "Smarty-UI 组件库",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin);
    },
  },
}
export default config