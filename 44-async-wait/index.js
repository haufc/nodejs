// async await (node >= 7.6)

var fs = require('fs');

function readFilePromise(path) {
	return new Promise(function (resolve , reject) {
		fs.readFile(path, {encoding : 'utf8'} , function (err, data) {
			if(err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

async function run() {
	// var song1 = await readFilePromise('song1.txt');
	// var song2 = await readFilePromise('song2.txt');
	var result = await Promise.all([
		readFilePromise('song1.txt'),
		readFilePromise('song2.txt')
		]);
	return result;
}

run().then(function (data) {
	console.log("aaaa",data);
}).catch(function (err) {
	console.log(err);
})