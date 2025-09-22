//A strange counter starts at t = 1 with an initial value of 3 and decreases by 1 each second until it reaches 1. At that point, it resets to twice the initial value of the previous cycle and continues. Given a time t, find the value displayed by the counter at that moment.
//I.P 4  O.P 6
function strangeCounter(t) {
  let last = 3,
    step = 3;
  while (t > last) {
    step *= 2;
    last += step;
  }
  return last - t + 1;
}
