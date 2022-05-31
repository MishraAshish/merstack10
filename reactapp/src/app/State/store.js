//import reducers, create store, import middle ware to make calls, combineReducer, export store
//only one store is allowed in one applicaiton, applications data model,
//one reducer per store so we need to combine if multilpe reducers are there
//store sends notification to view for change of state
//this allows to inject middlewares like thunk, promise in application 

import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"; //is used to pipeline the dispatched objects and give us a feeling of sync execution by being async
import promise from "redux-promise-middleware";//is used to make calls to the server using promise

import userReducer from "./user/userReducer";
//import productReducer from "./product/productReducer";

let logger = () => (next) => (action) => {
    //currying in javasript where we pass function as input and recieve function as output
    console.log("Logged Action : Store File ", action);
    next(action); //move to the actual execution
};

export default createStore(
    combineReducers({
        userReducer, //userReducer : userReducer       
        //productReducer
    }),
    {},//inital state if we want to set from store instead of reducer
    applyMiddleware(logger, thunk, promise)
)