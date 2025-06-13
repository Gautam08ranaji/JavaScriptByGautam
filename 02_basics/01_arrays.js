// const myArr = [0 , 1 , 2 , 3, 4 , "hitesh"]
// console.log(typeof myArr);
// console.log(myArr);

const colors = ["Red", "yellow", "Blue"];

colors[4] = "Green";

const myfun = () => {
  colors.forEach((item, index) => {
    console.log(`${index}: ${item}`);
  });
};

// console.log(myfun());
// myfun()
// console.log(colors.reverse());

const newArr = new Array(1,2,3,4,5)
// newArr.unshift(9)
// console.log(newArr);
// newArr.shift()
// newArr.unshift(0)
// newArr.unshift("")
// newArr.shift()
// console.log(newArr);


// console.log(newArr);
// newArr.push(6)
// newArr.push(7)
// console.log(newArr);
// newArr.pop()
// newArr.pop()
// console.log(newArr);
// console.log(newArr.length);

const sl = newArr.slice(1,3)
// console.log(sl);
// console.log(newArr);



const sp  = newArr.splice(1,3)

// console.log(sp);
// console.log(newArr);

// console.log(Array.isArray(sp));







