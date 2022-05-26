import React, {Component, PureComponent} from "react";
// import {PropTypes} from "prop-types";

//export default class Home extends Component {
 export default class Home extends PureComponent {
    constructor(props, context){
        //props : is data object and is the only way to pass data between components
        super(props);//this synchronises props to Base Class component
    }
    render(){
        console.log("Render method of Home Component")

        return(
        
            <div className={"loadimage form"} style={{backgroundImage: "url(/images/hm_pic4.jpg)"}}>
                {/* <p>{this.state.name}</p> */}
                {/* <img src={"./images/hm_pic4.jpg"} /> */}
                {/* {this.state.Title} */}
                <b className="feature">{"Below Feature's We've Implemented in our project :"}</b>
                <ul>                     
                    <li>Sign up new users</li>
                    <li>Login existing users.</li>
                    <li>Add products/items to create product collection.</li>
                    <li>Allow user's to add to cart.</li>
                    <li>Save the user's cart.</li>
                    <li>Checkout and pay for items.</li>
                    <li>Allow users to cancel the order.</li>
                    <li>Allow users to reorder the cart.</li>
                    <li>Allow users to give ratings to each product.</li>
                    <li>Have notifications on top right with logout.</li>
                </ul>
            </div>
        )
    }
}
