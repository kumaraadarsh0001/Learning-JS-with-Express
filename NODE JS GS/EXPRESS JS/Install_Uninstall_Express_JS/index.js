import express from "express"; // const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Loveyboy Badshah<h1/>");
});

app.listen(port, () => {
  console.log(`Server Runing At http://localhost:${port}`);
});
