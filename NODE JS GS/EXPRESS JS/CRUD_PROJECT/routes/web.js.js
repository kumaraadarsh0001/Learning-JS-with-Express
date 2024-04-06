import express from "express";
const router = express.Router();
import StudentModel from "../model/create";

// Routes
router.get("/create", new StudentModel());

export default router;
