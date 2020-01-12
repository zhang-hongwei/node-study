# module

1. 在 Node.js 模块系统中，每个文件都被视为一个独立的模块。

## module 对象

module.id 模块的识别符，通常是带有绝对路径的模块文件名。 module.filename 模块的文件名，带有绝对路径。 module.loaded 返回一个布尔值，表示模块是否已经完成加载。 module.parent 返回一个对象，表示调用该模块的模块。 module.children 返回一个数组，表示该模块要用到的其他模块。 module.exports 表示模块对外输出的值。

## module.exports 和 exports

为了方便，Node 为每个模块提供一个 exports 变量，指向 module.exports。这等同在每个模块头部，有一行这样的命令。 var exports = module.exports; \注意，不能直接将 exports 变量指向一个值，因为这样等于切断了 exports 与 module.exports 的联系。

CommonJS 规范加载模块是同步的

```js
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: '/Users/code/node/node-study/index.js',
  loaded: false,
  children: [],
  paths:
   [ '/Users/code/node/node-study/node_modules',
     '/Users/code/node/node_modules',
     '/Users/code/node_modules',
     '/Users/node_modules',
     '/node_modules' ] }
```

## 模块封装器

```js
// 在执行模块代码之前，Node.js 会使用一个如下的函数封装器将其封装：
(function(exports, require, module, __filename, __dirname) {
  // 模块的代码实际上在这里
});
```

## 模块作用域

### \_\_dirname

> 当前模块的目录名

### \_\_filename

> 当前模块的文件名。 这是当前的模块文件的绝对路径（符号链接会被解析）。

### exports

### module

### require(id)
