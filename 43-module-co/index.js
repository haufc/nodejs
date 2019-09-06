var fs = require('fs');
var co = require('co');


function readFilePromise(url) {
	return new Promise(function (resolve, reject) {
		fs.readFile(url, {encoding : 'utf8'}, function (error, data) {
			if(error) {
				reject(error);
			} else {
				resolve(data);
			}
		});
	});
}

// co(function*() { // generator function
// 	// song1 = yield readFilePromise('song1.txt');
// 	// song2 = yield readFilePromise('song2.txt');
// 	// song3 = yield readFilePromise('song3.txt');

// 	var values = yield [
// 		readFilePromise('song1.txt'),
// 		readFilePromise('song2.txt'),
// 		readFilePromise('song3.txt')
// 	];

// 	return values;
// }).then(function (data) {
// 	console.log(data)
// }).catch(function (error) {
// 	console.log(error);
// });

var reaFiles = co.wrap(function*(files) {
	var values = yield files.map(function(elem) {
		return readFilePromise(elem);
	});
	return values;
});

reaFiles(['song1.txt', 'song2.txt', 'song3.txt'])
	.then(function (data) {
		console.log("dATA : ", data);
	})
	.catch(function (error) {
		console.log(error);
	});