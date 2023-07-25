---
layout: home

title: Docs
editLink: true
lastUpdated: true
hero:
  name: Docs
  text: Don't just daydream go do it
  tagline: 杂七杂八的流水账中混杂着一些技术文
  image:
    src: /
    alt:
  actions:
    - theme: brand
      text: 探索
      link: /me/index
    - theme: alt
      text: 我的github
      link: https://github.com/Richard-Zhang1019
features:
  - icon: 📚
    title: 一些博客文章
    details: 杂七杂八的内容，胡乱一通写，成分很复杂
    link: /blogs/index
    linkText: 看看
  - icon: 📝
    title: 学习过程记录的一些笔记
    details: 大多是从一些掘金的文章、红宝书、或者自己遇到的一些总结的
    link: /notes/index
    linkText: 瞅瞅
  - icon: 🛠️
    title: 完成品和未完成品
    details: 平时的一些稀奇古怪的灵感，或者来自其他地方的一些想法，动手写的一些小东西
    link: /demo/index
    linkText: 瞧瞧
---

<script setup>
import { 
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Richard-Zhang1019.png',
    name: 'Richard Zhang',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Richard-Zhang1019' },
      { icon: 'twitter', link: 'https://twitter.com/RichardZhang_' }
    ]
  },
]
</script>

<AccessRecord />

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      感谢以下人员的贡献
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>
