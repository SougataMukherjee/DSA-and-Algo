let count = 0;
let s = "Hi ! sam. what's up?";
let inWord = false;

for (let i = 0; i < s.length; i++) {
  if (s.charAt(i) !== " " && !inWord) {
    count++;
    inWord = true;
  } else if (s.charAt(i) === " ") {
    inWord = false;
  }
}

console.log(count);
