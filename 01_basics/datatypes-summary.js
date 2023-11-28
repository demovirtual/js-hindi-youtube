//#1. Primitive Data Type

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt 



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 4123456789012345689346533
const bigNumber = 4123456789012345689346533n

//console.log(bigNumber);

//#2. reference type (Non Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "doga"];

let myObj = {
name: "Rahul",
age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3