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

function(){};
// or
// variable m fuction
const myFunction = function(){
    console.log("hello");
}