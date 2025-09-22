//wap all prime factor of given number
//Input: num = 15 Output: 3 5

let i,
  j,
  num = 15,
  isPrime;
for (i = 2; i <= num; i++) {
  if (num % i === 0) {
    isPrime = 1;
    for (j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = 0;
        break;
      }
    }
    if (isPrime == 1) {
      console.log(i);
    }
  }
}
