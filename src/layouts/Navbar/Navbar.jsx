import logo from "../../assets/logo.png";

import "./style.scss";
function Nav() {
  return (
    <nav>
      <img src={logo}/>
      <ul>
        <a href="/">Accueil</a>  
        <a href="/">Profil</a>  
        <a href="/">Réglage</a>  
        <a href="/">Communauté</a> 
      </ul>
    </nav>
    
  )
}
export default Nav;