let a = 0,
  b = 1,
  c;
console.log(a + "\n" + b);
for (let i = 1; i <= 10; i++) {
  c = a + b;
  console.log(c);
  a = b;
  b = c;
}

//using dynamic programming
//logic:f(n)=f(n-1)+f(n-2) here optimize repetative function(fib1) call
//        fib(3)
//          |
//      fib2  fib1
//       |
//   fib1 fib0

function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fib(n - 1) + fib(n - 2);
  return memo[n];
}
console.log(fib(3));

//solution 3

function findFibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return findFibonacci(n - 2) + findFibonacci(n - 1);
  }
}
function fibonacciNumbers(N) {
  let ans = [];
  for (let i = 0; i < N; i++) {
    ans.push(findFibonacci(i));
  }
  return ans;
}
