function maxNumberOfBalloons(text) {
  const count = [0, 0, 0, 0, 0];

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "b") {
      count[0]++;
    } else if (text[i] === "a") {
      count[1]++;
    } else if (text[i] === "n") {
      count[4]++;
    } else if (text[i] === "l") {
      count[2] += 0.5; // 'l' contributes half to its count
    } else if (text[i] === "o") {
      count[3] += 0.5; // 'o' contributes half to its count
    }
  }
  return Math.floor(Math.min(...count));
}
