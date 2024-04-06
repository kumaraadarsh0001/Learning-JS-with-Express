// Routing
// const express = require("express");
import express from "express";
const app = express();
const port = process.env.PORT || "3000";

("for delete id number student");
// app.get("/student/delete/:id", (req, res) => {
//   // for retrieving id
//   console.log(req.params);
//   res.send(`Student Deleted ${req.params.id}`);
// });

("for find product by category and id number");
// app.get("/product/:category/:id", (req, res) => {
//   // for retrieving id
//   console.log(req.params);
//   // Destructure all params
//   const { category, id } = req.params;
//   res.send(`Product Category : ${category} and product Id : ${id}`);
// });

("for mixing strinng params and normal string");
// app.get("/order/:year/and/:month", (req, res) => {
//   console.log(req.params);
//   const { year, month } = req.params;
//   res.send(`Order of Year : ${year}  Month : ${month}`);
// });

("for searchinf starting from ending");
// app.get("/train/:from-:to", (req, res) => {
//   console.log(req.params);
//   const { from, to } = req.params;
//   res.send(`Travaling form ${from} to ${to}`);
// });

// app.get("/location/:state.:city", (req, res) => {
//   console.log(req.params);
//   const { state, city } = req.params;
//   res.send(`State : ${state} City : ${city}`);
// });

("WITH REGULAR EXPRESSION");
// app.get("/student/delete/:id([0-9]{1})", (req, res) => {
//   // for retrieving id
//   console.log(req.params);
//   res.send(`Student Deleted ${req.params.id}`);
// });
("If you want to give choice post or article only");
// app.get("/:type(post|article)/:id", (req, res) => {
//   res.send("Post or Article");
// });

// ("App.params");
// ("It can exicute only one time");
// app.param("id", (req, res, next, id) => {
//   console.log(`Called only one time ID : ${id}`);
//   next();
// });
// app.get("/user/:id", (req, res, next) => {
//   console.log("This is user Id Path 1");
//   next();
// });
// app.get("/user/:id", (req, res) => {
//   console.log("This is user Id Path 2");
//   res.send("Responce OK");
// });

("App.params -- Array of root parameter");
("It can exicute only one time");
// app.param(["id", "page"], (req, res, next, value) => {
//   console.log(`Called only onece : ${value}`);
//   next();
// });
// app.get("/user/:id/:page", (req, res, next) => {
//   console.log("This is user Id Path 1");
//   next();
// });
// app.get("/user/:id/:page", (req, res) => {
//   console.log("This is user Id Path 2");
//   res.send("Responce OK");
// });

("Query String");
app.get("/product", (req, res) => {
  console.log(req.query);
  res.send("Response OK");
});

app.listen(port, () => {
  console.log(`Server Listning at http://localhost:${port}`);
});
