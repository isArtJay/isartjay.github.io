---
layout: default
title: "Node.js 的安装与配置"
tags: archives
---

# 下载及安装

1、先去[官网下载](https://nodejs.org/en/download/)对应系统安装包

2、安装时建议修改安装目录，不建议放在 C 盘，一路默认安装即可

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/nodejs_install/20200401150019.jpg)

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/nodejs_install/20200401145917.jpg)

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/nodejs_install/20200401150044.jpg)

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/nodejs_install/20200401150113.jpg)

3、安装完成后启动命令行工具，输入 node -v 和 npm -v 查看安装版本，出现提示版本信息即为安装成功

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/nodejs_install/20200401150159.jpg)

# 环境配置

> 这里主要配置的是 npm 安装的全局模块所在的路径，以及缓存 cache 的路径。
>
> 因为以后在执行类似：【npm install 模块名 -g】的安装语句时，会将安装的模块安装到【C:\Users\用户名\AppData\Roaming\npm】路径中，太占C盘空间。
>
> 我是将 nodejs 安装在 【D:\nodejs】 目录下，以下操作可根据实际安装目录进行对应调整：
>

1、在安装目录【D:\nodejs】中新建两个文件夹 node_global (全局包存放目录) 和 node_cache (缓存目录)

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/nodejs_install/20200401155921.jpg)

2、打开命令行（cmd）工具，依次执行以下两行命令： 

```
npm config set prefix "D:\nodejs\node_global"
npm config set cache "D:\nodejs\node_cache"
```

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/nodejs_install/20200401153225.jpg)

3、配置环境变量：

打开【系统属性-高级-环境变量】，在系统变量中，【新建】一个系统变量：

- 变量名：【NODE_PATH】
- 变量值：【D:\nodejs\node_global\node_modules】（这里的变量值请替换成你自己的路径，你可能想问：我的 node_global 文件夹里边没有 node_modules 文件夹啊，这里怎么填？答案是：不用管他，后边安装模块时，他自己会创建 node_modules 文件夹的 ！）

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/nodejs_install/bian1.jpg)

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/nodejs_install/20200401153357.jpg)

编辑用户变量的 PATH，将默认【C:\Users\blue\AppData\Roaming\npm】 修改为 【D:\nodejs\node_global】

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/nodejs_install/bian2.jpg)

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/nodejs_install/20200401153552.jpg)

这样，这两个环境变量就配置好了，然后依次点确定即可

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/nodejs_install/bian3.jpg)

# 使用淘宝 NPM 镜像

由于国内网络环境限制问题，使用 npm 安装包时，会遇到时间长，甚至安装失败的问题，建议使用淘宝镜像，具体方法参见[官网](https://developer.aliyun.com/mirror/NPM?from=tnpm)

使用官方推荐的 cnpm 命令行工具代替默认的 npm：

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/nodejs_install/20200401153809.jpg)

下面就可以使用 【cnpm install 模块名 -g】  命令安装模块了，假如先安装个 express：

```
cnpm install express -g
```

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/nodejs_install/20200401160307.jpg)

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/nodejs_install/20200401160320.jpg)

可以看到，此时 express 已经安装成功了，而且速度很快！

# 其他



有时用 cnpm 安装模块时的路径可能会存在问题，导致使用 react-native 开发应用时出现问题。此时可以用 nrm 切换回官方源：

```
npx nrm use npm
```

如果再想切换回淘宝源，可以输入以下命令：

```
npx nrm use taobao
```

