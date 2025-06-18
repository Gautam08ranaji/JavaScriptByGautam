const myNums  = [1,2,3]

const total = myNums.reduce((acc,cur)=>{
    return acc + cur
},0)

console.log(total);


const shoppingCart = [
  {
    itemName: "iPhone 14",
    price: 599
  },
  {
    itemName: "Samsung Galaxy S23",
    price: 549
  },
  {
    itemName: "Sony WH-1000XM5 Headphones",
    price: 349
  },
  {
    itemName: "Apple MacBook Air M2",
    price: 999
  }
];


const grandTotal = shoppingCart.reduce((acc , item)=> acc + item.price , 0)

console.log("total",grandTotal);
