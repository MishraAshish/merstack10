import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

let Header = (props)=>{

    let navigate = useNavigate();

    let func = function(event) {
        event.preventDefault();
        
        navigate('/about/5000');
    }

    let userName = props.user && props.user.userName ? props.user.userName : ""; 

    return(
        <>
            Hi <b>{userName}</b>, Welcome to SynergisticIT Shopping Cart 
            <hr/>
            <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink> 
            <NavLink to="/user" className="button" activeclassname="success" >User </NavLink> 
            <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
            
            {/* <button onClick={func}>Go To About</button> */}
        </>
    )
}

let mapStateToProps = (state)=>{
    return{
        user : state.userReducer.user
    }
}

export default connect(mapStateToProps, null)(Header);

//export default Header;


//create a class with your own name and implement all the component lifecyles