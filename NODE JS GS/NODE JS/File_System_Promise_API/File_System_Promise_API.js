// File_System_Promise_API
import * as fs from "fs/promises";
("CREATING DIRECTORY PATH SHOULD BE THERE");
try {
  await fs.mkdir("D:\\NODE JS\\File_System_Promise_API\\demo");
  console.log("Directory Created.....");
} catch (error) {
  console.log(error);
}
("CREATING DIRECTORY PATH SHOULD NOT BE THERE");
("IF PATH NOT EXIST RECURSIVE:TRUE WILL CREATE THE SAME PATH");
// try {
//   await fs.mkdir("D:\\NODE JS\\File_System_Promise_API\\test\\demo", {
//     recursive: true,
//   });
//   console.log("Directory Created.....");
// } catch (error) {
//   console.log(error);
// }

("READ FILE AND FOLDER IN DIRECTORY");
// try {
//   ("ONLY FOR DIRECTORY AND FILES");
//   const files = await fs.readdir(
//     "D:\\NODE JS\\File_System_Promise_API\\test\\demo"
//   );
// } catch (error) {
//   console.log(error);
// }

("REMOVE DIRECTORY SHOUD BE EMPTY");
// try {
//   ("IF DIRECTORY NOT BE EMPTY IT WILL NOT DELETE THE DIR");
//   await fs.rmdir("D:\\NODE JS\\File_System_Promise_API\\demo");
//   console.log("Deleted Successfully....");
// } catch (error) {
//   console.log(error);
// }

("CREATE AND WRITE FILE");
// try {
//   ("IF YOU WRITE EXISTING FILE NAME TO CREATE IT WILL OVERWRITE FORM NEW");
//   await fs.writeFile(
//     "readme.txt",
//     "hello node js\nleaening file system:\nPromise Based API"
//   );
// } catch (error) {}

("FOR FILES CONTENT ONLY IN DIRECTORY");
// try {
//   const data = await fs.readFile("readme.txt", "utf-8");
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

("APPEND DATAIN EXISTING FILE");
// try {
//   await fs.appendFile("readme.txt", "\nFlirting King");
// } catch (error) {
//   console.log(error);
// }

("COPY FILE ANYWHERE");
// try {
//   ("IT WILL CREATE INFO.TXT AND THEN COPY DATA FROM README.TXT");
//   //   await fs.copyFile("readme.txt", "info.txt");
//   await fs.copyFile(
//     "readme.txt",
//     "D:\\NODE JS\\File_System_Promise_API\\test\\demo\\info.txt"
//   );
//   console.log("File Copied Successfully");
// } catch (error) {
//   console.log(error);
// }

("GET FILE INFORMATION");
// try {
//   const stats = await fs.stat(
//     "D:\\NODE JS\\File_System_Promise_API\\test\\demo\\info.txt"
//   );
//   console.log(stats.isDirectory());
//   console.log(stats.isFile());

// } catch (error) {
//   console.log(error);
// }
