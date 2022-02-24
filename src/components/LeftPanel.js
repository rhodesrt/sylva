import "./componentStyles.css";
import { useState, useEffect } from "react";

const LeftPanel = () => {
  const [counts, setCounts] = useState({
    plantCount: 0,
    grazerCount: 0,
    predatorCount: 0,
  });

  function getCounts() {
    let newCounts = {
      plantCount: 0,
      grazerCount: 0,
      predatorCount: 0,
    };
    let grid = Array.from(document.querySelectorAll(".sylva-unit"));
    grid.forEach((unit) => {
      if (unit.style.backgroundColor === "green") {
        newCounts.plantCount++;
      } else if (unit.style.backgroundColor === "blue") {
        newCounts.grazerCount++;
      } else if (unit.style.backgroundColor === "red") {
        newCounts.predatorCount++;
      }
    });
    setCounts(newCounts);
  }

  useEffect(() => {
    setTimeout(() => {
      getCounts();
    }, 1000);
  });

  return (
    <div className="leftPanel-container">
      <p className="plant-count">Plants: {counts.plantCount}</p>
      <p className="grazer-count">Grazers: {counts.grazerCount}</p>
      <p className="predator-count">Predators: {counts.predatorCount}</p>
    </div>
  );
};

export default LeftPanel;
