let n = 12321,
  r,
  sum = 0,
  rev = 0;
let size = n.length;
let temp = n;
while (n > 0) {
  r = n % 10;
  rev = rev * 10 + r;
  n = Math.floor(n / 10);
}
if (temp === rev) {
  console.log("palindrome");
} else {
  console.log("not");
}

//for string
let str = "madam";
let len = str.length;
let mid = Math.floor(len / 2);
let flag = 1;
for (let i = 0; i < mid; i++) {
  if (str[i] !== str[len - i - 1]) {
    flag = 0;
    break;
  }
}
if (flag === 1) console.log("palindrome");
else console.log("not palindrome");
