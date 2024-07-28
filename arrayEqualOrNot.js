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
