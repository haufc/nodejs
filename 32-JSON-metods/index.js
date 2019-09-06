// var myDong = {name : 'Hurgy', age : 19, dead : false};
// var myDongString = JSON.stringify(myDong);
// console.log(myDongString);
// var myCatString = '{"name" : "Jerry", "age": 2, "dead" : false}';
// var maCat = JSON.parse(myCatString);
// console.log(maCat);

var fs = require('fs');
var readlineSync  = require('readline-sync');
var arrStudent = [];
var choosen = parseInt(readlineSync.question('What is your choosen : 1-Show students, 2-creat a student, 3-Save & Exit: '));
var isAttach = true;
while(isAttach){
	if(choosen === 1){
		var studentStr = fs.readFileSync('./student.txt',{encoding : 'utf-8'});
		arrStudent = JSON.parse(studentStr);
		console.log(arrStudent);
	}
	if(choosen === 2){
		var student = {};
		student.name = readlineSync.question("Student name: ");	
		student.age = parseInt(readlineSync.question("Student age: "));	
		student.gender = readlineSync.question("Student gender: ");	
		studentStr.push(student);
	}
	if(choosen === 3){
		fs.writeFileSync('./student.txt',JSON.stringify(arrStudent));
	}
	var continueAtt = readlineSync.question("Continue program ?");
	if(continueAtt === 'N' || continueAtt === 'N'){
		isAttach = false;
	}
}



