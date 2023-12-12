"use strict";   // treat all JS code as a newer version

//alert( 2 + 2);  // we are using node js not browser

//console.log("Vijaya")

//console.log( 2 + 2)


// Data Type 
let myName = "Shree"      // string
 let myAge = 28  // number
 let isLoggedIn  = true   //boolean
 let state;

 // number => 2    to power 53
 // bigint 
 // string => ""
 // boolean => true/false
 // null  => stand alone value
 // undefined => 
// symbol => unique

// object 

//console.log(typeof "Vijaya");
//console.log(typeof  undefined);  // undefined
//console.log(typeof null);        // object



/*Javascript conversion of DataType */
//let scrore = "33bc"   // result NaN

//let scrore = "33bc"


//let scrore = undefined   // result NAN

let scrore = true ;   // result 1
//console.log(typeof scrore);
//console.log(typeof (scrore));

let valueNumber  = Number(scrore)
//console.log(typeof valueNumber);
//console.log(valueNumber);

// "33" => 33
// "33abc" => Nan
// true => 1; false => 0

// let isLoggedInn = " ";
// let booleanIsLoggedIn = Boolean(isLoggedInn);
// console.log(valueNumber);

let someNumber = 33
let stringNumber = String(someNumber);
//console.log(stringNumber);
//console.log(typeof stringNumber);



//**********************************Operations *********************************/
 
let value = 3 ;
let negValue = -value;
//console.log(negValue);


// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);

let str1  = "Hello"
let str2 = " Vijaya"

let str3 = str1 + str2;

/*console.log(str3);
console.log(1 + "2");   // 12
console.log("1" + 2);  // 12
console.log("1" + 2+ 2);  // 122
console.log(1 + 2 + "2");  // 32

console.log(true);   // true 
console.log(+true);  // 1
console.log(+"");  // 0
*/


//link to studt pre/post fix -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
let gameCounter = 100;
//gameCounter++;
++gameCounter;
console.log(gameCounter);




