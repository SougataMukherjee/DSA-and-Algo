let str = "leetcode";
for (let i = 0; i < str.length; i++) {
  if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
    console.log(str.indexOf(str[i]));
    break; // break after finding the first unique character
  } else {
    console.log(-1);
    break;
  }
}
