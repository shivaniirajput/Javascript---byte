function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("I")
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(num1, num2){
    // let result = num1 + num2
    // return result
    return num1+num2
}
const result = addTwoNumber(3, 4);
//console.log(result);

function loginUserMessage(username){
    if(username === undefined)    //if(!username)
        {
            console.log("Please enter a username");
            return
        }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Shivani"));
console.log(loginUserMessage())

