const mongoose = require("mongoose");

// mongodb connection...
// const conectDB = (DATABASE_URL) => {
//   return mongoose
//     .connect(DATABASE_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })

//     .then(() => {
//       console.log("connected....");
//     })
//     .catch((err) => {
//       console.log("failed : ---", err);
//     });
// };

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
