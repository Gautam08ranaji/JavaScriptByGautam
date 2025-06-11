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












