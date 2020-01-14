# cookie & session

## cookie

- 保存在浏览器，用户可以随意修改

- 不安全， 有限(4k)

### cookie-encrypter cookie 加密

## session

- 保存在服务端

- 安全，无限

```js
cookie - parse;

cookie - session;
```

multer

consolidate

## 设置 cookie

```js
// 设置cookie
res.cookie(name, vlaue, options);

// 读取cookie

res.cookies;

// 删除cookie
res.clearCookie;
```

session

express-session

cookie-session

```js
req.session['sesssion_name'] = '12332';
```
