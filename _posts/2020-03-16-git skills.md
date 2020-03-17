---
layout: default
title: "踩坑！用 Git 同时管理两个远程仓库管理两个远程仓库"
tags: archives
---

发现最近网站的访问速度并不理想，因为当时只托管在了 [GitHub](https://github.com/) 上，GitHub的服务器在国外，所以导致国内访问服务器的时间比较长。

解决方法就是把网站同时托管在国内的 [Coding](https://coding.net/) 上，正好他们也提供了 pages 服务。让国外解析到 GitHub 的服务器上，国内解析到 Coding 的服务器上，这样无论是在国内，还是再国外，网站的访问速度都会大幅提升。

所以就有了这次的踩坑经历，用 Git 同时管理并 push 到两个远程仓库。

废话不多说，下面直接上干货。

# 创建远程仓库

先在 Coding 和 GitHub 上创建仓库，为了避免错误，不要初始化 README，license，或者 gitignore 文件 

**GitHub** ：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/14_git-skills/4.png)

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/14_git-skills/7.png)

**Coding** ：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/14_git-skills/5.png)

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/14_git-skills/6.png)

# 进入本地项目

打开终端，*<u>cd 你的本地项目地址</u>*，进入项目目录：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/14_git-skills/1.png)

# 初始化本地仓库

```shell
git init
```

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/14_git-skills/2.png)

# 删除已关联的名为origin的远程库

使用多个远程库时，要注意 Git 给远程库起的默认名称是 origin，如果有多个远程库，我们需要用不同的名称来标识不同的远程库，首先要删除已关联的名为 origin 的远程库：

```
git remote rm origin
```

如果输入后显示如下图所示：fatal: No such remote: origin ，说明你本地项目没有已关联的名为 origin 的远程库，那么你可以忽略此步。

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/14_git-skills/3.png)

# 配置Git用户名和邮箱

```
git config user.name "lien"
```

```
git config user.email "artjay.code@gmail.com"
```

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/14_git-skills/8.png)

# 关联GitHub远程库

这里我用的是 SSH 的方式，至于如何管理并配置 SSH，你可以参考[这里](https://www.lien.run/20190805/more-ssh)

注意，远程库的名称叫 github，不叫 origin 了！

```
git remote add github git@github.com:isArtJay/test.git
```

# 关联Coding远程库

同样注意，远程库的名称叫 coding，不叫 origin 了！

```
git remote add coding git@e.coding.net:liencn/lien/test.git
```

现在，我们用 git remote -v 查看远程库信息，可以看到两个远程库：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/14_git-skills/9.png)

# 添加文件到本地仓库

添加文件到本地仓库，其中  **.**  的意思是本地项目目录中的所有文件：

```
git add .
```

# 提交文件

-m 后的参数是你的提交信息，可以随意填写：

```
git commit -m "First commit"
```

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/14_git-skills/10.png)

# push到远程仓库

如果要 push 到 GitHub，使用命令：

```
git push github master
```

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/14_git-skills/11.png)

如果要 push 到 Coding，使用命令：

```
git push coding master
```

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/14_git-skills/12.png)

# 查看远程仓库

可以看到我们已经将本地项目推送到了的 GitHub 仓库和 Coding 仓库：

**GitHub** ：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/14_git-skills/15.png)

**Coding** ：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/14_git-skills/14.png)