import {createSlice} from '@reduxjs/toolkit'
const initialState={commicCart:[]}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCommic:(state,action)=>{state.commicCart.push(action.payload)},
        removeCommic:(state,action)=>{state.commicCart.pop(action.payload)}
    }
})
export const cartReducer=cartSlice.reducer
export const cartActions=cartSlice.actions