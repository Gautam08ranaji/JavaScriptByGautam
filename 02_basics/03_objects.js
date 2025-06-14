// SINGLETON

const jsUser = {
    name: "Gautam rana",
    age: 24,
    address :"Noida",
    isLoggedIn : false,
    lastLogin : ["Monday", "saturday"],
    "profile": "Developer",
    "profile name": "Android Developer",
};

// console.log(jsUser.name);
// console.log(jsUser["age"]);
// console.log(jsUser["profile name"]);

let sym = Symbol("sym 1")
// console.log(typeof sym);
// console.log(sym);



const jsUser1 = {
    name: "Gautam rana",
    age: 24,
    [sym]:"sym 2",
    address :"Noida",
    isLoggedIn : false,
    lastLogin : ["Monday", "saturday"],
    "profile": "Developer",
    "profile name": "Android Developer",
};

// console.log( typeof jsUser1[sym]);
// console.log(jsUser1[sym]);
// console.log(jsUser1);

// Object.freeze(jsUser1)
// jsUser1.name = "Ranaji"
// console.log(jsUser1);

jsUser1.greeting = function(){
    console.log(`hi js user ${this.name}`);    
}

jsUser1.greeting();
