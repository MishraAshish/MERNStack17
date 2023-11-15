//literals represent memory allocation of some/few values

var name = "Bryan"
var age = 99
var address = "Somewhere on earth"

var name2 = "Gauri"
var age2 = 98
var address2 = "Somewhere in US"

//creating object literal using key:value pair
var User1 = {
    name : "Danny",
    age : 21
}

var User2 = {
    name : "Arda",
    age : 22
}

console.log(User1, User2)

//update

User1.name = "Garcia"
User2.address = "Somewhere in US"

console.log(User1, User2)