// CREATE WEB SEVER
import http from "http";

("DYNAMIC PORT");
const server = http.createServer((request, response) => {
  response.setHeader("content-Type", "text/plan");
  response.end("RESPONCE FOR SERVER :-\nDYNAMIC PORT\nFOR NODEMON");
});

const PORT = process.env.PORT || 8000;
const HOST = "localhost";
server.listen(PORT, HOST, () => {
  console.log("Server Running at http://localhost:8000");
});
