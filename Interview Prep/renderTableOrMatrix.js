let hold = 1;
for (let i = 1; i < 4; i++) {
  var str = "";
  for (let j = 1; j < 4; j++) {
    str += `${hold} `;
    hold++;
  }
  console.log(str);
}
