//find HCF/GCD(Highest common factor) and LCM(Least common multiple)
//Input: a = 12, b = 18
//Output: hcf=6, lcm=36
class Solution {
  __gcd(a, b) {
    if (b === 0) return a;
    else return this.__gcd(b, a % b);
  }

  // Function to calculate the gcd of an array of numbers.
  gcd(arr, n) {
    let g = 0; // Initialize the gcd variable as 0.
    for (let it of arr) {
      g = this.__gcd(it, g); // Calculate the gcd of the current element and the gcd so far.
    }
    return g; // Return the final gcd.
  }
}
