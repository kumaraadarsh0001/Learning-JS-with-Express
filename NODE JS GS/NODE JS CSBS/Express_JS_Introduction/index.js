const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send(`
  Hello, This is Home Page"
  <a href="/about"><button>AboutPage<button/><a/>
  `);
});

app.get("/about", (req, res) => {
  res.send(`
  <input type="text" placeholder="User Name"value="${req.query.name}" />
  <button>Submit<button/>
  <a href="/"><button>Home Page<button/><a/>
  `);
});

app.get("/help", (req, res) => {
  console.log("Dtat send by browser >>>>", req.query);
  res.send([
    {
      name: "Aadarsh",
      phone: 7206290255,
    },
    {
      name: "Anish",
      phone: 7056703095,
    },
    {
      name: "Dilip",
      phone: 9728913762,
    },
  ]);
  //   res.send(res.query);
});

app.listen(8080);
