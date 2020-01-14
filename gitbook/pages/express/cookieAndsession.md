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

## session

### cookie-session

```js
const cookieSession = require('cookie-session');
app.use(cookieSession(options));
```

#### options

1. name: 默认 express:sess.
2. keys: `必须`

### express-session

1. name: 设置 cookie 中，保存 session 的字段名称，默认为 connect.sid
2. store: session 的存储方式，默认为存放在内存中，我们可以自定义 redis 等
3. genid: 生成一个新的 session_id 时，默认为使用 uid2 这个 npm 包
4. rolling: 每个请求都重新设置一个 cookie，默认为 false
5. resave: 即使 session 没有被修改，也保存 session 值，默认为 true
6. saveUninitialized：强制未初始化的 session 保存到数据库
7. secret: 通过设置的 secret 字符串，来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
8. cookie : 设置存放 sessionid 的 cookie 的相关选项
