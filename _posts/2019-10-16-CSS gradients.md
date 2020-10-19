---
title: "CSS3 conic-gradient 圆锥渐变"
layout: post
---

# CSS3 conic-gradient 圆锥渐变

感谢 [LeaVerou](<https://github.com/leaverou/conic-gradient>) 大神，让我们可以提前使用上这么美妙的属性。

[conic-gradient 是什么](https://developer.mozilla.org/en-US/docs/Web/CSS/conic-gradient)？说到 conic-gradient ，就不得不提的它的另外两个兄弟：

- linear-gradient 线性渐变
- radial-gradient 径向渐变

这两种渐变应该有很多人使用过的，CSS3 的线性渐变及径向渐变给 CSS 世界带来了很大的变化。而 conic-gradient ，表示圆锥渐变，是另外一种渐变方式，给 CSS 世界带来了更多可能，CSS 渐变也会变得越来越好。

# 先看一些例子

```html
<div class="demo"></div>
```

```css
.demo {
  width: 200px;
  height: 200px;
  background: conic-gradient(#f06, gold);
}
```

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/15_conic-gradient/01.png)

```html
<div class="demo"></div>
```

```css
.demo {
  width: 200px;
  height: 200px;
  background: conic-gradient(#eee .1turn, black, #eee 326deg);
}
```

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/15_conic-gradient/02.png)

```html
<div class="demo"></div>
```

```css
.demo {
  width: 200px;
  height: 200px;
  background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
  border-radius: 50%
}
```

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/15_conic-gradient/03.png)

```html
<div class="demo"></div>
```

```css
.demo {
  width: 200px;
  height: 200px;
  background: #0ac
  repeating-conic-gradient(hsla(0,0%,100%,.2) 0 15deg, hsla(0,0%,100%,0) 0 30deg);
}
```

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/15_conic-gradient/04.png)

```html
<div class="demo"></div>
```

```css
.demo {
  width: 200px;
  height: 200px;
  background: conic-gradient(black 25%, white 0 50%, black 0 75%, white 0);
  background-size: 4em 4em;
}
```

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/15_conic-gradient/05.png)

# 与线性渐变及圆锥渐变的异同

那么它和另外两个渐变的区别在哪里呢？

- linear-gradient 线性渐变的方向是一条直线，可以是任何角度
- radial-gradient 径向渐变是从圆心点以椭圆形状向外扩散

而从方向上来说，圆锥渐变的方向是这样的：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/15_conic-gradient/07.png)

从上边的例子中可以看到，圆锥渐变的渐变方向和起始点。起始点是图形中心，然后以顺时针方向绕中心实现渐变效果。

# 兼容性

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/15_conic-gradient/06.png)

# conic-gradient polyfill 垫片库

大家是不是都跃跃欲试这么神奇的属性。

但是，按照惯例，这种 “高科技” 通常兼容性都不好。conic-gradient 兼容性又如何呢？

CSS 官方对其的描述是：

> 处于修正阶段的模块(Modules in the revising phase)
>
>
>
> 处于修正阶段的模块没有处于改善阶段的模块稳定。通常它们的语法还需要详细审查，说不定还会有很大的变化，而且不保证和之前的兼容。替代的语法通常经过测试并已经实现。

但是，再次感谢 [LeaVerou](https://github.com/leaverou/conic-gradient) 大神，让我们可以提前使用上这么美妙的属性。

LeaVerou 提供了一个垫片库，按照本文上述的语法，添加这个垫片库，就可以开心的使用起来啦。

> polyfill 是一个开发术语，在 Web 开发中，polyfill 垫片库的准确意思为：用于实现浏览器并不支持的原生API的代码。现在引申为实现浏览器并不支持的某些功能的兼容库。

你需要添加如下的 JS ，垫片库会按照 CSS 语法，生成对应的圆锥渐变图案，并且转化为 BASE64 代码：

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
<script src="conic-gradient.js"></script>
```

> 因为垫片库的作用是将我们的 CSS 语法转化成为 BASE64 代码替换 background-image: url() 中的内容，所以，上线后是不需要再添加这两个库的。

参考文献：

[CSS conic-gradient() polyfill](http://leaverou.github.io/conic-gradient/)





