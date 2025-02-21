function sort012(arr) {
  let c0 = 0,
    c1 = 0,
    c2 = 0;

  // Count 0s, 1s, and 2s
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) c0 += 1;
    else if (arr[i] === 1) c1 += 1;
    else c2 += 1;
  }

  let idx = 0;
  // Place all the 0s
  for (let i = 0; i < c0; i++) arr[idx++] = 0;

  // Place all the 1s
  for (let i = 0; i < c1; i++) arr[idx++] = 1;

  // Place all the 2s
  for (let i = 0; i < c2; i++) arr[idx++] = 2;
}

let arr = [0, 1, 2, 0, 1, 2];
sort012(arr);
