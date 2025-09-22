//You are given two jugs with capacities x and y litres. You need to determine whether it is possible to measure exactly target litres of water using these two jugs. You can fill a jug completely, empty a jug, or pour water from one jug to the other until either the first jug is empty or the second jug is full.
//Write a function to return true if the target can be measured and false otherwise.
//x = 3, y = 5, target = 4 O/P true

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
