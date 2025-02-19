function towerOfHanoi(n, from, to, aux) {
  let moves = 0;
  if (n >= 1) {
    // recursive call to move top disk from "from" to aux in current call
    moves += this.towerOfHanoi(n - 1, from, aux, to);

    // increment moves
    moves++;

    // recursive call to move top disk from aux to "to" in current call
    moves += this.towerOfHanoi(n - 1, aux, to, from);
  }
  return moves;
}
