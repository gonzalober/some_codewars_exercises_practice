let s = "qqwwerr";
function firstNotRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    console.log(typeof char);
    console.log(s.indexOf(char));
    console.log("HEREEEEEEE");
    console.log(s.indexOf(char, i + 1));
    if (s.indexOf(char) === i && s.indexOf(char, i + 1) === -1) {
      return char;
    }
  }
  return "_";
}
console.log(firstNotRepeatingCharacter(s));
