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
import UserContext from "../../store/UserContext";

import "./style.scss";

function ActivitiesChart() {
  const user = useContext(UserContext);
  const activities = user.activities;

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
  console.log(activitiesData);

  //customize tooltip:
  const CustomTooltip = ({payload}) => {
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
    <ResponsiveContainer width="100%" height="50%">
      <span className="barchart-label">Activités moyennes</span>
      <BarChart
        width="80%"
        height="100%"
        data={activitiesData}
        barCategoryGap={40}
        barGap={8}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis orientation="right" />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          formatter={(value) => <span className="legend-text">{value}</span>}
          iconType="circle"
          verticalAlign="top"
          iconSize={10}
          width={300}
          height={70}
          wrapperStyle={{ right: 10 }}
        />
        <Bar
          name="Poids (kg)"
          dataKey="kilogram"
          maxBarSize={15}
          fill="#282D30"
          radius={[50, 50, 0, 0]}
        />
        <Bar
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
