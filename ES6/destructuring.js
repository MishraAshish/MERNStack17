//Destructuring allows to not create multiple variables and initializers for the same
//1. Array Destructuring
//a. mapping values from array
//let arr = ["One", "Two", "Three"]
// let first, second, third;
// first = arr[0]
// second = arr[1]
// third = arr[2]

// let [first, second, third] = ["One", "Two", "Three"]

// console.log(first)
// console.log(second)
// console.log(third)

//b. when value is not present/ defaulting
// let [first, second, third, fourth = "default"] = ["One", "Two", "Three"]

// console.log(first)
// console.log(second)
// console.log(third)
// console.log(fourth)

//c. rest of the values in array
let [first, second, third, ...fourth] = ["One", "Two", "Three",4,5,6,7,8]

console.log(first)
console.log(second)
console.log(third)
console.log(fourth)

//d. swapping of variables/ values
let a = 2, b = 3;

[a,b] = [b,a]
console.log(a)
console.log(b)


//2.  Object destructuring and object of object destructuring

let User = {Session : "ES6", Topic : "Destructuring", Timing : {FirstSlot : "9AM", SecondSlot : "10AM" } }

// console.log(User.Topic)
// console.log(User.Timing.SecondSlot)

let { Topic, Timing = { SecondSlot, ThirdSlot : "11AM" } } = User

console.log(Topic)
console.log(Timing.SecondSlot)
console.log(Timing.ThirdSlot)



//question :

let StudentTest = {
    firstname : "Put your name",
    address : " ??",
    sessionTopics : {
        covered1 : "CoreJS",
        covered2 : "OOJS"
    }
}

//print firstname and sessionTopics, 
//along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

//create an example of const where we can update on property of the object, where it says const is mutable

//create a for loop using var and let, print each value in timeout after 2 second and to 
//demonstrate functional scope of var and lexical of let 