const a = [1000, 2000, 3000, 4000];
let sum = 0,
  avg = 0;
let min = a[0],
  max = a[0];
for (let i = 0; i < a.length; i++) {
  if (a[i] > max) max = a[i];
  if (a[i] < min) min = a[i];
}
for (let i = 0; i < a.length; i++) {
  if (a[i] !== min && a[i] !== max) {
    sum += a[i];
  }
}
console.log(sum / (a.length - 2));
