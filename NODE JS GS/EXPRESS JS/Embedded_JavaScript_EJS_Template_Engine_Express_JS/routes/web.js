import express from "express";
const router = express.Router();
import { join } from "path";
import { homeController } from "../controllers/homeController.mjs";
import { aboutController } from "../controllers/aboutController.mjs";

// Static File Loads
router.use(express.static(join(process.cwd(), "public")));

// Routes
router.get("", homeController);
router.get("/about", aboutController);

export default router;
