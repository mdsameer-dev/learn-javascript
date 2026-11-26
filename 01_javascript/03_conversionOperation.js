let score = "34abc" // null value is 0 

// null value is 0
// undefined value is NaN
// string value is NaN // empty string is 0 "abc" is NaN
// boolean value false is 0 // 0 false empty = false
// boolean value true is 1 // 1 true "sameer" = true
// BigInt value is TypeError
// Symbol value is TypeError

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


//////////// Operation \\\\\\\\\\\\

let value = 55
// let negValue = -value
// console.log(negValue) print is -55
console.log(-value); // -55

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); 2 to the power is 3
// console.log(2/2);
// console.log(2%2); 2 is 3 remender

let firstName = "Mohd"
let lastName = " Sameer"

let fullName = firstName + lastName
console.log(fullName) // Mohd Sameer

// console.log(2+2); // 4 is number
// console.log("2" + 2); // 22 is string
// console.log(2 + "2"); // 22 is string           // bad practices 
// console.log("1" + 2 + 2) // 122 is string
// console.log(1 + 2 + "2"); // 32 is string

// Prefix (++x, --x)
// Postfix (x++, x--)


// a = 10

// ++a is pre increment       b = ++a ; ----> a = 11 , b = 11
// a++ is post increment      b = a++ ; ----> a = 11 , b = 10
// --a is pre decrement       b = --a ; ----> a = 9 , b = 9
// a-- is post decrement      b = a-- ; ----> a = 9 , b = 10