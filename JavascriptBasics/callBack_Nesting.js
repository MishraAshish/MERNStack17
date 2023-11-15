// CallBackFunction - when a function is passed as a parameter in any other function, it would termed as callback function
// This function will remain in the entirity of the other functions context

var functionComments = "Printing Details here as ";

function PrintDetails(param1, param2) {
    console.log(functionComments, param1, param2)
}


function GetDetails(userName, uAddress, CallBackFunction) {
    CallBackFunction(userName, uAddress)
}

//GetDetails("Bryan", "Somewhere on earth", PrintDetails)

function AccountDetails(accType, accBal, CallBackFunction) {
    CallBackFunction(accType, "$100")
}

//AccountDetails("Credit", "$1000", PrintDetails)


// create a function arithmatic calculation
// inside that pass, two params
// create 4 different functions - Sum, Substract, Multiply and Divide
// If we pass Sum it should do Sum, same way Substract, Multiply and Divide


//nested function and javascript currying (arrange raw, )

var number1 = 20;

function A(a) {
    //console.log(d) //- scope of variables decrease when we go up
    
    return function B(b) {
        
        return function C(c) {
            
            return function D(d) {
                   return  a + b + c + d + number1
            }
        }
    }   
}

var b = A(5)
var c = b(5)
var d = c(5)
var result = d(5)

console.log(result)

//chain execution

var chainResult = A(10)(10)(10)(10)
console.log(chainResult)