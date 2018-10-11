

/*var obj = {
  name : 'Aiswarya'

};


 var aishuString = JSON.stringify(obj);
console.log('aishuObj is',typeof obj);//object
console.log('aishuString is',typeof aishuString);//string

console.log(typeof JSON.parse(aishuString));
console.log(aishuString);
console.log(obj);
*/
/*
var aishuString = '{"name" : "Aiswarya" , "age" : 25}';

console.log(typeof aishuString);
console.log(aishuString);
*/



const fs = require('fs');
var originalNote = {
title : 'some title',
body  : 'some body'

};

var originalString = JSON.stringify(originalNote);
fs.writeFileSync('notes.JSON',originalString);
