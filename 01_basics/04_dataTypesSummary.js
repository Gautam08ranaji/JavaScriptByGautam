
/* 

--------------------------DATA TYPES-------------------------------------------------

IN JAVA SCRIPT DATA TYPES ARE CATEGORIZED BASED ON HOW DATA ARE STORED IN MEMORY AND HOW DATA IS ACCESSED FROM THE MEMORY 


## PRIMITIVE DATA TYPES ##

--> stored by value
--> compared by value
-->immutable


1--> STRING
2--> SYMBOL
3--> NUMBER
4--> NULL 
5--> BOOLEAN
6--> BIG INT
7--> UNDEFINED

## NON PRIMITIVE DATA TYPES ##

--> stored by reference
--> compared by reference
--> mutable

1--> OBJECT
2--> ARRAY
3-->FUNCIONS
4--> DATE

*/

/*
typeof 42            // "number"
typeof "hello"       // "string"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // ❗️"object" (this is a quirk in JS)
typeof {}            // "object"
typeof []            // "object" (arrays are objects)
typeof function(){}  // "function"
typeof Symbol()      // "symbol"
typeof BigInt(123)   // "bigint"
typeof NaN           // "number" 


typeof [] → "object"

typeof [1, 2, 3] → "object"

typeof {} → "object"

typeof null → "object"

typeof NaN → "number"

typeof (() => {}) → "function"

typeof class {} → "function"

typeof new String("hi") → "object"

typeof (1 + true) → "number"

typeof (1 + "true") → "string"

typeof (!!"") → "boolean"

typeof (typeof 1) → "string"

typeof (1 == "1") → "boolean"

typeof (1 === "1") → "boolean"

typeof undefined → "undefined"

typeof typeof undefined → "string"

typeof typeof typeof true → "string"

typeof null == "object" → true (not a typeof output, but a comparison result)

null == undefined → true

null === undefined → false

typeof (1 + "true") → "string"

typeof (1 + true) → "number"

*/ 



/*

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

STACK AREA MEMORY AND HEAP AREA MEMORY



*/

let myYouTubeName = "CodeCrash"

let anotherName = myYouTubeName 

anotherName = "CodeWithGautam"
// console.log(myYouTubeName);
// console.log(anotherName);

let userOne = {
    name : "Gautam Rana",
    upi : 456280,
}

let userTwo = userOne

// console.log(userTwo.name);
// console.log(userTwo.upi);

userTwo.name = "Ranaji"
userTwo.upi = 121212

console.log(userOne.name);
console.log(userOne.upi);
console.log(userTwo.name);
console.log(userTwo.upi);


