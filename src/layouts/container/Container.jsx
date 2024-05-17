import Nav from "../Navbar/Navbar";
import VerticalMenu from "../VerticalMenu/VerticalMenu";

import "./style.scss"

function Container({children}) {
  return (<div className="container">
    <Nav />
    <div className="body-container">
      <VerticalMenu/>
      <div className="main-container">
        {children}
      </div>
    </div>
  </div>)
}

export default Container;