const sumR = (x) => {
  //always stamtemnt or condition as
  //it recursively call itself infite times
  return x.length === 0 ? 0 : x[0] + sumR(x.slice(1));
};
console.log(sumR([1, 4, 9]));
