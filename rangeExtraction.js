let arr = [-6, -3, -2, -1, 0, 1, 3, 4, 5];
//output "-6,-3--1,1,3-5,7-9,11"
function solution(list) {
  let newArr = [];
  list.unshift(list[0]);
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] + 1 - list[i + 1] !== 0) {
      newArr.push(0);
    } else {
      newArr.push(1);
    }
  }
  let result = [];
  let interval = true;
  let startInterval = 0;

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== newArr[i + 1]) {
      // start interval case
      if (newArr[i] === 0) {
        startInterval = i;
        interval = true;
      } else {
        result.push([startInterval + 1, i + 1]);
        // 0(start),1(i),0
        // 0(start),1,1(i),0
        //0(start),1,1,1,1(i),0
        interval = false;
      }
    }
  }

  let counter = 0;
  for (let i = 0; i < result.length; i++) {
    let [start, end] = result[i];
    if (end !== start + 1) {
      list.splice(
        start - counter,
        end - start + 1,
        `${list[start - counter]}-${list[end - counter]}`
      );

      counter += end - start;
    }
  }
  list.shift();

  return list.join(",");
}

console.log(solution(arr));
