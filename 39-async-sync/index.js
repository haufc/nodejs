var fs = require('fs');

console.log("Start");
fs.readFile('./song1.txt', {encoding : 'utf8'}, function (err , data) {
	console.log(data);
});

var song2 = "" ;
fs.readFile('./song2.txt', {encoding : 'utf8'}, function (err , data) {
		console.log(data);
});
console.log("End");