let score = "33"

// console.log(typeof score); -> string

let valueInNumber = Number(score)

// console.log(typeof valueInNumber); -> number

score = "33abc"
valueInNumber = Number(score)
// console.log(typeof valueInNumber); -> number
// console.log(valueInNumber); -> NaN

score = undefined
valueInNumber = Number(score)
// console.log(typeof valueInNumber); -> number
// console.log(valueInNumber); -> Nan


// "33" -> 33
// "33abc" -> NaN
// true -> 1 , false -> 0

let isLoggedIn = 0

let valueInBoolean =  Boolean(isLoggedIn)
// console.log(typeof valueInBoolean);
// console.log(valueInBoolean);

// 0 -> false , 1 -> true , anyothernumber -> true
// "" -> false
// "abc" -> true 

let someNumber = true

let valueInString = String(someNumber)
// console.log(typeof valueInString);
// console.log( valueInString);

// 33 -> srtring 33
//"33" -> string 33
//null -> string null
//undefined -> string undefined
// Object -> string function Object()
// false -> string false
// true -> string true


// *********************************OPERATIONS******************************

// console.log(2+2); -> 4
// console.log(2-2); -> 0
// console.log(2*2); -> 4
// console.log(2**3); ->8 
// console.log(2%2); ->0
// console.log(2/2); -> 1


// console.log(2 + "2"); -> 22
// console.log("2" + 2);  -> 22
// console.log("2" + 2 +2);  ->222
// console.log(2 +2 + "2");  -> 42


// console.log("result ",2 +2 * 4 % 2); -> 2
// console.log("result ",2 +2 * 4 / 2); -> 6

// console.log("result ",(2 +2) * (14 / 2));  -> 28
// console.log("result ",(5 +2) * (5 % 3));  

// console.log(true);
// console.log(+true);
// console.log(+"");
// console.log(+"dgsf");


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);







