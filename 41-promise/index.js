// Promise
// promise-fs
// var fs = require('promise-fs');

// function onDone(song) {
// 	console.log(song);
// }

// function onError(error) {
// 	console.log(error);
// }

// function readFile(path) {
// 	return fs.readFile(path, {encoding : 'utf8'});
// }

// // fs.readFile('./song1.txt', {encoding : 'utf8'})
// //   .then(onDone)
// //   .catch(onError);

// readFile('song1.txt')
// 	.then(onDone)
// 	.then(function () {
// 		return readFile('song2.txt');
// 	})
// 	.then(onDone)
// 	.catch(onError);

var fs = require('fs');

function readFilePromise(path) {
	return new Promise(function (resolve, reject) {
		fs.readFile(path, {encoding : 'utf8'}, function (err, data) {
			if(err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

readFilePromise('song1.txt')
	.then(function (data) {
		console.log(data);
	})
	.then(function () {
		return readFilePromise('song2.txt');
	})
	.then(function (data) {
		console.log(data);
	})
	.catch(function (error) {
		console.log(error);
	});