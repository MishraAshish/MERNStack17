// DataTypes are storage type to store various types of data like - int, char, string, bool etc

//We've 6 data types in javascript as below
// String, Number, Boolean, Undefined, Null, Object

// in ES6 above we can have Symbol as data

//ToComment one line - ctrl+/
//Multiple - ToComment select all line - ctrl+/
//To-Uncomment - select and ctrl+/

console.log(myValue) 
console.log(typeof myValue)
console.log("Before declaration!!!")


var myValue = "This is my first string"

console.log(myValue)
console.log(typeof myValue) //string

//var myValue = "Redeclaring a variable" //possible with var

myValue = 2500 //dynamic type casting - 

console.log(myValue)
console.log(typeof myValue) //number

myValue = 2500.0025 // no other types for numeric number will work

console.log(myValue)
console.log(typeof myValue) //number

myValue = true

console.log(myValue)
console.log(typeof myValue) //boolean

var prsnObject = {
    name : "Arda",
    friend : "Gauri"
}

console.log(prsnObject)

myValue = prsnObject

//console.log(myValue)
console.log(typeof myValue) //object

myValue = {}

console.log(myValue) //empty object
console.log(typeof myValue) //object

myValue = undefined

console.log(myValue) 
console.log(typeof myValue) //undefined

myValue = null

console.log(myValue) //null is a valid value in js
console.log(typeof myValue) //object

//symbol data type is present from ES6 and can be used in own libraries

var mySymBol = Symbol("Symbol Data Type")

console.log(mySymBol) 
console.log(typeof mySymBol) //symbol


//understand and give example of each data type and also try doing dynamic typing and accessing before declaration
