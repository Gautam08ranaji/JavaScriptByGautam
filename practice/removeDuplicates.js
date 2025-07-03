const array = [1, 2, 3, 4, 2 , 5,5,8 , 7 , 1 , 3 , 9 , 10 , 6]

let len = array.length
function removeuplicate(array) {

    for (let i = 0; i < len; i++) {

        for (let j = 0; j < len; j++) {
            
            if (array[i] === array[j] && i !== j) {
                
                let temp = array[j]
                 array[j] = array[len]
                 array[len] = 0;
                len--;
            }
            
        }
        
    }

    array.length = len
    return array

}

console.log(removeuplicate(array));
