import { useParams } from "react-router-dom";
import * as data from "../../../data/data.js";

import Container from "../../container/Container.jsx";

import Value from "../../../components/valueConsumption/ValueConsumption.jsx";

import "./style.scss";
import UserContext from "../../../store/UserContext.jsx";

function Dashboard() {
  const { id } = useParams();
  const foundedId = Number(id);

  const user = data.USER_MAIN_DATA.find((d) => d.id === foundedId);
  console.log(Object.entries(user.keyData));

  return (
    <UserContext.Provider value={foundedId}>
      
          <div className="dashboard-container">
            <header className="dashboard-header">
              <h1>
                Bonjour{" "}
                <span className="user-name">{user.userInfos.firstName}</span>{" "}
              </h1>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </header>
            <div className="dashboard-content">
              <div className="charts"></div>
              <div className="values-consumption">
                {Object.entries(user.keyData).map((arr) => (
                  <Value key={arr[0]} arr={arr} />
                ))}
              </div>
            </div>
          </div>

    </UserContext.Provider>
  );
}
export default Dashboard;
