
// let age = 17

// if (age >= 18) {
//     console.log("welcome to club marine");
    
// } else {
//     console.log("we are sorry , peoples less then 18 age are not allowed");
    
// }

// BANK EXAMPLE
// let balance = 5000;
// let withdrawal = Number(prompt("Enter withdrawal amount?")); // Convert to number

// if (withdrawal <= balance && withdrawal > 0) {
//   balance -= withdrawal;
//   console.log(`${withdrawal} is withdrawn\nRemaining balance is ${balance}`);
// } else {
//   console.log(`Insufficient balance: ${balance}`);
// }

//Falsy Values (Evaluate to false in a boolean context)

// There are only seven falsy values in JavaScript:
// false
// 0
// -0
// 0n (BigInt zero)
// "" (empty string)
// null
// undefined
// NaN


/*
Truthy Values (Evaluate to true in a boolean context)
Everything else is considered truthy. Here are some common truthy values:

true

Any non-zero number: 1, -1, 3.14, etc.

Any non-empty string: "hello", "0", "false", etc.

Arrays: []

Objects: {}

Functions: function() {}

Dates: new Date()

Infinity, -Infinity

Non-zero BigInt: 1n, -5n
*/

// NULLISH COALESCING OPERATOE (??): null undefined

let val1;


// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15

// console.log(val1);


let month ="may"

switch (month) {
    case "jan":
        console.log("jan");
        
        break;
    case "feb":
          console.log("feb");
        break;
    case "apr":
          console.log("apr");
        break;
    case "may":
          console.log("may");
        break;
    case "june":
          console.log("june");
        break;

    default:
        console.log("defaul case match");
        
        break;
}
