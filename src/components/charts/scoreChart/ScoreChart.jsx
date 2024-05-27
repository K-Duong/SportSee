import { useContext } from "react";
import UserContext from "../../../context/UserContext";

import "./style.scss";
import { PieChart, ResponsiveContainer, Pie, Cell, Label } from "recharts";


function ScoreChart() {
  const {user} = useContext(UserContext);
  const score = () => {
    if(user.mainData.todayScore) {
      return user.mainData.todayScore
    } else {
      return user.mainData.score
    }
  };

  const data = [
    { name: "total", value: 1 },
    { name: "score", value: score() },
  ];

  function ChartLabel() {
    return (
      <foreignObject width={95} height={95}   
      className="score-chart-title">
        <span className="title">Score</span>
      </foreignObject>
    );
  }
  function CustomizedLabel(props) {
    const value = data[1].value * 100;
    return (
      <foreignObject
        width={95}
        height={95}
        className="label-wrapper"
        x={props.viewBox.cx - 47}
        y={props.viewBox.cy - 27}
      >
        <div className="score-label">
          <span className="score-value">{`${value}%`}</span>
          <span className="score-text">de votre objectif</span>
        </div>
      </foreignObject>
    );
  }

  return (
    <PieChart width={250} height={250} 
    className="score-chart"
      >
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        dataKey="value"
        nameKey="score"
        innerRadius={80}
        outerRadius={100}
        startAngle={-180}
        cornerRadius={100}
      >
        {data.map((entry, index) => {
          if (index === 0) return <Cell className="cell-empty" key={`cell-${index}`} />;
          return <Cell className="cell-filled" key={`cell-${index}`} />;
        })}
        <Label content={<ChartLabel />} />
      </Pie>
      <Pie
        data={data}
        dataKey="value"
        innerRadius={0}
        outerRadius={80}
        isAnimationActive={false}
      >
        {data.map((entry,index) => {
          return <Cell className="inner-circle" key={`cell-${index}`} />
        })} 
        <Label content={<CustomizedLabel />} />
        </Pie>
    </PieChart>
  );
}

export default ScoreChart;
