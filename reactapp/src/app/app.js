import React, { Component } from "react"; //React - default import , Component - named import

import FooterComponent, {DummyComponent, pi} from "./CommonComponents/FooterComponent";

export default class AppComponent extends Component //React.Component 
{

    render(){
        let address = "Somewhere on earth"; //js variable
        //this returns virtual dom (view) and it should have only one parent returned
        //JSX - javascript like xml structure
        return( 
            <div>
                <h1>Application Component</h1> 
                <p><b>{address +"  "+ pi}</b></p>
                <FooterComponent></FooterComponent>
                <DummyComponent/>
            </div>            
        )
    }
}