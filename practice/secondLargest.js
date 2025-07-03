const arr = [1, 2, 13, 14, 5];


function secondLargest(array) {
    
    let firstMAx = Math.max();
    let secondMax = Math.max();

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] > firstMAx ) {
            let temp = firstMAx;
            firstMAx = array[i];
            secondMax = temp;

        }else{
            if (array[i] > secondMax && array[i] < firstMAx) {
                secondMax = array[i];
                
            }
        }
        
    }
    return secondMax
}

console.log(secondLargest(arr));
