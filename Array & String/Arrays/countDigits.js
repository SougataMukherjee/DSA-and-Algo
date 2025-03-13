//Note: Given an integer n, count how many of its digits evenly divide n
function evenlyDivides(n) {
  let count = 0,
    temp = n;

  while (temp > 0) {
    let digit = temp % 10;
    if (digit !== 0 && n % digit === 0) {
      count++;
    }
    temp = Math.floor(temp / 10);
  }

  return count;
}
