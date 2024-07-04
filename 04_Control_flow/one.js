// //if
// const isUserLoggedIn = true
// const temprature = 41

// if(temprature === 40){
//   console.log("less than 50");   
// }else{
//     console.log("temprature is greater than 50");
// }

// console.log("execute");

// const score = 200

// if(score > 100)
// {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }


const balance = 1000
//implicit scope

//if(balance > 500) console.log("test"),console.log("test2");
//don't use it bcause it makes it difficult to read

// if(balance < 500){
//     console.log("less than")
// }else if(balance < 750){
//     console.log("less than 750")
// }else if(balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle ||loggedInFromEmail )
{
    console.log("user logged in");
}