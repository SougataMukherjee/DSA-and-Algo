// Alice and Bob each created one problem for coding round. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.
// The rating for Alice's challenge is the triplet a = (a, a, a), and the rating for Bob's challenge is the triplet b = (b, b, b).
// Your task is to compare these triplets.
// For each category, if a[i] > b[i], Alice gets 1 point.
// If b[i] > a[i], Bob gets 1 point.
// If a[i] == b[i], neither Alice nor Bob gets a point.
// Return the total points for Alice and Bob as an array [Alice's points, Bob's points]
// a = [5, 6, 7]
// b = [3, 6, 10]
// output [1, 1]

function compareTripletsAliceAndBob(a, b) {
  if (a.length <= 0 || b.length <= 0) return 0;

  let alice = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice[0]++;
    } else if (b[i] > a[i]) {
      alice[1]++;
    }
  }
  return alice;
}
