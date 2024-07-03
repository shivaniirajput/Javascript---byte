//Immediately Invoked Function Expression (IIFE)
//global scope l pollution se bachne k liye iife ka use lkrte hein

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
}) ();

( (name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Shivani');