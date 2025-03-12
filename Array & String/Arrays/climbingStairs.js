//Input: n = 4 Output: 5
//Way1: 1 → 1 → 1 → 1 Way2:1 → 1 → 2 Way3:1 → 2 → 1 Way4: 2 → 1 → 1 Way5: 2 → 2

let climbingStairs = (n) => {
  if (n === 1 || n === 0) return 1;
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};
console.log(climbingStairs(2)); //steps[1+1,2]=2 way
console.log(climbingStairs(3)); //steps[1+1+1,1+2,2+1]=3 way

//using dynamic programming
let ClimbingStairs = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 1 || n === 0) return 1;

  memo[n] = ClimbingStairs(n - 1) + ClimbingStairs(n - 2);
  return memo[n];
};
console.log(ClimbingStairs(2)); //2
console.log(ClimbingStairs(3)); //3
