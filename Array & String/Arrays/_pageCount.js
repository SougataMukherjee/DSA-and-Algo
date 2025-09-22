//A student wants to reach page p in a book with n total pages by turning pages either from the front or the back. Each page turn flips two pages at a time. Find the minimum number of pages the student needs to turn.considering each turn flips two pages.
//n = 6, p = 5  O/P 1
//explain: From the front: (1 → 2), (3 → 4), (5 → 6) → 2 turns From the back: (6 → 5) → 1 turn (minimum)
function pageCount(n, p) {
  let fromFront = Math.floor(p / 2);
  let fromBack = Math.floor(n / 2) - Math.floor(p / 2);
  return Math.min(fromFront, fromBack);
}
