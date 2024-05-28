//javascript is a dynamically types language because the type of variable are assigned at runtime on the basis of values
// Primitive data type

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreVlue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 23334567764434343433n;

//Reference(Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "shivani",
    age: 22,
}

const myFunction = function(){
    console.log("hello jeeee");
}

console.log(typeof bigNumber)

/* Type                typeof return value
   Null                "objects"
   Undefined           "undefined"
   Boolean             "boolean"
   Number               "number"
   BigInt               "bigint"
   String               "string"
   Symbol                "symbol" */


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-Primitive)

//call by value - primitive
let myYoutubename = "shivanirajpooot"

let anothername = myYoutubename
anothername = "chaiaursamosa"

console.log(myYoutubename)
console.log(anothername)

//call by reference - non-primitive
let userOne = {
    email :  "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "shivani@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);