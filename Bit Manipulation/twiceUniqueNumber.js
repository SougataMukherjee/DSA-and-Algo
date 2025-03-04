function lonelyinteger(a) {
  let result = 0;
  for (let x of a) result ^= x;
  return result;
}
