import { useParams } from "react-router-dom";
import * as data from "../../../data/data.js";

import VerticalMenu from "../../VerticalMenu/VerticalMenu.jsx";
import Value from "../../../components/valueConsumption/ValueConsumption.jsx";


import "./style.scss";

function Dashboard() {
  const { id } = useParams();
  const foundedId = Number(id);

  const user = data.USER_MAIN_DATA.find((d) => d.id === foundedId);
  console.log(Object.entries(user.keyData));

  return (
    <div className="dashboard">
      <VerticalMenu />
      <div className="container">
        <header>
        <h1>
          Bonjour <span className="user-name">{user.userInfos.firstName}</span>{" "}
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
      <div className="main-content">
        <div className="charts"></div>
        <div className="value-consumption">
          {/* map component */}
          {Object.entries(user.keyData).map(arr=><Value key={arr[0]} arr={arr}/>)}
          
        </div>
      </div>
      </div>
      
    </div>
  );
}
export default Dashboard;
