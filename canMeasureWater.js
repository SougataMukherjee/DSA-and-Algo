function canMeasureWater(x, y, target) {
  return x + y >= target && target % gcd(x, y) === 0;
}

function gcd(a, b) {
  while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
