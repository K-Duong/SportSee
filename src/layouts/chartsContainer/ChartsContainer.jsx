import ActivityChart from "../../components/activitiesChart/ActivitiesChart";
import ScoreChart from "../../components/scoreChart/ScoreChart";

import "./style.scss";

function ChartsContainer () {
  return (
  <div className="charts">
    <ActivityChart/>
    <div className="mini-charts">
      <ScoreChart/>
      <ScoreChart/>
      <ScoreChart/>
    </div>
  </div>
  )
}

export default ChartsContainer;