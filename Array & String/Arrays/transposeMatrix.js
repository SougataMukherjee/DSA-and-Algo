for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr[i].length; j++) {
    [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
  }
}
console.log(arr);
