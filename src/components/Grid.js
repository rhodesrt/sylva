import "./componentStyles.css";
import React, { useEffect, useState, useRef } from "react";
import {
  createSylvaArray,
  initialConditionSetter,
  getSurroundingUnits,
} from "./helpers.js";

const Grid = () => {
  return (
    <div className="grid-container">
      <SylvaWorld />
    </div>
  );
};

export default Grid;

const SylvaWorld = () => {
  let sylvaUnits = createSylvaArray(256);

  return (
    <div className="sylvaWorld-container">
      {sylvaUnits.map((unit, index) => {
        return <SylvaUnit key={index} index={index} />;
      })}
    </div>
  );
};

const SylvaUnit = (props) => {
  const conditions = useRef(initialConditionSetter(15, 0, 0));
  const [backgroundColor, setBackgroundColor] = useState("black");

  function runCycle() {
    // every 0.5 seconds
    setTimeout(() => {
      // increment conditions based on incrementMultiplier
      let surroundingUnits = getSurroundingUnits(props.index);
      surroundingUnits.forEach((color) => {
        if (color === "green") {
          conditions.current.primaryConsumer++;
        } else if (color === "blue") {
          conditions.current.secondaryConsumer++;
        } else if (color === "red") {
          conditions.current.photosynthetic++;
        }
      });
      // check if conditions meet requirements for identity change
      let newIdentity = "";
      if (conditions.current.primaryConsumer >= 9) {
        newIdentity = "primaryConsumer";
      } else if (conditions.current.secondaryConsumer >= 9) {
        newIdentity = "secondaryConsumer";
      } else if (conditions.current.photosynthetic >= 7) {
        newIdentity = "photosynthetic";
      }

      if (newIdentity !== conditions.current.stage) {
        if (newIdentity === "photosynthetic") {
          setBackgroundColor("green");
        } else if (newIdentity === "primaryConsumer") {
          setBackgroundColor("blue");
        } else if (newIdentity === "secondaryConsumer") {
          setBackgroundColor("red");
        }
      }
      // reset conditions
      conditions.current = initialConditionSetter(0, 0, 0);
      conditions.current.stage = newIdentity;
      runCycle();
    }, 2000 + Math.random() * 2000);
  }
  useEffect(() => {
    runCycle();
  }, []);

  return (
    <div
      className="sylva-unit"
      style={{ backgroundColor: backgroundColor }}
    ></div>
  );
};
