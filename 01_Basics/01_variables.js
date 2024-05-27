const accountId = 123456;
let accountName = "Shivani";
var accountAddress = "Ghaziabad";
accountMail = "shivanirajpoot998@gmail.com"; // it is possible but yet not a good practice
let accountState;     //it will print undefine 

//accountId = 123; // cannot change value beacuase of using const
accountName = "Rajput";
accountAddress = "Delhi";

/* prefer not to use var
because of issues in block scope and functional scope
*/

console.log(accountId);
console.table([accountName , accountAddress , accountMail , accountState]);                 //used to print more than one variables at once in table form