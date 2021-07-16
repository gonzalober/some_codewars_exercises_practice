let integer = 70304;
//output "40+2"

const expandedForm = (num) => {
  let arr = num.toString().split("");

  for (let i = 0; i < arr.length; i++) {
    console.log("here", i);
    for (let j = arr.length - i; j > 1; j--) {
      console.log("there-->", i, arr[i]);
      arr[i] += "0";
    }
  }
  console.log(arr);
  let result = arr.map((x) => Number(x));

  return result.filter((x) => x).join(" + ");
};

console.log(expandedForm(integer));
