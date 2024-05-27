import { useEffect, useState } from "react";
import calorie from "../../assets/calories-icon.png";
import fat from "../../assets/fat-icon.png";
import protein from "../../assets/protein-icon.png";
import carbs from "../../assets/carbs-icon.png";

import "./style.scss";

function Value({ arr }) {
  const [description, setDescription] = useState({});

  const [type, number] = arr;

  useEffect(() => {
    if (type === "calorieCount") {
      setDescription((des) => {
        return { ...des, typeInfo: "Calories", icon: calorie, unit: "kCal" };
      });
    } else if (type === "proteinCount") {
      setDescription((des) => {
        return { ...des, typeInfo: "Proteine", icon: protein, unit: "g" };
      });
    } else if (type === "carbohydrateCount") {
      setDescription((des) => {
        return { ...des, typeInfo: "Glucides", icon: carbs, unit: "g" };
      });
    } else if (type === "lipidCount") {
      setDescription((des) => {
        return { ...des, typeInfo: "Lipides", icon: fat, unit: "g" };
      });
    }
  }, []);

  return (
    <div className="value">
      {/* rajouter alt attribute */}
      <div className="value-icon">
        <img src={description.icon} alt={description.typeInfo} />
      </div>
      <div className="value-details">
        <span className="number">
          {number}
          {description.unit}
        </span>
        <br />
        <span className="type">{description.typeInfo}</span>
      </div>
    </div>
  );
}
export default Value;
