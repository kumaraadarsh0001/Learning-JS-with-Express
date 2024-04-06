import express from "express";
import web from "./routes/web.js";

const app = express();
const port = process.env.port || "3000";
// Setup views folder
// app.set("views", "./views");

// Setup the template engine you use
app.set("view engine", "ejs");
// Routes Loads
app.use("/", web);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
