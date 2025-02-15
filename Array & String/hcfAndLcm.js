let n1 = 6,
  n2 = 8,
  hcf;
for (let i = 1; i <= Math.min(n1, n2); i++) {
  if (n1 % i == 0 && n2 % i == 0) {
    hcf = i;
  }
}
let lcm = (n1 * n2) / hcf;
console.log(`HCF: ${hcf}, LCM: ${lcm}`); //return [lcm,hcf]

//Note: GCD (Greatest Common Divisor) and HCF (Highest Common Factor) are the same

function gcd(a, b) {
  if (b == 0) {
    return a;
  }

  return this.gcd(b, a % b);
}
