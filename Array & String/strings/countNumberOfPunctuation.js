let count = 0;
let s = "Hi ! sam. what's up?";
for (let i = 0; i < s.length; i++) {
  if (
    s.charAt(i) === "!" ||
    s.charAt(i) === "," ||
    s.charAt(i) === ";" ||
    s.charAt(i) === "." ||
    s.charAt(i) === "?" ||
    s.charAt(i) === "-" ||
    s.charAt(i) === "'" ||
    s.charAt(i) === '"' ||
    s.charAt(i) === ":"
  ) {
    count++;
  }
}
console.log(count);
//NB: for find total number of character if(s.charAt(i)!=='\0')
