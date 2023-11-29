//Spread : is used to spread the elements of any object or array to be used one by one

let arrayOFCities = ["Rome", "New York", "New Delhi", "London"];

//  console.log(arrayOFCities[0]);
//  console.log(arrayOFCities[1]);

//  console.log(...arrayOFCities);

 
// //spread operator is used to combine two objects and preserve the immutability of each object
let User = { name : "Garcia", age : 25 }
let Address = {home : "Somewhere in US", office : "Virtual"}

let Employee = {...User, ...Address}

User.Session = "Winter"

// console.log(Employee);
// console.log(User);


//rest - parameter

// function Sum(a,b,c,d,e) {
//     return a + b + c + d+ e
// }

// console.log(Sum(1,2,3,4,5))

let numList = [1,2,3,4,5,6,7]

function Sum(...num) { //rest is the last parameter of a function which can accept any number of params
    let sum = 0;

    sum = num.reduce((prevVal, currVal)=> prevVal + currVal, 0)

    return sum
}

console.log(Sum(...numList))

console.log(Sum.apply(null, numList)) //legacy way by using apply function in javascript



//Questions :
//Spread Operator - 
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread


//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers
