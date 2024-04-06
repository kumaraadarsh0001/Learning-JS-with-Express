// Routing
// const express = require("express");
// const stu = require("./routes/student.js");
// const tea = require("./routes/teacher.js");
import express from "express";
import stu from "./routes/student.js";
import tea from "./routes/teacher.js";
const app = express();
const port = process.env.PORT || "3000";

app.get("/", (req, res) => {
  res.send("Welcome To Myapp By \nKUMAR AADARSH");
});
// Load Router Modules
app.use("/student", stu);
app.use("/teacher", tea);

app.listen(port, (req, res) => {
  console.log(`Server Listning at http://localhost:${port}`);
});
