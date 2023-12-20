import React from "react";

let HeaderComponent = (props)=>{
    console.log("Rendering the header component")
    return(
        <>
            <h2>Shopping Cart Application</h2>
            <h3>{props.header}</h3>
            <h3>Name - {props.name}</h3>

            <button onClick={()=>props.getChildData("Gauri!!! from child component")}>Pass To Parent</button>
        </>
    )
}

export default HeaderComponent;