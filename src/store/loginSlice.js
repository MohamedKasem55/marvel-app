import { createSlice } from "@reduxjs/toolkit";

const initialState={isLoggedin:false,email:null}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.isLoggedin=true;
            state.email=action.payload
        },
        logout:(state,action)=>{
            state.isLoggedin=false;
            state.email=null
        }
    }
})
export const authReducer=authSlice.reducer
export const authActions=authSlice.actions
