// setTimeout 
// clearTimeout

//setTimeout(fn, ms); // fn = function(), ms = miliseconds
// set thời gian chạy sau 1 khoảng thơi gian cho 1 function
console.log("Start");
var timeOutId = setTimeout(function () {
	console.log("Finish");
},1000);
console.log("Done");

// clearTimeout dùng để hủy 1 setTimeout không cho nó chạy nữa
// clearTimeout(timeOutId);