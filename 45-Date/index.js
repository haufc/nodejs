// Date object
// moment.js --> module
var moment = require('moment');
// var now = new Date();
// var myBirthday = new Date(1997, 6 , 10) // 10 - 7 - 1997

// // number of milliseconds from 1-1-1970 +7 +9

// console.log(now.getTime());
// console.log(myBirthday.getTime());

var now = moment("20191031", "YYYYMMDD").fromNow();
console.log(now);
