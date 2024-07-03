if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

//there is a difference between using scope in console 
//n scope n code environment using node

function one()
{
    const username = "shivani"

    function two(){
        const website = "github"
        //console.log(username);
    }

    //console.log(website);
    //two()
}

//one()

if(true){
    const username = "shivani"
    if(username === "shivani"){
        const website = "github"
        //console.log(username + " " + website);
    }
    //console.log(website);
}
//console.log(username);


//++++++++++++++++++ interesting ++++++++++++++++++++++++++

console.log(addone(5));
 
function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}

addTwo(5)

