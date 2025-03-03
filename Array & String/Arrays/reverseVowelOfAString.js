let s = ["h", "e", "l", "l", "o"];
let i = 0,
  j = s.length - 1;
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

while (i < j) {
  while (i < j && !vowels.includes(s[i])) {
    i++;
  }
  while (i < j && !vowels.includes(s[j])) {
    j--;
  }

  if (i >= j) break;

  let ch = s[i];
  s[i] = s[j];
  s[j] = ch;

  i++;
  j--;
}

for (let ch of s) {
  console.log(ch);
}
