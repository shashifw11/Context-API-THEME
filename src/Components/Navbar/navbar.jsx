import { Button } from "../Button/button"
import {useContext} from "react" ;  
import { ThemeContext } from "../../context/ThemeContextProvider";
import style from "./navbar.module.css"  


//  import "./navbar.css" ; 

export const Navbar = ()=>{ 
    const {theme , toggleTheme} = useContext(ThemeContext) 
  
    return (
       <div className = {`${style.container} ${theme === "light" ? style.containerLight :  style.containerDark}`}
       > <ul style = {{display : "flex" , columnGap : "30px" , listStyle : "none"}}>  
           <li>HOME</li>
           <li>SECTION</li>
           <li>SPORTS</li>
           <li>KIDS</li>
       </ul>
         <button  style = {{float : "right" , borderRadius : "70px", cursor: "pointer" , marginRight : "100px "}} onClick = {toggleTheme}>TOGGLE</button>
       {/* <br/> */}
       </div>
    )
}