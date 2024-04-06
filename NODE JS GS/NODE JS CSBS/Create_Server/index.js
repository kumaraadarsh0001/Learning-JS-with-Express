const http = require('http');

http
  .createServer((req, res) => {
    res.write('<h1>Hello Brother<h1/>');
    res.end();
  })
  .listen(3000);
