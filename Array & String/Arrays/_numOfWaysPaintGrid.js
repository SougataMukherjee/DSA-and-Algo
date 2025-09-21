let numOfWays = function (n, x = 0, y = 3, mod = 1e9 + 7) {
  for (let i = 0; i < n; i++) {
    let newX = (3 * x + 2 * y) % mod;
    let newY = (2 * x + 2 * y) % mod;
    x = newX;
    y = newY;
  }

  return (x + y) % mod;
};
