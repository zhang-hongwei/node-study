# 前端模块化的发展历程

## 什么是模块

1. 将一个复杂的程序依据一定的规则(规范)封装成几个块(文件), 并进行组合在一起；
2. 块的内部数据/实现是私有的, 只是向外部暴露一些接口(方法)与外部其它模块通信；

## 一个模块的组成

1. 数据--->内部的属性；
2. 操作数据的行为--->内部的函数；

> 模块化是指解决一个复杂的问题时自顶向下把系统划分成若干模块的过程，有多种属性，分别反映其内部特性；模块化编码：编码时是按照模块一个一个编码的, 整个项目就是一个模块化的项目；

## 非模块化的问题

1. 页面加载多个 js 的问题
2. 发生问题：
   - 难以维护 ；
   - 依赖模糊；
   - 请求过多；

```js
<script type="text/javascript" src="module1.js"></script>
<script type="text/javascript" src="module2.js"></script>
<script type="text/javascript" src="module3.js"></script>
<script type="text/javascript" src="module4.js"></script>
```

## 模块化的优点

1. 更好地分离：避免一个页面中放置多个 script 标签，而只需加载一个需要的整体模块即可，这样对于 HTML 和 JavaScript 分离很有好处；
2. 更好的代码组织方式：有利于后期更好的维护代码；
3. 按需加载：提高使用性能，和下载速度，按需求加载需要的模块
4. 避免命名冲突：JavaScript 本身是没有命名空间，经常会有命名冲突，模块化就能使模块内的任何形式的命名都不会再和其他模块有冲突。
5. 更好的依赖处理：使用模块化，只需要在模块内部申明好依赖的就行，增加删除都直接修改模块即可，在调用的时候也不用管该模块依赖了哪些其他模块。

# https://github.com/seajs/seajs/issues/277

http://justineo.github.io/singles/writing-modular-js/

https://juejin.im/post/5c17ad756fb9a049ff4e0a62

https://juejin.im/post/5cb004da5188251b130c773e#heading-32
