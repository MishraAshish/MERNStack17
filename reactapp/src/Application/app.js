import React, { Component } from "react";
import HeaderComponent from "./Common/headerComponent"

//class component

export default class ApplicationComponent extends Component {

    render(){ //life cycle method of React.Component base class, generated virtual dom on state change
        let a = 10, b = 5;
        let header = "10,001+ employees · UI Specialist"
        
        return(
            <>
                <HeaderComponent header={header} name={"Khan Tran"}/>
                <b>The Arithmatic Operation {a+b} {a*b} {a-b} {a/b}</b>
                <h1>This is the Application Component</h1>
                <h1>{header}</h1>
            </>
        )
    }
}




//functional component
// let ApplicationComponent = ()=>{
//     let a = 10, b = 5;
//     let header = "10,001+ employees · UI Specialist"
//     return(
//         <>
//             <HeaderComponent/>
//             <b>The Arithmatic Operation {a+b} {a*b} {a-b} {a/b}</b>
//             <h1>This is the Application Component</h1>
//             <h1>{header}</h1>
//         </>
//     )
// }

// export default ApplicationComponent