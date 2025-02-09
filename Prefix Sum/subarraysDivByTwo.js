//logic:prefixSum[i]+sufficSum[i+1]=totalSum

function subarraysDivByTwo(nums) {
  const n = nums.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }

  let prefixSum = 0;
  for (let i = 0; i < n; i++) {
    prefixSum += nums[i];
    let suffixSum = sum - prefixSum;
    if (suffixSum % 2 === 0) return true;
  }
  return false;
}
console.log(subarraysDivByTwo([1, 6, 2, 3, 1])); //true
