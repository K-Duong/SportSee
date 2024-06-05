import { useState } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

import { useContext } from "react";
import UserContext from "../../../context/UserContext";

import "./style.scss";

function ActivitiesChart() {
  const { user } = useContext(UserContext);
  const activities = user.activities.sessions;
  const [barGraphData, setBarGraphData] = useState({});

  const getDay = (dayString) => {
    const day = new Date(dayString);
    return day.getDate();
  };

  //convert format day to get day number
  const activitiesData = activities.map((a) => {
    return {
      ...a,
      day: getDay(a.day),
    };
  });

  //customize tooltip
  const CustomTooltip = (props) => {
    const { payload } = props;
    return (
      <div className="custom-tooltip">
        {payload.map((p) =>
          p.dataKey === "kilogram" ? (
            <p key={p.dataKey} className="weight-value">
              {p.value} {"kg"}
            </p>
          ) : (
            <p key={p.dataKey} className="calorie-value">
              {p.value} {"kCal"}
            </p>
          )
        )}
      </div>
    );
  };

  return (
    <ResponsiveContainer className="activities-chart-container" width={"100%" } height={"50%"}>
      <span className="activities-chart-label">Activités moyennes</span>
      <BarChart
        className="activities-barchart"
        data={activitiesData}
        barCategoryGap={26}
        barGap={6}
        onMouseHover={(data) => {
          if (Object.keys(data).length === 0) {
            return;
          }
          setBarGraphData(data.activeCoordinate);
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis 
        dataKey="day" 
        tickLine={false} 
        tickMargin={15}
        />

       <YAxis
          type="number"
          yAxisId="calories"
          dataKey="calories"
          orientation="left"
          tickCount={3}
          domain={[0, "dataMax + 50"]}
          hide
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          type="number"
          yAxisId="kilogram"
          dataKey="kilogram"
          orientation="right"
          tickCount={3}
          domain={["dataMin-5", "auto"]}
        />

        <Tooltip
          content={<CustomTooltip />}
          position={{ x: barGraphData.x, y: 12 }}
          wrapperStyle={{padding: "10px"}}
        
        />
        <Legend
          formatter={(value) => <span className="legend-text">{value}</span>}
          iconType="circle"
          verticalAlign="top"
          iconSize={10}
          width={300}
          height={70}
          wrapperStyle={{ top: 32, right: 10 }}
          margin={{bottom: 25}}
        />
        <Bar
          yAxisId="kilogram"
          name="Poids (kg)"
          dataKey="kilogram"
          maxBarSize={15}
          fill="#282D30"
          radius={[50, 50, 0, 0]}
        />
        <Bar
          yAxisId="calories"
          name="Calories brûlées (kCal)"
          dataKey="calories"
          maxBarSize={15}
          fill="#E60000"
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ActivitiesChart;
