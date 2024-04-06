// CREATE WEB SEVER
import http from "http";

("DYNAMIC PORT");
const server = http.createServer((request, response) => {
  "Request";
  //   if (request.url != "/favicon.ico") {
  //     console.log(request.url);
  //   }
  "Response";
  response.writeHead(202, "Good", { "content-Type": "text/html" });
  if (request.url === "/") {
    response.end("<h1>HOME PAGE<h1/>");
  } else if (request.url === "/about/") {
    response.end("<h1>ABOUT PAGE<h1/>");
  } else if (request.url === "/contact/") {
    response.end("<h1>CONTACT PAGE<h1/>");
  } else {
    response.end("<h1>PAGE NOT FOUND<h1/>");
  }
});

const PORT = process.env.PORT || 8000;
const HOST = "localhost";
server.listen(PORT, HOST, () => {
  console.log("Server Running at http://localhost:8000");
});
