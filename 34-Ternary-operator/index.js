/*
ternary operator

Systax :

condition ? expression when true : expression when false

*/

// Example :

function randomCoin() {
	// body...
	var value = Math.random();
	var result = value >= 0.5 ? "Mat sap" : "Mat ngua";
	console.log(result);
}
randomCoin();