const mongoose = require("mongoose");

// Async Await
const conectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "SchoolDB",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Successfully....");
  } catch (error) {
    console.log(error);
  }
};
module.exports = conectDB;
