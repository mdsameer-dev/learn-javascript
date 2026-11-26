let score = "34abc" // null value is 0 

// null value is 0
// undefined value is NaN
// string value is NaN
// boolean value false is 0 // 0 false "" = false
// boolean value true is 1 // 1 true "sameer" = true

console.log(typeof score); // 1st type
console.log(typeof(score)); // 2nd type

let valueInNumber = Number(score) 
console.log(score);
console.log(typeof score)
console.log(typeof valueInNumber); // print Number
console.log(valueInNumber) // print NaN

// Number convert in string

let sumNumber = 88
console.log(sumNumber); // print 88 is Number

let stringNumber = String(sumNumber) // change datatype 
console.log(stringNumber); // print 88 is String
console.log(typeof stringNumber) // string