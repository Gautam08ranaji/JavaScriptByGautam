//  with duplicates value

// const arr1 = [1, 2, 3, 4 ,66,45,6,534,6,32,23];
// const arr2 = [3, 4, 5, 6,23,56,234,564,45];

// function getIntersectionOfTwoArrays(arr1 , arr2){
// let newArr = []
//     for (let i = 0; i < arr2.length; i++) {
//         for (let j = 0; j < arr1.length; j++) {
            
//             if (arr2[i] === arr1[j]) {
//                 newArr.push(arr1[j])
//             }
            
//         }
        
//     }
//     return newArr

// }


// console.log(getIntersectionOfTwoArrays(arr1,arr2));
//----------------- without duplicates ---------------------------
// intersection of Two Arrays  without duplicate values from both

// const arr1 = [1, 2, 3, 4 ,66,45,6,6,534,6,32,23];
// const arr2 = [3, 4, 5, 6,23,56,234,6,564,45];
const arr1 = [1, 2, 3, 4, 66, 45, 6, 6, 534, 6, 32, 23];
const arr2 = [3, 4, 5, 6, 23, 56, 234, 6, 564, 45, 534 ,534];


function getIntersectionOfTwoArrays(arr1 , arr2){
    let newArr = []
    for (let i = 0; i < arr2.length; i++) {
        let flag = false
        let temp;
        for (let j = 0; j < arr1.length; j++) {
            
            if (arr2[i] === arr1[j]) {
                temp = arr1[j]
                flag = true
                arr1[j] = ""
            }
            
        }
        if (flag) {
            
            newArr.push(temp)
        }
        
    }
    return newArr
    
}

console.log(getIntersectionOfTwoArrays(arr1,arr2));
//[3, 4, 6, 23, 6, 45]
