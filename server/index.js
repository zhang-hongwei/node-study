const http = require('http');
const app = http.createServer((req, res) => {
  console.log(req);
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('响应内容');
});

app.listen(5000);
