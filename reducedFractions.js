const gcd = (n, d) => {
  return d === 0 ? n : gcd(d, n % d);
};

const properFractions = (n) => {
  if (n === 0 || n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  let count = 0;
  let numbers = 0;
  while (numbers < n) {
    if (gcd(numbers, n) === 1) {
      count++;
    }
    numbers++;
  }
  return count;
};
console.log(properFractions(21));
//LESS PERFORMANCE
// const properFractions = (n) => {
//   if (n === 1) return 0;
//   let count = n;
//   const isPrime = (num) => {
//     if (num === 1) return false;
//     for (let i = 2; i * i <= num; i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   };

//   for (let i = 2; i <= n; i++) {
//     //console.log("FORRR", n, count, i, n % i);
//     if (isPrime(i) && n % i === 0) {
//       // console.log("IFFF", count, i, count * (1 - 1 / i));
//       count = Math.round(count * (1 - 1 / i));
//       //console.log("RESULT", count);
//     }
//   }
//   return count;
// };

// console.log(properFractions(21));
