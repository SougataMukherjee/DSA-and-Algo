const s1 = "Uppercase to Lowercase";
let res = "";
for (let i = 0; i < s1.length; i++) {
  let ch = s1.charAt(i);

  if (ch >= "A" && ch <= "Z") {
    res += String.fromCharCode(ch.charCodeAt(0) + 32);
  } else {
    res += ch;
  }
}
console.log(res);
