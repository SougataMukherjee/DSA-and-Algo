let str = "hello world",
  rev = "";
let words = str.split("");
for (let i = words.length - 1; i >= 0; i--) {
  if (words[i] === "") {
    continue;
  }
  rev += words[i];
}
console.log(rev);

//for reverse a word
return s.trim().split(/\s+/).reverse().join(" ");
