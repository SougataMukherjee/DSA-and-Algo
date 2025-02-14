let arr1 = [1, 2, 3],
  arr2 = [1, 2, 3];
if (arr1.length !== arr2.length) {
  console.log(false);
}
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === arr2[i]) {
    console.log(true);
  } else {
    console.log(false);
  }
}

//solution 2
function checkEqual(a, b) {
  if (a.length !== b.length) return false;
  a.sort();
  b.sort();
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  // If all elements were same.
  return true;
}
