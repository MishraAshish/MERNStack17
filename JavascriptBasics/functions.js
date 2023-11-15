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

//5. Nested Function

function Login(params) {
    
    function AuthenticateUser(params) {
        
        function AuthorizeUser(params) {
            
            function CreateSession(params) {
                
                function NavigateUser(params) {
                    
                }
            }    
        }    
    }
}


//do practice each type by writing your own

//Practice questions
//1. Create a constructor Function with Name account and add properties like - AccType, Name, Balance, etc
//2. Create a method in it to return account details 
//3. Create an IIFE and try to access it after execution
//4. Create a function with name Add (accept two params) and
//  again create a function expression with name Add(three params), both should return the Sum of params
//5. Try executing both functions on top (i.e. before declaration of it and see results)
