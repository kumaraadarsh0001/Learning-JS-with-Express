import mongoose from "mongoose";

// Defining Scema
const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 60 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 5000.5,
  },
  hobbies: { type: Array },
  is_active: { type: Boolean },
  comment: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

// Compile Scema
const StudentModel = mongoose.model("student", StudentSchema);

// // Create Document
// const createDoc = async (name, age, fees, hobbies, is_active, comment) => {
//   try {
//     // Creating New Document
//     const StudentDocument = new StudentModel({
//       name: name,
//       age: age,
//       fees: fees,
//       hobbies: hobbies,
//       is_active: is_active,
//       comment: comment,
//     });

//     // Saving Document
//     const result = await StudentDocument.save();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = { StudentModel };
