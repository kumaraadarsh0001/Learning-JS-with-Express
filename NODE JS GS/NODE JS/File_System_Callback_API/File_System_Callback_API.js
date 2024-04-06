// File_System_Callback_API
import * as fs from "fs";

("CREATE DIRECTORY PATH SHOULD BE THERE");
fs.mkdir("D:\\NODE JS\\File_System_Callback_API\\demo", (error) => {
  if (error) throw error;
  console.log("Directory Created...");
});

("CREATE DIRECTORY PATH SHOULD NOT BE THERE");
// fs.mkdir(
//   "D:\\NODE JS\\File_System_Callback_API\\test\\demo",
//   { recursive: true },
//   (error) => {
//     if (error) throw error;
//     console.log("Directory Created...");
//   }
// );

("READ CONTENT OF DIRECTORY");
// fs.readdir(
//   "D:\\NODE JS\\File_System_Callback_API\\test\\demo",
//   (error, files) => {
//     if (error) throw error;
//     for (const file of files) {
//       console.log(file);
//     }
//   }
// );

("REMOVE DIRECTORY");
("if directory not empty it will not delete directory");
// fs.rmdir("D:\\NODE JS\\File_System_Callback_API\\demo", (error) => {
//   if (error) throw error;
//   console.log("Directory Deleted Successfully.....");
// });

("CREATE FILE AND WRITE THERE");
// fs.writeFile(
//   "README.TXT",
//   "hello node js\nlearning file system:\nCallback API",
//   (error) => {
//     if (error) throw error;
//     console.log("File Created Successfull....");
//   }
// );

("READ FILE DATA");
// fs.readFile("README.TXT", "utf-8", (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });

("APPEND DATA IN EXISTING FILE");
// fs.appendFile("README.TXT", "\nI LOVE YOU ANNU(KAJAL)", (error, data) => {
//   if (error) throw error;
//   console.log("Data Append Successfully....");
// });

("COPY FILE");
// fs.copyFile("README.TXT", "D:\\NODE JS\\Path_Module\\info.txt", (error) => {
//   if (error) throw error;
//   console.log("File Copied....");
// });

("GET FILE OR DIR INFORMATION");
// fs.stat(
//   "D:\\NODE JS\\File_System_Callback_API\\test\\demo\\myapp.js",
//   (error, stats) => {
//     if (error) throw error;
//     console.log(stats.isDirectory());
//     console.log(stats.isFile());
//   }
// );
