let str = "?*11=??";

// function solveExpression(exp) {
//   let result = 0;
//   for (let i = 0; i < 10; i++) {
//     let newExpression = exp.replaceAll("?", i);
//     newExpression = newExpression.replaceAll("=", "===");
//     if (eval(newExpression)) {
//       result = i;
//     }
//   }
//   return result;
// }

// console.log(solveExpression(str));
//funtion replace All ==>>>>>> const repl = (searchString, replaceString, str) => {
//return str.split(searchString).join(replaceString);
//};
function solveExpression2(exp) {
  let result = 0;
  const repl = (searchString, replaceString, str) => {
    return str.split(searchString).join(replaceString);
  };
  for (let i = 0; i < 10; i++) {
    let newExpression = repl("?", i, exp);
    newExpression = repl("--", "+", newExpression);
    console.log("BBBBB", newExpression);
    newExpression = repl("=", "==", newExpression);
    console.log("--->>>", eval(newExpression));
    if (eval(newExpression)) {
      result = i;
      if (result === 1) {
        continue;
      }
      break;
    } else result = -1;
  }
  return result;
}
console.log(solveExpression2(str));

function solveExpression3(exp) {
  exp = exp.replace("=", "==").replace("--", "+");
  for (let i = 0; i <= 9; i++) {
    let bool = exp.indexOf(i) === -1;
    console.log(bool);
    let str = exp.replace(/\?/g, i);
    console.log("===>>>", str);
    console.log("AAAAA", /^00/.test(str) || /^00/.test(str.split("==")[1]));
    if (/^00/.test(str) || /^00/.test(str.split("==")[1])) {
      continue;
    }
    try {
      if (eval(str) && bool) {
        return i;
      }
    } catch (e) {}
  }
  return -1;
}

console.log(solveExpression3(str));
