const arr = [2,1,3,4,7,3,5,7,9]

function sortArray(arr){


    for (let i = 0; i < arr.length-1; i++) {
        
        for (let j = 0; j < arr.length-1-i; j++) {
            
            if (arr[j] > arr[j+1]) {
                
                [arr[j] , arr[j+1]] = [arr[j+1], arr[j]]
                
            }
            
        }
        
    }
    return arr
}

console.log(sortArray(arr)); 