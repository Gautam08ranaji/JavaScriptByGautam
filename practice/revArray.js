const arr = [1, 2, 3, 4, 5];

const newArr = []

// for (let i = arr.length-1; i >=0; i--) {
// //    console.log(arr[i]);
//    newArr.push(arr[i]);

// }
// console.log(newArr);

const arr1 = [1, 2, 3, 4, 5];

let len = (arr1.length - 1) / 2;

for (let i = 0; i <= len; i++) {
    let temp = arr1[i];
    arr1[i] = arr1[arr1.length - 1 - i];
    arr1[arr1.length - 1 - i] = temp
}

console.log(arr1);