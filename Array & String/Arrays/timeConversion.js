function timeConversion(s) {
  // Extract the hour, minute, second, and period
  let hour = s.slice(0, 2);
  let minute = s.slice(3, 5);
  let second = s.slice(6, 8);
  let period = s.slice(8, 10);

  let hourInt = Number(hour);

  if (period === "AM") {
    if (hourInt === 12) {
      hour = "00";
    }
  } else if (period === "PM") {
    if (hourInt !== 12) {
      hourInt += 12;
      hour = (hourInt < 10 ? "0" : "") + hourInt; // Format as two digits
    }
  }

  // Return the final 24-hour format time
  return hour + ":" + minute + ":" + second;
}
