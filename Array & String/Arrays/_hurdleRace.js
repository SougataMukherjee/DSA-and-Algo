//Given an array of hurdle heights and a character's maximum jump height, determine the minimum number of magic potion doses required to jump over all hurdles. Each dose increases the jump height by 1 unit. If the character can already clear all hurdles, return 0.
//k (maxJump)= 4   height (hurdle)= [1, 6, 3, 5, 2]
//O/P 2

function hurdleRace(k, height) {
  let max = height[0];
  for (let i = 1; i < height.length; i++) {
    if (max < height[i]) {
      max = height[i];
    }
  }
  if (max > k) {
    return max - k;
  }
  return 0;
}
