function maxRepeating(k, arr) {
  let n = arr.length;
  let hash = new Array(k).fill(0); // initialize array of size k with 0's
  for (let i = 0; i < n; i++) {
    // iterate through input array
    hash[arr[i]]++; // increment count of the element in hash array
  }

  let max = hash[0]; // initialize max count
  let result = 0; // initialize result

  for (let i = 1; i < k; i++) {
    // iterate through hash array
    if (hash[i] > max) {
      // if current count is greater than max count
      max = hash[i]; // update max count
      result = i; // update result to current element
    }
  }

  return result;
}
