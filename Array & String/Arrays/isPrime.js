let n = 7;
let isPrime = true;
if (n === 1) {
  console.log("prime starts from 2");
} else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("prime"); //return true
  } else {
    console.log("not a prime");
  }
}
