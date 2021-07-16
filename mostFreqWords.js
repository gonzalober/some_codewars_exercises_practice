let str = " ' //wont won't won't ";

const topThreeWords = (text) => {
  let text1 = text.toLowerCase().split(/[ , . //""]+/);
  console.log("first->", text1);
  let freqWord = {};
  text1.forEach((w) => {
    if (!freqWord[w]) {
      freqWord[w] = 0;
    }
    freqWord[w] += 1;
  });
  let newArr = [];
  for (let word in freqWord) {
    newArr.push([word, freqWord[word]]);
  }

  newArr.sort((a, b) => b[1] - a[1]);
  let a = newArr.slice(0, 3);
  console.log("second->", a);
  let b = a.map((x) => x[0]);
  console.log(b);
  let i = b.length;
  while (i--) {
    if (b[i] === "'" || b[i] === "") {
      b.splice(i, 1);
    }
  }
  console.log("RESULT");
  return b;
};

console.log(topThreeWords(str));
