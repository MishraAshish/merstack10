import * as actionTypes from "../actionTypes";

let INITIAL_STATE = {
    products:[],
    defaultProduct : {
        name : "Product Name",
        price : 2,
        desc : "Product Description",
        rating : "Product Rating"
    }
}

export default function ProductReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        

        // case ActionTypes.FETCH_PRODUCTS_FULFILLED:            
        //     return {...state, products:action.payload};

        default:
            return state;
    }
}