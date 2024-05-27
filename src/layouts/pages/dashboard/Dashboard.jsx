import { useContext } from "react";

import UserContext from "../../../context/UserContext.jsx";

import Value from "../../../components/valueConsumption/ValueConsumption.jsx";
import ChartsContainer from "../../chartsContainer/ChartsContainer.jsx";

import "./style.scss";

function Dashboard() {
  const { user} = useContext(UserContext);
  return (
    <div className="dashboard-container">
    <header className="dashboard-header">
      <h1>
        Bonjour{" "}
        <span className="user-name">
          {user.mainData.userInfos.firstName}
        </span>{" "}
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
    <div className="dashboard-content">
      <ChartsContainer />
      <div className="values-consumption">
        {Object.entries(user.mainData.keyData).map((arr) => (
          <Value key={arr[0]} arr={arr} />
        ))}
      </div>
    </div>
  </div>
  );
}
export default Dashboard;
