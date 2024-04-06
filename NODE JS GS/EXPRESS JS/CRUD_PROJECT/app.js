// Routing
import express from "express";
import connectDB from "./db/connectdb.js";
import { createDoc, createMultiDoc } from "./model/Student.js";
const app = express();
const port = process.env.PORT || "3000";
const DATABASE_URL =
  process.env.DATABASE_URL ||
  "mongodb+srv://kumaraadarsh:kumaraadarsh1@cluster0.4r7njdy.mongodb.net/?retryWrites=true&w=majority";

// DataBase Connection
connectDB(DATABASE_URL);

app.listen(port, () => {
  console.log(`Server Listning at http://localhost:${port}`);
});
