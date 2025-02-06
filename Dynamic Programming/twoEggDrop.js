//Explanation: We can drop the first egg from floor 1 and the second egg from floor 2.
//If the first egg breaks, we know that f = 0.
//If the second egg breaks but the first egg didn't, we know that f = 1.
//Otherwise, if both eggs survive, we know that f = 2.
function twoEggDrop(n) {
  let floors = n;
  let eggs = 2;
  let dp = new Array(eggs + 1).fill(0);
  let moves = 0;

  while (dp[eggs] < floors) {
    moves++;
    for (let i = eggs; i > 0; i--) {
      dp[i] += dp[i - 1] + 1;
    }
  }

  return moves;
}
