let a = 10,
  b = 20;
// a=a+b;
// b=a-b;
// a=a-b;

// [a,b]=[b,a]

let t = a;
a = b;
b = t;
console.log(a, b);
