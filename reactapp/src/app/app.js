import React, { Component, PureComponent } from "react"; //React - default import , Component - named import
import "./app.css"
import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";// browser router from react

import Loadable  from "react-loadable";//lazy loading of components with bundle splitting

//import FooterComponent, {pi} from "./CommonComponents/FooterComponent";
//import DummyComponent from "./CommonComponents/DummyComponent";
//import HeaderComponent from "./CommonComponents/HeaderComponent";
//import Home from "./CommonComponents/HomeComponent";
//import About from "./CommonComponents/AboutComponent";
//import NotFound from "./CommonComponents/NotFoundComponent";
//import UserComponent from "./ApplicationComponent/User/Component/UserComponent";
//import UserContainer from "./ApplicationComponent/User/Container/UserContainer";
//import User from "./ApplicationComponent/User/Component/UserHooksComponent";
//import ProductComponent from "./ApplicationComponent/Product/ProductComponent";
// import DisplayProduct from "./ApplicationComponent/Product/DisplayProducts";
// import CartComponent from "./ApplicationComponent/Cart/CartComponent";
// import Coupon from "./ApplicationComponent/Coupon/CouponComponent";
// import CheckoutComponent from "./ApplicationComponent/Checkout/CheckoutComponent";
//import Hooks from "./hooks/hooksUsage";
//memoization

// functional component, used as placeholder
//when lazy loaded modules delayed
function Loading() {
    return (
        <div>
            Loading Component in Lazy Manner...
        </div>
    )
}

const FooterComponent = Loadable({
    loader: () => import("./CommonComponents/FooterComponent"),
    loading: Loading,
});


const Home = Loadable({
    loader: () => import("./CommonComponents/HomeComponent"),
    loading: Loading,
});

const HeaderComponent = Loadable({
    loader: () => import("./CommonComponents/HeaderComponent"),
    loading: Loading,
});

const NotFound = Loadable({
    loader: () => import("./CommonComponents/NotFoundComponent"),
    loading: Loading,
});

const About = Loadable({
    loader: () => import("./CommonComponents/AboutComponent"),
    loading: Loading,
});

const User = Loadable({
    loader: () => import("./ApplicationComponent/User/Component/UserHooksComponent"),
    loading: Loading,
});

const ProductComponent = Loadable({
    loader: () => import("./ApplicationComponent/Product/ProductComponent"),
    loading: Loading,
});

const DisplayProduct = Loadable({
    loader: () => import("./ApplicationComponent/Product/DisplayProducts"),
    loading: Loading,
});

const CartComponent = Loadable({
    loader: () => import("./ApplicationComponent/Cart/CartComponent"),
    loading: Loading,
});

const Coupon = Loadable({
    loader: () => import("./ApplicationComponent/Coupon/CouponComponent"),
    loading: Loading,
});

const CheckoutComponent = Loadable({
    loader: () => import("./ApplicationComponent/Checkout/CheckoutComponent"),
    loading: Loading,
});

const Hooks = Loadable({
    loader: () => import("./hooks/hooksUsage"),
    loading: Loading,
});

export default class AppComponent extends Component{

    render(){
        return(
            <Router>
                <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<Home  title="Home Component" />} />
                        <Route path="/home" element={<Home  title="Home Component" />} />
                        {/* <Route path="/user" element={<UserContainer />} /> */}
                        <Route path="/user" element={<User />} />
                        <Route path="/product" element={<ProductComponent />} />
                        <Route path="/cart" element={<CartComponent />} />
                        <Route path="/display" element={<DisplayProduct />} />
                        <Route path="/coupon" element={<Coupon />} /> 
                        <Route path="/checkout" element={<CheckoutComponent />} /> 
                        <Route path="/about" element={<About />} />
                        <Route path="/hook" element={<Hooks />} />
                        <Route path="/about/:id" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                <FooterComponent/>
            </Router>
        )
    }


}




//old code
//export default class AppComponent extends Component //React.Component 

//Pure Component contains predefined implementation of ShouldComponentUpdate
// export default class AppComponent extends PureComponent
// {
//     constructor(props){
//         super(props);

//         //state object is used to allow changes with the help of predefined api's in react 
//         //(setState and forceUpdate)
//         this.state = {
//             name : "Default Name",
//             address : "Default Address"
//         }
//     }

//     //whenever we define and event listner javascript provide event object bydefault(evt)
//     handleClick = (evt )=>{
//         //react needs to re-render to show the changed values (state)
//         //re-render can only be done when we change the state with predefined api's (setstate, forceupdate)
        
//         //using setState allows us to go with the lifecycle methods of component
//         //the state changes are done with api in batch process manner
//         this.setState({
//             name : "Toan",
//             address : "Somewhere in vietname"
//         },()=>console.log("state is updated"))

//         console.log("state change value ", this.state) //? immediately we dont see the update
//         //alert("We will change the state values")

//         //we should avoid using forceUpdate to update the state, as it skips the life cycle methods
//         //this.state.name = "TN",
//         //this.forceUpdate();

//         evt.preventDefault();//preventing the default behaviour of the html element
//     }

//     //update life cycle method
//     // shouldComponentUpdate(nextState, nextProps){
//     //     console.log("nextState ", nextState)
//     //     console.log("nextProps ", nextProps)
//     //     if (this.state.name == nextProps.name) {
//     //         return false
//     //     } 

//     //     return true;
//     // }

//     getChildData = (data)=>{
//         alert("Data from child " + JSON.stringify(data))
//     }

//     render(){
//         console.log("Render in app component")
//         let address = "Somewhere on earth"; //js variable
//         //this returns virtual dom (view) and it should have only one parent returned
//         //JSX - javascript like xml structure -> virtual dom
//         return( 
//             <div>
//                 <h1>Application Component</h1> 
//                 <p><b>{address +"  "+ pi}</b></p>
//                 <FooterComponent></FooterComponent>
//                 {/* <DummyComponent userName={"Toan"} userAddress={"Somewhere in US"}/> */}

//                 <DummyComponent userName={this.state.name} userAddress={this.state.address} getData={this.getChildData} >
//                     {/* <h1>{"The First Header From Parent App Component"}</h1> */}
//                     <FooterComponent/>
//                     <h2>{"The Second Header From Parent App Component"}</h2>
//                 </DummyComponent>
//                 <button onClick={this.handleClick} >Click To Update</button>
//             </div>            
//         )
//     }
// }


//create two state fields in app.js and then set the state with the values passed from DummyComponent
//show the state values in app component somewhere, instead of alert