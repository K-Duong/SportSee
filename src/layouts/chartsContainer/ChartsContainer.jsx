import ActivityChart from "../../components/charts/activitiesChart/ActivitiesChart";
import AverageChart from "../../components/charts/averageSessionChart/AverageChart";
import PerformanceChart from "../../components/charts/performanceChart/PerformanceChart";
import ScoreChart from "../../components/charts/scoreChart/ScoreChart";

import "./style.scss";

function ChartsContainer () {
  return (
  <div className="charts">
    <ActivityChart/>
    <div className="mini-charts">
      <AverageChart/>
      <PerformanceChart/>
      <ScoreChart/>
    </div>
  </div>
  )
}

export default ChartsContainer;