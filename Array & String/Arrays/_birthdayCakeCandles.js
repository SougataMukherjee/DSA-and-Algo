//Q.You are in charge of the birthday cake for a child’s birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest candles. Count how many candles are tallest.
//I.P candles = [3, 2, 1, 3] O/P: 2
//Note: candles are list of integers representing the heights of birthday candles on a cake find the most tallest candles
function birthdayCakeCandles(candles) {
  let maximum = 0;
  let result = 0;

  for (let candle of candles) {
    if (candle > maximum) {
      maximum = candle;
      result = 1; // Reset count since we found a new max
    } else if (candle === maximum) {
      result++;
    }
  }

  return result;
}
