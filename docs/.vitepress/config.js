// 全局左侧菜单
const sidebar = {
  '/demo1/': [
      {
          text: '案例1',
          // 是否可收缩
          collapsible: true,
          // 是否折叠
          collapsed: false,
          items: [
              {text: '1-A', link: '/demo1/a'},
              {text: '1-B', link: '/demo1/b'},
              {text: '1-C', link: '/demo1/c'}
          ]
      },
      {
          text: '案例2',
          // 是否可收缩
          collapsible: true,
          // 是否折叠
          collapsed: false,
          items: [
              {text: '2-A', link: '/demo2/a'},
              {text: '2-B', link: '/demo2/b'},
              {text: '2-C', link: '/demo2/c'}
          ]
      }
  ],
  '/demo2/': [
      {
          text: '案例2',
          // 是否可收缩
          collapsible: true,
          // 是否默认展开
          collapsed: true,
          items: [
              {text: '2-A', link: '/demo2/a'},
              {text: '2-B', link: '/demo2/b'},
              {text: '2-C', link: '/demo2/c'}
          ]
      }
  ]
}
const nav = [//顶部导航
  {text: '首页', link: '/'},
  {
      text: '案例1',
      activeMatch: '/demo1/',
      items: [
          {
              text: 'demo1',
              items: [
                  {text: 'A', link: '/demo1/a'},
                  {text: 'B', link: '/demo1/b'},
              ]
          },
          {
              text: 'demo2',
              items: [
                  {text: 'A', link: '/demo2/a'},
                  {text: 'B', link: '/demo2/b'},
              ]
          },
      ]
  },
  {
      text: '案例2',
      activeMatch: '/demo2/',
      items: [
          {text: 'A', link: '/demo2/a'},
          {text: 'B', link: '/demo2/b'},
      ]
  }
]
const  markdown= {  //markdown配置
  lineNumbers: true,//是否开启行号
}
const themeConfig= {
  lastUpdatedText: "上次更新时间",
  logo: '/images/123123.jpg',
  docFooter: {//上一页 下一页
    prev: '前一篇',
    next: '下一篇'
  },
  siteTitle: '我的文档',//站点小标题
  nav,//顶部导航
  sidebar,//左侧导航
  outlineTitle: '本页目录'
}
const  head= [  //网站icon
  ['link', { rel: 'icon', href: '/images/123123.jpg' }]
]

module.exports = {
    title:'hahhah',
    description:'myTips',
    lang: 'zh-CN',
    lastUpdated: true,//是否显示更新时间
    themeConfig,  //自定义更新时间前的lable
    ignoreDeadLinks: true, //当设置为true时，VitePress不会因死链接而导致构建失败。
    head,  //网站icon
    markdown,//markdown配置
    dest:'public'

}