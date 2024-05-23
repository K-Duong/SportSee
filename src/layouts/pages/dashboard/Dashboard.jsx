import { useParams } from "react-router-dom";

import Value from "../../../components/valueConsumption/ValueConsumption.jsx";

import "./style.scss";
import UserContext from "../../../store/UserContext.jsx";
import ChartsContainer from "../../chartsContainer/ChartsContainer.jsx";
import { useEffect, useState } from "react";
import { getData } from "../../../api.jsx";

function Dashboard() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null)

  const fetchApi = async () => {
    try
    // const mainData = await getData(`/user/${id}`, "get");
    // const activities = await getData(`/user/${id}/activity`, "get");
    // const performanceInfos = await getData(`/user/${id}/performance`, "get");
    // const averageSession = await getData(
    //   `/user/${id}/average-sessions`,
    //   "get"
    // );
    {const mainData = await getData(`http://localhost:3000/user/${id}`);
    const activities = await getData(
      `http://localhost:3000/user/${id}/activity`
    );
    const performanceInfos = await getData(
      `http://localhost:3000/user/${id}/performance`
    );
    const averageSession = await getData(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    setUser((prev) => {
      return {
        ...prev,
        id: id,
        mainData,
        activities,
        performanceInfos,
        averageSession,
      };
    })}catch(err) {
      // console.error(err.response.status);
      setError((prev) => {
        return {
          ...prev,
          status: err.response.status,
          message: "L'identifiant incorrect🙄. Veuillez réessayer !"
        }
      })
    }
  };
  useEffect(() => {
    let ignore = false;
    setUser(null);

    if (!ignore) {
      fetchApi();
    }
    // clean up function
    return () => {
      ignore = true;
    };
  }, []);

  console.log("new user", user);

  return (
    <UserContext.Provider value={user}>
      {error && (<div className="error">
        <h1 className="error-status">
          <span>{error.status}</span> {" "}
        </h1>
        <h2 className="error-message"><span>{error.message}</span></h2>
      </div>)}
      {user && (
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
      )}
    </UserContext.Provider>
  );
}
export default Dashboard;
