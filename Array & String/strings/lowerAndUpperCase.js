let str = "AbbaBaa12";
let sp = str.split("");
let chars = [],
  cap = 0,
  sml = 0,
  dig = 0;
for (let i = 0; i < str.length; i++) {
  let ch = str.charAt(i);
  if (ch >= "A" && ch <= "Z") cap++;
  else if (ch >= "a" && ch <= "z") sml++;
  else dig++;
}
console.log(cap + " " + sml + " " + dig);
