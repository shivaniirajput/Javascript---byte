//1.singleton
//object.create
 
//2.object literals

const mySym = Symbol("key1")          //create a symbole

const jsUser = {
    name: "Shivani",
    "full_name": "Shivani Rajput",
    [mySym]: "mykey1",                   //using symbol in object
    age: 18,
    location: "Ghaziabad",
    email: "shivani@google.com",
    isLoggedIn: "false",
    lastLoginDays: ["Monday", "Saturday"]
}

//there are to method to acces object values
// console.log(jsUser.age);
// console.log(jsUser["age"]);

// console.log(jsUser["full_name"]);                 //full name can only be use by this method but not by dot mathod
// console.log(jsUser[mySym]);                       //correct way to print symbol

jsUser.email = "shivani@chatgpt.com"   //to change the value or a key
//Object.freeze(jsUser)                  //to freeze the value (noone can furthur change it)
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("helllo jeee");
}

jsUser.greetingTwo = function(){
    console.log(`Hello jee, ${this.name}`);
}

console.log(jsUser.greeting);        //returns function anonymous
console.log(jsUser.greeting());      //returns hello jeee
console.log(jsUser.greetingTwo());   //returns Hello jee, shivani