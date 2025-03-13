//Given two triplets a and b representing scores in three categories,
// return an array [Alice's points, Bob's points], where Alice earns 1 point if a[i] > b[i],
// Bob earns 1 point if b[i] > a[i], and no points are awarded if a[i] == b[i].
// a = [5, 6, 7]
// b = [3, 6, 10]
// output [1, 1]

function compareTripletsAliceAndBob(a, b) {
  if (a.length <= 0 || b.length <= 0) return 0;

  let res = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      res[0]++;
    } else if (b[i] > a[i]) {
      res[1]++;
    }
  }
  return res;
}
