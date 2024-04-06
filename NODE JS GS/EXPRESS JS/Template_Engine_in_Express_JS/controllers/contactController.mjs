import { join } from "path";

const contactController = (req, res) => {
  res.render("contact", { name: "Kumar Aadarsh" });
};

export { contactController };
