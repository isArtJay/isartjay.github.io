---
layout: default
title: "CSS scroll-behavior属性实现平滑滚动"
tags: archives
---

# CSS scroll-behavior属性实现平滑滚动

你有没有遇到过这样的需求：点击一个链接（内链）跳转到当前页面的某个部分。

对于这样的需求，很容易想到使用锚点实现，但有一个问题：滚动一步到位，太生硬了。相比我还是比较喜欢平滑滚动。HTML5 中提供了 CSS 属性 scroll-behavior ，并且修改了一系列滚动函数的可接受参数用于支持平滑滚动特性。

# scroll-behavior

先来看看 [MDN 的介绍](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-behavior)

这个 CSS 属性就只接受两个自定义值：auto 和 smooth。默认值为 auto，表示立刻滚到底；smooth 即表示平滑滚动。

这个属性会影响滚动函数  scrollTo、scrollIntoView 等的默认滚动行为，也会影响 scrollTop、scrollLeft 等 DOM 属性改变时的滚动行为。

如果  scroll-behavior 被设置在根元素（<html>）上，表示应用在视口（viewport）上。这时对锚点、内链触发的视口滚动同样有效。

所以只需要给 html 元素设置样式 scroll-behavior: smooth ，点击内链就会触发页面的平滑滚动，很简单吧。

```html
html {scroll-behavior: smooth;}
```

[Demo](https://codepen.io/yj_bian/pen/QWbaPOL)

# 兼容性

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/12_smooth/2.png)
