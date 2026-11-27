const score = 400
console.log(score)

const balance = new Number(200)
console.log(balance);

console.log(balance.toString()); // bass ek bar hi update hota value change nahi hoti tab ka usko declare nahi karte.
console.log(balance); // [Number: 200] 


// .toFixed(2) used e-commerce website // .00

let balance1 = 2342
console.log(balance1.toFixed(2)); // 2342.00


// .toPrecision() used bill print

const num = 3243.04
console.log(num.toPrecision(4)); // 3243 

const num1 = 3433
console.log(num1.toPrecision(3)) // 3.43e+3 // .toPrecision use karte time number of digits malum hone chahiye. error ata nahi pata hai toh.

let numb2 = 234.1234
console.log(numb2.toPrecision(4)); // 234.1
// calculation or value pe dependency honi chahiye mujhe pata hai 100% value 3 hi ayegi decimal se pahle tab use karna chahiye.


// .toLocaleString by default US standard. indain standard is ('en-IN') use this.


const thousand = 10000000
console.log(thousand.toLocaleString('en-IN'));


let newNumber = 200
console.log(Number.isSafeInteger(newNumber))


// ************* MATH ************** \\

console.clear()


console.log(Math);                   // - Object [Math] {}
console.log(Math.abs(-20));          // - 20
console.log(Math.round(45.5645));    // - 46

console.log(Math.ceil(54.1))         // - 55 
console.log(Math.floor(78.9))        // - 78

console.log(Math.random())           // - value between 0 and 1


const min = 100
const max = 400 

// Math.floor()
// Math.random()
// (max - min + 1)

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// print random value between 100 to 400


// const timeDate = Temporal.PlainDate.form('2026-08-04');
// console.log(timeDate);

const launchDate = Temporal.PlainDate.from('2026-08-14');
console.log(launchDate.year);  // 2026
console.log(launchDate.month); // 8