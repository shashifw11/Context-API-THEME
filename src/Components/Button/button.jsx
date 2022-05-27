   import {useContext} from "react" ; 
import { ThemeContext } from "../../context/ThemeContextProvider";
  import style from "./button.module.css"
export const Button = ({text,onClick})=>{

    const {theme} = useContext(ThemeContext) 
       console.log(theme) ; 
    return (
        <button  className = {`${style.buttonBase} ${theme === "light" ? style.buttonLight :  style.buttonDark}`}
         
         
        >{text}</button>
    )
} 