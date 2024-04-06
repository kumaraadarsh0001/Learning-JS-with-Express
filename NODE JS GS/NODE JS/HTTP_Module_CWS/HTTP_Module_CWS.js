// CREATE WEB SEVER -HTTP MODULE
import http from "http";
("STATIC PORT");
// const server = http.createServer((request, response) => {
//   response.setHeader("content-Type", "text/plan");
//   response.end("Responce for server-STATIC PORT");
// });

// server.listen(8000, "localhost", () => {
//   console.log("Server Running at http://localhost:8000");
// });

("DYNAMIC PORT");
const server = http.createServer((request, response) => {
  response.setHeader("content-Type", "text/plan");
  response.end("Responce for server-DYNAMIC PORT");
});

const PORT = process.env.PORT || 8000;
const HOST = "localhost";
server.listen(PORT, HOST, () => {
  console.log("Server Running at http://localhost:8000");
});
