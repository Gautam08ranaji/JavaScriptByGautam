const arr = [1,2,3,4,5]

// way 1

let length = arr.length
let newArr = []
arr.forEach((item)=>{
    // console.log(arr[length-1]);
    newArr.push(arr[length-1])
    length--
})

// console.log(newArr);

// way 2
// let newArray = []

const reverseArray =  arr.map(( _, index)=>{
    return arr[arr.length-1 - index]
})

// console.log("reverseArray",reverseArray);

// way 3 
const revArr = []

for (let i = arr.length -1 ; i >= 0; i--) {
    revArr.push(arr[i])   
}

// console.log(revArr);

// way 4

const  numArr = [1,2,3,4,5,6,7,8]

for (let i = 0; i < numArr.length / 2; i++) {
    const temp = numArr[i]
    numArr[i] = numArr[numArr.length-1 - i]
    numArr[numArr.length-1 -i] = temp
    
}

console.log(numArr);
