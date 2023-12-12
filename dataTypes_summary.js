//there are two types of Data types -Primitive and Non -Primitive

// Primitive => 
// 7 Types:string, Number, Boolean, Null, Undefined,symbol, BigInt

const scrore = 100

const scroreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let useremail;

const id = Symbol('123')

const anotherId = Symbol('123')
//console.log(id === anotherId);

const bigNumber = 232748227257527n


//Reference Type/Non-Primitive =>
// Array, object, Functions, 


/* const heros =["shakti", "Ram", "Sita"]   // return type object

let myObj = {
    name : "Shree",                    // return type object
    age : 25,
 
}

let myfunction = function (){
 console.log("Hello Function");                   // return type  function
} 

console.log(typeof heros);
*/



/**************************************************** */

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "Vijayashree"

let anothername = myYoutubename

anothername = "Javascript code"

console.log(myYoutubename);
console.log(anothername);

let user = {
    name : "thikdar",
    age : 23,
    email : "thikdar@gmail.com"
}

let userTwo = user

userTwo.email = "vijaya@google.com"

console.log(user.email);
console.log(userTwo.email);