function nodesAtOddLevels(root) {
  let oddNodes = [];
  this.nodesAtOddLevelsUtil(root, 1, oddNodes);
  return oddNodes;
}

function nodesAtOddLevelsUtil(root, level, oddNodes) {
  if (root == null) {
    return;
  }
  if (level % 2 !== 0) {
    oddNodes.push(root.data);
  }

  this.nodesAtOddLevelsUtil(root.left, level + 1, oddNodes);
  this.nodesAtOddLevelsUtil(root.right, level + 1, oddNodes);
}
