let a = 0,
  b = 1,
  c;
console.log(a + "\n" + b);
for (let i = 1; i <= 10; i++) {
  c = a + b;
  console.log(c);
  a = b;
  b = c;
}
