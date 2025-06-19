const arr = [41,4,7,43,9,1]

let minVal = Math.min()
let maxVal = Math.max()

for (let i = 0; i < arr.length; i++) {
    if (minVal > arr[i]) {
        minVal = arr[i]
    }
    if (maxVal < arr[i]) {
        maxVal = arr[i]
    }
    
}


console.log(minVal);
console.log(maxVal);

// way 2

const arr1 = [41, 4, 7, 43, 9, 1];

let min = arr1[0];
let max = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] < min) min = arr1[i];
    if (arr1[i] > max) max = arr1[i];
}

console.log("Min:", min); // 1
console.log("Max:", max); // 43
