// function calculateCarPrice(num1){
//     return num1
// }

// console.log(calculateCarPrice(56 , 67 ,78)); // --> lg only 56


// function calculateCarPrice(...num1){
//     return num1
// }

//  console.log(calculateCarPrice(56 , 67 ,78)); // will log all in an array        

//----INTERVIEW QUESTION------

function calculateCarPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCarPrice(34,56,87,89,4556)); // will log only [ 87, 89, 4556 ] coz val1 and val2 is not loggged and rest of all values goes in rest operator num1 



const user = {
    name:"Gautam",
    age:25,
    price:2500
}

function handleObject(anyObject){
    console.log("hii");
    return`Username is ${anyObject.name} and age is ${anyObject.age} and  price is ${anyObject?.price}`
    
    
}
// console.log(handleObject(user)); // --> log both hii and usename with age
// handleObject(user) // -->  only hii 

handleObject({
    name:"ranaji"
})

const data = [400,500,600]

function handleCart(anyArray){

    anyArray.forEach((item , index) => {
        console.log(item);
    });
}

handleCart(data)