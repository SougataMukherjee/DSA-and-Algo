function mariaBreakingRecords(scores) {
  let minScore = scores[0];
  let maxScore = scores[0];
  let minCount = 0;
  let maxCount = 0;

  for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    if (score > maxScore) {
      maxScore = score;
      maxCount++;
    }
    if (score < minScore) {
      minScore = score;
      minCount++;
    }
  }

  return [maxCount, minCount];
}
