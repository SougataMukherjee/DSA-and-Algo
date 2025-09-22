//Given a grid of size n x 3, find the number of ways to paint each cell using three colors (Red, Yellow, Green) such that no two adjacent cells (vertically or horizontally) share the same color. Return the result modulo 10^9 + 7.
//n = 3  O.P 28

let numOfWays = function (n, x = 0, y = 3, mod = 1e9 + 7) {
  for (let i = 0; i < n; i++) {
    let newX = (3 * x + 2 * y) % mod;
    let newY = (2 * x + 2 * y) % mod;
    x = newX;
    y = newY;
  }

  return (x + y) % mod;
};
