function Paths(root) {
  let ans = [];
  // Temporary array to store the current path
  let curr = [];

  // Helper function to recursively find all paths
  function pathsUtil(node) {
    // Base case: If the current node is null, return
    if (node === null) {
      return;
    }

    // Add the current node's data to the current path
    curr.push(node.data);

    // If the current node is a leaf node (no left or right child), add the path
    // to ans
    if (node.left === null && node.right === null) {
      ans.push([...curr]); // Add a copy of the current path to the result
    } else {
      // Recursively visit the left and right subtrees
      pathsUtil(node.left); // Visit the left subtree first
      pathsUtil(node.right); // Then visit the right subtree
    }

    // Backtrack by removing the last node from the current path
    curr.pop();
  }

  // Start the recursive traversal from the root
  pathsUtil(root);

  // Return the list of all paths from root to leaf nodes
  return ans;
}
