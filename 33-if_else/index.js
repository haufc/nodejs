// if....else
// systax

// if(condition) {
// statement when true;	
//} else {
// statement when false;
//}
//  Example :

function randomCoin() {
	var value = Math.random();
	if(value < 0.5) {
		console.log("Mat sap");
	} else {
		console.log("Mat ngua");
	}
}

randomCoin();