let s = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    //if(i===j||i+j===5-1) or if((i+j)%2===0)
    if (i === 0 || i === 4 || j === 0 || j === 4) {
      s += "*";
    } else {
      s += "";
    }
  }
  s += "\n";
}
console.log(s);
