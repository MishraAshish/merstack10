import React, { Component, useState } from "react";


let User = (props)=>{

    // constructor(){
    //     this.state = {
    //         userName : "Toan"
    //     }
    // }
    // onChange = (evt)=>{
    //     this.setState({userName : evt.target.vale})
    // }

    // this is a destructure that we get from useState, first is the value of the state (userName), initialized in useState
    // second one is the callBack function to allow us to update the state
    let [userName, setUserName] = useState("Toan"); // the first hook to update the react virtual dom callrender
    
    //let [address, setUserAddress] = useState({"Address1":"Value1", "Address2": "value2"});

    let onChangeUserName = (evt)=>{
        //let userName = evt.target.value;
        console.log(evt.target.value)
        setUserName(evt.target.value)
    }

    return(
        <>
            <h1>User Component Hooks</h1>

            <form className={"form col-md-10 userHook"}>                
                <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} value={userName} 
                        onChange={onChangeUserName}
                            placeholder="Please enter user name" maxLength={20} required/>
                </label>                
            </form>
        </>
    )
    
}


export default User;