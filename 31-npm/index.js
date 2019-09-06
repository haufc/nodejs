// npm - node package manager
// developer 
var readlineSync = require('readline-sync');
var languages = [];
var userName = readlineSync.question('May I have your name? ');
var haveLanguage = readlineSync.question('How many language do you have ?: ');
var pet = {};
for(let i = 0; i< parseInt(haveLanguage); i++){
	var language = readlineSync.question('Enter your language '+(i+1)+ ': ');
	languages.push(language);
};

pet.name = readlineSync.question('Your pet name: ');
pet.age = parseInt(readlineSync.question('Your pet age: '));
pet.gender = readlineSync.question('Your pet gender: ');
console.log('Hi '+ userName + '!');
console.log(languages);
console.log(pet);

