const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

const publicPath = path.join(__dirname, "public");

app.get("/profile", (req, res) => {
  const user = {
    name: "Aadarsh",
    phone: 7206290255,
    email: "ka893537@gmail.com",
    skills: ["python", "django", "js", "node js", "HTML-CSS"],
  };
  res.render("profile", { user });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});

app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/nopage.html`);
});

app.listen(8080);
