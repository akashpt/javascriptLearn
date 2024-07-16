//primitive 


//7 types (call by value)
//string

//number
const score = 100
const scoreValue = 100.4

//boolean
const isLoggedIn = false

//null
const outSide = null

//undefined

//symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

//BigInt


//refrence / non - primitve
//arrays
const heroes = ["Shaktiman", "Nagraj", "Doga"];
//objects
const myObj = {
    name: "Akash",
    age: 30
}
//functions

const myfunct = function () {
    console.log("Hello World");
}

console.log(typeof myfunct);