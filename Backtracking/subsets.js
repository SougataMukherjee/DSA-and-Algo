function subsets(nums) {
  const list = [];
  nums.sort((a, b) => a - b); // Sorting the array
  backtrack(list, [], nums, 0);
  return list;
}

function backtrack(list, tempList, nums, start) {
  list.push([...tempList]); // Add a copy of the current tempList to the list
  for (let i = start; i < nums.length; i++) {
    tempList.push(nums[i]);
    backtrack(list, tempList, nums, i + 1);
    tempList.pop(); // Remove the last element from tempList
  }
}
