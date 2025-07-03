const arr = [1, 2, 3, 6, 5 , 5];

function isArraySorted(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            return false;
        }
    }
    return true;
}


console.log(isArraySorted(arr)); 
