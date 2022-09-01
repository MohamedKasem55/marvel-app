import React, { useState } from "react";
import { createContext } from "react";

export const CharachterContext =createContext({
    charachter:{},
    charachterSetter:()=>{}
})

export const CharachterContextProvider= (props)=>{
    const [charachter, setCharachter] = useState({
        name:'',
        image:'',
        description:'',
        comics:[]})
        const charachterSetter=(data)=>{
            console.log(data);
            setCharachter({...data})
        }
    return <CharachterContext.Provider
        value={{
            charachter:charachter,
            charachterSetter:charachterSetter
        }}>
        {props.children}
    </CharachterContext.Provider>
}