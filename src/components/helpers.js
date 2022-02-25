export const createSylvaArray = (size) => {
  let array = [];
  for (let i = 0; i < size; i++) {
    array[i] = {
      color: "black",
    };
  }
  return array;
};

export const initialConditionSetter = (photo, primary, secondary) => {
  return {
    stage: "",
    photosynthetic: photo,
    primaryConsumer: primary,
    secondaryConsumer: secondary,
  };
};

// returns array of surrounding unit identities
export function getSurroundingUnits(index) {
  let sylvaUnits = Array.from(document.querySelectorAll(".sylva-unit"));
  let testFor = [
    -1,
    -2,
    -10,
    -11,
    -12,
    -20,
    -21,
    -22,
    10,
    9,
    8,
    20,
    19,
    18,
    1,
    2,
    -9,
    -8,
    -19,
    -18,
    11,
    12,
    21,
    22,
  ];
  let surroundingUnits = [];
  testFor.forEach((test) => {
    if (sylvaUnits[index + test]) {
      surroundingUnits.push(sylvaUnits[index + test].style.backgroundColor);
    }
  });
  return surroundingUnits;
}
