function area(x) {
  return function (y) {
    return x * y;
  };
}
console.log(area(4)(5)); //20
let mul = area(4);
mul(5);

function cal(op) {
  return function (y) {
    return function (z) {
      if (op === "mul") return y * z;
      else return y + z;
    };
  };
}
alert(cal("mul")(3)(4)); //24

const f = (x) => x + x; //f(100)
const g = (y) => y * y; //g(10)
console.log(f(g(10))); //200 first 10*10 then 100+100

const omelette = (ing1) => (ing2) => (ing3) => `${ing1},${ing2},${ing3}`;
const myOmelette = omelette("egg")("salt")("onion");
console.log(myOmelette);
