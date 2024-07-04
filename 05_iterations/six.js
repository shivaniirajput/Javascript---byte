// const coding = ["js", "ruby", "java", "python", "cpp"]

// //forEach doesn't return any value

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

const newNums = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
//console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1982, edition: 2006},
    { title: 'Book Three', genre: 'History', publish: 1983, edition: 1984},
    { title: 'Book Four', genre: 'Science', publish: 1985, edition: 1999},
    { title: 'Book Five', genre: 'Non-Fiction', publish: 2000, edition: 2007},
    { title: 'Book Six', genre: 'History', publish: 2001, edition: 2012},
    { title: 'Book Seven', genre: 'Science', publish: 1989, edition: 2005},

];

//const userBook = books.filter((bk) => bk.genre === "Fiction")
userBook = books.filter((bk) => 
{
    return bk.genre === 'History' && bk.publish <=2000
})

//console.log(userBook);