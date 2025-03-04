function pokerNim(k, c) {
  let a = 0;
  for (let i = 0; i < c.length; i++) {
    a ^= c[i];
  }
  return a ? "First" : "Second";
}
