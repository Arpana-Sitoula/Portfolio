import React, { createContext, useContext, useState } from 'react'

const NameContext = createContext(null);
const ThemeContext = createContext();

export default function Parent() {
    const name = "Arpana";
    const [mode, setMode] = useState("dark")
    const handleMode = () =>{
        if(mode == "dark"){
            setMode ("light");
        }
        else{
        setMode("dark");
        }
    }
    return (
        <NameContext.Provider value={name}>
            <ThemeContext.Provider value={mode}>
            <button onClick={handleMode}>Toggle mode</button>
            <Child1 />
            </ThemeContext.Provider>
        </NameContext.Provider>
    )
}


export function Child1() {
    return (
        <div>
            <div> <Child2Of1 /></div>
        </div>
    )
}


export function Child2Of1() {
    const mode = useContext(ThemeContext);
    return (
        <div>
            <div className= {`container ${mode}-mode`}>Hello I need to change my theme by my grandParents</div>
            <div> <Child3Of2 /></div>
        </div>
    )
}

export function Child3Of2() {
    const name = useContext(NameContext);
    return (
        <div>I am grand grand child of {name}</div>
    )
}


