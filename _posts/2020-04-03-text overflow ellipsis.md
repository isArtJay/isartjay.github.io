---
title: "“文本溢出截断省略” 怎么玩"
layout: post
---

在我们的日常开发工作中，文本溢出截断省略是很常见的一种需考虑的业务场景细节。看上去 “稀松平常” ，但在实现上却有不同的区分，是单行截断还是多行截断？多行的截断判断是基于行数还是基于高度？这些问题之下，都有哪些实现方案？他们之间的差异性和场景适应性又是如何？

一般来说，在做这样文字截断效果时我们更多是希望：

- 兼容性好，对各大主流浏览器有好的支持
- 响应式截断，根据不同宽度做出调整
- 文本超出范围才显示省略号，否则不显示省略号
- 省略号位置显示刚好

基于上述的准则，下面我们通过编码实践，给出一些答案。

# 单行文本溢出省略

**核心 CSS 语句**

- overflow: hidden；（文字长度超出限定宽度，则隐藏超出的内容）
- white-space: nowrap；（设置文字在一行显示，不能换行）
- text-overflow: ellipsis；（规定当文本溢出时，显示省略符号来代表被修剪的文本）

**优点**

- 兼容性好，对各大主流浏览器有好的支持
- 响应式截断，根据不同宽度做出调整
- 文本溢出范围才显示省略号，否则不显示省略号
- 省略号位置显示刚好

**短板**

- 只支持单行文本截断，并不支持多行

**适用场景**

- 适用于单行文本溢出显示省略号的情况

**Demo**

```html
<div class="demo">
      床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光
</div>
```

```css
.demo {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

**效果示例**

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/16_text-overflow/2.gif)

# 多行文本溢出省略（-webkit-line-clamp）

**核心 CSS 语句**

- overflow: hidden；（文本溢出限定的宽度就隐藏内容）
- -webkit-line-clamp: 2；（用来限制在一个块元素显示的文本的行数, 2 表示最多显示 2 行。 为了实现该效果，它需要组合其他的WebKit属性）
- display: -webkit-box；（和 -webkit-line-clamp: 2；结合使用，将对象作为弹性伸缩盒子模型显示 ）
- -webkit-box-orient: vertical；（和 -webkit-line-clamp: 2；结合使用 ，设置或检索伸缩盒对象的子元素的排列方式 ）
- text-overflow: ellipsis；（多行文本的情况下，用省略号“…”隐藏溢出范围的文本)

**优点**

- 响应式截断，根据不同宽度做出调整
- 文本溢出范围才显示省略号，否则不显示省略号
- 浏览器原生实现，所以省略号位置显示刚好

**短板**

- 兼容性一般： -webkit-line-clamp 属性只有 WebKit 内核的浏览器才支持

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/16_text-overflow/1.png)

**适用场景**

- 多适用于移动端页面，因为移动设备浏览器更多是基于 WebKit 内核

**Demo**

```html
<div class="demo">
      床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光
</div>
```

```css
.demo {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

**效果示例**

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/16_text-overflow/3.gif)

# 多行文本溢出省略（伪元素 + 定位）

**核心 CSS 语句**

- position: relative; （为伪元素绝对定位）
- overflow: hidden; （文本溢出限定的宽度就隐藏内容）
- position: absolute;（给省略号绝对定位）
- line-height: 18px; （结合元素高度,高度固定的情况下,设定行高, 控制显示行数）
- height: 36px; （设定当前元素高度）
- ::after {} （设置省略号样式）
- word-break: break-all; （如果文本中有英文，可以使一个单词能够在换行时进行拆分）

**优点**

- 兼容性好，对各大主流浏览器有好的支持
- 响应式截断，根据不同宽度做出调整

**短板**

- 无法识别文字的长短，无论文本是否溢出范围，一直显示省略号
- 省略号显示可能不会刚刚好，有时会遮住一半文字，跟文字没有贴合的很紧密

**适用场景**

- 文字内容较多，确定文字内容一定会超过容器的

**Demo**

```html
<div class="demo">
      床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光
</div>
```

```css
.demo {
    position: relative;
    line-height: 18px;
    height: 36px;
    overflow: hidden;
    word-break: break-all;
}
.demo::after {
    content:"...";
    font-weight:bold;
    position:absolute;
    bottom:0;
    right:0;
    padding:0 20px 1px 45px;
    
    /* 为了展示效果更好 */
    background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), to(white), color-stop(50%, white));
    background: -moz-linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
    background: -o-linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
    background: -ms-linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
}
```

**效果示例**

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/16_text-overflow/4.gif)

# 多行文本溢出省略（Float）

**核心 CSS 语句**

- line-height: 20px；（结合元素高度,高度固定的情况下,设定行高, 控制显示行数）
- overflow: hidden；（文本溢出限定的宽度就隐藏内容）
- float: right/left；（利用元素浮动的特性实现）
- position: relative；（根据自身位置移动省略号位置, 实现文本溢出显示省略号效果）
- word-break: break-all；（如果文本中有英文，可以使一个单词能够在换行时进行拆分）

**优点**

- 兼容性好，对各大主流浏览器有好的支持
- 响应式截断，根据不同宽度做出调整
- 文本溢出范围才显示省略号，否则不显示省略号

**短板**

- 省略号显示可能不会刚刚好，有时会遮住一半文字，跟文字没有贴合的很紧密

**适用场景**

- 文字内容较多，确定文字内容一定会超过容器的

**Demo**

```html
<div class="demo">
      <div class="text">
        床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光床前明月光
      </div>
</div>
```

```css
.demo {
  height: 40px;
  line-height: 20px;
  overflow: hidden;
}
.demo .text {
  float: right;
  margin-left: -5px;
  width: 100%;
  word-break: break-all;
}
.demo::before {
  float: left;
  width: 5px;
  content: "";
  height: 40px;
}
.demo::after {
  float: right;
  content: "...";
  height: 20px;
  line-height: 20px;
  padding-right: 5px;
  text-align: right;
  width: 3em;
  margin-left: -3em;
  position: relative;
  left: 100%;
  top: -20px;
  padding-right: 5px;
    
  /* 为了展示效果更好 */
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(255, 255, 255, 0)),
    to(white),
    color-stop(50%, white)
  );
  background: -moz-linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    white 50%,
    white
  );
  background: -o-linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    white 50%,
    white
  );
  background: -ms-linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    white 50%,
    white
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    white 50%,
    white
  );
}
```

**效果示例**

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/16_text-overflow/5.gif)

参考文章：

[纯 CSS 实现多行文字截断](https://github.com/happylindz/blog/issues/12)

[可能是最全的 “文本溢出截断省略” 方案合集](https://github.com/HenryTSZ/hello-world/issues/14)