import logo from './logo.svg';
import './App.css';
import { Button } from './Components/Button/button';
import {useContext} from "react" ; 
import { ThemeContext } from './context/ThemeContextProvider';
function App() { 
   const {theme, toggleTheme}  = useContext(ThemeContext)
  return ( 
     
    <div className="App">
  <Button text = "THEME"/> 
  <br/>
  <button  onClick = {toggleTheme}>TOGGLE</button>
    </div>
  );
}

export default App;


//provider 
//wrraped the provider on the main  application
//this way any value given in provider is accessible to any 
//created a button component whrere you consumed the theme 
//conditionaly rendering based on the theme 
//consumed the context value using useCOntext the state 
//this time you where updating the / toggle the state 
//  when the state gets updated in the context provider component 
//any component that is consuming from this context , will get render 
