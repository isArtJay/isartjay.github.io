---
title: "浅谈 CSS 水平垂直居中"
layout: post
---

我们都知道，固定宽高的 div 在网页中水平垂直居中很简单，相信大家也很容易的写出来，但是不固定宽高的 div 如何水平垂直居中呢？我们在网页布局，特别是手机等 web 端网页经常是不固定宽高的 div，那么这些 div 如何水平垂直居中呢？这篇文章，我总结一下。

# 固定宽高水平垂直居中（块级元素）

**Demo**

```html
<div class="wrap"></div>
```

```css
.wrap {
  background-color: greenyellow;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200px;
  height: 100px;
  margin-left: -100px;
  margin-top: -50px;
}
```

**效果示例**

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/center/1.png)

# 不固定宽高水平垂直居中

注意：这里的”不固定宽高“指的是子元素

## △ 方法一：vertical-align: middle（禁IE6、7、8）

```html
<div class="wrap">
   <div class="centered"></div>
</div>
```

```css
.wrap {
  width: 400px;
  height: 400px;
  background-color: greenyellow;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
}

.wrap .centered {
  /* 如果子元素是块级元素，需要 display:inline-block; 将其变为行块级元素 */
  display: inline-block;
  width: 50%;
  height: 50%;
  background-color: #77bbdd;
  vertical-align: middle;
}

.wrap::after {
  content: "";
  width: 5px;
  line-height: 400px;
  background-color: #77bbdd;
}
```

**效果示例**

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/center/2.png)

## △ 方法二：table-cell

```html
<div class="wrap">
   <div class="centered"></div>
</div>
```

```css
.wrap {
  width: 400px;
  height: 400px;
  background-color: chartreuse;
  display: table;
  display: table-cell;
  vertical-align: middle;
}
.wrap .centered {
  width: 50%;
  height: 50%;
  margin: 0 auto;
  background-color: burlywood;
}
```

**效果示例**

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/center/3.png)

## △ 方法三：translate() 终极解决方法

```html
<div class="wrap">
   <div class="centered"></div>
</div>
```

```css
.wrap {
  position: relative;
  width: 400px;
  height: 400px;
  background-color: rgb(163, 240, 236);
}
.wrap .centered {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: greenyellow;
  width: 50%;
  height: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
```

**效果示例**

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/center/4.png)

# CSS 3 不固定宽高水平垂直居中

在父级元素上加入下面 3 行代码，就可以实现子元素水平垂直居中。

```css
/* 子元素水平居中 */
justify-content: center;
/* 子元素垂直居中 */
align-items: center;
display: -webkit-flex;
```

**Demo**

```html
<div class="wrap">
   <div class="centered"></div>
</div>
```

```css
.wrap {
  width: 400px;
  height: 400px;
  background: greenyellow;
  justify-content: center;
  align-items: center;
  display: -webkit-flex;
}
.wrap .centered {
  width: 50%;
  height: 50%;
  background: rgb(163, 240, 236);
}
```

**效果示例**

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/center/5.png)

# 运用 margin:auto; 进行水平垂直居中

我们可以利用定位的方式，让 margin 上下左右都有足够的空间！那么就可以用 margin:auto; 来实现水平垂直居中了！

**Demo**

```html
<div class="wrap">
   <div class="centered"></div>
</div>
```

```css
.wrap {
  width: 100%;
  height: 100%;
}
.centered {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  margin: auto;
  background-color: greenyellow;
}
```

**效果示例**

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/center/6.png)