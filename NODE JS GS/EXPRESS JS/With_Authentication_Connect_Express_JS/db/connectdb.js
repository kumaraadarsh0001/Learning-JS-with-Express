const mongoose = require("mongoose");

// Async Await
const conectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("connected....");
  } catch (error) {
    console.log(error);
  }
};
module.exports = conectDB;
