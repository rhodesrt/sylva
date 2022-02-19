import "./componentStyles.css";
import React, { useEffect, useState } from "react";
import { createSylvaArray } from "./helpers.js";

const Grid = () => {
  return (
    <div className="grid-container">
      <SylvaWorld />
    </div>
  );
};

export default Grid;

const SylvaWorld = () => {
  // responsive grid dimensions
  const [dimensions, setDimensions] = useState({
    height: null,
    width: null,
  });
  useEffect(() => {
    let gridContainer = document.querySelector(".grid-container");
    let gridWidth = gridContainer.offsetWidth;
    let gridHeight = gridContainer.offsetHeight;

    if (gridWidth <= gridHeight) {
      setDimensions({
        height: 0.8 * gridWidth,
        width: 0.8 * gridWidth,
      });
    } else {
      setDimensions({
        height: 0.8 * gridHeight,
        width: 0.8 * gridHeight,
      });
    }
    window.addEventListener("resize", () => {
      let gridWidth = gridContainer.offsetWidth;
      let gridHeight = gridContainer.offsetHeight;
      if (gridWidth <= gridHeight) {
        setDimensions({
          height: 0.8 * gridWidth,
          width: 0.8 * gridWidth,
        });
      } else {
        setDimensions({
          height: 0.8 * gridHeight,
          width: 0.8 * gridHeight,
        });
      }
    });
  }, []);
  // end responsive grid dimensions

  // Sylva Engine
  const [sylvaUnits, setSylvaUnits] = useState(createSylvaArray());
  // each sylva unit has conditions in its own useRef()
  // useRef() hook allows one to store a mutable object in component
  // it triggers its own sylva cycle every 0.5 seconds
  // condition increments are based on adjacent units
  // sylvaCycle()
  //   updates useRef object based on increment value and identity
  //   if increment causes id change, update grid-wide state
  //   pass updateMe() function to individual unit that records index and updates grid-wide state

  return (
    <div
      className="sylvaWorld-container"
      style={{
        height: `${dimensions.height}px`,
        width: `${dimensions.width}px`,
      }}
    >
      {sylvaUnits.map((unit, index) => {
        return <SylvaUnit index={index} key={index} />;
      })}
    </div>
  );
};

const SylvaUnit = (props) => {
  const [conditions, setConditions] = useState(initialConditionSetter()); //todo
  const [backgroundColor, setBackgroundColor] = useState("black");

  function runCycle() {}

  useEffect(() => {
    setTimeout(() => {
      runCycle();
    }, 500);
  }, [conditions]);

  return (
    <div className="sylva-unit" style={{ backgroundColor: backgroundColor }}>
      {props.index}
    </div>
  );
};
