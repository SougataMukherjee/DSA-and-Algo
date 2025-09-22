//Two kangaroos start at positions x1 and x2 on a number line and jump distances v1 and v2, respectively. Determine if they will land on the same position at the same time.
//x1 = 2, v1 = 3, x2 = 4, v2 = 2
//O.P "YES"
function kangaroo(x1, v1, x2, v2) {
  if (v1 < v2) return "NO";

  if ((x2 - x1) % (v1 - v2) == 0) return "YES";
  else return "NO";
}
