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

// readFilePromise('song1.txt')
// 	.then(function (data) {
// 		console.log(data);
// 		return readFilePromise('song2.txt');
// 	})
// 	.then(function (data) {
// 		console.log(data);
// 		return readFilePromise('song3.txt');
// 	})
// 	.then(function (data) {
// 		console.log(data);
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});


	// return ve mot array chua ket qua cua cac ham 
	Promise.all([
		readFilePromise('song1.txt'),
		readFilePromise('song2.txt'),
		readFilePromise('song3.txt'),
		]).then(function (data) {
			console.log(data);
		}).catch(function (error) {
			console.log(error);
		});