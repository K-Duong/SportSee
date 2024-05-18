import ActivityChart from "../../components/ActivitiesChart/ActivitiesChart";

import "./style.scss";

function ChartsContainer () {
  return (
  <div className="charts">
    <ActivityChart/>
    <div className="mini-charts"></div>
  </div>
  )
}

export default ChartsContainer;