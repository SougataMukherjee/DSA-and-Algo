function addOne(arr) {
  let carry = 1; // Start with 1 to add
  for (let i = arr.length - 1; i >= 0; i--) {
    let sum = arr[i] + carry;
    arr[i] = sum % 10; // Append new digit at the front
    carry = Math.floor(sum / 10); //update carry
  }

  if (carry > 0) {
    arr.unshift(carry);
  }
  return arr;
}
console.log(addOne([9, 9, 9])); //[ 1, 0, 0, 0 ]
