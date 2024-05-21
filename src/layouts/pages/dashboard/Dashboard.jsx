import { useParams } from "react-router-dom";
import * as data from "../../../data/data.js";

import Value from "../../../components/valueConsumption/ValueConsumption.jsx";

import "./style.scss";
import UserContext from "../../../store/UserContext.jsx";
import ChartsContainer from "../../chartsContainer/ChartsContainer.jsx";

function Dashboard() {
  const { id } = useParams();
  const foundedId = Number(id);

  // TODO: optimiser ?
  const user = {
    id: foundedId,
    mainData: data.USER_MAIN_DATA.find((d) => d.id === foundedId),
    activities: data.USER_ACTIVITY.find((d) => d.userId === foundedId).sessions,
    performanceInfos: data.USER_PERFORMANCE.find((d) => d.userId === foundedId),
    averageSession: data.USER_AVERAGE_SESSIONS.find(
      (d) => d.userId === foundedId
    ),
  };
  console.log(user);

  return (
    <UserContext.Provider value={user}>
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
          <ChartsContainer/>
          <div className="values-consumption">
            {Object.entries(user.mainData.keyData).map((arr) => (
              <Value key={arr[0]} arr={arr} />
            ))}
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}
export default Dashboard;
