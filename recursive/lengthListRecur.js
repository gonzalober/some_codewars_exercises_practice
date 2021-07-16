const lenR = (x) => {
  return x.length === 0 ? 0 : lenR(x.slice(0, -1)) + 1;
};
console.log(lenR([1, "a", 6]));
