let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function rotateImage(a) {
  let arrayLength = 3;
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    newArr.push([]);
  }
  for (let i = 0; i < a.length; i++) {
    for (let j = arrayLength - 1; j >= 0; j--) {
      a.reverse();
      newArr[j].push(a[i][j]);
      newArr[j];
    }
  }
  return newArr;
}
//-----------SECOND AND BEST OPTION-----------------------
let b = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function withMap(b) {
  console.log(b[0].map((x, index) => index));
  console.log(b[0].map((x, index) => b.map((row) => row[index])));
  console.log(b[0].map((x, index) => b.map((row) => row[index]).reverse()));
  return b[0].map((index) => b.map((row) => row[index - 1]).reverse());
}
console.log(withMap(b));
