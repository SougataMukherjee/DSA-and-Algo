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

//solution 2
function isSubset(a, b) {
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      // Element in a is smaller, move to the next element in a
      i++;
    } else if (a[i] === b[j]) {
      // Element found in both arrays, move to the next element in both arrays
      i++;
      j++;
    } else {
      // Element in b not found in a, not a subset
      return false;
    }
  }

  // If we have traversed all elements in b, it is a subset
  return j === b.length;
}
