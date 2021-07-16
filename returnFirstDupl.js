//Given an array a that contains only numbers in the range from 1 to a.length,
//
//find the first duplicate number for which the second occurrence has the minimal index.
//In other words, if there are more than 1 duplicated numbers,
//return the number for which the second occurrence has
//a smaller index than the second occurrence of
//the other number does. If there are no such elements, return -1.
let arr = [2, 1, 3, 5, 3, 2];
let dupFunction = (arr) => {
  let newArr = {};
  for (let i = 0; i < arr.length; i++) {
    if (newArr[arr[i]]) {
      return arr[i];
    } else {
      newArr[arr[i]] = true;
    }
  }
  return -1;
};
console.log(dupFunction(arr));
