function isMaxHeap(n, arr) {
  for (let i = 0; i <= Math.floor(n / 2); i++) {
    // Iterate through the array up to half of its length
    if (arr[i] < arr[2 * i + 1] || arr[i] < arr[2 * i + 2]) {
      // If parent node is smaller than any of the child nodes
      return false; // Return false, as it does not represent a max heap
    }
  }
  return true;
}
