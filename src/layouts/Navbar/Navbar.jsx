import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

import "./style.scss";
function Nav() {
  return (
    <nav>
      <img src={logo}/>
      <ul>
        <NavLink to="/">Accueil</NavLink>  
        <NavLink to="/">Profil</NavLink>  
        <NavLink to="/">Réglage</NavLink>  
        <NavLink to="/">Communauté</NavLink>  
      </ul>
    </nav>
    
  )
}
export default Nav;