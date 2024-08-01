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
