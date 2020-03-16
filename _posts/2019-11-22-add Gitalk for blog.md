---
layout: default
title: "为网站添加评论模块"
tags: archives
---

由于 Disqus 对于国内网路的支持十分糟糕，所以我选择了 [Gitalk](<https://gitalk.github.io/>)

首先来看看 Gitalk 的界面：

![Gitalk的界面](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/04_gitalk/gitalk_01.png)

# Gitalk原理

Gitalk 是一个利用 GitHub API，基于 Github issue 和 Preact 开发的评论插件。在 Gitalk 的评论框进行评论时，其实就是在 GitHub 仓库对应的 issue 上提问题。


# 必要的准备

使用 Gitalk 前，需要去 GitHub [注册一个 Github OAuth application](https://github.com/settings/applications/new)：

填写参数：

![Application](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/04_gitalk/gitalk_04.png)

点击 Register application 注册，成功后，记录下你的 Client ID 和 Client Secret：

![clientID clientSecret](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/04_gitalk/gitalk_05.png)

# 安装Gitalk

直接引入下面两个文件：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css">
<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>
```

# 使用

1、在适合的位置添加一个容器：

```html
<div id="gitalk-container"></div>
```

2、用下面的 Javascript 代码来生成 Gitalk 插件：

```javascript
<script>
    var gitalk = new Gitalk({
      clientID: '',	
      clientSecret: '',	
      repo: '',	
      owner: '',	
      admin: [''],	
      id: location.pathname,	
      distractionFreeMode: false})

    gitalk.render('gitalk-container')
</script>
```

3、配置参数（必选）

- Client ID（你的 GitHub Client ID）
- ClientSecret（你的 GitHub ClientSecret）
- repo（存储评论的 GitHub 仓库名）
- owner（你的 GitHub 用户名）
- admin（你的 GitHub 用户名）

4、其他配置参数（可选）

- id（默认就行，不用修改）
- distractionFreeMode（评论框的全屏遮罩效果，不用修改，Default：false）
- perPage（每次加载评论的条数，最多100，Default：10）
- flipMoveOptions（评论列表的动画，[参考](https://github.com/joshwcomeau/react-flip-move/blob/master/documentation/enter_leave_animations.md)）
- pagerDirection（评论排序方式，last为按评论创建时间倒叙，first为按创建时间正序）

当然，还有其他很多参数，有兴趣的话可以[点这里](https://github.com/gitalk/gitalk/blob/master/readme-cn.md#%E8%AE%BE%E7%BD%AE)

# End

配置好参数，快去你的网站添加评论吧。





