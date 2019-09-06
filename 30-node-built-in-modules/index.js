// node built-in node js
var fs = require('fs');

// doc file song.txt
var text = fs.readFileSync('./song.txt',{encoding: 'utf-8'});
console.log(text);

// ghi 1 file
fs.writeFileSync('./song2.txt','I am Hau tk');