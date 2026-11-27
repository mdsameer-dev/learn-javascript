// const firstName = "Mohd"     primitive string value
// const lastName = 'Sameer'    primitive string value
// const backticks = `Attu`      ${} template literal (primitive string value) 


let myName = "Mohd Sameer"
let city = "Akola"
console.log(`my name is ${myName}. I am from ${city}`)

// in javajcript string interpolation is done using template literals strings
// enclosed in backticks (`) with embedded expressions written inside ${}


// another way to declare string

const fullNameId = new String("Mohd Sameer")
console.log(fullNameId); // [String: 'Mohd Sameer']

let userId = "mdsameeramity_18"
console.log(userId.charAt(8))       // - a
console.log(userId.indexOf("m"));   // - 0


// ==> string indexing

let fullName = "Mohd Sameer"

        // M o h d   S a m e e r   -  10
        // 0 1 2 3 4 5 6 7 8 9 10  -  index number

console.log(fullName.length)    // - 11  // .length
console.log(fullName[5]);       // -  S  // fullname[]

// ==> trim()

let firstName = "    Sameer    "
console.log(firstName);        // - '     Sameer     '
console.log(firstName.length); // - 14
firstName = firstName.trim();  // - 'Sameer'
console.log(firstName.length); // - 6
 
// ==> toUpperCase

let userName = "mohd sameer"
userName = userName.toUpperCase()  // MOHD SAMEER // print a new value 
console.log(userName);             // MOHD SAMEER

// console.log(userName.toUpperCase()); // MOHD SAMEER // another way to write code 


let rawInput = "  Learn_JavaScript_Strings  ";

rawInput = rawInput.trim();                 // - Learn_JavaScript_Strings
rawInput = rawInput.replaceAll("_", " ");   // - Learn JavaScript Strings
rawInput = rawInput.toLowerCase();          // - learn javascript strings

console.log(rawInput);
console.log(rawInput.includes("script"));   // - true


// console.log(rawInput.trim());
// console.log(rawInput.toLowerCase());
// console.log(rawInput.replaceAll("_", " "));


// ==> Case Conversion Methods

const s = "JavaScript";
console.log(s.toUpperCase()); // "JAVASCRIPT"
console.log(s.toLowerCase()); // "javascript"


// ==> Extracting / Slicing Methods

const n = "JavaScript";

console.log(n.slice(0, 4));     // "Java"
console.log(n.slice(-6));       // "Script"
console.log(n.substring(0, 4)); // "Java"
