//logic visiting all the nodes of a binary tree level by level, using a queue to keep track of nodes at each level and adding their values to the result array
//BFS is like visiting nodes level by level in a binary tree (level-order traversal).

function levelOrder(root) {
  if (!root) return [];

  const res = [];
  // Create a queue initialized with the root node
  const queue = [root];

  while (queue.length > 0) {
    const levelLength = queue.length;
    const levelNodes = []; // Temporary array to store nodes at the current level

    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift();

      // Collect the value of the current node
      levelNodes.push(node.val);

      //level wise push the left and right child node to the queue
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // Push the collected nodes of this level to the result
    res.push(levelNodes);
  }

  return res;
}
