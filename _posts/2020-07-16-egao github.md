---
title: "恶搞 GitHub 贡献图"
layout: post
---

最近读到一篇趣文，各种恶搞 Github 的『Public contributions』，下面截取几个小伙伴的战绩：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/egao/01.jpg)

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/egao/02.jpg)

顺藤摸瓜，发现原来有人已经做出工具啦，名叫 [gitfiti](<https://github.com/gelstudios/gitfiti>)。主要对应预先定义的模板，进行相应日期的 commit 操作，push 至 Github 后在贡献栏中生成相应像素点，并且利用 Github 贡献数不同颜色深度不同的机制，就可以在自己的贡献栏里面看见像素画了。

# 一、下载插件

直接 clone：

```shell
git clone git@github.com:gelstudios/gitfiti.git
```

或者点击 Github 页面的下载链接将整个项目下载到本地：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/egao/03.png)

# 二、新建仓库

在自己的 Github 中创建一个新的 repo，名字自取，不要创建 license 和 readme（防止后面 push 的时候产生冲突）。

# 三、运行 gitfiti.py

下载到本地后在命令行中运行 gitfiti.py，显出欢迎界面，此时第一条交互信息不用填写什么内容，直接回车即可。

```shell
python gitfiti.py
```

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/egao/04.jpg)

# 四、输入 Github 用户信息

接着输入自己的 Github 用户名和刚刚新建的 repo 名

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/egao/05.jpg)

# 五、输入绘图信息

选择从哪里开始绘图，输入一个数字，代表从贡献栏的第几周开始（从左开始数）；如果此处不输入直接回车则默认从最左边开始。

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/egao/06.jpg)

# 六、选择最大贡献数

接下来会提醒你，对比你已有的贡献后，一天中最大的贡献数是多少，然后让你选择本次绘图生成的像素点的最大贡献数（Github 的像素块颜色机制为贡献相对越大的那天颜色越深）。

建议此处直接使用自己的最大贡献数，否则自己之前的贡献就全部变成浅绿了。

此处输入 gitfiti 就表示使用自己的最大贡献数。

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/egao/07.jpg)

# 七、选择绘图模板

此处可以使用自定义模板或者开发者已经设定好的模板。

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/egao/08.jpg)

要使用自定义模板，就在上面那一行中输入模板的文件路径，自定义模板的方法可以参见[该项目的说明页](https://github.com/gelstudios/gitfiti)。

如果使用开发者设定的模板，上面一行就直接回车，然后下面选择模板，输入心仪的模板名字（模板名对应图案效果同样参见[该项目的说明页](https://github.com/gelstudios/gitfiti)）。

# 八、运行 gitfiti.sh 脚本

一切搞定后，项目会自动生成一个 shell 脚本 gitfiti.sh，接下来运行这个脚本便可以自动commit 并 push 至你新建的那个 repo，等待一段时间，你便能在自己的贡献栏看见有趣的像素画啦。

（下图运行脚本的时间有点长~ 耐心一点，等待运行完毕~）

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/egao/09.jpg)

运行完脚本，再稍等10分钟左右~ 刷新一下自己的简历页，效果图就出来啦~ 

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/egao/11.jpg)

# 九、注意

**2 个问题：**

①：生成的 shell 脚本没有运行权限。先运行一下 chmod 777 gitfiti.sh 即可。

```shell
chmod 777 gitfiti.sh
```

②：push 不成功，一般是因为新 repo 里面已经有文件，push 产生冲突。可以打开 gitfiti.sh，把最后一行改为下面这句就行：

```shell
git push -f -u origin master    //如果有冲突强制合并
```

# 十、取消

最后如果想取消这个效果，直接删除创建的 repo，贡献栏和贡献数就会回归正常。
