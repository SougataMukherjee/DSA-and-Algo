let findDisappearedNumbers = function (nums) {
  let map = {};
  let result = [];
  for (let num of nums) {
    if (!map[num]) map[num] = true;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) result.push(i);
  }

  return result;
};
