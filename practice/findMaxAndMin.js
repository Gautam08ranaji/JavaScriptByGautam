const arr = [1, 2, 3, 4, 5];

function findMinMax(array) {
    let min = Math.min()
    let max = Math.max();

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
        
    }
    return { min, max };  
}

 console.log(findMinMax(arr));
 