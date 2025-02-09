function corpFlightBookings(bookings, n) {
  let res = new Array(n + 1).fill(0);

  for (let [first, last, seats] of bookings) {
    res[first - 1] += seats; //using difference array
    res[last] -= seats;
  }

  for (let i = 1; i < n; i++) {
    res[i] += res[i - 1];
  }

  res.pop();
  return res;
}
