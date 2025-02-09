let a = 10,
  b = 20;
let t;
t = a;
a = b;
b = t;
console.log(a, " ", b);
//N.B without third variable a=a+b;b=a-b;a=a-b
