import express from "express";
const router = express.Router();

// All Student Routes
router.get("/all", (req, res) => {
  res.send("All Student");
});
router.post("/create", (req, res) => {
  res.send("Create Student");
});
router.get("/update", (req, res) => {
  res.send("Parse Update Student");
});
router.get("/delete", (req, res) => {
  res.send("Delete Student");
});

// module.exports = router;  //old way
export default router;
