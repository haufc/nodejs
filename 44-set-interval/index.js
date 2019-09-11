// setInterval
// clearInterval
// isue : Gọi hàm liên tục sau 1 khoảng thời gian và không dừng , 
// khác với setTmeout là gọi hàm sau 1 khoảng thời gian.
// syntax
// setInterval(fn,ms)
// {fn = function , ms = milisecond}

var i = 0;
var interValId = setInterval(function () {
	++i;
	console.log(i);
	if(i == 5) {
		clearInterval(interValId);
	}
}, 1000);