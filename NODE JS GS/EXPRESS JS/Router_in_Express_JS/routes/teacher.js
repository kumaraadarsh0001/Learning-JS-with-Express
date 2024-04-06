import express from "express";
const router = express.Router();

// All Teachers Routes
router.get("/all", (req, res) => {
  res.send("All Teacher");
});
router.post("/create", (req, res) => {
  res.send("Create Teacher");
});
router.get("/update", (req, res) => {
  res.send("Parse Update Teacher");
});
router.get("/delete", (req, res) => {
  res.send("Delete Teacher");
});

// module.exports=router  //old way
export default router;
