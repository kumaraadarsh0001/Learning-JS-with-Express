import express from "express";
const router = express.Router();
import { homeController } from "../controllers/homeController.mjs";
import { aboutController } from "../controllers/aboutController.mjs";

router.get("", homeController);
router.get("/about", aboutController);

export default router;
