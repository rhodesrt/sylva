export let createSylvaArray = () => {
  let array = [];
  for (let i = 0; i < 100; i++) {
    array[i] = {
      conditions: {
        red: 0,
        green: 0,
        blue: 0,
      },
    };
  }
  return array;
};
