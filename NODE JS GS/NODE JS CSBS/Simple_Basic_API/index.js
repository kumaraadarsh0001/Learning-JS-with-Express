const server = require("http");
const data = require("./data");
server
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "applicationjson" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(8080);
