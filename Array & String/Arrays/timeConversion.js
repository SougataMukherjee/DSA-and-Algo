//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
//I.P 07:05:45PM O.P 19:05:45
function timeConversion(s) {
  let hour = Number(s.slice(0,2));
  let minute = s.slice(3,5);
  let second = s.slice(6,8);
  let period = s.slice(8,10);

  if(period === "AM" && hour === 12) hour = 0;
  if(period === "PM" && hour !== 12) hour += 12;

  // Format hour to always have 2 digits
  hour = hour < 10 ? "0" + hour : "" + hour;

  return hour + ":" + minute + ":" + second;
}

