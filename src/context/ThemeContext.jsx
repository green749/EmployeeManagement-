import {createContext,useState} from "react";

const ThemeContext=createContext();

function ThemeProvider({children}){
    const[theme,setTheme] =useState('light');

    function toggleTheme(){
        setTheme((Theme)=> Theme === 'light' ? 'dark' : 'light');

    }

    return(<ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>);
}

export default ThemeContext;
export {ThemeProvider};