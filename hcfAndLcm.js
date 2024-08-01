let n1 = 6,
  n2 = 8,
  hcf;
for (let i = 1; i <= Math.min(n1, n2); i++) {
  if (n1 % i == 0 && n2 % i == 0) {
    hcf = i;
  }
}
let lcm = (n1 * n2) / hcf;
console.log(`HCF: ${hcf}, LCM: ${lcm}`);
