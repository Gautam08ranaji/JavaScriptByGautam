//  way 1

const array = [1,2,3,4,6]

function findMissingNum (array){
    const n = array.length + 1;
    const expected = (n*(n+1)) / 2;
    const total = array.reduce((acc,num)=>{
        return acc + num
    },0)

    return expected - total
}

// console.log(findMissingNum(array));

// way 2

function Missing(array){
    let n = array.length + 1
    let expected = (n*(n+1)) / 2;
    let sum = 0 
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return expected - sum

}

console.log(Missing(array));
