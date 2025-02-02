function nextGreaterElement(nums) {
  const n = nums.length;
  const res = new Array(n).fill(-1); // Initialize the result array with -1
  const stack = []; // Stack to keep track of potential next greater elements

  for (let i = n - 1; i >= 0; i--) {
    // Remove elements from the stack that are smaller or equal to the current element
    while (stack.length && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }

    // If the stack is not empty, the top element is the next greater element
    if (stack.length) {
      res[i] = stack[stack.length - 1];
    }

    // Push the current element onto the stack
    stack.push(nums[i]);
  }

  return res;
}
