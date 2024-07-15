const accountId = 14453 .toExponential //remains the same
let accountEmail = "akashthakre@gmail.com" //can be change
var accountPassword = "12345" //prefer not to use VAR , beacuse of the block scope and functionl scope
accountCity = "Jaipur" // this can be possible withiout any keyword
let accountState; //undefiened

//accountId = 2 //not allowed
accountEmail = "new@gmail.com"
accountPassword = "333333"
accountCity = "chennai"

console.log(accountId);

//can be log on console in table with index
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])