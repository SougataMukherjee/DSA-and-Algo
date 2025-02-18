function topView(root) {
  // Base case
  if (root === null) {
    return [];
  }

  // Queue for level order traversal
  let queue = [];

  // Map to store nodes at a particular horizontal
  // distance
  let map = new Map();

  // Track the minimum horizontal distance
  let minDistance = Number.MAX_VALUE;

  // Start with the root at horizontal distance 0
  queue.push([root, 0]);

  while (queue.length > 0) {
    let [temp, d] = queue.shift();

    // Update the minimum horizontal distance
    minDistance = Math.min(minDistance, d);

    // If the horizontal distance is not yet in the map,
    // add it
    if (!map.has(d)) {
      map.set(d, temp.data);
    }

    // Add left child with horizontal distance d - 1
    if (temp.left) {
      queue.push([temp.left, d - 1]);
    }

    // Add right child with horizontal distance d + 1
    if (temp.right) {
      queue.push([temp.right, d + 1]);
    }
  }

  // Create the result array with size equal to map size
  let ans = new Array(map.size);

  // Populate the result array using the map
  for (let [key, value] of map) {
    ans[key - minDistance] = value;
  }

  return ans;
}
