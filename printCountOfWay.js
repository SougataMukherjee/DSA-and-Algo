function printCountOfWay(dist) {
  // Base cases
  if (dist < 0) return 0;
  if (dist == 0) return 1;

  // Recur for all previous 3 and add the results
  return (
    printCountOfWay(dist - 1) +
    printCountOfWay(dist - 2) +
    printCountOfWay(dist - 3)
  );
}
