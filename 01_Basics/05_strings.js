const name = "shivani"
const repoCount = 15

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shi-va-ni')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "     shivani      "
console.log(newStringOne);
//trim() used to remove starting space and end space from the string
console.log(newStringOne.trim()); 

const url = "https://shivani.com/shivani%20rajpoot"
console.log(url.replace('%20', '-'));

console.log(url.includes('shivani'));

console.log(gameName.split('-'));