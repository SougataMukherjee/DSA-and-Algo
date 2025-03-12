//water and jug problem Jug 1(x) = 3L, Jug 2(y) = 5L, target = Measure exactly 4 liters using the two jugs Output: true
function canMeasureWater(x, y, target) {
  //Ensures that the total capacity of both jugs is at least target liter
  //and if the target is a multiple of the GCD of the two jug
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
