//problem is similar to finding the smallest number

function findFastestRunner(X, Y, Z) {
  let fastest = "Alice";
  let minTime = X;

  if (Y < minTime) {
    fastest = "Bob";
    minTime = Y;
  }
  if (Z < minTime) {
    fastest = "Charlie";
  }

  return fastest;
}
