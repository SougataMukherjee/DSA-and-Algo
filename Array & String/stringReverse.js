let str = "a,b$c",
  rev = "";
const isLetter = (str) => /^[A-Za-z]$/.test(str);
if (str === "") rev = "";
if (isLetter) {
  const stack = [...str].filter(isLetter);
  rev = [...str].map((char) => (isLetter(char) ? stack.pop() : char)).join("");
} else {
  rev = str.split("").reverse().join("");
}
console.log(rev);

//method 2

let s = ["h", "e", "l", "l", "o"];
let left = 0;
let right = s.length - 1;

while (left < right) {
  const temp = s[left];
  s[left] = s[right];
  s[right] = temp;
  left++;
  right--;
}

console.log(s);

//method 3
function reverseString(s) {
  let res = [];

  // Traverse on s in backward direction
  // and add each character to the array
  for (let i = s.length - 1; i >= 0; i--) {
    res.push(s[i]);
  }
  return res.join("");
}
