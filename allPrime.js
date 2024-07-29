let count = 0,
  n = 10,
  nth = 1;
for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0 && i !== j) {
      isPrime = false;
      count++;
      if (count === nth) {
        break;
      }
    }
  }
  if (isPrime) {
    console.log(i + "prime number");
    console.log(count, "th prime ", isPrime);
  }
}
