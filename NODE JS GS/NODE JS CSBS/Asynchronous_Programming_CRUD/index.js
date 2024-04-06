const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'CRUD');
const filepath = `${dirPath}\\myfile.txt`;
const input = process.argv;

if (input[2] === 'create') {
  fs.writeFileSync(filepath, 'this is a simple file ');
} else if (input[2] === 'read') {
  fs.readFile(filepath, 'utf-8', (error, item) => {
    console.log(item);
  });
} else if (input[2] === 'update') {
  fs.appendFile(filepath, 'hye how are you', (error) => {
    if (error) throw error;
    console.log('FILE CONTENT IS UPDATED');
  });
} else if (input[2] === 'rename') {
  fs.rename(filepath, `${dirPath}\\indexfile.txt`, (error) => {
    if (error) throw error;
    console.log('FILE NAME IS UPDATED');
  });
} else if (input[2] === 'delete') {
  fs.unlinkSync(`${dirPath}\\indexfile.txt`, (error) => {
    if (error) throw error;
    console.log('FILE IS DELETED');
  });
}
