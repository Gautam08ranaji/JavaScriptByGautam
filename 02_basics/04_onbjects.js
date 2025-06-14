// const tinderUser = new Object() // SINGLETON OBJECT

const tinderUser = {} //    NON SINGLETON OBJECT    

// console.log(tinderUser);

tinderUser.id = 4
// console.log(tinderUser);
// console.log(tinderUser.id);


const regularUser = {
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            name:"Gautam Rana",
            age:25,
            profile:"Andrroid developer"
        }
    }
}

const details = regularUser?.fullname?.userfullname
// console.log(`user name is ${details.name}  and age is ${details.age}` );


/////////////////////////////////////////////////////////////////////////////////////////////////


const name ="Gautam"
const person ={
    name, // shorthand property 
    age:25,
    ["greet"+"ing"]:"hello", // computed property
    greet(){
        return `Hi there, i am Gautam`
        
    }
}


// console.log(person.greet());
// console.log(person);

// console.log(person.name);
// console.log(person["greeting"]);

// console.log(person);
delete person["greeting"]
// console.log(person);

// console.log("name" in person); // CHECKING PROPERTIES EXIST INSIDE OJECTS
// console.log(person.hasOwnProperty("age")); 


// LOOPING THROUGH OBJECTS

for (let key in person) {
  const value = person[key];
//   console.log(`Key: ${key}, Value: ${value}`);
}

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));


const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1

// console.log(obj1 === obj2); // false
// console.log(obj1 === obj3); // true

const entries =[
    ["name" , "alice"],
    ["age",25],
    ["city" ,"Gwalior"]
]

// console.log(Object.fromEntries(entries));

//----------------MERGE TWO  OBJECTS INTO ONE---------------------------//  

const obj4 = { a: 1  , b:2};
const obj5 = { x: 10 , y:20 };

const obj6 = {obj4 , obj5}
// console.log(obj6);

const comibnedObjects = Object.assign({},obj4 , obj5) // less use
// console.log(comibnedObjects);

const obj7 = {...obj4 , ...obj5} // latest way
// console.log(obj7);




//
