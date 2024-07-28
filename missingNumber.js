let arr = [0, 1, 2, 3, 5];
let missArray = [];
let minNum = Math.min(...arr);
let maxNum = Math.max(...arr);
for (let i = minNum; i < maxNum; i++) {
  if (arr.indexOf(i) < 0) {
    missArray.push(i);
  }
}
console.log(missArray);

// method 2
const arr1 = [0, 1, 2, 3, 5];
const n = arr1.length;
const sumOfNaturalNum = (n * (n + 1)) / 2;
let sumOfArrayNum = 0;
for (let i of arr1) {
  sumOfArrayNum += i;
}
console.log(sumOfNaturalNum - sumOfArrayNum); //Sn-Sa=n(n+1)/2-(1+2+..n)