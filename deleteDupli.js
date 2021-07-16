let array = [1, 2, 3, 2, 1, 2];
//output = [1,2,1,2]

let deleteDuplicates = (arr) => {
  if (arr === null) throw new Error("input is null");
  let next = 0;
  let current = 0;
  while (arr.length > next) {
    if (arr[next] === arr[current]) {
      next += 1;
    } else if (arr[next] !== arr[current]) {
      current += 1;
      arr[current] = arr[next];
    }
  }
  current += 1;
  if (next > current) {
    arr[current] = arr[next];
    arr.splice(-(next - current));
  }
  return arr;
};
console.log(deleteDuplicates(array));
