const chirp = (n) => {
  if (n === 0) return "";
  return n === 1 ? "chirp" : "chirp-" + chirp(n - 1);
};

console.log(chirp(5));
