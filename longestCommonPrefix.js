let arr = ["club", "clao", "clove"];
let ans = "";

if (arr.length === 0) {
  return ans;
}

for (let i = 0; i < arr[0].length; i++) {
  let ch = arr[0][i];
  let match = true;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j].length <= i || ch !== arr[j][i]) {
      match = false;
      break;
    }
  }

  if (!match) break;
  else ans += ch;
}

console.log(ans);
