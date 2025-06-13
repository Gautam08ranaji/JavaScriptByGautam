const myHeroes = ["THOR","LOKI","HULK","GROOT","ROCKET"]


const dc_heroes = ["spiderman","batman","ironman","superman"]

// myHeroes.push(dc_heroes)

// console.log(myHeroes);
// console.log(myHeroes[5][0]);

const addedArray = myHeroes.concat(dc_heroes)
// console.log(addedArray);

// addedArray.forEach(item => console.log(item));

const spread = [...myHeroes,...dc_heroes]
// console.log(spread);

const depthArry = [1,2,3,4,[5,6],7,[8,9,[10,11,12,13]],[14,15,16]]
// const flattedArry = depthArry.flat(Infinity)
// console.log(flattedArry);
const flattedArry = depthArry.flat(2)
// console.log(flattedArry);
const flattedArry1 = depthArry.flat(1)
// console.log(flattedArry1);


console.log(Array.isArray("Gautam Rana"));
console.log(Array.from("Gautam Rana"));


