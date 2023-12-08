console.log("Creating API using express server")

const express = require('express') //importing express package and use top level express method
const app = express() //using express function we initialize express application

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/info', function (req, res) {
    res.json({
        session : "MERNSTack",
        topic : "Express JS",
        apiname : "Give Session Info",
        built : "Using NodeMon",
        command : "npm start"
    })
})

//api using query-string => localhost:3000/query?name=Robert&age=99&address=somewhere on moon&id=25
app.get('/query',(req, res)=>{
    let qs = req.query //request object converts query string into JSON 
    console.log(qs)

    if (qs.id==25) {
      res.json(qs)  
    } else {
      res.send("Invalid ID!!!!")
    }
    
})

//api using route param => localhost:3000/routeParam/25
app.get('/routeParam/:id',(req, res)=>{
    let param = req.params["id"]
    console.log(param)

    if (param==25) {
      res.send("A valid parameter!! We are fetching user by ID")
    } else {
      res.send("Invalid ID. Please use valid route parameter")
    }
})

app.get('/file', function (req, res) {
  res.sendFile(__dirname+"/index.html")
})

//default or wild card operator to serve request for any request/path
app.get('*', function (req, res) {
  res.send("<h1>API is not ready yet!!</h1>")
})

app.listen(3000)

console.log("API is ruuning at http://localhost:3000")