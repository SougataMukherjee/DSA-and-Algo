//A Discrete Mathematics professor has a class of N students. Frustrated with their lack of discipline, he decides to cancel class if fewer than K students are on time.
//Given the arrival time of each student, determine if the class is canceled.
//Each student arrives at time t[i].
//If t[i] ≤ 0, the student arrived on time.
//If t[i] > 0, the student arrived late.
//Return "YES" if the class is canceled (i.e. fewer than K students are on time) or "NO" if the class is not canceled.
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
