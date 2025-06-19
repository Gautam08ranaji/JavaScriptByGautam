const arr = [1, 2, 3, 1, 5, 4, 6, 3];

let length = arr.length;

for (let i = 0; i < length; i++) {      
    console.log(i);
              // lenghth = 6 
    for (let j = i + 1; j < length; j++ ) {      // i = 5 
        if (arr[i] === arr[j]) {                 // j = 6 
            arr[j] = arr[length - 1];            // arr[j] = 3
            length--;                            // [1, 2, 3, 6, 5, 4, 0, 0];
        }                                        // [0, 1, 2, 3, 4, 5,]
    }
}

arr.length = length; // truncate array

console.log(arr); // example output: [1, 2, 3, 6, 5, 4]
