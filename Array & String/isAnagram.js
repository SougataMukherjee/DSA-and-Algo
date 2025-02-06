let str1 = "listen";
let str2 = "silent";
function areAnagrams(s1, s2) {
  return s1.split("").sort().join("") === s2.split("").sort().join("");
}

if (areAnagrams(str1, str2)) {
  console.log("yes");
} else {
  console.log("no");
}
