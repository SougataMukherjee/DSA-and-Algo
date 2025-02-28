let str1 = "testing",
  str2 = "test",
  lcs = "",
  i = 0;
while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
  lcs += str1[i];
  i++;
}
console.log(lcs);
