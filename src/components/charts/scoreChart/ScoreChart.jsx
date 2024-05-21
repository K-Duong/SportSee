import { useContext } from "react";
import UserContext from "../../../store/UserContext";

import "./style.scss";
import { PieChart, ResponsiveContainer, Pie, Cell, Label } from "recharts";

// TODO: bg color white for inner circle

function ScoreChart() {
  const user = useContext(UserContext);
  const score = user.mainData.score;
  // console.log(score);

  const data = [
    { name: "Total", value: 1 },
    { name: "Score", value: score },
  ];

  function ChartName(props) {
    return (
      <foreignObject width={95} height={95}  x={props.viewBox.cx - 85}
      y={props.viewBox.cy - 105} className="score-chart-title">
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
    // <ResponsiveContainer >
    <PieChart width={250} height={250} 
      style={{ backgroundColor: "#FBFBFB" }}
      
      >
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        dataKey="value"
        nameKey="score"
        innerRadius={65}
        outerRadius={80}
        startAngle={-270}
      >
        {data.map((entry, index) => {
          if (index === 0) return <Cell key={`cell-${index}`} fill="#f3f6f9" />;
          return <Cell key={`cell-${index}`} fill="#E60000" />;
        })}
        <Label content={<CustomizedLabel />} />
        <Label content={<ChartName />} />
      </Pie>
    </PieChart>
    // </ResponsiveContainer>
  );
}

export default ScoreChart;
