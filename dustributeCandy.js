//Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.
function distributeCandies(candyType) {
  //keep track of unique candy
  const uniqueCandies = new Set(candyType);

  // The maximum candies the person can eat
  const n = candyType.length / 2;

  return Math.min(uniqueCandies.size, n);
}
