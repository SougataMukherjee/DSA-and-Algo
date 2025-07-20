function convertToWave(arr) {
  for (let i = 0; i + 1 < arr.length; i += 2)
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // swap(arr[i],arr[i+1])
  return arr;
}
