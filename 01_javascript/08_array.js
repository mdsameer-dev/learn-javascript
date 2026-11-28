// Array
// storing a collection of multiple items under a single variable name.
// javascript array are resizable and contain a mix of different data types.
// e.g numbers, boolean, string, object, array inside the array.
// javascript array are zero based indexing. [start with 0]
// javascript array copy operations create shallow copies.

// let myArray = new [1, 2, 3, 4, 5, 6] 
// console.log(myArray[3]);              // TypeError: [1, 2, 3, 4, 5, 6] is not a constructor

const userId = ["mdsameer@18", 23, 9812138492]
//                 ^            ^       ^
//                 |            |       |
//              elements         elements

// 1st way

let myArray = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(myArray[5]);                    // 6

// 2nd way

let myArray2 = Array(1, 2, 3, 4, 5, 6)
console.log(myArray2[3]);                   //4

// Array Methods

//.push()            // (value put) value push array in last
//.pop()             // (value don't put) last value of array remove 
//.unshift()         // (value put) value push array in first
//.shift()           // (value don't put) first value of array remove
//.includes()        // (value put) check the value in array
//.indexOf()         // (value put) check the index of array
//.slice()           // (value put) copies a part of an array into a new array without changing the original array.
//.splice()          // (value put) adds removes replaces elements directly inside the array changing the original array.
//.concat()          // (value put) [print new array] merge two or more arrays or values into a new array without changing the original array.
//[...name, ...]     // (spread operator) merge two array, create shallow copy, insert value in array (similar .concat) ...
//.isArray()         // (value put) returns true if value is an array and false if it is not
//.from()            // (value put) string converts in array


const myId = [1, 2, 3, 4, 5]

myId.push(6)                           // 7 push in array 
// console.log(myId)                   // print [1, 2, 3, 4, 5, 6]

myId.pop()                             // 6 remove in array
// console.log(myId);                  // print [1, 2, 3, 4, 5]

// console.log(myId.includes(10));     // false

// console.log(myId.indexOf(5));       // 4

// console.log(myId.slice(1, 3));      // [2, 3]

// console.log(myId.splice(1, 3));     // [2, 3, 4]


const num1 = [0, 1, 2, 3, 4]
const num2 = [5, 6, 7, 8, 9]

// const myNum = num1.concat(num2)
// console.log(myNum);                 // [0, 1, 3, 4, 5, 6, 7, 8, 9]

const myNum = [...num1, ...num2]
console.log(myNum);                    // [0, 1, 3, 4, 5, 6, 7, 8, 9]

console.log(Array.isArray("Sameer"));  // false
console.log(Array.from("Sameer"));     // ['S', 'a', 'm', 'e', 'e', 'r'] 

let score1 = 200
let score2 = 400
let score3 = 600

console.log(Array.of(score1, score2, score3)); // [200, 400, 600]
