//Write a program to find the average of the array elements excluding the smallest and the largest element.
//I/P [1000, 2000, 3000, 4000] o/p 2500
//Note: calculates the average salary excluding the minimum and maximum salary values
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
