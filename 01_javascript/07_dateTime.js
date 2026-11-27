// date is object
// months start in js 0, 11
// MM / DD / YYYY
// 12 / 31 / 2026

let myDate = new Date()

console.log(myDate.toLocaleString()); // 11/27/2026 1:20:00 PM
console.log(myDate.toString());
console.log(myDate.getTimezoneOffset()); // 0


let myCreateDate = new Date(2026, 9, 0, 2, 7)
console.log(myCreateDate.toLocaleString());   // 9/30/2026, 2:07:00 AM
