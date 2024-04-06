import express, { Router } from "express";
const router = express.Router();
import { join } from "path";
import { homeController } from "../controllers/homeController.mjs";
import { aboutController } from "../controllers/aboutController.mjs";
import myLogger from "../middlewares/logger-middleware.js";
// Static File Loads
router.use(express.static(join(process.cwd(), "public")));

// Router Level Middleware
router.use(myLogger);
("It will work only for this file routes it's cant work another file routes");
// Routes
router.get("", homeController);
router.get("/about", aboutController);

export default router;
