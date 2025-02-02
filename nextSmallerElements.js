function nextSmallerElement(nums) {
  const n = nums.length; // Length of the input array
  const res = new Array(n).fill(-1); // Initialize the result array with -1
  const stack = []; // Stack to store the indices of elements

  for (let i = 0; i < n; i++) {
    // While the stack is not empty and the current number is smaller
    // than the number at the index stored at the top of the stack
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      const topIndex = stack.pop(); // Pop the index from the stack
      res[topIndex] = nums[i]; // Update the result for that index
    }

    // Push the current index onto the stack
    stack.push(i);
  }

  return res;
}
