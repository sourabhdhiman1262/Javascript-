// data ko memory m store krnye or access krnye kye upper humaer pass 2 tra kye data types hotey h...

//(1) primitive

// 7 types : string , number , boolean , null , undefiend , symbol , BigInt...

// ye call by value hotey h 
// meaning ki hume data ka refernce nhi detey oski copy detey h jisme hum change krtey h

const score = 100
const scoreNumber =100.5

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const BigNumber =46368n


//(2) refernce type (non-primitive)

// array , object , function ...

const hero =["Spider-man", "Iron-man","Captain-America"]

let myObject = {
    name:"sourabh",
    age:23,
}

// function(){};
// or
// variable m fuction
const myFunction = function(){
    console.log("hello");
}

// ==================================================

// stack(store primitive type)  ,  Heap(store Non-primitive)

// Example(primitive)

let person1 = "sourabh"

let person2 = person1

console.log(person1);
console.log(person2);

// Example(Non-primitive)

let user1 = {
    email:"ajsidbcija@.com",
    age: 21,
}

let user2 = user1
user2.email= "my1212@gmail.com"

console.log(user1);
console.log(user2);