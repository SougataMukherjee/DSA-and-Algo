//Q10 find a triplet that sum to a given value in an array or 3 sum or sum od zeros
//input: arr=[-1,0,1,2,-1,-4],target=0

let arr = [-1, 0, 1, 2, -1, -4],
  target = 0;
let uniqueTriplets = 0;

for (let a of arr) {
  //for (let a = 0; a < arr.length; a++)
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 2; j < arr.length - 2; j++) {
      if (arr[a] + arr[i] + arr[j] === target) {
        console.log([arr[a], arr[i], arr[j]]);
      }
      if (arr[a] !== arr[i] && arr[i] !== arr[j] && arr[a] !== arr[j]) {
        uniqueTriplets++;
      }
    }
  }
}
console.log(uniqueTriplets);

//solution 2

function findTriplets(arr) {
  let target = 0;

  for (let a = 0; a < arr.length - 2; a++) {
    for (let i = a + 1; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[a] + arr[i] + arr[j] === target) {
          return true;
        }
      }
    }
  }

  return false;
}
