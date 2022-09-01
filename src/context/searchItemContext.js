import React, { useState } from "react";
import { createContext } from "react";

const SearchItemContext =createContext({
    item:'',
    itemSetter:()=>{},
    isLoading:false,
    onLoading:()=>{}
})

/* export const CharachterContextProvider= (props)=>{
    const [item, setItem] = useState('')

        const itemSetterHandler=(data)=>{
            console.log(data);
            setItem(data)
        }
    return (<SearchItemContext.Provider
        value={{
            item:item,
            itemSetter:itemSetterHandler
        }}>
        {props.children}
    </SearchItemContext.Provider>)
} */
export default SearchItemContext