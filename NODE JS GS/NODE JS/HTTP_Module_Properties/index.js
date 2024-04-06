// CREATE WEB SEVER
import http from "http";

("DYNAMIC PORT");
const server = http.createServer((request, response) => {
  "Request";
  //   if (request.url != "/favicon.ico") {
  //     console.log(request.url);
  //   }
  "Response";
  //   response.statusCode = 202;
  //   response.statusMessage = "Good";
  //   response.setHeader("content-Type", "text/plan");
  response.writeHead(202, "Good", { "content-Type": "text/plan" });
  response.end("RESPONCE FOR SERVER :-\nDYNAMIC PORT\nFOR NODEMON");
});

const PORT = process.env.PORT || 8000;
const HOST = "localhost";
server.listen(PORT, HOST, () => {
  console.log("Server Running at http://localhost:8000");
});
