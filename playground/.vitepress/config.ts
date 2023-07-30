import { defineConfig } from 'vitepress'

import { vitepressAuto } from 'vitepress-auto'

export default defineConfig({
  title: 'Docs',

  // 默认主题
  appearance: 'dark',

  // 从URL中删除尾随的.html
  cleanUrls: true,

  // 显示更新时间
  lastUpdated: true,

  themeConfig: {
    // 大纲
    outline: 'deep',
    outlineTitle: '目录',

    // 展示链接icon
    externalLinkIcon: true,

    // 网站header部分标题
    siteTitle: 'Docs',

    // 社交账号链接
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Richard-Zhang1019'
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/RichardZhang_'
      }
    ],

    lastUpdated: {
      text: '上次更新',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short',
        hourCycle: 'h24'
      }
    },

    darkModeSwitchLabel: '切换主题',

    editLink: {
      pattern: 'https://github.com/richard-zhang1019/docs/edit/master/:path',
      text: '在github上编辑此页面'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    nav: [
      {
        text: '博客',
        link: '/blogs/index',
        activeMatch: '/blogs'
      }
    ],
    sidebar: vitepressAuto(['blogs'], true)
  }
})
