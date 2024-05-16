import yoga from "../../assets/yoga.png";
import swim from "../../assets/swim.png";
import bicycle from "../../assets/bicycle.png";
import cardio from "../../assets/cardio.png";

import "./style.scss"
function VerticalMenu(){
  return (<aside>
    <div className="sport-icons">
      <img src={yoga} alt="yoga icon"/>
      <img src={swim} alt="yoga icon"/>
      <img src={bicycle} alt="yoga icon"/>
      <img src={cardio} alt="yoga icon"/>
    </div>
    <p className="copyright">
    Copiryght, SportSee 2020
    </p>
  </aside>)
}

export default VerticalMenu