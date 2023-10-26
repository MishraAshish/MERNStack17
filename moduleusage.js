//read user from module.js // by doing import using require function

//require : is a module which helps us make sure of importing file before we use them
var {User, aConstant} = require("./module")

console.log(User)

User.address = "US"

console.log(User.getUserInfo())

console.log(aConstant)

console.log(globalThis.User)

//Put the student closure in a module and export the same and print in another file