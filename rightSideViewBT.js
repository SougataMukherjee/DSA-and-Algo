//<--1)--
//<--2---3)--
//<--4--5)------
//return 1,3,5
//logic Traverse the tree level by level using a queue, and at each level, add the rightmost node's value to the result

function rightSideView(root) {
  if (!root) return [];

  const res = [];
  // Create a queue initialized with the root node
  const queue = [root];

  while (queue.length > 0) {
    const levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift();
      //right most node push to the result from every level
      //for left side view only changes if if(i===0)
      if (i === levelLength - 1) {
        res.push(node.val);
      }
      //level wise push the left and right child node to the queue
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return res;
}
