import { join } from "path";

const aboutController = (req, res) => {
  res.render("about", { title: "About Page" });
};

export { aboutController };
