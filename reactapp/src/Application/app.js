import React from "react";
import HeaderComponent from "./Common/headerComponent"


let ApplicationComponent = ()=>{
    let a = 10, b = 5;
    let header = "10,001+ employees · UI Specialist"
    return(
        <>
            <HeaderComponent/>
            <b>The Arithmatic Operation {a+b} {a*b} {a-b} {a/b}</b>
            <h1>This is the Application Component</h1>
            <h1>{header}</h1>
        </>
    )
}

export default ApplicationComponent