const A = [1, 1,2, 3,7 ,7]
const B = [3, 4, 5 , 5 , 6]
// Union = [1, 2, 3, 4, 5]
const spread = [...A,...B] 
// console.log("spread",spread);

// spread [ 1, 2, 3, 3, 4, 5 ]
const newArr = []

function unionValues(array){

    for (let i = 0; i < array.length; i++) {
        let flag = true
        for (let j = i+1; j < array.length; j++) {
            if (array[i] === array[j]) {
                flag = false
            }
            
        }
        if (flag) {
            newArr.push(array[i])
        }
        
    }
    return newArr
}

console.log(unionValues(spread));
