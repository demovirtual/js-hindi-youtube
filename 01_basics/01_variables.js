const accountId = 144553
let accountEmail = "rahul@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

//accountId = 2 //not allowed
accountEmail = "hc@hc.com"
accontPassword = "123"
accountCity = "Kolkatta"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])