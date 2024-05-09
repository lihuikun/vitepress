export default [
  { text: '首页', link: '/' },
  {
    text: '💻前端',
    collapsable: true,
    sidebarDepth: 4,
    items: [
      // { text: '🚀前言', link: '/frontEnd/index.md' },
      { text: '🟥css技巧', link: '/frontEnd/css技巧.md' },
      { text: '🟥grid布局', link: '/frontEnd/grid布局.md' },
      { text: '🟨javaScript', link: '/frontEnd/javaScript.md' },
      { text: '🟨javaScript技巧', link: '/frontEnd/javaScript技巧.md' },
      { text: '🗄️Promise', link: '/frontEnd/Promise.md' },
      { text: '📚ES6模块化', link: '/frontEnd/ES6(modularize).md' },
      { text: '🐞nodejs笔记', link: '/frontEnd/nodejs笔记.md' },
      { text: '🌩️git', link: '/frontEnd/git.md' },
      { text: '♾️svn', link: '/frontEnd/svn.md' },
      { text: '🧊webpark笔记', link: '/frontEnd/webpark笔记.md' },
      { text: '🟩Vue基础', link: '/frontEnd/Vue基础.md' },
      { text: '🟩Vue2', link: '/frontEnd/Vue.md' },
      { text: '🟩Vue工程化', link: '/frontEnd/Vue工程化.md' },
      { text: '🟩Vue3', link: '/frontEnd/vue3快速上手.md' },
      { text: '🏞️uniapp', link: '/frontEnd/uniapp.md' },
      { text: '🥊ECharts', link: '/frontEnd/ECharts.md' },
      { text: '🎿内网外射', link: '/frontEnd/IntranetPenetration.md' },
      { text: '⭐前端常用单词', link: '/frontEnd/word.md' },
      { text: '⭐前端网站合集', link: '/frontEnd/frontendWebsite.md' },
    ],
  },
  {
    text: '🎒后端',
    collapsable: true,
    sidebarDepth: 4,
    items: [
      { text: '☕ java', link: '/backEnd/index.md' },
      { text: '🐞 C语言', link: '/C/C.md' },
    ],
  },
  {
    text: '♾️有趣的代码',
    items: [{ text: '🐞Node.js', link: '/interesting/node.md' }],
  },
  {
    text: '🎒每日一道面试题',
    items: [
      // { text: '🚀前言', link: '/interview/index' },
      { text: '🟧HTML', link: '/interview/html' },
      { text: '🟥CSS', link: '/interview/css' },
      { text: '🟨javascript', link: '/interview/javascript' },
      { text: '🗄️Promise', link: '/interview/promise' },
      { text: '📚Ajax', link: '/interview/Ajax' },
      { text: '🐞axios', link: '/interview/axios' },
      { text: '🟩vue2', link: '/interview/vue2' },
      { text: '🟩vue3', link: '/interview/vue3' },
      { text: '🧩webpack', link: '/interview/webpack' },
      { text: '🐬性能优化', link: '/interview/optimize' },
      { text: '🐍Node', link: '/interview/Node' },
      { text: '🃏浏览器', link: '/interview/browser' },
      { text: '🗂️其他', link: '/interview/other' },
    ],
  },
  {
    text: '📦实战项目',
    items: [
      { text: '🎒仿网易云音乐', link: 'http://xiangyang.web3v.work/' },
      {
        text: '🤏网易云音乐(简易版)(移动端)',
        link: 'https://xiangyang666.gitee.io/mobile_cloud_music',
      },
      {
        text: '🧩电商平台数据可视化实时监控系统',
        link: 'https://www.bookbook.cc/vue2/data-view/#/home',
      },
      {
        text: '🌓vue主题切换',
        link: 'https://xiangyang666.gitee.io/theme_changeover/',
      },
      {
        text: 'Ⓜ️后台课程管理系统',
        link: 'http://xiangyang666.gitee.io/manage_system',
      },
      {
        text: '🧊青年帮新闻',
        link: 'https://xiangyang666.gitee.io/news_uniapp',
      },
    ],
  },
  {
    text: '⭕ 更多',
    items: [
      { text: '', items: [{ text: '⚡每天一道算法', link: '/algorithm/' }] },
      { text: '📚 Typora软件', link: '/more/Typora.md' },
      { text: '🧊 Markdown语法', link: '/more/Markdown语法.md' },
      { text: '🧑 前端学习路线', link: '/more/forntEnd_Learn_route.md' },
      { text: '🚲 前端开发工作', link: '/more/work.md' },
      {
        text: '个人',
        items: [
          { text: '🐈‍GitHub', link: 'https://github.com/lihuikun' },
          { text: '🧭Gitee', link: 'https://gitee.com/lihuikun1' },
          {
            text: '♾️稀土掘金',
            link: 'https://juejin.cn/user/3664010809185870',
          },
        ],
      },
    ],
  },
]
