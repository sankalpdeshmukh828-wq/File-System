const fs = require('fs');
const path = require('path');
const colors = require('colors');


// create directory

fs.mkdirSync("files", { recursive: true });

console.log("Folder created");

// create file

fs.writeFileSync('fileone.txt', 'Hello welcome to node js....');

// read file
const data = fs.readFileSync('fileone.txt', 'utf-8');

console.log(data.rainbow);

// append file

fs.appendFileSync('fileone.txt', ' writing to file one');
const data1 = fs.readFileSync('fileone.txt', 'utf-8');

console.log(data1.yellow);

// delete file

fs.unlinkSync('fileone.txt');

//Rename file
fs.renameSync('fileone.txt', 'filetwo.txt');

//delete directory

fs.rmdirSync('files');


