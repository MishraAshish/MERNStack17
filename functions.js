//functions - are first class member citizens in js, backbone of js, js is functional programming lang.
//It is responsible to give behaviour to be used to achieve certain job

// user - class > getUserDetails - method/functions
//keyword - function

//every function is pure function - it must have return statement //if not then js by default return undefined

//1. Named function
function MyFunc() { //function definitions
    return "Hello World"
}

console.log(MyFunc())


//2. Function expression

var FuncExps = function(a,b){
    console.log(a+b)
}

FuncExps(9,10);

//3. Singleton Function or IIFE - immediately invocable function expression

(function IIFE(params) {
    console.log(params)
})("Gauri")


//IIFE(params) //can't be accessed second time

//4. constructor function - used as class

function funcConstructor(name, age, address) {
    this.name = name
    this.age = age
    this.address = address
    this.getUserDetails = function () {
        return this.name + this.age + this.address
        
    }
}

//use it as a class

var user = new funcConstructor("Bryan", 17, "Wall streets")

console.log(user.getUserDetails())


//do practice each type by writing your own