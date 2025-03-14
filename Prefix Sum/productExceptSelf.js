function productExceptSelf(nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);

  // Compute left products
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i]; //after left product calculation [1, 1, 2, 6]
  }

  // Compute right products and multiply in-place
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct; //after right product calculation [24, 12, 8, 6]
    rightProduct *= nums[i];
  }

  return result;
}

//solution 2
function productExceptSelf(arr) {
  let n = arr.length;
  let res = new Array(n).fill(1);

  // Compute product of all elements except arr[i]
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        res[i] *= arr[j];
      }
    }
  }

  return res;
}
