import {createContext , useState} from "react" ; 

export const ThemeContext = createContext() ;   /// call the createContext function and its return object 

export const ThemeContextProvider = ({children})=>{
    const [theme , setTheme] = useState("light")

     const toggleTheme = ( )=>{            /// whenever this function is called then if theme is light then it become to dark and vise versa,no need to paas value its happen only when function is call
          setTheme(theme === "light" ? "dark" : "light");
     }

    return (
     <ThemeContext.Provider value = {{theme,toggleTheme} }>{children}</ThemeContext.Provider>
   
    ) ;
 } ;
 