//Every file in javacript is termed as a module, it could be a single statement or function or a complete application

var User = {
    name : "Bryan",
    address : "Somewhere on earth",
    sessionTraining : "MERNSTack",
    getUserInfo : function () {
        return { 
            name : this.name,
            session : this.sessionTraining,
            address : this.address 
        }
    }
}

var aConstant = 3.1413

globalThis.User = {
    User : "Second User"
}

module.exports = {
    User, aConstant
}
