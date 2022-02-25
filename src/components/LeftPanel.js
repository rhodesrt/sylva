import "./componentStyles.css";
import { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

const LeftPanel = () => {
  Chart.register(...registerables);
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Plant Count",
        data: [],
        fill: false,
        borderColor: "green",
        tension: 0,
        animation: {
          duration: 1000,
        },
      },
      {
        label: "Grazer Count",
        data: [],
        fill: false,
        borderColor: "brown",
        tension: 0,
        animation: {
          duration: 1000,
        },
      },
      {
        label: "Predator Count",
        data: [],
        fill: false,
        borderColor: "red",
        tension: 0,
        animation: {
          duration: 1000,
        },
      },
    ],
  });

  const plantPoints = useRef([]);
  const grazerPoints = useRef([]);
  const predatorPoints = useRef([]);
  const labelArray = useRef([]);

  function addPoints() {
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

    if (labelArray.current.length > 35) {
      plantPoints.current.push(newCounts.plantCount);
      grazerPoints.current.push(newCounts.grazerCount);
      predatorPoints.current.push(newCounts.predatorCount);

      plantPoints.current = plantPoints.current.slice(1);
      grazerPoints.current = grazerPoints.current.slice(1);
      predatorPoints.current = predatorPoints.current.slice(1);

      labelArray.current = labelArray.current.slice(1);
      labelArray.current.push("");
    } else {
      plantPoints.current.push(newCounts.plantCount);
      grazerPoints.current.push(newCounts.grazerCount);
      predatorPoints.current.push(newCounts.predatorCount);

      labelArray.current.push("");
    }

    setData({
      labels: labelArray.current,
      datasets: [
        {
          label: "Plant Count",
          data: plantPoints.current,
          fill: false,
          borderColor: "green",
          backgroundColor: "green",
          tension: 0,
          animation: {
            duration: 1000,
          },
        },
        {
          label: "Grazer Count",
          data: grazerPoints.current,
          fill: false,
          borderColor: "blue",
          backgroundColor: "blue",
          tension: 0,
          animation: {
            duration: 1000,
          },
        },
        {
          label: "Predator Count",
          data: predatorPoints.current,
          fill: false,
          borderColor: "red",
          backgroundColor: "red",
          tension: 0,
          animation: {
            duration: 1000,
          },
        },
      ],
    });
  }

  useEffect(() => {
    setTimeout(() => {
      addPoints();
    }, 150);
  }, [data]);

  return (
    <div className="leftPanel-container">
      <Line
        data={data}
        options={{
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    </div>
  );
};

export default LeftPanel;
