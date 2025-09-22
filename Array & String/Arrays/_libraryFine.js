//Calculate the library fine based on return and due dates, where fines apply only for late returns:
//15/day (same month)
//500/month (same year)
//10,000 (next year)

//I.P d1, m1, y1 → actual return date and d2, m2, y2 → expected due date

function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 > y2) return 10000;
  if (y1 === y2 && m1 > m2) return 500 * (m1 - m2); // Returned in the same year but a later month
  if (y1 === y2 && m1 === m2 && d1 > d2) return 15 * (d1 - d2); // Returned in the same month but late
  return 0;
}
