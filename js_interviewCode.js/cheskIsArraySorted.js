
//  


const arr = [1,4,7,3,7,3,8,54,34]


for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i]> arr[j] ) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    
}

// console.log("arr",arr);

// moder way

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap number in one line logic
        }
    }
}

console.log("arr:", arr);

