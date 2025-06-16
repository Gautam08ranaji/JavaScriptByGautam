
// if (true) {
    
//     let a =10;
//     const b= 20
//     var c = 30
// }

// console.log(a);
// console.log(b);
// console.log(c);


// function foo() {
//   if (false) {
//     function bar() {
//       return 3;
//     }
//   }
//   return typeof bar;
// }
// console.log(foo()); // --> undefined

// var a = 1;
// function f() {
//   console.log(a);
//   var a = 2;
// }
// f();


// function leak() {
//   x = 100;
// }
// leak();
// console.log(x);


// let a = 10;
// {
//   let a = 20;
//   console.log(a);
// }
// console.log(a);

// const obj = {
//   name: "JS",
//   log: function () {
//     const arrow = () => {
//       console.log(this.name);
//     };
//     arrow();
//   },
// };
// obj.log();


// function makeFuncs() {
//   const funcs = [];

//   for (var i = 0; i < 3; i++) {
//     funcs.push(() => i);
//   }

//   return funcs;
// }

// const fs = makeFuncs();
// console.log(fs[0]()); // ?
// console.log(fs[1]()); // ?
// console.log(fs[2]()); // ?


// const fs = []
// for (let i = 0; i < 3; i++) {
//   fs.push(i);
// }
//  console.log(fs[0]); 
// console.log(fs[1]); 
// console.log(fs[2]); 

// {
//   console.log(typeof f); // ?
//   function f() {}
// }


// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }


// var a = 5;

// (function () {
//   console.log(a); // ?
//   var a = 10;
// })();



// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const fn1 = outer();
// const fn2 = outer();

// fn1(); // ?
// fn1(); // ?
// fn2(); // ?


// function test() {
//   var x = 1;
//   {
//     let x = 2;
//     console.log(x); // ?
//   }
//   console.log(x); // ?
// }

// test();


let x = 1;

function test({ a = x }) {
  let x = 2;
  console.log(a);
}

test({}); // 1
