---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "LHK 博客"
  text: "I love vue.js"
  tagline: "程序员：跟我聊技术我可就不困了！"
  image:
    # src: https://xiangyang666.gitee.io/vuepress/images/logos.jpg
    src: /images/undraw_online_stats_0g94.svg
    alt: Vitepress
    width: 300
  actions:
    - theme: brand
      text: 🎒每天一道面试题
      link: /interview/index
    - theme: alt
      text: ⚡每天一道算法
      link: /algorithm/index

features:
  - icon: 💡
    title: 3年后的水平
    details: 前端程序员面试对面试官说：根据你自己的水平对我提问就行了。
  - icon: 📦
    title: 致自己
    details: 前端的日常。
  - icon: 🎉
    title: 前端的知识分享以及踩坑记录？
    details: 首先：方便成长。其次：后续有遇到类似的bug，可以快速解决。
---

<!-- 🛠️ -->
<!-- 自定义组件 -->
<script setup>
import home from './src/components/home.vue';
</script>

<home />
