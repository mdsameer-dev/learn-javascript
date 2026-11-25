const accountId = 12345
let accountEmail = "sameer@google.com"
var accountPassword = "abc123"
cityName = "Mumbai";

// cityName = "Mumbai" is not recommended
// accountId = 87422 not allowed
// var let & const this value save in memory (Basically located in memory)
// {} this is scope
// prefer not use var
// because of issue in block scope & functional scope.
// multiple value print use console.table

accountEmail = "attu@google.com"
accountPassword = "jkl789"
cityName = "Pune"

console.table([accountId, accountEmail, accountPassword, cityName])