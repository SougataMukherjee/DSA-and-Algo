//Note: A professor will cancel the class if fewer than minOnTime students arrive on time
function angryProfessor(minOnTime, arrivalTimes) {
  let count = 0;
  for (let i = 0; i < arrivalTimes.length; i++) {
    if (arrivalTimes[i] <= 0) {
      count += 1;
    }
  }

  return count >= minOnTime ? "NO" : "YES";
}
angryProfessor(4, [-3, -1, 0, 2, 4, -2, 1]); //NO
