//JS is single threaded language

//var name = "Gauri"

function PrintName() {
    //name - default value (undefined) and namePrint gets hoisted - here
    //console.log(name) //Gauri - undefined

    //var name = "Garcia" // when we redeclare this gets hoisted on function top
    console.log(name) // Garcia

    // console.log(newName)
    // namePrint()
    function namePrint() {
        var newName = "Danny"
        console.log(name)
    }
     
}
PrintName();
//console.log(name) //Gauri