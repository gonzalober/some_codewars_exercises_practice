const getDivisorsCnt = (n) => {
  let count = 0;
  let i = n;
  while (i > 0) {
    if (n % i === 0) {
      count++;
    }
    i--;
  }
  return count;
};

console.log(getDivisorsCnt(11));
