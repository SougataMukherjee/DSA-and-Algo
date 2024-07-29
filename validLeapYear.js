let year = 2024;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log("leap year");
} else {
  console.log("not leap year");
}
