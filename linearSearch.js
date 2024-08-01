let a = [5, 17, 11, 10, 12, 6];
let n = a.length;
let item = 12;
for (let i = 0; i < n; i++) {
  if (a[i] === item) {
    console.log("found at ", i);
  } else {
    console.log("not found");
  }
}
