---
title: "Picture-in-Picture 画中画"
layout: post
---

# Picture-in-Picture 画中画

这个 API 允许网页创建一个浮动的视频播放小窗口，它会一直显示在其他窗口的最前面，这样用户就可以继续观看视频，同时他们也可以继续浏览其他网页或继续操作其他应用程序。

现在正统浏览器已经内置这个功能了，而且还有配套的 API 给开发者使用。

[WICG](<https://wicg.github.io/admin/charter.html>)，全名为 Web Incubator Community Group（Web 孵化器社区小组），主要成员为 Chrome 的工程师们，他们标准化了这个能让视频弹窗播放的特性，起名为 [Picture-in-Picture](<https://w3c.github.io/picture-in-picture/>)（画中画），缩写为 PiP。

下面将主要讲两方面：Chrome 当前实现的 PiP 交互是怎么样的，以及有哪些 API 让我们开发者使用。

# Chrome 中的 PiP 交互



我简单的弄了一个 [在线Demo](https://www.lien.run/Project/pip) 页面。

在演示 Demo 中可以看到，Chrome 在原生的 video 控件中提供了开启画中画模式的菜单项，一旦开启画中画模式，原本页面中内联（inline）展现的那个 video 还占据着原来的位置，各种控件也都在，但最重要的视频画面已经被无缝的转移到了新的弹出窗口中了，只剩下一张 poster 图片和一层灰色的遮罩。

我们把弹出的那个视频窗口叫做 PiP 窗口，PiP 窗口只有视频画面，没有标题栏和地址栏（chrome-less），这一点和用 `window.open()`打开的弹窗不一样。同时，PiP 窗口也没有完整的视频控件，只有开始/暂停/关闭/返回到标签页四个按钮，时间、进度条、音量这些控件都没有。PiP 窗口还支持拖拽改变大小（不能大于一个象限），以及支持拖拽到任意位置。还有最重要的一点是，PiP 窗口在所有窗口中是置顶的（always on top）。

但是，在同一时刻只能允许有一个 PiP 窗口。同一个页面里如果为多个视频开启画中画模式，前面开启的那个会自动退出画中画模式，同一个浏览器窗口下的多个 Tab 里的视频亦如此，同一个浏览器打开的多个浏览器窗口亦如此。

# PiP 相关 API

## 1、video 元素新增的方法 requestPictureInPicture()

请求让该 video 元素进入画中画模式，返回一个 promise，如果没有异常，这个 promise 包的值会是一个 PictureInPictureWindow 对象，这个对象就代表弹出的那个 PiP 窗口，后面会单独讲它的 API。

```javascript
async function openPiP(video) {
  try {
    const pipWindow = await video.requestPictureInPicture() // 进入画中画模式
    ...
  } catch (e) {
    console.error(e) // 处理异常
  }
})
```

哪些情况下进入画中画模式会失败？一共有 5 种情况：

- 操作系统不支持、或者用户通过浏览器选项禁用了此功能，此时 document.pictureInPictureEnabled 属性会返回 false
- 视频文件错误、或者没有视频流只有音频流
- 此次请求不是由用户操作触发的，比如用户没有点击任何按钮，页面自动执行该方法，会被当做恶意行为拦截掉
- 当前页面 [通过 feature-policy 禁用了画中画特性](<https://github.com/w3c/webappsec-feature-policy/blob/master/features.md#picture-in-picture>)，此时 document.pictureInPictureEnabled 属性也会返回 false
- 当前 video 元素通过 disablePictureInPicture 属性（HTML 属性和 DOM 属性均可）禁用了画中画特性

## 2、video 元素新增的属性 disablePictureInPicture

通过该属性可以禁用 video 元素的画中画特性，右键菜单中的“画中画”选项会被禁用。

通过 HTML 属性：

```html
<video src="..." disablePictureInPicture>
```

通过 DOM 属性:

```css
video.disablePictureInPicture = true
```

## 3、video 元素新增的事件 enterpictureinpicture 和 leavepictureinpicture

```javascript
video.addEventListener('enterpictureinpicture', function(pipWindow) {
  // 进入了画中画模式，可以拿到 pipWindow 对象
})

video.addEventListener('leavepictureinpicture', function() {
  // 退出了画中画模式
})
```

## 4、 document 上新增的方法 exitPictureInPicture()

因为一个页面只能打开一个 PiP 窗口，所以让 video 元素退出画中画模式的方法不在 video 元素自己身上，而在 document 上。

这个方法也返回一个 promise，不过 promise 包的值是个 undefined。

## 5、 document 上新增的属性 pictureInPictureElement和 pictureInPictureEnabled

类似于 document.pointerLockElement 和 document.fullscreenElement， document.pictureInPictureElement 会返回当前页面中处于画中画模式的 video 元素，如果没有的话，返回 null

document.pictureInPictureEnabled 上面已经提到过了，在当前页面不支持或被禁用画中画模式的情况下会返回 false，否则返回 true。

这两个属性都是只读的。

## 6、 PictureInPictureWindow对象的 API

从 requestPictureInPicture() 方法的返回值和 enterpictureinpicture 事件的回调参数中可以拿到 pipWindow 对象，该对象有两个属性 width 和 height，还支持一个 resize 事件，在用户改变 PiP 窗口大小时会触发。

```javascript
async function openPiP(video) {
  const pipWindow = await video.requestPictureInPicture()
  console.log(pipWindow.width, pipWindow.height) // 打印了默认的窗口大小

  pipWindow.addEventListener('resize', function() {
    console.log(pipWindow.width, pipWindow.height) // 用户改变 PiP 窗口大小时触发
  })
}
```

注意这里的 width 和 height 是只读的，你不能通过给他们赋值来改变窗口大小。

参考文章：

[Watch video using Picture-in-Picture](https://developers.google.com/web/updates/2018/10/watch-video-using-picture-in-picture)

[浏览器中的画中画（Picture-in-Picture）模式及其 API](https://zhuanlan.zhihu.com/p/38251413)









