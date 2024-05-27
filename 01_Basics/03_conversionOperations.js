let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

//"33" => 33
//"33abs" => NaN => not a number
//true => 1 ; false => 0
//undefine => NaN
//null => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false
//"shivani" => true

let someNumber = 33;
let stringNumber = string(someNumber);
console.log(typeof stringNumber);
