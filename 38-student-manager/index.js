var readlineSync = require('readline-sync');
var fs = require('fs');

function showmenu() {
	console.log("1. Show all student");
	console.log("2. Create new student");
	console.log("3. Save and Exit");

	var option = readlineSync.question('What option you want ?');
	switch(option) {
		case '1' :
		showStudents();
		showmenu();
		break;

		case '2' :
		showCreateStudent();
		showmenu();
		break;

		case '3' :
		saveandExit();
		showmenu();
		break;

		default : 
		console.log("your option not have in this program!");
		showmenu();
		break;
	}
}

var students = [];
function loadData() {
	var fileContent = fs.readFileSync('./data.json');
	students = JSON.parse(fileContent);
}

function showStudents() {
	for(var stu of students) {
		console.log("Name :" + stu.name + ", Age : " + stu.age );
	}
}

function showCreateStudent() {

	var name = readlineSync.question('Name :');
	var age = readlineSync.question('Age :');

	var student = {
		name : name,
		age : parseInt(age)
	};

	students.push(student);
}

function saveandExit() {
	var content = JSON.stringify(students);
	fs.writeFileSync('./data.json', content, {encoding : 'utf8'});
}

function main() {
	loadData();
	showmenu();
}

main();