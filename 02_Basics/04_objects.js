//const tinderUser = new Object()   //singleton object
const tinderUser = {}              //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstname: "shivani",
            lastname: "rajput"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}                  //spread operator
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 1,
        email: "some@gmail.com"
    }
]

//console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));              //agar property h to true otherwise false

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const{courseInstructor} = course

console.log(courseInstructor);


//json
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]