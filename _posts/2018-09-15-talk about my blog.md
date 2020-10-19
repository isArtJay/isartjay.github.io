---
title: "博客与写作"
layout: post
---

> 我的博客之路非常波折，post 了很多文章，也 delete 了很多文章。

先说说我为什么要搭建自己的博客，第一：

## 1、提高将事情讲清楚的能力

> 很多东西你以为懂了，但当你在写下来的时候，你就觉得无从下手了。

## 2、积累更多的知识

> 写并不是单纯的写，例如你突然忘记了一个概念，于是上网找，找回来这个概念的时候，你重温这个概念，可能还会顺便看了一下关于这个概念的其他东西。
>

## 3、分享带来的连锁反应

> 看到你作品的人越多，回报就越高。当然，如果你愿意，你也可以保留所有权，但是我很乐于分享。

## 4、记录成长

> 你会发现自己正在通过这样的方式在不断的成长，这种成长是一种财富，你得到了收获，不断修正自己的错误，别人得到了指引，避免走弯路。

## 5、探索未知的世界

> 通过写博客，你会知道世界上还有很多人像你一样在写博客，这些人和知识正在世界的某个角落等着你。

## 6、一个人在做一件属于自己的事

> 如果你想要清晰地思考，就必须远离人群。

## 7、互联网上的身份证

> 一个长期的有价值的博客是一份很好的简历，你的博客价值越高，你结识的人就越牛，跟牛人交流又会让你的眼界得到极大的开阔，于是你就变得更牛… 这是一个良性循环。

# 二、开始搭建博客

[什么是GitHub ?](https://baike.baidu.com/item/GitHub)，这里我就不赘述了。它有一个很好的项目：[GitHub Pages](https://pages.github.com/)，这个项目可以让开发者建立一个私人页面，上面可以分享新颖的想法和自己的代码、项目等。通过 GitHub Pages 创建个人博客的好处有很多，比如：无广告、免费、维护成本低、不用买主机等。下边请跟我一起看看怎么在 GitHub Pages 创建自己的个人博客。

## 1、创建仓库

如果你没有 GitHub 账号的话，可以先去[注册](https://github.com/join)。首先，创建一个新的仓库，名称格式为：<u>你的GitHub用户名.github.io</u>。比如我的 GitHub 用户名为isArtJay，那么我创建的仓库名就是： isArtJay.github.io

![创建仓库](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog01.png)

## 2、购买域名

推荐你去 [GoDaddy](<https://sg.godaddy.com/zh/>) 上购买域名，在这上边购买的好处就是不需要各种审核。当然你也可以去[阿里云](https://wanwang.aliyun.com/?spm=5176.12825654.eofdhaal5.77.e9392c4azYxgds&aly_as=Y4AFdXxT)或者[腾讯云](https://dnspod.cloud.tencent.com/)。

![购买域名](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog02.png)

输入域名查看是否可用，这里以 isartjay.com 为例。注意：这里的 HK 是港元。

进入购物车后会显示一些增值项目，这个可以不买。

![购买增值项目](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog03.png)

另外，不建议购买 GoDaddy 的虚拟主机服务，很容易被墙。

## 3、开启GitHub Pages

点击 Settings，进入设置。

![进入设置](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog04.png)

进入设置后往下翻，找到 GitHub Pages -> Theme Choose，点击 Choose a theme 选择一个主题。

![选择主题](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog05.png)

选择一个主题后，点击 Select theme 

![选择主题](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog06.png)

你可以先预览一下页面，实际上最后做出的效果会比这个好几十倍，但你可以先确认一下页面能不能正常显示。

继续往下看吧。

## 4、绑定域名

再次进入设置，找到 GitHub Pages -> Custom domain，填入你购买的域名，点击 Save 保存

![绑定域名](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog07.png)

这个操作等同于在你的项目根目录下创建一个名为 CNAME 的文件，文件内容为你的域名。

然后回到 GoDaddy 的主页上，点击个人用户名，再点击管理域名进入域名的列表页面。

![管理域名](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog08.png)

点击管理DNS

![管理DNS](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog09.png)

## 5、创建A记录

添加一条指向 185.199.108.153 的A记录。[官方说明](<https://help.github.com/cn/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain>)

![添加记录A](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog10.png)

## 6、创建CNAME记录

添加一条指向 <u>你的GitHub用户名.github.io</u>（开始时你创建的仓库名）的CNAME记录。比如我的是 isartjay.github.io 

![添加记录CNAME](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog11.png)

更改这么多就够了，其他任何内容都不要改。

 然后等候DNS配置更新（1分钟左右），之后在浏览器器输入你买的域名地址，你的个人页面就可以访问了。

## 7、下载GitHub桌面软件

为了更方便管理你的仓库，你可以下载 [GitHub 桌面版软件](https://desktop.github.com/)，安装完成后打开软件，点击左上角File，然后选择 Clone repository

![克隆](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog12.png)

点击URL，选择你要克隆的仓库和你要存放在电脑的路径地址。

![克隆路径](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog13.png)

## 8、更换主题

这时候，就该真正考虑一下你的博客风格了，如果你前端功底不好，就不建议频繁更换主题了，虽然要改也不是不行，只是很折腾。

你可以到下边的网站找你喜欢的主题：

- <http://jekyllthemes.org/>
- <https://jekyllthemes.io/>

![更换主题](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog14.png)

我就以这个主题 [Less Or More](<http://jekyllthemes.org/themes/Less-Or-More/>) 举例

![模板范例](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog15.png)

点击 **Downlod**，把它下载下来，你也可以先点击 **Demo** 预览一下。

## 9、应用主题

打开存放你克隆仓库的文件夹，把里面的文件全部都删了（没错），除了隐藏文件夹 **.git** 不要删。

显示隐藏文件，找到 **.git** 文件夹。

![显示隐藏文件](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog16.png)

然后把你下载的主题里的东西全部拖到你的原博客仓库里。

![更改内容](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog17.png)

## 10、配置博客

简单介绍一下这个仓库里的内容，根据自身需要修改内容

![配置](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog18.png)



- index.html：这是你博客的主页面，里面的内容就是你的主页了
- _config.yml：这是你博客的基本配置文件，里面有你博客的名字，以及存放博主的一些基本信息
- _layouts：这文件夹里面存放你每个页面的设计，一般有default.html（默认页面）和posts.html（博文页面）
- _includes：这个文件夹里的的内容将会通用到你博客每个页面，起到一种便利的作用
- _posts：这里面装的就是你的博文啦，记住，要用markdown语法写，要不上传会失败的



## 11、上传到GitHub

现在你已经把博客基本配置完成了，把它上传到GitHub公布吧

打开 GitHub 软件，你会发现changes那栏多了数字，这就是你本地文件发生改变数目的情况，在下边Summary 随便写串东西记录一下（更新日志等），然后点击 **Commit to master**

![上传](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog19.png)

点击 **Fetch origin** 提交

![提交](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/02_createblog/create_blog20.png)

## 12、end

稍等一会儿，打开你的网站，就会发现你的博客已经神奇的出现了。







