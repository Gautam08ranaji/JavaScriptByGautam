let num = 10;
let i = 0;
while (i < num) {
  // console.log(`value of index is ${i}`);
  i++;
}

let myArray = ["hii", " i ", " am", " gautam rana"];

output = "";
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  output =  output + element;
}
// console.log(output.trim());
let fruits = ["banana","apple","orange","strawberry","cherry", "berries"]

let index = 0;
do {
      if (fruits[index] == "orange") {
        index++
        continue
    }
    console.log(fruits[index]);
    index++

  
} while (index < fruits.length);