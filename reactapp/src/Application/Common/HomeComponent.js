import React, { Component } from "react";
import {PropTypes} from "prop-types"; 

export default class HomeComponent extends Component {

    //Creation Life Cycle Methods
    constructor(props){ //props - is used to pass information from parent to child component
        super(props); //this is used to push back updated state in parent components

        this.state = {
            userName : props.userName,
            userSession : "MERNSTack"
        }

        this.intervalObj = ""

        //creating reference elements to access directly when we need
        this.address = React.createRef()
        this.age = React.createRef()
    }

    //ensures that component has rendered first time and html is in place on browser
    //we can do state change and also make server calls
    componentDidMount(){
        this.callInterval()      
        
        setTimeout(() => {
            this.address.current.value = "Address Changed"
            this.age.current.value = "Age Changed"
            this.age.current.focus();
        }, 3000);
    }

    callInterval = ()=>{
        // this.intervalObj = setInterval(() => {
        //     console.log("Inteval gets called in Home Component")
        //     this.setState({
        //         userName : "Annie"
        //     })    
        // }, 3000);
    }

    //destruction life cycle method - used to clear callbacks and api subscriptions
    componentWillUnmount(){
        console.log("Component is unmounted")

        clearInterval(this.intervalObj)
    }

    textChange = (evt)=>{
        let target = evt.target.value;
        console.log(target)

        this.setState({
            userName : target
        })

        evt.preventDefault()
    }

    render(){
        //console.log("render method called! to create virtual dom")
        return(
            <>
                <h1>Home Component</h1>
                <b>{this.props.userName}</b>
                <b>{this.state.userName}</b>
                {/* controlled way of component creation */}
                <div className="col-md-12">
                    <div className="col-md-8">
                        <label>User Name</label>
                        <input type="text" value={this.state.userName} onChange={this.textChange} maxLength={20}></input>
                    </div>
                    <div className="col-md-8">
                        <label>User Session</label>
                        <input type="text" value={this.state.userSession} maxLength={20}></input>
                    </div>
                </div>


                {/* un-controlled way of component creation */}
                <input type="text" placeholder={"Default User Address"} ref={this.address} maxLength={20}></input>
                <input type="text" placeholder={"Default User Age"} ref={this.age} maxLength={20}></input>
            </>
        )
    }
}



// HomeComponent.defaultProps = {
//     userName : "Gauri!!"
// }

HomeComponent.propTypes = {
    userName : PropTypes.string.isRequired
}