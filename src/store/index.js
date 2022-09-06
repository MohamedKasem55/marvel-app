
import { configureStore } from "@reduxjs/toolkit"
import { cartReducer } from "./cartSlice"
import { authReducer } from "./loginSlice"



const store=configureStore({reducer:{auth:authReducer,cart:cartReducer}})
export default store



/* import { createStore } from "@reduxjs/toolkit"
const store =createStore(authReducer)
*/

/* import { combineReducers, createStore } from "redux";

const initialState={commicsCart:[],authState:{isLoggedin:false,email:null}}

 const cartReducer= (state=initialState,action)=>{
    if(action.type===Actions.addCommic)
        return {...state,commicsCart:[...state.commicsCart,action.payload]}
    if(action.type===Actions.removeCommic)
        return state.commicsCart.map(commic=>commic.id !==action.payload)
    else 
    return state
}
const authReducer=(state=initialState,action)=>{
    if(action.type===Actions.login)
    return {...state,authState:{isLoggedin:true,email:action.payload}}
    if(action.type===Actions.logout)
    return {...state,authState:{isLoggedin:false,email:null}}
    else 
    return state
}
export const Actions={
    addCommic:"ADD-COMMIC",
    removeCommic:"REMOVE-COMMIC",
    login:'LOGIN',
    logout:'LOGOUT'
}
const rootReducer=combineReducers({authReducer,cartReducer})
const store=createStore(rootReducer)
export default store
 */