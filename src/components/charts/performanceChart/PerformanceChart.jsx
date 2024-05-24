import { useContext } from "react";
import UserContext from "../../../context/UserContext";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";

import "./style.scss";

function PerformanceChart() {
  const user = useContext(UserContext);
  const performance = user.performanceInfos;

  const convertKind = (value) => {
    const newKindsList = Object.entries(performance.kind);
    const kindArr = newKindsList.find((arr) => Number(arr[0]) === value);
    if (!kindArr) throw new Error("Type n'est pas trouvé!");
    if (kindArr[1] === "cardio") {
      return "cardio";
    } else if (kindArr[1] === "energy") {
      return "énergie";
    } else if (kindArr[1] === "endurance") {
      return "endurance";
    } else if (kindArr[1] === "strength") {
      return "force";
    } else if (kindArr[1] === "speed") {
      return "vitesse";
    } else if (kindArr[1] === "intensity") {
      return "intersité";
    } else {
      throw new Error("type n'est pas trouvé");
    }
  };

  const data = performance.data.map((per) => {
    return {
      ...per,
      kind: convertKind(per.kind),
    };
  });

  // console.log(data);

  function CustomizedTick(props) {
    // console.log(props);
    const { payload, x, y, textAnchor } = props;
    return (
      <text x={x} y={y} textAnchor={textAnchor} className="performance-label">
        {payload.value}
      </text>
    );
  }

  return (
    <RadarChart
      className="performance-chart"
      outerRadius={85}
      width={250}
      height={250}
      startAngle={90}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" tick={<CustomizedTick />} />
      <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
    </RadarChart>
  );
}

export default PerformanceChart;
