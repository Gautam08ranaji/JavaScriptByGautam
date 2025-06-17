// const user = {
//     username:"gautam",
//     price: 999,

//     welcomeMwssage: function(){
//         console.log(` ${this.username} , welecome to website`);
        
//     }
// }

// user.welcomeMwssage()

// console.log(this);

// function chai(){
//     console.log(this);
    
// }

// chai()



// const chai = function(){
//     let username = "Gautam"
//     return this.username;
    
// }

// chai()

const chai = () => {
    let username = "Gautam"
    return this.username;
    
}

// chai()
// console.log(chai());


// const addTwo =(num1, num2) => {
//      return num1 +num2
// }

// const addTwo =(num1, num2) => (console.log(num1 +num2)
// )

// console.log(addTwo(5,7));

const addTwo =(num1, num2) =>  num1 +num2

console.log(addTwo(5,7));
