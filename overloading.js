//Overloading - Same name function with different number of params or type of params
//We have no concept of overloading in JS functions we have overwriting

function Sum(a, b) {
    console.log(a+b+"Two Params")
    return a + b
}

function Sum(a, b, c) {
    console.log(a,b,c,"Three Params")
    return a + b + c
}

console.log(Sum(2,3))
console.log(Sum(2,3,4))