const loopArr = (arr, direction, steps) => {
  if (steps > arr.length) {
    throw new Error("steps should be less or equal to arrary length");
  }
  if (direction === "right") {
    let newArr = arr.slice(0, arr.length - steps);
    let secondArr = arr.slice(arr.length - steps);
    let finalArr = secondArr.concat(newArr);
    return finalArr;
  } else if (direction === "left") {
    let newArr = arr.slice(0, steps);
    let secondArr = arr.slice(steps, arr.length);
    let finalArr = secondArr.concat(newArr);
    return finalArr;
  } else {
    throw new Error("direction should be Left or right");
  }
};

module.exports = loopArr;
