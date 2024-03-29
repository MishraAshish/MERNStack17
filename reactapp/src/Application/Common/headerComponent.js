import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

let HeaderComponent = (props)=>{
    console.log("Rendering the header component")
    //debugger
    let userName = props.user && props.user.userName ? props.user.userName : "";

    return(
        <div className="col-md-12">
             Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart!!!
             <br/> 
            {userName == "" ?<b> Please Login or SignUp to see other features</b>:""}
             
            <div>
                <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink>
                <NavLink to="/hook" className="button" activeclassname="success" >Login </NavLink>
                <NavLink to="/cart" className="button" activeclassname="success" >Cart </NavLink>
                <NavLink to="/product" className="button" activeclassname="success" >Product </NavLink>
                <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
            </div>            
        </div>
    )
}

//when we want component to become subscriber must implement - mapStoreToProps
let mapStateToProps = (state)=>{ //state - store object from configure store in store.js
    return { //define the props that we need to read from store
        user : state.UserReducer.User //now props.user - can be used in component to read user Initial_state
    }
}

//when we need to make our component a publisher must implement this
//let mapDispatchToProps;


export default connect(mapStateToProps, null)(HeaderComponent);

            {/* <div>
                <h3>{props.header}</h3>
                <h3>Name - {props.name}</h3>

                <button onClick={()=>props.getChildData("Gauri!!! from child component")}>Pass To Parent</button>
            </div> */}
//export default HeaderComponent;