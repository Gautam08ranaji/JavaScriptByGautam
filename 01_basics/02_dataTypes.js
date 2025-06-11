"use strict"; // treat all js codr as newr version

// alert(3 + 3) we are using node.js not browser --> uses alert(), which is a browser-specific function. It will not work in Node.js, because Node.js runs JavaScript outside the browser — there's no window, document, or alert() in Node.js.

console.log(3 + 3);
console.log("Gautam");

//  number => 2 to the power 53
// bigint
// string
//boolean => true/false
// null => standalone vaue
// symbol = unique
// undefined => undefined


// object =>

/*
Explanation:
This is one of the most famous quirks in JavaScript.

null is a primitive value that represents "no value" or "empty".

But typeof null returns "object" — which is incorrect behavior.

Why does this happen?
This is a bug in JavaScript's typeof operator from the early days of the language (1995). It was never fixed for backward compatibility reasons.

So what should you do? 
To check if something is null, never use typeof. Instead, do:


if (value === null) {
  console.log('Value is null');
}
*/    

