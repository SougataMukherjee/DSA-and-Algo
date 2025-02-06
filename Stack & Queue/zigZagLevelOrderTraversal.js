function zigzagLevelOrder(root) {
  if (!root) return [];

  let queue = [root];
  let result = [];
  let flag = false; //check move from right to left or left to right

  while (queue.length > 0) {
    let size = queue.length;
    let level = [];

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (flag) {
      level.reverse(); //reverse the lavel array
    }

    result.push(level);
    flag = !flag; // Toggle flag for next level
  }

  return result;
}
