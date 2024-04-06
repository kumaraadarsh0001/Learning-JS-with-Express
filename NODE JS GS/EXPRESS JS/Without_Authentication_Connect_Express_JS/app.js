// Routing
const express = require("express");
const connectDB = require("./db/connectdb.js");
const app = express();
const port = process.env.PORT || "3000";
const DATABASE_URL =
  process.env.DATABASE_URL ||
  "mongodb+srv://kumaraadarsh:kumaraadarsh1@cluster0.4r7njdy.mongodb.net/?retryWrites=true&w=majority";

// Calling DB
connectDB(DATABASE_URL);

app.listen(port, () => {
  console.log(`Server Listning at http://localhost:${port}`);
});
