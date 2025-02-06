let num = 36;
function isPerfectSquare(num) {
  for (let i = 0; i * i <= num; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
}

if (isPerfectSquare(num)) {
  console.log(true);
} else {
  console.log(false);
}
