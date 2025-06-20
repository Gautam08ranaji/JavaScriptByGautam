const arr = [1,2,3,4,5,6,7,8]


k = 3
 function returned (arr,k){
        if (k > arr.length) {
            k = k- arr.length
        }
    let temp = []
    for (let i = arr.length -k ; i < arr.length ; i++) {
        temp.push(arr[i])
    }
    for (let i = 0; i < arr.length - k; i++) {
         temp.push(arr[i])   
    }
    return temp

 }

console.log(returned(arr , 9));

