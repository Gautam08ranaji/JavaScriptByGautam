const myNums = [1,2,3,4,5,6,7,8,9,10]

// const values = myNums.map((item)=> item + 10)
// console.log(values);

// const values = myNums.map((item)=>{
//    const  var1 = item % 2 == 0
//    return `${item} it is divisible by 2 ${var1} `   
// })

// console.log(values);


// CHAINING

const values = myNums
    .map((item)=> item * 10)
    .map((item)=> item + 1)
    .filter((item)=> item >51)

    console.log(values);
    