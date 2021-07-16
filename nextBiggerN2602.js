let example = 22908287461;
function nextBigger(n) {
  let num = (n + "").split("");
  let numbers = [];
  //convets each element from Str to number
  for (let i = 0; i < num.length; i++) {
    numbers.push(+num[i]);
  }
  // find the closest number which follows by one bigger number
  let pivotNumb = -1;
  // reverse order to find the smallest pivot number
  for (let i = numbers.length - 1; i > 0; i--) {
    if (numbers[i] > numbers[i - 1]) {
      pivotNumb = i - 1;
      break;
    }
  }
  if (pivotNumb == -1) return pivotNumb;

  //take all the numbers on the right side from the pivotNum
  // and num change to be the only the side of the array
  let right = num.splice(pivotNumb);
  let pivotValue = right.splice(0, 1)[0];
  let digit = null;
  let digitIndex = null;
  for (let i = 0; i < right.length; i++) {
    if (right[i] > pivotValue) {
      if (digit === null || right[i] < digit) {
        digit = right[i];
        digitIndex = i;
      }
    }
  }

  if (digitIndex === null) return -1;

  right.splice(digitIndex, 1, pivotValue);
  console.log(right);
  right.sort();
  console.log(right);

  let result = +num.concat([digit]).concat(right).join("");
  if (result < n) return -1;

  return result;
}

console.log(nextBigger(example));
