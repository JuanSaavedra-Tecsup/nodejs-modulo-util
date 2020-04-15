var util = require('util');
var my_name = 'Juan', 
my_class = 5, 
my_fav_subject= { subj1: 'Python', subj2: 'NodeJs.'}; 
var format1 = util.format('My name is %s ',my_name);
var format2 = util.format('Yo lei en la clase %d,',my_class);
var format3 = util.format('Mis cursos favoritos son %j',my_fav_subject);
console.log(format1);
console.log(format2);
console.log(format3);
