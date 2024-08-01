let str = "   hello world ";
let tempStr = "";

for (let i = 0; i < str.length; ) {
  if (str[i] === " ") {
    i++;
  } else {
    tempStr += str[i];
    i++;
  }
}

console.log(tempStr);
