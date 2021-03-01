---
title: "Binary tree traversal"
layout: post
---

# 什么是二叉树
先来一段非常规矩的定义：

>二叉树（Binary Tree）：由 n(n≥0)个结点的有限集 T 构成，此集合可能是空集，也可能由一个根节点及两颗互不相交的左、右子树组成，并且左、右子树都是二叉树。

二叉树上的每个结点最多有两个子树的树结构，也就是每一个父结点最多长出两个树杈。

例如这样：
![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/binaryTree/1.svg)


其中，A 就是整个二叉树的根结点，那么 B 就是 A 的左子结点，C 就是 A 的右子结点。

每一个结点，我们可以用 C 语言这样实现：

```c
// 二叉树结点
struct node{
    struct node *left;// 左子结点
    char data;
    struct node *right;// 右子结点
};
```



# 遍历方法
二叉树的基本结构是由根节点和左、右子树 3 个基本单元组成的，因此若能依次遍历这 3 个部分，就可以遍历整个二叉树。

如果用 L、D、R 分别表示遍历左子树、访问根节点、遍历右子树，则可有 DLR、LDR、LRD、DRL、RDL、RLD 6 种遍历二叉树的的方式。

为了方便起见，若限定按先左后右的顺序，那么只剩下 DLR、LDR、LRD 3 种情况，分别称为**先序遍历**、**中序遍历**和**后序遍历**。

## 1、先序遍历
先序遍历的递归算法：
1. 先访问**根**节点
2. 再遍历**左**子树
3. 再遍历**右**子树

上图二叉树的先序遍历的顺序就是 ABCDEGHF。我们可以用 C 语言这样实现：
```c
void preOrder(struct node *root){
    if(root!=NULL){
        printf(" %c",root->data);
        preOrder(root->left);
        preOrder(root->right);
    } 
}
```
## 2、中序遍历

中序遍历的递归算法：
1. 先遍历**左**子树
2. 再访问**根**节点
3. 再遍历**右**子树

上图二叉树的中序遍历的顺序就是 DBAGEHCF。我们可以用 C 语言这样实现：
```c
void inOrder(struct node *root){
    if(root!=NULL){
        inOrder(root->left);
        printf(" %c",root->data);
        inOrder(root->right);
    }
}
```

## 3、后序遍历

后序遍历的递归算法：
1. 先遍历**左**子树
2. 再遍历**右**子树
3. 再访问**根**节点

上图二叉树的后序遍历的顺序就是 DBGHEFCA。我们可以用 C 语言这样实现：
```c
void postOrder(struct node *root){
    if(root!=NULL){
        postOrder(root->left);
        postOrder(root->right);
        printf(" %c",root->data);
    }
}
```

# 练习

## 1、已知先序、中序，求后序

问题是这样的：
>已知二叉树的先序遍历顺序为ABCDEGHF，中序遍历顺序为DBAGEHCF，求该二叉树的后序遍历。

我们的解题思路是，先根据先序、中序遍历顺序重新构造出这个二叉树，再根据二叉树写出后序遍历顺序。

### 重构二叉树

先序遍历（**A**BCDEGHF）中的第一个结点A肯定为根结点，那么在中序遍历（DB**A**GEHCF）中，A结点的左边（DB）肯定为结点A的左子树，A结点的右边（GEHCF）肯定为结点A的右子树，初步判断二叉树是这样的：

![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/binaryTree/2.svg)

再看A的左子树（DB），在先序遍历（A**B**CDEGHF）中，B在最前面，说明B为该子树的根结点，再看中序遍历（D**B**AGEHCF），B的左边（D）肯定为B的左子树，B的右边（无）肯定为B的右子树，初步判断二叉树是这样的：
![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/binaryTree/3.svg)
再看A的右子树（GEHCF），在先序遍历（AB**C**DEGHF）中，C在最前面，说明C为该子树的根结点，再看中序遍历（DBAGEH**C**F），C的左边（GEH）肯定为C的左子树，C的右边（F）肯定为C的右子树，初步判断二叉树是这样的：
![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/binaryTree/4.svg)
再看C的左子树（GEH），在先序遍历（ABCD**E**GHF）中，E在最前面，说明E为该子树的根结点，再看中序遍历（DBAG**E**HCF），E的左边（G）肯定为E的左子树，E的右边（H）肯定为E的右子树，可以最终判断出二叉树是这样的：
![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/binaryTree/1.svg)

### 写出后序遍历顺序
根据二叉树得到的后序遍历顺序为：DBGHEFCA

## 2、已知中序、后序，求先序

问题是这样的：
>已知二叉树的中序遍历顺序为DBAGEHCF，后序遍历顺序为DBGHEFCA，求该二叉树的先序遍历。

我们的解题思路是：先根据中序、后序遍历顺序重新构造出这个二叉树，再根据二叉树写出先序遍历顺序。
### 重构二叉树

后序遍历（DBGHEFC**A**）中的最后一个结点A肯定为根结点，那么在中序遍历（DB**A**GEHCF）中，A结点的左边（DB）肯定为结点A的左子树，A结点的右边（GEHCF）肯定为结点A的右子树，初步判断二叉树是这样的：
![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/binaryTree/2.svg)
再看A的左子树（DB），在后序遍历（D**B**GHEFCA）中，B在最后面，说明B为该子树的根结点，再看中序遍历（D**B**AGEHCF），B的左边（D）肯定为B的左子树，B的右边（无）肯定为B的右子树，初步判断二叉树是这样的：
![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/binaryTree/3.svg)
再看A的右子树（GEHCF），在后序遍历（DBGHEF**C**A）中，C在最后面，说明C为该子树的根结点，再看中序遍历（DBAGEH**C**F），C的左边（GEH）肯定为C的左子树，C的右边（F）肯定为C的右子树，初步判断二叉树是这样的：
![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/binaryTree/4.svg)
再看C的左子树（GEH），在后序遍历（DBGH**E**FCA）中，E在最后面，说明E为该子树的根结点，再看中序遍历（DBAG**E**HCF），E的左边（G）肯定为E的左子树，E的右边（H）肯定为E的右子树，可以最终判断出二叉树是这样的：
![](https://lien-1258580758.cos.ap-shanghai.myqcloud.com/blog-img/binaryTree/1.svg)

### 写出先序遍历顺序
根据二叉树得到的先序遍历顺序为：ABCDEGHF