const user = {
    username: "shivani",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "shivu"
// user.welcomeMessage()

console.log(this);

// function chai()
// {
//     let username = "shivani"
//     console.log(this);
//     //console.log(this.username);  //cannot access within a function but can only be used in an object

// }

// chai()

// const chai = function(){
//     let username = "shivani"
//     console.log(this.username);
// }

//arrow function

const chai = () => {
    let username = "shivani"
    //console.log(this.username);
    //console.log(this);
}
//chai()

//++++++++++++++ ARROW FUNCTION +++++++++++++++

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));

//implicit return
//const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "shivani"})

console.log(addTwo(3,4));


// const myArray = [2, 5, 7, 8, 3]
// myArray.forEach()