import express from "express";
import web from "./routes/web.js";
import myLogger from "./middlewares/logger-middleware.js";

const app = express();
const port = process.env.port || "3000";
// Setup views folder
// app.set("views", "./views");

// Application Level Middleware
// app.use(myLogger);
// app.use("/about", myLogger);

// Setup the template engine you use
app.set("view engine", "ejs");

// Routes Loads
app.use("/", web);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
