---
layout: default
title: "用原生 CSS 怎样实现平滑滚动？"
tags: archives
---

现在浏览器已经开始支持 CSS 原生平滑滚动定位，**scroll-behavior** 。

来看看 MDN 的介绍：当用户手动导航或者 CSSOM scrolling API 触发滚动操作时，CSS 属性 **scroll-behavior** 为一个滚动框指定滚动行为，其他任何的滚动，例如那些由于用户行为而产生的滚动，不受这个属性的影响。在根元素中指定这个属性时，它反而适用于视窗。

其实 **scroll-behavior** 的使用没有那么多花头，你就记住这么一句话 —— **凡是需要滚动的地方都加一句scroll-behavior:smooth就好了！**你别管他用不用得到，也不用管浏览器兼容性如何，你都加上。

真的很丝滑~

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/12_smooth/1.png)

# 兼容性

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/12_smooth/2.png)

[Demo](https://codepen.io/yj_bian/pen/QWbaPOL)

[参考文章](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-behavior)