let s = "abcabcb";
let str = s.split("");
let tempStr = "";

for (let i = 0; i < str.length; i++) {
  let substr = "";
  for (let j = i; j < str.length; j++) {
    if (substr.includes(str[j])) {
      break;
    } else {
      substr += str[j];
    }
  }
  if (tempStr.length < substr.length) {
    tempStr = substr;
  }
}
console.log(tempStr);
