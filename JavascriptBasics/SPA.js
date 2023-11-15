//SPA - Single Page Application

//MPA - Multipage application

//www.superdanny.com/home - (java - home.java, home.css, home.js, home(images, videos))
//www.superdanny.com/mobile/home - (java - mobilehome.java, mobilehome.css, mobilehome.js, mobilehome(images, videos))


//Entire page is built on backend and sent to browser for each page/request

//SPA - all the pages/features render on a single html in web browser
//One html is responsible to render the complete application and data is transferred using API's (Restful API's)

//Backend
//API - 
//www.superdanny.com/homeapi/gethomedata - (fetch or post data for home page)

//Front End - (bunlde of home.js/home.css/home.videos)
//www.superdanny.com/home 
//www.superdanny.com/mobilehome 

//SOA - Service Oriented Architecture 
//Backend - based on RESTFul API's - Get, Put, Post, Delete and Patch
//Front End - built using React/Angular/Backbone/Vue ... (Single Page)

//Reusabality
//Reduce the time of building mutli device support
//As API's are specific and light weight (so doesn't needs a complex architecture like MPA)
//USER - getuser/createuser/updateuser/deleteuser

//PRODUCT - getPRODUCT/createPRODUCT/updatePRODUCT/deletePRODUCT

//JS - both places its easy for developers to switch bewtween front end and backend
//NodeJS and React both use - ES6 (advanced object oriented javascript)


//Javascript - 2015(before it was known as js, vanilla javascript)
//JS-2015 is the upgrade to switch JS from functional programming to class bases structure
//ES6 <==> JS-2015
//ES7 <==> JS-2016
//ES8 <==> JS-2017
//ES-NEXT <==> JS-2018+

//JS -
//Functional
//uses scope, hoisting, closures to provide features that we built

//ES-6
//mulitple variables, types, classes, high level enumerators etc.
//arrow
let add = (a,b)=>a+b

console.log(add(5,6))