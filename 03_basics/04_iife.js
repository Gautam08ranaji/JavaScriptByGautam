// =======IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// JavaScript sometimes automatically adds semicolons, but not always where you expect.
//  so it is recommended to add semicoln after every iife call ()();


// An IIFE is a function that runs immediately after it is defined. It's mainly used to create a private scope, prevent global namespace pollution, and encapsulate logic.


// When multiple scripts or libraries define variables/functions in the global scope, they can:

// 1.Overwrite each other

// 2.Cause bugs due to naming collisions

// 3.Leak sensitive logic or values unintentionally

//example

// // script1.js
// var user = "Alice";

// script2.js
// var user = "Bob";  // 👎 Overrides the first one!


// Now user is "Bob" everywhere, even though "Alice" was defined first. This is namespace pollution.


// Solution: Use an IIFE to encapsulate your logic

// (function() {
//   var user = "Alice";
//   console.log("Inside IIFE:", user);
// })();

// console.log(typeof user); // "undefined" ✅ not in global scope

//  Here, user only exists inside the IIFE — it doesn’t touch the global scope at all


// real example

// (function () {
//   const version = "1.0.0";

//   function initUI() {
//     console.log("Fancy UI initialized");
//   }

//   window.FancyUI = { initUI };
// })();

// Even though version and initUI() exist, they’re hidden — only FancyUI.initUI() is exposed intentionally.

(function chai(){
    console.log("Chai id Ready");
} )();


// example in real world use case

const api = (function (){
    // named iife
    let privatekey ="secret"
    return{
        getData:()=> privatekey
    }
} )();

console.log(api.getData());

(()=>{
console.log("hii ranaji");
})();



((name)=>{
console.log(`hii ${name} ` );
})("gautam rana");


