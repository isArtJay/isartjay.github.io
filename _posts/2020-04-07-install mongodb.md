---
layout: default
title: "windows下安装 MongoDB"
tags: archives
---

# 一、MongoDB简介

MongoDB 是一个基于分布式文件存储的数据库，由 C++ 语言编写，旨在为WEB应用提供可扩展的高性能数据存储解决方案。

MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成，MongoDB 文档类似于 JSON 对象，字段值可以包含其他文档，数组及文档数组。

MongoDB 服务端可运行在 Linux、Windows或mac os x 平台，支持 32 位和 64 位应用，默认端口为 27017。

MongoDB 支持各种编程语言: Python，Java，C++，PHP，C# 等多种语言。

# 二、下载

MongoDB 提供了可用于 32 位系统和 64 位系统的预编译二进制包（新版本没有了 32 位系统的安装文件），你可以 [进入 MongoDB 官网下载安装](https://www.mongodb.com/download-center/community)，进去之后会看到如下图，直接点击 Download 下载即可，也可以在 Version 中选择你想要的版本：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/1.png)

# 三、安装

双击打开文件进行安装

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/20200407204709.jpg)

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/20200407204714.jpg)

这里可以通过点击 **"Custom"** 按钮来自定义你自己的安装目录

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/20200407204721.jpg)

这里我选择安装在 **D:\mongodb** 这个目录下（安装目录会影响我们后面的配置）

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/20200407204754.jpg)

这里直接选择直接 **NEXT**（下一步）：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/20200407204803.jpg)

这里左下角的 **"Install MongoDB Compass"** 建议不要勾选，否则可能要很长时间都一直在执行安装，然后点击 **NEXT**

其实 MongoDB Compass 就是一个图形界面管理工具，这里不安装也是没有问题的，可以自己去下载一个图形界面管理工具，比如 [Robo3T](https://robomongo.org/)

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/20200407204810.jpg)

点击 **Install**（安装）

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/20200407204818.jpg)

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/20200407204856.jpg)

这里会出现报错信息：

```
Service 'MongoDB Server'(MongoDB)failed to start. Verify that you have sufficient privileges to start system services.
```

解决办法就是：直接点 **Ignore**（忽略）就可以了，后边配置的时候会解决这个问题！

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/20200407205108.jpg)

稍等片刻，安装成功，点击 Finish

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/20200407205116.jpg)

# 四、配置

MongoDB 的安装过程是很简单的，但是配置就比较麻烦了，可能会遇到各种各样的问题。

首先要在安装根目录 mongodb 的 data 文件夹里新建一个 db 文件夹和一个 log 文件夹：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/20200407211257.jpg)

然后在 log 文件夹下新建一个 mongo.log 文件：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/20200407211412.jpg)

之后将 **D:\mongodb\bin** 添加到系统环境变量 Path 中：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/20200407212253.jpg)

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/20200407212320.jpg)

将 **D:\mongodb\bin** 添加在最后边，注意各个变量值之间要用 **;**（分号） 隔开 ，之后一直点确定

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/20200407212926.jpg)

然后打开 cmd 窗口运行一下 **mongo** 命令，会出现如下情况：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/3.png)

这是因为我们还没有启动 MongoDB 服务，自然也就连接不上服务了。那要怎么启动呢？在 cmd 窗口中运行如下命令：

```
 mongod --dbpath D:\mongodb\data\db
```

需要注意的是：如果你没有提前创建db文件夹，是无法启动成功的。运行成功之后，我们打开浏览器，输入**127.0.0.1:27017**，看到如下图，就说明 MongoDB 服务已经成功启动了。

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/4.png)

# 五、番外

如果每次都要这么启动服务的话也太麻烦了吧，这里你可以选择设置成开机自启动，也可以选择用命令 net start mongodb 来手动启动，这里我选择使用后者，具体方法如下。

还是打开 cmd 窗口，不过这次是以管理员身份运行，然后输入如下命令：

```
mongod --dbpath "D:\mongodb\data\db" --logpath "D:\mongodb\data\log\mongo.log" -install -serviceName "MongoDB"
```

如果没有报错的话就说明成功添加到服务里了，可以使用 win+R 然后输入 services.msc 命令进行查看：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/8.png)

默认是自动运行的，这里我选择把它改成手动的。然后在 cmd 窗口中运行 net start mongodb：(如果出现以下情况)

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/6.png)

怎么解决呢？两个步骤：

1）运行 sc delete mongodb 删除服务；

2）再运行一次配置服务的命令：

```
mongod --dbpath "D:\mongodb\data\db" --logpath "D:\mongodb\data\log\mongo.log" -install -serviceName "MongoDB"
```

然后再运行 net start mongodb，服务启动成功：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/install_mongodb/7.png)

# 六、可能遇到的问题

**1.mongod 不是内部或外部命令**

出现这种问题说明你没有把 bin 目录添加到环境变量之中，重新添加一下即可解决。

**2.服务名无效**

首先是看你输入的服务名称是否有误，然后再查看本地服务中有没有 MongoDB 服务，如果没有服务，则运行命令添加服务即可。

**3.发生服务特定错误：100**

删除 db 文件夹下的 mongod.lock 和 storage.bson 两个文件，若删除完之后仍然出现这种问题，用 sc delete mongodb 删除服务，再配置一下服务就能解决了。























