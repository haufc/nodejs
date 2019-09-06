/*
if... else if ... else

Systax : 
if(condition1) {
	statement 1;
}
else if(condition2){
	statement 2;
}
else {
	statement 3;
}
*/

// Example : Caculate bus ticket fee
// - if age < 15 , discount 20%,
// - if age > 60, diccount 10%,
// - if otherwise 10000/ticket

function getTicketFee(person) {
	// body...
	var basePrice = 10000;

	if(person.age < 15) {
		return basePrice * 0.8;
	} else if(person.age > 60) {
		return basePrice * 0.9;
	} else {
		return basePrice;
	}

}

var person = {
	name : "hautk",
	age : 70
};

console.log(getTicketFee(person));