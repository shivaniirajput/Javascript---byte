//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

//Array methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop()          //it will remove last value from array

//myArr.unshift(9)       //it inserts value in the starting of the array by shifting other elements
//myArr.shift()            //it removes element from the starting

//console.log(myArr.includes(9));          //return boolean value 
//console.log(myArr.indexOf(9));           //returns index or 9(if exists then return index if not exists then return -1)
//console.log(myArr.indexOf(3));           //returns index of 3

// const newArr = myArr.join()                //join binds arrays and change the type of array to string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);                //string

//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)            //it doesn't change the original array

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)             //it changes the original array

console.log(myn2);
console.log("C", myArr);