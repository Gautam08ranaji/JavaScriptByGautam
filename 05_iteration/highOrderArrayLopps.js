// for of

const arr = [1,2,3,4,5]

for (const element of arr) {
    if (element == 4) {
        continue
    }
    // console.log(element);
    
}

const str = "Gautam Rana"

for (const element of str) {
    // console.log(element);
}

const map = new Map()

map.set('Fr',"France")
map.set('It',"Italy")
map.set('USA',"United states of America")

// console.log(map);

// map.forEach((item)=> console.log(item))

map.delete('In')
// console.log(map);
map.set('In',"India")
// console.log(map);


for (const [key , value] of map) {
    // console.log(key);
    
}
for (const [key , value] of map) {
    // console.log(value);
    
}
for (const [key , value] of map) {
    //console.log(key , ": " ,value);
    
}


const myObject = {
    game:"ps5",
    chess:"Horses",
    cricket :"batsman",
}

// for (const element of myObject) {
//     console.log(element);   onjects are not iterable here
// }

for (const key in myObject) {
//   console.log(myObject[key]);
}
for (const key in myObject) {
  console.log(myObject);
}