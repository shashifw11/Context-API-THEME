import {createContext , useState} from "react" ; 

export const ThemeContext = createContext() ;   /// call the createContext function and its return object 

export const ThemeContextProvider = ({children})=>{
    const [theme , setTheme] = useState("light")
     const toggleTheme = (v)=>{
          setTheme(theme === "light" ? "dark" : "light");
     }
    return (
     <ThemeContext.Provider value = {{theme,toggleTheme} }>{children}</ThemeContext.Provider>
   
     ) ;
 } ;
 