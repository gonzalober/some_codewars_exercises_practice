const average = (array) => {
  if (array.length === 1) return array[0];
  else {
    let n = array.length;
    return (array[0] + (n - 1) * average(array.slice(1))) / n;
  }
};

console.log(average([4, 4, [1, 3]]));
