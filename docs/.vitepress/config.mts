import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // ==========================================
  // 1. 网站基础配置 (SEO 与基础信息)
  // ==========================================
  lang: 'zh-CN', // 网站语言：中文，对搜索引擎友好
  title: "铸解", // 浏览器标签页标题 & 左上角 Logo 旁边的文字
  description: "文化解构，工业制造", // 网站的描述，会被搜索引擎抓取
  
  // 网站图标 (favicon)：你需要把一张 logo.png 或 favicon.ico 放在 docs/public 文件夹下
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }], // 如果你没有图片，先注释掉这一行
    // ['meta', { name: 'author', content: 'Your Name' }], // 作者信息 (可选)
  ],

  // 部署到特定路径时才需要 base。你有独立域名，所以这里一定要注释掉或保持为 '/'
  // base: '/',

  // ==========================================
  // 2. 主题配置 (导航、侧边栏、外观)
  // ==========================================
  themeConfig: {
    // 左上角的 Logo 图片 (图片需放在 docs/public 目录下)
    logo: '/logo.png', 

    // --- 顶部导航栏 (Nav) ---
    nav: [
      { text: '首页', link: '/' },
      // 下拉菜单示例
      {
        text: '专栏文章',
        items: [
          { text: '2026', link: '/2026' }, // 点击后会跳转到 docs/2026/index.md
        ]
      },
      { text: '关于栏目', link: '/about' } // 指向 docs/about.md
    ],

    // --- 左侧边栏 (Sidebar) ---
    // 这里使用了“多侧边栏”配置：当你在不同频道时，显示不同的菜单
    sidebar: {
    '/2026/': [
        {
          text: '2026', // 分组标题
          collapsed: false,    // 是否默认折叠
          items: [
            { text: '主页', link: '/2026/index' }, // 指向 docs/2026/index.md
            { text: '01 怪物文化', link: '/2026/怪物文化' }, // 指向 docs/2026/article1.md
          ]
        }
      ]
    },

    // --- 社交链接 (右上角图标) ---
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shadasha' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/3493107775572805?spm_id_from=333.1007.0.0' },
    ],

    // --- 本地搜索功能 ---
    // 强烈建议开启，极大地提升阅读体验
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文章',
                buttonAriaLabel: '搜索文章'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    // --- 页面功能按钮中文化 ---
    outline: {
      level: [2, 3], // 右侧大纲显示 h2 和 h3 标题
      label: '页面导航' // 右侧大纲的标题文字 (默认是 On this page)
    },
    
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题模式切换',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    // --- 文章最后更新时间 ---
    // 注意：此功能需要基于 Git 的提交记录。本地运行时可能不准，部署到 Vercel 后生效。
    lastUpdated: {
      text: '⏱️ 最后更新于',
      formatOptions: {
        dateStyle: 'short', // 'full' | 'long' | 'medium' | 'short'
        timeStyle: 'short'
      }
    },

    // --- 页脚版权信息 ---
    footer: {
      message: '文化解构，工业制造',
      copyright: 'Copyright © 2024-present 550025' // 换成你的名字
    }
  }
})