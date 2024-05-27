import { useState, useContext } from "react";
import UserContext from "../../../context/UserContext";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from "recharts";

import "./style.scss";

function AverageChart() {
  const {user} = useContext(UserContext);
  const averageSession = user.averageSession.sessions;
  const [zoneData, setzoneData] = useState({})


  const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
  const convertDay = (index) => daysOfWeek[index - 1];
  const data = averageSession.map((obj) => ({
    ...obj,
    day: convertDay(obj.day),
  }));
  // console.log("new data: ", data);

  function CustomizedTick(props) {
    const { x, y, payload } = props;
    return (
      <text x={x} y={y} dy={10} fill={"white"} fontSize={15}>
        {payload.value}
      </text>
    );
  }

  function CustomizedLabel() {
    return (
      <foreignObject className="label-wrapper" width={150} height={95}>
        <div className="average-chart-label">Durée moyenne des sessions</div>
      </foreignObject>
    );
  }

  function CustomizedTooltip(props) {
    const { active, payload } = props;
    console.log("props:", props)
    if (active) {
      const sessionLength = payload[0].payload.sessionLength;
      return <div className="tooltip-content">{`${sessionLength} min`}</div>;
    }
  }

  function CustomizedActiveDot(props) {
    return (
      <svg>
        <circle
          cx={props.cx}
          cy={props.cy}
          r={2}
          stroke="white"
          strokeWidth={3}
          fill="red"
        />

        <circle
          cx={props.cx}
          cy={props.cy}
          r={7}
          opacity={0.3}
          stroke="white"
          strokeWidth={1}
          fill="white"
        />
      </svg>
    );
  }
  return (
    <LineChart
      className="average-chart"
      width={250}
      height={250}
      data={data}
      style={{
        backgroundColor: "#FF0101",
      }}
      onMouseMove={(data) => {
        
        if(!data.isTooltipActive) {return}; 
        console.log("data:", data);
        setzoneData(data.activeCoordinate)
      }}
    >
      <XAxis
        dataKey="day"
        padding={{ left: 10, right: 10 }}
        axisLine={false}
        allowDataOverflow
        tickLine={false}
        tick={<CustomizedTick />}
      >
        <Label content={<CustomizedLabel />} />
      </XAxis>
      <YAxis dataKey={"sessionLength"} padding={{ top: 100 }} hide={"true"} />

      <Line
        type="natural"
        dataKey="sessionLength"
        stroke="white"
        strokeWidth={2}
        dot={false}
        activeDot={<CustomizedActiveDot />}
        isAnimationActive="true"
      />
      <Tooltip
        content={<CustomizedTooltip />}
        wrapperStyle={{ outline: "none", padding: 0, margin: 0 }}
      />
    </LineChart>
  );
}

export default AverageChart;
