const name = "Gautam Rana ji"
const repoCount = 50

// STRING INTERPOLATION 


// console.log(`My name is ${name.toUpperCase()} and my repo count is ${repoCount.toLocaleString("en-US",{style:"currency", currency:"INR"})}`);
// console.log(`My name is ${name.toUpperCase()} and my repo count is ${repoCount.toLocaleString("hi-IN",{style:"currency", currency:"INR"})}`);


const s1 = new String("Hi , there")
// console.log(typeof s1);

// console.log(s1.__proto__);

// console.log(typeof (!!null));                     // "boolean"
// console.log("5" + 3 + "2" - 1);                   // 531
// console.log("2" - "1" + "3");                     // "13"
// console.log("2" + "1" - 3);                       // 18
// console.log([] == false);                         // true
// console.log([] + false - null + true);            // NaN
// console.log({} + []);                             // 0
// console.log([] + {});                             // "[object Object]"
// console.log(true + + "10");                       // 11
// console.log("b" + "a" + +"a" + "a");              // "baNaNa"
// console.log((![] + [])[+[]]);                     // "f"
// console.log("2" > "12");                          // true
// console.log("2" > 12);                            // false
// console.log(null == 0);                           // false
// console.log(null >= 0);                           // true
// console.log([] == ![]);                           // true
// console.log("true" == true);                      // false
// console.log(false == "0");                        // true
// console.log(undefined == null);                   // true
// console.log([] == []);                            // false
// console.log(NaN == NaN);                          // false
// console.log(typeof (1 < 2 < 3));                  // "boolean"
// console.log(typeof (3 > 2 > 1));                  // "boolean"
// console.log(!!NaN);                               // false
// console.log(!!"");                                // false
// console.log(!!0);                                 // false
// console.log(+true);                               // 1
// console.log(+false);                              // 0
// console.log(+[]);                                 // 0
// console.log(+{});                                 // NaN


const s2 = new String("Hello , Gautam")

// console.log(s2.charAt(1));
// console.log(s2.charCodeAt(2));
// console.log(s2.endsWith("m"));
// console.log(s2.endsWith(""));
// console.log(s2.includes("au"));
// console.log(s2.indexOf("G"));
// console.log(s2.indexOf("l",3));


let s3 = "Hello";
console.log(s3.match(/l/));        // Matches first 'l'
console.log(s3.match(/l/g));       // Matches all 'l's globally
console.log(s3.match(/z/));        // Returns null (no match)

