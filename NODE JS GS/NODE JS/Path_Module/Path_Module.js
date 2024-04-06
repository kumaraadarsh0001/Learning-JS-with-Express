// Path Module
const path = require('path');
('FOR BASE NAME :');
console.log(path.basename('D:/NODE JS/Path_Module/Path_Module.js'));
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

('FOR DIR NAME :');
// console.log(path.dirname("D:/NODE JS/Path_Module/Path_Module.js"));
// console.log(path.dirname(__filename));
// console.log(path.dirname(__filename, ".js"));

('FOR EXTENTION NAME :');
// console.log(path.extname(__filename));

('FOR JOIN METHOD :');
// console.log(path.join("/searh", "label", "course/python", "oop"));
// console.log(path.join("/searh", "label", "course/python", "oop", ".."));
// console.log(path.join("/searh", "label", "course/python", "oop", "..", ".."));
// console.log(path.join(__dirname, "course/python", "oop"));

('FOR NORMALIZE METHOD :');
// console.log(path.normalize("d:\\\\fast\\\\python"));
// console.log(path.normalize("d:\\\\fast\\\\python\\..\\"));
// console.log(path.win32.normalize("d:///\\\\fast///\\\\python///"));

('FOR PARSE VALUE :');
// console.log(path.parse(__dirname));
// console.log(path.parse(__filename));
// console.log(path.parse(__dirname).base);

('FOR ABSOLUTE METHOD :');
// console.log(path.isAbsolute("///server"));
// console.log(path.isAbsolute("\\\\serrver"));
// console.log(path.isAbsolute("c:/food/.."));
// console.log(path.isAbsolute("c:\\food\\.."));
// console.log(path.isAbsolute("bar/baz"));
// console.log(path.isAbsolute("bar\\baz"));
// console.log(path.isAbsolute(".."));
