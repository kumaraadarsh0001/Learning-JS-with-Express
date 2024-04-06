// File_System_Synchoronous_API
import * as fs from "fs";

("CREATE DIRECTORY PATH SHOULD BE THERE");
fs.mkdirSync("D:\\NODE JS\\File_System_Sync_API\\DEMO");
console.log("Directory Created....");

("CREATE DIRECTORY PATH SHOULD NOT BE THERE");
// fs.mkdirSync("D:\\NODE JS\\File_System_Sync_API\\TEST\\DEMO", {
//   recursive: true,
// });
// console.log("Directory Created....");

("READ CONTENT FROM DIRECTORY");
// const files = fs.readdirSync("D:\\NODE JS\\File_System_Sync_API\\DEMO");
// for (const file of files) {
//   console.log(file);
// }

("REMOVE DIRECTORY IF EXIST AND EMPTY EMPTY");
// fs.rmdirSync("D:\\NODE JS\\File_System_Sync_API\\main");
// console.log("Directory Removed....");

("CRATE AND WRITE FILE");
// fs.writeFileSync(
//   "readme.txt",
//   "LOVELY BOY BADSHAH\nFLIRTING KING\nKHALNAAK SANJU BABA"
// );

("READ DATA FROM FILE");
// const data = fs.readFileSync("readme.txt", "utf-8");
// console.log(data);

("APPEND DATA IN FILE");
// fs.appendFileSync("readme.txt", "\nHELLO KUMAR AADARSH");
// console.log("Data Appended....");

("GET FILE INFORMATION");
// const stats = fs.statSync("D:\\NODE JS\\File_System_Promise_API\\readme.txt");
// console.log(stats.isDirectory());
// console.log(stats.isFile());
// console.log(stats);
