function twoSum(nums, target) {
  let mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    let partner = target - nums[i];

    if (mp.has(partner)) {
      return [mp.get(partner), i];
    }
    mp.set(nums[i], i);
  }

  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
