//You want to buy video games during a sale where the first game costs p dollars. Each subsequent game is d dollars cheaper until the price reaches m dollars, after which all games cost m. Given a budget s, determine how many games you can buy.
//where p = initial game price, d = discount per game, m = minimum possible price, s = total budget
//Example: 20 3 6 80
//O/P 6
function howManyGames(p, d, m, s) {
  let nGames = 0;

  while (s >= p) {
    s -= p;
    nGames++;
    p = Math.max(p - d, m);
  }

  return nGames;
}
