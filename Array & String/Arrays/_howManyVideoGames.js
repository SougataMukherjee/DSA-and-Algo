function howManyGames(p, d, m, s) {
  let nGames = 0;

  while (s >= p) {
    s -= p;
    nGames++;
    p = Math.max(p - d, m);
  }

  return nGames;
}
