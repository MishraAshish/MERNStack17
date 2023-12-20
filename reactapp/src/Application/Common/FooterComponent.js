import React from "react";

let Footer = (props)=>{
    //props.name = "Danny" // this is not allowed as props a immutable

    return( //JSX - Javascript Like XML structure (not html, not xml - but js)
        <>
            {/* <h4>Footer Component</h4> */}
            {/* {props.name} */}
            {props.children[0]}
            {props.children[1]}
        </>
    )
}


export default Footer;