//creating functional component
import React from "react";

//default export
export default function FooterComponent(props) {
    return(
        <>
            <h4><b>{`Footer Component Rendered`}</b></h4>
        </>
    )
}

//named export
export let DummyComponent = (props)=>{
    return(
        <>
            <h4><b>{`Dummy Component Rendered`}</b></h4>
        </>
    )
}

//named export pi
export const pi = 3.141;
