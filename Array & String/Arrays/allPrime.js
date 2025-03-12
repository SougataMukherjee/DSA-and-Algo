for (let i = 2; i <= 10; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0 && i !== j) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i + "prime number");
  }
}
