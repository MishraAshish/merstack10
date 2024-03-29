//this action file contains the actions and methods to make call to server
import axios from "axios";
import * as ActionTypes from "../actionTypes";

import { getUserCart } from "../Cart/CartAction";

export const addUserAction = (user)=>
{
    return{
        type: ActionTypes.addUserToStore,
        payload : {user}
    }
}

//signin - signup user using react fetch api
export const signinSignupUser = (userObject)=>{ //user object to sign in

    
     // thunk - makes it behave synchronously
    return function (dispatch, getState) {
        // here we go with ajax call : to save data to the server or fetch it from the server
        // using fetch method of react
        console.log("called by dispatch and synced by thunk");
        //dispatch(loading(true));
        axios.post("http://localhost:9000/user/api/signinup",//uri or end point of singninup api
            userObject)
            //.then(response => response.json())//response from the server/ api - parsing to json
            .then((signedUser)=>{
                dispatch(addUserAction(signedUser.data));//dispatching action with signed user 
                dispatch(getUserCart(signedUser.data._id))
            })
            .catch((err)=>{
                console.log("err in login ", err)
            })
    }
}

// export const signinSignupUser = (userObject)=>{ //user object to sign in

//     // thunk - makes it behave synchronously
//    return function (dispatch, getState) {
//        // here we go with ajax call : to save data to the server or fetch it from the server
//        // using fetch method of react
//        console.log("called by dispatch and synced by thunk");
//        //dispatch(loading(true));
//        window.fetch("http://localhost:9000/user/api/signinup",//uri or end point of singninup api
//                {
//                    method: 'POST', //rest method type to save the data
//                    headers: {
//                        'Accept': 'application/json',
//                        'Content-Type': 'application/json'
//                    },
//                    body: JSON.stringify(userObject)
//                })
//            .then(response => response.json())//response from the server/ api - parsing to json
//            .then((signedUser)=>{
//                dispatch(addUserAction(signedUser));//dispatching action with signed user 
//                dispatch(getUserCart(signedUser._id))
//            })
//            .catch((err)=>{
//                console.log("err in login ", err)
//            })
//    }
// }